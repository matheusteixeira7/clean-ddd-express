import Id from './id.value-object'
import { v4 as uuidv4, validate } from 'uuid'

describe('Id Value Object', () => {
  describe('constructor', () => {
    it('creates a new Id object with a UUID if no id is provided', () => {
      const id = new Id().id
      expect(validate(id)).toBe(true) // check that the ID is a valid UUID
    })

    it('creates a new Id object with the provided id', () => {
      const providedId = uuidv4()
      const id = new Id(providedId).id
      expect(id).toBe(providedId)
    })
  })

  describe('equals', () => {
    it('returns true if the ids are equal', () => {
      const id1 = new Id('12345')
      const id2 = new Id('12345')
      expect(id1.equals(id2)).toBe(true)
    })

    it('returns false if the ids are not equal', () => {
      const id1 = new Id('12345')
      const id2 = new Id('67890')
      expect(id1.equals(id2)).toBe(false)
    })
  })
})
