'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image - No overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_bg_img.jpg"
          alt="Luxury fragrance hero background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Headline */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Experience Elegance<br />in Every Drop
          </h1>
          <p className={`font-inter text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover exceptional fragrances that capture your essence and create unforgettable moments.
          </p>

          {/* Single CTA Button */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link href="/shop">
              <button className="bg-white text-primary px-8 py-3 font-inter font-medium tracking-wide transition-all duration-300 hover:bg-gray-100 rounded-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection