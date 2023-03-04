import { Router } from 'express'
import { productRoutes } from '#modules/product/infra/routes/product.route'

const routes = Router()

routes.use('/products', productRoutes)

export default routes
