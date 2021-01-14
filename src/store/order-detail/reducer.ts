import { OrderDetail } from './../../model/order';
import { ERROR_ORDER_DETAIL, LOADING_ORDER_DETAIL, OrderDetailActionTypes, OrderDetailState, SEARCH_ORDER_DETAIL, SUCCESS_ORDER_DETAIL } from "./types";

const initialState: OrderDetailState = {
    isLoading: false,
    error: false,
    errorMessage: null,
    orderDetail: null
}

export function orderDetailReducer(
    state = initialState,
    action: OrderDetailActionTypes
): OrderDetailState {
    switch (action.type) {
        case SEARCH_ORDER_DETAIL:
            return state;
        case LOADING_ORDER_DETAIL:
            return {
                orderDetail: null,
                isLoading: true,
                error: false,
                errorMessage: null
            };
        case ERROR_ORDER_DETAIL:
            return {
                orderDetail: null,
                isLoading: false,
                error: true,
                errorMessage: action.errorMessage
            };
        case SUCCESS_ORDER_DETAIL:
            return {
                orderDetail: action.orderDetail,
                isLoading: false,
                error: false,
                errorMessage: null
            };
        default:
            return state;
    }
}