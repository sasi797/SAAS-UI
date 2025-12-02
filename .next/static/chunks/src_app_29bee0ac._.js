(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/form-fields/CustomInput.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
"use client";
;
;
const CustomInput = (param)=>{
    let { label, name, type = "text", value, onChange, required, disabled, error } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        size: "small",
        variant: "standard",
        label: label,
        name: name,
        type: type,
        value: value || "",
        onChange: (e)=>onChange(name, e.target.value),
        required: required,
        disabled: disabled,
        error: !!error,
        helperText: error,
        InputLabelProps: type === "date" ? {
            shrink: true
        } : {},
        fullWidth: true,
        margin: "dense",
        sx: {
            width: "250px",
            "& .MuiInputBase-root": {
                fontSize: "0.875rem",
                paddingBottom: "2px"
            },
            "& .MuiInputBase-input": {
                padding: "6px 0 4px",
                fontSize: "0.875rem"
            },
            "& .MuiInputLabel-root": {
                fontSize: "0.875rem"
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: error ? "error.main" : "#7e5bef"
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: error ? "error.main" : "rgba(0,0,0,0.42)"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: error ? "error.main" : "#7e5bef"
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/form-fields/CustomInput.jsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomInput;
const __TURBOPACK__default__export__ = CustomInput;
var _c;
__turbopack_context__.k.register(_c, "CustomInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/form-fields/CustomSelect.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
"use client";
;
;
const CustomSelect = (param)=>{
    let { label, name, value, onChange, options = [], required, disabled, error } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        select: true,
        size: "small",
        variant: "standard",
        label: label,
        name: name,
        value: value || "",
        onChange: (e)=>onChange(name, e.target.value),
        required: required,
        disabled: disabled,
        error: !!error,
        helperText: error,
        fullWidth: true,
        margin: "dense",
        sx: {
            width: "250px",
            "& .MuiInputBase-root": {
                paddingBottom: "0px"
            },
            "& .MuiInputLabel-root": {
                fontSize: "0.875rem"
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: error ? "error.main" : "#7e5bef"
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: error ? "error.main" : "rgba(0,0,0,0.42)"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: error ? "error.main" : "#7e5bef"
            }
        },
        children: options.map((param)=>{
            let { label, value } = param;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                value: value,
                children: label
            }, value, false, {
                fileName: "[project]/src/app/components/form-fields/CustomSelect.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/components/form-fields/CustomSelect.jsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomSelect;
const __TURBOPACK__default__export__ = CustomSelect;
var _c;
__turbopack_context__.k.register(_c, "CustomSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/form-fields/CustomMultiSelect.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
"use client";
;
;
const CustomMultiSelect = (param)=>{
    let { label, name, value = [], onChange, options = [], required, disabled, error } = param;
    const handleChange = (e)=>{
        const val = typeof e.target.value === "string" ? e.target.value.split(",") : e.target.value;
        onChange(name, val);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        select: true,
        SelectProps: {
            multiple: true
        },
        size: "small",
        variant: "standard",
        label: label,
        name: name,
        value: value,
        onChange: handleChange,
        required: required,
        disabled: disabled,
        error: !!error,
        helperText: error,
        fullWidth: true,
        margin: "dense",
        sx: {
            width: "250px",
            "& .MuiInputBase-root": {
                paddingBottom: "0px"
            },
            "& .MuiInputLabel-root": {
                fontSize: "0.875rem"
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: error ? "error.main" : "#7e5bef"
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: error ? "error.main" : "rgba(0,0,0,0.42)"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: error ? "error.main" : "#7e5bef"
            }
        },
        children: options.map((param)=>{
            let { label, value } = param;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                value: value,
                children: label
            }, value, false, {
                fileName: "[project]/src/app/components/form-fields/CustomMultiSelect.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/components/form-fields/CustomMultiSelect.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomMultiSelect;
const __TURBOPACK__default__export__ = CustomMultiSelect;
var _c;
__turbopack_context__.k.register(_c, "CustomMultiSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/form-fields/CustomFileUpload.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CloudUpload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CustomFileUpload = (param)=>{
    let { label, name, onChange, required, disabled } = param;
    _s();
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleFileChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        setFileName(file ? file.name : "");
        onChange && onChange(e);
    };
    const handleRemoveFile = ()=>{
        setFileName("");
        onChange && onChange({
            target: {
                name,
                value: null
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "label",
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "2px dashed",
                    borderImage: "linear-gradient(to right, #7e5bef, #00c6ff) 1",
                    borderRadius: 2,
                    p: 2,
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: "#fafafa",
                    transition: "all 0.2s",
                    "&:hover": {
                        background: disabled ? "#fafafa" : "linear-gradient(to right, #7e5bef0d, #00c6ff0d)",
                        boxShadow: disabled ? "none" : "0 3px 8px rgba(126,91,239,0.25)"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 36,
                            background: "linear-gradient(to right, #7e5bef, #00c6ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        sx: {
                            mt: 1,
                            fontWeight: 600
                        },
                        children: fileName ? "File Ready" : "Click or Drag to Upload ".concat(label)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        sx: {
                            color: "gray"
                        },
                        children: fileName ? "1 file selected" : "Supported: JPG, PNG, PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        hidden: true,
                        name: name,
                        onChange: handleFileChange,
                        required: required,
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mt: 1.5,
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                        label: fileName,
                        sx: {
                            maxWidth: "75%",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            fontSize: "0.75rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        size: "small",
                        onClick: handleRemoveFile,
                        sx: {
                            ml: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/form-fields/CustomFileUpload.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomFileUpload, "qmgMVFP5VOwUOxztcZ5P9gagwnE=");
_c = CustomFileUpload;
const __TURBOPACK__default__export__ = CustomFileUpload;
var _c;
__turbopack_context__.k.register(_c, "CustomFileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/form-fields/CustomSwitch.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js [app-client] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript) <export default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
"use client";
;
;
const CustomSwitch = (param)=>{
    let { label, name, value, onChange, disabled, error } = param;
    const checked = value === true || value === "true" || value === 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__["Switch"], {
                    checked: checked,
                    onChange: (e)=>onChange(name, e.target.checked),
                    name: name,
                    disabled: disabled,
                    sx: {
                        "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#7e5bef"
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                            background: "linear-gradient(to right, #7e5bef, #00c6ff)"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/form-fields/CustomSwitch.jsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, void 0),
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        color: error ? "error.main" : "inherit",
                        fontSize: "0.875rem"
                    },
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/app/components/form-fields/CustomSwitch.jsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/components/form-fields/CustomSwitch.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "caption",
                color: "error",
                sx: {
                    display: "block",
                    marginLeft: "40px",
                    marginTop: "-4px"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/components/form-fields/CustomSwitch.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/form-fields/CustomSwitch.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomSwitch;
const __TURBOPACK__default__export__ = CustomSwitch;
var _c;
__turbopack_context__.k.register(_c, "CustomSwitch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/form-fields/CustomTextArea.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
"use client";
;
;
const CustomTextarea = (param)=>{
    let { label, name, value, onChange, required, disabled, placeholder, minRows = 1, maxRows = 6, error } = param;
    const handleChange = (e)=>{
        onChange(name, e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        multiline: true,
        minRows: minRows,
        maxRows: maxRows,
        fullWidth: true,
        margin: "dense",
        size: "small",
        variant: "standard",
        label: label,
        name: name,
        value: value || "",
        onChange: handleChange,
        required: required,
        disabled: disabled,
        placeholder: placeholder || "Enter details...",
        error: !!error,
        helperText: error,
        InputLabelProps: {
            shrink: true
        },
        sx: {
            width: "250px",
            "& .MuiInputBase-root": {
                background: "#fcfcfc",
                borderRadius: 2,
                alignItems: "flex-start",
                transform: "translateY(4px)"
            },
            "& .MuiInputLabel-root": {
                color: "#666",
                fontWeight: 500,
                fontSize: "0.875rem",
                "&.Mui-focused": {
                    color: error ? "error.main" : "#7e5bef"
                }
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: error ? "error.main" : "rgba(0,0,0,0.42)"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: error ? "error.main" : "#7e5bef"
            },
            "& textarea": {
                lineHeight: 1.6,
                fontSize: "0.9rem",
                overflowY: "auto",
                resize: "none",
                maxHeight: "150px"
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/form-fields/CustomTextArea.jsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomTextarea;
const __TURBOPACK__default__export__ = CustomTextarea;
var _c;
__turbopack_context__.k.register(_c, "CustomTextarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/form-fields/CustomNumber.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
"use client";
;
;
const CustomNumber = (param)=>{
    let { label, name, value, onChange, required, disabled, min, max, step, error } = param;
    const handleChange = (e)=>{
        const val = e.target.value;
        if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) {
            onChange(name, val);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        size: "small",
        variant: "standard",
        label: label,
        name: name,
        type: "number",
        value: value || "",
        onChange: handleChange,
        required: required,
        disabled: disabled,
        inputProps: {
            min,
            max,
            step
        },
        error: !!error,
        helperText: error,
        fullWidth: true,
        margin: "dense",
        sx: {
            width: "250px",
            "& .MuiInputBase-root": {
                fontSize: "0.875rem",
                padding: "4px 0",
                minHeight: "28px"
            },
            "& .MuiInputBase-input": {
                padding: "1px 0 2px",
                lineHeight: 1.2
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: error ? "error.main" : "#7e5bef"
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: error ? "error.main" : "rgba(0,0,0,0.42)"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: error ? "error.main" : "#7e5bef"
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/form-fields/CustomNumber.jsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomNumber;
const __TURBOPACK__default__export__ = CustomNumber;
var _c;
__turbopack_context__.k.register(_c, "CustomNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/CustomForm.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Accordion$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Accordion/Accordion.js [app-client] (ecmascript) <export default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionSummary$2f$AccordionSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionSummary$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js [app-client] (ecmascript) <export default as AccordionSummary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionDetails$2f$AccordionDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionDetails$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js [app-client] (ecmascript) <export default as AccordionDetails>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AddRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AddRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/RemoveRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomInput.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomSelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomMultiSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomMultiSelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomFileUpload$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomFileUpload.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomSwitch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomSwitch.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomTextArea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomTextArea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomNumber$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/form-fields/CustomNumber.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const fieldComponents = {
    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    textarea: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomTextArea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    number: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomNumber$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    password: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    date: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    multiselect: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomMultiSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    file: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomFileUpload$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    switch: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$form$2d$fields$2f$CustomSwitch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const CustomForm = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((param, ref)=>{
    let { formSchema = [], formData = {}, onChange } = param;
    var _formSchema_activeTab;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // dynamicSections keyed by section index: array of {id}
    const [dynamicSections, setDynamicSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // touched & validateAll control error display
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [validateAll, setValidateAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // initialize dynamicSections whenever schema changes — ensure each "Document" section has at least 1 item
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomForm.useEffect": ()=>{
            const initial = {};
            formSchema.forEach({
                "CustomForm.useEffect": (tab, tIdx)=>{
                    var _tab_sections;
                    (_tab_sections = tab.sections) === null || _tab_sections === void 0 ? void 0 : _tab_sections.forEach({
                        "CustomForm.useEffect": (section, sIdx)=>{
                            const globalIdx = "".concat(tIdx, "_").concat(sIdx);
                            if ((section.title || "").toLowerCase() === "document") {
                                initial[globalIdx] = [
                                    {
                                        id: Date.now() + Math.random()
                                    }
                                ];
                            }
                        }
                    }["CustomForm.useEffect"]);
                }
            }["CustomForm.useEffect"]);
            // merge preserving existing counts
            setDynamicSections({
                "CustomForm.useEffect": (prev)=>{
                    const next = {
                        ...prev
                    };
                    Object.keys(initial).forEach({
                        "CustomForm.useEffect": (k)=>{
                            if (!next[k] || next[k].length === 0) next[k] = initial[k];
                        }
                    }["CustomForm.useEffect"]);
                    return next;
                }
            }["CustomForm.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CustomForm.useEffect"], [
        formSchema
    ]);
    // helper to get dynamic key for section using tab index + section index
    const dynKey = (tIdx, sIdx)=>"".concat(tIdx, "_").concat(sIdx);
    const validateField = (field, value)=>{
        const { rules = {}, label } = field;
        if (field.required && (value === "" || value === null || value === undefined)) {
            return "".concat(label, " is required");
        }
        if (rules.minLength && (value === null || value === void 0 ? void 0 : value.length) < Number(rules.minLength)) {
            return "".concat(label, " must be at least ").concat(rules.minLength, " characters");
        }
        if (rules.maxLength && (value === null || value === void 0 ? void 0 : value.length) > Number(rules.maxLength)) {
            return "".concat(label, " must be less than ").concat(rules.maxLength, " characters");
        }
        if (rules.min && Number(value) < Number(rules.min)) {
            return "".concat(label, " must be >= ").concat(rules.min);
        }
        if (rules.max && Number(value) > Number(rules.max)) {
            return "".concat(label, " must be <= ").concat(rules.max);
        }
        if (rules.pattern) {
            try {
                const regex = new RegExp(rules.pattern);
                if (value && !regex.test(value)) {
                    return "".concat(label, " format is invalid");
                }
            } catch (e) {
                console.warn("Invalid regex pattern for ".concat(label, ":"), rules.pattern);
            }
        }
        return "";
    };
    // wrapper for field change to set touched and call parent's onChange
    const handleFieldChange = (name, value)=>{
        setTouched((prev)=>({
                ...prev,
                [name]: true
            }));
        onChange(name, value);
    };
    // Expose methods to parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "CustomForm.useImperativeHandle": ()=>({
                // set validateAll true to show all errors
                triggerValidate: ({
                    "CustomForm.useImperativeHandle": ()=>setValidateAll(true)
                })["CustomForm.useImperativeHandle"],
                // check whether any required field has an error
                hasErrors: ({
                    "CustomForm.useImperativeHandle": ()=>{
                        return checkHasErrors();
                    }
                })["CustomForm.useImperativeHandle"],
                // optional: let parent reset validateAll if needed
                resetValidation: ({
                    "CustomForm.useImperativeHandle": ()=>{
                        setValidateAll(false);
                        setTouched({});
                    }
                })["CustomForm.useImperativeHandle"]
            })
    }["CustomForm.useImperativeHandle"]);
    // Check all fields (including document sets) for required errors
    const checkHasErrors = ()=>{
        let foundError = false;
        formSchema.forEach((tab, tIdx)=>{
            var _tab_sections;
            (_tab_sections = tab.sections) === null || _tab_sections === void 0 ? void 0 : _tab_sections.forEach((section, sIdx)=>{
                const isDoc = (section.title || "").toLowerCase() === "document";
                if (!isDoc) {
                    var _section_fields;
                    (_section_fields = section.fields) === null || _section_fields === void 0 ? void 0 : _section_fields.forEach((field)=>{
                        const value = formData[field.key];
                        const error = validateField(field, value);
                        if (field.required && error) foundError = true;
                    });
                } else {
                    const key = dynKey(tIdx, sIdx);
                    const instances = dynamicSections[key] || [
                        {
                            id: 1
                        }
                    ];
                    instances.forEach((_, idx)=>{
                        var _section_fields;
                        (_section_fields = section.fields) === null || _section_fields === void 0 ? void 0 : _section_fields.forEach((field)=>{
                            const fieldName = "".concat(field.key, "_").concat(idx);
                            const value = formData[fieldName];
                            const error = validateField(field, value);
                            if (field.required && error) foundError = true;
                        });
                    });
                }
            });
        });
        return foundError;
    };
    // helpers to add/remove document instance
    const addDocumentInstance = (tIdx, sIdx)=>{
        const key = dynKey(tIdx, sIdx);
        setDynamicSections((prev)=>({
                ...prev,
                [key]: [
                    ...prev[key] || [],
                    {
                        id: Date.now() + Math.random()
                    }
                ]
            }));
    };
    const removeDocumentInstance = (tIdx, sIdx, idxToRemove)=>{
        const key = dynKey(tIdx, sIdx);
        setDynamicSections((prev)=>{
            const arr = prev[key] || [];
            if (arr.length <= 1) return prev; // keep at least 1
            return {
                ...prev,
                [key]: arr.filter((_, i)=>i !== idxToRemove)
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                value: activeTab,
                onChange: (_, newValue)=>setActiveTab(newValue),
                textColor: "primary",
                indicatorColor: "primary",
                sx: {
                    background: "#fafafa",
                    mb: 1,
                    mt: 2,
                    "& .MuiTab-root": {
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        minHeight: "44px"
                    },
                    "& .Mui-selected": {
                        color: "#7e5bef"
                    },
                    "& .MuiTabs-indicator": {
                        height: "3px",
                        borderRadius: "3px",
                        background: "linear-gradient(to right, #7e5bef, #00c6ff)"
                    }
                },
                children: formSchema.map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        icon: tab.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CustomForm.jsx",
                            lineNumber: 218,
                            columnNumber: 32
                        }, void 0) : null,
                        iconPosition: "start",
                        label: tab.tab
                    }, idx, false, {
                        fileName: "[project]/src/app/components/CustomForm.jsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/components/CustomForm.jsx",
                lineNumber: 192,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (_formSchema_activeTab = formSchema[activeTab]) === null || _formSchema_activeTab === void 0 ? void 0 : _formSchema_activeTab.sections.map((section, sIdx)=>{
                var _section_fields;
                const tIdx = activeTab;
                const sectionTitle = (section.title || "").toLowerCase();
                // ✅ Treat Document and Load Info as dynamic sections
                const isDynamicSection = sectionTitle === "document" || sectionTitle === "load info";
                const key = dynKey(tIdx, sIdx);
                // ensure dynamic section exists
                if (isDynamicSection && !dynamicSections[key]) {
                    setDynamicSections((prev)=>({
                            ...prev,
                            [key]: [
                                {
                                    id: Date.now() + Math.random()
                                }
                            ]
                        }));
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Accordion$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accordion$3e$__["Accordion"], {
                    defaultExpanded: true,
                    disableGutters: true,
                    sx: {
                        mb: 2,
                        borderRadius: 2,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                        overflow: "hidden",
                        "&:before": {
                            display: "none"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionSummary$2f$AccordionSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionSummary$3e$__["AccordionSummary"], {
                            expandIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/CustomForm.jsx",
                                lineNumber: 257,
                                columnNumber: 29
                            }, void 0),
                            sx: {
                                background: "linear-gradient(to right, #7e5bef08, #00c6ff08)",
                                px: 2,
                                py: 1,
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6
                                    },
                                    children: [
                                        section.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(section.icon, {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CustomForm.jsx",
                                            lineNumber: 271,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "subtitle2",
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CustomForm.jsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/CustomForm.jsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                isDynamicSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        addDocumentInstance(tIdx, sIdx); // reuse function or rename to addDynamicInstance
                                    },
                                    size: "small",
                                    sx: {
                                        width: 24,
                                        height: 24,
                                        padding: 0,
                                        border: "1px solid #d0d5dd",
                                        color: "#475467",
                                        borderRadius: "50%",
                                        "&:hover": {
                                            backgroundColor: "rgba(0,0,0,0.04)"
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AddRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 16
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CustomForm.jsx",
                                        lineNumber: 294,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CustomForm.jsx",
                                    lineNumber: 278,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/CustomForm.jsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionDetails$2f$AccordionDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionDetails$3e$__["AccordionDetails"], {
                            sx: {
                                p: 2
                            },
                            children: isDynamicSection ? (dynamicSections[key] || []).map((item, index)=>{
                                var _section_fields;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        border: "1px solid #eee",
                                        borderRadius: 10,
                                        padding: 16,
                                        marginBottom: 20,
                                        background: "#fafafa"
                                    },
                                    children: [
                                        (dynamicSections[key] || []).length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                            onClick: ()=>removeDocumentInstance(tIdx, sIdx, index) // reuse/removeDynamicInstance
                                            ,
                                            size: "small",
                                            sx: {
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                width: 22,
                                                height: 22,
                                                padding: 0,
                                                bgcolor: "#f2f4f7",
                                                color: "#475467",
                                                borderRadius: "50%",
                                                "&:hover": {
                                                    bgcolor: "#e4e7ec"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 16
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/CustomForm.jsx",
                                                lineNumber: 332,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CustomForm.jsx",
                                            lineNumber: 314,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: {
                                                fontWeight: 600,
                                                mb: 2
                                            },
                                            children: [
                                                section.title,
                                                " ",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/CustomForm.jsx",
                                            lineNumber: 336,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            container: true,
                                            spacing: 2,
                                            children: (_section_fields = section.fields) === null || _section_fields === void 0 ? void 0 : _section_fields.sort((a, b)=>(a.fieldorder || 0) - (b.fieldorder || 0)).map((field)=>{
                                                const FieldComponent = fieldComponents[field.type];
                                                if (!FieldComponent) return null;
                                                const fieldName = "".concat(field.key, "_").concat(index);
                                                const showError = touched[fieldName] || validateAll;
                                                const errorMessage = showError ? validateField(field, formData[fieldName]) : "";
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 6,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldComponent, {
                                                        ...field,
                                                        name: fieldName,
                                                        value: formData[fieldName],
                                                        onChange: handleFieldChange,
                                                        error: errorMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/CustomForm.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, fieldName, false, {
                                                    fileName: "[project]/src/app/components/CustomForm.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 31
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CustomForm.jsx",
                                            lineNumber: 340,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/components/CustomForm.jsx",
                                    lineNumber: 302,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0));
                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                container: true,
                                spacing: 2,
                                children: (_section_fields = section.fields) === null || _section_fields === void 0 ? void 0 : _section_fields.sort((a, b)=>(a.fieldorder || 0) - (b.fieldorder || 0)).map((field)=>{
                                    const FieldComponent = fieldComponents[field.type];
                                    if (!FieldComponent) return null;
                                    const showError = touched[field.key] || validateAll;
                                    const errorMessage = showError ? validateField(field, formData[field.key]) : "";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                        item: true,
                                        xs: 12,
                                        sm: 6,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldComponent, {
                                            ...field,
                                            name: field.key,
                                            value: formData[field.key],
                                            onChange: handleFieldChange,
                                            error: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CustomForm.jsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, field.key, false, {
                                        fileName: "[project]/src/app/components/CustomForm.jsx",
                                        lineNumber: 386,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/CustomForm.jsx",
                                lineNumber: 371,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CustomForm.jsx",
                            lineNumber: 299,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, sIdx, true, {
                    fileName: "[project]/src/app/components/CustomForm.jsx",
                    lineNumber: 244,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/CustomForm.jsx",
        lineNumber: 191,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "GnZxDzCGrgmIiXsQwF6nkl96AO4=")), "GnZxDzCGrgmIiXsQwF6nkl96AO4=");
_c1 = CustomForm;
const __TURBOPACK__default__export__ = CustomForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomForm$forwardRef");
__turbopack_context__.k.register(_c1, "CustomForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrimaryButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
"use client";
;
;
const PrimaryButton = (param)=>{
    let { text, loading = false, onClick, icon, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        className: "btn-primary",
        sx: {
            textTransform: "none",
            marginRight: 1
        },
        startIcon: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
            size: 16,
            color: "inherit"
        }, void 0, false, {
            fileName: "[project]/src/app/components/PrimaryButton.jsx",
            lineNumber: 10,
            columnNumber: 27
        }, void 0) : icon,
        onClick: onClick,
        disabled: loading,
        ...props,
        children: loading ? "Saving..." : text
    }, void 0, false, {
        fileName: "[project]/src/app/components/PrimaryButton.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PrimaryButton;
const __TURBOPACK__default__export__ = PrimaryButton;
var _c;
__turbopack_context__.k.register(_c, "PrimaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/SecondaryButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
"use client";
;
;
const SecondaryButton = (param)=>{
    let { text, icon, onClick, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        className: "btn-secondary",
        sx: {
            textTransform: "none"
        },
        startIcon: icon,
        onClick: onClick,
        ...props,
        children: text
    }, void 0, false, {
        fileName: "[project]/src/app/components/SecondaryButton.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SecondaryButton;
const __TURBOPACK__default__export__ = SecondaryButton;
var _c;
__turbopack_context__.k.register(_c, "SecondaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/LoadingSpinner.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
"use client";
;
;
const LoadingSpinner = (param)=>{
    let { text = "Loading..." } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                size: 48,
                color: "primary"
            }, void 0, false, {
                fileName: "[project]/src/app/components/LoadingSpinner.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body1",
                color: "text.secondary",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/app/components/LoadingSpinner.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/LoadingSpinner.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoadingSpinner;
const __TURBOPACK__default__export__ = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/datasecurity/useEncrypt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/jwt/encrypt.js [app-client] (ecmascript)");
;
const useEncrypt = ()=>{
    const encrypt = async (payload)=>{
        try {
            const secret = new TextEncoder().encode(("TURBOPACK compile-time value", "Audit-Pro@674*34@560987654321qwe"));
            return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptJWT"](payload).setProtectedHeader({
                alg: "dir",
                enc: "A256GCM"
            }).encrypt(secret);
        } catch (error) {
            console.error("Encryption error:", error);
            return null;
        }
    };
    return {
        encrypt
    };
};
const __TURBOPACK__default__export__ = useEncrypt;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/route-master/add/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowBack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CustomForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/CustomForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$routeMasterPostPut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/routeMasterPostPut.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrimaryButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PrimaryButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SecondaryButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SecondaryButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/LoadingSpinner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/datasecurity/useDecrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useEncrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/datasecurity/useEncrypt.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AddLocation = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { decrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { encrypt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useEncrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$routeMasterPostPut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectRouteLoading"]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formSchema, setFormSchema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingFields, setLoadingFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [snackbar, setSnackbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        message: "",
        severity: "success"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddLocation.useEffect": ()=>{
            const fetchRouteFields = {
                "AddLocation.useEffect.fetchRouteFields": async ()=>{
                    setLoadingFields(true);
                    try {
                        const encryptedResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApi"])("fieldindex01/form/route_master");
                        const result = await decrypt(encryptedResult === null || encryptedResult === void 0 ? void 0 : encryptedResult.encryptedData);
                        console.log("result", result);
                        if (result === null || result === void 0 ? void 0 : result.structure) {
                            const structure = result.structure;
                            console.log("structure", structure);
                            setFormSchema(structure);
                            // initialize form state based on fields
                            const initialForm = structure.reduce({
                                "AddLocation.useEffect.fetchRouteFields.initialForm": (acc, tab)=>{
                                    tab.sections.forEach({
                                        "AddLocation.useEffect.fetchRouteFields.initialForm": (section)=>{
                                            section.fields.forEach({
                                                "AddLocation.useEffect.fetchRouteFields.initialForm": (field)=>{
                                                    acc[field.key] = field.type === "multiselect" ? [] : field.type === "switch" ? false : "";
                                                }
                                            }["AddLocation.useEffect.fetchRouteFields.initialForm"]);
                                        }
                                    }["AddLocation.useEffect.fetchRouteFields.initialForm"]);
                                    return acc;
                                }
                            }["AddLocation.useEffect.fetchRouteFields.initialForm"], {});
                            setForm(initialForm);
                        } else {
                            console.error("Unexpected response format:", result);
                        }
                    } catch (error) {
                        console.error("Error fetching route fields:", error);
                    } finally{
                        setLoadingFields(false);
                    }
                }
            }["AddLocation.useEffect.fetchRouteFields"];
            fetchRouteFields();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AddLocation.useEffect"], []);
    // === Handlers ===
    // const handleChange = (e) => {
    //   setForm({ ...form, [e.target.name]: e.target.value });
    // };
    const handleChange = (name, value)=>{
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const transformPayload = (data)=>{
        const revenue_details = [];
        // Determine the number of entries by checking keys
        const keys = Object.keys(data);
        const indices = new Set();
        keys.forEach((key)=>{
            const match = key.match(/_(\d+)$/);
            if (match) indices.add(match[1]);
        });
        // For each index, create an object with related fields
        indices.forEach((i)=>{
            revenue_details.push({
                load_type: data["load_type_".concat(i)],
                container_type: data["container_type_".concat(i)],
                remarks: data["remarks_".concat(i)]
            });
            // Optional: remove the original keys if you don't want them in the final payload
            delete data["load_type_".concat(i)];
            delete data["container_type_".concat(i)];
            delete data["remarks_".concat(i)];
        });
        return {
            ...data,
            revenue_details
        };
    };
    // ✅ Handle Save (Redux + API)
    const handleSave = async ()=>{
        if (saving) return; // 👈 prevent double click
        setSaving(true);
        try {
            console.log("📝 Raw Form Data:", form);
            const payload = transformPayload(form);
            console.log("🚀 Transformed Payload:", payload);
            const encryptedData = await encrypt(payload);
            const encryptedPayloadData = {
                encryptedData
            };
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$routeMasterPostPut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createItem"])(encryptedPayloadData)).unwrap();
            console.log("✅ Driver Created Successfully:", result);
            router.push("/dashboard/driver-master");
        } catch (error) {
            console.error("❌ Create Driver Failed:", error);
        } finally{
            setSaving(false); // 👈 allow button again only after complete
        }
    };
    const handleBack = ()=>{
        router.back();
    };
    // === Loading State ===
    if (loadingFields) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/route-master/add/page.js",
            lineNumber: 153,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // === Render Form ===
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    x: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.9,
                    x: 20
                },
                transition: {
                    duration: 1,
                    ease: [
                        0.4,
                        0,
                        0.2,
                        1
                    ]
                },
                style: {
                    height: "95vh",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flexShrink: 0,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h6",
                                        sx: {
                                            fontWeight: 700
                                        },
                                        children: "Add Route"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        sx: {
                                            color: "#666"
                                        },
                                        children: "Fill in the details below to add a new route."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrimaryButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: "Save",
                                        loading: loading.createItem,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                            lineNumber: 193,
                                            columnNumber: 21
                                        }, void 0),
                                        onClick: handleSave
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SecondaryButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: "Back",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, void 0),
                                        onClick: handleBack
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CustomForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        formSchema: formSchema,
                        formData: form,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                        lineNumber: 206,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
                open: snackbar.open,
                autoHideDuration: 3000,
                onClose: ()=>setSnackbar({
                        ...snackbar,
                        open: false
                    }),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    onClose: ()=>setSnackbar({
                            ...snackbar,
                            open: false
                        }),
                    severity: snackbar.severity,
                    variant: "filled",
                    sx: {
                        width: "100%"
                    },
                    children: snackbar.message
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                    lineNumber: 218,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/route-master/add/page.js",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AddLocation, "GUE3wmx+BhfcJAPvYOJjtNBV4uE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$datasecurity$2f$useEncrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = AddLocation;
const __TURBOPACK__default__export__ = AddLocation;
var _c;
__turbopack_context__.k.register(_c, "AddLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_29bee0ac._.js.map