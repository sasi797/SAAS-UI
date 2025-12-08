import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "loginPost",
  endpoint: "login",
});

export const { createItem } = thunks;

export const {
  selectList: selectLoginList,
  selectSelected: selectLoginItem,
  selectLoading: selectLoginLoading,
  selectError: selectLoginError,
} = selectors;

export default reducer;
