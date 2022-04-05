import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
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