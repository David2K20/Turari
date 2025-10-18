'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { ReactNode } from 'react'

// Initialize Stripe with publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

interface StripeProviderProps {
  children: ReactNode
  clientSecret: string
}

/**
 * Stripe Elements Provider
 * Wraps payment form with Stripe context
 */
export default function StripeProvider({ 
  children, 
  clientSecret 
}: StripeProviderProps) {
  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#000000',
        colorBackground: '#ffffff',
        colorText: '#000000',
        colorDanger: '#df1b41',
        fontFamily: 'Inter, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '6px',
      },
    },
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  )
}
