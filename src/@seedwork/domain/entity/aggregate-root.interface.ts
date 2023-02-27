import type Id from '#seedwork/domain/value-objects/id.value-object'

export default interface AggregateRoot {
  id: Id
  createdAt: Date
  updatedAt: Date
}
