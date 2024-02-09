import React, {useEffect, useState} from 'react';
import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
import {commentsService} from "../../services/commentsService";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>

        </div>
    );
};

export default CommentsContainer;