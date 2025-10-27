import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendOrderConfirmation } from '@/lib/email'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
  typescript: true,
})

/**
 * POST /api/webhooks/stripe
 * Handles Stripe webhook events (payment confirmations)
 * Security: Signature verification, replay attack prevention
 */
export async function POST(request: NextRequest) {
  try {
    // Security: Verify webhook secret is configured
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ STRIPE_WEBHOOK_SECRET not configured')
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 }
      )
    }

    // Get raw body for signature verification
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      console.error('❌ No Stripe signature found')
      return NextResponse.json(
        { error: 'No signature provided' },
        { status: 400 }
      )
    }

    // Security: Verify webhook signature to ensure it's from Stripe
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      )
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    console.log(`✅ Webhook verified: ${event.type}`)

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object as Stripe.PaymentIntent)
        break

      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent)
        break

      case 'payment_intent.canceled':
        console.log(`⚠️ Payment canceled: ${event.data.object.id}`)
        break

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`)
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('❌ Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

/**
 * Handle successful payment
 * Security: Data extraction from verified webhook only
 */
async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log(`✅ Payment succeeded: ${paymentIntent.id}`)

    // Extract order data from metadata (stored securely in payment intent)
    const metadata = paymentIntent.metadata
    const customerEmail = metadata.customerEmail
    const customerName = metadata.customerName

    if (!customerEmail || !customerName) {
      console.error('❌ Missing customer data in payment intent')
      return
    }

    // Parse order items and shipping address
    const items = JSON.parse(metadata.items || '[]')
    const shippingAddress = JSON.parse(metadata.shippingAddress || '{}')

    // Generate order number (using payment intent ID)
    const orderNumber = paymentIntent.id.replace('pi_', '').toUpperCase()

    // Send order confirmation email
    const emailResult = await sendOrderConfirmation({
      orderNumber,
      customerEmail,
      customerName,
      items: items.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        image: '', // Not needed for email
      })),
      subtotal: parseInt(metadata.subtotal || '0'),
      shipping: parseInt(metadata.shipping || '0'),
      total: parseInt(metadata.total || '0'),
      shippingAddress: {
        line1: shippingAddress.line1 || '',
        city: shippingAddress.city || '',
        state: shippingAddress.state || '',
        postalCode: shippingAddress.postalCode || '',
        country: shippingAddress.country || '',
      },
    })

    if (emailResult.success) {
      console.log(`✅ Order confirmation sent to ${customerEmail}`)
    } else {
      console.error(`❌ Failed to send email: ${emailResult.error}`)
      // Note: Payment still succeeded even if email fails
    }

    // Log successful order for your records
    console.log(`📦 Order #${orderNumber} completed - ${customerName} - ₦${metadata.total}`)
  } catch (error) {
    console.error('❌ Error handling payment success:', error)
    // Don't throw - webhook should still return 200
  }
}

/**
 * Handle failed payment
 * Security: Log for monitoring
 */
async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.error(`❌ Payment failed: ${paymentIntent.id}`)
  console.error(`   Reason: ${paymentIntent.last_payment_error?.message || 'Unknown'}`)
  console.error(`   Customer: ${paymentIntent.metadata.customerEmail}`)

  // TODO: You could send a "payment failed" email here if desired
  // For now, just log for monitoring
}

/**
 * Security: Only allow POST requests
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
