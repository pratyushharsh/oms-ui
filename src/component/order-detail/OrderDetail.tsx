import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { searchOrderDetail, selectTab } from '../../store/order-detail';
import { OrderDetailsTabs } from '../../store/order-detail/types';
import OrderDetailSearch from './OrderDetailSearch';
import OrderTabs from './OrderTabs';
import { useLocation } from "react-router-dom";
import FormHelperText from '@material-ui/core/FormHelperText';



function useQuery() {
    return new URLSearchParams(useLocation().search);
} 


function OrderDetail() {

    const [orderId, setorderId] = useState('')
    const [isError, setIsError] = useState(false)

    const dispatch = useDispatch();

    const state: OrderDetailsTabs = useSelector(
        (state: RootState) => state.orderDetail
    )

    const handleSearchOrder = async () => {

        if( orderId === ''){
            setIsError(true)
            return 
        }

        const is_order_exist = state.tabs.findIndex(t => t.orderDetail && t.orderDetail.order_no === orderId);
        if (is_order_exist >= 0) {
            dispatch(selectTab(is_order_exist));
        } else {
            dispatch(searchOrderDetail(orderId));
        }
        setorderId('');
        setIsError(false)
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
            { isError === true ? <FormHelperText error>*Please enter a value before searching.</FormHelperText> : ''}
            
            {/* <p>{JSON.stringify(state)}</p> */}
            { state.tabs.length > 0 ? <OrderTabs /> : <p>Search For the orders</p> }
        </div>
    )
}

export default OrderDetail
