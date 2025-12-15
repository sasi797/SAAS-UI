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
import loginPostReducer from "./features/loginPostSlice";
import verifyotpPostReducer from "./features/verifyOtpPostSlice";
import orderReducer from "./features/orderManagementSlice";
import tripReducer from "./features/tripSlice";
import rolesGetAllReducer from "./features/roles/rolesGetAll";
import rolesUpdateReducer from "./features/roles/rolesUpdate";

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicle: vehicleReducer,
    vehiclemasterpost: vehiclePostReducer,
    location: locationReducer,
    driver: driverReducer,
    client: clientReducer,
    order: orderReducer,
    trip: tripReducer,
    route: routeReducer,
    routeMasterPostPut: routePostPutReducer,
    companyprofile: companyProfileReducer,
    routeMasterGetOne: routeMasterGetOneReducer,
    vehicleMasterGetOne: vehicleMasterGetOneReducer,
    loginPost: loginPostReducer,
    verifyotpPost: verifyotpPostReducer,
    rolesAll: rolesGetAllReducer,
    rolesUpdate: rolesUpdateReducer,
  },
});
