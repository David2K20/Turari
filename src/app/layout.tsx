import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import { CartProvider } from '@/contexts/CartContext'
import PageLoader from '@/components/PageLoader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Turari - Luxury Fragrances',
  description: 'Discover exquisite fragrances that capture the essence of luxury. Turari offers premium perfumes crafted with the finest ingredients.',
  keywords: ['perfume', 'fragrance', 'luxury', 'scent', 'turari', 'premium'],
  authors: [{ name: 'Turari' }],
  creator: 'Turari',
  publisher: 'Turari',
  openGraph: {
    title: 'Turari - Luxury Fragrances',
    description: 'Discover exquisite fragrances that capture the essence of luxury.',
    url: 'https://turari.com',
    siteName: 'Turari',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Turari Luxury Fragrances',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turari - Luxury Fragrances',
    description: 'Discover exquisite fragrances that capture the essence of luxury.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <PageLoader />
          <div className="min-h-screen bg-background">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
