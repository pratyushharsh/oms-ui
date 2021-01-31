import React from 'react'
import { FaClipboardList, FaBoxOpen, FaTruck, FaHome, FaCheck } from "react-icons/fa";
import ProgressLine from './ProgressLine'
import './OrderTracker.css';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import OrderTrackingStatusGraph from './OrderTrakingStatusGraph';

function OrderTracker() {
    return (
        <div className ="order-container">
            <FaClipboardList size = "50px"/>
            <ProgressLine color="rgb(11, 179, 67)"/>
            <FaBoxOpen size = "50px"/>
            <ProgressLine color="rgb(11, 179, 67)"/>
            <FaCheck size = "50px"/>
            <ProgressLine color="rgb(255, 165, 0)"/>
            <FaTruck size = "50px"/>
            <ProgressLine color="gray"/>
            <FaHome size = "50px"/>
        </div>
        // <ParentSize style={{height: '150px'}}>
        //     {({ width, height }) => <OrderTrackingStatusGraph width={width} height={height} />}
        // </ParentSize>
    )
}

export default OrderTracker
