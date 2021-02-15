import history from "../../history";
import { AuthActionTypes } from "./types";


export const loginUser = (username: string, password: string) => (dispatch: any) => {
    if (username === 'admin' && password === '1234') {
        dispatch({
            type: AuthActionTypes.USER_LOGGED_IN,
            user: {
                name: 'Pratyush',
                role: 'Admin'
            }
        })
        history.push("/")
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
    }
    
}

export const logout = () => (dispatch: any) => {
    dispatch({
        type: AuthActionTypes.USER_LOGGED_OUT
    })
}