'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ComponentProps, MouseEvent } from 'react'
import { startNavigation } from './PageLoader'

interface TransitionLinkProps extends ComponentProps<typeof Link> {
  href: string
}

/**
 * Enhanced Link component that triggers smooth page transitions
 * Use this instead of next/link for better UX with loading states
 */
export default function TransitionLink({ 
  href, 
  children, 
  onClick,
  ...props 
}: TransitionLinkProps) {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't prevent default for external links or special keys
    const isExternalLink = href.startsWith('http') || href.startsWith('mailto:')
    const isModifiedEvent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    
    if (isExternalLink || isModifiedEvent || e.defaultPrevented) {
      if (onClick) onClick(e)
      return
    }

    // For internal navigation, show loader first
    const currentPath = window.location.pathname
    const targetPath = href
    
    // Only show loader if navigating to a different page
    if (currentPath !== targetPath) {
      e.preventDefault()
      
      // Show loader immediately
      startNavigation()
      
      // Small delay to ensure loader is visible before navigation
      setTimeout(() => {
        router.push(targetPath)
      }, 10)
    }

    // Call custom onClick handler
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
