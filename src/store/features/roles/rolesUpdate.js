import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "rolesUpdate",
  endpoint: "permissions/resource",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;

export const {
  selectList: selectRolesUpdateList,
  selectSelected: selectRolesUpdateItem,
  selectLoading: selectRolesUpdateLoading,
  selectError: selectRolesUpdateError,
} = selectors;

export default reducer;
