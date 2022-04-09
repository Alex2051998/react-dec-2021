import {useState} from "react";

import { Users, UserInfo, Posts } from './components';
// import Posts from "./components/Posts/Posts";
import './App.css';
// import UserInfo from "./components/userInfo/userInfo";


function App() {
    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);

    const getUserById = async (id) => {
        console.log(id);
        await setId(id);
    }
    return (
        <div>
            <div className={'styleUsers'}>
                <div className={'styleUsersLeft'}>
                    <Users setUser={setUser} getUserById={getUserById}/>
                </div>
                <div className={'styleUsersRight'}>
                    {user && <UserInfo user={user} getUserById={getUserById}/>}
                </div>
            </div>

            {id && <Posts id={id}/>}
        </div>
    );
}

export default App;
