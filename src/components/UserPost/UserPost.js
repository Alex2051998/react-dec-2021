import React from 'react';

const UserPost = ({userPost}) => {
    const {userId, id, title, body} = userPost;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {UserPost};