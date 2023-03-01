import type ProductGateway from '#modules/product/gateway/product.gateway'
import Product from '#modules/product/domain/product.entity'
import { ProductModel } from '#modules/product/repository/product.model'
import Id from '#seedwork/domain/value-objects/id.value-object'

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
      id: new Id(product.id).id,
      category: product.category,
      subcategory: product.subcategory,
      size: product.size,
      stock: product.stock,
      name: product.name,
      price: product.price,
      rating: product.rating,
      images: product.images,
      colors: product.colors,
      description: product.description,
      details: product.details,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    })
  }
}
