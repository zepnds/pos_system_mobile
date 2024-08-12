// Define interfaces for nested structures
export interface Stock {
  quantity: number
  location: string
}

export interface Supplier {
  supplierID: string
  name: string
  contact: string
}

export interface Attributes {
  color: string
  size: string
  weight: string
}

// Define the main Product interface
export interface Product {
  productID: string
  name: string
  category: string
  price: number
  stock: Stock
  description: string
  supplier: Supplier
  tags: string[]
  attributes: Attributes
}
