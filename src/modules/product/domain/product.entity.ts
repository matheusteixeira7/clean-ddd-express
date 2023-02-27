import BaseEntity from '#seedwork/domain/entity/base.entity'
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
  subcategory: string
  updatedAt?: Date
}

export default class Product extends BaseEntity implements AggregateRoot {
  private readonly _category: string
  private readonly _subcategory: string
  private readonly _size: string[]
  private readonly _name: string
  private readonly _price: number
  private readonly _rating: number
  private readonly _images: Array<{
    id: string
    name: string
    src: string
    alt: string
  }>

  private readonly _colors: Array<{
    name: string
    bgColor: string
    selectedColor: string
  }>

  private readonly _description: string
  private readonly _details: Array<{
    name: string
    items: string[]
  }>

  constructor (props: ProductProps) {
    super(props.id)
    this._category = props.category
    this._subcategory = props.subcategory
    this._size = props.size
    this._name = props.name
    this._price = props.price
    this._rating = props.rating
    this._images = props.images
    this._colors = props.colors
    this._description = props.description
    this._details = props.details
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
}
