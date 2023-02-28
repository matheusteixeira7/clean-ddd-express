import makeProductFacade from '#modules/product/factory/facade.factory'
import { Sequelize } from 'sequelize-typescript'
import { ProductModel } from '#modules/product/repository/product.model'

const input = {
  id: '123',
  category: 'electronics',
  colors: [{ name: 'red', bgColor: '#ff0000', selectedColor: '#ff0000' }],
  description: 'A great product',
  details: [{ name: 'dimensions', items: ['10 x 20 x 30 cm'] }],
  images: [{ id: '1', name: 'product image', src: 'http://example.com/product.jpg', alt: 'Product image' }],
  name: 'Product',
  price: 99.99,
  rating: 4.5,
  size: ['M', 'L'],
  stock: 10,
  subcategory: 'laptops'
}

describe('ProductFacade', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'postgres',
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
    const productFacade = makeProductFacade()

    await productFacade.addProduct(input)

    const product = await ProductModel.findOne({ where: { id: '1' } })
    expect(product?.id).toBeDefined()
    expect(product?.name).toBe(input.name)
    expect(product?.description).toBe(input.description)
  })

  it('should check product stock', async () => {
    const productFacade = makeProductFacade()

    await productFacade.addProduct(input)

    const result = await productFacade.checkStock({ productId: '1', quantity: 1 })

    expect(result.productId).toBe(input.id)
  })
})
