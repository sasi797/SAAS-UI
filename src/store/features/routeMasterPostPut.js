import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "routeMasterPostPut",
  endpoint: "route",
});

export const { createItem, updateItem } = thunks;

export const {
  selectList: selectRouteList,
  selectSelected: selectRouteItem,
  selectLoading: selectRouteLoading,
  selectError: selectRouteError,
} = selectors;

export default reducer;
