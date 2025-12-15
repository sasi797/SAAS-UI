import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "rolesAll",
  endpoint: "all-roles-permissions",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;

export const {
  selectList: selectGetAllRolesList,
  selectSelected: selectGetAllRolesItem,
  selectLoading: selectGetAllRolesLoading,
  selectError: selectGetAllRolesError,
} = selectors;

export default reducer;
