import React, {useEffect, useState} from 'react';

import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
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