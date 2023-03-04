import { Sequelize } from 'sequelize-typescript'
import { ProductModel } from '#modules/product/infra/repository/product.model'
import Product from '#modules/product/domain/entity/product.entity'
import ProductRepository from '#modules/product/infra/repository/product.repository'

const input = {
  id: '123',
  category: 'electronics',
  colors: [{ name: 'red', bgColor: '#ff0000', selectedColor: '#ff0000' }],
  description: 'A great product',
  details: [{ name: 'dimensions', items: ['10 x 20 x 30 cm'] }],
  images: [{ id: '1', name: 'product image', src: 'https://example.com/product.jpg', alt: 'Product image' }],
  name: 'Product',
  price: 99.99,
  rating: 4.5,
  size: ['M', 'L'],
  stock: 10,
  subcategory: 'laptops'
}

describe('Product repository test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([ProductModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a product', async () => {
    const product = new Product(input)
    const productRepository = new ProductRepository()
    await productRepository.add(product)
    const productDb = await productRepository.find(product.id)

    expect(productDb?.id).toBe(input.id)
    expect(productDb?.name).toBe(input.name)
    expect(productDb?.description).toBe(input.description)
    expect(productDb?.price).toBe(input.price)
    expect(productDb?.rating).toBe(input.rating)
    expect(productDb?.stock).toBe(input.stock)
    expect(productDb?.subcategory).toBe(input.subcategory)
    expect(productDb?.category).toBe(input.category)
    expect(productDb?.size).toEqual(input.size)
    expect(productDb?.images).toEqual(input.images)
    expect(productDb?.colors).toEqual(input.colors)
    expect(productDb?.details).toEqual(input.details)
    expect(productDb?.createdAt).toBeDefined()
    expect(productDb?.updatedAt).toBeDefined()
  })

  it('should find a product', async () => {
    const product = new Product(input)
    const productRepository = new ProductRepository()
    await productRepository.add(product)
    const productDb = await productRepository.find(product.id)
    expect(productDb?.id).toBe(product.id)
  })

  it('should throw error if product given id is not found', async () => {
    const invalidId = 'invalid_id'
    const productRepository = new ProductRepository()
    await expect(async () => await productRepository.find(invalidId)).rejects.toThrowError(
        `Product with id ${invalidId} not found`
    )
  })
})
