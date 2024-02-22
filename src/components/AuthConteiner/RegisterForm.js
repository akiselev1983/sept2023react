import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidators} from "../../validators";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    const [error, setError] = useState(null)

    const {register, handleSubmit, formState:{
        errors, isValid}} = useForm({mode:'all', resolver:joiResolver(registerValidators)})

    const  navigate = useNavigate();

    const save = async (user) =>{
        try {
            await authService.register(user)
            navigate('/login')
        }catch (e) {
            setError(true)
        }

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            {error&&<div>!!!Username already exist!!!</div>}
            <div>USERNAME: <input type="text" {...register('username')}/></div>
            {errors.username&&<div>{errors.username.message}</div>}
            <div>PASSWORD: <input type="text" {...register('password')}/></div>
            {errors.password&&<div>{errors.password.message}</div>}
            <div>RE_PASSWORD: <input type="text" {...register('re_password')}/></div>
            {errors.re_password&&<div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>REGISTER</button>
        </form>
    );
};

export default RegisterForm;