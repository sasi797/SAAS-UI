(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/deleteApiMethod.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteApi": ()=>deleteApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const deleteApi = async (url)=>{
    var _process_env_NEXT_PUBLIC_BASE_URL;
    const baseUrl = (_process_env_NEXT_PUBLIC_BASE_URL = ("TURBOPACK compile-time value", "http://91.208.184.64:8000")) === null || _process_env_NEXT_PUBLIC_BASE_URL === void 0 ? void 0 : _process_env_NEXT_PUBLIC_BASE_URL.replace(/\/+$/, ""); // strip trailing /
    const fullUrl = url.startsWith("http") ? url : "".concat(baseUrl).concat(url); // ✅ don't add extra slash
    try {
        const response = await fetch(fullUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        if (response.ok) {
            // Return the successful result (with JWT and user details)
            return result;
        } else {
            // Throw an error with the message from the response
            // throw new Error(result.error?.message || "Something went wrong");
            throw new Error((result === null || result === void 0 ? void 0 : result.message) || "Failed to fetch data");
        }
    } catch (error) {
        console.error("Error in deleteApi:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/getApiMethod.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getApi": ()=>getApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const getApi = async (url)=>{
    var _process_env_NEXT_PUBLIC_BASE_URL;
    const baseUrl = (_process_env_NEXT_PUBLIC_BASE_URL = ("TURBOPACK compile-time value", "http://91.208.184.64:8000")) === null || _process_env_NEXT_PUBLIC_BASE_URL === void 0 ? void 0 : _process_env_NEXT_PUBLIC_BASE_URL.replace(/\/+$/, ""); // strip trailing /
    const fullUrl = url.startsWith("http") ? url : "".concat(baseUrl).concat(url); // ✅ don't add extra slash
    try {
        const response = await fetch(fullUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        if (response.ok) return result;
        throw new Error((result === null || result === void 0 ? void 0 : result.message) || "Failed to fetch data");
    } catch (error) {
        console.error("Error in getApi:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/postApiMethod.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "postApi": ()=>postApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const postApi = async (url, payload)=>{
    var _process_env_NEXT_PUBLIC_BASE_URL;
    const baseUrl = (_process_env_NEXT_PUBLIC_BASE_URL = ("TURBOPACK compile-time value", "http://91.208.184.64:8000")) === null || _process_env_NEXT_PUBLIC_BASE_URL === void 0 ? void 0 : _process_env_NEXT_PUBLIC_BASE_URL.replace(/\/+$/, ""); // strip trailing /
    const fullUrl = url.startsWith("http") ? url : "".concat(baseUrl).concat(url); // ✅ don't add extra slash
    try {
        const response = await fetch(fullUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (response.ok) {
            // Return the successful result (with JWT and user details)
            return result;
        } else {
            // Throw an error with the message from the response
            // throw new Error(result.error?.message || "Something went wrong");
            throw new Error((result === null || result === void 0 ? void 0 : result.message) || "Failed to fetch data");
        }
    } catch (error) {
        // Catch network or other errors
        throw new Error(error.message || "Network error");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/putApiMethod.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "putApi": ()=>putApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const putApi = async (url, payload)=>{
    var _process_env_NEXT_PUBLIC_BASE_URL;
    const baseUrl = (_process_env_NEXT_PUBLIC_BASE_URL = ("TURBOPACK compile-time value", "http://91.208.184.64:8000")) === null || _process_env_NEXT_PUBLIC_BASE_URL === void 0 ? void 0 : _process_env_NEXT_PUBLIC_BASE_URL.replace(/\/+$/, ""); // strip trailing /
    const fullUrl = url.startsWith("http") ? url : "".concat(baseUrl).concat(url); // ✅ don't add extra slash
    try {
        const response = await fetch(fullUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (response.ok) {
            // Return the successful result (with JWT and user details)
            return result;
        } else {
            // Throw an error with the message from the response
            // throw new Error(result.error?.message || "Something went wrong");
            throw new Error((result === null || result === void 0 ? void 0 : result.message) || "Failed to fetch data");
        }
    } catch (error) {
        // Catch network or other errors
        throw new Error(error.message || "Network error");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCrudSlice": ()=>createCrudSlice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deleteApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/deleteApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$postApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/postApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$putApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/putApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
function createCrudSlice(param) {
    let { name, endpoint } = param;
    // 🔹 CRUD Thunks
    const getAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("".concat(name, "/getAll"), async (_, param)=>{
        let { rejectWithValue } = param;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApi"])(endpoint);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const getById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("".concat(name, "/getById"), async (id, param)=>{
        let { rejectWithValue } = param;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApi"])("".concat(endpoint, "/").concat(id));
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const createItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("".concat(name, "/create"), async (data, param)=>{
        let { rejectWithValue } = param;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$postApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postApi"])(endpoint, data);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const updateItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("".concat(name, "/update"), async (param, param1)=>{
        let { id, data } = param, { rejectWithValue } = param1;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$putApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["putApi"])("".concat(endpoint, "/").concat(id), data);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const deleteItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("".concat(name, "/delete"), async (id, param)=>{
        let { rejectWithValue } = param;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deleteApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteApi"])("".concat(endpoint, "/").concat(id));
            return id;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    // 🔹 Initial State
    const initialState = {
        list: [],
        selected: null,
        loading: {
            getAll: false,
            getById: false,
            create: false,
            update: false,
            delete: false
        },
        error: {
            getAll: null,
            getById: null,
            create: null,
            update: null,
            delete: null
        }
    };
    const slice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name,
        initialState,
        reducers: {},
        extraReducers: (builder)=>{
            const setPending = (state, key)=>{
                state.loading[key] = true;
                state.error[key] = null;
            };
            const setRejected = (state, key, action)=>{
                state.loading[key] = false;
                state.error[key] = action.payload;
            };
            builder.addCase(getAll.pending, (s)=>setPending(s, "getAll")).addCase(getAll.fulfilled, (s, a)=>{
                s.loading.getAll = false;
                // s.list = a.payload;
                s.list = a.payload.data || [];
            }).addCase(getAll.rejected, (s, a)=>setRejected(s, "getAll", a)).addCase(getById.pending, (s)=>setPending(s, "getById")).addCase(getById.fulfilled, (s, a)=>{
                s.loading.getById = false;
                s.selected = a.payload;
            }).addCase(getById.rejected, (s, a)=>setRejected(s, "getById", a)).addCase(createItem.pending, (s)=>setPending(s, "create")).addCase(createItem.fulfilled, (s, a)=>{
                s.loading.create = false;
                s.list.push(a.payload);
            }).addCase(createItem.rejected, (s, a)=>setRejected(s, "create", a)).addCase(updateItem.pending, (s)=>setPending(s, "update")).addCase(updateItem.fulfilled, (s, a)=>{
                s.loading.update = false;
                const index = s.list.findIndex((i)=>i.id === a.payload.id);
                if (index !== -1) s.list[index] = a.payload;
            }).addCase(updateItem.rejected, (s, a)=>setRejected(s, "update", a)).addCase(deleteItem.pending, (s)=>setPending(s, "delete")).addCase(deleteItem.fulfilled, (s, a)=>{
                s.loading.delete = false;
                // s.list = s.list.filter((i) => i.id !== a.payload);
                s.list = s.list.filter((i)=>i.user_id !== a.payload);
            }).addCase(deleteItem.rejected, (s, a)=>setRejected(s, "delete", a));
        }
    });
    // 🔹 Auto selectors
    const selectors = {
        selectList: (state)=>state[name].list,
        selectSelected: (state)=>state[name].selected,
        selectLoading: (state)=>state[name].loading,
        selectError: (state)=>state[name].error
    };
    return {
        reducer: slice.reducer,
        thunks: {
            getAll,
            getById,
            createItem,
            updateItem,
            deleteItem
        },
        selectors
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/features/userSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createItem": ()=>createItem,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteItem": ()=>deleteItem,
    "getAll": ()=>getAll,
    "getById": ()=>getById,
    "selectUserError": ()=>selectUserError,
    "selectUserItem": ()=>selectUserItem,
    "selectUserList": ()=>selectUserList,
    "selectUserLoading": ()=>selectUserLoading,
    "updateItem": ()=>updateItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)");
;
const { reducer, thunks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "user",
    endpoint: "/users"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const __TURBOPACK__default__export__ = reducer;
const selectUserList = (state)=>state.user.list;
const selectUserItem = (state)=>state.user.selected;
const selectUserLoading = (state)=>state.user.loading;
const selectUserError = (state)=>state.user.error;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/features/vehicleSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createItem": ()=>createItem,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteItem": ()=>deleteItem,
    "getAll": ()=>getAll,
    "getById": ()=>getById,
    "selectVehicleError": ()=>selectVehicleError,
    "selectVehicleItem": ()=>selectVehicleItem,
    "selectVehicleList": ()=>selectVehicleList,
    "selectVehicleLoading": ()=>selectVehicleLoading,
    "updateItem": ()=>updateItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "vehicle",
    endpoint: "/vehicles"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectVehicleList, selectSelected: selectVehicleItem, selectLoading: selectVehicleLoading, selectError: selectVehicleError } = selectors;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/features/locationSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createItem": ()=>createItem,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteItem": ()=>deleteItem,
    "getAll": ()=>getAll,
    "getById": ()=>getById,
    "selectLocationError": ()=>selectLocationError,
    "selectLocationItem": ()=>selectLocationItem,
    "selectLocationList": ()=>selectLocationList,
    "selectLocationLoading": ()=>selectLocationLoading,
    "updateItem": ()=>updateItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "location",
    endpoint: "/locations"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectLocationList, selectSelected: selectLocationItem, selectLoading: selectLocationLoading, selectError: selectLocationError } = selectors;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/features/driverSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createItem": ()=>createItem,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteItem": ()=>deleteItem,
    "getAll": ()=>getAll,
    "getById": ()=>getById,
    "selectDriverError": ()=>selectDriverError,
    "selectDriverItem": ()=>selectDriverItem,
    "selectDriverList": ()=>selectDriverList,
    "selectDriverLoading": ()=>selectDriverLoading,
    "updateItem": ()=>updateItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "driver",
    endpoint: "/drivers"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectDriverList, selectSelected: selectDriverItem, selectLoading: selectDriverLoading, selectError: selectDriverError } = selectors;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/features/clientSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createItem": ()=>createItem,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteItem": ()=>deleteItem,
    "getAll": ()=>getAll,
    "getById": ()=>getById,
    "selectClientError": ()=>selectClientError,
    "selectClientItem": ()=>selectClientItem,
    "selectClientList": ()=>selectClientList,
    "selectClientLoading": ()=>selectClientLoading,
    "updateItem": ()=>updateItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "client",
    endpoint: "/clients"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectClientList, selectSelected: selectClientItem, selectLoading: selectClientLoading, selectError: selectClientError } = selectors;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/features/consigneeSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createItem": ()=>createItem,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteItem": ()=>deleteItem,
    "getAll": ()=>getAll,
    "getById": ()=>getById,
    "selectConsigneeError": ()=>selectConsigneeError,
    "selectConsigneeItem": ()=>selectConsigneeItem,
    "selectConsigneeList": ()=>selectConsigneeList,
    "selectConsigneeLoading": ()=>selectConsigneeLoading,
    "updateItem": ()=>updateItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-client] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "consignee",
    endpoint: "/consignees"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectConsigneeList, selectSelected: selectConsigneeItem, selectLoading: selectConsigneeLoading, selectError: selectConsigneeError } = selectors;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/store.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$userSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/userSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$vehicleSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/vehicleSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$locationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/locationSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$driverSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/driverSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$clientSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/clientSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$consigneeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/consigneeSlice.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$userSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        vehicle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$vehicleSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        location: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$locationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$driverSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$clientSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        consignee: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$consigneeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/Provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReduxProvider": ()=>ReduxProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.js [app-client] (ecmascript)");
"use client";
;
;
;
function ReduxProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/store/Provider.js",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b8b2ddbd._.js.map