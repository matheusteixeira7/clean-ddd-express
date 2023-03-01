import BaseEntity from './base.entity'

describe('BaseEntity', () => {
  test('should create an instance with default values', () => {
    const entity = new BaseEntity()

    expect(entity.id).toBeDefined()
    expect(entity.createdAt).toBeInstanceOf(Date)
    expect(entity.updatedAt).toBeInstanceOf(Date)
  })

  test('should create an instance with provided values', () => {
    const id = 'test-id'
    const createdAt = new Date(2022, 5, 1)
    const updatedAt = new Date(2022, 5, 2)

    const entity = new BaseEntity(id, createdAt, updatedAt)

    expect(entity.id).toBe(id)
    expect(entity.createdAt).toBe(createdAt)
    expect(entity.updatedAt).toBe(updatedAt)
  })

  test('should update createdAt', () => {
    const entity = new BaseEntity()
    const newCreatedAt = new Date(2022, 5, 1)

    entity.createdAt = newCreatedAt

    expect(entity.createdAt).toBe(newCreatedAt)
  })

  test('should update updatedAt', () => {
    const entity = new BaseEntity()
    const newUpdatedAt = new Date(2022, 5, 2)

    entity.updatedAt = newUpdatedAt

    expect(entity.updatedAt).toBe(newUpdatedAt)
  })
})
