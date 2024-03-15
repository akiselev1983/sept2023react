import React, {FC, PropsWithChildren} from 'react';
import {authService} from "../services";
import {Navigate} from "react-router-dom";
import {useAppLocation} from "../hooks";

interface IProps extends PropsWithChildren{

}
const AuthRequired:FC<IProps> = ({children}) => {
    const access = authService.getAccessToken()
    const {pathname} = useAppLocation()

    if (!access){
        return <Navigate to={'/login'} state={{pathname}}/>
    }
    return (
        <>
            {children}
        </>
    );
};

export default AuthRequired;