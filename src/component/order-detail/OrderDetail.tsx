import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { searchOrderDetail, selectTab } from '../../store/order-detail';
import { OrderDetailsTabs } from '../../store/order-detail/types';
import OrderDetailSearch from './OrderDetailSearch';
import OrderTabs from './OrderTabs';




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
