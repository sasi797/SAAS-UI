import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "rolesAll",
  endpoint: "trip-listing",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;

export const {
  selectList: selectGetAllTripList,
  selectSelected: selectGetAllTripItem,
  selectLoading: selectGetAllTripLoading,
  selectError: selectGetAllTripError,
} = selectors;

export default reducer;
