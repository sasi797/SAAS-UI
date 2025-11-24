(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/dashboard/menu-profile/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>RolesPermissionsTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript) <export default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Dashboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$People$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/People.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Business$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Business.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TableView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/TableView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Settings.js [app-client] (ecmascript)");
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
const roles = [
    "Admin",
    "Manager",
    "Viewer"
];
const menus = [
    {
        name: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: "Users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$People$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: "Company",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Business$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: "Menu Profile",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TableView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
];
function RolesPermissionsTable() {
    _s();
    const [activeRole, setActiveRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Admin");
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        Admin: {
            Dashboard: true,
            Users: true,
            Company: true,
            "Menu Profile": true,
            Settings: true
        },
        Manager: {
            Dashboard: true,
            Users: false,
            Company: true,
            "Menu Profile": true,
            Settings: false
        },
        Viewer: {
            Dashboard: true,
            Users: false,
            Company: false,
            "Menu Profile": true,
            Settings: false
        }
    });
    const toggle = (menuName)=>{
        setPermissions((prev)=>({
                ...prev,
                [activeRole]: {
                    ...prev[activeRole],
                    [menuName]: !prev[activeRole][menuName]
                }
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 bg-white text-gray-900 w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6",
                children: roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveRole(role),
                        className: "\n              px-4 py-1.5 rounded-full text-sm border transition\n              ".concat(activeRole === role ? "bg-gray-900 text-white border-gray-900" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100", "\n            "),
                        children: role
                    }, role, false, {
                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full table-auto border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left py-2 font-medium",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "text-left py-2 font-medium",
                                    children: "Permission"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: menus.map((menu, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "align-middle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 2,
                                        children: idx !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                            lineNumber: 93,
                                            columnNumber: 31
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(menu.icon, {
                                                        className: "text-gray-400",
                                                        fontSize: "small"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-800 text-sm",
                                                        children: menu.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__["Switch"], {
                                                    checked: permissions[activeRole][menu.name],
                                                    onChange: ()=>toggle(menu.name),
                                                    size: "small",
                                                    sx: {
                                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                                            color: "#111"
                                                        },
                                                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                                            backgroundColor: "#111"
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, menu.name, true, {
                                fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/menu-profile/page.js",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/menu-profile/page.js",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(RolesPermissionsTable, "oVzA/08EK1hvLGAPtyv0Hgq7z5Q=");
_c = RolesPermissionsTable;
var _c;
__turbopack_context__.k.register(_c, "RolesPermissionsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@mui/material/esm/FormControl/FormControlContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 */ const FormControlContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) {
    FormControlContext.displayName = 'FormControlContext';
}
const __TURBOPACK__default__export__ = FormControlContext;
}),
"[project]/node_modules/@mui/material/esm/FormControl/useFormControl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>useFormControl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControlContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControlContext.js [app-client] (ecmascript)");
'use client';
;
;
function useFormControl() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControlContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/node_modules/@mui/material/esm/internal/switchBaseClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getSwitchBaseUtilityClass": ()=>getSwitchBaseUtilityClass
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getSwitchBaseUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('PrivateSwitchBase', [
    'root',
    'checked',
    'disabled',
    'input',
    'edgeStart',
    'edgeEnd'
]);
const __TURBOPACK__default__export__ = switchBaseClasses;
}),
"[project]/node_modules/@mui/material/esm/internal/SwitchBase.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/refType/refType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/rootShouldForwardProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$useFormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/useFormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$switchBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/internal/switchBaseClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/useSlot.js [app-client] (ecmascript)");
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
const useUtilityClasses = (ownerState)=>{
    const { classes, checked, disabled, edge } = ownerState;
    const slots = {
        root: [
            'root',
            checked && 'checked',
            disabled && 'disabled',
            edge && "edge".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(edge))
        ],
        input: [
            'input'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$switchBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSwitchBaseUtilityClass"], classes);
};
const SwitchBaseRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiSwitchBase'
})({
    padding: 9,
    borderRadius: '50%',
    variants: [
        {
            props: {
                edge: 'start',
                size: 'small'
            },
            style: {
                marginLeft: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'start' && ownerState.size !== 'small';
            },
            style: {
                marginLeft: -12
            }
        },
        {
            props: {
                edge: 'end',
                size: 'small'
            },
            style: {
                marginRight: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'end' && ownerState.size !== 'small';
            },
            style: {
                marginRight: -12
            }
        }
    ]
});
const SwitchBaseInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('input', {
    name: 'MuiSwitchBase',
    shouldForwardProp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
})({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
});
/**
 * @ignore - internal component.
 */ const SwitchBase = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SwitchBase(props, ref) {
    const { autoFocus, checked: checkedProp, checkedIcon, defaultChecked, disabled: disabledProp, disableFocusRipple = false, edge = false, icon, id, inputProps, inputRef, name, onBlur, onChange, onFocus, readOnly, required = false, tabIndex, type, value, slots = {}, slotProps = {}, ...other } = props;
    const [checked, setCheckedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: 'SwitchBase',
        state: 'checked'
    });
    const muiFormControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$useFormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleFocus = (event)=>{
        if (onFocus) {
            onFocus(event);
        }
        if (muiFormControl && muiFormControl.onFocus) {
            muiFormControl.onFocus(event);
        }
    };
    const handleBlur = (event)=>{
        if (onBlur) {
            onBlur(event);
        }
        if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur(event);
        }
    };
    const handleInputChange = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/9023
        if (event.nativeEvent.defaultPrevented) {
            return;
        }
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
        if (onChange) {
            // TODO v6: remove the second argument.
            onChange(event, newChecked);
        }
    };
    let disabled = disabledProp;
    if (muiFormControl) {
        if (typeof disabled === 'undefined') {
            disabled = muiFormControl.disabled;
        }
    }
    const hasLabelFor = type === 'checkbox' || type === 'radio';
    const ownerState = {
        ...props,
        checked,
        disabled,
        disableFocusRipple,
        edge
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps: {
            input: inputProps,
            ...slotProps
        }
    };
    const [RootSlot, rootSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('root', {
        ref,
        elementType: SwitchBaseRoot,
        className: classes.root,
        shouldForwardComponentProp: true,
        externalForwardedProps: {
            ...externalForwardedProps,
            component: 'span',
            ...other
        },
        getSlotProps: {
            "SwitchBase.SwitchBase.useSlot": (handlers)=>({
                    ...handlers,
                    onFocus: ({
                        "SwitchBase.SwitchBase.useSlot": (event)=>{
                            var _handlers_onFocus;
                            (_handlers_onFocus = handlers.onFocus) === null || _handlers_onFocus === void 0 ? void 0 : _handlers_onFocus.call(handlers, event);
                            handleFocus(event);
                        }
                    })["SwitchBase.SwitchBase.useSlot"],
                    onBlur: ({
                        "SwitchBase.SwitchBase.useSlot": (event)=>{
                            var _handlers_onBlur;
                            (_handlers_onBlur = handlers.onBlur) === null || _handlers_onBlur === void 0 ? void 0 : _handlers_onBlur.call(handlers, event);
                            handleBlur(event);
                        }
                    })["SwitchBase.SwitchBase.useSlot"]
                })
        }["SwitchBase.SwitchBase.useSlot"],
        ownerState,
        additionalProps: {
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled,
            role: undefined,
            tabIndex: null
        }
    });
    const [InputSlot, inputSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('input', {
        ref: inputRef,
        elementType: SwitchBaseInput,
        className: classes.input,
        externalForwardedProps,
        getSlotProps: {
            "SwitchBase.SwitchBase.useSlot": (handlers)=>({
                    ...handlers,
                    onChange: ({
                        "SwitchBase.SwitchBase.useSlot": (event)=>{
                            var _handlers_onChange;
                            (_handlers_onChange = handlers.onChange) === null || _handlers_onChange === void 0 ? void 0 : _handlers_onChange.call(handlers, event);
                            handleInputChange(event);
                        }
                    })["SwitchBase.SwitchBase.useSlot"]
                })
        }["SwitchBase.SwitchBase.useSlot"],
        ownerState,
        additionalProps: {
            autoFocus,
            checked: checkedProp,
            defaultChecked,
            disabled,
            id: hasLabelFor ? id : undefined,
            name,
            readOnly,
            required,
            tabIndex,
            type,
            ...type === 'checkbox' && value === undefined ? {} : {
                value
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(RootSlot, {
        ...rootSlotProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InputSlot, {
                ...inputSlotProps
            }),
            checked ? checkedIcon : icon
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? SwitchBase.propTypes = {
    /**
   * If `true`, the `input` element is focused during the first mount.
   */ autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the component is checked.
   */ checked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The icon to display when the component is checked.
   */ checkedIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node.isRequired,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ defaultChecked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the component is disabled.
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */ disableFocusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */ edge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'end',
        'start',
        false
    ]),
    /**
   * The icon to display when the component is unchecked.
   */ icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node.isRequired,
    /**
   * The id of the `input` element.
   */ id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */ inputProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Pass a ref to the `input` element.
   */ inputRef: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /*
   * @ignore
   */ name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ onBlur: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */ readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the `input` element is required.
   */ required: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The input component prop `type`.
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string.isRequired,
    /**
   * The value of the component.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = SwitchBase;
}),
"[project]/node_modules/@mui/material/esm/Switch/switchClasses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getSwitchUtilityClass": ()=>getSwitchUtilityClass
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getSwitchUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSwitch', slot);
}
const switchClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiSwitch', [
    'root',
    'edgeStart',
    'edgeEnd',
    'switchBase',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
    'checked',
    'disabled',
    'input',
    'thumb',
    'track'
]);
const __TURBOPACK__default__export__ = switchClasses;
}),
"[project]/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// @inheritedComponent IconButton
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/refType/refType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$SwitchBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/internal/SwitchBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/memoTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Switch/switchClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/useSlot.js [app-client] (ecmascript)");
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
const useUtilityClasses = (ownerState)=>{
    const { classes, edge, size, color, checked, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            edge && "edge".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(edge)),
            "size".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size))
        ],
        switchBase: [
            'switchBase',
            "color".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)),
            checked && 'checked',
            disabled && 'disabled'
        ],
        thumb: [
            'thumb'
        ],
        track: [
            'track'
        ],
        input: [
            'input'
        ]
    };
    const composedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSwitchUtilityClass"], classes);
    return {
        ...classes,
        // forward the disabled and checked classes to the SwitchBase
        ...composedClasses
    };
};
const SwitchRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.edge && styles["edge".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.edge))],
            styles["size".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.size))]
        ];
    }
})({
    display: 'inline-flex',
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0,
    // Reset the stacking context.
    verticalAlign: 'middle',
    // For correct alignment with the text.
    '@media print': {
        colorAdjust: 'exact'
    },
    variants: [
        {
            props: {
                edge: 'start'
            },
            style: {
                marginLeft: -8
            }
        },
        {
            props: {
                edge: 'end'
            },
            style: {
                marginRight: -8
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                width: 40,
                height: 24,
                padding: 7,
                ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].thumb)]: {
                    width: 16,
                    height: 16
                },
                ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].switchBase)]: {
                    padding: 4,
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].checked)]: {
                        transform: 'translateX(16px)'
                    }
                }
            }
        }
    ]
});
const SwitchSwitchBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$SwitchBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.switchBase,
            {
                ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input)]: styles.input
            },
            ownerState.color !== 'default' && styles["color".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.color))]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        // Render above the focus ripple.
        color: theme.vars ? theme.vars.palette.Switch.defaultColor : "".concat(theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]),
        transition: theme.transitions.create([
            'left',
            'transform'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].checked)]: {
            transform: 'translateX(20px)'
        },
        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
            color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : "".concat(theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600])
        },
        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].checked, " + .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].track)]: {
            opacity: 0.5
        },
        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled, " + .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].track)]: {
            opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : "".concat(theme.palette.mode === 'light' ? 0.12 : 0.2)
        },
        ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input)]: {
            left: '-100%',
            width: '300%'
        }
    };
}), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        '&:hover': {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.active, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        variants: [
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'light'
            ])) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].checked)]: {
                            color: (theme.vars || theme).palette[color].main,
                            '&:hover': {
                                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette[color].main, theme.palette.action.hoverOpacity),
                                '@media (hover: none)': {
                                    backgroundColor: 'transparent'
                                }
                            },
                            ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                                color: theme.vars ? theme.vars.palette.Switch["".concat(color, "DisabledColor")] : "".concat(theme.palette.mode === 'light' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette[color].main, 0.62) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(theme.palette[color].main, 0.55))
                            }
                        },
                        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].checked, " + .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$switchClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].track)]: {
                            backgroundColor: (theme.vars || theme).palette[color].main
                        }
                    }
                };
            })
        ]
    };
}));
const SwitchTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiSwitch',
    slot: 'Track'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        height: '100%',
        width: '100%',
        borderRadius: 14 / 2,
        zIndex: -1,
        transition: theme.transitions.create([
            'opacity',
            'background-color'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : "".concat(theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white),
        opacity: theme.vars ? theme.vars.opacity.switchTrack : "".concat(theme.palette.mode === 'light' ? 0.38 : 0.3)
    };
}));
const SwitchThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiSwitch',
    slot: 'Thumb'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        boxShadow: (theme.vars || theme).shadows[1],
        backgroundColor: 'currentColor',
        width: 20,
        height: 20,
        borderRadius: '50%'
    };
}));
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Switch(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiSwitch'
    });
    const { className, color = 'primary', edge = false, size = 'medium', sx, slots = {}, slotProps = {}, ...other } = props;
    const ownerState = {
        ...props,
        color,
        edge,
        size
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps
    };
    const [RootSlot, rootSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('root', {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        elementType: SwitchRoot,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            sx
        }
    });
    const [ThumbSlot, thumbSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('thumb', {
        className: classes.thumb,
        elementType: SwitchThumb,
        externalForwardedProps,
        ownerState
    });
    const icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThumbSlot, {
        ...thumbSlotProps
    });
    const [TrackSlot, trackSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('track', {
        className: classes.track,
        elementType: SwitchTrack,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(RootSlot, {
        ...rootSlotProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SwitchSwitchBase, {
                type: "checkbox",
                icon: icon,
                checkedIcon: icon,
                ref: ref,
                ownerState: ownerState,
                ...other,
                classes: {
                    ...classes,
                    root: classes.switchBase
                },
                slots: {
                    ...slots.switchBase && {
                        root: slots.switchBase
                    },
                    ...slots.input && {
                        input: slots.input
                    }
                },
                slotProps: {
                    ...slotProps.switchBase && {
                        root: typeof slotProps.switchBase === 'function' ? slotProps.switchBase(ownerState) : slotProps.switchBase
                    },
                    ...slotProps.input && {
                        input: typeof slotProps.input === 'function' ? slotProps.input(ownerState) : slotProps.input
                    }
                }
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TrackSlot, {
                ...trackSlotProps
            })
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? Switch.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * If `true`, the component is checked.
   */ checked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The icon to display when the component is checked.
   */ checkedIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
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
            'default',
            'primary',
            'secondary',
            'error',
            'info',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The default checked state. Use when the component is not controlled.
   */ defaultChecked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the component is disabled.
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */ edge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'end',
        'start',
        false
    ]),
    /**
   * The icon to display when the component is unchecked.
   */ icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The id of the `input` element.
   */ id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ inputProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ inputRef: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$refType$2f$refType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the `input` element is required.
   * @default false
   */ required: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ /* @typescript-to-proptypes-ignore */ ["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'medium',
            'small'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        switchBase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        thumb: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        track: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        switchBase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        thumb: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        track: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
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
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Switch;
}),
"[project]/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript) <export default as Switch>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Switch": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@mui/icons-material/esm/Dashboard.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
}), 'Dashboard');
}),
"[project]/node_modules/@mui/icons-material/esm/People.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
}), 'People');
}),
"[project]/node_modules/@mui/icons-material/esm/Business.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    d: "M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"
}), 'Business');
}),
"[project]/node_modules/@mui/icons-material/esm/TableView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    d: "M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 2v2H9V9zm-6 6v-2h2v2zm2 2v2h-2v-2zm-4-2H9v-2h2zm6-2h2v2h-2zm-8 4h2v2H9zm8 2v-2h2v2zM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1z"
}), 'TableView');
}),
"[project]/node_modules/@mui/icons-material/esm/Settings.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
}), 'Settings');
}),
}]);

//# sourceMappingURL=_086fe802._.js.map