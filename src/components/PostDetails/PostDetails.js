import React from 'react';
import {Link} from "react-router-dom";

const PostDetails = ({posts}) => {
    const {userId, id, title, body} = posts;
    return (
        <div className={'userDetailsStyle'}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <Link to={'comments'}><button>PostComments</button></Link>
        </div>
    );
};

export {PostDetails};