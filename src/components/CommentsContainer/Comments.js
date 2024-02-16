import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/PostsService";

import Comment from "./Comment";

const Comments = ({postId}) => {
    console.log(postId)
    const [comments, setComments] = useState([])
    useEffect(() => {
        postsService.getComments(postId).then(({data})=>setComments(data))
    }, [postId]);
    console.log(comments)
    return (
        <div>
            {comments&&comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;