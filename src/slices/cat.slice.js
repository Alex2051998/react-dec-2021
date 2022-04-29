import {createSlice} from "@reduxjs/toolkit";

const initialState = { cats: [], catForUpdate: null };

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
            return{...state, cats:state.cats.filter(cat => cat.id !== action.payload.id)}
            // state.cats.filter(cat => cat.id !== action.payload.id)
        },
        setCatForUpdate:(state, action) => {
            state.catForUpdate = action.payload.cat
            console.log(state.catForUpdate);
        },
        updateCat:(state, action) => {
            const {id, name} = action.payload;
            const index = state.cats.findIndex((cat) => cat.id === id);
            state.cats[index].name = name
            state.catForUpdate = null;
        }

    }
});

const {reducer: catReducer, actions: {addCat, dellCat, setCatForUpdate, updateCat}} = catSlice;

export default catReducer
export const catActions = {
    addCat,
    dellCat,
    setCatForUpdate,
    updateCat
}