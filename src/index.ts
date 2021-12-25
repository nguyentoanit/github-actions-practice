import UserAgent from 'user-agents'
import axios from 'axios'
import { macbookM116256Requests, ProductRequest } from './product-request'
import { Data, Product } from './product'
import delay from 'delay'
import { formatCurrency } from './format-currency'
import { isFlashSale } from './is-flash-sale'

function logProduct(productData: Data, request: ProductRequest): void {
  console.log('--------------------------------')
  console.log('Product name:', productData.name)
  console.log('Current price:', productData.price_min.toLocaleString('en-US'))
  console.log('Price to buy:', request.priceThresshold.toLocaleString('en-US'))
}

// https://shopee.vn/api/v4/item/get?itemid=10542128441&shopid=88201679
async function main() {

  for (const request of macbookM116256Requests) {
    const userAgent = new UserAgent()
    const url: string = 'https://shopee.vn/api/v4/item/get'
    const productData = await axios.get<Product>(url, {
      params: request,
      headers: { 'User-Agent': userAgent.toString() }
    })
      .then(r => r.data)
      .then(p => p.data)
      .then(formatCurrency)

    logProduct(productData, request)

    if (isFlashSale(productData, request)) {
      console.log('Product is on flash sale!')
      throw Error('Buy flash sale')
    } else {
      console.log('Product isn\'t on flash sale!')
    }

    await delay.range(10 * 1000, 30 * 1000)
  }

  await main()
}

main()