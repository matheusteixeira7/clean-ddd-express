import { Router } from 'express'
import { productRoutes } from '#modules/product/infra/routes/product.routes'

const routes = Router()

routes.use('/products', productRoutes)

export default routes
