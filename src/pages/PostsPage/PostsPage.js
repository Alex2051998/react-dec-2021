import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       postService.getAll().then(({data}) => setPosts(data));
   },[])
    return (
        <div className={'wrapper'}>
            <div className={'users'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={'usersDetails'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};