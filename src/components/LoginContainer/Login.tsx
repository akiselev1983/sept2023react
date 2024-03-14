import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../store/slices/AuthSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {handleSubmit, reset, register} = useForm<IAuth>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {loginError} = useAppSelector(state => state.auth)
    const login:SubmitHandler<IAuth> = async (user)=>{
        const {meta:{requestStatus}} = await dispatch(authActions.login({user}))
        if(requestStatus=='fulfilled'){
            navigate('/cars')
        }
    }

    return (
        <div>
            {loginError&&<h5>{loginError}</h5>}
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder="username" {...register('username')}/>
                <input type="text" placeholder="password" {...register('password')}/>
                <button>LOGIN</button>
            </form>
        </div>
    );
};

export default Login;