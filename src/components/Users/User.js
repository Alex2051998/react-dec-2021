import React from 'react';

const User = ({user, setUser, getUserById}) => {
    const {id, name, username} = user;

    const click = () => {
        getUserById(false)
        setUser(user)
    }

    return (
        <div>
            {id}-{name}-{username}
            <div>
                <input type="button" value="show info" onClick={click}/>
            </div>
        </div>
    );
};

export {User};