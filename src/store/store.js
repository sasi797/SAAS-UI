import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import vehicleReducer from "./features/vehicleSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        vehicle: vehicleReducer,
    },
});
