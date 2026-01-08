import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "userCodeDelete",
  endpoint: "dropdown",
});

export const { deleteItem } = thunks;

export const {
  selectList: selectDeleteUserCodesList,
  selectSelected: selectDeleteUserCodesItem,
  selectLoading: selectDeleteUserCodesLoading,
  selectError: selectDeleteUserCodesError,
} = selectors;

export default reducer;
