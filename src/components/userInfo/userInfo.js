import React from 'react';

const UserInfo = ({user, getUserById}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <input type="button"  value="show posts" onClick={() => getUserById(user.id)}/>
        </div>

    );
};

export default UserInfo;

