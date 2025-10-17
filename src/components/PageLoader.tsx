'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Global navigation state
let globalNavigating = false
let globalSetNavigating: ((val: boolean) => void) | null = null

export const startNavigation = () => {
  if (globalSetNavigating) {
    globalNavigating = true
    globalSetNavigating(true)
  }
}

const PageLoader = () => {
  const pathname = usePathname()
  const [navigating, setNavigating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Register global setter
  useEffect(() => {
    globalSetNavigating = setNavigating
    return () => {
      globalSetNavigating = null
    }
  }, [])

  // Handle route change completion
  useEffect(() => {
    if (globalNavigating) {
      // Route has changed, keep loader visible for minimum time
      const timer = setTimeout(() => {
        // Trigger fade-out
        setIsVisible(false)
        
        // Remove from DOM after animation
        setTimeout(() => {
          setNavigating(false)
          globalNavigating = false
        }, 75)
      }, 100)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [pathname])

  // Handle fade-in when navigation starts
  useEffect(() => {
    if (navigating && !isVisible) {
      // Immediate fade-in
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    }
  }, [navigating, isVisible])

  if (!navigating) return null

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-75 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
      <div className="flex flex-col items-center gap-4">
        {/* Elegant rotating perfume bottle icon */}
        <div className="relative w-12 h-12">
          {/* Outer ring */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
          
          {/* Inner animated ring */}
          <div className="absolute inset-2 border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Optional elegant text */}
        <p className="font-inter text-xs text-secondary tracking-wider uppercase animate-pulse">
          Loading
        </p>
      </div>
    </div>
  )
}

export default PageLoader
