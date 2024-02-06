import React from 'react';

const PostDetail = ({postDetail}) => {
    const {userId, id, title, body} = postDetail
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>

        </div>
    );
};

export default PostDetail;