import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "../slices/cat.slice";
import dogReducer from "../slices/dog.slice";

const rootReduser = combineReducers({
    cat:catReducer,
    dog:dogReducer
});

const store = configureStore({
    reducer: rootReduser
});

export default store