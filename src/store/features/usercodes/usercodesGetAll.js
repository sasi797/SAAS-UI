import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "userCodeGetAll",
  endpoint: "dropdowns",
});

export const { getAll } = thunks;

export const {
  selectList: selectGetAllUserCodesList,
  selectSelected: selectGetAllUserCodesItem,
  selectLoading: selectGetAllUserCodesLoading,
  selectError: selectGetAllUserCodesError,
} = selectors;

export default reducer;
