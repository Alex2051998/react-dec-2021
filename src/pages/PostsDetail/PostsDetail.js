import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const PostsDetail = () => {
    const {id} = useParams();
    const {state} = useLocation();
    console.log(id);
    console.log(state);

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if(!state){
            postService.getById(id).then(({data}) => setPosts(data))
        }else{
            setPosts(state)
        }

    }, [id, state])

    return (

        <div>
            <div>
                {posts && <PostDetails posts={posts}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsDetail};