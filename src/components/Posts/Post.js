import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            userId - {userId}
            <br/>
            id - {id}
            <br/>
            title - {title}
            <br/>
            body - {body}
            <hr/>
        </div>
    );
};

export default Post;