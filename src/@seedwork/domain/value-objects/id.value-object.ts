import type ValueObject from './value-object.interface'
import { v4 as uuidv4 } from 'uuid'

export default class Id implements ValueObject<Id> {
  private readonly _id: string

  constructor (id?: string) {
    this._id = id ?? uuidv4()
  }

  public get id (): string {
    return this._id
  }

  public equals (id: Id): boolean {
    return this._id === id.id
  }
}
