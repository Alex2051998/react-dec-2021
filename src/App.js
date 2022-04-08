import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import './App.css';
import {useState} from "react";
import UserInfo from "./userInfo/userInfo";


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
