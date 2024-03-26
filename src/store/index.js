import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import miscReducer from "./slices/misc-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        misc: miscReducer
    }
});

export default store;
