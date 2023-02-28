import ProductRepository from '#modules/product/repository/product.repository'
import AddProductUseCase from '#modules/product/usecase/add-product/add-product.usecase'
import CheckStockUseCase from '#modules/product/usecase/check-stock/check-stock.usecase'
import { type ProductFacadeInterface } from '#modules/product/facade/product.facade.interface'
import ProductFacade from '#modules/product/facade/product.facade'

export default function makeProductFacade (): ProductFacadeInterface {
  const productRepository = new ProductRepository()
  const addProductUseCase = new AddProductUseCase(productRepository)
  const checkStockUseCase = new CheckStockUseCase(productRepository)

  return new ProductFacade({
    addProductUseCase,
    checkStockUseCase
  })
}
