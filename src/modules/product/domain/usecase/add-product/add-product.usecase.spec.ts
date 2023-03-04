import AddProductUseCase from './add-product.usecase'

const mockRepository = {
  add: jest.fn(),
  find: jest.fn()
}

describe('AddProductUseCase', () => {
  it('should add product', async () => {
    const addProductUseCase = new AddProductUseCase(mockRepository)
    const input = {
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

    await addProductUseCase.execute(input)

    expect(mockRepository.add).toHaveBeenCalled()
  })
})
