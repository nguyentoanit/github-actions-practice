export interface OverallPurchaseLimit {
  order_max_purchase_limit: number
  overall_purchase_limit?: any
  item_overall_quota?: any
  start_date?: any
  end_date?: any
}

export interface ItemRating {
  rating_star: number
  rating_count: number[]
}

export interface Attribute {
  name: string
  value: string
  id: number
  is_timestamp: boolean
  brand_option?: any
  val_id?: any
}

export interface TierVariation {
  name: string
  options: string[]
  images?: any
  properties?: any
  type: number
}

export interface Category {
  catid: number
  display_name: string
  no_sub: boolean
  is_default_subcat: boolean
}

export interface CoinEarnItem {
  coin_earn: number
}

export interface CoinInfo {
  spend_cash_unit: number
  coin_earn_items: CoinEarnItem[]
}

export interface StockBreakdownByLocation {
  location_id: string
  available_stock: number
  fulfilment_type: number
  address_id?: number
}

export interface PriceStock {
  allocated_stock?: number
  stock_breakdown_by_location: StockBreakdownByLocation[]
}

export interface Extinfo {
  tier_index: number[]
  group_buy_info?: any
  is_pre_order: boolean
  estimated_days: number
}

export interface Model {
  itemid: any
  status: number
  current_promotion_reserved_stock: number
  name: string
  promotionid: number
  price: any
  price_stocks: PriceStock[]
  current_promotion_has_reserve_stock: boolean
  normal_stock: number
  extinfo: Extinfo
  price_before_discount: any
  modelid: any
  stock: number
  has_gimmick_tag: boolean
}

export interface SplInfo {
  installment_info?: any
  user_credit_info?: any
  channel_id?: any
  show_spl: boolean
  show_spl_lite: boolean
}

export interface FeCategory {
  catid: number
  display_name: string
  no_sub: boolean
  is_default_subcat: boolean
}

export interface Data {
  itemid: number
  shopid: number
  userid: number
  price_max_before_discount: number
  has_lowest_price_guarantee: boolean
  price_before_discount: number
  price_min_before_discount: number
  exclusive_price_info?: any
  hidden_price_display?: any
  price_min: number
  price_max: number
  price: number
  stock: number
  discount: string
  historical_sold: number
  sold: number
  show_discount: number
  raw_discount: number
  min_purchase_limit: number
  overall_purchase_limit: OverallPurchaseLimit
  pack_size?: any
  is_live_streaming_price?: any
  name: string
  ctime: number
  item_status: string
  status: number
  condition: number
  catid: number
  description: string
  is_mart: boolean
  show_shopee_verified_label: boolean
  size_chart?: any
  reference_item_id: string
  brand?: any
  item_rating: ItemRating
  label_ids: number[]
  attributes: Attribute[]
  liked: boolean
  liked_count: number
  cmt_count: number
  flag: number
  shopee_verified: boolean
  is_adult: boolean
  is_preferred_plus_seller: boolean
  tier_variations: TierVariation[]
  bundle_deal_id: number
  can_use_bundle_deal: boolean
  add_on_deal_info?: any
  bundle_deal_info?: any
  can_use_wholesale: boolean
  wholesale_tier_list: any[]
  is_group_buy_item?: any
  group_buy_info?: any
  welcome_package_type: number
  welcome_package_info?: any
  tax_code?: any
  invoice_option?: any
  complaint_policy?: any
  images: string[]
  image: string
  video_info_list?: any
  item_type: number
  is_official_shop: boolean
  show_official_shop_label_in_title: boolean
  shop_location: string
  coin_earn_label?: any
  cb_option: number
  is_pre_order: boolean
  estimated_days: number
  badge_icon_type: number
  show_free_shipping: boolean
  shipping_icon_type: number
  cod_flag: number
  show_original_guarantee: boolean
  categories: Category[]
  other_stock: number
  item_has_post: boolean
  discount_stock: number
  current_promotion_has_reserve_stock: boolean
  current_promotion_reserved_stock: number
  normal_stock: number
  brand_id: number
  is_alcohol_product: boolean
  show_recycling_info: boolean
  coin_info: CoinInfo
  models: Model[]
  spl_info: SplInfo
  preview_info?: any
  fe_categories: FeCategory[]
  presale_info?: any
  is_cc_installment_payment_eligible: boolean
  is_non_cc_installment_payment_eligible: boolean
  flash_sale?: any
  upcoming_flash_sale?: any
  deep_discount?: any
  has_low_fulfillment_rate: boolean
  is_partial_fulfilled: boolean
  makeups?: any
  shop_vouchers?: any
  global_sold?: any
}

export interface Product {
  data: Data
  error?: any
  error_msg?: any
}
