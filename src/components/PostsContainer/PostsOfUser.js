import React from 'react';
import {useNavigate} from "react-router-dom";

const PostsOfUser = ({post}) => {

    const navigate = useNavigate()
    return (
        <div>
            <div>TITLE: {post.title}</div>
            <button onClick={()=> navigate(`/posts/${post.id}`, {state:{post}})}>POST-DETAILS</button>
            <hr/>
        </div>
    );
};

export default PostsOfUser;