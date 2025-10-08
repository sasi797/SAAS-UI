(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/dashboard/user/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './CustomTable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function UserList() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const users = [
        {
            user_id: 1,
            username: "john_doe",
            email: "john@example.com",
            first_name: "John",
            last_name: "Doe",
            is_active: true
        },
        {
            user_id: 2,
            username: "jane_doe",
            email: "jane@example.com",
            first_name: "Jane",
            last_name: "Doe",
            is_active: false
        }
    ];
    const columns = [
        {
            key: "user_id",
            label: "User ID"
        },
        {
            key: "username",
            label: "Username"
        },
        {
            key: "email",
            label: "Email"
        },
        {
            key: "first_name",
            label: "First Name"
        },
        {
            key: "last_name",
            label: "Last Name"
        },
        {
            key: "is_active",
            label: "Active",
            render: (val)=>val ? "Yes" : "No"
        }
    ];
    const actions = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fontSize: "small"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/user/page.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            color: "primary",
            onClick: (row)=>router.push("/dashboard/user/edit/".concat(row.user_id))
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fontSize: "small"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/user/page.js",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            color: "error",
            onClick: (row)=>console.log("Delete user", row.user_id)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0
                        },
                        children: "User List"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/user/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        className: "btn-primary",
                        onClick: ()=>router.push("/dashboard/user/add"),
                        children: "Add User"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/user/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/user/page.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTable, {
                columns: columns,
                data: users,
                actions: actions
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/user/page.js",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/user/page.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(UserList, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserList;
var _c;
__turbopack_context__.k.register(_c, "UserList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@mui/material/esm/Button/buttonClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getButtonUtilityClass": ()=>getButtonUtilityClass
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getButtonUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButton', slot);
}
const buttonClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd'
]);
const __TURBOPACK__default__export__ = buttonClasses;
}),
"[project]/node_modules/@mui/material/esm/ButtonGroup/ButtonGroupContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * @ignore - internal component.
 */ const ButtonGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    ButtonGroupContext.displayName = 'ButtonGroupContext';
}
const __TURBOPACK__default__export__ = ButtonGroupContext;
}),
"[project]/node_modules/@mui/material/esm/ButtonGroup/ButtonGroupButtonContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * @ignore - internal component.
 */ const ButtonGroupButtonContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) {
    ButtonGroupButtonContext.displayName = 'ButtonGroupButtonContext';
}
const __TURBOPACK__default__export__ = ButtonGroupButtonContext;
}),
"[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useId$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/useId.js [app-client] (ecmascript) <export default as unstable_useId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/rootShouldForwardProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/memoTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/buttonClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonGroup$2f$ButtonGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ButtonGroup/ButtonGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonGroup$2f$ButtonGroupButtonContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ButtonGroup/ButtonGroupButtonContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
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
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { color, disableElevation, fullWidth, size, variant, loading, loadingPosition, classes } = ownerState;
    const slots = {
        root: [
            'root',
            loading && 'loading',
            variant,
            "".concat(variant).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)),
            "size".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)),
            "".concat(variant, "Size").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)),
            "color".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)),
            disableElevation && 'disableElevation',
            fullWidth && 'fullWidth',
            loading && "loadingPosition".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(loadingPosition))
        ],
        startIcon: [
            'icon',
            'startIcon',
            "iconSize".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size))
        ],
        endIcon: [
            'icon',
            'endIcon',
            "iconSize".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size))
        ],
        loadingIndicator: [
            'loadingIndicator'
        ],
        loadingWrapper: [
            'loadingWrapper'
        ]
    };
    const composedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonUtilityClass"], classes);
    return {
        ...classes,
        // forward the focused, disabled, etc. classes to the ButtonBase
        ...composedClasses
    };
};
const commonIconStyles = [
    {
        props: {
            size: 'small'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 18
            }
        }
    },
    {
        props: {
            size: 'medium'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 20
            }
        }
    },
    {
        props: {
            size: 'large'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 22
            }
        }
    }
];
const ButtonRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop) || prop === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles["".concat(ownerState.variant).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.color))],
            styles["size".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.size))],
            styles["".concat(ownerState.variant, "Size").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.size))],
            ownerState.color === 'inherit' && styles.colorInherit,
            ownerState.disableElevation && styles.disableElevation,
            ownerState.fullWidth && styles.fullWidth,
            ownerState.loading && styles.loading
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
    return {
        ...theme.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        transition: theme.transitions.create([
            'background-color',
            'box-shadow',
            'border-color',
            'color'
        ], {
            duration: theme.transitions.duration.short
        }),
        '&:hover': {
            textDecoration: 'none'
        },
        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
            color: (theme.vars || theme).palette.action.disabled
        },
        variants: [
            {
                props: {
                    variant: 'contained'
                },
                style: {
                    color: "var(--variant-containedColor)",
                    backgroundColor: "var(--variant-containedBg)",
                    boxShadow: (theme.vars || theme).shadows[2],
                    '&:hover': {
                        boxShadow: (theme.vars || theme).shadows[4],
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            boxShadow: (theme.vars || theme).shadows[2]
                        }
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[8]
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible)]: {
                        boxShadow: (theme.vars || theme).shadows[6]
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                        color: (theme.vars || theme).palette.action.disabled,
                        boxShadow: (theme.vars || theme).shadows[0],
                        backgroundColor: (theme.vars || theme).palette.action.disabledBackground
                    }
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    padding: '5px 15px',
                    border: '1px solid currentColor',
                    borderColor: "var(--variant-outlinedBorder, currentColor)",
                    backgroundColor: "var(--variant-outlinedBg)",
                    color: "var(--variant-outlinedColor)",
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                        border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
                    }
                }
            },
            {
                props: {
                    variant: 'text'
                },
                style: {
                    padding: '6px 8px',
                    color: "var(--variant-textColor)",
                    backgroundColor: "var(--variant-textBg)"
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--variant-textColor': (theme.vars || theme).palette[color].main,
                        '--variant-outlinedColor': (theme.vars || theme).palette[color].main,
                        '--variant-outlinedBorder': theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.5)") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette[color].main, 0.5),
                        '--variant-containedColor': (theme.vars || theme).palette[color].contrastText,
                        '--variant-containedBg': (theme.vars || theme).palette[color].main,
                        '@media (hover: hover)': {
                            '&:hover': {
                                '--variant-containedBg': (theme.vars || theme).palette[color].dark,
                                '--variant-textBg': theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette[color].main, theme.palette.action.hoverOpacity),
                                '--variant-outlinedBorder': (theme.vars || theme).palette[color].main,
                                '--variant-outlinedBg': theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette[color].main, theme.palette.action.hoverOpacity)
                            }
                        }
                    }
                };
            }),
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit',
                    borderColor: 'currentColor',
                    '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
                    '@media (hover: hover)': {
                        '&:hover': {
                            '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
                            '--variant-textBg': theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                            '--variant-outlinedBg': theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.text.primary, theme.palette.action.hoverOpacity)
                        }
                    }
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'text'
                },
                style: {
                    padding: '4px 5px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'text'
                },
                style: {
                    padding: '8px 11px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'outlined'
                },
                style: {
                    padding: '3px 9px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'outlined'
                },
                style: {
                    padding: '7px 21px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'contained'
                },
                style: {
                    padding: '4px 10px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'contained'
                },
                style: {
                    padding: '8px 22px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    disableElevation: true
                },
                style: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible)]: {
                        boxShadow: 'none'
                    },
                    '&:active': {
                        boxShadow: 'none'
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                        boxShadow: 'none'
                    }
                }
            },
            {
                props: {
                    fullWidth: true
                },
                style: {
                    width: '100%'
                }
            },
            {
                props: {
                    loadingPosition: 'center'
                },
                style: {
                    transition: theme.transitions.create([
                        'background-color',
                        'box-shadow',
                        'border-color'
                    ], {
                        duration: theme.transitions.duration.short
                    }),
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loading)]: {
                        color: 'transparent'
                    }
                }
            }
        ]
    };
}));
const ButtonStartIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.startIcon,
            ownerState.loading && styles.startIconLoadingStart,
            styles["iconSize".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.size))]
        ];
    }
})((param)=>{
    let { theme } = param;
    return {
        display: 'inherit',
        marginRight: 8,
        marginLeft: -4,
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    marginLeft: -2
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    loading: true
                },
                style: {
                    transition: theme.transitions.create([
                        'opacity'
                    ], {
                        duration: theme.transitions.duration.short
                    }),
                    opacity: 0
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    loading: true,
                    fullWidth: true
                },
                style: {
                    marginRight: -8
                }
            },
            ...commonIconStyles
        ]
    };
});
const ButtonEndIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.endIcon,
            ownerState.loading && styles.endIconLoadingEnd,
            styles["iconSize".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.size))]
        ];
    }
})((param)=>{
    let { theme } = param;
    return {
        display: 'inherit',
        marginRight: -4,
        marginLeft: 8,
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    marginRight: -2
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    loading: true
                },
                style: {
                    transition: theme.transitions.create([
                        'opacity'
                    ], {
                        duration: theme.transitions.duration.short
                    }),
                    opacity: 0
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    loading: true,
                    fullWidth: true
                },
                style: {
                    marginLeft: -8
                }
            },
            ...commonIconStyles
        ]
    };
});
const ButtonLoadingIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'LoadingIndicator'
})((param)=>{
    let { theme } = param;
    return {
        display: 'none',
        position: 'absolute',
        visibility: 'visible',
        variants: [
            {
                props: {
                    loading: true
                },
                style: {
                    display: 'flex'
                }
            },
            {
                props: {
                    loadingPosition: 'start'
                },
                style: {
                    left: 14
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    size: 'small'
                },
                style: {
                    left: 10
                }
            },
            {
                props: {
                    variant: 'text',
                    loadingPosition: 'start'
                },
                style: {
                    left: 6
                }
            },
            {
                props: {
                    loadingPosition: 'center'
                },
                style: {
                    left: '50%',
                    transform: 'translate(-50%)',
                    color: (theme.vars || theme).palette.action.disabled
                }
            },
            {
                props: {
                    loadingPosition: 'end'
                },
                style: {
                    right: 14
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    size: 'small'
                },
                style: {
                    right: 10
                }
            },
            {
                props: {
                    variant: 'text',
                    loadingPosition: 'end'
                },
                style: {
                    right: 6
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    fullWidth: true
                },
                style: {
                    position: 'relative',
                    left: -10
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    fullWidth: true
                },
                style: {
                    position: 'relative',
                    right: -10
                }
            }
        ]
    };
});
const ButtonLoadingIconPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'LoadingIconPlaceholder'
})({
    display: 'inline-block',
    width: '1em',
    height: '1em'
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(inProps, ref) {
    // props priority: `inProps` > `contextProps` > `themeDefaultProps`
    const contextProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonGroup$2f$ButtonGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const buttonGroupButtonContextPositionClassName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonGroup$2f$ButtonGroupButtonContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const resolvedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(contextProps, inProps);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: resolvedProps,
        name: 'MuiButton'
    });
    const { children, color = 'primary', component = 'button', className, disabled = false, disableElevation = false, disableFocusRipple = false, endIcon: endIconProp, focusVisibleClassName, fullWidth = false, id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, loadingPosition = 'center', size = 'medium', startIcon: startIconProp, type, variant = 'text', ...other } = props;
    const loadingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useId$3e$__["unstable_useId"])(idProp);
    const loadingIndicator = loadingIndicatorProp !== null && loadingIndicatorProp !== void 0 ? loadingIndicatorProp : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-labelledby": loadingId,
        color: "inherit",
        size: 16
    });
    const ownerState = {
        ...props,
        color,
        component,
        disabled,
        disableElevation,
        disableFocusRipple,
        fullWidth,
        loading,
        loadingIndicator,
        loadingPosition,
        size,
        type,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const startIcon = (startIconProp || loading && loadingPosition === 'start') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonStartIcon, {
        className: classes.startIcon,
        ownerState: ownerState,
        children: startIconProp || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonLoadingIconPlaceholder, {
            className: classes.loadingIconPlaceholder,
            ownerState: ownerState
        })
    });
    const endIcon = (endIconProp || loading && loadingPosition === 'end') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonEndIcon, {
        className: classes.endIcon,
        ownerState: ownerState,
        children: endIconProp || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonLoadingIconPlaceholder, {
            className: classes.loadingIconPlaceholder,
            ownerState: ownerState
        })
    });
    const positionClassName = buttonGroupButtonContextPositionClassName || '';
    const loader = typeof loading === 'boolean' ? /*#__PURE__*/ // use plain HTML span to minimize the runtime overhead
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: classes.loadingWrapper,
        style: {
            display: 'contents'
        },
        children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonLoadingIndicator, {
            className: classes.loadingIndicator,
            ownerState: ownerState,
            children: loadingIndicator
        })
    }) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ButtonRoot, {
        ownerState: ownerState,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(contextProps.className, classes.root, className, positionClassName),
        component: component,
        disabled: disabled || loading,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.focusVisible, focusVisibleClassName),
        ref: ref,
        type: type,
        id: loading ? loadingId : idProp,
        ...other,
        classes: classes,
        children: [
            startIcon,
            loadingPosition !== 'end' && loader,
            children,
            loadingPosition === 'end' && loader,
            endIcon
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? Button.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'primary',
            'secondary',
            'success',
            'error',
            'info',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, no elevation is used.
   * @default false
   */ disableElevation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */ disableFocusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Element placed after the children.
   */ endIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */ fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */ href: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */ loading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */ loadingIndicator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */ loadingPosition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'center',
        'end',
        'start'
    ]),
    /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'small',
            'medium',
            'large'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * Element placed before the children.
   */ startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * @ignore
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'button',
            'reset',
            'submit'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The variant to use.
   * @default 'text'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'contained',
            'outlined',
            'text'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Button;
}),
"[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Button": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@mui/icons-material/esm/Edit.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/createSvgIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit');
}),
"[project]/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/createSvgIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete');
}),
}]);

//# sourceMappingURL=_ff5ea7e5._.js.map