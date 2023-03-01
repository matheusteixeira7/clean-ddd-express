import Product from './product.entity'

describe('Product', () => {
  const productProps = {
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

  it('should create a product with the given properties', () => {
    const product = new Product(productProps)

    expect(product).toEqual(expect.objectContaining(productProps))
  })

  it('should get the correct values for the properties', () => {
    const product = new Product(productProps)

    expect(product.category).toEqual(productProps.category)
    expect(product.colors).toEqual(productProps.colors)
    expect(product.description).toEqual(productProps.description)
    expect(product.details).toEqual(productProps.details)
    expect(product.images).toEqual(productProps.images)
    expect(product.name).toEqual(productProps.name)
    expect(product.price).toEqual(productProps.price)
    expect(product.rating).toEqual(productProps.rating)
    expect(product.size).toEqual(productProps.size)
    expect(product.stock).toEqual(productProps.stock)
    expect(product.subcategory).toEqual(productProps.subcategory)
    expect(product.id).toBeDefined()
    expect(product.createdAt).toBeInstanceOf(Date)
    expect(product.updatedAt).toBeInstanceOf(Date)
  })
})
