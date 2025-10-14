'use client'

import { useState } from 'react'
import Image from 'next/image'
import { featuredProducts, formatPrice } from '@/lib/data'
import { Product } from '@/types'

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
          className={`object-cover transition-all duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
        />
        
        {/* Add to Cart Button - Appears on hover */}
        <button
          onClick={() => onAddToCart(product)}
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-gray-800 text-white font-inter font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
            isHovered 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          Add to Cart
        </button>

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
          
          {/* Quick Add Button (Always visible on mobile) */}
          <button
            onClick={() => onAddToCart(product)}
            className="md:hidden bg-primary text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
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
  const handleAddToCart = (product: Product) => {
    // This will be connected to cart state management later
    console.log('Adding to cart:', product.name)
    
    // Show a brief success animation (you could enhance this with a toast)
    alert(`${product.name} added to cart!`)
  }

  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <button className="btn-secondary">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts