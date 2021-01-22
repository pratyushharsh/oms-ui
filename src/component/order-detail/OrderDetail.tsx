import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { searchOrderDetail, selectTab } from '../../store/order-detail';
import { OrderDetailsTabs } from '../../store/order-detail/types';
import OrderDetailSearch from './OrderDetailSearch';
import OrderTabs from './OrderTabs';
import { useLocation } from "react-router-dom";



function useQuery() {
    return new URLSearchParams(useLocation().search);
} 


function OrderDetail() {

    const [orderId, setorderId] = useState('')

    const dispatch = useDispatch();

    const state: OrderDetailsTabs = useSelector(
        (state: RootState) => state.orderDetail
    )

    const handleSearchOrder = async () => {
        const is_order_exist = state.tabs.findIndex(t => t.orderDetail && t.orderDetail.order_no === orderId);
        if (is_order_exist >= 0) {
            dispatch(selectTab(is_order_exist));
        } else {
            dispatch(searchOrderDetail(orderId));
        }
        setorderId('');
    }

    const handleOrderFromQueryParams = async (order_id: string) => {
        const is_order_exist = state.tabs.findIndex(t => t.orderDetail && t.orderDetail.order_no === order_id);
        if (is_order_exist >= 0) {
            dispatch(selectTab(is_order_exist));
        } else {
            dispatch(searchOrderDetail(order_id));
        }
    }
    let query = useQuery();
    useEffect(() => {
        let q_order = query.get("orderId");
        if (q_order) {
            console.log(`Geting Order for order id ${q_order}`)
            handleOrderFromQueryParams(q_order);
        }
    }, [])

    

    return (
        <div>
            <OrderDetailSearch
                value={orderId}
                onChange={(e) => setorderId(e.target.value)}
                onClick={handleSearchOrder}
            />
            
            {/* <p>{JSON.stringify(state)}</p> */}
            { state.tabs.length > 0 ? <OrderTabs /> : <p>Search For the orders</p> }
        </div>
    )
}

export default OrderDetail
