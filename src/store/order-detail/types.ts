import { OrderDetail } from './../../model/order';
export const SEARCH_ORDER_DETAIL = "SEARCH_ORDER_DETAIL";
export const LOADING_ORDER_DETAIL = "LOADING_ORDER_DETAIL";
export const ERROR_ORDER_DETAIL = "ERROR_ORDER_DETAIL";
export const SUCCESS_ORDER_DETAIL = "SUCCESS_ORDER_DETAIL";

export interface OrderDetailState {
    isLoading: boolean,
    error: boolean,
    errorMessage: string | null,
    orderDetail: OrderDetail | null
}

interface OrderDetailAction {
    type: typeof SEARCH_ORDER_DETAIL,
    orderId: string
}

interface LoadingOrderDetailAction {
    type: typeof LOADING_ORDER_DETAIL
}

interface ErrorOrderDetailAction {
    type: typeof ERROR_ORDER_DETAIL,
    errorMessage: string
}

interface SuccessOrderDetailAction {
    type: typeof SUCCESS_ORDER_DETAIL,
    orderDetail: OrderDetail
}

export type OrderDetailActionTypes = OrderDetailAction
    | LoadingOrderDetailAction
    | ErrorOrderDetailAction
    | SuccessOrderDetailAction