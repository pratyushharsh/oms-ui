import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchOrdersApi } from '../../api/orderDetailSearch';
import { RootState } from '../../store';
import { ERROR_SEARCHING_ORDER, LOADING_SEARCH_RESULT, OrderSearchResult, SearchState, SUCCESS_SEARCH_ORDER } from '../../store/search/types';
import OrderSearchTable from '../OrderSearchTable';
import OrderSearchBar from './OrderSearchBar'
import { Grid } from '@material-ui/core'


function OrderSearch() {
    const [search, setSearch] = useState("")

    const state: SearchState = useSelector(
        (state: RootState) => state.search
    );

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        dispatch({
            type: LOADING_SEARCH_RESULT
        });
        await new Promise(r => setTimeout(r, 1000));
        try {
            var r: OrderSearchResult[] = await searchOrdersApi('ftyud');
            dispatch({
                type: SUCCESS_SEARCH_ORDER,
                orders: r
            });
        } catch (error) {
            dispatch({
                type: ERROR_SEARCHING_ORDER
            });
        }
    }

    return (
        <div>
            <h1>Order Search</h1>
            <label htmlFor="order-id">Order Id</label>
            <input id="order-id" value={search} onChange={(e) => setSearch(e.target.value)} />
            <label htmlFor="cust-id">CUstomer Id</label>
            <input id="cust-id" value={search} onChange={(e) => setSearch(e.target.value)} />
            <label htmlFor="order-id">Order Id</label>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='button' onClick={ handleSubmit }>Search</button>
            {/* <p>{ JSON.stringify(state) }</p> */}
            {/* <p>{ JSON.stringify(state.orders) }</p> */}
            {state.isLoading ? "Loading Search Result................" : <OrderSearchTable orders={state.orders} />}
        </div>
    )
}

export default OrderSearch
