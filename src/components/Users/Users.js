import React, {useEffect, useState} from 'react';

import User from "./User";
import {usersServices} from "../../services/users.services";

const Users = ({setUser}) => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        usersServices.getAllUsers().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <div>
                    {users.map(user => <User key={user.id} user={user} setUser={setUser}/>)}
            </div>

        </div>

    );
};

export default Users;