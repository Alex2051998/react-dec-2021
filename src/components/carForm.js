import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux";

const CarForm = () => {
    const { formErrors, carForUpdate } = useSelector(state => state.cars);
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if(carForUpdate){
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    },[carForUpdate])
    const submit = async (newCar) => {
        if(carForUpdate){
            await dispatch(carActions.updateCar({id: carForUpdate.id, car:newCar}))
        }else{
            await dispatch(carActions.create({car:newCar}))
        }
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                model: <input type="text" {...register('model')}/>
            </div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <div>
                price: <input type="text" {...register('price')}/>
            </div>
            {formErrors.model && <span>{formErrors.price[0]}</span>}
            <div>
                year: <input type="text" {...register('year')}/>
            </div>
            {formErrors.model && <span>{formErrors.year[0]}</span>}
            <button>save</button>
        </form>
    );
};

export default CarForm;