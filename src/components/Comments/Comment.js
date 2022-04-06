import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={'styleComment'}>
            postId - {postId}
            <br/>
            id - {id}
            <br/>
            name - {name}
            <br/>
            email - {email}
            <br/>
            body - {body}
            <hr/>
        </div>
    );
};

export default Comment;