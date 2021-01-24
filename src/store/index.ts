import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './search/reducer';
import { orderDetailReducer } from './order-detail/reducer';
import { authenticationReducer } from "./auth/reducer";


const rootReducer = combineReducers({
    search: searchReducer,
    orderDetail: orderDetailReducer,
    auth: authenticationReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default configureStore({
    reducer: rootReducer
})
