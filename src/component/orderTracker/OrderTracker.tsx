import React from 'react'
// import { FaClipboardList, FaBoxOpen, FaTruck, FaHome, FaCheck } from "react-icons/fa";
import ProgressLine from './ProgressLine'
import './OrderTracker.css';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import OrderTrackingStatusGraph from './OrderTrakingStatusGraph';

function OrderTracker() {
    return (
        <ParentSize style={{height: '500px'}}>
            {({ width, height }) => <OrderTrackingStatusGraph width={width} height={height} />}
        </ParentSize>
    )
}

export default OrderTracker
