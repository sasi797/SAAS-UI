import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
    name: "consignee",
    endpoint: "/consignees",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;

export const {
    selectList: selectConsigneeList,
    selectSelected: selectConsigneeItem,
    selectLoading: selectConsigneeLoading,
    selectError: selectConsigneeError,
} = selectors;

export default reducer;
