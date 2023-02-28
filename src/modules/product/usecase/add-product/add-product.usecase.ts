import type ProductRepository from '#modules/product/repository/product.repository'
import { type AddProductInputDto } from '#modules/product/usecase/add-product/add-product.dto'
import Product from '#modules/product/domain/product.entity'
import type UseCaseInterface from '#seedwork/usecase/usecase.interface'

export default class AddProductUseCase implements UseCaseInterface {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (input: AddProductInputDto): Promise<void> {
    const props = {
      category: input.category,
      colors: input.colors,
      description: input.description,
      details: input.details,
      images: input.images,
      name: input.name,
      price: input.price,
      rating: input.rating,
      size: input.size,
      stock: input.stock,
      subcategory: input.subcategory
    }

    const product = new Product(props)
    await this._productRepository.add(product)
  }
}
