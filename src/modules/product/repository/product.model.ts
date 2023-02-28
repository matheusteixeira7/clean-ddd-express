import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript'

interface Image {
  id: string
  name: string
  src: string
  alt: string
}

interface Color {
  name: string
  bgColor: string
  selectedColor: string
}

interface Detail {
  name: string
  items: string[]
}

@Table({ tableName: 'products' })
export class ProductModel extends Model<ProductModel> {
  @PrimaryKey
  @Column({ type: DataType.STRING, allowNull: false })
    id!: string

  @Column({ type: DataType.STRING, allowNull: false })
    category!: string

  @Column({ type: DataType.STRING, allowNull: false })
    subcategory!: string

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
    size!: string[]

  @Column({ type: DataType.INTEGER, allowNull: false })
    stock!: number

  @Column({ type: DataType.STRING, allowNull: false })
    name!: string

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    price!: number

  @Column({ type: DataType.DECIMAL(2, 1), allowNull: false })
    rating!: number

  @Column({ type: DataType.JSON, allowNull: false })
    images!: Image[]

  @Column({ type: DataType.JSON, allowNull: false })
    colors!: Color[]

  @Column({ type: DataType.TEXT, allowNull: false })
    description!: string

  @Column({ type: DataType.JSON, allowNull: false })
    details!: Detail[]

  @Column({ type: DataType.DATE, allowNull: false })
    createdAt!: Date

  @Column({ type: DataType.DATE, allowNull: false })
    updatedAt!: Date
}
