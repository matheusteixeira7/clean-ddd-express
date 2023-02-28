import AddProductUseCase from './add-product.usecase'
import Product from '#modules/product/domain/product.entity'

const mockRepository = {
  add: jest.fn(),
  find: jest.fn()
}

describe('AddProductUseCase', () => {
  it('should add product', async () => {
    const addProductUseCase = new AddProductUseCase(mockRepository)
    const input = {
      id: 'abc123',
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

    const product = new Product(input)
    const output = await addProductUseCase.execute(input)

    expect(output).toEqual({
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
    })
    expect(mockRepository.add).toHaveBeenCalledWith(product)
  })
})
