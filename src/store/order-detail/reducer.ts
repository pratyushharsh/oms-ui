import { OrderDetailsTabs, TabActionTypes, TabsActionTypes } from "./types";

/**
 * This Screen will contain the list of order details in the tabbed view.
 * We are setting up the screen
 */
const initialState: OrderDetailsTabs = {
    tabs: [],
    currentTab: 0
}

export function orderDetailReducer(
    state = initialState,
    action: TabActionTypes
): OrderDetailsTabs {
    switch (action.type) {
        case TabsActionTypes.TAB_ADD_TAB:
            const new_tabs = [...state.tabs, action.payload];
            return {
                ...state,
                tabs: new_tabs,
                currentTab: new_tabs.length - 1
            };
        case TabsActionTypes.TAB_DELETE_TAB:
            const filterd_tab = state.tabs.filter(tab => tab.uuid !== action.uuid)
            return {
                ...state,
                tabs: filterd_tab,
                currentTab: state.currentTab < filterd_tab.length ? state.currentTab : filterd_tab.length - 1
            };
        case TabsActionTypes.TAB_SELECT_TAB:
            return {
                ...state,
                currentTab: action.index
            };
        case TabsActionTypes.TAB_UPDATE_TAB:
            return {
                ...state,
                tabs: state.tabs.map((val, idx) => val.uuid === action.payload.uuid ? action.payload : val),
                currentTab: state.tabs.findIndex(t => t.uuid === action.payload.uuid)
            };
        default:
            return state;
    }
}