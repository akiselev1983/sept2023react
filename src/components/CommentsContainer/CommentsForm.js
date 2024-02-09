import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../services/commentsService";
import {usersService} from "../../services/usersService";


const CommentsForm = ({setComments}) => {
    const {register, reset,handleSubmit} = useForm()

    const save = (comment) => {
        console.log(comment)
        commentsService.create(comment).then(({data})=> setComments(prev=> [...prev, data]))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'postId'} {...register('postId')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>SAVE</button>

            </form>

        </div>
    );
};

export default CommentsForm;