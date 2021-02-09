import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchOrdersApi } from '../../api/orderDetailSearch';
import { RootState } from '../../store';
import { ERROR_SEARCHING_ORDER, LOADING_SEARCH_RESULT, OrderSearchResult, SearchState, SUCCESS_SEARCH_ORDER } from '../../store/search/types';
import OrderSearchTable from '../OrderSearchTable';
import OrderSearchBar from './OrderSearchBar'
import { Grid } from '@material-ui/core'
import searchImage from '../../img/orderSearch.svg'


function OrderSearch() {
    const [search, setSearch] = useState("")

    const state: SearchState = useSelector(
        (state: RootState) => state.search
    );

    

    // const formik = useFormik({
    //     initialValues: {
            
    //         orderId : '',
    //         orderDate : '',
    //         customerId: '',
    //         customerName: '',
    //         orderType: '',
    //         orderStatus: ''
            
    //     },
    //     onSubmit: (values) => {
    //         console.log( formik.values);
    //     },
    // });

    return (
        <div>
            {/* <h1>Order Search</h1>
                <label htmlFor="order-id">Order Id</label>
                <input id="order-id" value={search} onChange={(e) => setSearch(e.target.value)} />
                <label htmlFor="cust-id">CUstomer Id</label>
                <input id="cust-id" value={search} onChange={(e) => setSearch(e.target.value)} />
                <label htmlFor="order-id">Order Id</label>
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='button' onClick={ handleSubmit }>Search</button> */}

            <Grid container spacing = {2}>
                <Grid item xs = {12}>
                    <OrderSearchBar />
                </Grid>
                {/* <Grid item xs = {4}>
                    <OrderSearchBar
                        value={formik.values.orderDate}
                        onChange={formik.handleChange}
                        // onClick={handleSubmit}
                        placeholder = {'Search Using Order Date'}
                        name = {'orderDate'}
                        type = {'date'}
                        
                    />
                </Grid>
                <Grid item xs = {4}>
                    <OrderSearchBar
                        value={formik.values.customerId}
                        onChange={formik.handleChange}
                        // onClick={handleSubmit}
                        placeholder = {'Search Using Customer Id'}
                        name = {'customerId'}
                    />
                </Grid>
                <Grid item xs = {4}>
                    <OrderSearchBar
                        value={formik.values.customerName}
                        onChange={formik.handleChange}
                        // onClick={handleSubmit}
                        placeholder = {'Search Using Customer Name'}
                        name = {'customerName'}
                    />
                </Grid>
                <Grid item xs = {4}>
                    <OrderSearchBar
                        value={formik.values.orderType}
                        onChange={formik.handleChange}
                        // onClick={handleSubmit}
                        placeholder = {'Search Using Order Type'}
                        name = {'orderType'}
                    />
                </Grid>
                <Grid item xs = {4}>
                    <OrderSearchBar
                        value={formik.values.orderStatus}
                        onChange={formik.handleChange}
                        // onClick={handleSubmit}
                        placeholder = {'Search Using Order Status'}
                        name = {'orderStatus'}
                    />
                </Grid> */}
            </Grid>

            {/* <p>{ JSON.stringify(state) }</p>
            <p>{ JSON.stringify(state.orders) }</p> */}
            {/* {state.isLoading ? "Loading Search Result................" <img src= {searchImage}> : <OrderSearchTable orders={state.orders} />} */}
            {state.isLoading ?  <div style = {{ width: '100%', textAlign: 'center', marginTop: '20px'}}><img src= {searchImage} width="300" height="300" /> </div>: <OrderSearchTable orders={state.orders} />}
        </div>
    )
}

export default OrderSearch
