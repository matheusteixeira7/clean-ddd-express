import * as yup from 'yup'
import type Product from '#modules/product/domain/entity/product.entity'
import type ValidatorInterface from '#seedwork/domain/validators/validator.interface'

export default class ProductYupValidator implements ValidatorInterface<Product> {
  validate (product: Product): void {
    try {
      const schema = yup.object().shape({
        category: yup.string().required(),
        colors: yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            bgColor: yup.string().required(),
            selectedColor: yup.string().required()
          })
        ).required(),
        description: yup.string().required(),
        details: yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            items: yup.array().of(yup.string().required())
          })
        ).required(),
        images: yup.array().of(
          yup.object().shape({
            id: yup.string().required(),
            name: yup.string().required(),
            src: yup.string().required(),
            alt: yup.string().required()
          })
        ).required(),
        name: yup.string().required(),
        price: yup.number().required(),
        rating: yup.number().required(),
        size: yup.array().of(yup.string().required()).required(),
        stock: yup.number().required(),
        subcategory: yup.string().required()
      })

      schema.validateSync(product, { abortEarly: false })
    } catch (error) {
      const e = error as yup.ValidationError

      for (const err of e.errors) {
        product.notification.addError({
          context: 'Product',
          message: err
        })
      }
    }
  }
}
