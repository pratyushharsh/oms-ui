import { SearchState, SearchActionTypes, SEARCH_ORDER, LOADING_SEARCH_RESULT, SUCCESS_SEARCH_ORDER, ERROR_SEARCHING_ORDER } from './types';

const initialState: SearchState =  {
    isLoading: false,
    error: false,
    errorMessage: 'This is the message',
    orders: []
}

export function searchReducer(
    state = initialState,
    action: SearchActionTypes
): SearchState {
    console.log(`Lgieg reughregre ${JSON.stringify(action)}`);
    switch (action.type) {
        case LOADING_SEARCH_RESULT:
            return {
                ...state,
                isLoading: true,
                errorMessage: "............"
            }
        case SUCCESS_SEARCH_ORDER:
            return {
                ...state,
                isLoading: false,
                errorMessage: "Success"
            }
        case SEARCH_ORDER:
            return {
                ...state,
                isLoading: true,
                errorMessage: ">>>>>>>>>>>>>>>>>>>>>>>"
            }
        case ERROR_SEARCHING_ORDER:
            return {
                ...state,
                isLoading: true,
                errorMessage: "****************************"
            }
        default:
            return state
    }
}