import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux";
import {Car} from "./car";
import {axiosService} from "../services";
import {urls} from "../constans";

const Cars = () => {
    const {cars, status} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    },[])


    return (
        <div>
            {status && <h1>{status}</h1>}
            <hr/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};