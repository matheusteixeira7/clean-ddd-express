import { app, sequelize } from '../express'
import request from 'supertest'

describe('E2E Product Test', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })

  afterAll(async () => {
    await sequelize.close()
  })

  it('should create a product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
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
      })

    expect(response.statusCode).toBe(201)
  })

  it('should return status code 500 if input params are wrong', async function () {
    return await request(app)
      .post('/products')
      .send({
        category: 'electronics',
        colors: [{ name: 'red', bgColor: '#ff0000', selectedColor: '#ff0000' }],
        description: 'A great product',
        details: [{ name: 'dimensions', items: ['10 x 20 x 30 cm'] }],
        images: [{ id: '1', name: 'product image', src: 'https://example.com/product.jpg', alt: 'Product image' }],
        name: 'Product',
        price: 99.99,
        rating: 4.5,
        size: ['M', 'L'],
        // missing stock
        subcategory: 'laptops'
      })
      .then(response => {
        expect(response.statusCode).toBe(500)
      })
  })

  it('should return product availability true', async () => {
    await request(app)
      .post('/products')
      .send({
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
      })

    const response = await request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .send({
        productId: '123',
        quantity: 1
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      productId: '123',
      available: true
    })

    const responseXML = await request(app)
      .get('/products')
      .set('Accept', 'application/xml')
      .send({
        productId: '123',
        quantity: 1
      })

    expect(responseXML.statusCode).toBe(200)
    expect(responseXML.headers['content-type']).toEqual('application/xml; charset=utf-8')
    expect(responseXML.text).toEqual(
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<productStock>\n' +
      '  <productId>123</productId>\n' +
      '  <available>true</available>\n' +
      '</productStock>'
    )
  })

  it('should return product availability false', async () => {
    await request(app)
      .post('/products')
      .send({
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
      })

    const response = await request(app)
      .get('/products')
      .send({
        productId: '123',
        quantity: 11
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      productId: '123',
      available: false
    })
  })

  it('should return status code 500 if input param is incorrect', async () => {
    await request(app)
      .post('/products')
      .send({
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
      })

    const response = await request(app)
      .get('/products')
      .send({
        id: '123'
      })

    expect(response.statusCode).toBe(500)
  })
})
