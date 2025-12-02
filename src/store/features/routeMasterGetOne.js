import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "routeMasterGetOne",
  endpoint: "route-detail",
});

export const { getById } = thunks;

export const {
  selectList: selectRouteOneList,
  selectSelected: selectRouteOneItem,
  selectLoading: selectRouteOneLoading,
  selectError: selectRouteOneError,
} = selectors;

export default reducer;
