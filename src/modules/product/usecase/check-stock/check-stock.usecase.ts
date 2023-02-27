import type ProductGateway from '#modules/product/gateway/product.gateway'
import { type CheckStockInputDto, type CheckStockOutputDto } from '#modules/product/usecase/check-stock/check-stock.dto'

export default class CheckStockUseCase {
  private readonly _productRepository: ProductGateway

  constructor (productRepository: ProductGateway) {
    this._productRepository = productRepository
  }

  async execute (input: CheckStockInputDto): Promise<CheckStockOutputDto> {
    const product = await this._productRepository.find(input.productId)

    return {
      productId: product.id,
      stock: product.stock
    }
  }
}
