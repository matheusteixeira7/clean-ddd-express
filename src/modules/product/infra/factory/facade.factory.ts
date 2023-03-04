import AddProductUseCase from '#modules/product/domain/usecase/add-product/add-product.usecase'
import CheckStockUseCase from '#modules/product/domain/usecase/check-stock/check-stock.usecase'
import ProductFacade from '#modules/product/application/facade/product.facade'
import ProductRepository from '#modules/product/infra/repository/product.repository'
import { type ProductFacadeInterface } from '#modules/product/application/facade/product.facade.interface'

export default function makeProductFacade (): ProductFacadeInterface {
  const productRepository = new ProductRepository()
  const addProductUseCase = new AddProductUseCase(productRepository)
  const checkStockUseCase = new CheckStockUseCase(productRepository)

  return new ProductFacade({
    addProductUseCase,
    checkStockUseCase
  })
}
