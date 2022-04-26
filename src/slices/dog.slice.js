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
            const [newDogs] = state.dogs.slice(-1);
            const newId = newDogs ? newDogs.id + 1 : 0;
            const newDog = {id: newId, name: dog};
            state.dogs.push(newDog);
            console.log(newDog);
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