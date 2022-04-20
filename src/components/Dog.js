import React from 'react';

const Dog = ({dog, dispach}) => {
    const {id, name} = dog;
    return (
        <div>
            Name: {name}
            <button onClick={() => dispach({type: 'delDog', payload: id})}>delDog</button>
        </div>
    );
};

export default Dog;