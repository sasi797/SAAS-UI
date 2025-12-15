import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "trip",
  endpoint: "trip-master/resource",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;

export const {
  selectList: selectTripList,
  selectSelected: selectTripItem,
  selectLoading: selectTripLoading,
  selectError: selectTripError,
} = selectors;

export default reducer;
