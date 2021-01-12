import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { searchReducer } from './search/reducer';


const rootReducer = combineReducers({
    search: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default configureStore({
    reducer: rootReducer
})
