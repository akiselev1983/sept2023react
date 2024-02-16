import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    return (
        <div>
            <div>PostId: {postId}</div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;