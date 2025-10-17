'use client'

import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/data'
import Image from 'next/image'
import TransitionLink from '@/components/TransitionLink'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart()

  const cartTotal = getCartTotal()
  const shippingCost = cartTotal >= 200000 ? 0 : 10000
  const total = cartTotal + shippingCost

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <section className="flex-1 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Empty Cart Icon */}
            <div className="mb-8">
              <svg 
                className="w-24 h-24 mx-auto text-secondary/30" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
            </div>

            {/* Empty State Message */}
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Your cart is empty
            </h1>
            <p className="font-inter text-base md:text-lg text-secondary mb-8 max-w-md mx-auto">
              Add some items to get started and discover our exceptional fragrances
            </p>

            {/* Continue Shopping Button */}
            <TransitionLink href="/shop">
              <button className="bg-primary text-white px-8 py-3 font-inter font-medium rounded-lg hover:bg-gray-800 transition-all duration-300">
                Continue Shopping
              </button>
            </TransitionLink>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 md:mb-12 pt-20 md:pt-0">
            <h1 className="font-playfair text-2xl md:text-4xl font-bold text-primary mb-2">
              Shopping Cart
            </h1>
            <p className="font-inter text-sm md:text-base text-secondary">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-subtle p-4 md:p-6 flex gap-4"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-playfair text-base md:text-lg font-semibold text-primary truncate">
                          {item.name}
                        </h3>
                        <p className="font-inter text-xs md:text-sm text-secondary">
                          {item.category} • {item.size}
                        </p>
                      </div>
                      
                      {/* Remove Button - Desktop */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="hidden md:block text-secondary hover:text-red-600 transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 md:gap-3 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-white rounded transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        
                        <span className="font-inter text-sm md:text-base font-medium text-primary w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-white rounded transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-inter text-base md:text-lg font-semibold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="font-inter text-xs text-secondary">
                            {formatPrice(item.price)} each
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Remove Button - Mobile */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="md:hidden mt-3 text-sm font-inter text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-subtle p-6 sticky top-24">
                <h2 className="font-playfair text-xl font-semibold text-primary mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
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

                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-inter">
                      <span className="text-primary font-semibold">Total</span>
                      <span className="text-primary font-bold text-lg">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <TransitionLink href="/checkout">
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-inter font-medium hover:bg-gray-800 transition-all duration-300 mb-3">
                    Proceed to Checkout
                  </button>
                </TransitionLink>

                <TransitionLink href="/shop">
                  <button className="w-full border border-primary text-primary py-3 rounded-lg font-inter font-medium hover:bg-gray-50 transition-all duration-300">
                    Continue Shopping
                  </button>
                </TransitionLink>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-secondary">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-inter text-sm">Secure checkout</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-secondary">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <span className="font-inter text-sm">Free shipping over ₦200,000</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-secondary">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      <span className="font-inter text-sm">Easy 30-day returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CartPage
