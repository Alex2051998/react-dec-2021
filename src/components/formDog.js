import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../slices/dog.slice";

const FormDog = () => {
    const dogInput = useRef();
    const dispatch = useDispatch();


    const addAction = () => {
        dispatch(dogActions.addDog({dog: dogInput.current.value}))
        dogInput.current.value = '';
    }

    return (
        <div>
            Dog Name: <input type={"text"} ref={dogInput}/>
            <button onClick={() => addAction()}>Save dog</button>
        </div>
    );
};

export {FormDog};