export interface AddProductInputDto {
  category: string
  colors: Array<{
    name: string
    bgColor: string
    selectedColor: string
  }>

  createdAt?: Date
  description: string
  details: Array<{
    name: string
    items: string[]
  }>

  id?: string
  images: Array<{
    id: string
    name: string
    src: string
    alt: string
  }>

  name: string
  price: number
  rating: number
  size: string[]
  stock: number
  subcategory: string
  updatedAt?: Date
}
