import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={'userStyle'}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <Link to={id.toString()} state={post}><button>PostDetails</button></Link>
        </div>
    );
};

export {Post};