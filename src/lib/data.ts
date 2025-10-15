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
,
  {
    id: '5',
    name: 'Azure Dreams',
    description: 'Fresh aquatic notes blended with coastal herbs, evoking endless summer days by the sea.',
    price: 95000,
    image: '/images/perfume_7.webp',
    images: ['/images/perfume_7.webp'],
    category: 'Aquatic',
    scent_notes: {
      top: ['Sea Salt', 'Bergamot', 'Mint'],
      middle: ['Marine Notes', 'Sage', 'Lavender'],
      base: ['Driftwood', 'Amber', 'Musk']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Crimson Silk',
    description: 'Opulent rose absolute paired with velvety vanilla, a timeless expression of romance.',
    price: 110000,
    image: '/images/perfume_8.webp',
    images: ['/images/perfume_8.webp'],
    category: 'Floral',
    scent_notes: {
      top: ['Turkish Rose', 'Pink Pepper'],
      middle: ['Damask Rose', 'Iris', 'Violet'],
      base: ['Vanilla', 'Patchouli', 'Sandalwood']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'Golden Hour',
    description: 'Warm amber and honey intertwine with spices, capturing the magic of twilight.',
    price: 125000,
    image: '/images/perfume_9.webp',
    images: ['/images/perfume_9.webp'],
    category: 'Oriental',
    scent_notes: {
      top: ['Mandarin', 'Cardamom'],
      middle: ['Honey', 'Jasmine', 'Cinnamon'],
      base: ['Amber', 'Tonka Bean', 'Vanilla']
    },
    size: '30ml',
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Midnight Bloom',
    description: 'Intoxicating night-blooming jasmine with mysterious dark woods and musk.',
    price: 135000,
    image: '/images/perfume_10.webp',
    images: ['/images/perfume_10.webp'],
    category: 'Floral',
    scent_notes: {
      top: ['Night Jasmine', 'Tuberose'],
      middle: ['Gardenia', 'Orange Blossom'],
      base: ['Black Musk', 'Ebony Wood', 'Vanilla']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '9',
    name: 'Forest Path',
    description: 'Crisp pine and cedar with earthy moss, a journey through untouched wilderness.',
    price: 98000,
    image: '/images/perfume_11.webp',
    images: ['/images/perfume_11.webp'],
    category: 'Woody',
    scent_notes: {
      top: ['Pine Needle', 'Juniper', 'Bergamot'],
      middle: ['Cedar', 'Cypress', 'Oakmoss'],
      base: ['Vetiver', 'Patchouli', 'Musk']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '10',
    name: 'Pearl Essence',
    description: 'Delicate white flowers and soft musk create an ethereal, luminous aura.',
    price: 105000,
    image: '/images/perfume_12.webp',
    images: ['/images/perfume_12.webp'],
    category: 'Floral',
    scent_notes: {
      top: ['White Peony', 'Freesia'],
      middle: ['Magnolia', 'Lily of the Valley'],
      base: ['White Musk', 'Cashmere Wood']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '11',
    name: 'Ember Nights',
    description: 'Smoky leather and spiced rum with dark chocolate undertones for bold sophistication.',
    price: 165000,
    image: '/images/perfume_13.webp',
    images: ['/images/perfume_13.webp'],
    category: 'Oriental',
    scent_notes: {
      top: ['Rum', 'Cinnamon', 'Nutmeg'],
      middle: ['Tobacco', 'Leather', 'Clove'],
      base: ['Dark Chocolate', 'Vetiver', 'Benzoin']
    },
    size: '30ml',
    inStock: true,
    featured: false
  },
  {
    id: '12',
    name: 'Ivory Breeze',
    description: 'Light and airy with jasmine tea and bamboo, perfect for everyday elegance.',
    price: 78000,
    image: '/images/perfume_14.webp',
    images: ['/images/perfume_14.webp'],
    category: 'Fresh',
    scent_notes: {
      top: ['Green Tea', 'Bamboo', 'Citrus'],
      middle: ['Jasmine', 'White Rose', 'Lily'],
      base: ['Soft Musk', 'Cedar', 'Amber']
    },
    size: '50ml',
    inStock: true,
    featured: false
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