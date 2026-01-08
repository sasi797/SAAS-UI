import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "userCodeCreate",
  endpoint: "dropdown",
});

export const { createItem } = thunks;

export const {
  selectList: selectCreateUserCodesList,
  selectSelected: selectCreateUserCodesItem,
  selectLoading: selectCreateUserCodesLoading,
  selectError: selectCreateUserCodesError,
} = selectors;

export default reducer;
