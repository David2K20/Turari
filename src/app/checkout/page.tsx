'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const CheckoutPage = () => {
  const { items, getCartTotal, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: '',
  })

  const cartTotal = getCartTotal()
  const shippingCost = cartTotal >= 200000 ? 0 : 10000
  const total = cartTotal + shippingCost

  // Redirect if cart is empty
  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    clearCart()
    router.push('/checkout/success')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 md:mb-12 pt-20 md:pt-0">
            <h1 className="font-playfair text-2xl md:text-4xl font-bold text-primary mb-2">
              Checkout
            </h1>
            <p className="font-inter text-sm md:text-base text-secondary">
              Complete your order
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-lg shadow-subtle p-6">
                  <h2 className="font-playfair text-xl font-semibold text-primary mb-4">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block font-inter text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                        placeholder="oreoluwadavid08@gmail.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block font-inter text-sm font-medium text-primary mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                          placeholder="Oreoluwa"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block font-inter text-sm font-medium text-primary mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                          placeholder="David"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-inter text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                        placeholder="+234 700 000 0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-lg shadow-subtle p-6">
                  <h2 className="font-playfair text-xl font-semibold text-primary mb-4">
                    Shipping Address
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block font-inter text-sm font-medium text-primary mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                        placeholder="123 Ogunmeps Street"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block font-inter text-sm font-medium text-primary mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                          placeholder="Lagos"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="postalCode" className="block font-inter text-sm font-medium text-primary mb-2">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                          placeholder="100001"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block font-inter text-sm font-medium text-primary mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm"
                        placeholder="Nigeria"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-subtle p-6 sticky top-24">
                  <h2 className="font-playfair text-xl font-semibold text-primary mb-6">
                    Order Summary
                  </h2>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-inter text-sm font-medium text-primary truncate">
                            {item.name}
                          </h3>
                          <p className="font-inter text-xs text-secondary">
                            Qty: {item.quantity}
                          </p>
                          <p className="font-inter text-sm font-semibold text-primary mt-1">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-3 mb-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between font-inter text-sm">
                      <span className="text-secondary">Subtotal</span>
                      <span className="text-primary font-medium">{formatPrice(getCartTotal())}</span>
                    </div>
                    
                    <div className="flex justify-between font-inter text-sm">
                      <span className="text-secondary">Shipping</span>
                      <span className="text-primary font-medium">
                        {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between font-inter">
                        <span className="text-primary font-semibold">Total</span>
                        <span className="text-primary font-bold text-lg">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-primary text-white py-3 rounded-lg font-inter font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Proceed to Payment'
                    )}
                  </button>

                  <Link href="/cart">
                    <button
                      type="button"
                      className="w-full border border-primary text-primary py-3 rounded-lg font-inter font-medium hover:bg-gray-50 transition-all duration-300"
                    >
                      Back to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CheckoutPage
