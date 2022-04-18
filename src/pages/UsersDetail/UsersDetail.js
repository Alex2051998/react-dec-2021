import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const UsersDetail = () => {
    const {id} = useParams();
    console.log(id);
    const {state} = useLocation();
    console.log(state);

   const [users, setUsers] = useState(null);

    useEffect(()=>{
        if(!state){
            userService.getById(id).then(({data}) => setUsers(data))
        }else{
            setUsers(state);
        }
    },[id, state])
    return (
        <div>
            <div>
                {users && (<UserDetails users={users}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersDetail};