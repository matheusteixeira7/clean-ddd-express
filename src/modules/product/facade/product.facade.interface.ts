export interface AddProductFacadeInputDto {
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

export interface CheckStockFacadeInputDto {
  productId: string
  quantity: number
}

export interface CheckStockFacadeOutputDto {
  productId: string
  available: boolean
}

export interface ProductFacadeInterface {
  addProduct: (input: AddProductFacadeInputDto) => Promise<void>
  checkStock: (input: CheckStockFacadeInputDto) => Promise<CheckStockFacadeOutputDto>
}
