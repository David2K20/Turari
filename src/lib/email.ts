import * as brevo from '@getbrevo/brevo'

// Initialize Brevo client
const apiInstance = new brevo.TransactionalEmailsApi()

// Validate API key exists
if (!process.env.BREVO_API_KEY) {
  throw new Error('BREVO_API_KEY is not configured')
}

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
)

interface OrderItem {
  name: string
  quantity: number
  price: number
  size: string
  image: string
}

interface OrderDetails {
  orderNumber: string
  customerEmail: string
  customerName: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  shippingAddress: {
    line1: string
    city: string
    state: string
    postalCode: string
    country: string
  }
}

/**
 * Generate HTML email template for order confirmation
 * Security: All user inputs are escaped to prevent XSS
 */
function generateOrderConfirmationHTML(order: OrderDetails): string {
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const itemsHTML = order.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 15px; border-bottom: 1px solid #f0f0f0;">
        <div style="display: flex; align-items: center;">
          <div style="flex: 1;">
            <h3 style="margin: 0 0 5px 0; font-size: 16px; color: #000;">
              ${escapeHtml(item.name)}
            </h3>
            <p style="margin: 0; font-size: 14px; color: #666;">
              ${escapeHtml(item.size)} • Qty: ${item.quantity}
            </p>
          </div>
          <div style="font-weight: 600; color: #000;">
            ${formatPrice(item.price * item.quantity)}
          </div>
        </div>
      </td>
    </tr>
  `
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - Turari</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #fafafa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; font-family: 'Playfair Display', serif; font-size: 32px; color: #ffffff; font-weight: 600;">
                Turari
              </h1>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center;">
              <div style="width: 60px; height: 60px; background-color: #e8f5e9; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 30px;">✓</span>
              </div>
              <h2 style="margin: 0 0 10px 0; font-family: 'Playfair Display', serif; font-size: 28px; color: #000;">
                Order Confirmed!
              </h2>
              <p style="margin: 0; font-size: 16px; color: #666;">
                Thank you for your purchase, ${escapeHtml(order.customerName)}
              </p>
            </td>
          </tr>

          <!-- Order Number -->
          <tr>
            <td style="padding: 0 40px 30px 40px; text-align: center;">
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px; display: inline-block;">
                <p style="margin: 0; font-size: 14px; color: #666;">Order Number</p>
                <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: 600; color: #000;">
                  #${escapeHtml(order.orderNumber)}
                </p>
              </div>
            </td>
          </tr>

          <!-- Order Items -->
          <tr>
            <td style="padding: 0 40px;">
              <h3 style="margin: 0 0 20px 0; font-size: 18px; color: #000; font-weight: 600;">
                Order Details
              </h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #f0f0f0; border-radius: 6px; overflow: hidden;">
                ${itemsHTML}
              </table>
            </td>
          </tr>

          <!-- Order Summary -->
          <tr>
            <td style="padding: 30px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 8px 0; font-size: 14px; color: #666;">Subtotal</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #000; text-align: right;">
                    ${formatPrice(order.subtotal)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 14px; color: #666;">Shipping</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #000; text-align: right;">
                    ${order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}
                  </td>
                </tr>
                <tr style="border-top: 2px solid #000;">
                  <td style="padding: 15px 0 0 0; font-size: 16px; font-weight: 600; color: #000;">
                    Total
                  </td>
                  <td style="padding: 15px 0 0 0; font-size: 18px; font-weight: 700; color: #000; text-align: right;">
                    ${formatPrice(order.total)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Shipping Address -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 6px;">
                <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #000; font-weight: 600;">
                  Shipping Address
                </h3>
                <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
                  ${escapeHtml(order.shippingAddress.line1)}<br>
                  ${escapeHtml(order.shippingAddress.city)}, ${escapeHtml(order.shippingAddress.state)} ${escapeHtml(order.shippingAddress.postalCode)}<br>
                  ${escapeHtml(order.shippingAddress.country)}
                </p>
              </div>
            </td>
          </tr>

          <!-- Delivery Info -->
          <tr>
            <td style="padding: 0 40px 40px 40px; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
                📦 Estimated Delivery: 3-5 Business Days
              </p>
              <p style="margin: 0; font-size: 14px; color: #666;">
                We'll send you a shipping confirmation with tracking details once your order ships.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 30px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
                Questions? Contact us at <a href="mailto:oreoluwadavid08@gmail.com" style="color: #000; text-decoration: none;">oreoluwadavid08@gmail.com</a>
              </p>
              <p style="margin: 0; font-size: 12px; color: #999;">
                © ${new Date().getFullYear()} Turari. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

/**
 * Send order confirmation email via Brevo
 * Security: Validates all inputs and handles errors gracefully
 */
export async function sendOrderConfirmation(
  orderDetails: OrderDetails
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate required environment variables
    if (!process.env.SENDER_EMAIL || !process.env.SENDER_NAME) {
      throw new Error('Email configuration is incomplete')
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(orderDetails.customerEmail)) {
      throw new Error('Invalid customer email address')
    }

    // Create email object
    const sendSmtpEmail = new brevo.SendSmtpEmail()

    sendSmtpEmail.sender = {
      name: process.env.SENDER_NAME,
      email: process.env.SENDER_EMAIL,
    }

    sendSmtpEmail.to = [
      {
        email: orderDetails.customerEmail,
        name: orderDetails.customerName,
      },
    ]

    sendSmtpEmail.subject = `Order Confirmation - Turari #${orderDetails.orderNumber}`
    sendSmtpEmail.htmlContent = generateOrderConfirmationHTML(orderDetails)

    // Send email
    await apiInstance.sendTransacEmail(sendSmtpEmail)

    console.log(`✅ Order confirmation email sent to ${orderDetails.customerEmail}`)
    
    return { success: true }
  } catch (error) {
    console.error('❌ Failed to send order confirmation email:', error)
    
    // Don't expose internal errors to client
    return {
      success: false,
      error: 'Failed to send confirmation email. Please contact support.',
    }
  }
}
