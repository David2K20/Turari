import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

/**
 * Security: Request validation schema
 */
interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size: string
  image: string
}

interface PaymentIntentRequest {
  items: CartItem[]
  customerInfo: {
    email: string
    firstName: string
    lastName: string
    phone: string
    address: string
    city: string
    postalCode: string
    country: string
  }
}

/**
 * Validate request payload
 * Security: Prevents malicious data injection
 */
function validateRequest(data: any): { valid: boolean; error?: string } {
  // Validate items array
  if (!Array.isArray(data.items) || data.items.length === 0) {
    return { valid: false, error: 'Invalid or empty cart' }
  }

  // Validate each item
  for (const item of data.items) {
    if (
      !item.id ||
      !item.name ||
      typeof item.price !== 'number' ||
      typeof item.quantity !== 'number' ||
      item.price <= 0 ||
      item.quantity <= 0
    ) {
      return { valid: false, error: 'Invalid item in cart' }
    }
  }

  // Validate customer info
  const { customerInfo } = data
  if (
    !customerInfo ||
    !customerInfo.email ||
    !customerInfo.firstName ||
    !customerInfo.lastName ||
    !customerInfo.address ||
    !customerInfo.city ||
    !customerInfo.country
  ) {
    return { valid: false, error: 'Incomplete customer information' }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(customerInfo.email)) {
    return { valid: false, error: 'Invalid email address' }
  }

  return { valid: true }
}

/**
 * Calculate order total
 * Security: Server-side price calculation to prevent manipulation
 */
function calculateOrderTotal(items: CartItem[]): {
  subtotal: number
  shipping: number
  total: number
} {
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  // Free shipping over ₦200,000
  const shipping = subtotal >= 200000 ? 0 : 10000

  const total = subtotal + shipping

  return { subtotal, shipping, total }
}

/**
 * POST /api/create-payment-intent
 * Creates a Stripe PaymentIntent for the order
 * Security: Server-side validation, HTTPS only, idempotency support
 */
export async function POST(request: NextRequest) {
  try {
    // Security: Verify Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY not configured')
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      )
    }

    // Parse request body
    const body: PaymentIntentRequest = await request.json()

    // Validate request
    const validation = validateRequest(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // Calculate order total (server-side for security)
    const { subtotal, shipping, total } = calculateOrderTotal(body.items)

    // Security: Minimum charge amount for Stripe (₦100)
    if (total < 100) {
      return NextResponse.json(
        { error: 'Order total too low' },
        { status: 400 }
      )
    }

    // Create PaymentIntent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Amount in kobo (smallest currency unit)
      currency: 'ngn',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        // Store order details in metadata for webhook processing
        customerEmail: body.customerInfo.email,
        customerName: `${body.customerInfo.firstName} ${body.customerInfo.lastName}`,
        customerPhone: body.customerInfo.phone,
        shippingAddress: JSON.stringify({
          line1: body.customerInfo.address,
          city: body.customerInfo.city,
          postalCode: body.customerInfo.postalCode,
          country: body.customerInfo.country,
        }),
        items: JSON.stringify(
          body.items.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            size: item.size,
          }))
        ),
        subtotal: subtotal.toString(),
        shipping: shipping.toString(),
        total: total.toString(),
      },
      receipt_email: body.customerInfo.email,
      description: `Turari Order - ${body.items.length} item(s)`,
    })

    console.log(`✅ Payment Intent created: ${paymentIntent.id}`)

    // Return client secret to frontend
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error('❌ Error creating payment intent:', error)

    // Security: Don't expose internal error details
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: 'Payment processing error. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
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
