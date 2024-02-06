import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/postService";
import Post from "../Post/Post";
import PostDetail from "../PostDetail/PostDetail";
import css from './Posts.module.css'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDetail, setPostDetail] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getInfoPost = (post) => {
        console.log(post)
        setPostDetail(post)
    }

    return (
        <div className={css.Posts}>
            <div>{posts.map(post => <Post post={post} key={post.id} getInfoPost={getInfoPost}/>)}</div>
            <hr/>
            <div>{postDetail && <PostDetail postDetail={postDetail}/>}</div>
        </div>
    );
};

export default Posts;