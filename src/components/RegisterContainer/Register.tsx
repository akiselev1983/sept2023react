import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../store/slices/AuthSlice";
import {useNavigate} from "react-router-dom";
import {isFulfilled} from "@reduxjs/toolkit";
import {Button, TextField} from "@mui/material";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>()
    const dispatch = useAppDispatch()
    const {registerError} = useAppSelector(state => state.auth);
    const navigate = useNavigate()

    const reg:SubmitHandler<IAuth> = async (user)=>{
        const {meta:{requestStatus}} = await dispatch(authActions.register({user}))
        if(requestStatus=='fulfilled'){
            navigate('/login')
        }
    }

    return (
        <div>
            {registerError&&<h5>{registerError}</h5>}
            <form onSubmit={handleSubmit(reg)} style={{margin:'10px 0', display:'flex', alignItems:'center'}}>
                <TextField label="username" variant="outlined" {...register('username')}/>
                <TextField label="password" variant="outlined" {...register('password')}/>
                <Button variant={'contained'}>REGISTER</Button>
                {/*<input type="text" placeholder="username" {...register('username')}/>*/}
                {/*<input type="text" placeholder="password" {...register('password')}/>*/}
                {/*<button>REGISTER</button>*/}
            </form>
        </div>
    );
};

export default Register;