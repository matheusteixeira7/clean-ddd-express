import type ProductRepository from '#modules/product/repository/product.repository'
import { type AddProductInputDto, type AddProductOutputDto } from '#modules/product/usecase/add-product/add-product.dto'
import Product from '#modules/product/domain/product.entity'
import type UseCaseInterface from '#seedwork/usecase/usecase.interface'

export default class AddProductUseCase implements UseCaseInterface {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (input: AddProductInputDto): Promise<AddProductOutputDto> {
    const props = {
      id: input.id,
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

    return {
      id: product.id,
      category: product.category,
      colors: product.colors,
      createdAt: product.createdAt,
      description: product.description,
      details: product.details,
      images: product.images,
      name: product.name,
      price: product.price,
      rating: product.rating,
      size: product.size,
      stock: product.stock,
      subcategory: product.subcategory,
      updatedAt: product.updatedAt
    }
  }
}
