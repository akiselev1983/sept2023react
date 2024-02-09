import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services/usersService";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit,reset} = useForm();
    const save = (user) => {
        usersService.create(user).then(({data}) => setUsers(prev=>[...prev, data]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'surname'} {...register('surname')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>SAVE</button>
            </form>
            
        </div>
    );
};

export default UserForm;