import {AuthActionTypes, AuthenticationActionTypes, AuthState} from "./types";

const initialState: AuthState = {
    isLoggedIn: false,
    user: undefined,
    token: undefined
}

export function authenticationReducer(
    state= initialState,
    action: AuthenticationActionTypes
) : AuthState {
    switch (action.type) {
        case AuthActionTypes.USER_LOGGED_IN:
            return {
                ...state,
                user: action.user,
                token: action.token
            }
        case AuthActionTypes.USER_LOGGED_OUT:
            return {
                ...state,
                user: undefined,
                token: undefined
            }
        default:
            return state
    }
}