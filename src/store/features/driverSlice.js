import { createCrudSlice } from "@/store/helpers/createCrudSlice";

const { reducer, thunks, selectors } = createCrudSlice({
    name: "driver",
    endpoint: "/drivers",
});

export const { getAll, getById, createItem, updateItem, deleteItem } = thunks;

export const {
    selectList: selectDriverList,
    selectSelected: selectDriverItem,
    selectLoading: selectDriverLoading,
    selectError: selectDriverError,
} = selectors;

export default reducer;
