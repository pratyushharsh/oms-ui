import {useSelector} from "react-redux";
import {RootState} from "../store";
import {AuthState} from "../store/auth/types";
import { Redirect } from 'react-router-dom';

export interface VerifyAuthenticatedProps {
    children: React.ReactNode;
}

export const VerifyAuthenticated = (props: VerifyAuthenticatedProps) => {
    const state: AuthState = useSelector(
        (state: RootState) => state.auth
    );
    console.log(`User login state: ${JSON.stringify(state)}`)
    return (<>
        {state.user ? props.children : <Redirect to={"/login"} />}
    </>);
}