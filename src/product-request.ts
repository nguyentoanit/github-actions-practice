export interface ProductRequest {
  shopid: string
  itemId: string
  priceThresshold: number
}

const MACBOOK_AIR_M1_16_256: number = 29_000_000
const MACBOOK_PRO_M1_16_256: number = 35_000_000

/**
 * M1 air 16G Ram 256GB SSD
 */ 
// Apple: itemid=10542128441&shopid=88201679
// Shopdunk: itemid=14204466097&shopid=288286284
// Future World: itemid=11006914581&shopid=92532150
export const macbookAirM116256Requests: ProductRequest[] = [
  {
    shopid: '88201679',
    itemId: '10542128441',
    priceThresshold: MACBOOK_AIR_M1_16_256,
  },
  {
    shopid: '288286284',
    itemId: '14204466097',
    priceThresshold: MACBOOK_AIR_M1_16_256,
  },
  {
    shopid: '92532150',
    itemId: '11006914581',
    priceThresshold: MACBOOK_AIR_M1_16_256,
  },
]

/**
 * M1 pro 16G Ram 256GB SSD
 */ 
// Apple: 88201679.8089279844
// Shopdunk: 
// Future World: 92532150.5178550536
export const macbookProM116256Requests: ProductRequest[] = [
  {
    shopid: '88201679',
    itemId: '8089279844',
    priceThresshold: MACBOOK_PRO_M1_16_256,
  },
  {
    shopid: '92532150',
    itemId: '5178550536',
    priceThresshold: MACBOOK_PRO_M1_16_256,
  },
]

export const macbookM116256Requests = [
  ...macbookAirM116256Requests,
  ...macbookProM116256Requests,
]
