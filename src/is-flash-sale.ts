import { Data } from './product'
import { ProductRequest } from './product-request'

export function isFlashSale(productData: Data, request: ProductRequest): boolean {
  const {
    price_min,
    price_max,
    price,
  } = productData

  const prices = [
    price_min,
    price_max,
    price,
  ]

  return prices.some((p => p <= request.priceThresshold ))
}
