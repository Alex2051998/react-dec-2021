import React, {useEffect, useState} from 'react';

import Comment from "./Comment";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
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