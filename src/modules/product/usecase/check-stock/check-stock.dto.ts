export interface CheckStockInputDto {
  productId: string
  quantity: number
}

export interface CheckStockOutputDto {
  productId: string
  available: boolean
}
