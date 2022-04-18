import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={'userStyle'}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <Link to={id.toString()} state={user}><button>UserDetails</button></Link>
        </div>
    );
};

export {User};