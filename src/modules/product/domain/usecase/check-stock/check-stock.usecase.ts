import type ProductGateway from '#modules/product/infra/gateway/product.gateway'
import type UseCaseInterface from '#seedwork/usecase/usecase.interface'
import { type CheckStockInputDto, type CheckStockOutputDto } from '#modules/product/domain/usecase/check-stock/check-stock.dto'

export default class CheckStockUseCase implements UseCaseInterface {
  private readonly _productRepository: ProductGateway

  constructor (productRepository: ProductGateway) {
    this._productRepository = productRepository
  }

  async execute (input: CheckStockInputDto): Promise<CheckStockOutputDto> {
    const product = await this._productRepository.find(input.productId)

    if (product.stock >= input.quantity) {
      return { productId: product.id, available: true }
    } else {
      return { productId: product.id, available: false }
    }
  }
}
