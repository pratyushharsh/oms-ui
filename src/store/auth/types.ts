
export enum AuthActionTypes {
    LOGIN_USER = "LOGIN_USER",
    USER_AUTHENTICATED = "USER_AUTHENTICATED",
    USER_LOGGED_IN = "USER_LOGGED_IN",
    USER_LOGGED_OUT = "USER_LOGGED_OUT"
}

export interface User {
    name: string;
    role: string;
}

export interface AuthState {
    isLoggedIn: boolean,
    user?: User;
    token?: string;
}

export interface LoginUserAction {
    type: typeof AuthActionTypes.LOGIN_USER;
    username: string;
    password: string;
}

export interface UserLoggedInAction {
    type: typeof AuthActionTypes.USER_LOGGED_IN,
    user: User
    token: string
}

export interface UserLoggedOutAction {
    type: typeof AuthActionTypes.USER_LOGGED_OUT
}

export type AuthenticationActionTypes =
    LoginUserAction |
    UserLoggedInAction |
    UserLoggedOutAction