import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {useParams} from "react-router-dom";
import {UserPost} from "../../components";

const UserPosts = () => {
    const {id} = useParams();

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getComentByPost(id).then(({data}) => setUserPosts(data))
    },[id])
    return (
        <div>
            {userPosts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};

export {UserPosts};