import { Data } from './product'

export function formatCurrency(d: Data): Data {
  const divisor = 100_000
  return {
    ...d,
    price_min: d.price_min / divisor,
    price_max: d.price_max / divisor,
    price: d.price / divisor,
  }
}