import React from 'react';

const Post = ({post, getInfoPost}) => {
    const {id, title} = post
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => getInfoPost(post) }>Detail</button>

        </div>
    );
};

export default Post;