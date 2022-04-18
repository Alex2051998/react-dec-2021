import React from 'react';
import {Link} from "react-router-dom";

const UserDetails = ({users}) => {
    const {id, name, username, email, phone, website} = users;
    return (
        <div className={'userDetailsStyle'}>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Username:{username}</div>
            <div>Email:{email}</div>
            <div>Phone:{phone}</div>
            <div>Website:{website}</div>
            <Link to={'posts'}><button>UserDetails</button></Link>
        </div>
    );
};

export {UserDetails};