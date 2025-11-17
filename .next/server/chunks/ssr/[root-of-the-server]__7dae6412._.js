module.exports = {

"[project]/.next-internal/server/app/dashboard/settings/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/dashboard/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/dashboard/settings/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/card'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
// ─────────────────────────────────────────────────────────────
// 1️⃣ PRESETS
// ─────────────────────────────────────────────────────────────
const MASTERS = [
    "Driver",
    "Location"
];
const PRESET_FIELDS = {
    Driver: [
        {
            tabName: "General Info",
            sections: [
                {
                    sectionName: "Driver Details",
                    rows: [
                        {
                            columnCount: 3,
                            fields: [
                                {
                                    label: "Driver ID",
                                    type: "Text",
                                    required: true
                                },
                                {
                                    label: "Full Name",
                                    type: "Text",
                                    required: true
                                },
                                {
                                    label: "Status",
                                    type: "Select",
                                    options: [
                                        "Active",
                                        "Inactive"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    Location: [
        {
            tabName: "Location Info",
            sections: [
                {
                    sectionName: "Address Details",
                    rows: [
                        {
                            columnCount: 2,
                            fields: [
                                {
                                    label: "Location ID",
                                    type: "Text",
                                    required: true
                                },
                                {
                                    label: "Location Name",
                                    type: "Text",
                                    required: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
// ─────────────────────────────────────────────────────────────
// 2️⃣ COMPONENT
// ─────────────────────────────────────────────────────────────
const ModuleDynamicFormBuilder = ()=>{
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeMaster, setActiveMaster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(MASTERS[0]);
    const [selectedFieldId, setSelectedFieldId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorField, setEditorField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── Init Form State ────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const base = {};
        MASTERS.forEach((m)=>{
            const tabs = PRESET_FIELDS[m].map((tab, tabIdx)=>({
                    ...tab,
                    sections: tab.sections.map((section, secIdx)=>({
                            ...section,
                            rows: section.rows.map((row, rowIdx)=>({
                                    ...row,
                                    fields: row.fields.map((f, idx)=>({
                                            id: `${m}_${tabIdx}_${secIdx}_${rowIdx}_${idx}`,
                                            ...f
                                        }))
                                }))
                        }))
                }));
            base[m] = {
                tabs
            };
        });
        setFormState(base);
    }, []);
    // ── Helpers ────────────────────────────────────────
    const updateMaster = (callback)=>{
        setFormState((prev)=>{
            const copy = {
                ...prev
            };
            copy[activeMaster] = callback(copy[activeMaster]);
            return copy;
        });
    };
    // ── Add / Delete Items ─────────────────────────────
    const addTab = ()=>{
        updateMaster((m)=>({
                ...m,
                tabs: [
                    ...m.tabs,
                    {
                        tabName: `New Tab ${m.tabs.length + 1}`,
                        sections: [
                            {
                                sectionName: "New Section",
                                rows: [
                                    {
                                        columnCount: 2,
                                        fields: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }));
    };
    const addSection = (tabIndex)=>{
        updateMaster((m)=>{
            const tabs = [
                ...m.tabs
            ];
            tabs[tabIndex].sections.push({
                sectionName: `New Section ${tabs[tabIndex].sections.length + 1}`,
                rows: [
                    {
                        columnCount: 2,
                        fields: []
                    }
                ]
            });
            return {
                ...m,
                tabs
            };
        });
    };
    const addRow = (tabIndex, sectionIndex)=>{
        updateMaster((m)=>{
            const tabs = [
                ...m.tabs
            ];
            tabs[tabIndex].sections[sectionIndex].rows.push({
                columnCount: 2,
                fields: []
            });
            return {
                ...m,
                tabs
            };
        });
    };
    const addField = (tabIndex, sectionIndex, rowIndex)=>{
        updateMaster((m)=>{
            const tabs = [
                ...m.tabs
            ];
            const fields = tabs[tabIndex].sections[sectionIndex].rows[rowIndex].fields;
            fields.push({
                id: `${activeMaster}_${tabIndex}_${sectionIndex}_${rowIndex}_${fields.length}`,
                label: "New Field",
                type: "Text"
            });
            return {
                ...m,
                tabs
            };
        });
    };
    const deleteField = (fieldId)=>{
        updateMaster((m)=>({
                ...m,
                tabs: m.tabs.map((tab)=>({
                        ...tab,
                        sections: tab.sections.map((section)=>({
                                ...section,
                                rows: section.rows.map((row)=>({
                                        ...row,
                                        fields: row.fields.filter((f)=>f.id !== fieldId)
                                    }))
                            }))
                    }))
            }));
        setSelectedFieldId(null);
        setEditorField(null);
    };
    // ── Field Edit Save ────────────────────────────────
    const applyEditorSave = ()=>{
        if (!editorField) return;
        updateMaster((m)=>({
                ...m,
                tabs: m.tabs.map((tab)=>({
                        ...tab,
                        sections: tab.sections.map((section)=>({
                                ...section,
                                rows: section.rows.map((row)=>({
                                        ...row,
                                        fields: row.fields.map((f)=>f.id === editorField.id ? {
                                                ...editorField
                                            } : f)
                                    }))
                            }))
                    }))
            }));
        setSelectedFieldId(null);
        setEditorField(null);
    };
    // ── UI: Field List ─────────────────────────────────
    const renderFieldsList = ()=>{
        const tabs = formState[activeMaster]?.tabs || [];
        return tabs.map((tab, tIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 border-b pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-blue-600",
                                children: tab.tabName
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>addSection(tIdx),
                                children: "+ Section"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    tab.sections.map((section, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: section.sectionName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.js",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: ()=>addRow(tIdx, sIdx),
                                            children: "+ Row"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/settings/page.js",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                section.rows.map((row, rIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "Row ",
                                                            rIdx + 1,
                                                            " • ",
                                                            row.columnCount,
                                                            " columns"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                        size: "sm",
                                                        variant: "outline",
                                                        onClick: ()=>addField(tIdx, sIdx, rIdx),
                                                        children: "+ Field"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-1",
                                                children: row.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.02
                                                        },
                                                        onClick: ()=>{
                                                            setSelectedFieldId(f.id);
                                                            setEditorField({
                                                                ...f
                                                            });
                                                        },
                                                        className: `cursor-pointer rounded-md border p-2 ${selectedFieldId === f.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: f.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: f.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                                lineNumber: 243,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, f.id, true, {
                                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, rIdx, true, {
                                        fileName: "[project]/src/app/dashboard/settings/page.js",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, sIdx, true, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 201,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, tIdx, true, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)));
    };
    // ── UI: Editor ─────────────────────────────────────
    const renderEditor = ()=>{
        if (!editorField) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400",
            children: "Select a field to edit"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/settings/page.js",
            lineNumber: 258,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-semibold",
                            children: "Label"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 263,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full border rounded p-1 text-sm",
                            value: editorField.label,
                            onChange: (e)=>setEditorField((p)=>({
                                        ...p,
                                        label: e.target.value
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 264,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/settings/page.js",
                    lineNumber: 262,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-semibold",
                            children: "Type"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 274,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "w-full border rounded p-1 text-sm",
                            value: editorField.type,
                            onChange: (e)=>setEditorField((p)=>({
                                        ...p,
                                        type: e.target.value
                                    })),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Text",
                                    children: "Text"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Number",
                                    children: "Number"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Date",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Select",
                                    children: "Select"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/settings/page.js",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/settings/page.js",
                    lineNumber: 273,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                editorField.type === "Select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-semibold",
                            children: "Options (comma-separated)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 292,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full border rounded p-1 text-sm",
                            value: (editorField.options || []).join(", "),
                            onChange: (e)=>setEditorField((p)=>({
                                        ...p,
                                        options: e.target.value.split(",").map((x)=>x.trim())
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 295,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/settings/page.js",
                    lineNumber: 291,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-semibold flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: editorField.required || false,
                                onChange: (e)=>setEditorField((p)=>({
                                            ...p,
                                            required: e.target.checked
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.js",
                                lineNumber: 310,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Required"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 309,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/settings/page.js",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            size: "sm",
                            onClick: applyEditorSave,
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 322,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>deleteField(editorField.id),
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 325,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            size: "sm",
                            variant: "ghost",
                            onClick: ()=>{
                                setEditorField(null);
                                setSelectedFieldId(null);
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 332,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/settings/page.js",
                    lineNumber: 321,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/settings/page.js",
            lineNumber: 261,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // ── Render ─────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[1fr_2fr_1fr] gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-gray-700 mb-2",
                        children: "Masters"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 352,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    MASTERS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            size: "sm",
                            variant: m === activeMaster ? "default" : "outline",
                            onClick: ()=>{
                                setActiveMaster(m);
                                setSelectedFieldId(null);
                                setEditorField(null);
                            },
                            children: m
                        }, m, false, {
                            fileName: "[project]/src/app/dashboard/settings/page.js",
                            lineNumber: 354,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        className: "w-full mt-3",
                        variant: "default",
                        size: "sm",
                        onClick: addTab,
                        children: "+ Add Tab"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.js",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 351,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-3 overflow-auto",
                children: renderFieldsList()
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 378,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-3",
                children: renderEditor()
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.js",
                lineNumber: 381,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/settings/page.js",
        lineNumber: 349,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ModuleDynamicFormBuilder;
}),
"[project]/src/app/dashboard/settings/page.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/settings/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7dae6412._.js.map