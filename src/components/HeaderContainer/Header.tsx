import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../store/slices/AuthSlice";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const access = authService.getAccessToken()

    useEffect(() => {
        if(access && !currentUser){
            dispatch(authActions.me())
        }
    }, []);

    return (
        <div className={css.Header}>
            <div>
                <h2>Cars</h2>
            </div>

            <div>
                {currentUser
                    ?
                <div>{currentUser.username} -- {currentUser.last_login}</div>
                    :
                    <div>
                        <Link to={'/login'}>LOGIN</Link>
                        <Link to={'/register'}>REGISTER</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;