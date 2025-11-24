(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/ErrorPage.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WarningAmber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudOff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CloudOff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BugReport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BugReport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ErrorPage = (param)=>{
    let { code = 500, message, onRetry } = param;
    // choose icon & message based on code
    const errorConfig = {
        400: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "warning",
                sx: {
                    fontSize: 60
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 11,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Bad Request",
            desc: message || "The request was invalid or cannot be processed."
        },
        404: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudOff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "disabled",
                sx: {
                    fontSize: 60
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 16,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Not Found",
            desc: message || "The requested data could not be found."
        },
        500: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BugReport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "error",
                sx: {
                    fontSize: 60
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 21,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Server Error",
            desc: message || "Something went wrong on our end."
        },
        default: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "error",
                sx: {
                    fontSize: 60
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 26,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Unexpected Error",
            desc: message || "An unknown error occurred."
        }
    };
    const { icon, title, desc } = errorConfig[code] || errorConfig.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4
        },
        sx: {
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            textAlign: "center"
        },
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h5",
                color: "text.primary",
                fontWeight: "600",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 51,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body1",
                color: "text.secondary",
                sx: {
                    maxWidth: 400
                },
                children: desc
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "outlined",
                color: "primary",
                onClick: onRetry,
                children: "Retry"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorPage.jsx",
                lineNumber: 58,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ErrorPage.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ErrorPage;
const __TURBOPACK__default__export__ = ErrorPage;
var _c;
__turbopack_context__.k.register(_c, "ErrorPage");
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
"[project]/src/app/dashboard/settings/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ModuleDynamicFormBuilder
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputLabel/InputLabel.js [app-client] (ecmascript) <export default as InputLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js [app-client] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContentText/DialogContentText.js [app-client] (ecmascript) <export default as DialogContentText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Collapse/Collapse.js [app-client] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WarningAmber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandLess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ExpandLess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$putApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/putApiMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ErrorPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ErrorPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/LoadingSpinner.jsx [app-client] (ecmascript)");
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
const FIELD_TYPES = [
    "Text",
    "Number",
    "Email",
    "Date",
    "Checkbox",
    "TextArea",
    "Select"
];
const ROLES_TYPES = [
    "admin",
    "client",
    "superuser"
];
function ModuleDynamicFormBuilder() {
    var _formState_activeMaster, _editorField_rules, _editorField_rules1, _editorField_rules2;
    _s();
    const [presetFields, setPresetFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingFields, setLoadingFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [masters, setMasters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const transformPresetFields = (apiData)=>{
        const preset = {};
        apiData.forEach((item)=>{
            const { entity_name, tab_name, section_name, field_label, field_type, required, field_order, disabled, roles, rules, options, conditions, grid, grid_order, grid_key, grid_label, grid_icon } = item;
            if (!preset[entity_name]) preset[entity_name] = {
                tabs: []
            };
            const entity = preset[entity_name];
            let tab = entity.tabs.find((t)=>t.tab === tab_name);
            if (!tab) {
                tab = {
                    tab: tab_name,
                    sections: []
                };
                entity.tabs.push(tab);
            }
            let section = tab.sections.find((s)=>s.name === section_name);
            if (!section) {
                section = {
                    name: section_name,
                    fields: []
                };
                tab.sections.push(section);
            }
            section.fields.push({
                id: item.id,
                label: field_label,
                type: field_type,
                required,
                order: field_order,
                disabled,
                roles,
                rules,
                options,
                conditions,
                grid,
                grid_order,
                grid_key,
                grid_label,
                grid_icon
            });
        });
        return preset;
    };
    const [refreshFields, setRefreshFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errorState, setErrorState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleDynamicFormBuilder.useEffect": ()=>{
            const getPresetFields = {
                "ModuleDynamicFormBuilder.useEffect.getPresetFields": async ()=>{
                    setLoadingFields(true);
                    setErrorState(null);
                    try {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApi"])("/fieldindex01");
                        if ((result === null || result === void 0 ? void 0 : result.status) >= 400) {
                            setErrorState({
                                code: result.status,
                                message: result.statusText
                            });
                            return;
                        }
                        if (result === null || result === void 0 ? void 0 : result.data) {
                            const fields = transformPresetFields(result.data);
                            setPresetFields(fields);
                            const uniqueEntities = [
                                ...new Set(result.data.map({
                                    "ModuleDynamicFormBuilder.useEffect.getPresetFields": (f)=>f.entity_name
                                }["ModuleDynamicFormBuilder.useEffect.getPresetFields"]))
                            ];
                            setMasters(uniqueEntities);
                        } else {
                            setErrorState({
                                code: 500,
                                message: "Unexpected response format from the server."
                            });
                        }
                    } catch (err) {
                        var _err_response, _err_response_data, _err_response1;
                        console.error("API failed:", err);
                        setErrorState({
                            code: (err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) || 500,
                            message: (err === null || err === void 0 ? void 0 : (_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : (_err_response_data = _err_response1.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.detail) || "Failed to load data."
                        });
                    } finally{
                        setLoadingFields(false);
                    }
                }
            }["ModuleDynamicFormBuilder.useEffect.getPresetFields"];
            getPresetFields();
        }
    }["ModuleDynamicFormBuilder.useEffect"], [
        refreshFields
    ]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeMaster = masters[activeTab];
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleDynamicFormBuilder.useEffect": ()=>{
            if (!presetFields || Object.keys(presetFields).length === 0 || masters.length === 0) return;
            const newFormState = {};
            masters.forEach({
                "ModuleDynamicFormBuilder.useEffect": (m)=>{
                    const preset = presetFields[m];
                    const tabs = ((preset === null || preset === void 0 ? void 0 : preset.tabs) || []).map({
                        "ModuleDynamicFormBuilder.useEffect.tabs": (tab, ti)=>({
                                ...tab,
                                sections: (tab.sections || []).map({
                                    "ModuleDynamicFormBuilder.useEffect.tabs": (sec, si)=>({
                                            ...sec,
                                            fields: (sec.fields || []).map({
                                                "ModuleDynamicFormBuilder.useEffect.tabs": (f, fi)=>({
                                                        id: "".concat(m, "_").concat(ti, "_").concat(si, "_").concat(fi),
                                                        ...f,
                                                        conditions: Array.isArray(f.conditions) ? f.conditions : f.conditions ? [
                                                            f.conditions
                                                        ] : []
                                                    })
                                            }["ModuleDynamicFormBuilder.useEffect.tabs"])
                                        })
                                }["ModuleDynamicFormBuilder.useEffect.tabs"])
                            })
                    }["ModuleDynamicFormBuilder.useEffect.tabs"]);
                    const flat = tabs.flatMap({
                        "ModuleDynamicFormBuilder.useEffect.flat": (tab)=>tab.sections.flatMap({
                                "ModuleDynamicFormBuilder.useEffect.flat": (sec)=>sec.fields
                            }["ModuleDynamicFormBuilder.useEffect.flat"])
                    }["ModuleDynamicFormBuilder.useEffect.flat"]);
                    flat.forEach({
                        "ModuleDynamicFormBuilder.useEffect": (fld)=>{
                            fld.conditions = (fld.conditions || []).map({
                                "ModuleDynamicFormBuilder.useEffect": (c)=>{
                                    const match = flat.find({
                                        "ModuleDynamicFormBuilder.useEffect.match": (x)=>x.label === c.fieldId || x.id === c.fieldId
                                    }["ModuleDynamicFormBuilder.useEffect.match"]);
                                    return {
                                        ...c,
                                        fieldId: match ? match.id : c.fieldId
                                    };
                                }
                            }["ModuleDynamicFormBuilder.useEffect"]);
                        }
                    }["ModuleDynamicFormBuilder.useEffect"]);
                    newFormState[m] = {
                        tabs
                    };
                }
            }["ModuleDynamicFormBuilder.useEffect"]);
            setFormState(newFormState);
        }
    }["ModuleDynamicFormBuilder.useEffect"], [
        presetFields,
        masters
    ]);
    const [selectedFieldId, setSelectedFieldId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorField, setEditorField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasUnsavedChanges, setHasUnsavedChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingField, setPendingField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUnsavedDialog, setShowUnsavedDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tabOpenMap, setTabOpenMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sectionOpenMap, setSectionOpenMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Flattened fields for UI
    const allFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModuleDynamicFormBuilder.useMemo[allFields]": ()=>{
            const master = formState[activeMaster];
            if (!(master === null || master === void 0 ? void 0 : master.tabs)) return [];
            return master.tabs.flatMap({
                "ModuleDynamicFormBuilder.useMemo[allFields]": (tab, ti)=>tab.sections.flatMap({
                        "ModuleDynamicFormBuilder.useMemo[allFields]": (sec, si)=>(sec.fields || []).map({
                                "ModuleDynamicFormBuilder.useMemo[allFields]": (f, fi)=>({
                                        ...f,
                                        tabIndex: ti,
                                        sectionIndex: si,
                                        fieldIndex: fi
                                    })
                            }["ModuleDynamicFormBuilder.useMemo[allFields]"])
                    }["ModuleDynamicFormBuilder.useMemo[allFields]"])
            }["ModuleDynamicFormBuilder.useMemo[allFields]"]);
        }
    }["ModuleDynamicFormBuilder.useMemo[allFields]"], [
        formState,
        activeMaster
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleDynamicFormBuilder.useEffect": ()=>{
            var _master_tabs__sections__fields, _master_tabs__sections_, _master_tabs__sections, _master_tabs_, _master_tabs;
            const master = formState[activeMaster];
            const firstField = (master === null || master === void 0 ? void 0 : (_master_tabs = master.tabs) === null || _master_tabs === void 0 ? void 0 : (_master_tabs_ = _master_tabs[0]) === null || _master_tabs_ === void 0 ? void 0 : (_master_tabs__sections = _master_tabs_.sections) === null || _master_tabs__sections === void 0 ? void 0 : (_master_tabs__sections_ = _master_tabs__sections[0]) === null || _master_tabs__sections_ === void 0 ? void 0 : (_master_tabs__sections__fields = _master_tabs__sections_.fields) === null || _master_tabs__sections__fields === void 0 ? void 0 : _master_tabs__sections__fields[0]) || null;
            setSelectedFieldId({
                "ModuleDynamicFormBuilder.useEffect": (prev)=>{
                    const exists = allFields.find({
                        "ModuleDynamicFormBuilder.useEffect.exists": (f)=>f.id === prev
                    }["ModuleDynamicFormBuilder.useEffect.exists"]);
                    if (exists) return prev;
                    return (firstField === null || firstField === void 0 ? void 0 : firstField.id) || null;
                }
            }["ModuleDynamicFormBuilder.useEffect"]);
        }
    }["ModuleDynamicFormBuilder.useEffect"], [
        activeMaster,
        formState,
        allFields
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleDynamicFormBuilder.useEffect": ()=>{
            const fld = allFields.find({
                "ModuleDynamicFormBuilder.useEffect": (f)=>f.id === selectedFieldId
            }["ModuleDynamicFormBuilder.useEffect"]) || null;
            setEditorField(fld ? JSON.parse(JSON.stringify(fld)) : null);
            setHasUnsavedChanges(false);
            console.log("🧩 Loaded Editor Field:", fld);
        }
    }["ModuleDynamicFormBuilder.useEffect"], [
        selectedFieldId,
        allFields
    ]);
    const markDirtySetEditor = (patch)=>{
        setHasUnsavedChanges(true);
        setEditorField((prev)=>typeof patch === "function" ? patch(prev) : {
                ...prev,
                ...patch
            });
    };
    const isSelected = (fieldId)=>fieldId === selectedFieldId;
    const toggleTab = (master, ti)=>{
        const key = "".concat(master, "-").concat(ti);
        setTabOpenMap((prev)=>{
            var _prev_key;
            return {
                ...prev,
                [key]: !((_prev_key = prev[key]) !== null && _prev_key !== void 0 ? _prev_key : true)
            };
        });
    };
    const toggleSection = (master, ti, si)=>{
        const key = "".concat(master, "-").concat(ti, "-").concat(si);
        setSectionOpenMap((prev)=>{
            var _prev_key;
            return {
                ...prev,
                [key]: !((_prev_key = prev[key]) !== null && _prev_key !== void 0 ? _prev_key : true)
            };
        });
    };
    const handleFieldSelect = (field)=>{
        if (hasUnsavedChanges) {
            setPendingField(field);
            setShowUnsavedDialog(true);
        } else {
            setSelectedFieldId(field.id);
        }
    };
    const applyEditorSave = async ()=>{
        var _formState_activeMaster_tabs, _formState_activeMaster, _currentTab_sections;
        if (!editorField) return;
        const current = allFields.find((f)=>f.id === editorField.id);
        const tabIndex = current === null || current === void 0 ? void 0 : current.tabIndex;
        const sectionIndex = current === null || current === void 0 ? void 0 : current.sectionIndex;
        const currentTab = (_formState_activeMaster = formState[activeMaster]) === null || _formState_activeMaster === void 0 ? void 0 : (_formState_activeMaster_tabs = _formState_activeMaster.tabs) === null || _formState_activeMaster_tabs === void 0 ? void 0 : _formState_activeMaster_tabs[tabIndex];
        const currentSection = currentTab === null || currentTab === void 0 ? void 0 : (_currentTab_sections = currentTab.sections) === null || _currentTab_sections === void 0 ? void 0 : _currentTab_sections[sectionIndex];
        var _editorField_active, _editorField_version;
        const payload = {
            entity_name: activeMaster,
            tab_name: (currentTab === null || currentTab === void 0 ? void 0 : currentTab.tab) || "",
            section_name: (currentSection === null || currentSection === void 0 ? void 0 : currentSection.name) || "",
            field_label: (editorField === null || editorField === void 0 ? void 0 : editorField.label) || "",
            field_type: (editorField === null || editorField === void 0 ? void 0 : editorField.type) || "",
            field_order: Number(editorField === null || editorField === void 0 ? void 0 : editorField.order) || 0,
            required: Boolean(editorField === null || editorField === void 0 ? void 0 : editorField.required),
            disabled: Boolean(editorField === null || editorField === void 0 ? void 0 : editorField.disabled),
            roles: (editorField === null || editorField === void 0 ? void 0 : editorField.roles) || [],
            rules: (editorField === null || editorField === void 0 ? void 0 : editorField.rules) || {},
            options: (editorField === null || editorField === void 0 ? void 0 : editorField.options) || [],
            conditions: (editorField === null || editorField === void 0 ? void 0 : editorField.conditions) || [],
            active: (_editorField_active = editorField === null || editorField === void 0 ? void 0 : editorField.active) !== null && _editorField_active !== void 0 ? _editorField_active : true,
            version: (_editorField_version = editorField === null || editorField === void 0 ? void 0 : editorField.version) !== null && _editorField_version !== void 0 ? _editorField_version : 1,
            remarks: (editorField === null || editorField === void 0 ? void 0 : editorField.remarks) || "",
            grid_order: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_order) || "",
            grid: (editorField === null || editorField === void 0 ? void 0 : editorField.grid) || "",
            grid_key: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_key) || "",
            grid_label: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_label) || "",
            grid_icon: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_icon) || ""
        };
        console.log("Saved payload:", payload);
        const url = "/fieldindex01/".concat(editorField.id);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$putApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["putApi"])(url, payload);
        console.log("Saved response:", result);
        if ((result === null || result === void 0 ? void 0 : result.status_code) === 200) {
            setRefreshFields((prev)=>prev + 1);
        }
    };
    const handleDiscardAndSwitch = ()=>{
        if (!pendingField) return setShowUnsavedDialog(false);
        setHasUnsavedChanges(false);
        setSelectedFieldId(pendingField.id);
        setPendingField(null);
        setShowUnsavedDialog(false);
    };
    const handleSaveAndSwitch = async ()=>{
        await applyEditorSave();
        if (pendingField) setSelectedFieldId(pendingField.id);
        setPendingField(null);
        setShowUnsavedDialog(false);
    };
    const handleCancelSwitch = ()=>{
        setShowUnsavedDialog(false);
        setPendingField(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mdfb-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n        .mdfb-root { font-family: Inter, system-ui;}\n        .mdfb-grid { display:flex; gap:16px; align-items:flex-start }\n        .mdfb-panel { background:white; border:1px solid #e9eef5; border-radius:8px; flex:1; display:flex; flex-direction:column; max-height:80vh; overflow:hidden; margin-top:8px; }\n        .mdfb-grid > .mdfb-panel:first-child {flex-basis:30%;}\n        .mdfb-grid > .mdfb-panel:last-child {flex-basis:70%;}\n        .mdfb-list { flex:1; overflow:auto; padding:8px; }\n        .mdfb-panel-content {\n          flex: 1;\n          overflow-y: auto;\n          padding: 0;\n        }\n        .mdfb-list-item { display:flex; justify-content:space-between; align-items:center; padding:6px; border-radius:4px; cursor:pointer; margin-bottom:8px; font-size:14px; font-weight:500; color:#555; }\n        .mdfb-list-item:hover { background:#f0f0f0; transform:translateY(-1px); }\n        .mdfb-list-item.selected { background:#f0f7ff; box-shadow:0 0 0 0px rgba(15,98,254,0.12); }\n        .mdfb-left-header, .mdfb-actions-top { position:sticky; top:0; background:#fff; padding:12px 8px; z-index:10; border-bottom:1px solid #e9eef5; font-weight:700; color:#555;}\n        @media (max-width:900px){.mdfb-grid{flex-direction:column}}\n      "
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            loadingFields ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "Loading Fields..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 343,
                columnNumber: 9
            }, this) : errorState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ErrorPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                code: errorState.code,
                message: errorState.message,
                onRetry: ()=>setRefreshFields((prev)=>!prev)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 345,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        role: "tablist",
                        children: masters.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tab-item ".concat(i === activeTab ? "active" : ""),
                                onClick: ()=>setActiveTab(i),
                                role: "tab",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        m,
                                        " Master"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 356,
                                    columnNumber: 17
                                }, this)
                            }, m, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 355,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mdfb-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mdfb-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mdfb-left-header",
                                        children: [
                                            activeMaster,
                                            " Fields"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mdfb-list",
                                        children: (((_formState_activeMaster = formState[activeMaster]) === null || _formState_activeMaster === void 0 ? void 0 : _formState_activeMaster.tabs) || []).map((tab, ti)=>{
                                            var _tabOpenMap_;
                                            const tabOpen = (_tabOpenMap_ = tabOpenMap["".concat(activeMaster, "-").concat(ti)]) !== null && _tabOpenMap_ !== void 0 ? _tabOpenMap_ : true;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mdfb-tab-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>toggleTab(activeMaster, ti),
                                                        style: {
                                                            fontWeight: 700,
                                                            padding: "6px 12px",
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            background: "#f5f5f5",
                                                            borderRadius: 8,
                                                            marginBottom: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: tab.tab || "Untitled Tab ".concat(ti + 1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 372,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                size: "small",
                                                                children: tabOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandLess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    fontSize: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 373,
                                                                    columnNumber: 61
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    fontSize: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 373,
                                                                    columnNumber: 95
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 373,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 371,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                                                        in: tabOpen,
                                                        timeout: "auto",
                                                        unmountOnExit: true,
                                                        children: (tab.sections || []).map((sec, si)=>{
                                                            var _sectionOpenMap_;
                                                            const sectionOpen = (_sectionOpenMap_ = sectionOpenMap["".concat(activeMaster, "-").concat(ti, "-").concat(si)]) !== null && _sectionOpenMap_ !== void 0 ? _sectionOpenMap_ : true;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginLeft: 10,
                                                                    marginBottom: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>toggleSection(activeMaster, ti, si),
                                                                        style: {
                                                                            fontWeight: 600,
                                                                            cursor: "pointer",
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            padding: "4px 8px",
                                                                            color: "#666"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: sec.name || "Untitled Section ".concat(si + 1)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                lineNumber: 381,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                                size: "small",
                                                                                children: sectionOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandLess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    fontSize: "small"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                    lineNumber: 382,
                                                                                    columnNumber: 73
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    fontSize: "small"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                    lineNumber: 382,
                                                                                    columnNumber: 107
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                lineNumber: 382,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                        lineNumber: 380,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                                                                        in: sectionOpen,
                                                                        timeout: "auto",
                                                                        unmountOnExit: true,
                                                                        children: (sec.fields || []).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onClick: ()=>handleFieldSelect(f),
                                                                                className: "mdfb-list-item ".concat(isSelected(f.id) ? "selected" : ""),
                                                                                style: {
                                                                                    marginLeft: 16,
                                                                                    padding: "6px 10px",
                                                                                    borderRadius: 6,
                                                                                    cursor: "pointer",
                                                                                    background: isSelected(f.id) ? "#e3f2fd" : "#fff",
                                                                                    border: isSelected(f.id) ? "1px solid #1976d2" : "1px solid #eee"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontWeight: 500,
                                                                                        fontSize: 13
                                                                                    },
                                                                                    children: f.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                    lineNumber: 387,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, f.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                lineNumber: 386,
                                                                                columnNumber: 35
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                        lineNumber: 384,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, si, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 379,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 375,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, ti, true, {
                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                lineNumber: 370,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mdfb-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mdfb-actions-top",
                                        children: "Field Editor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mdfb-panel-content",
                                        children: editorField ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: 8
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginBottom: 12,
                                                            fontWeight: 600
                                                        },
                                                        children: "Field Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 415,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(3, 1fr)",
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Label",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : editorField.label) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            label: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 417,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                                                variant: "standard",
                                                                size: "small",
                                                                sx: {
                                                                    minWidth: 120,
                                                                    "& .MuiInputBase-root": {
                                                                        paddingBottom: "0px"
                                                                    },
                                                                    "& .MuiInput-input": {
                                                                        padding: "0px 0 1px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                                        children: "Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                        lineNumber: 440,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                                                        value: (editorField === null || editorField === void 0 ? void 0 : editorField.type) || "",
                                                                        onChange: (e)=>markDirtySetEditor((p)=>({
                                                                                    ...p,
                                                                                    type: e.target.value
                                                                                })),
                                                                        label: "Type",
                                                                        children: FIELD_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                                value: t,
                                                                                children: t
                                                                            }, t, false, {
                                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                lineNumber: 449,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                        lineNumber: 441,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 427,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                                                                control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                                    checked: Boolean(editorField === null || editorField === void 0 ? void 0 : editorField.required),
                                                                    onChange: (e)=>markDirtySetEditor((p)=>({
                                                                                ...p,
                                                                                required: e.target.checked
                                                                            })),
                                                                    size: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 458,
                                                                    columnNumber: 29
                                                                }, void 0),
                                                                label: "Mandatory",
                                                                sx: {
                                                                    pt: 1.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 456,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(3, 1fr)",
                                                            gap: 8,
                                                            marginTop: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Order",
                                                                type: "number",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : editorField.order) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            order: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 471,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                                                variant: "standard",
                                                                size: "small",
                                                                fullWidth: true,
                                                                sx: {
                                                                    "& .MuiInputBase-root": {
                                                                        paddingBottom: "0px"
                                                                    },
                                                                    "& .MuiInput-input": {
                                                                        padding: "0px 0 1px",
                                                                        fontSize: "0.875rem"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                                        children: "Roles"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                        lineNumber: 493,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                                                        multiple: true,
                                                                        value: (editorField === null || editorField === void 0 ? void 0 : editorField.roles) || [],
                                                                        onChange: (e)=>markDirtySetEditor((p)=>({
                                                                                    ...p,
                                                                                    roles: e.target.value
                                                                                })),
                                                                        label: "Roles",
                                                                        renderValue: (selected)=>selected.join(", "),
                                                                        children: ROLES_TYPES.map((t)=>{
                                                                            var _editorField_roles;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                                value: t,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                                                        size: "small",
                                                                                        checked: editorField === null || editorField === void 0 ? void 0 : (_editorField_roles = editorField.roles) === null || _editorField_roles === void 0 ? void 0 : _editorField_roles.includes(t),
                                                                                        sx: {
                                                                                            p: 0.5
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                        lineNumber: 505,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                                                                        primary: t,
                                                                                        primaryTypographyProps: {
                                                                                            fontSize: "0.8rem"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                        lineNumber: 510,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, t, true, {
                                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                                lineNumber: 504,
                                                                                columnNumber: 31
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                        lineNumber: 494,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 479,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                                                                control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                                    checked: Boolean(editorField === null || editorField === void 0 ? void 0 : editorField.disabled),
                                                                    onChange: (e)=>markDirtySetEditor((p)=>({
                                                                                ...p,
                                                                                disabled: e.target.checked
                                                                            })),
                                                                    size: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 521,
                                                                    columnNumber: 29
                                                                }, void 0),
                                                                label: "Disabled",
                                                                sx: {
                                                                    pt: 1.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 519,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 470,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: 12,
                                                            fontWeight: 600,
                                                            marginBottom: 8
                                                        },
                                                        children: "Validation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 535,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(3, 1fr)",
                                                            gap: 8,
                                                            marginTop: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Min Length",
                                                                type: "number",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : (_editorField_rules = editorField.rules) === null || _editorField_rules === void 0 ? void 0 : _editorField_rules.minLength) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            rules: {
                                                                                ...p.rules,
                                                                                minLength: e.target.value
                                                                            }
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 537,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Max Length",
                                                                type: "number",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : (_editorField_rules1 = editorField.rules) === null || _editorField_rules1 === void 0 ? void 0 : _editorField_rules1.maxLength) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            rules: {
                                                                                ...p.rules,
                                                                                maxLength: e.target.value
                                                                            }
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 545,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Regex",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : (_editorField_rules2 = editorField.rules) === null || _editorField_rules2 === void 0 ? void 0 : _editorField_rules2.pattern) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            rules: {
                                                                                ...p.rules,
                                                                                pattern: e.target.value
                                                                            }
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 553,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 536,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: 12,
                                                            fontWeight: 600,
                                                            marginBottom: 8
                                                        },
                                                        children: "Table Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 563,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(3, 1fr)",
                                                            gap: 8,
                                                            marginTop: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Grid Order",
                                                                type: "number",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_order) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            grid_order: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 565,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                                                                control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                                    checked: Boolean(editorField === null || editorField === void 0 ? void 0 : editorField.grid),
                                                                    onChange: (e)=>markDirtySetEditor((p)=>({
                                                                                ...p,
                                                                                grid: e.target.checked
                                                                            })),
                                                                    size: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 575,
                                                                    columnNumber: 29
                                                                }, void 0),
                                                                label: "Grid",
                                                                sx: {
                                                                    pt: 1.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 573,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 564,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(3, 1fr)",
                                                            gap: 8,
                                                            marginTop: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Grid Key",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_key) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            grid_key: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 588,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Grid Label",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_label) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            grid_label: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 595,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                                label: "Icon",
                                                                size: "small",
                                                                variant: "standard",
                                                                value: (editorField === null || editorField === void 0 ? void 0 : editorField.grid_icon) || "",
                                                                onChange: (e)=>markDirtySetEditor((p)=>({
                                                                            ...p,
                                                                            grid_icon: e.target.value
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 602,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 587,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "flex-end",
                                                            marginTop: 12,
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                                variant: "contained",
                                                                size: "small",
                                                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 613,
                                                                    columnNumber: 77
                                                                }, void 0),
                                                                onClick: applyEditorSave,
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 613,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                                variant: "outlined",
                                                                size: "small",
                                                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                    lineNumber: 619,
                                                                    columnNumber: 38
                                                                }, void 0),
                                                                onClick: ()=>{
                                                                    const real = allFields.find((f)=>f.id === selectedFieldId) || null;
                                                                    setEditorField(real ? JSON.parse(JSON.stringify(real)) : null);
                                                                    setHasUnsavedChanges(false);
                                                                },
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 616,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 612,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, selectedFieldId, true, {
                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                lineNumber: 407,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.js",
                                            lineNumber: 406,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: 32,
                                                textAlign: "center",
                                                color: "#777"
                                            },
                                            children: "Select a field to edit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.js",
                                            lineNumber: 632,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                        open: showUnsavedDialog,
                        onClose: handleCancelSwitch,
                        PaperProps: {
                            sx: {
                                borderRadius: 3,
                                p: 1.5,
                                width: 380
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    fontWeight: 600,
                                    color: "warning.main",
                                    pb: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "warning",
                                        fontSize: "medium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 641,
                                        columnNumber: 15
                                    }, this),
                                    " Unsaved Changes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                                sx: {
                                    pt: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__["DialogContentText"], {
                                    sx: {
                                        color: "text.secondary",
                                        fontSize: 14
                                    },
                                    children: "You have unsaved edits in this field. Do you want to save them before switching?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                                sx: {
                                    justifyContent: "flex-end",
                                    pt: 2,
                                    pr: 2,
                                    pb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        onClick: handleCancelSwitch,
                                        size: "small",
                                        variant: "outlined",
                                        sx: {
                                            textTransform: "none"
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        onClick: handleDiscardAndSwitch,
                                        color: "error",
                                        size: "small",
                                        variant: "outlined",
                                        sx: {
                                            textTransform: "none"
                                        },
                                        children: "Discard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        onClick: handleSaveAndSwitch,
                                        variant: "contained",
                                        size: "small",
                                        color: "primary",
                                        sx: {
                                            textTransform: "none"
                                        },
                                        children: "Save & Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 639,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/settings/page.js",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
_s(ModuleDynamicFormBuilder, "txdeJbq4MYABkDUVkFHS9wbiq7E=");
_c = ModuleDynamicFormBuilder;
var _c;
__turbopack_context__.k.register(_c, "ModuleDynamicFormBuilder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_d9c9d90b._.js.map