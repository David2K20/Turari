'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { featuredProducts, formatPrice } from '@/lib/data'
import { Product } from '@/types'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useCart } from '@/contexts/CartContext'
import Toast from '@/components/Toast'

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('featured')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const { addToCart } = useCart()

  const allProducts = featuredProducts
  const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))]

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? allProducts 
      : allProducts.filter(p => p.category === selectedCategory)

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return sorted
  }, [selectedCategory, sortBy, allProducts])

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setToastMessage(product.name)
    setShowToast(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {showToast && toastMessage && (
        <Toast
          message={toastMessage}
          productImage={featuredProducts.find(p => p.name === toastMessage)?.image}
          productName={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      
      <Navigation />
      
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-white to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Our Collection
          </h1>
          <p className="font-inter text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our curated selection of exceptional fragrances, each crafted to tell a unique story and complement your individual style.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="w-full md:w-auto">
              <label className="font-inter text-sm font-medium text-secondary mb-3 block">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 font-inter text-sm font-medium rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-subtle'
                        : 'bg-white text-secondary hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-auto">
              <label htmlFor="sort" className="font-inter text-sm font-medium text-secondary mb-3 block">
                Sort by
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto px-4 py-2 font-inter text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-inter text-sm text-secondary">
              Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'fragrance' : 'fragrances'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filteredAndSortedProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-inter text-xs font-medium text-primary">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="heading-luxury text-lg font-medium text-primary mb-1">
                    {product.name}
                  </h3>
                  
                  <p className="font-inter text-sm text-secondary mb-3">
                    {product.category} • {product.size}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-inter text-lg font-semibold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
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
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="mb-6">
                <svg className="w-20 h-20 mx-auto text-secondary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
                No fragrances found
              </h3>
              <p className="font-inter text-secondary mb-6">
                Try adjusting your filters to see more options
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSortBy('featured')
                }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ShopPage