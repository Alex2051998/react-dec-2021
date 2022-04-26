import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../slices/cat.slice";

const FormCat = () => {

    const catInput = useRef();
    const dispatch = useDispatch();


    const addAction = () => {
        dispatch(catActions.addCat({cat: catInput.current.value}))
        catInput.current.value = '';
    }
    return (
        <div>
            Cat Name: <input type={"text"} ref={catInput}/>
            <button onClick={() => addAction()}>Save cat</button>
        </div>
    );
};

export {FormCat};