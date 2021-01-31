import React from 'react'
import Tabs from '../tabs/Tabs'
import OrderInfo from '../orderInfo/OrderInfo'
import OrderSummary from '../orderSummary/OrderSummary'
import OrderTracker from '../orderTracker/OrderTracker'
import SearchTable from '../SearchTable'
import HomeIcon from '@material-ui/icons/Home';
import ReactJson from 'react-json-view'
import { TextField } from 'material-ui'
import { OrderDetail } from '../../model/order'


export interface OrderDetailInfoProps {
    orderDetail: OrderDetail
}

function OrderDetailInfo(props: OrderDetailInfoProps) {

    const currency = props.orderDetail.currency

    const itemTableBody = props.orderDetail.product_items.map((data, idx) => ([data.product_id, data.item_text, `${currency} ${data.base_price}`, data.quantity, 0 , `${currency} ${data.price_after_item_discount}`, `${currency} ${data.quantity * data.price_after_item_discount}`]))

    const shipmentTableBody = props.orderDetail.shipments.map( (data, idx) => ([data.shipment_id, data.shipping_status, data.shipment_total, data.tax_total, data.seq, data.shipping_method.name, data.c_tracking_link]))

    const paymentDetailHeader = [
        'Mode',
        'Card Type',
        'Number',
        'Expiration Date',
        'Holder Name',
        'Amount',
        'Date',
    ]

    const paymentDetailBody = props.orderDetail.payment_instruments.map((data, idx) => ([
        data?.payment_method_id,
        data?.payment_card?.card_type,
        data?.payment_card?.masked_number,
        `${data?.payment_card?.expiration_month}/${data?.payment_card?.expiration_year}`,
        data?.payment_card?.holder,
        data.amount,
        '2/12',
    ]))

    return (
        <div>
            {/* <Tabs orderDetail = {props.src}/> */}
            <OrderTracker  />
            <OrderSummary orderDetail={props.orderDetail} />
            <SearchTable tableName={'ITEM LIST'} tableHeader={['SKU ID', 'Description', 'Unit Price', 'Ordered Qty', 'Returned Qty', 'Sale Price', 'Total Amount']} tableBody={itemTableBody} />
            <SearchTable tableName={'Payment Detail'} tableHeader={paymentDetailHeader} tableBody={paymentDetailBody} />
            <OrderInfo orderDetail={props.orderDetail}/>
            
            {/* <SearchTable tableName = {'Shipment Detail'} tableHeader = {['Shipment ID', 'Status', 'Shipment Total', 'Tax', 'No of Items', 'Partner', 'tracking url' ]} tableBody = { shipmentTableBody } /> */}
            {/* <ReactJson src={props.src} /> */}
        </div>
    )
}

export default OrderDetailInfo
