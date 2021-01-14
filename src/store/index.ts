import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './search/reducer';
import { orderDetailReducer } from './order-detail/reducer';


const rootReducer = combineReducers({
    search: searchReducer,
    orderDetail: orderDetailReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default configureStore({
    reducer: rootReducer
})
