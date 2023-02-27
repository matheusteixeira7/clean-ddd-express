import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({
  tableName: 'products',
  timestamps: false
})
export class ProductModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
    id!: string

  @Column({ allowNull: false })
    category!: string

  @Column({ allowNull: false })
    subcategory!: string

  @Column({ allowNull: false })
    size!: string[]

  @Column({ allowNull: false })
    name!: string

  @Column({ allowNull: false })
    price!: number

  @Column({ allowNull: false })
    rating!: number

  @Column({ allowNull: false })
    images!: Array<{
    id: string
    name: string
    src: string
    alt: string
  }>

  @Column({ allowNull: false })
    colors!: Array<{
    name: string
    bgColor: string
    selectedColor: string
  }>

  @Column({ allowNull: false })
    description!: string

  @Column({ allowNull: false })
    details!: Array<{
    name: string
    items: string[]
  }>

  @Column({ allowNull: false })
    createdAt!: Date

  @Column({ allowNull: false })
    updatedAt!: Date
}
