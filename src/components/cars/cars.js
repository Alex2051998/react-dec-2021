import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../car/car";


const Cars = ({car, setCarForUpdate, carUpdate}) => {
    const [cars, setCars] = useState([]);

    const [deletCar, setDeleteCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [carUpdate])

    useEffect(() => {
        if(car){
            setCars([...cars, car])
        }
    }, [car])

    useEffect(() => {
        if(deletCar){
            carService.getAll().then(({data}) => setCars(data))
        }
    }, [deletCar])




    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setDeleteCar={setDeleteCar} setCarForUpdate={setCarForUpdate} />)}
        </div>
    );
};

export {
    Cars
};