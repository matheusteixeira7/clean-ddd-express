export default interface ValueObject<T> {
  equals: (value: T) => boolean
}
