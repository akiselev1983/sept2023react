import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './Header.module.css'
import {authService} from "../../services";

const Header = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const token = authService.getToken()

    useEffect(() => {
        if (token){
            authService.me().then(({data})=> setUser(data)).catch(()=>navigate('/login'))
        } else {
            setUser(null)
        }
    }, [token, navigate]);

    const logout = () =>{
        authService.deleteToken()
        navigate('/login')
    }

    return (
        <div className={css.Header}>
            <div><h1>CARS</h1></div>

            <div>
                {
                    !user?(

                        <div>
                            <NavLink to={'login'}>LOGIN</NavLink>
                            <NavLink to={'register'}>REGISTER</NavLink>
                        </div>
                    ):
                        <div>
                            <div>{user.username}</div>
                            <div><button onClick={logout}>Logout</button></div>
                        </div>
            }
            </div>

        </div>
    );
};

export default Header;