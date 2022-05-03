import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../redux";
import {carService} from "../services";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(carActions.deleteCar({id}))
    }
    return (
        <div>
            <div>
                <div>
                    Model: {model}
                </div>
                <div>
                    Price: {price}
                </div>
                <div>
                    Year: {year}
                </div>
                <button onClick={() => deleteById()}>Delete</button>
                <button onClick={() => (dispatch(carActions.setCarForm({car})))}>Update</button>
                <hr/>
            </div>
        </div>
    );
};

export {Car};