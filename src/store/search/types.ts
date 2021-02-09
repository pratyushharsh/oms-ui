export const SEARCH_ORDER = "SEARCH_ORDER";
export const LOADING_SEARCH_RESULT = "LOADING_SEARCH_RESULT";
export const ERROR_SEARCHING_ORDER = "ERROR_SEARCHING_ORDER";
export const SUCCESS_SEARCH_ORDER = "SUCCESS_SEARCH_ORDER";


export enum OrderStatusEnum {
    INPROGRESS = 'INPROGRESS',
    READY_FOR_PICKUP = 'READY_FOR_PICKUP',
    CANCELLED = 'CANCELLED',
    SHIPPED = 'SHIPPED'
}

export enum OrderTypeEnum {
    REVERSE,
    FORWARD
}

export interface OrderSearchResult {
    
    orderId: string,
    orderDate: Date,
    customerId: string,
    customerName: string;
    orderType: string,
    orderStatus: string,
    orderTotal: number
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
    type: typeof SEARCH_ORDER | typeof LOADING_SEARCH_RESULT | typeof ERROR_SEARCHING_ORDER
    searchCriteria: SearchCriteria
}

interface SuccessSearchOrdersAction {
    type: typeof SUCCESS_SEARCH_ORDER
    orders: OrderSearchResult[]
}

export type SearchActionTypes = SearchOrderAction | SuccessSearchOrdersAction