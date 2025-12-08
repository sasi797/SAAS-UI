import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
  name: "verifyotpPost",
  endpoint: "verify-otp",
});

export const { createItem } = thunks;

export const {
  selectList: selectVerifyOTPList,
  selectSelected: selectVerifyOTPItem,
  selectLoading: selectVerifyOTPLoading,
  selectError: selectVerifyOTPError,
} = selectors;

export default reducer;
