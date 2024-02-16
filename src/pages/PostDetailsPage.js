import React from 'react';
import {useLocation} from "react-router-dom";
import Comments from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const {state:{post}} = useLocation()

    const {userId, id, title, body} = post
    return (
        <div>
            <h1>----POST-DETAILS----</h1>
            <div>UserID: {userId}</div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export default PostDetailsPage;