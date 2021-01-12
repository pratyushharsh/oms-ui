import { SearchCriteria, SEARCH_ORDER, SearchActionTypes } from './types';

export function searchForOrders(criteria: SearchCriteria): SearchActionTypes {
    return {
        type: SEARCH_ORDER,
        searchCriteria: criteria
    }
}