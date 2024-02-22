import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services";

const LoginForm = () => {

    const {handleSubmit, register} = useForm()
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const save = async (user) =>{
        try {
            await authService.login(user)
            navigate('/cars')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            {error&&<div>Username or password incorrect</div>}
            <div>USERNAME: <input type="text" {...register('username')}/></div>
            <div>PASSWORD: <input type="text" {...register('password')}/></div>
            <button>LOGIN</button>
        </form>
    );
};

export default LoginForm;