import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import vehicleReducer from "./features/vehicleSlice";
import locationReducer from "./features/locationSlice";
import driverReducer from "./features/driverSlice";
import clientReducer from "./features/clientSlice";
import routeReducer from "./features/routeSlice";
import companyProfileReducer from "./features/companyProfileSlice";
import vehiclePostReducer from "./features/vehicleMasterPost";
import routePostPutReducer from "./features/routeMasterPostPut";
import routeMasterGetOneReducer from "./features/routeMasterGetOne";
import vehicleMasterGetOneReducer from "./features/vehicleMasterGetOne";

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicle: vehicleReducer,
    vehiclemasterpost: vehiclePostReducer,
    location: locationReducer,
    driver: driverReducer,
    client: clientReducer,
    route: routeReducer,
    routeMasterPostPut: routePostPutReducer,
    companyprofile: companyProfileReducer,
    routeMasterGetOne: routeMasterGetOneReducer,
    vehicleMasterGetOne: vehicleMasterGetOneReducer,
  },
});
