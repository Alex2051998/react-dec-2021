import React from 'react';

const User = ({user, setUser}) => {
    const {id, name, username} = user;

    return (
        <div>
            {id}-{name}-{username}
            <div>
                <input type="button" value="show info" onClick={() => setUser(user)}/>
            </div>
        </div>
    );
};

export default User;