'use client'

import { useState } from 'react'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import { featuredProducts, formatPrice } from '@/lib/data'
import { Product } from '@/types'
import { useCart } from '@/contexts/CartContext'
import Toast from './Toast'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <div
      className="group relative bg-white rounded-lg shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-all duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
        />

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-inter uppercase tracking-wide">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="heading-luxury text-lg font-medium text-primary mb-1">
          {product.name}
        </h3>

        {/* Product Category */}
        <p className="font-inter text-sm text-secondary mb-3">
          {product.category} • {product.size}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="font-inter text-lg font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          
          {/* Quick Add Button (Always visible) */}
          <button
            onClick={() => onAddToCart(product)}
            className="bg-primary text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
            aria-label="Add to cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const FeaturedProducts = () => {
  const { addToCart } = useCart()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  
  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setToastMessage(product.name)
    setShowToast(true)
  }

  return (
    <>
      {showToast && toastMessage && (
        <Toast
          message={toastMessage}
          productImage={featuredProducts.find(p => p.name === toastMessage)?.image}
          productName={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      
      <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-luxury text-3xl md:text-4xl font-medium text-primary mb-4">
            Signature Collection
          </h2>
          <p className="font-inter text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Carefully curated fragrances that define luxury and embody the art of fine perfumery.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <TransitionLink href="/shop">
            <button className="btn-secondary">
              Shop Now
            </button>
          </TransitionLink>
        </div>
      </div>
    </section>
    </>
  )
}

export default FeaturedProducts