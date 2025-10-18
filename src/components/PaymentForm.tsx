'use client'

import { useState, FormEvent } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'

interface PaymentFormProps {
  amount: number
}

export default function PaymentForm({ amount }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setErrorMessage(null)

    try {
      // Submit payment to Stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
        redirect: 'if_required',
      })

      if (error) {
        // Payment failed
        setErrorMessage(error.message || 'Payment failed. Please try again.')
        setIsProcessing(false)
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment succeeded
        console.log('✅ Payment successful!')
        router.push(`/checkout/success?payment_intent=${paymentIntent.id}`)
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred. Please try again.')
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Element */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
          Payment Information
        </h3>
        
        <PaymentElement
          options={{
            layout: 'tabs',
          }}
        />
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-inter text-sm font-medium text-red-800">
                Payment Error
              </p>
              <p className="font-inter text-sm text-red-700 mt-1">
                {errorMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-primary text-white py-4 rounded-lg font-inter font-medium text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing Payment...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pay {new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN',
              minimumFractionDigits: 0,
            }).format(amount)}
          </>
        )}
      </button>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 text-secondary text-sm">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="font-inter text-xs">
          Secured by Stripe • Your payment information is encrypted
        </span>
      </div>
    </form>
  )
}
