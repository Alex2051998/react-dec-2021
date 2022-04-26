import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../slices/cat.slice";

const Form = () => {

    const catInput = useRef();
    const dispatch = useDispatch();
    return (
        <div>
            Cat Name: <input type={"text"} ref={catInput}/>
            <button onClick={() => dispatch(catActions.addCat({cat: catInput.current.value}))}>Save cat</button>
        </div>
    );
};

export {Form};