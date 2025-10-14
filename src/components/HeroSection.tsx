'use client'

import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Headline */}
          <h1 className="heading-luxury text-4xl md:text-6xl lg:text-7xl font-light text-primary mb-6 leading-tight">
            Scent Beyond
            <br />
            <span className="font-medium">Ordinary</span>
          </h1>

          {/* Subtext */}
          <p className={`font-inter text-lg md:text-xl text-secondary mb-12 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover exceptional fragrances that capture your essence and create unforgettable moments.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-primary">
              Shop Now
            </button>
            
            <button className="btn-secondary">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Simple scroll indicator */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center text-secondary/60 cursor-pointer">
            <span className="font-inter text-sm mb-2">Discover More</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection