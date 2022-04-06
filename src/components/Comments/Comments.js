import React, {useEffect, useState} from 'react';

import Comment from "./Comment";
import {commentsServices} from "../../services/comments.services";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
       commentsServices.getAllComments()
            .then(value => setComments(value))
    },[])
    return (
        <div>
            <h2 className={'header'}>Comments</h2>
            <div className={'styleComments'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;