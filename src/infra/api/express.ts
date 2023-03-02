import express, { type Express } from 'express'
import { Sequelize } from 'sequelize-typescript'
import { ProductModel } from '#modules/product/repository/product.model'
import { productRoute } from './routes/product.route'
import morgan from 'morgan'

export const app: Express = express()
app.use(express.json())
app.use(morgan('dev'))
app.use('/products', productRoute)

export let sequelize: Sequelize

async function setupDB (): Promise<void> {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  })

  sequelize.addModels([ProductModel])
  await sequelize.sync()
}

void setupDB()
