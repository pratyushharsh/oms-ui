import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { LOADING_SEARCH_RESULT, SearchState, SUCCESS_SEARCH_ORDER } from '../store/search/types';



function OrderSearch() {
    const [search, setSearch] = useState("")

    const state: SearchState = useSelector(
        (state: RootState) => state.search
    );

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        // console.log(JSON.stringify(state));
        dispatch({
            type: LOADING_SEARCH_RESULT
        });
        await new Promise(r => setTimeout(r, 1000));
        dispatch({
            type: SUCCESS_SEARCH_ORDER
        });
    }

    if (state.isLoading) {
        return (
            <>
                <p>Loading the result.</p>
            </>);
        
    }


    return (
        <div>
            <h1>Order Search</h1>
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='button' onClick={ handleSubmit }>Search</button>
            <p>{ JSON.stringify(state) }</p>
        </div>
    )
}

export default OrderSearch
