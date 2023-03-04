import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript'

interface ProductProps {
  category: string
  colors: ColorsInterface[]
  createdAt: Date
  description: string
  details: DetailsInterface[]
  id: string
  images: ImagesInterface[]
  name: string
  price: number
  rating: number
  size: string[]
  stock: number
  subcategory: string
  updatedAt: Date
}

interface ImagesInterface {
  id: string
  name: string
  src: string
  alt: string
}

interface DetailsInterface {
  name: string
  items: string[]
}

interface ColorsInterface {
  name: string
  bgColor: string
  selectedColor: string
}

@Table({ tableName: 'products', timestamps: false })
export class ProductModel extends Model<ProductProps> {
  @PrimaryKey
  @Column({ allowNull: false })
    id!: string

  @Column({ allowNull: false })
    category!: string

  @Column({ allowNull: false })
    subcategory!: string

  @Column({ type: DataType.JSON, allowNull: false })
    size!: string[]

  @Column({ allowNull: false })
    stock!: number

  @Column({ allowNull: false })
    name!: string

  @Column({ allowNull: false })
    price!: number

  @Column({ allowNull: false })
    rating!: number

  @Column({ type: DataType.JSON, allowNull: false })
    images!: ImagesInterface[]

  @Column({ type: DataType.JSON, allowNull: false })
    details!: DetailsInterface[]

  @Column({ type: DataType.JSON, allowNull: false })
    colors!: ColorsInterface[]

  @Column({ allowNull: false })
    description!: string

  @Column({ type: DataType.DATE, allowNull: false })
    createdAt!: Date

  @Column({ type: DataType.DATE, allowNull: false })
    updatedAt!: Date
}
