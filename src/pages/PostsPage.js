import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {usersService} from "../services/UsersService";
import PostsOfUser from "../components/PostsContainer/PostsOfUser";

const PostDetailsPage = () => {

    const [userPosts, setUserPosts] = useState(null)
    const {state:{userId}} = useLocation()

    useEffect(() => {
        usersService.getPostsByUserId(userId).then(({data})=>setUserPosts(data))
    }, [userId]);
    console.log(userPosts)

    return (
        <div>
            <h1>----TITLE-POSTS---</h1>
            {userPosts && userPosts.map(post => <PostsOfUser post={post} key={post.id} />)}
        </div>
    );
};

export default PostDetailsPage;