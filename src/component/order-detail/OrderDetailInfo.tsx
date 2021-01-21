import React from 'react'
import Tabs from '../tabs/Tabs'
import OrderInfo from '../orderInfo/OrderInfo'
import OrderSummary from '../orderSummary/OrderSummary'
import OrderTracker from '../orderTracker/OrderTracker'


function OrderDetailInfo(props: any) {
    return (
        <div>
            {/* <Tabs orderDetail = {props.src}/> */}
            <OrderTracker  />
            <OrderSummary orderDetail = {props.src}/>
            <OrderInfo orderDetail = {props.src}/>
        </div>
    )
}

export default OrderDetailInfo
