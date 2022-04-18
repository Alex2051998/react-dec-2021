import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {useParams} from "react-router-dom";
import {PostComments} from "../../components";

const PostsComments = () => {
    const {id} =useParams();

    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        postService.getUserByPost(id).then(({data}) => setPostComments(data))
    }, [])
    return (
        <div>
            {postComments.map(postComment => <PostComments key={postComment.id} postComment={postComment}/>)}
        </div>
    );
};

export {PostsComments};