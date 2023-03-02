import express, { type Request, type Response } from 'express'
import makeProductFacade from '#modules/product/factory/facade.factory'

export const productRoute = express.Router()

productRoute.post('/', async (req: Request, res: Response) => {
  const productFacade = makeProductFacade()

  try {
    await productFacade.addProduct(req.body)
    res.status(201).json({ message: 'Product created successfully' })
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

productRoute.get('/', async (req: Request, res: Response) => {
  const productFacade = makeProductFacade()

  try {
    const check = await productFacade.checkStock(req.body)
    res.status(200).json(check)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})
