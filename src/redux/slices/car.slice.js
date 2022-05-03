import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";
import {useEffect} from "react";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: null,
};


const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}, rejectWithValue) => {
        try {
            await carService.deleteCar(id);
            dispatch(del({id}));
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, {dispatch}, rejectWithValue) => {
        try {
            await carService.updateByIdCar(id, car);
            dispatch(update({id, car}));
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        del: (state, action) => {
            return {...state, cars: state.cars.filter(car => car.id !== action.payload.id)}
        },
        update: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            console.log(state.cars[index]);
            state.carForUpdate = false;
        },
        setCarForm: (state, action) => {
           state.carForUpdate = action.payload.car;
           // console.log(state.carForUpdate);
        }
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            console.log(action.payload);
            state.cars = action.payload;
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected';
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload);
            state.status = 'completed';
        },
        [create.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors;
        },

    }
});

const {reducer: carReducer, actions: {del, update, setCarForm}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteCar,
    updateCar,
    del,
    update,
    setCarForm,
}

export {
    carReducer,
    carActions
}