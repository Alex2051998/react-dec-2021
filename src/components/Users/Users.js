import React, {useEffect, useState} from 'react';

import User from "./User";
import {usersServices} from "../../services/users.services";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices.getAllUsers()
            .then(value => setUsers(value))
    }, [])
    return (
        <div>
            <h1 className={'header'}>Users</h1>
            <div className={'styleUsers'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>

    );
};

export default Users;