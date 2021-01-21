import { OrderDetail } from './../../model/order';

export interface OrderDetailsTabs {
    tabs: OrderDetailTabState[],
    currentTab: number,
    editMode?: boolean
}

export interface OrderDetailTabState {
    uuid: string,
    isLoading: boolean,
    error: boolean,
    errorMessage: string | null,
    orderDetail: OrderDetail | null
}

export enum TabsActionTypes {
    TAB_INIT_TAB = "TAB_INIT_TAB",
    TAB_ADD_TAB = "TAB_ADD_TAB",
    TAB_SELECT_TAB = "TAB_SELECT_TAB",
    TAB_DELETE_TAB = "TAB_DELETE_TAB",
    TAB_UPDATE_TAB = "TAB_UPDATE_TAB"
}

export interface AddNewTabAction {
    type: typeof TabsActionTypes.TAB_ADD_TAB,
    payload: OrderDetailTabState
}

export interface SelectTabAction {
    type: typeof TabsActionTypes.TAB_SELECT_TAB,
    index: number
}

export interface DeleteTabAction {
    type: typeof TabsActionTypes.TAB_DELETE_TAB,
    uuid: string
}

export interface UpdateTabAction {
    type: typeof TabsActionTypes.TAB_UPDATE_TAB,
    payload: OrderDetailTabState
}

export type TabActionTypes = AddNewTabAction
    | SelectTabAction
    | DeleteTabAction
    | UpdateTabAction
