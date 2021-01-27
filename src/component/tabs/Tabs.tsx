import React from 'react'
import Tab from './Tab.js'
import './Tab.css'
import { OrderDetail } from '../../model/order.js'

interface TabsProps{
    orderDetail: OrderDetail
}

function Tabs(props : TabsProps) {
    return (
        <div className="button-list">
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            
        </div>
    )
}

export default Tabs
