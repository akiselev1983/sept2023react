import React, {useEffect, useState} from 'react';
import {commentsService} from "../../Services/CommentsService";
import {useLocation} from "react-router-dom";

const Post = () => {

    const {state:{postId}} = useLocation()
    const [post, setPost] = useState({})
    useEffect(() => {
        commentsService.getPost(postId).then(({data})=> setPost(data))
    }, [postId]);
    console.log(post)

    return (
        <div>
            <h1>-----POST-----</h1>

            <div>UserID: {post.userId}</div>
            <div>ID: {post.id}</div>
            <div>TITLE: {post.title}</div>
            <div>BODY: {post.body}</div>


        </div>
    );
};

export default Post;