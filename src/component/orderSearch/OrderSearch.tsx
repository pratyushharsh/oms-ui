import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchOrdersApi } from '../../api/orderDetailSearch';
import { RootState } from '../../store';
import { ERROR_SEARCHING_ORDER, LOADING_SEARCH_RESULT, OrderSearchResult, SearchState, SUCCESS_SEARCH_ORDER } from '../../store/search/types';
import OrderSearchTable from '../OrderSearchTable';


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
        <>
            <h1>Order Search</h1>
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='button' onClick={ handleSubmit }>Search</button>
            {/* <p>{ JSON.stringify(state) }</p> */}
            {/* <p>{ JSON.stringify(state.orders) }</p> */}
            {state.isLoading ? "Loading Search Result................" : <OrderSearchTable orders={state.orders} />}
        </>
    )
}

export default OrderSearch
