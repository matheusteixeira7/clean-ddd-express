import makeProductFacade from '#modules/product/infra/factory/facade.factory'
import { Sequelize } from 'sequelize-typescript'
import { ProductModel } from '#modules/product/infra/repository/product.model'
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

describe('ProductFacade', () => {
  let sequelize: Sequelize
  let productFacade: ReturnType<typeof makeProductFacade>

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([ProductModel])
    await sequelize.sync()

    productFacade = makeProductFacade()
    await productFacade.addProduct(input)
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a product', async () => {
    const product = await ProductModel.findOne({ where: { id: '123' } })
    expect(product?.id).toBeDefined()
    expect(product?.name).toBe(input.name)
    expect(product?.description).toBe(input.description)
    expect(product?.price).toBe(input.price)
    expect(product?.rating).toBe(input.rating)
    expect(product?.stock).toBe(input.stock)
    expect(product?.subcategory).toBe(input.subcategory)
    expect(product?.category).toBe(input.category)
    expect(product?.size).toEqual(input.size)
    expect(product?.images).toEqual(input.images)
    expect(product?.colors).toEqual(input.colors)
    expect(product?.details).toEqual(input.details)
    expect(product?.createdAt).toBeDefined()
    expect(product?.updatedAt).toBeDefined()
  })

  it('should check product stock availability and return true', async () => {
    const result = await productFacade.checkStock({ productId: '123', quantity: 1 })
    expect(result.productId).toBe(input.id)
    expect(result.available).toBe(true)
  })

  it('should check product stock availability and return false', async () => {
    const result = await productFacade.checkStock({ productId: '123', quantity: 11 })
    expect(result.productId).toBe(input.id)
    expect(result.available).toBe(false)
  })

  it('should throw error if product given id is not found', async () => {
    await expect(productFacade.checkStock({ productId: '456', quantity: 1 })).rejects.toThrowError(
      'Product with id 456 not found'
    )
  })
})
