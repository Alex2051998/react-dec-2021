import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import './App.css';
import {useState} from "react";
import UserInfo from "./userInfo/userInfo";


function App() {
    const [user, setUser] = useState([]);
    const [id, setId] = useState([]);

    const getUserById = async (id) => {
        console.log(id);
        await setId(id);
    }
    return (
        <div>
            <div className={'styleUsers'}>
                <Users setUser={setUser}/>
                <div>
                    {user && <UserInfo user={user} getUserById={getUserById}/>}
                </div>
            </div>

            {id && <Posts id={id}/>}
        </div>
    );
}

export default App;
