import React from 'react';

import {carService} from "../../services";

const Car = ({car, setDeleteCar, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
     const deleteCar = await carService.deleteById(id);
        setDeleteCar(deleteCar)
        console.log(deleteCar);
    }


    return (
        <div>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <br/>
            <button onClick={()=>deleteCar()}>DeleteCar</button>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
        </div>
    );
};

export {
    Car
};