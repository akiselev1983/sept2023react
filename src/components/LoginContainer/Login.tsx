import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {authActions} from "../../store/slices/AuthSlice";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";

const Login = () => {
    const {handleSubmit, reset, register} = useForm<IAuth>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {loginError} = useAppSelector(state => state.auth)
    const {state} = useAppLocation<{pathname:string}>()
    const login:SubmitHandler<IAuth> = async (user)=>{
        const {meta:{requestStatus}} = await dispatch(authActions.login({user}))
        if(requestStatus=='fulfilled'){
            navigate(state?.pathname||'/cars')
        }
    }

    return (
        <div>
            {loginError&&<h5>{loginError}</h5>}
            <form onSubmit={handleSubmit(login)} style={{margin:'10px 0', display:'flex', alignItems:'center'}}>
                <TextField label="username" variant="outlined" {...register('username')}/>
                <TextField label="password" variant="outlined" {...register('password')}/>
                <Button variant={'contained'}>LOGIN</Button>
            </form>
        </div>
        // <div>
        //     {loginError&&<h5>{loginError}</h5>}
        //     <form onSubmit={handleSubmit(login)}>
        //         <input type="text" placeholder="username" {...register('username')}/>
        //         <input type="text" placeholder="password" {...register('password')}/>
        //         <button>LOGIN</button>
        //     </form>
        // </div>
    );
};

export default Login;