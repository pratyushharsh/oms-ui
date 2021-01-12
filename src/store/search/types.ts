export const SEARCH_ORDER = "SEARCH_ORDER";
export const LOADING_SEARCH_RESULT = "LOADING_SEARCH_RESULT";
export const ERROR_SEARCHING_ORDER = "ERROR_SEARCHING_ORDER";
export const SUCCESS_SEARCH_ORDER = "SUCCESS_SEARCH_ORDER";


export enum OrderStatusEnum {
    INPROGRESS,
    READY_FOR_PICKUP,
    CANCELLED,
    SHIPPED
}

export enum OrderTypeEnum {
    REVERSE,
    FORWARD
}

export interface OrderSearchResult {
    orderId: string,
    orderDate: Date,
    customerId: string,
    orderType: OrderTypeEnum,
    orderStatus: OrderStatusEnum,
    amountDue: number
}

export interface SearchState {
    isLoading: boolean
    error: boolean
    errorMessage: string | null
    orders: OrderSearchResult[]
}

export interface SearchCriteria {
    orderId: string
}

interface SearchOrderAction {
    type: typeof SEARCH_ORDER | typeof LOADING_SEARCH_RESULT | typeof ERROR_SEARCHING_ORDER | typeof SUCCESS_SEARCH_ORDER
    searchCriteria: SearchCriteria
}

export type SearchActionTypes = SearchOrderAction