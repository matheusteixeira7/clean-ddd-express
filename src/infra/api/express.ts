import express, { type Express } from 'express'
import morgan from 'morgan'
import routes from '#application/routes'
import { ProductModel } from '#modules/product/infra/repository/product.model'
import { Sequelize } from 'sequelize-typescript'

export const app: Express = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(routes)

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
