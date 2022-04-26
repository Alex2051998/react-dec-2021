import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "../slices/cat.slice";

const rootReduser = combineReducers({
    cat:catReducer
});

const store = configureStore({
    reducer: rootReduser
});

export default store