import BaseEntity from '#seedwork/domain/entity/base.entity'
import NotificationError from '#seedwork/domain/notification/notification.error'
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

  validated (): void {
    if (this.category === null || this.category === '' || this.category === undefined) {
      this.notification.addError({
        context: 'Product',
        message: 'Category is required.'
      })
    }
  }

  validate (): void {
    // CustomerValidatorFactory.create().validate(this)
    if (this.name.length < 3) {
      this.notification.addError({
        context: 'Product',
        message: 'Name must be at least 3 characters long.'
      })
    }

    if (this.name.length > 100) {
      this.notification.addError({
        context: 'Product',
        message: 'Name must be less than 100 characters long.'
      })
    }

    if (this.name === null || this.name === undefined || this.name === '') {
      this.notification.addError({
        context: 'Product',
        message: 'Name must be provided.'
      })
    }

    if (this.description.length < 3) {
      this.notification.addError({
        context: 'Product',
        message: 'Description must be at least 3 characters long.'
      })
    }

    if (this.description.length > 1000) {
      this.notification.addError({
        context: 'Product',
        message: 'Description must be less than 1000 characters long.'
      })
    }

    if (this.description === null || this.description === undefined || this.description === '') {
      this.notification.addError({
        context: 'Product',
        message: 'Description must be provided.'
      })
    }

    if (this.price < 0) {
      this.notification.addError({
        context: 'Product',
        message: 'Price must be greater than 0.'
      })
    }

    if (this.price === null || this.price === undefined) {
      this.notification.addError({
        context: 'Product',
        message: 'Price must be provided.'
      })
    }

    if (isNaN(this.price)) {
      this.notification.addError({
        context: 'Product',
        message: 'Price must be a number.'
      })
    }

    if (this.details === null || this.details === undefined || this.details.length === 0) {
      this.notification.addError({
        context: 'Product',
        message: 'Details must be provided.'
      })
    }

    if (this.colors === null || this.colors === undefined || this.colors.length === 0) {
      this.notification.addError({
        context: 'Product',
        message: 'Colors must be provided.'
      })
    }

    if (this.images === null || this.images === undefined || this.images.length === 0) {
      this.notification.addError({
        context: 'Product',
        message: 'Images must be provided.'
      })
    }

    if (this.size === null || this.size === undefined || this.size.length === 0) {
      this.notification.addError({
        context: 'Product',
        message: 'Size must be provided.'
      })
    }

    if (this.stock < 0) {
      this.notification.addError({
        context: 'Product',
        message: 'Stock must be greater than 0.'
      })
    }

    if (this.stock === null || this.stock === undefined) {
      this.notification.addError({
        context: 'Product',
        message: 'Stock must be provided.'
      })
    }

    if (this.stock === ('' as unknown as number)) {
      this.notification.addError({
        context: 'Product',
        message: 'Stock must be a number.'
      })
    }

    if (this.rating < 0 || this.rating > 5) {
      this.notification.addError({
        context: 'Product',
        message: 'Rating must be greater than 0 and less than 5.'
      })
    }

    if (this.rating === null || this.rating === undefined) {
      this.notification.addError({
        context: 'Product',
        message: 'Rating must be provided.'
      })
    }

    if (isNaN(this.rating)) {
      this.notification.addError({
        context: 'Product',
        message: 'Rating must be a number.'
      })
    }

    if (this.category === null || this.category === '' || this.category === undefined) {
      this.notification.addError({
        context: 'Product',
        message: 'Category must be provided.'
      })
    }

    if (this.category.length < 3) {
      this.notification.addError({
        context: 'Product',
        message: 'Category must be at least 3 characters long.'
      })
    }

    if (this.category.length > 100) {
      this.notification.addError({
        context: 'Product',
        message: 'Category must be less than 100 characters long.'
      })
    }

    if (this.subcategory === null || this.subcategory === '' || this.subcategory === undefined) {
      this.notification.addError({
        context: 'Product',
        message: 'Subcategory must be provided.'
      })
    }

    if (this.subcategory.length < 3) {
      this.notification.addError({
        context: 'Product',
        message: 'Subcategory must be at least 3 characters long.'
      })
    }

    if (this.subcategory.length > 100) {
      this.notification.addError({
        context: 'Product',
        message: 'Subcategory must be less than 100 characters long.'
      })
    }
  }
}
