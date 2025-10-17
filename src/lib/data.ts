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
  },
  {
    id: '13',
    name: 'Sapphire Serenade',
    description: 'Elegant blend of iris and violet with powdery musks, creating an air of refined mystery.',
    price: 142000,
    image: '/images/perfume_15.webp',
    images: ['/images/perfume_15.webp'],
    category: 'Floral',
    scent_notes: {
      top: ['Bergamot', 'Aldehydes'],
      middle: ['Iris', 'Violet', 'Ylang-Ylang'],
      base: ['Powdery Musk', 'Sandalwood', 'Amber']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '14',
    name: 'Desert Mirage',
    description: 'Exotic spices and warm sand notes transport you to golden dunes under starlit skies.',
    price: 115000,
    image: '/images/perfume_16.webp',
    images: ['/images/perfume_16.webp'],
    category: 'Oriental',
    scent_notes: {
      top: ['Cardamom', 'Star Anise', 'Ginger'],
      middle: ['Papyrus', 'Frankincense', 'Myrrh'],
      base: ['Amber', 'Cedarwood', 'Leather']
    },
    size: '30ml',
    inStock: true,
    featured: false
  },
  {
    id: '15',
    name: 'Jade Whisper',
    description: 'Crisp green notes with fresh cucumber and bamboo, evoking tranquil Asian gardens.',
    price: 82000,
    image: '/images/perfume_17.webp',
    images: ['/images/perfume_17.webp'],
    category: 'Fresh',
    scent_notes: {
      top: ['Cucumber', 'Green Tea', 'Mint'],
      middle: ['Bamboo', 'Water Lotus', 'White Tea'],
      base: ['White Musk', 'Vetiver', 'Blonde Woods']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '16',
    name: 'Burgundy Eclipse',
    description: 'Rich red fruits and dark berries wrapped in sensual musk, perfect for evening allure.',
    price: 128000,
    image: '/images/perfume_18.webp',
    images: ['/images/perfume_18.webp'],
    category: 'Fruity',
    scent_notes: {
      top: ['Blackcurrant', 'Raspberry', 'Cherry'],
      middle: ['Plum', 'Black Rose', 'Praline'],
      base: ['Velvet Musk', 'Patchouli', 'Vanilla']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '17',
    name: 'Silver Cascade',
    description: 'Cool and refreshing like a mountain stream, with crisp aldehydes and aquatic florals.',
    price: 89000,
    image: '/images/perfume_19.webp',
    images: ['/images/perfume_19.webp'],
    category: 'Aquatic',
    scent_notes: {
      top: ['Aldehydes', 'Water Notes', 'Mint'],
      middle: ['Water Lily', 'Peony', 'Marine Accord'],
      base: ['Ambergris', 'White Musk', 'Driftwood']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '18',
    name: 'Mahogany Embrace',
    description: 'Deep, rich woods with smoky leather and tobacco, exuding masculine confidence.',
    price: 155000,
    image: '/images/perfume_20.webp',
    images: ['/images/perfume_20.webp'],
    category: 'Woody',
    scent_notes: {
      top: ['Black Pepper', 'Elemi', 'Pink Pepper'],
      middle: ['Tobacco Leaf', 'Leather', 'Guaiac Wood'],
      base: ['Mahogany', 'Vetiver', 'Tonka Bean']
    },
    size: '30ml',
    inStock: true,
    featured: false
  },
  {
    id: '19',
    name: 'Lunar Blossom',
    description: 'Ethereal night flowers with shimmering aldehydes, capturing moonlit gardens.',
    price: 118000,
    image: '/images/perfume_21.webp',
    images: ['/images/perfume_21.webp'],
    category: 'Floral',
    scent_notes: {
      top: ['Aldehydes', 'White Pepper', 'Neroli'],
      middle: ['Night Blooming Cereus', 'Moonflower', 'Jasmine'],
      base: ['White Amber', 'Cashmere Musk', 'Sandalwood']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '20',
    name: 'Amber Velvet',
    description: 'Warm, enveloping amber with creamy vanilla and benzoin, like liquid gold on skin.',
    price: 138000,
    image: '/images/perfume_22.webp',
    images: ['/images/perfume_22.webp'],
    category: 'Oriental',
    scent_notes: {
      top: ['Orange Blossom', 'Clary Sage'],
      middle: ['Amber', 'Honey', 'Heliotrope'],
      base: ['Vanilla', 'Benzoin', 'Labdanum']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '21',
    name: 'Coastal Breeze',
    description: 'Fresh maritime notes with salty air and sun-warmed driftwood, capturing seaside escapes.',
    price: 92000,
    image: '/images/perfume_23.webp',
    images: ['/images/perfume_23.webp'],
    category: 'Aquatic',
    scent_notes: {
      top: ['Sea Salt', 'Lemon', 'Grapefruit'],
      middle: ['Seaweed', 'Rosemary', 'Sage'],
      base: ['Driftwood', 'Cedar', 'White Musk']
    },
    size: '50ml',
    inStock: true,
    featured: false
  },
  {
    id: '22',
    name: 'Citron Soleil',
    description: 'Bright citrus explosion with sparkling champagne notes, radiating joy and energy.',
    price: 76000,
    image: '/images/perfume_3.jpg',
    images: ['/images/perfume_3.jpg'],
    category: 'Citrus',
    scent_notes: {
      top: ['Lemon', 'Mandarin', 'Grapefruit'],
      middle: ['Champagne', 'Neroli', 'Petitgrain'],
      base: ['Light Musk', 'White Amber', 'Blonde Woods']
    },
    size: '30ml',
    inStock: true,
    featured: false
  },
  {
    id: '23',
    name: 'Twilight Rose',
    description: 'Classic rose with modern twists of pink pepper and raspberry, timeless yet contemporary.',
    price: 112000,
    image: '/images/perfume_6.jpg',
    images: ['/images/perfume_6.jpg'],
    category: 'Floral',
    scent_notes: {
      top: ['Pink Pepper', 'Raspberry', 'Bergamot'],
      middle: ['Bulgarian Rose', 'Turkish Rose', 'Geranium'],
      base: ['Patchouli', 'White Musk', 'Cashmeran']
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