import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../slices/cat.slice";

const Cat = ({cat}) => {
    const {id, name} = cat;

    const dispatch = useDispatch();
    return (
        <div>
            Name: {name}
            <button onClick={()=>dispatch(catActions.dellCat({id: id}))}>Del cat</button>
        </div>
    );
};

export {Cat};