import type UseCaseInterface from '#seedwork/usecase/usecase.interface'
import {
  type AddProductFacadeInputDto,
  type CheckStockFacadeInputDto,
  type CheckStockFacadeOutputDto,
  type ProductFacadeInterface
} from '#modules/product/application/facade/product.facade.interface'

interface UseCaseProps {
  addProductUseCase: UseCaseInterface
  checkStockUseCase: UseCaseInterface
}

export default class ProductFacade implements ProductFacadeInterface {
  private readonly _addProductUseCase: UseCaseInterface
  private readonly _checkStockUseCase: UseCaseInterface

  constructor (props: UseCaseProps) {
    this._addProductUseCase = props.addProductUseCase
    this._checkStockUseCase = props.checkStockUseCase
  }

  async addProduct (input: AddProductFacadeInputDto): Promise<void> {
    await this._addProductUseCase.execute(input)
  }

  async checkStock (input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
    return await this._checkStockUseCase.execute(input)
  }
}
