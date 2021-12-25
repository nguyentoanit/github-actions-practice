import UserAgent from 'user-agents'
import axios from 'axios'
import { macbookM116256Requests, ProductRequest } from './product-request'
import { Data, Product } from './product'
import delay from 'delay'
import { formatCurrency } from './format-currency'
import { isFlashSale } from './is-flash-sale'

function logProduct(productData: Data, request: ProductRequest): void {
  const messages = [
    '--------------------------------',
    `Product name: ${productData.name}`,
    `Current price: ${productData.price_min.toLocaleString('en-US')}`,
    `Price to buy: ${request.priceThresshold.toLocaleString('en-US')}`,
  ]

  messages.forEach(message => console.log(message))
}

function stopJob(productData: Data): void {
  console.log('Product is on flash sale!', productData)
  require('child_process').exec('sudo /sbin/shutdown -r now', function (msg: any) { console.log(msg) })
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
      stopJob(productData)
    } else {
      console.log('Product is not on flash sale!')
    }

    await delay.range(10 * 1000, 30 * 1000)
  }

  await main()
}

main()