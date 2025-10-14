import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import FragranceCollections from '@/components/FragranceCollections'
import FAQSection from '@/components/SubscriptionBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Products Section */}
        <FeaturedProducts />
        
        {/* Fragrance Collections Preview */}
        <FragranceCollections />
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}
