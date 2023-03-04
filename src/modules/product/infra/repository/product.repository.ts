import Product from '#modules/product/domain/entity/product.entity'
import type ProductGateway from '#modules/product/infra/gateway/product.gateway'
import { ProductModel } from '#modules/product/infra/repository/product.model'

export default class ProductRepository implements ProductGateway {
  async add (product: Product): Promise<void> {
    await ProductModel.create({
      category: product.category,
      colors: product.colors,
      createdAt: product.createdAt,
      description: product.description,
      details: product.details,
      id: product.id,
      images: product.images,
      name: product.name,
      price: product.price,
      rating: product.rating,
      size: product.size,
      stock: product.stock,
      subcategory: product.subcategory,
      updatedAt: new Date()
    })
  }

  async find (id: string): Promise<Product> {
    const product = await ProductModel.findOne({
      where: { id }
    })

    if (product == null) {
      throw new Error(`Product with id ${id} not found`)
    }

    return new Product({
      category: product.category,
      colors: product.colors,
      createdAt: product.createdAt,
      description: product.description,
      details: product.details,
      id: product.id,
      images: product.images,
      name: product.name,
      price: product.price,
      rating: product.rating,
      size: product.size,
      stock: product.stock,
      subcategory: product.subcategory,
      updatedAt: product.updatedAt
    })
  }
}
