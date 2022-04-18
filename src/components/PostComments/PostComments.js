import React from 'react';

const PostComments = ({postComment}) => {
    const {postId, id, name, email, body} = postComment;
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostComments};