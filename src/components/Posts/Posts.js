import React, {useEffect, useState} from 'react';

import Post from "./Post";
import {postsServices} from "../../services/posts.services";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        postsServices.getAllPosts()
            .then(value => {
                value.length = 10
                return value
            })
            .then(value => setPosts(value))
    }, [])
    return (
        <div>
            <h1 className={'header'}>Posts</h1>
            <div className={'stylePosts'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export default Posts;