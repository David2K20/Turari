'use client'

import { useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import TransitionLink from '@/components/TransitionLink'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

function SuccessContent() {
  const searchParams = useSearchParams()
  const { clearCart } = useCart()
  const paymentIntentId = searchParams.get('payment_intent')
  const hasCleared = useRef(false)

  // Clear cart on success (only once)
  useEffect(() => {
    if (paymentIntentId && !hasCleared.current) {
      clearCart()
      hasCleared.current = true
      console.log('✅ Cart cleared after successful payment')
    }
  }, [paymentIntentId, clearCart])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg 
                className="w-10 h-10 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Order Confirmed!
          </h1>
          <p className="font-inter text-base md:text-lg text-secondary mb-8 max-w-md mx-auto">
            Thank you for your purchase. Your order has been successfully placed and you will receive a confirmation email shortly.
          </p>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-subtle p-6 mb-8 text-left">
          <h2 className="font-playfair text-xl font-semibold text-primary mb-4">
            What&apos;s Next?
          </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-inter text-sm font-medium text-primary">Confirmation Email</p>
                  <p className="font-inter text-xs text-secondary">Check your inbox for order details and tracking information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <p className="font-inter text-sm font-medium text-primary">Order Processing</p>
                  <p className="font-inter text-xs text-secondary">Your items will be carefully prepared and packaged</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="font-inter text-sm font-medium text-primary">Fast Delivery</p>
                  <p className="font-inter text-xs text-secondary">Estimated delivery in 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink href="/shop">
              <button className="bg-primary text-white px-8 py-3 font-inter font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto">
                Continue Shopping
              </button>
            </TransitionLink>
            
            <TransitionLink href="/">
              <button className="border border-primary text-primary px-8 py-3 font-inter font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
                Back to Home
              </button>
            </TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const CheckoutSuccessPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-inter text-secondary">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

export default CheckoutSuccessPage
