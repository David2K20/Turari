'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ToastProps {
  message: string
  productImage?: string
  productName?: string
  onClose: () => void
  duration?: number
}

const Toast = ({ message, productImage, productName, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in-right">
      <div className="bg-primary text-white rounded-xl shadow-2xl overflow-hidden min-w-[320px] max-w-sm backdrop-blur-sm">
        <div className="flex items-center gap-4 p-4">
          {/* Success Icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="font-inter text-sm font-semibold text-white mb-0.5">
              Added to Cart
            </p>
            {productName && (
              <p className="font-inter text-xs text-white/80 truncate">
                {productName}
              </p>
            )}
          </div>

          {/* Product Image */}
          {productImage && (
            <div className="relative w-12 h-12 flex-shrink-0 bg-white/5 rounded-lg overflow-hidden">
              <Image
                src={productImage}
                alt={productName || 'Product'}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* View Cart Link */}
        <Link href="/cart" onClick={onClose}>
          <div className="bg-white/5 hover:bg-white/10 transition-colors duration-200 px-4 py-2.5 border-t border-white/10">
            <p className="font-inter text-xs font-medium text-white text-center">
              View Cart →
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Toast
