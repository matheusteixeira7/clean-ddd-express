import CheckProductStockPresenter from '../presenters/product.presenter'
import express, { type Request, type Response } from 'express'
import makeProductFacade from '#modules/product/infra/factory/facade.factory'

export const productRoutes = express.Router()

productRoutes.post('/', async (req: Request, res: Response) => {
  const productFacade = makeProductFacade()

  try {
    await productFacade.addProduct(req.body)
    res.format({
      json: async () => res.status(201).json({ message: 'Product created successfully' })
    })
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

productRoutes.get('/', async (req: Request, res: Response) => {
  const productFacade = makeProductFacade()

  try {
    const output = await productFacade.checkStock(req.body)
    res.format({
      json: async () => res.status(200).json(output),
      xml: async () => res.status(200).send(CheckProductStockPresenter.toXML(output))
    })
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})
