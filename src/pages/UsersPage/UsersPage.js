import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";


const UsersPage = () => {
   const [users, setUsers] = useState(null);

   useEffect(()=>{
       userService.getAll().then(({data}) => setUsers(data))
   },[])
    return (
        <div className={'wrapper'}>
            <div className={'users'}>
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={'usersDetails'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};