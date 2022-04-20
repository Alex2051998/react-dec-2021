import React from 'react';

const Cat = ({cat, dispach}) => {
    const {id, name} = cat;
    return (
        <div>
            Name: {name} <button onClick={() => dispach({type: 'delCat', payload: id})}>delCat</button>
        </div>
    );
};

export default Cat;