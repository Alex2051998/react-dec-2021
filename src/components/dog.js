import React from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../slices/dog.slice";

const Dog = ({dog}) => {
    const {id, name} = dog;

    const dispatch = useDispatch();
    return (
        <div>
            Name: {name}
            <button onClick={()=>dispatch(dogActions.dellDog({id}))}>Del dog</button>
        </div>
    );
};

export {Dog};