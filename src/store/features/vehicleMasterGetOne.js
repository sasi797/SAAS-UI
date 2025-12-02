import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "vehicleMasterGetOne",
  endpoint: "vehicle-listing",
});

export const { getById } = thunks;

export const {
  selectList: selectVehicleOneList,
  selectSelected: selectVehicleOneItem,
  selectLoading: selectVehicleOneLoading,
  selectError: selectVehicleOneError,
} = selectors;

export default reducer;
