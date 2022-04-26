import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: []
};

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {cat} = action.payload;
            const newCat = {id: Date.now(), name: cat}
            state.cats.push(newCat)
        },
        dellCat:(state, action) => {
            state.filter(cat => cat.id != payload.id)
        }
    }
});

const {reducer: catReducer, actions: {addCat}} = catSlice;

export default catReducer
export const catActions = {
    addCat
}