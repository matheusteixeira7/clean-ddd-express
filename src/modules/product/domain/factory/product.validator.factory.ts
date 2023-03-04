import ProductYupValidator from '#modules/product/domain/validator/product.yup.validator'
import type Product from '#modules/product/domain/entity/product.entity'
import type ValidatorInterface from '#seedwork/domain/validators/validator.interface'

export default class ProductValidatorFactory {
  static create (): ValidatorInterface<Product> {
    return new ProductYupValidator()
  }
}
