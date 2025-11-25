module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs) <export randomFillSync as default>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
}),
"[externals]/node:util [external] (node:util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[project]/src/app/components/datasecurity/useDecrypt.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/decrypt.js [app-ssr] (ecmascript)");
;
const useDecrypt = ()=>{
    const decrypt = async (jwt)=>{
        try {
            const secret = new TextEncoder().encode(("TURBOPACK compile-time value", "Audit-Pro@674*34@560987654321qwe"));
            const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecrypt"])(jwt, secret);
            return payload;
        } catch (error) {
            console.error("Decryption error:", error);
            return null;
        }
    };
    return {
        decrypt
    };
};
const __TURBOPACK__default__export__ = useDecrypt;
}),
"[project]/src/app/components/SessionStorageSecurity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "customDecrypt": ()=>customDecrypt,
    "customEncrypt": ()=>customEncrypt
});
const SECRET_KEY = "Audit-Pro@674*34@560987654321qwe";
const customEncrypt = (text)=>{
    let result = "";
    for(let i = 0; i < text?.length; i++){
        const keyChar = SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
        const textChar = text.charCodeAt(i);
        result += String.fromCharCode(textChar ^ keyChar);
    }
    return btoa(result); // base64 encode the result
};
const customDecrypt = (cipherText)=>{
    try {
        const decoded = atob(cipherText); // base64 decode
        let result = "";
        for(let i = 0; i < decoded.length; i++){
            const keyChar = SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
            const textChar = decoded.charCodeAt(i);
            result += String.fromCharCode(textChar ^ keyChar);
        }
        return result;
    } catch (e) {
        console.error("Decryption error:", e);
        return null;
    }
};
}),
"[project]/src/utils/deleteApiMethod.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "deleteApi": ()=>deleteApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SessionStorageSecurity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/encrypt.js [app-ssr] (ecmascript)");
;
;
const deleteApi = async (url)=>{
    const baseUrl = ("TURBOPACK compile-time value", "https://transport.thelinkworks.com");
    // const token = sessionStorage.getItem("verifyotp-jwt-token");
    let [path, queryString] = url.split("?");
    // Step 1: Encrypt the last path segment (ID)
    const urlParts = path.split("/");
    const lastPart = urlParts.pop(); // e.g., 2739
    if (/^\d+$/.test(lastPart)) {
        // Case 1: single numeric ID
        const encryptedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customEncrypt"])(lastPart);
        urlParts.push(encryptedId);
    } else if (/^\d+(,\d+)+$/.test(lastPart)) {
        // Case 2: multiple IDs separated by commas
        const encryptedIds = lastPart.split(",").map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customEncrypt"])(id)).join(",");
        urlParts.push(encryptedIds);
    } else {
        urlParts.push(lastPart); // not an ID, keep as-is
    }
    // const encryptedId = customEncrypt(lastPart);
    // urlParts.push(encryptedId);
    let encryptedPath = urlParts.join("/");
    // Step 2: If query params exist, encrypt them as a single "en_url" param
    if (queryString) {
        const params = Object.fromEntries(new URLSearchParams(queryString));
        const encryptedParams = await encryptParams(params);
        encryptedPath = `${encryptedPath}?en_url=${encodeURIComponent(encryptedParams)}`;
    }
    const fullUrl = `${baseUrl}/${encryptedPath}`;
    try {
        const response = await fetch(fullUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "customer-id": "CUST001"
            }
        });
        if (response.status === 204) {
            return {
                message: "Deleted successfully"
            };
        }
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};
        if (response.ok) {
            return result;
        } else {
            throw new Error(result?.message || "Failed to fetch data");
        }
    } catch (error) {
        console.error("Error in deleteApi:", error);
        throw error;
    }
};
// Helper: encrypt params like in getApi
const encryptParams = async (payload)=>{
    try {
        const secret = new TextEncoder().encode(("TURBOPACK compile-time value", "Audit-Pro@674*34@560987654321qwe"));
        return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptJWT"](payload).setProtectedHeader({
            alg: "dir",
            enc: "A256GCM"
        }).encrypt(secret);
    } catch (error) {
        console.error("Encryption error:", error);
        return null;
    }
};
}),
"[project]/src/utils/getApiMethod.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getApi": ()=>getApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/encrypt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SessionStorageSecurity.js [app-ssr] (ecmascript)");
;
;
const getApi = async (url)=>{
    const baseUrl = ("TURBOPACK compile-time value", "https://transport.thelinkworks.com");
    // const token = sessionStorage.getItem("verifyotp-jwt-token");
    let fullUrl = `${baseUrl}/${url}`;
    // Handle query params
    if (fullUrl.includes("?")) {
        const [path, queryString] = fullUrl.split("?");
        const params = Object.fromEntries(new URLSearchParams(queryString));
        const encryptedData = await encrypt(params);
        fullUrl = `${path}?en_url=${encodeURIComponent(encryptedData)}`;
    } else {
        const parts = fullUrl.split("/");
        const lastPart = parts[parts.length - 1];
        if (/^\d+$/.test(lastPart)) {
            // checks if last part is a numeric ID
            const encryptedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customEncrypt"])(lastPart);
            parts[parts.length - 1] = encodeURIComponent(encryptedId);
            fullUrl = parts.join("/");
        }
    }
    // console.log("fullUrl", fullUrl);
    const headers = {
        "Content-Type": "application/json",
        "customer-id": "CUST001"
    };
    try {
        const response = await fetch(fullUrl, {
            method: "GET",
            headers
        });
        const result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw new Error(result?.message || "Failed to fetch data");
        }
    } catch (error) {
        console.error("Error in getApi:", error);
        throw error;
    }
};
// Encrypt object params using JOSE
const encrypt = async (payload)=>{
    try {
        const secret = new TextEncoder().encode(("TURBOPACK compile-time value", "Audit-Pro@674*34@560987654321qwe"));
        return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptJWT"](payload).setProtectedHeader({
            alg: "dir",
            enc: "A256GCM"
        }).encrypt(secret);
    } catch (error) {
        console.error("Encryption error:", error);
        return null;
    }
};
}),
"[project]/src/utils/postApiMethod.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ApiError": ()=>ApiError,
    "postApi": ()=>postApi
});
class ApiError extends Error {
    constructor(message, statusCode, encryptedData){
        super(message);
        this.statusCode = statusCode;
        this.encryptedData = encryptedData;
    }
}
;
const postApi = async (url, payload)=>{
    const baseUrl = ("TURBOPACK compile-time value", "https://transport.thelinkworks.com");
    const token = sessionStorage.getItem("verifyotp-jwt-token");
    // console.log("envurl", process.env.REACT_APP_BASE_URL);
    const fullUrl = `${baseUrl}/${url}`;
    // const fullUrl = `/api/${url}`; // Use the Vercel proxy here
    const isFormData = payload instanceof FormData;
    const headers = {
        Authorization: `${token}`
    };
    if (!isFormData) {
        headers["Content-Type"] = "application/json";
        headers["customer-id"] = "CUST001";
    }
    try {
        const response = await fetch(fullUrl, {
            method: "POST",
            headers,
            body: isFormData ? payload : JSON.stringify(payload)
        });
        const result = await response.json();
        if (response.ok) {
            // Return the successful result (with JWT and user details)
            return result;
        } else {
            // Throw an error with the message from the response
            // throw new Error(result.error?.message || "Something went wrong");
            // throw new Error(result || "Failed to fetch data");
            throw new ApiError(result.message || "Failed to fetch data", result.statusCode, result.encryptedData);
        }
    } catch (error) {
        // Catch network or other errors
        // throw new Error(error || "Network error");
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(error.message || "Network error", 500, null);
    }
};
}),
"[project]/src/utils/putApiMethod.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ApiError": ()=>ApiError,
    "putApi": ()=>putApi
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SessionStorageSecurity.js [app-ssr] (ecmascript)");
;
class ApiError extends Error {
    constructor(message, statusCode, encryptedData){
        super(message);
        this.statusCode = statusCode;
        this.encryptedData = encryptedData;
    }
}
;
const putApi = async (url, payload)=>{
    const baseUrl = ("TURBOPACK compile-time value", "https://transport.thelinkworks.com");
    const token = sessionStorage.getItem("verifyotp-jwt-token");
    const urlParts = url.split("/");
    const lastPart = urlParts.pop();
    // Skip encryption for certain APIs
    const skipEncryptionEndpoints = [
        "password-update"
    ];
    let encryptedUrl;
    if (!skipEncryptionEndpoints.includes(lastPart)) {
        if (/^\d+$/.test(lastPart)) {
            // Case 1: single numeric ID
            const encryptedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customEncrypt"])(lastPart);
            urlParts.push(encryptedId);
        } else if (/^\d+(,\d+)+$/.test(lastPart)) {
            // Case 2: multiple IDs separated by commas
            const encryptedIds = lastPart.split(",").map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SessionStorageSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customEncrypt"])(id)).join(",");
            urlParts.push(encryptedIds);
        } else {
            // Case 3: not an ID → leave as is
            urlParts.push(lastPart);
        }
        encryptedUrl = urlParts.join("/");
    } else {
        // No encryption for skipped endpoints
        urlParts.push(lastPart);
        encryptedUrl = urlParts.join("/");
    }
    const fullUrl = `${baseUrl}/${encryptedUrl}`;
    const isFormData = payload instanceof FormData;
    const headers = {
        Authorization: `${token}`
    };
    if (!isFormData) {
        headers["Content-Type"] = "application/json";
        headers["customer-id"] = "CUST001";
    }
    try {
        const response = await fetch(fullUrl, {
            method: "PUT",
            headers,
            body: isFormData ? payload : JSON.stringify(payload)
        });
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};
        if (response.ok) {
            return result;
        } else {
            throw new ApiError(result?.message || "Failed to fetch data", response.status, lastPart);
        }
    } catch (error) {
        throw new ApiError(error.message || "Network error", error.statusCode || 500);
    }
};
}),
"[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createCrudSlice": ()=>createCrudSlice
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/datasecurity/useDecrypt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deleteApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/deleteApiMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getApiMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$postApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/postApiMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$putApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/putApiMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
function createCrudSlice({ name, endpoint }) {
    const getAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${name}/getAll`, async (_, { rejectWithValue })=>{
        try {
            const { decrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApi"])(endpoint);
            let data;
            if (response?.encryptedData) {
                const decrypted = await decrypt(response.encryptedData);
                // Only parse if it's a string
                data = typeof decrypted === "string" ? JSON.parse(decrypted) : decrypted;
            } else {
                data = response;
            }
            console.log("Fetched data:", data);
            return data;
        } catch (err) {
            console.error("Error fetching data:", err);
            return rejectWithValue(err.message);
        }
    });
    const getById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${name}/getById`, async (id, { rejectWithValue })=>{
        try {
            const { decrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApi"])(`${endpoint}/${id}`);
            return response?.encryptedData ? JSON.parse(await decrypt(response.encryptedData)) : response;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const createItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${name}/create`, async (data, { rejectWithValue })=>{
        try {
            const { decrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$postApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postApi"])(endpoint, data);
            return response?.encryptedData ? JSON.parse(await decrypt(response.encryptedData)) : response;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const updateItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${name}/update`, async ({ id, data }, { rejectWithValue })=>{
        try {
            const { decrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$putApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["putApi"])(`${endpoint}/${id}`, data);
            return response?.encryptedData ? JSON.parse(await decrypt(response.encryptedData)) : response;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    });
    const deleteItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${name}/delete`, async (id, { rejectWithValue })=>{
        try {
            const { decrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deleteApiMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteApi"])(`${endpoint}/${id}`);
            return response?.encryptedData ? JSON.parse(await decrypt(response.encryptedData)) : response;
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
    const slice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/store/features/userSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)");
;
const { reducer, thunks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "user",
    endpoint: "/users"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const __TURBOPACK__default__export__ = reducer;
const selectUserList = (state)=>state.user.list;
const selectUserItem = (state)=>state.user.selected;
const selectUserLoading = (state)=>state.user.loading;
const selectUserError = (state)=>state.user.error;
}),
"[project]/src/store/features/vehicleSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "vehicle",
    endpoint: "/vehicles"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectVehicleList, selectSelected: selectVehicleItem, selectLoading: selectVehicleLoading, selectError: selectVehicleError } = selectors;
const __TURBOPACK__default__export__ = reducer;
}),
"[project]/src/store/features/locationSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "location",
    endpoint: "/locations"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectLocationList, selectSelected: selectLocationItem, selectLoading: selectLocationLoading, selectError: selectLocationError } = selectors;
const __TURBOPACK__default__export__ = reducer;
}),
"[project]/src/store/features/driverSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "driver",
    endpoint: "driver-master/resource"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectDriverList, selectSelected: selectDriverItem, selectLoading: selectDriverLoading, selectError: selectDriverError } = selectors;
const __TURBOPACK__default__export__ = reducer;
}),
"[project]/src/store/features/clientSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "client",
    endpoint: "/clients"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectClientList, selectSelected: selectClientItem, selectLoading: selectClientLoading, selectError: selectClientError } = selectors;
const __TURBOPACK__default__export__ = reducer;
}),
"[project]/src/store/features/routeSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/helpers/createCrudSlice.js [app-ssr] (ecmascript)");
;
const { reducer, thunks, selectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$helpers$2f$createCrudSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCrudSlice"])({
    name: "route",
    endpoint: "/routes"
});
const { getAll, getById, createItem, updateItem, deleteItem } = thunks;
const { selectList: selectConsigneeList, selectSelected: selectConsigneeItem, selectLoading: selectConsigneeLoading, selectError: selectConsigneeError } = selectors;
const __TURBOPACK__default__export__ = reducer;
}),
"[project]/src/store/store.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$userSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/userSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$vehicleSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/vehicleSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$locationSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/locationSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$driverSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/driverSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$clientSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/clientSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$routeSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/routeSlice.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$userSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        vehicle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$vehicleSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        location: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$locationSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$driverSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$clientSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        route: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$routeSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}),
"[project]/src/store/Provider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ReduxProvider": ()=>ReduxProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/store/Provider.js",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__39b8deb8._.js.map