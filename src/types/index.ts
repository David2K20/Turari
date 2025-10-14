// Product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images: string[]
  category: string
  scent_notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  size: string
  inStock: boolean
  featured: boolean
}

// Cart types
export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

// Checkout types
export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface CheckoutData extends ShippingInfo {
  paymentIntentId?: string
}

// Filter and search types
export interface ProductFilters {
  category?: string
  priceRange?: {
    min: number
    max: number
  }
  inStock?: boolean
  featured?: boolean
}

export interface SortOption {
  value: string
  label: string
}