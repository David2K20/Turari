import { Product } from '@/types'

// Featured Products Data
export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Noir Intense',
    description: 'A captivating blend of dark vanilla and smoky incense, perfect for evening sophistication.',
    price: 120000,
    image: '/images/perfume_1.jpg',
    images: [
      '/images/perfume_2.jpg'
    ],
    category: 'Oriental',
    scent_notes: {
      top: ['Bergamot', 'Pink Pepper'],
      middle: ['Rose', 'Jasmine'],
      base: ['Vanilla', 'Incense', 'Sandalwood']
    },
    size: '50ml',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Citrus Royale',
    description: 'Fresh and invigorating blend of citrus and herbs, embodying timeless elegance.',
    price: 85000,
    image: '/images/perfume_4.jpg',
    images: [
      '/images/perfume_4.jpg'
    ],
    category: 'Citrus',
    scent_notes: {
      top: ['Lemon', 'Bergamot', 'Orange'],
      middle: ['Lavender', 'Rosemary'],
      base: ['Cedar', 'Musk']
    },
    size: '30ml',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Velvet Garden',
    description: 'Luxurious floral composition with hints of peony and white tea for the modern romantic.',
    price: 95000,
    image: '/images/perfume_5.jpg',
    images: [
      '/images/perfume_5.jpg'
    ],
    category: 'Floral',
    scent_notes: {
      top: ['Peony', 'Litchi'],
      middle: ['White Tea', 'Freesia'],
      base: ['White Musk', 'Cedar']
    },
    size: '50ml',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Oud Mystique',
    description: 'Rare and precious oud with notes of saffron and amber, for the connoisseur.',
    price: 180000,
    image: '/images/perfume_2.jpg',
    images: [
      '/images/perfume_6.jpg'
    ],
    category: 'Woody',
    scent_notes: {
      top: ['Saffron', 'Rose'],
      middle: ['Oud', 'Patchouli'],
      base: ['Amber', 'Musk', 'Sandalwood']
    },
    size: '30ml',
    inStock: true,
    featured: true
  }
]

// Fragrance Categories Data
export const fragranceCategories = [
  {
    id: 'floral',
    name: 'Floral',
    tagline: 'Light. Fresh. Timeless.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🌸'
  },
  {
    id: 'woody',
    name: 'Woody',
    tagline: 'Warm. Sophisticated. Grounding.',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🌳'
  },
  {
    id: 'citrus',
    name: 'Citrus',
    tagline: 'Bright. Energetic. Uplifting.',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🍋'
  },
  {
    id: 'oriental',
    name: 'Oriental',
    tagline: 'Rich. Mysterious. Captivating.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '✨'
  }
]

// Utility function to format Nigerian Naira
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price)
}