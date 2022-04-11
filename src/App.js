import {useState} from "react";

import { Users, UserInfo, Posts } from './components';
import './App.css';
import {postsServices} from "./services";


function App() {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);

    const getUserById = async (id) => {
        const data = await postsServices.getByIdPosts(id);
        console.log(id);
        setData(data.data);
        console.log(data);
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

            {data && <Posts data={data}/>}
        </div>
    );
}

export default App;
