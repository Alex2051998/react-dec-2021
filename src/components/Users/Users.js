import React, {useEffect, useState} from 'react';

import User from "./User";
import {usersServices} from "../../services/users.services";

const Users = ({setUser, getUserById}) => {
    const [users, setUsers] = useState([]);

    const hideInfo = () => {
        setUser(false)
        getUserById(false)
    }

    useEffect(() => {
        usersServices.getAllUsers().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} setUser={setUser} getUserById={getUserById}/>)}
                <hr/>
                <div>
                    <input type="button" value=" hide info" onClick={hideInfo}/>
                </div>

            </div>

        </div>

    );
};

export default Users;