import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    const navigate = useNavigate();
    return (
        <div>
            <div>PostID: {postId}</div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <button onClick={()=>navigate('post', {state:{postId}})}>GET POST</button>
            <hr/>
        </div>
    );
};

export default Comment;