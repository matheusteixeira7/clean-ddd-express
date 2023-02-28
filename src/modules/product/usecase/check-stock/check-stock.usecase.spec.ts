// Import the necessary types and class
import { type CheckStockInputDto, type CheckStockOutputDto } from '#modules/product/usecase/check-stock/check-stock.dto'
import CheckStockUseCase from './check-stock.usecase'
import Product from '#modules/product/domain/product.entity'

// Create a mock product
const product = new Product({
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
})

// Create a mock product repository
const mockProductRepository = {
  find: jest.fn().mockResolvedValue(product),
  add: jest.fn()
}

// Create a new instance of the CheckStockUseCase class using the mock repository
const checkStockUseCase = new CheckStockUseCase(mockProductRepository)

describe('CheckStockUseCase', () => {
  it('should return the correct product stock', async () => {
    // Create an example input DTO
    const input: CheckStockInputDto = {
      productId: 'abc123'
    }

    // Call the execute method with the input DTO
    const output: CheckStockOutputDto = await checkStockUseCase.execute(input)

    // Assert that the correct product stock was returned
    expect(output).toEqual({ productId: 'abc123', stock: 10 })
  })
})
