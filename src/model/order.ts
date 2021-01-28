export enum ShipmentStatusEnum {
    READY_TO_SHIP = 50,
    SHIPPED = 60,
    OUT_FOR_DELIVERY = 70,
    DELIVERED = 80
}

export enum OmsStatusCodeEnum {
    READY_TO_PICK,
    PICKED_UP,
    SHIPPED,
    DELIVERED
}

export interface Notes {
    link: string;
    _type: string;
}

export interface ShippingMethod {
    id: string;
    name: string;
    _type: string;
    c_defaultSlotId: string;
    c_shipping_type: string;
    c_storePickupEnabled: boolean;
    c_estimatedArrivalTime: string;
    c_useWithDeliverySlots: boolean;
    c_estimatedArrivalDaysToAdd: number;
}

export interface ShippingAddress {
    id: string;
    city: string;
    _type: string;
    phone: string;
    c_area: string;
    c_email: string;
    address1: string;
    address2: string;
    full_name: string;
    last_name: string;
    first_name: string;
    salutation: string;
    state_code: string;
    country_code: string;
    c_addressType: string;
    c_customAddressDetails: string;
}

export interface Shipment {
    seq: number;
    gift: boolean;
    _type: string;
    tax_total: number;
    shipment_id: string;
    shipment_no: string;
    product_total: number;
    shipment_total: number;
    shipping_total: number;
    c_delivery_slot: string;
    c_delivery_time: Date;
    c_location_type: string;
    c_shipping_type: string;
    shipping_method: ShippingMethod;
    shipping_status: ShipmentStatusEnum;
    shipping_address: ShippingAddress;
    c_oms_status_code: OmsStatusCodeEnum;
    c_source_location: number;
    product_sub_total: number;
    shipping_total_tax: number;
    merchandize_total_tax: number;
    adjusted_shipping_total_tax: number;
    adjusted_merchandize_total_tax: number;
    c_tracking_link: string;
}

export interface CLocalDesc {
    lang: string;
    country: string;
}

export interface CouponItem {
    code: string;
    _type: string;
    valid: boolean;
    status_code: string;
    coupon_item_id: string;
}

export interface CustomerInfo {
    _type: string;
    email: string;
    customer_id: string;
    customer_no: string;
    customer_name: string;
}

export interface Large {
    alt: string;
    url: string;
    title: string;
}

export interface Small {
    alt: string;
    url: string;
    title: string;
}

export interface HiRe {
    alt: string;
    url: string;
    title: string;
}

export interface Medium {
    alt: string;
    url: string;
    title: string;
}

export interface Swatch {
    alt: string;
    url: string;
    title: string;
}

export interface Images {
    large: Large[];
    small: Small[];
    hi_res: HiRe[];
    medium: Medium[];
    swatch: Swatch[];
}

export interface AppliedDiscount {
    type: string;
    _type: string;
    amount: number;
    percentage: number;
}

export interface PriceAdjustment {
    _type: string;
    price: number;
    custom: boolean;
    manual: boolean;
    item_text: string;
    coupon_code: string;
    promotion_id: string;
    creation_date: Date;
    last_modified: Date;
    promotion_link: string;
    applied_discount: AppliedDiscount;
    price_adjustment_id: string;
}

export interface VariationAttribute {
    display_name: string;
    display_value: string;
}

export interface ProductItem {
    tax: number;
    gift: boolean;
    _type: string;
    brand: string;
    price: number;
    images: Images;
    item_id: string;
    quantity: number;
    tax_rate: number;
    item_text: string;
    tax_basis: number;
    base_price: number;
    product_id: string;
    shipment_id: string;
    adjusted_tax: number;
    product_name: string;
    tax_class_id: string;
    c_isfurniture: boolean;
    c_clearance_id: number;
    c_price_book_id: string;
    c_regular_price: number;
    c_returnable_ind: boolean;
    c_cancellable_ind: boolean;
    price_adjustments: PriceAdjustment[];
    c_exchangeable_ind: boolean;
    variation_attributes: VariationAttribute[];
    bonus_product_line_item: boolean;
    price_after_item_discount: number;
    price_after_order_discount: number;
}

export interface ShippingItem {
    tax: number;
    _type: string;
    price: number;
    item_id: string;
    tax_rate: number;
    item_text: string;
    tax_basis: number;
    base_price: number;
    shipment_id: string;
    adjusted_tax: number;
    tax_class_id: string;
    price_after_item_discount: number;
}

export interface BillingAddress {
    id: string;
    city: string;
    _type: string;
    phone: string;
    c_area: string;
    c_email: string;
    address1: string;
    address2: string;
    full_name: string;
    last_name: string;
    first_name: string;
    state_code: string;
    country_code: string;
    c_addressType: string;
    c_customAddressDetails: string;
}

export interface PaymentCard {
    _type: string;
    holder: string;
    card_type: string;
    masked_number: string;
    expiration_year: number;
    expiration_month: number;
    credit_card_token: string;
    number_last_digits: string;
    credit_card_expired: boolean;
}

export interface PaymentInstrument {
    c_transactionId: number;
    _type: string;
    amount: number;
    c_authcode: string;
    payment_card: PaymentCard;
    payment_method_id: string;
    payment_instrument_id: string;
}

export interface ReturnProductItem {
    Size?: any;
    note: string;
    Color?: any;
    brand: string;
    price: number;
    title: string;
    images: Images;
    quantity: number;
    product_id: string;
    reason_code: string;
    product_name?: any;
    variation_attributes?: any;
}

export interface ReturnItem {
    rma: string;
    product_items: ReturnProductItem[];
}

export interface CancellationItems {
    product_items: ProductItem[];
}

export interface OrderDetail {
    cancellation_items: CancellationItems[];
    _type: string;
    isVIP: boolean;
    notes: Notes;
    status: string;
    c_sscid: string;
    site_id: string;
    c_locale: string;
    currency: string;
    order_no: string;
    taxation: string;
    shipments: Shipment[];
    tax_total: number;
    created_by: string;
    order_token: string;
    order_total: number;
    c_local_desc: CLocalDesc;
    channel_type: string;
    coupon_items: CouponItem[];
    creation_date: Date;
    customer_info: CustomerInfo;
    customer_name: string;
    export_status: string;
    last_modified: Date;
    product_items: ProductItem[];
    product_total: number;
    payment_status: string;
    shipping_items: ShippingItem[];
    shipping_total: number;
    billing_address: BillingAddress;
    c_sscSyncStatus: string;
    shipping_status: string;
    c_customerGroups: string;
    c_initiate_loc_id: number;
    product_sub_total: number;
    shipping_total_tax: number;
    c_lastPaymentStatus: string;
    confirmation_status: string;
    payment_instruments: PaymentInstrument[];
    c_gtmIsPurchasePushed: boolean;
    c_sscSyncResponseText: string[];
    merchandize_total_tax: number;
    adjusted_shipping_total_tax: number;
    adjusted_merchandize_total_tax: number;
    return_items: ReturnItem[];
}