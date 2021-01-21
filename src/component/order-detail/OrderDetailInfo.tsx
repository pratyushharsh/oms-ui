import React from 'react'
import Tabs from '../tabs/Tabs'
import OrderInfo from '../orderInfo/OrderInfo'
import OrderSummary from '../orderSummary/OrderSummary'
import OrderTracker from '../orderTracker/OrderTracker'
import SearchTable from '../SearchTable'


function OrderDetailInfo(props: any) {

    const itemTableBody = props.src.product_items.map( (data: { item_id: any; item_text: any; base_price: any; quantity: any; price_after_item_discount: any })  => ([data.item_id , data.item_text, data.base_price, data.quantity, data.price_after_item_discount, 'Discount']))

    const shipmentTableBody = props.src.shipments.map( (data: { shipment_id: any; shipping_status: any; shipment_total: any; tax_total: any; seq: any; shipping_method: { name: any }; c_tracking_link: any }) => ([data.shipment_id, data.shipping_status, data.shipment_total, data.tax_total, data.seq, data.shipping_method.name, data.c_tracking_link]))

    const paymentDetailBody = props.src.payment_instruments.map( (data: { c_transactionId: any; amount: any; payment_method_id: any; payment_card: any;  }) => ([data.c_transactionId, data.amount, '2/12', data.payment_method_id, data.payment_card.holder , data.payment_card.card_type, data.payment_card.masked_number, `${ data.payment_card.expiration_month}/${ data.payment_card.expiration_year}`]))


    return (
        <div>
            {/* <Tabs orderDetail = {props.src}/> */}
            <OrderTracker  />
            <OrderSummary orderDetail = {props.src}/>
            <OrderInfo orderDetail = {props.src}/>
            <SearchTable tableName = {'ITEM LIST'} tableHeader = {['SKU ID', 'Description', 'Unit Price', 'Quantity', 'Ordered_Price', 'Discount Code' ]} tableBody = { itemTableBody } />
            <SearchTable tableName = {'Shipment Detail'} tableHeader = {['Shipment ID', 'Status', 'Shipment Total', 'Tax', 'No of Items', 'Partner', 'tracking url' ]} tableBody = { shipmentTableBody } />
            <SearchTable tableName = {'Payment Detail'} tableHeader = {['Transaction ID', 'Amount', 'Date', 'Mode', 'Holder Name', 'Card Type', 'Number', 'Expiration Date' ]} tableBody = { paymentDetailBody } />
        </div>
    )
}

export default OrderDetailInfo
