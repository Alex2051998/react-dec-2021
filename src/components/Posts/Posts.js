import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import {postsServices} from "../../services";

const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        postsServices.getByIdPosts(id).then(({data}) => setPosts(data))
    }, [id])
    return (
        <div>
            <div className={'stylePosts'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export {Posts};