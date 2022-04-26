import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: []
};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {dog} = action.payload;
            const newDog = {id: Date.now(), name: dog}
            state.dogs.push(newDog)
        },
        dellDog:(state, action) => {
            return{...state, dogs:state.dogs.filter(dog => dog.id !== action.payload.id)}
            // state.cats.filter(cat => cat.id !== action.payload.id)
        }
    }
});

const {reducer: dogReducer, actions: {addDog, dellDog}} = dogSlice;

export default dogReducer
export const dogActions = {
    addDog,
    dellDog
}