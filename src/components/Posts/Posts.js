// import React, {useEffect, useState} from 'react';

import {Post} from "./Post";

const Posts = ({ data }) => {
    console.log(data);
    // const [posts, setPosts] = useState([]);
    // useEffect( () => {
    //     setPosts(data.data)
    //     console.log(data)
    // }, [data])

    return (
        <div>
            <div className={'stylePosts'}>
                {data.map(post => <Post key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export {Posts};