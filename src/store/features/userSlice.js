import { createCrudSlice } from "../helpers/createCrudSlice";

const { reducer, thunks } = createCrudSlice({
  name: "user",
  endpoint: "users",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
export default reducer;

export const selectUserList = (state) => state.user.list;
export const selectUserItem = (state) => state.user.selected;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;
