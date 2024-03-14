import {configureStore} from "@reduxjs/toolkit";
import {carReducer, loadingReducer} from "./slices";
import {authReducer} from "./slices/AuthSlice";

const store = configureStore({
    reducer:{
        loadingReducer,
        auth: authReducer,
        cars: carReducer
    }
})

export {store}