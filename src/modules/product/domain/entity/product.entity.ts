import BaseEntity from '#seedwork/domain/entity/base.entity'
import NotificationError from '#seedwork/domain/notification/notification.error'
import ProductValidatorFactory from '#modules/product/domain/factory/product.validator.factory'
import type AggregateRoot from '#seedwork/domain/entity/aggregate-root.interface'

interface ProductProps {
  category: string
  colors: Array<{
    name: string
    bgColor: string
    selectedColor: string
  }>
  createdAt?: Date
  description: string
  details: Array<{
    name: string
    items: string[]
  }>
  id?: string
  images: Array<{
    id: string
    name: string
    src: string
    alt: string
  }>
  name: string
  price: number
  rating: number
  size: string[]
  stock: number
  subcategory: string
  updatedAt?: Date
}

export default class Product extends BaseEntity implements AggregateRoot {
  private _category: string
  private _colors: Array<{
    name: string
    bgColor: string
    selectedColor: string
  }>

  private _description: string
  private _details: Array<{
    name: string
    items: string[]
  }>

  private _name: string
  private _price: number
  private _rating: number
  private _size: string[]
  private _stock: number
  private _subcategory: string
  private _images: Array<{
    id: string
    name: string
    src: string
    alt: string
  }>

  constructor (props: ProductProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this._category = props.category
    this._subcategory = props.subcategory
    this._size = props.size
    this._stock = props.stock
    this._name = props.name
    this._price = props.price
    this._rating = props.rating
    this._images = props.images
    this._colors = props.colors
    this._description = props.description
    this._details = props.details

    this.validate()
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors())
    }
  }

  get category (): string {
    return this._category
  }

  get subcategory (): string {
    return this._subcategory
  }

  get size (): string[] {
    return this._size
  }

  get stock (): number {
    return this._stock
  }

  get name (): string {
    return this._name
  }

  get price (): number {
    return this._price
  }

  get rating (): number {
    return this._rating
  }

  get images (): Array<{
    id: string
    name: string
    src: string
    alt: string
  }> {
    return this._images
  }

  get colors (): Array<{
    name: string
    bgColor: string
    selectedColor: string
  }> {
    return this._colors
  }

  get description (): string {
    return this._description
  }

  get details (): Array<{
    name: string
    items: string[]
  }> {
    return this._details
  }

  update (props: ProductProps): void {
    this._category = props.category
    this._subcategory = props.subcategory
    this._size = props.size
    this._stock = props.stock
    this._name = props.name
    this._price = props.price
    this._rating = props.rating
    this._images = props.images
    this._colors = props.colors
    this._description = props.description
    this._details = props.details
    this._updatedAt = new Date()
    this.validate()
  }

  validate (): void {
    ProductValidatorFactory.create().validate(this)
  }
}
