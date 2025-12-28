(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Tabs(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tabs",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Tabs;
function TabsList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
            "data-slot": "tabs-list",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = TabsList;
function TabsTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "tabs-trigger",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = TabsTrigger;
function TabsContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86f8cbb9611e9698748adb0de57580f06b20b171e3e71cc198de489d2c507eef";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tabs-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "4012b4d0846b1a9937b3822cd218fc0893353f7a8e3601ac83a6d24829266d2f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4012b4d0846b1a9937b3822cd218fc0893353f7a8e3601ac83a6d24829266d2f";
    }
    let className;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, asChild: t3, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const variant = t1 === undefined ? "default" : t1;
    const size = t2 === undefined ? "default" : t2;
    const asChild = t3 === undefined ? false : t3;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t4;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== Comp || $[12] !== props || $[13] !== size || $[14] !== t4 || $[15] !== variant) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            "data-variant": variant,
            "data-size": size,
            className: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = size;
        $[14] = t4;
        $[15] = variant;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "5e40a1e1d60b0e75e80bd19c2f360b0ae0f0c5c6cd6fa4aa9f6ea52efc052339") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e40a1e1d60b0e75e80bd19c2f360b0ae0f0c5c6cd6fa4aa9f6ea52efc052339";
    }
    let className;
    let props;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = variant;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        variant = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    let t2;
    if ($[6] !== className || $[7] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[6] = className;
        $[7] = variant;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== Comp || $[10] !== props || $[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "badge",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = Comp;
        $[10] = props;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Checkbox(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "de9b68a389bbbf916aff170fe6bca57ec2367e9edde43ed6ea1e564c5175d614") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "de9b68a389bbbf916aff170fe6bca57ec2367e9edde43ed6ea1e564c5175d614";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 40,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "checkbox",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Label(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "80487155de3819238091a57bcd4b823ff65ef6e3025954fe014de2ca9d4c327d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "80487155de3819238091a57bcd4b823ff65ef6e3025954fe014de2ca9d4c327d";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "label",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/label.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Switch(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "2321e4f99ea357b45467f36f752ea6dc581ac497b0e46e7915666684bb83a247") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2321e4f99ea357b45467f36f752ea6dc581ac497b0e46e7915666684bb83a247";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "switch",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Sheet(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "sheet",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Sheet;
function SheetTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "sheet-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = SheetTrigger;
function SheetClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "sheet-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = SheetClose;
function SheetPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "sheet-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = SheetPortal;
function SheetOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "sheet-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = SheetOverlay;
function SheetContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, side: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const side = t1 === undefined ? "right" : t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const t3 = side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm";
    const t4 = side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm";
    const t5 = side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b";
    const t6 = side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t";
    let t7;
    if ($[7] !== className || $[8] !== t3 || $[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", t3, t4, t5, t6, className);
        $[7] = className;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sheet.tsx",
                    lineNumber: 217,
                    columnNumber: 279
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sheet.tsx",
                    lineNumber: 217,
                    columnNumber: 307
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== children || $[15] !== props || $[16] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "sheet-content",
                    className: t7,
                    ...props,
                    children: [
                        children,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/sheet.tsx",
                    lineNumber: 224,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[14] = children;
        $[15] = props;
        $[16] = t7;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
}
_c5 = SheetContent;
function SheetHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "sheet-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = SheetHeader;
function SheetFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "sheet-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 307,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = SheetFooter;
function SheetTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "sheet-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = SheetTitle;
function SheetDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16a4c68f1b4c3e2ef4c06eef2abb3f9b195e26e5cadb3be66c13bd02bd7e39e2";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "sheet-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sheet.tsx",
            lineNumber: 389,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Separator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "273b17e7fdbf12c2fdaa97f45150d52eaa32cdd546adda1800a5f562f5660e7c") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "273b17e7fdbf12c2fdaa97f45150d52eaa32cdd546adda1800a5f562f5660e7c";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, orientation: t1, decorative: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const orientation = t1 === undefined ? "horizontal" : t1;
    const decorative = t2 === undefined ? true : t2;
    let t3;
    if ($[6] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className);
        $[6] = className;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== decorative || $[9] !== orientation || $[10] !== props || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "separator",
            decorative: decorative,
            orientation: orientation,
            className: t3,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/separator.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = decorative;
        $[9] = orientation;
        $[10] = props;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ScrollArea(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "2b8e8fd0ba41d9f9f902209fc9f7ad3f1e82a9e12bb2d92c7313680d5b8beb40") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b8e8fd0ba41d9f9f902209fc9f7ad3f1e82a9e12bb2d92c7313680d5b8beb40";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t3 = $[9];
        t4 = $[10];
    }
    let t5;
    if ($[11] !== props || $[12] !== t1 || $[13] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "scroll-area",
            className: t1,
            ...props,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[11] = props;
        $[12] = t1;
        $[13] = t2;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = ScrollArea;
function ScrollBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "2b8e8fd0ba41d9f9f902209fc9f7ad3f1e82a9e12bb2d92c7313680d5b8beb40") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b8e8fd0ba41d9f9f902209fc9f7ad3f1e82a9e12bb2d92c7313680d5b8beb40";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, orientation: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const orientation = t1 === undefined ? "vertical" : t1;
    const t2 = orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent";
    const t3 = orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent";
    let t4;
    if ($[5] !== className || $[6] !== t2 || $[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", t2, t3, className);
        $[5] = className;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== orientation || $[11] !== props || $[12] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
            "data-slot": "scroll-area-scrollbar",
            orientation: orientation,
            className: t4,
            ...props,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[10] = orientation;
        $[11] = props;
        $[12] = t4;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = CardDescription;
function CardAction(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-action",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = CardAction;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 241,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = CardContent;
function CardFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 282,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Progress(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "a6379c7b0f5d267cf85dc1626833718286434e07e9ff163c52d01d8dc5765b57") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6379c7b0f5d267cf85dc1626833718286434e07e9ff163c52d01d8dc5765b57";
    }
    let className;
    let props;
    let value;
    if ($[1] !== t0) {
        ({ className, value, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = value;
    } else {
        className = $[2];
        props = $[3];
        value = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const t2 = `translateX(-${100 - (value || 0)}%)`;
    let t3;
    if ($[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: t2
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== props || $[10] !== t1 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "progress",
            className: t1,
            ...props,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[9] = props;
        $[10] = t1;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-study-progress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStudyProgress",
    ()=>useStudyProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "anatomy-study-progress";
const SESSION_STORAGE_KEY = "anatomy-current-session";
const defaultProgress = {
    muscles: {},
    sessions: [],
    totalCorrect: 0,
    totalIncorrect: 0,
    streakDays: 0,
    lastStudyDate: null,
    startDate: new Date().toISOString().split("T")[0]
};
// SM-2 Algorithm helper function for spaced repetition
function calculateNextReview(quality, // 0-5, where 5 is perfect recall
repetitions, easeFactor, interval) {
    let newEaseFactor = easeFactor;
    let newInterval = interval;
    let newRepetitions = repetitions;
    if (quality >= 3) {
        // Correct response
        if (repetitions === 0) {
            newInterval = 1;
        } else if (repetitions === 1) {
            newInterval = 6;
        } else {
            newInterval = Math.round(interval * easeFactor);
        }
        newRepetitions = repetitions + 1;
    } else {
        // Incorrect response - reset
        newRepetitions = 0;
        newInterval = 1;
    }
    // Update ease factor
    newEaseFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    return {
        interval: newInterval,
        repetitions: newRepetitions,
        easeFactor: newEaseFactor
    };
}
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
function isYesterday(date) {
    const yesterday = addDays(new Date(), -1);
    return isSameDay(date, yesterday);
}
function useStudyProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultProgress);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionStartTime, setSessionStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionStats, setSessionStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        correct: 0,
        incorrect: 0,
        musclesStudied: new Set()
    });
    // Load progress from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStudyProgress.useEffect": ()=>{
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setProgress(parsed);
                    // Update streak if needed
                    if (parsed.lastStudyDate) {
                        const lastDate = new Date(parsed.lastStudyDate);
                        const today = new Date();
                        if (!isSameDay(lastDate, today) && !isYesterday(lastDate)) {
                            // Streak broken
                            setProgress({
                                "useStudyProgress.useEffect": (prev)=>({
                                        ...prev,
                                        streakDays: 0
                                    })
                            }["useStudyProgress.useEffect"]);
                        }
                    }
                } catch (e) {
                    console.error("Failed to parse study progress:", e);
                }
            }
            setIsLoaded(true);
        }
    }["useStudyProgress.useEffect"], []);
    // Save progress to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStudyProgress.useEffect": ()=>{
            if (isLoaded) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            }
        }
    }["useStudyProgress.useEffect"], [
        progress,
        isLoaded
    ]);
    // Start a new study session
    const startSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[startSession]": ()=>{
            setSessionStartTime(Date.now());
            setSessionStats({
                correct: 0,
                incorrect: 0,
                musclesStudied: new Set()
            });
        }
    }["useStudyProgress.useCallback[startSession]"], []);
    // End the current session
    const endSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[endSession]": ()=>{
            if (sessionStartTime && sessionStats.musclesStudied.size > 0) {
                const duration = Math.round((Date.now() - sessionStartTime) / 1000);
                const today_0 = new Date().toISOString().split("T")[0];
                const newSession = {
                    date: today_0,
                    correctCount: sessionStats.correct,
                    incorrectCount: sessionStats.incorrect,
                    musclesStudied: sessionStats.musclesStudied.size,
                    duration
                };
                setProgress({
                    "useStudyProgress.useCallback[endSession]": (prev_0)=>{
                        const lastDate_0 = prev_0.lastStudyDate ? new Date(prev_0.lastStudyDate) : null;
                        const todayDate = new Date();
                        let newStreak = prev_0.streakDays;
                        if (!lastDate_0 || !isSameDay(lastDate_0, todayDate)) {
                            if (lastDate_0 && isYesterday(lastDate_0)) {
                                newStreak = prev_0.streakDays + 1;
                            } else if (!lastDate_0) {
                                newStreak = 1;
                            }
                        }
                        return {
                            ...prev_0,
                            sessions: [
                                ...prev_0.sessions,
                                newSession
                            ],
                            lastStudyDate: today_0,
                            streakDays: newStreak
                        };
                    }
                }["useStudyProgress.useCallback[endSession]"]);
            }
            setSessionStartTime(null);
            setSessionStats({
                correct: 0,
                incorrect: 0,
                musclesStudied: new Set()
            });
        }
    }["useStudyProgress.useCallback[endSession]"], [
        sessionStartTime,
        sessionStats
    ]);
    // Record a correct answer
    const recordCorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[recordCorrect]": (muscleName)=>{
            const today_1 = new Date().toISOString().split("T")[0];
            setSessionStats({
                "useStudyProgress.useCallback[recordCorrect]": (prev_1)=>({
                        correct: prev_1.correct + 1,
                        incorrect: prev_1.incorrect,
                        musclesStudied: new Set([
                            ...prev_1.musclesStudied,
                            muscleName
                        ])
                    })
            }["useStudyProgress.useCallback[recordCorrect]"]);
            setProgress({
                "useStudyProgress.useCallback[recordCorrect]": (prev_2)=>{
                    const existing = prev_2.muscles[muscleName] || {
                        muscleName,
                        correctCount: 0,
                        incorrectCount: 0,
                        lastReviewed: null,
                        nextReviewDate: null,
                        easeFactor: 2.5,
                        interval: 0,
                        repetitions: 0
                    };
                    const { interval, repetitions, easeFactor } = calculateNextReview(4, // Good recall
                    existing.repetitions, existing.easeFactor, existing.interval);
                    const nextReviewDate = addDays(new Date(), interval).toISOString().split("T")[0];
                    return {
                        ...prev_2,
                        muscles: {
                            ...prev_2.muscles,
                            [muscleName]: {
                                ...existing,
                                correctCount: existing.correctCount + 1,
                                lastReviewed: today_1,
                                nextReviewDate,
                                easeFactor,
                                interval,
                                repetitions
                            }
                        },
                        totalCorrect: prev_2.totalCorrect + 1
                    };
                }
            }["useStudyProgress.useCallback[recordCorrect]"]);
        }
    }["useStudyProgress.useCallback[recordCorrect]"], []);
    // Record an incorrect answer
    const recordIncorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[recordIncorrect]": (muscleName_0)=>{
            const today_2 = new Date().toISOString().split("T")[0];
            setSessionStats({
                "useStudyProgress.useCallback[recordIncorrect]": (prev_3)=>({
                        correct: prev_3.correct,
                        incorrect: prev_3.incorrect + 1,
                        musclesStudied: new Set([
                            ...prev_3.musclesStudied,
                            muscleName_0
                        ])
                    })
            }["useStudyProgress.useCallback[recordIncorrect]"]);
            setProgress({
                "useStudyProgress.useCallback[recordIncorrect]": (prev_4)=>{
                    const existing_0 = prev_4.muscles[muscleName_0] || {
                        muscleName: muscleName_0,
                        correctCount: 0,
                        incorrectCount: 0,
                        lastReviewed: null,
                        nextReviewDate: null,
                        easeFactor: 2.5,
                        interval: 0,
                        repetitions: 0
                    };
                    const { interval: interval_0, repetitions: repetitions_0, easeFactor: easeFactor_0 } = calculateNextReview(1, // Poor recall
                    existing_0.repetitions, existing_0.easeFactor, existing_0.interval);
                    const nextReviewDate_0 = addDays(new Date(), interval_0).toISOString().split("T")[0];
                    return {
                        ...prev_4,
                        muscles: {
                            ...prev_4.muscles,
                            [muscleName_0]: {
                                ...existing_0,
                                incorrectCount: existing_0.incorrectCount + 1,
                                lastReviewed: today_2,
                                nextReviewDate: nextReviewDate_0,
                                easeFactor: easeFactor_0,
                                interval: interval_0,
                                repetitions: repetitions_0
                            }
                        },
                        totalIncorrect: prev_4.totalIncorrect + 1
                    };
                }
            }["useStudyProgress.useCallback[recordIncorrect]"]);
        }
    }["useStudyProgress.useCallback[recordIncorrect]"], []);
    // Get muscles due for review
    const getMusclesDueForReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[getMusclesDueForReview]": (muscleNames)=>{
            const today_3 = new Date().toISOString().split("T")[0];
            return muscleNames.filter({
                "useStudyProgress.useCallback[getMusclesDueForReview]": (name)=>{
                    const muscleProgress = progress.muscles[name];
                    if (!muscleProgress || !muscleProgress.nextReviewDate) {
                        return true; // Never studied
                    }
                    return muscleProgress.nextReviewDate <= today_3;
                }
            }["useStudyProgress.useCallback[getMusclesDueForReview]"]);
        }
    }["useStudyProgress.useCallback[getMusclesDueForReview]"], [
        progress.muscles
    ]);
    // Get muscle mastery level (0-100)
    const getMusclesMastery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[getMusclesMastery]": (muscleName_1)=>{
            const muscleProgress_0 = progress.muscles[muscleName_1];
            if (!muscleProgress_0) return 0;
            const total = muscleProgress_0.correctCount + muscleProgress_0.incorrectCount;
            if (total === 0) return 0;
            const accuracy = muscleProgress_0.correctCount / total;
            const repetitionBonus = Math.min(muscleProgress_0.repetitions * 10, 30);
            return Math.min(100, Math.round(accuracy * 70 + repetitionBonus));
        }
    }["useStudyProgress.useCallback[getMusclesMastery]"], [
        progress.muscles
    ]);
    // Get overall statistics
    const getStatistics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[getStatistics]": ()=>{
            const total_0 = progress.totalCorrect + progress.totalIncorrect;
            const accuracy_0 = total_0 > 0 ? progress.totalCorrect / total_0 * 100 : 0;
            const muscleStats = Object.values(progress.muscles);
            const masteredCount = muscleStats.filter({
                "useStudyProgress.useCallback[getStatistics]": (m)=>{
                    const total_1 = m.correctCount + m.incorrectCount;
                    return total_1 >= 5 && m.correctCount / total_1 >= 0.8;
                }
            }["useStudyProgress.useCallback[getStatistics]"]).length;
            const needsReviewCount = muscleStats.filter({
                "useStudyProgress.useCallback[getStatistics]": (m_0)=>{
                    const today_4 = new Date().toISOString().split("T")[0];
                    return m_0.nextReviewDate && m_0.nextReviewDate <= today_4;
                }
            }["useStudyProgress.useCallback[getStatistics]"]).length;
            // Calculate total study time
            const totalStudyTime = progress.sessions.reduce({
                "useStudyProgress.useCallback[getStatistics].totalStudyTime": (acc, s)=>acc + s.duration
            }["useStudyProgress.useCallback[getStatistics].totalStudyTime"], 0);
            // Calculate average session duration
            const avgSessionDuration = progress.sessions.length > 0 ? totalStudyTime / progress.sessions.length : 0;
            return {
                totalAnswered: total_0,
                totalCorrect: progress.totalCorrect,
                totalIncorrect: progress.totalIncorrect,
                accuracy: Math.round(accuracy_0 * 10) / 10,
                streakDays: progress.streakDays,
                sessionsCount: progress.sessions.length,
                masteredCount,
                needsReviewCount,
                musclesStudied: Object.keys(progress.muscles).length,
                totalStudyTime,
                avgSessionDuration: Math.round(avgSessionDuration)
            };
        }
    }["useStudyProgress.useCallback[getStatistics]"], [
        progress
    ]);
    // Reset all progress
    const resetProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStudyProgress.useCallback[resetProgress]": ()=>{
            setProgress(defaultProgress);
            localStorage.removeItem(STORAGE_KEY);
        }
    }["useStudyProgress.useCallback[resetProgress]"], []);
    return {
        progress,
        isLoaded,
        recordCorrect,
        recordIncorrect,
        getMusclesDueForReview,
        getMusclesMastery,
        getStatistics,
        startSession,
        endSession,
        resetProgress,
        sessionStats: {
            correct: sessionStats.correct,
            incorrect: sessionStats.incorrect,
            musclesStudied: sessionStats.musclesStudied.size
        }
    };
}
_s(useStudyProgress, "HBMGiOoAFf1oOcdHNIIb5/1pvj0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/flashcard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flashcard",
    ()=>Flashcard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-study-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
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
const fieldLabels = {
    origin: "Origo",
    insertion: "Insertie",
    innervation: "Innervatie",
    function: "Functie"
};
const fieldColors = {
    origin: "text-blue-600",
    insertion: "text-green-600",
    innervation: "text-purple-600",
    function: "text-orange-600"
};
function Flashcard({ muscles, questionField, showFields }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shuffledMuscles, setShuffledMuscles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(muscles);
    const [correctCount, setCorrectCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [incorrectCount, setIncorrectCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealedFields, setRevealedFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [studyMode, setStudyMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showKeyboardHelp, setShowKeyboardHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { recordCorrect, recordIncorrect, getMusclesMastery, getMusclesDueForReview, startSession, endSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"])();
    const currentMuscle = shuffledMuscles[currentIndex];
    const muscleNames = muscles.map((m)=>m.muscle.name);
    const dueForReview = getMusclesDueForReview(muscleNames);
    // Start session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Flashcard.useEffect": ()=>{
            startSession();
            return ({
                "Flashcard.useEffect": ()=>{
                    endSession();
                }
            })["Flashcard.useEffect"];
        }
    }["Flashcard.useEffect"], [
        startSession,
        endSession
    ]);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Flashcard.useEffect": ()=>{
            const handleKeyPress = {
                "Flashcard.useEffect.handleKeyPress": (e)=>{
                    // Ignore if typing in an input
                    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                        return;
                    }
                    switch(e.key.toLowerCase()){
                        case " ":
                        case "enter":
                            e.preventDefault();
                            setIsFlipped(!isFlipped);
                            break;
                        case "arrowleft":
                        case "a":
                            e.preventDefault();
                            handlePrev();
                            break;
                        case "arrowright":
                        case "d":
                            e.preventDefault();
                            handleNext();
                            break;
                        case "arrowup":
                        case "w":
                            if (isFlipped) {
                                e.preventDefault();
                                handleCorrect();
                            }
                            break;
                        case "arrowdown":
                        case "s":
                            if (isFlipped) {
                                e.preventDefault();
                                handleIncorrect();
                            }
                            break;
                        case "h":
                            e.preventDefault();
                            setShowHint(!showHint);
                            break;
                        case "r":
                            if (e.ctrlKey || e.metaKey) return;
                            e.preventDefault();
                            handleShuffle();
                            break;
                        case "?":
                            e.preventDefault();
                            setShowKeyboardHelp(!showKeyboardHelp);
                            break;
                    }
                }
            }["Flashcard.useEffect.handleKeyPress"];
            window.addEventListener("keydown", handleKeyPress);
            return ({
                "Flashcard.useEffect": ()=>window.removeEventListener("keydown", handleKeyPress)
            })["Flashcard.useEffect"];
        }
    }["Flashcard.useEffect"], [
        isFlipped,
        showHint,
        showKeyboardHelp
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flashcard.useCallback[handleNext]": ()=>{
            setIsFlipped(false);
            setShowHint(false);
            setRevealedFields(new Set());
            setCurrentIndex({
                "Flashcard.useCallback[handleNext]": (prev)=>(prev + 1) % shuffledMuscles.length
            }["Flashcard.useCallback[handleNext]"]);
        }
    }["Flashcard.useCallback[handleNext]"], [
        shuffledMuscles.length
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flashcard.useCallback[handlePrev]": ()=>{
            setIsFlipped(false);
            setShowHint(false);
            setRevealedFields(new Set());
            setCurrentIndex({
                "Flashcard.useCallback[handlePrev]": (prev_0)=>(prev_0 - 1 + shuffledMuscles.length) % shuffledMuscles.length
            }["Flashcard.useCallback[handlePrev]"]);
        }
    }["Flashcard.useCallback[handlePrev]"], [
        shuffledMuscles.length
    ]);
    const handleShuffle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flashcard.useCallback[handleShuffle]": ()=>{
            const toShuffle = studyMode === "due" ? muscles.filter({
                "Flashcard.useCallback[handleShuffle]": (m_0)=>dueForReview.includes(m_0.muscle.name)
            }["Flashcard.useCallback[handleShuffle]"]) : muscles;
            if (toShuffle.length === 0) {
                setShuffledMuscles(muscles);
            } else {
                const shuffled = [
                    ...toShuffle
                ].sort({
                    "Flashcard.useCallback[handleShuffle].shuffled": ()=>Math.random() - 0.5
                }["Flashcard.useCallback[handleShuffle].shuffled"]);
                setShuffledMuscles(shuffled);
            }
            setCurrentIndex(0);
            setIsFlipped(false);
            setShowHint(false);
            setRevealedFields(new Set());
            setCorrectCount(0);
            setIncorrectCount(0);
        }
    }["Flashcard.useCallback[handleShuffle]"], [
        muscles,
        dueForReview,
        studyMode
    ]);
    const handleCorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flashcard.useCallback[handleCorrect]": ()=>{
            if (currentMuscle) {
                recordCorrect(currentMuscle.muscle.name);
                setCorrectCount({
                    "Flashcard.useCallback[handleCorrect]": (prev_1)=>prev_1 + 1
                }["Flashcard.useCallback[handleCorrect]"]);
            }
            handleNext();
        }
    }["Flashcard.useCallback[handleCorrect]"], [
        currentMuscle,
        recordCorrect,
        handleNext
    ]);
    const handleIncorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flashcard.useCallback[handleIncorrect]": ()=>{
            if (currentMuscle) {
                recordIncorrect(currentMuscle.muscle.name);
                setIncorrectCount({
                    "Flashcard.useCallback[handleIncorrect]": (prev_2)=>prev_2 + 1
                }["Flashcard.useCallback[handleIncorrect]"]);
            }
            handleNext();
        }
    }["Flashcard.useCallback[handleIncorrect]"], [
        currentMuscle,
        recordIncorrect,
        handleNext
    ]);
    const handleReset = ()=>{
        setCurrentIndex(0);
        setIsFlipped(false);
        setCorrectCount(0);
        setIncorrectCount(0);
        setShowHint(false);
        setRevealedFields(new Set());
    };
    const toggleFieldReveal = (field)=>{
        const newSet = new Set(revealedFields);
        if (newSet.has(field)) {
            newSet.delete(field);
        } else {
            newSet.add(field);
        }
        setRevealedFields(newSet);
    };
    const generateHint = (value)=>{
        if (!value || value.length === 0) return "";
        const words = value.split(" ");
        if (words.length > 1) {
            return words.map((w)=>w.charAt(0) + "...").join(" ");
        }
        return value.charAt(0) + "..." + value.charAt(value.length - 1);
    };
    if (muscles.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Selecteer ten minste één sectie om te oefenen."
                }, void 0, false, {
                    fileName: "[project]/src/components/flashcard.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/flashcard.tsx",
            lineNumber: 189,
            columnNumber: 12
        }, this);
    }
    if (!currentMuscle) {
        return null;
    }
    const mastery = getMusclesMastery(currentMuscle.muscle.name);
    const progressPercentage = (currentIndex + 1) / shuffledMuscles.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl mx-auto space-y-4",
        children: [
            showKeyboardHelp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        "Sneltoetsen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowKeyboardHelp(false),
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/flashcard.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "Spatie"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 216,
                                            columnNumber: 20
                                        }, this),
                                        " Kaart omdraaien"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 217,
                                            columnNumber: 20
                                        }, this),
                                        " of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "A"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 217,
                                            columnNumber: 75
                                        }, this),
                                        " Vorige"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 218,
                                            columnNumber: 20
                                        }, this),
                                        " of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "D"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 218,
                                            columnNumber: 75
                                        }, this),
                                        " Volgende"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "↑"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 20
                                        }, this),
                                        " of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "W"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 75
                                        }, this),
                                        " Goed"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "↓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 220,
                                            columnNumber: 20
                                        }, this),
                                        " of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "S"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 220,
                                            columnNumber: 75
                                        }, this),
                                        " Fout"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "H"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 221,
                                            columnNumber: 20
                                        }, this),
                                        " Hint tonen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "R"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 222,
                                            columnNumber: 20
                                        }, this),
                                        " Shuffle"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 223,
                                            columnNumber: 20
                                        }, this),
                                        " Deze help"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/flashcard.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/flashcard.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 204,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-between items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "bg-green-50 text-green-700 border-green-200",
                                children: [
                                    "✓ ",
                                    correctCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "bg-red-50 text-red-700 border-red-200",
                                children: [
                                    "✗ ",
                                    incorrectCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            mastery > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "bg-blue-50 text-blue-700 border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/flashcard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    mastery,
                                    "% beheerst"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 237,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            dueForReview.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: studyMode === "due" ? "default" : "outline",
                                size: "sm",
                                onClick: ()=>{
                                    setStudyMode(studyMode === "due" ? "all" : "due");
                                    handleShuffle();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/flashcard.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    "Herhalen (",
                                    dueForReview.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 243,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>setShowKeyboardHelp(!showKeyboardHelp),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Voortgang"
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    currentIndex + 1,
                                    " / ",
                                    shuffledMuscles.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                        value: progressPercentage,
                        className: "h-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "perspective-1000 cursor-pointer select-none",
                onClick: ()=>setIsFlipped(!isFlipped),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: `w-full min-h-[350px] transition-all duration-500 ${isFlipped ? "bg-gradient-to-br from-primary/5 to-primary/10" : ""}`,
                    style: {
                        transformStyle: "preserve-3d",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "absolute inset-0 p-6 flex flex-col justify-center items-center",
                            style: {
                                backfaceVisibility: "hidden",
                                transform: "rotateY(0deg)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mb-4 flex-wrap justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            children: currentMuscle.sectionTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        currentMuscle.subsectionTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            children: currentMuscle.subsectionTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 278,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-bold text-center mb-4 text-primary",
                                    children: currentMuscle.muscle.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                showHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-yellow-800 font-medium mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/flashcard.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this),
                                                "Hints:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 text-sm text-yellow-700",
                                            children: showFields.map((field_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                fieldLabels[field_0],
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/flashcard.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        generateHint(currentMuscle.muscle[field_0] || "")
                                                    ]
                                                }, field_0, true, {
                                                    fileName: "[project]/src/components/flashcard.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 46
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 285,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-center mt-4",
                                    children: "Klik of druk op spatie om om te draaien"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/flashcard.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "absolute inset-0 p-6 flex flex-col justify-center overflow-auto",
                            style: {
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center mb-6 text-primary",
                                    children: currentMuscle.muscle.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: showFields.map((field_1)=>{
                                        const value_0 = currentMuscle.muscle[field_1];
                                        if (!value_0) return null;
                                        const isRevealed = revealedFields.has(field_1);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-muted/50 rounded-lg border",
                                            onClick: (e_0)=>e_0.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${fieldColors[field_1]}`,
                                                            children: fieldLabels[field_1]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/flashcard.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            className: "h-6 w-6 p-0",
                                                            onClick: (e_1)=>{
                                                                e_1.stopPropagation();
                                                                toggleFieldReveal(field_1);
                                                            },
                                                            children: isRevealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/flashcard.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 39
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/flashcard.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 69
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/flashcard.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/flashcard.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: isRevealed ? "blur-none" : "blur-sm",
                                                    children: value_0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/flashcard.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, field_1, true, {
                                            fileName: "[project]/src/components/flashcard.tsx",
                                            lineNumber: 316,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/flashcard.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/flashcard.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/flashcard.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            isFlipped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "lg",
                        className: "bg-red-50 hover:bg-red-100 text-red-700 border-red-200 flex-1 max-w-[200px]",
                        onClick: (e_2)=>{
                            e_2.stopPropagation();
                            handleIncorrect();
                        },
                        children: "Ik wist het niet (↓)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "lg",
                        className: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200 flex-1 max-w-[200px]",
                        onClick: (e_3)=>{
                            e_3.stopPropagation();
                            handleCorrect();
                        },
                        children: "Ik wist het! (↑)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 339,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handlePrev,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-4 w-4 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            "Vorige"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: ()=>setShowHint(!showHint),
                        className: showHint ? "bg-yellow-50" : "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                className: "h-4 w-4 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            showHint ? "Verberg Hint" : "Hint"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handleReset,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handleShuffle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                className: "h-4 w-4 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            "Shuffle"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handleNext,
                        children: [
                            "Volgende",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/flashcard.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/flashcard.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/flashcard.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/flashcard.tsx",
        lineNumber: 202,
        columnNumber: 10
    }, this);
}
_s(Flashcard, "yCPR6N1tYDelCy0zvKCiFnW5kcU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"]
    ];
});
_c = Flashcard;
var _c;
__turbopack_context__.k.register(_c, "Flashcard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/multiple-choice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultipleChoice",
    ()=>MultipleChoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-study-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
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
function shuffleArray(array) {
    const shuffled = [
        ...array
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
}
// Helper functie om anatomische termen te extraheren voor slimme foute antwoorden
function extractAnatomicalTerms(text) {
    const terms = [];
    // Extract common anatomical prefixes/patterns
    const patterns = [
        /proc\.\s*\w+/gi,
        /linea\s*\w+/gi,
        /tuberculum\s*\w+/gi,
        /crista\s*\w+/gi,
        /fossa\s*\w+/gi,
        /os\s*\w+/gi,
        /lig\.\s*\w+/gi,
        /m\.\s*\w+/gi,
        /[A-Z]\d+-[A-Z]?\d+/g,
        // vertebrae patterns like C6-T2
        /rib\s*\d+(-\d+)?/gi,
        /costae?\s*\d+(-\d+)?/gi
    ];
    for (const pattern of patterns){
        const matches = text.match(pattern);
        if (matches) terms.push(...matches);
    }
    return terms;
}
// Genereer plausibele foute antwoorden gebaseerd op het juiste antwoord
function generateSmartWrongAnswers(correctAnswer, allMuscles, property, count = 3) {
    const wrongAnswers = [];
    const correctTerms = extractAnatomicalTerms(correctAnswer);
    // 1. Probeer eerst vergelijkbare antwoorden te vinden (met overlappende anatomische termen)
    const similarAnswers = allMuscles.filter((m)=>m[property] && m[property] !== correctAnswer && m[property].length > 0).map((m)=>({
            answer: m[property],
            score: 0
        })).map((item)=>{
        const itemTerms = extractAnatomicalTerms(item.answer);
        // Score based on shared terms
        for (const term of correctTerms){
            if (item.answer.toLowerCase().includes(term.toLowerCase())) {
                item.score += 2;
            }
        }
        // Also score based on similar length
        const lengthDiff = Math.abs(item.answer.length - correctAnswer.length);
        if (lengthDiff < 20) item.score += 1;
        return item;
    }).sort((a, b)=>b.score - a.score);
    // Get a mix of similar and random wrong answers
    const highScoreAnswers = similarAnswers.filter((a)=>a.score > 0).slice(0, 2);
    const randomAnswers = shuffleArray(similarAnswers.filter((a)=>a.score === 0));
    for (const item of highScoreAnswers){
        if (wrongAnswers.length < count && !wrongAnswers.includes(item.answer)) {
            wrongAnswers.push(item.answer);
        }
    }
    for (const item of randomAnswers){
        if (wrongAnswers.length < count && !wrongAnswers.includes(item.answer)) {
            wrongAnswers.push(item.answer);
        }
    }
    return wrongAnswers.slice(0, count);
}
// Genereer een verwisselde versie (origo ↔ insertio) voor extra moeilijkheid
function generateConfusingOrigoInsertioOptions(targetMuscle, allMuscles, isOrigo) {
    const wrongAnswers = [];
    // 1. Voeg de eigen insertio/origo toe (meest voorkomende fout!)
    if (isOrigo && targetMuscle.insertion && targetMuscle.insertion.length > 0) {
        wrongAnswers.push(targetMuscle.insertion);
    } else if (!isOrigo && targetMuscle.origin && targetMuscle.origin.length > 0) {
        wrongAnswers.push(targetMuscle.origin);
    }
    // 2. Voeg vergelijkbare origo's/insertio's van andere spieren toe
    const property = isOrigo ? "origin" : "insertion";
    const correctAnswer = isOrigo ? targetMuscle.origin : targetMuscle.insertion;
    const smartWrong = generateSmartWrongAnswers(correctAnswer, allMuscles, property, 3);
    for (const answer of smartWrong){
        if (wrongAnswers.length < 3 && !wrongAnswers.includes(answer) && answer !== correctAnswer) {
            wrongAnswers.push(answer);
        }
    }
    return wrongAnswers.slice(0, 3);
}
function generateQuestion(targetMuscle, allMuscles, questionType) {
    const fieldMap = {
        origin: {
            question: `Wat is de origo van ${targetMuscle.name}?`,
            answerKey: "origin"
        },
        insertion: {
            question: `Wat is de insertie van ${targetMuscle.name}?`,
            answerKey: "insertion"
        },
        innervation: {
            question: `Wat is de innervatie van ${targetMuscle.name}?`,
            answerKey: "innervation"
        },
        function: {
            question: `Wat is de functie van ${targetMuscle.name}?`,
            answerKey: "function"
        },
        name: {
            question: "",
            answerKey: "name"
        }
    };
    const propLabels = {
        origin: "origo",
        insertion: "insertie",
        innervation: "innervatie",
        function: "functie"
    };
    // Reverse questions: given a property value, find the muscle
    if (questionType === "origin_reverse") {
        if (!targetMuscle.origin || targetMuscle.origin.length === 0) return null;
        const correctAnswer = targetMuscle.name;
        const otherMuscles = allMuscles.filter((m)=>m.name !== correctAnswer);
        const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m.name);
        return {
            muscle: targetMuscle,
            questionType,
            questionText: `Welke spier heeft als origo: "${targetMuscle.origin}"?`,
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    if (questionType === "insertion_reverse") {
        if (!targetMuscle.insertion || targetMuscle.insertion.length === 0) return null;
        const correctAnswer = targetMuscle.name;
        const otherMuscles = allMuscles.filter((m)=>m.name !== correctAnswer);
        const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m.name);
        return {
            muscle: targetMuscle,
            questionType,
            questionText: `Welke spier heeft als insertie: "${targetMuscle.insertion}"?`,
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    if (questionType === "innervation_reverse") {
        if (!targetMuscle.innervation || targetMuscle.innervation.length === 0) return null;
        const correctAnswer = targetMuscle.name;
        const otherMuscles = allMuscles.filter((m)=>m.name !== correctAnswer);
        const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m.name);
        return {
            muscle: targetMuscle,
            questionType,
            questionText: `Welke spier wordt geïnnerveerd door: "${targetMuscle.innervation}"?`,
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    if (questionType === "function_reverse") {
        if (!targetMuscle.function || targetMuscle.function.length === 0) return null;
        const correctAnswer = targetMuscle.name;
        const otherMuscles = allMuscles.filter((m)=>m.name !== correctAnswer);
        const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m.name);
        return {
            muscle: targetMuscle,
            questionType,
            questionText: `Welke spier heeft de volgende functie: "${targetMuscle.function}"?`,
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    // True/False questions
    if (questionType === "true_false") {
        const properties = [
            "origin",
            "insertion",
            "innervation",
            "function"
        ];
        const validProps = properties.filter((p)=>targetMuscle[p] && targetMuscle[p].length > 0);
        if (validProps.length === 0) return null;
        const randomProp = validProps[Math.floor(Math.random() * validProps.length)];
        const isTrue = Math.random() > 0.5;
        if (isTrue) {
            return {
                muscle: targetMuscle,
                questionType,
                questionText: `Is de ${propLabels[randomProp]} van ${targetMuscle.name}: "${targetMuscle[randomProp]}"?`,
                correctAnswer: "Waar",
                options: [
                    "Waar",
                    "Niet waar"
                ]
            };
        } else {
            // Get a wrong value from another muscle
            const otherMuscles = allMuscles.filter((m)=>m[randomProp] && m[randomProp] !== targetMuscle[randomProp] && m[randomProp].length > 0);
            if (otherMuscles.length === 0) return null;
            const wrongValue = otherMuscles[Math.floor(Math.random() * otherMuscles.length)][randomProp];
            return {
                muscle: targetMuscle,
                questionType,
                questionText: `Is de ${propLabels[randomProp]} van ${targetMuscle.name}: "${wrongValue}"?`,
                correctAnswer: "Niet waar",
                options: [
                    "Waar",
                    "Niet waar"
                ],
                extraInfo: `Het juiste antwoord is: ${targetMuscle[randomProp]}`
            };
        }
    }
    // Match property questions: which property is correct for this muscle?
    if (questionType === "match_property") {
        const properties = [
            "origin",
            "insertion",
            "innervation",
            "function"
        ];
        const validProps = properties.filter((p)=>targetMuscle[p] && targetMuscle[p].length > 0);
        if (validProps.length === 0) return null;
        const randomProp = validProps[Math.floor(Math.random() * validProps.length)];
        const correctAnswer = targetMuscle[randomProp];
        // Get wrong values from other muscles for the same property
        const otherMuscles = allMuscles.filter((m)=>m[randomProp] && m[randomProp] !== correctAnswer && m[randomProp].length > 0);
        if (otherMuscles.length < 3) return null;
        const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m[randomProp]);
        const questionVariants = [
            `Welke ${propLabels[randomProp]} hoort bij ${targetMuscle.name}?`,
            `Kies de juiste ${propLabels[randomProp]} voor ${targetMuscle.name}:`,
            `${targetMuscle.name} heeft welke ${propLabels[randomProp]}?`
        ];
        return {
            muscle: targetMuscle,
            questionType,
            questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    // NEW: Origo of Insertio vraag - "Is dit de origo of insertio van spier X?"
    if (questionType === "origo_or_insertio") {
        if (!targetMuscle.origin || !targetMuscle.insertion || targetMuscle.origin.length === 0 || targetMuscle.insertion.length === 0) return null;
        const isOrigo = Math.random() > 0.5;
        const shownValue = isOrigo ? targetMuscle.origin : targetMuscle.insertion;
        const correctAnswer = isOrigo ? "Origo" : "Insertie";
        const questionVariants = [
            `"${shownValue}" is de ... van ${targetMuscle.name}?`,
            `Bij ${targetMuscle.name}: is "${shownValue}" de origo of de insertie?`,
            `Wat beschrijft "${shownValue}" voor ${targetMuscle.name}?`
        ];
        return {
            muscle: targetMuscle,
            questionType,
            questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
            correctAnswer,
            options: [
                "Origo",
                "Insertie"
            ],
            extraInfo: isOrigo ? `De insertie van ${targetMuscle.name} is: ${targetMuscle.insertion}` : `De origo van ${targetMuscle.name} is: ${targetMuscle.origin}`
        };
    }
    // NEW: Welke spier heeft deze origo/insertio - met slimme foute antwoorden
    if (questionType === "which_muscle_origo_insertio") {
        const hasOrigo = targetMuscle.origin && targetMuscle.origin.length > 0;
        const hasInsertio = targetMuscle.insertion && targetMuscle.insertion.length > 0;
        if (!hasOrigo && !hasInsertio) return null;
        // Kies random origo of insertio
        let isOrigo = Math.random() > 0.5;
        if (!hasOrigo) isOrigo = false;
        if (!hasInsertio) isOrigo = true;
        const property = isOrigo ? "origin" : "insertion";
        const propertyLabel = isOrigo ? "origo" : "insertie";
        const shownValue = isOrigo ? targetMuscle.origin : targetMuscle.insertion;
        const correctAnswer = targetMuscle.name;
        // Gebruik slimme foute antwoorden - spieren met vergelijkbare origo/insertio
        const confusingMuscles = allMuscles.filter((m)=>m.name !== correctAnswer && m[property] && m[property].length > 0).map((m)=>{
            const terms = extractAnatomicalTerms(shownValue);
            let score = 0;
            for (const term of terms){
                if (m[property].toLowerCase().includes(term.toLowerCase())) {
                    score += 2;
                }
                // Extra score als ze dezelfde structuur bevatten
                if (m.origin?.toLowerCase().includes(term.toLowerCase()) || m.insertion?.toLowerCase().includes(term.toLowerCase())) {
                    score += 1;
                }
            }
            return {
                muscle: m,
                score
            };
        }).sort((a, b)=>b.score - a.score);
        // Mix van vergelijkbare en willekeurige spieren
        const wrongAnswers = [];
        for (const item of confusingMuscles.slice(0, 2)){
            if (wrongAnswers.length < 3) wrongAnswers.push(item.muscle.name);
        }
        const randomOthers = shuffleArray(confusingMuscles.slice(2));
        for (const item of randomOthers){
            if (wrongAnswers.length < 3) wrongAnswers.push(item.muscle.name);
        }
        if (wrongAnswers.length < 3) return null;
        const questionVariants = [
            `Welke spier heeft als ${propertyLabel}: "${shownValue}"?`,
            `De ${propertyLabel} "${shownValue}" hoort bij welke spier?`,
            `Identificeer de spier met deze ${propertyLabel}: "${shownValue}"`
        ];
        return {
            muscle: targetMuscle,
            questionType,
            questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    if (questionType === "name") {
        // For name questions, we show a property and ask for the muscle name
        const properties = [
            "origin",
            "insertion",
            "innervation",
            "function"
        ];
        const validProps = properties.filter((p)=>targetMuscle[p] && targetMuscle[p].length > 0);
        if (validProps.length === 0) return null;
        const randomProp = validProps[Math.floor(Math.random() * validProps.length)];
        const correctAnswer = targetMuscle.name;
        const otherMuscles = allMuscles.filter((m)=>m.name !== correctAnswer);
        const wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m.name);
        const questionVariants = [
            `Welke spier heeft de volgende ${propLabels[randomProp]}: "${targetMuscle[randomProp]}"?`,
            `Deze ${propLabels[randomProp]} hoort bij welke spier: "${targetMuscle[randomProp]}"?`,
            `Identificeer de spier met ${propLabels[randomProp]}: "${targetMuscle[randomProp]}"`
        ];
        return {
            muscle: targetMuscle,
            questionType,
            questionText: questionVariants[Math.floor(Math.random() * questionVariants.length)],
            correctAnswer,
            options: shuffleArray([
                correctAnswer,
                ...wrongAnswers
            ])
        };
    }
    const config = fieldMap[questionType];
    if (!config) return null;
    const correctAnswer = targetMuscle[config.answerKey];
    if (!correctAnswer || correctAnswer.length === 0) return null;
    // Use smart wrong answers for origin and insertion questions
    let wrongAnswers;
    if (questionType === "origin" || questionType === "insertion") {
        // Voor origo/insertio vragen: gebruik slimme foute antwoorden
        wrongAnswers = generateConfusingOrigoInsertioOptions(targetMuscle, allMuscles, questionType === "origin");
        // Als we niet genoeg slimme antwoorden hebben, vul aan met willekeurige
        if (wrongAnswers.length < 3) {
            const otherMuscles = allMuscles.filter((m)=>m[config.answerKey] && m[config.answerKey] !== correctAnswer && !wrongAnswers.includes(m[config.answerKey]) && m[config.answerKey].length > 0);
            const additional = shuffleArray(otherMuscles).slice(0, 3 - wrongAnswers.length).map((m)=>m[config.answerKey]);
            wrongAnswers.push(...additional);
        }
    } else {
        // Voor andere vragen: standaard methode
        const otherMuscles = allMuscles.filter((m)=>m[config.answerKey] && m[config.answerKey] !== correctAnswer && m[config.answerKey].length > 0);
        if (otherMuscles.length < 3) return null;
        wrongAnswers = shuffleArray(otherMuscles).slice(0, 3).map((m)=>m[config.answerKey]);
    }
    if (wrongAnswers.length < 3) return null;
    // Add question variants for standard questions
    const questionVariants = {
        origin: [
            `Wat is de origo van ${targetMuscle.name}?`,
            `Waar vindt ${targetMuscle.name} zijn oorsprong?`,
            `De origo van ${targetMuscle.name} is:`
        ],
        insertion: [
            `Wat is de insertie van ${targetMuscle.name}?`,
            `Waar insereert ${targetMuscle.name}?`,
            `De insertie van ${targetMuscle.name} is:`
        ],
        innervation: [
            `Wat is de innervatie van ${targetMuscle.name}?`,
            `Door welke zenuw wordt ${targetMuscle.name} geïnnerveerd?`,
            `De innervatie van ${targetMuscle.name} is:`
        ],
        function: [
            `Wat is de functie van ${targetMuscle.name}?`,
            `Welke beweging voert ${targetMuscle.name} uit?`,
            `De functie van ${targetMuscle.name} is:`
        ]
    };
    const variants = questionVariants[questionType] || [
        config.question
    ];
    const selectedQuestion = variants[Math.floor(Math.random() * variants.length)];
    return {
        muscle: targetMuscle,
        questionType,
        questionText: selectedQuestion,
        correctAnswer,
        options: shuffleArray([
            correctAnswer,
            ...wrongAnswers
        ])
    };
}
function MultipleChoice({ muscles, questionTypes }) {
    _s();
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [correctCount, setCorrectCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answeredCount, setAnsweredCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFinished, setIsFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showKeyboardHelp, setShowKeyboardHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizMode, setQuizMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("full");
    const { recordCorrect, recordIncorrect, getMusclesDueForReview, startSession, endSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"])();
    const allMuscles = muscles.map((m)=>m.muscle);
    const muscleNames = muscles.map((m_0)=>m_0.muscle.name);
    const dueForReview = getMusclesDueForReview(muscleNames);
    // Start session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultipleChoice.useEffect": ()=>{
            startSession();
            return ({
                "MultipleChoice.useEffect": ()=>{
                    endSession();
                }
            })["MultipleChoice.useEffect"];
        }
    }["MultipleChoice.useEffect"], [
        startSession,
        endSession
    ]);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultipleChoice.useEffect": ()=>{
            const handleKeyPress = {
                "MultipleChoice.useEffect.handleKeyPress": (e)=>{
                    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                        return;
                    }
                    // Number keys 1-4 to select answers
                    if (e.key >= "1" && e.key <= "4") {
                        const index = parseInt(e.key) - 1;
                        const currentQuestion = questions[currentIndex];
                        if (currentQuestion && currentQuestion.options[index] && !showResult) {
                            setSelectedAnswer(currentQuestion.options[index]);
                        }
                        return;
                    }
                    switch(e.key.toLowerCase()){
                        case "enter":
                        case " ":
                            e.preventDefault();
                            if (!showResult && selectedAnswer) {
                                handleSubmit();
                            } else if (showResult) {
                                handleNext();
                            }
                            break;
                        case "?":
                            e.preventDefault();
                            setShowKeyboardHelp(!showKeyboardHelp);
                            break;
                    }
                }
            }["MultipleChoice.useEffect.handleKeyPress"];
            window.addEventListener("keydown", handleKeyPress);
            return ({
                "MultipleChoice.useEffect": ()=>window.removeEventListener("keydown", handleKeyPress)
            })["MultipleChoice.useEffect"];
        }
    }["MultipleChoice.useEffect"], [
        showResult,
        selectedAnswer,
        currentIndex,
        questions,
        showKeyboardHelp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultipleChoice.useEffect": ()=>{
            generateNewQuiz();
        }
    }["MultipleChoice.useEffect"], [
        muscles,
        questionTypes,
        quizMode
    ]);
    const generateNewQuiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleChoice.useCallback[generateNewQuiz]": ()=>{
            const newQuestions = [];
            // Filter muscles based on quiz mode
            let targetMuscles = muscles;
            if (quizMode === "due" && dueForReview.length > 0) {
                targetMuscles = muscles.filter({
                    "MultipleChoice.useCallback[generateNewQuiz]": (m_1)=>dueForReview.includes(m_1.muscle.name)
                }["MultipleChoice.useCallback[generateNewQuiz]"]);
            }
            const shuffledMuscles = shuffleArray(targetMuscles);
            // Generate multiple questions per muscle for more variety
            for (const { muscle } of shuffledMuscles){
                const shuffledTypes = shuffleArray(questionTypes);
                let questionsAdded = 0;
                const maxQuestionsPerMuscle = Math.min(3, questionTypes.length);
                for (const type of shuffledTypes){
                    if (questionsAdded >= maxQuestionsPerMuscle) break;
                    const question = generateQuestion(muscle, allMuscles, type);
                    if (question) {
                        newQuestions.push(question);
                        questionsAdded++;
                    }
                }
            }
            // Shuffle and limit based on quiz mode
            const maxQuestions = quizMode === "quick" ? 10 : Math.min(newQuestions.length, 30);
            setQuestions(shuffleArray(newQuestions).slice(0, maxQuestions));
            setCurrentIndex(0);
            setSelectedAnswer(null);
            setShowResult(false);
            setCorrectCount(0);
            setAnsweredCount(0);
            setIsFinished(false);
        }
    }["MultipleChoice.useCallback[generateNewQuiz]"], [
        muscles,
        questionTypes,
        quizMode,
        allMuscles,
        dueForReview
    ]);
    const handleAnswerSelect = (answer)=>{
        if (showResult) return;
        setSelectedAnswer(answer);
    };
    const handleSubmit = ()=>{
        if (!selectedAnswer) return;
        setShowResult(true);
        setAnsweredCount((prev)=>prev + 1);
        const currentQuestion_0 = questions[currentIndex];
        const isCorrect = selectedAnswer === currentQuestion_0.correctAnswer;
        // Record progress
        if (isCorrect) {
            setCorrectCount((prev_0)=>prev_0 + 1);
            recordCorrect(currentQuestion_0.muscle.name);
        } else {
            recordIncorrect(currentQuestion_0.muscle.name);
        }
    };
    const handleNext = ()=>{
        if (currentIndex + 1 >= questions.length) {
            setIsFinished(true);
            return;
        }
        setCurrentIndex((prev_1)=>prev_1 + 1);
        setSelectedAnswer(null);
        setShowResult(false);
    };
    if (muscles.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Selecteer ten minste één sectie om te oefenen."
                }, void 0, false, {
                    fileName: "[project]/src/components/multiple-choice.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 519,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/multiple-choice.tsx",
            lineNumber: 518,
            columnNumber: 12
        }, this);
    }
    if (questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Geen vragen beschikbaar met de huidige selectie."
                }, void 0, false, {
                    fileName: "[project]/src/components/multiple-choice.tsx",
                    lineNumber: 529,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 528,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/multiple-choice.tsx",
            lineNumber: 527,
            columnNumber: 12
        }, this);
    }
    if (isFinished) {
        const percentage = Math.round(correctCount / answeredCount * 100);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-center",
                        children: "Quiz Voltooid!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/multiple-choice.tsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8 text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl font-bold text-primary",
                            children: [
                                percentage,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 542,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl",
                            children: [
                                "Je hebt ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-green-600",
                                    children: correctCount
                                }, void 0, false, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 544,
                                    columnNumber: 21
                                }, this),
                                " van de",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: answeredCount
                                }, void 0, false, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, this),
                                " vragen goed beantwoord."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                            value: percentage,
                            className: "h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: generateNewQuiz,
                            size: "lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this),
                                "Opnieuw proberen"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/multiple-choice.tsx",
                    lineNumber: 541,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/multiple-choice.tsx",
            lineNumber: 537,
            columnNumber: 12
        }, this);
    }
    const currentQuestion_1 = questions[currentIndex];
    const progress = (currentIndex + 1) / questions.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl mx-auto space-y-4",
        children: [
            showKeyboardHelp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        "Sneltoetsen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowKeyboardHelp(false),
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 566,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "1-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 571,
                                            columnNumber: 20
                                        }, this),
                                        " Kies antwoord A-D"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "Enter"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 572,
                                            columnNumber: 20
                                        }, this),
                                        " Bevestig / Volgende"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-muted rounded",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 573,
                                            columnNumber: 20
                                        }, this),
                                        " Deze help"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 570,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/multiple-choice.tsx",
                    lineNumber: 560,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 559,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-between items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: quizMode === "full" ? "default" : "outline",
                                size: "sm",
                                onClick: ()=>setQuizMode("full"),
                                children: "Volledige Quiz"
                            }, void 0, false, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: quizMode === "quick" ? "default" : "outline",
                                size: "sm",
                                onClick: ()=>setQuizMode("quick"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/multiple-choice.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    "Snel (10)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, this),
                            dueForReview.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: quizMode === "due" ? "default" : "outline",
                                size: "sm",
                                onClick: ()=>setQuizMode("due"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/multiple-choice.tsx",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this),
                                    "Herhalen (",
                                    dueForReview.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 588,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>setShowKeyboardHelp(!showKeyboardHelp),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 594,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "bg-green-50 text-green-700 border-green-200",
                                children: [
                                    "Goed: ",
                                    correctCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 601,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "bg-red-50 text-red-700 border-red-200",
                                children: [
                                    "Fout: ",
                                    answeredCount - correctCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        children: [
                            currentIndex + 1,
                            " / ",
                            questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: progress,
                className: "h-2"
            }, void 0, false, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg",
                            children: currentQuestion_1.questionText
                        }, void 0, false, {
                            fileName: "[project]/src/components/multiple-choice.tsx",
                            lineNumber: 617,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-3",
                        children: [
                            currentQuestion_1.options.map((option, index_0)=>{
                                const isSelected = selectedAnswer === option;
                                const isCorrect_0 = option === currentQuestion_1.correctAnswer;
                                let buttonClass = "w-full justify-start text-left h-auto py-3 px-4";
                                if (showResult) {
                                    if (isCorrect_0) {
                                        buttonClass += " bg-green-100 border-green-500 text-green-800 hover:bg-green-100";
                                    } else if (isSelected && !isCorrect_0) {
                                        buttonClass += " bg-red-100 border-red-500 text-red-800 hover:bg-red-100";
                                    }
                                } else if (isSelected) {
                                    buttonClass += " border-primary bg-primary/10";
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: buttonClass,
                                    onClick: ()=>handleAnswerSelect(option),
                                    disabled: showResult,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-3 font-bold",
                                            children: [
                                                String.fromCharCode(65 + index_0),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1",
                                            children: option
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 635,
                                            columnNumber: 17
                                        }, this),
                                        showResult && isCorrect_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "h-5 w-5 text-green-600 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 636,
                                            columnNumber: 47
                                        }, this),
                                        showResult && isSelected && !isCorrect_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                            className: "h-5 w-5 text-red-600 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 637,
                                            columnNumber: 62
                                        }, this)
                                    ]
                                }, index_0, true, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 633,
                                    columnNumber: 18
                                }, this);
                            }),
                            showResult && currentQuestion_1.extraInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "💡 "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/multiple-choice.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this),
                                        currentQuestion_1.extraInfo
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/multiple-choice.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 642,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: generateNewQuiz,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this),
                            "Nieuwe quiz"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    !showResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleSubmit,
                        disabled: !selectedAnswer,
                        children: "Controleer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 657,
                        columnNumber: 24
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleNext,
                        children: [
                            currentIndex + 1 >= questions.length ? "Resultaten" : "Volgende",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4 ml-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/multiple-choice.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/multiple-choice.tsx",
                        lineNumber: 659,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/multiple-choice.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/multiple-choice.tsx",
        lineNumber: 557,
        columnNumber: 10
    }, this);
}
_s(MultipleChoice, "1ddzw35ZqkvCwTdmaL+Nv5JHkPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"]
    ];
});
_c = MultipleChoice;
var _c;
__turbopack_context__.k.register(_c, "MultipleChoice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Select(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "select",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Select;
function SelectGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            "data-slot": "select-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = SelectGroup;
function SelectValue(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
            "data-slot": "select-value",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = SelectValue;
function SelectTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, size: t1, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const size = t1 === undefined ? "default" : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                className: "size-4 opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 133,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== size || $[12] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "select-trigger",
            "data-size": size,
            className: t2,
            ...props,
            children: [
                children,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = size;
        $[12] = t2;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c3 = SelectTrigger;
function SelectContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let children;
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, children, position: t1, align: t2, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
    }
    const position = t1 === undefined ? "item-aligned" : t1;
    const align = t2 === undefined ? "center" : t2;
    const t3 = position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1";
    let t4;
    if ($[7] !== className || $[8] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", t3, className);
        $[7] = className;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1";
    let t7;
    if ($[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", t6);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== children || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
            className: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 215,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== align || $[18] !== position || $[19] !== props || $[20] !== t4 || $[21] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "select-content",
                className: t4,
                position: position,
                align: align,
                ...props,
                children: [
                    t5,
                    t8,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 231,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[17] = align;
        $[18] = position;
        $[19] = props;
        $[20] = t4;
        $[21] = t8;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    return t10;
}
_c4 = SelectContent;
function SelectLabel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            "data-slot": "select-label",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 275,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = SelectLabel;
function SelectItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 320,
                    columnNumber: 152
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 320,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 320,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 327,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== props || $[11] !== t1 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            "data-slot": "select-item",
            className: t1,
            ...props,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 335,
            columnNumber: 10
        }, this);
        $[10] = props;
        $[11] = t1;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c6 = SelectItem;
function SelectSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            "data-slot": "select-separator",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 377,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = SelectSeparator;
function SelectScrollUpButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 418,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
            "data-slot": "select-scroll-up-button",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 425,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0dc2174d9a0a5fc092ac0e9d77bcde269dade1c8960c930dd567184c9c524697";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 466,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
            "data-slot": "select-scroll-down-button",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 473,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/muscle-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuscleOverview",
    ()=>MuscleOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
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
function MuscleOverview(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "0a289683dcfb5758a87f32a50fdc6bfe44eeccccc1a4f8648c0c65fd3c091be4") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a289683dcfb5758a87f32a50fdc6bfe44eeccccc1a4f8648c0c65fd3c091be4";
    }
    const { muscles } = t0;
    const [expandedMuscle, setExpandedMuscle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("section");
    let T0;
    let T1;
    let T2;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== expandedMuscle || $[2] !== muscles || $[3] !== searchTerm || $[4] !== sortBy) {
        t7 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t8;
            if ($[15] !== searchTerm) {
                t8 = ({
                    "MuscleOverview[muscles.filter()]": (t9)=>{
                        const { muscle } = t9;
                        return muscle.name.toLowerCase().includes(searchTerm.toLowerCase()) || muscle.origin.toLowerCase().includes(searchTerm.toLowerCase()) || muscle.insertion.toLowerCase().includes(searchTerm.toLowerCase()) || muscle.innervation.toLowerCase().includes(searchTerm.toLowerCase()) || muscle.function.toLowerCase().includes(searchTerm.toLowerCase());
                    }
                })["MuscleOverview[muscles.filter()]"];
                $[15] = searchTerm;
                $[16] = t8;
            } else {
                t8 = $[16];
            }
            const filteredMuscles = muscles.filter(t8);
            let t9;
            if ($[17] !== sortBy) {
                t9 = ({
                    "MuscleOverview[(anonymous)()]": (a, b)=>{
                        if (sortBy === "name") {
                            return a.muscle.name.localeCompare(b.muscle.name);
                        }
                        return a.sectionTitle.localeCompare(b.sectionTitle);
                    }
                })["MuscleOverview[(anonymous)()]"];
                $[17] = sortBy;
                $[18] = t9;
            } else {
                t9 = $[18];
            }
            const sortedMuscles = [
                ...filteredMuscles
            ].sort(t9);
            let t10;
            if ($[19] !== expandedMuscle) {
                t10 = ({
                    "MuscleOverview[toggleExpand]": (muscleName)=>{
                        setExpandedMuscle(expandedMuscle === muscleName ? null : muscleName);
                    }
                })["MuscleOverview[toggleExpand]"];
                $[19] = expandedMuscle;
                $[20] = t10;
            } else {
                t10 = $[20];
            }
            const toggleExpand = t10;
            if (muscles.length === 0) {
                let t11;
                if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                    t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "w-full max-w-4xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Selecteer ten minste één sectie om spieren te bekijken."
                            }, void 0, false, {
                                fileName: "[project]/src/components/muscle-overview.tsx",
                                lineNumber: 95,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/muscle-overview.tsx",
                            lineNumber: 95,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/muscle-overview.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this);
                    $[21] = t11;
                } else {
                    t11 = $[21];
                }
                t7 = t11;
                break bb0;
            }
            t5 = "w-full max-w-4xl mx-auto space-y-4";
            let t11;
            if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                }, this);
                $[22] = t11;
            } else {
                t11 = $[22];
            }
            let t12;
            if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
                t12 = ({
                    "MuscleOverview[<input>.onChange]": (e)=>setSearchTerm(e.target.value)
                })["MuscleOverview[<input>.onChange]"];
                $[23] = t12;
            } else {
                t12 = $[23];
            }
            let t13;
            if ($[24] !== searchTerm) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1",
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Zoeken...",
                            value: searchTerm,
                            onChange: t12,
                            className: "w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/muscle-overview.tsx",
                            lineNumber: 122,
                            columnNumber: 53
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 122,
                    columnNumber: 15
                }, this);
                $[24] = searchTerm;
                $[25] = t13;
            } else {
                t13 = $[25];
            }
            let t14;
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = ({
                    "MuscleOverview[<Select>.onValueChange]": (value)=>setSortBy(value)
                })["MuscleOverview[<Select>.onValueChange]"];
                $[26] = t14;
            } else {
                t14 = $[26];
            }
            let t15;
            if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
                t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: "w-full sm:w-[180px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                        placeholder: "Sorteren op"
                    }, void 0, false, {
                        fileName: "[project]/src/components/muscle-overview.tsx",
                        lineNumber: 139,
                        columnNumber: 62
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 139,
                    columnNumber: 15
                }, this);
                $[27] = t15;
            } else {
                t15 = $[27];
            }
            let t16;
            if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                            value: "section",
                            children: "Op sectie"
                        }, void 0, false, {
                            fileName: "[project]/src/components/muscle-overview.tsx",
                            lineNumber: 146,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                            value: "name",
                            children: "Op naam"
                        }, void 0, false, {
                            fileName: "[project]/src/components/muscle-overview.tsx",
                            lineNumber: 146,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 146,
                    columnNumber: 15
                }, this);
                $[28] = t16;
            } else {
                t16 = $[28];
            }
            let t17;
            if ($[29] !== sortBy) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: sortBy,
                    onValueChange: t14,
                    children: [
                        t15,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 153,
                    columnNumber: 15
                }, this);
                $[29] = sortBy;
                $[30] = t17;
            } else {
                t17 = $[30];
            }
            let t18;
            if ($[31] !== t13 || $[32] !== t17) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                        t13,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 161,
                    columnNumber: 15
                }, this);
                $[31] = t13;
                $[32] = t17;
                $[33] = t18;
            } else {
                t18 = $[33];
            }
            const t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-4",
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mt-2",
                        children: [
                            filteredMuscles.length,
                            " van ",
                            muscles.length,
                            " spieren"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/muscle-overview.tsx",
                        lineNumber: 168,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/muscle-overview.tsx",
                lineNumber: 168,
                columnNumber: 19
            }, this);
            if ($[34] !== t19) {
                t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 170,
                    columnNumber: 14
                }, this);
                $[34] = t19;
                $[35] = t6;
            } else {
                t6 = $[35];
            }
            T2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
            if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Alle spieren"
                    }, void 0, false, {
                        fileName: "[project]/src/components/muscle-overview.tsx",
                        lineNumber: 178,
                        columnNumber: 26
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/muscle-overview.tsx",
                    lineNumber: 178,
                    columnNumber: 14
                }, this);
                $[36] = t4;
            } else {
                t4 = $[36];
            }
            T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
            T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"];
            t3 = "h-[600px] pr-4";
            t1 = "space-y-2";
            let t20;
            if ($[37] !== expandedMuscle || $[38] !== toggleExpand) {
                t20 = ({
                    "MuscleOverview[sortedMuscles.map()]": (t21, index)=>{
                        const { muscle: muscle_0, sectionTitle, subsectionTitle } = t21;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-lg border cursor-pointer transition-colors ${expandedMuscle === muscle_0.name ? "bg-primary/5 border-primary" : "hover:bg-muted/50"}`,
                                onClick: {
                                    "MuscleOverview[sortedMuscles.map() > <div>.onClick]": ()=>toggleExpand(muscle_0.name)
                                }["MuscleOverview[sortedMuscles.map() > <div>.onClick]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-lg",
                                                        children: muscle_0.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 147
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "secondary",
                                                                className: "text-xs",
                                                                children: sectionTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 248
                                                            }, this),
                                                            subsectionTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: "text-xs",
                                                                children: subsectionTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 337
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 205
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 123
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "shrink-0",
                                                children: expandedMuscle === muscle_0.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/muscle-overview.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 513
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/muscle-overview.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 549
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 420
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                        lineNumber: 198,
                                        columnNumber: 73
                                    }, this),
                                    expandedMuscle === muscle_0.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3 pt-4 border-t",
                                        children: [
                                            muscle_0.origin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-primary",
                                                        children: "Origo:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 708
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: muscle_0.origin
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 771
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 703
                                            }, this),
                                            muscle_0.insertion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-primary",
                                                        children: "Insertie:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 870
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: muscle_0.insertion
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 936
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 865
                                            }, this),
                                            muscle_0.innervation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-primary",
                                                        children: "Innervatie:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 1040
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: muscle_0.innervation
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 1108
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 1035
                                            }, this),
                                            muscle_0.function && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-primary",
                                                        children: "Functie:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 1211
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: muscle_0.function
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 1276
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/muscle-overview.tsx",
                                                lineNumber: 198,
                                                columnNumber: 1206
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/muscle-overview.tsx",
                                        lineNumber: 198,
                                        columnNumber: 637
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/muscle-overview.tsx",
                                lineNumber: 196,
                                columnNumber: 59
                            }, this)
                        }, `${muscle_0.name}-${index}`, false, {
                            fileName: "[project]/src/components/muscle-overview.tsx",
                            lineNumber: 196,
                            columnNumber: 20
                        }, this);
                    }
                })["MuscleOverview[sortedMuscles.map()]"];
                $[37] = expandedMuscle;
                $[38] = toggleExpand;
                $[39] = t20;
            } else {
                t20 = $[39];
            }
            t2 = sortedMuscles.map(t20);
        }
        $[1] = expandedMuscle;
        $[2] = muscles;
        $[3] = searchTerm;
        $[4] = sortBy;
        $[5] = T0;
        $[6] = T1;
        $[7] = T2;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        T0 = $[5];
        T1 = $[6];
        T2 = $[7];
        t1 = $[8];
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
    }
    if (t7 !== Symbol.for("react.early_return_sentinel")) {
        return t7;
    }
    let t8;
    if ($[40] !== t1 || $[41] !== t2) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/muscle-overview.tsx",
            lineNumber: 240,
            columnNumber: 10
        }, this);
        $[40] = t1;
        $[41] = t2;
        $[42] = t8;
    } else {
        t8 = $[42];
    }
    let t9;
    if ($[43] !== T0 || $[44] !== t3 || $[45] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t3,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/muscle-overview.tsx",
            lineNumber: 249,
            columnNumber: 10
        }, this);
        $[43] = T0;
        $[44] = t3;
        $[45] = t8;
        $[46] = t9;
    } else {
        t9 = $[46];
    }
    let t10;
    if ($[47] !== T1 || $[48] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/muscle-overview.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[47] = T1;
        $[48] = t9;
        $[49] = t10;
    } else {
        t10 = $[49];
    }
    let t11;
    if ($[50] !== T2 || $[51] !== t10 || $[52] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: [
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/muscle-overview.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[50] = T2;
        $[51] = t10;
        $[52] = t4;
        $[53] = t11;
    } else {
        t11 = $[53];
    }
    let t12;
    if ($[54] !== t11 || $[55] !== t5 || $[56] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/muscle-overview.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[54] = t11;
        $[55] = t5;
        $[56] = t6;
        $[57] = t12;
    } else {
        t12 = $[57];
    }
    return t12;
}
_s(MuscleOverview, "flFo8NZXKCox8sHRdwt+fFuPndI=");
_c = MuscleOverview;
var _c;
__turbopack_context__.k.register(_c, "MuscleOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/statistics-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatisticsDashboard",
    ()=>StatisticsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-study-progress.ts [app-client] (ecmascript)");
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
function formatDuration(seconds) {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    return `${hours}u ${minutes}m`;
}
function getMasteryColor(mastery) {
    if (mastery >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (mastery >= 60) return "text-blue-600 bg-blue-50 border-blue-200";
    if (mastery >= 40) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    if (mastery >= 20) return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-red-600 bg-red-50 border-red-200";
}
function getMasteryLabel(mastery) {
    if (mastery >= 80) return "Beheerst";
    if (mastery >= 60) return "Goed";
    if (mastery >= 40) return "Gemiddeld";
    if (mastery >= 20) return "Beginnend";
    return "Nieuw";
}
function StatisticsDashboard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(107);
    if ($[0] !== "42f4c279b77562a596c68097a12b853a2f76380d81f8ad083e97d4578ffefffd") {
        for(let $i = 0; $i < 107; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42f4c279b77562a596c68097a12b853a2f76380d81f8ad083e97d4578ffefffd";
    }
    const { allMuscles } = t0;
    const { progress, isLoaded, getStatistics, getMusclesMastery, getMusclesDueForReview, resetProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"])();
    if (!isLoaded) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-4xl mx-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-muted-foreground",
                    children: "Laden..."
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 61,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 61,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[2] !== allMuscles || $[3] !== getMusclesDueForReview || $[4] !== getMusclesMastery || $[5] !== getStatistics || $[6] !== progress) {
        const stats = getStatistics();
        const muscleNames = allMuscles.map(_StatisticsDashboardAllMusclesMap);
        const dueForReview = getMusclesDueForReview(muscleNames);
        const masteryDistribution = {
            mastered: 0,
            good: 0,
            average: 0,
            beginning: 0,
            new: 0
        };
        muscleNames.forEach({
            "StatisticsDashboard[muscleNames.forEach()]": (name)=>{
                const mastery = getMusclesMastery(name);
                if (mastery >= 80) {
                    masteryDistribution.mastered = masteryDistribution.mastered + 1;
                } else {
                    if (mastery >= 60) {
                        masteryDistribution.good = masteryDistribution.good + 1;
                    } else {
                        if (mastery >= 40) {
                            masteryDistribution.average = masteryDistribution.average + 1;
                        } else {
                            if (mastery >= 20) {
                                masteryDistribution.beginning = masteryDistribution.beginning + 1;
                            } else {
                                masteryDistribution.new = masteryDistribution.new + 1;
                            }
                        }
                    }
                }
            }
        }["StatisticsDashboard[muscleNames.forEach()]"]);
        let t7;
        if ($[13] !== getMusclesMastery || $[14] !== progress) {
            t7 = ({
                "StatisticsDashboard[muscleNames.map()]": (name_0)=>({
                        name: name_0,
                        mastery: getMusclesMastery(name_0),
                        progress: progress.muscles[name_0]
                    })
            })["StatisticsDashboard[muscleNames.map()]"];
            $[13] = getMusclesMastery;
            $[14] = progress;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        const musclesByPriority = muscleNames.map(t7).sort(_StatisticsDashboardAnonymous).slice(0, 10);
        t1 = "w-full max-w-4xl mx-auto space-y-6";
        let t8;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 126,
                columnNumber: 12
            }, this);
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        const t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-orange-500 mb-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold",
                    children: stats.streakDays
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 131,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 131,
            columnNumber: 16
        }, this);
        let t10;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground text-center",
                children: "Dagen streak"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this);
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        let t11;
        if ($[18] !== t9) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 flex flex-col items-center",
                    children: [
                        t9,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 141,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this);
            $[18] = t9;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        let t12;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this);
            $[20] = t12;
        } else {
            t12 = $[20];
        }
        const t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-green-500 mb-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold",
                    children: [
                        stats.accuracy,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 154,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 154,
            columnNumber: 17
        }, this);
        let t14;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground text-center",
                children: "Nauwkeurigheid"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this);
            $[21] = t14;
        } else {
            t14 = $[21];
        }
        let t15;
        if ($[22] !== t13) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 flex flex-col items-center",
                    children: [
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 164,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 164,
                columnNumber: 13
            }, this);
            $[22] = t13;
            $[23] = t15;
        } else {
            t15 = $[23];
        }
        let t16;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this);
            $[24] = t16;
        } else {
            t16 = $[24];
        }
        const t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-blue-500 mb-2",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold",
                    children: stats.masteredCount
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 177,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 177,
            columnNumber: 17
        }, this);
        let t18;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground text-center",
                children: "Beheerst"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, this);
            $[25] = t18;
        } else {
            t18 = $[25];
        }
        let t19;
        if ($[26] !== t17) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 flex flex-col items-center",
                    children: [
                        t17,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 187,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, this);
            $[26] = t17;
            $[27] = t19;
        } else {
            t19 = $[27];
        }
        let t20;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            $[28] = t20;
        } else {
            t20 = $[28];
        }
        const t21 = formatDuration(stats.totalStudyTime);
        let t22;
        if ($[29] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-purple-500 mb-2",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold",
                        children: t21
                    }, void 0, false, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 203,
                        columnNumber: 80
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this);
            $[29] = t21;
            $[30] = t22;
        } else {
            t22 = $[30];
        }
        let t23;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground text-center",
                children: "Studietijd"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, this);
            $[31] = t23;
        } else {
            t23 = $[31];
        }
        let t24;
        if ($[32] !== t22) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 flex flex-col items-center",
                    children: [
                        t22,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 218,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 218,
                columnNumber: 13
            }, this);
            $[32] = t22;
            $[33] = t24;
        } else {
            t24 = $[33];
        }
        if ($[34] !== t11 || $[35] !== t15 || $[36] !== t19 || $[37] !== t24) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: [
                    t11,
                    t15,
                    t19,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 225,
                columnNumber: 12
            }, this);
            $[34] = t11;
            $[35] = t15;
            $[36] = t19;
            $[37] = t24;
            $[38] = t2;
        } else {
            t2 = $[38];
        }
        let t25;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "flex items-center gap-2 text-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/statistics-dashboard.tsx",
                            lineNumber: 236,
                            columnNumber: 80
                        }, this),
                        "Voortgang Overzicht"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 236,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 236,
                columnNumber: 13
            }, this);
            $[39] = t25;
        } else {
            t25 = $[39];
        }
        let t26;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Spieren bestudeerd"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[40] = t26;
        } else {
            t26 = $[40];
        }
        const t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-semibold",
                    children: [
                        stats.musclesStudied,
                        " / ",
                        muscleNames.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 248,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 248,
            columnNumber: 17
        }, this);
        let t28;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Totaal beantwoord"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this);
            $[41] = t28;
        } else {
            t28 = $[41];
        }
        let t29;
        if ($[42] !== stats) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-semibold",
                        children: stats.totalAnswered
                    }, void 0, false, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 258,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, this);
            $[42] = stats;
            $[43] = t29;
        } else {
            t29 = $[43];
        }
        let t30;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Sessies"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this);
            $[44] = t30;
        } else {
            t30 = $[44];
        }
        let t31;
        if ($[45] !== stats) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-semibold",
                        children: stats.sessionsCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 273,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this);
            $[45] = stats;
            $[46] = t31;
        } else {
            t31 = $[46];
        }
        let t32;
        if ($[47] !== t27 || $[48] !== t29 || $[49] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 text-sm",
                children: [
                    t27,
                    t29,
                    t31
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this);
            $[47] = t27;
            $[48] = t29;
            $[49] = t31;
            $[50] = t32;
        } else {
            t32 = $[50];
        }
        let t33;
        if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Algehele voortgang"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 291,
                columnNumber: 13
            }, this);
            $[51] = t33;
        } else {
            t33 = $[51];
        }
        const t34 = Math.round(stats.musclesStudied / muscleNames.length * 100);
        let t35;
        if ($[52] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm",
                children: [
                    t33,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            t34,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 299,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this);
            $[52] = t34;
            $[53] = t35;
        } else {
            t35 = $[53];
        }
        const t36 = stats.musclesStudied / muscleNames.length * 100;
        let t37;
        if ($[54] !== t36) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: t36,
                className: "h-3"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, this);
            $[54] = t36;
            $[55] = t37;
        } else {
            t37 = $[55];
        }
        let t38;
        if ($[56] !== t35 || $[57] !== t37) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t35,
                    t37
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 316,
                columnNumber: 13
            }, this);
            $[56] = t35;
            $[57] = t37;
            $[58] = t38;
        } else {
            t38 = $[58];
        }
        let t39;
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-4 w-4 text-green-500"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 325,
                columnNumber: 13
            }, this);
            $[59] = t39;
        } else {
            t39 = $[59];
        }
        let t40;
        if ($[60] !== stats) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    t39,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            stats.totalCorrect,
                            " goed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 332,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 332,
                columnNumber: 13
            }, this);
            $[60] = stats;
            $[61] = t40;
        } else {
            t40 = $[61];
        }
        let t41;
        if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                className: "h-4 w-4 text-red-500"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 340,
                columnNumber: 13
            }, this);
            $[62] = t41;
        } else {
            t41 = $[62];
        }
        let t42;
        if ($[63] !== stats) {
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    t41,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            stats.totalIncorrect,
                            " fout"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 347,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 347,
                columnNumber: 13
            }, this);
            $[63] = stats;
            $[64] = t42;
        } else {
            t42 = $[64];
        }
        let t43;
        if ($[65] !== t40 || $[66] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 flex-wrap",
                children: [
                    t40,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 355,
                columnNumber: 13
            }, this);
            $[65] = t40;
            $[66] = t42;
            $[67] = t43;
        } else {
            t43 = $[67];
        }
        if ($[68] !== t32 || $[69] !== t38 || $[70] !== t43) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            t32,
                            t38,
                            t43
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 363,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 363,
                columnNumber: 12
            }, this);
            $[68] = t32;
            $[69] = t38;
            $[70] = t43;
            $[71] = t3;
        } else {
            t3 = $[71];
        }
        let t44;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "flex items-center gap-2 text-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/statistics-dashboard.tsx",
                            lineNumber: 373,
                            columnNumber: 80
                        }, this),
                        "Beheersing Verdeling"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 373,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 373,
                columnNumber: 13
            }, this);
            $[72] = t44;
        } else {
            t44 = $[72];
        }
        let t45;
        if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "bg-green-100 text-green-700 border-green-200 w-24 justify-center",
                children: "Beheerst"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, this);
            $[73] = t45;
        } else {
            t45 = $[73];
        }
        const t46 = masteryDistribution.mastered / muscleNames.length * 100;
        let t47;
        if ($[74] !== t46) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: t46,
                className: "h-3 flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 388,
                columnNumber: 13
            }, this);
            $[74] = t46;
            $[75] = t47;
        } else {
            t47 = $[75];
        }
        const t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t45,
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm w-8 text-right",
                    children: masteryDistribution.mastered
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 394,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 394,
            columnNumber: 17
        }, this);
        let t49;
        if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "bg-blue-100 text-blue-700 border-blue-200 w-24 justify-center",
                children: "Goed"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 397,
                columnNumber: 13
            }, this);
            $[76] = t49;
        } else {
            t49 = $[76];
        }
        const t50 = masteryDistribution.good / muscleNames.length * 100;
        let t51;
        if ($[77] !== t50) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: t50,
                className: "h-3 flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 405,
                columnNumber: 13
            }, this);
            $[77] = t50;
            $[78] = t51;
        } else {
            t51 = $[78];
        }
        const t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t49,
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm w-8 text-right",
                    children: masteryDistribution.good
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 411,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 411,
            columnNumber: 17
        }, this);
        let t53;
        if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
            t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "bg-yellow-100 text-yellow-700 border-yellow-200 w-24 justify-center",
                children: "Gemiddeld"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 414,
                columnNumber: 13
            }, this);
            $[79] = t53;
        } else {
            t53 = $[79];
        }
        const t54 = masteryDistribution.average / muscleNames.length * 100;
        let t55;
        if ($[80] !== t54) {
            t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: t54,
                className: "h-3 flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 422,
                columnNumber: 13
            }, this);
            $[80] = t54;
            $[81] = t55;
        } else {
            t55 = $[81];
        }
        const t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t53,
                t55,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm w-8 text-right",
                    children: masteryDistribution.average
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 428,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 428,
            columnNumber: 17
        }, this);
        let t57;
        if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "bg-orange-100 text-orange-700 border-orange-200 w-24 justify-center",
                children: "Beginnend"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 431,
                columnNumber: 13
            }, this);
            $[82] = t57;
        } else {
            t57 = $[82];
        }
        const t58 = masteryDistribution.beginning / muscleNames.length * 100;
        let t59;
        if ($[83] !== t58) {
            t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: t58,
                className: "h-3 flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 439,
                columnNumber: 13
            }, this);
            $[83] = t58;
            $[84] = t59;
        } else {
            t59 = $[84];
        }
        const t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t57,
                t59,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm w-8 text-right",
                    children: masteryDistribution.beginning
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 445,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 445,
            columnNumber: 17
        }, this);
        let t61;
        if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
            t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                className: "bg-gray-100 text-gray-700 border-gray-200 w-24 justify-center",
                children: "Nieuw"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 448,
                columnNumber: 13
            }, this);
            $[85] = t61;
        } else {
            t61 = $[85];
        }
        const t62 = masteryDistribution.new / muscleNames.length * 100;
        let t63;
        if ($[86] !== t62) {
            t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                value: t62,
                className: "h-3 flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 456,
                columnNumber: 13
            }, this);
            $[86] = t62;
            $[87] = t63;
        } else {
            t63 = $[87];
        }
        const t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t61,
                t63,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm w-8 text-right",
                    children: masteryDistribution.new
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 462,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 462,
            columnNumber: 17
        }, this);
        if ($[88] !== t48 || $[89] !== t52 || $[90] !== t56 || $[91] !== t60 || $[92] !== t64) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    t44,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                t48,
                                t52,
                                t56,
                                t60,
                                t64
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/statistics-dashboard.tsx",
                            lineNumber: 464,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 464,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 464,
                columnNumber: 12
            }, this);
            $[88] = t48;
            $[89] = t52;
            $[90] = t56;
            $[91] = t60;
            $[92] = t64;
            $[93] = t4;
        } else {
            t4 = $[93];
        }
        t5 = musclesByPriority.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "h-5 w-5 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statistics-dashboard.tsx",
                                lineNumber: 474,
                                columnNumber: 115
                            }, this),
                            "Focus Nodig"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 474,
                        columnNumber: 60
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 474,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: musclesByPriority.map(_StatisticsDashboardMusclesByPriorityMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 474,
                        columnNumber: 215
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 474,
                    columnNumber: 202
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 474,
            columnNumber: 42
        }, this);
        t6 = dueForReview.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-5 w-5 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/statistics-dashboard.tsx",
                                lineNumber: 475,
                                columnNumber: 110
                            }, this),
                            "Te Herhalen (",
                            dueForReview.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 475,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 475,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            dueForReview.slice(0, 15).map(_StatisticsDashboardAnonymous2),
                            dueForReview.length > 15 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "text-xs",
                                children: [
                                    "+",
                                    dueForReview.length - 15,
                                    " meer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/statistics-dashboard.tsx",
                                lineNumber: 475,
                                columnNumber: 356
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 475,
                        columnNumber: 226
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/statistics-dashboard.tsx",
                    lineNumber: 475,
                    columnNumber: 213
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 475,
            columnNumber: 37
        }, this);
        $[2] = allMuscles;
        $[3] = getMusclesDueForReview;
        $[4] = getMusclesMastery;
        $[5] = getStatistics;
        $[6] = progress;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        t6 = $[12];
    }
    let t7;
    if ($[94] !== resetProgress) {
        t7 = ({
            "StatisticsDashboard[<Button>.onClick]": ()=>{
                if (confirm("Weet je zeker dat je alle voortgang wilt resetten?")) {
                    resetProgress();
                }
            }
        })["StatisticsDashboard[<Button>.onClick]"];
        $[94] = resetProgress;
        $[95] = t7;
    } else {
        t7 = $[95];
    }
    let t8;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-4 w-4 mr-2"
        }, void 0, false, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 511,
            columnNumber: 10
        }, this);
        $[96] = t8;
    } else {
        t8 = $[96];
    }
    let t9;
    if ($[97] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: t7,
                className: "text-red-600 hover:text-red-700",
                children: [
                    t8,
                    "Reset Voortgang"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 518,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 518,
            columnNumber: 10
        }, this);
        $[97] = t7;
        $[98] = t9;
    } else {
        t9 = $[98];
    }
    let t10;
    if ($[99] !== t1 || $[100] !== t2 || $[101] !== t3 || $[102] !== t4 || $[103] !== t5 || $[104] !== t6 || $[105] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/statistics-dashboard.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[99] = t1;
        $[100] = t2;
        $[101] = t3;
        $[102] = t4;
        $[103] = t5;
        $[104] = t6;
        $[105] = t9;
        $[106] = t10;
    } else {
        t10 = $[106];
    }
    return t10;
}
_s(StatisticsDashboard, "lQP5MWAlCouWt59CUUtfmV62xlI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"]
    ];
});
_c = StatisticsDashboard;
function _StatisticsDashboardAnonymous2(name_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "text-xs",
        children: name_2
    }, name_2, false, {
        fileName: "[project]/src/components/statistics-dashboard.tsx",
        lineNumber: 541,
        columnNumber: 10
    }, this);
}
function _StatisticsDashboardMusclesByPriorityMap(t0) {
    const { name: name_1, mastery: mastery_0, progress: muscleProgress } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-2 rounded-md border bg-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-sm truncate",
                        children: name_1
                    }, void 0, false, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 549,
                        columnNumber: 136
                    }, this),
                    muscleProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            muscleProgress.correctCount,
                            " goed, ",
                            muscleProgress.incorrectCount,
                            " fout"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/statistics-dashboard.tsx",
                        lineNumber: 549,
                        columnNumber: 211
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 549,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: `ml-2 ${getMasteryColor(mastery_0)}`,
                children: getMasteryLabel(mastery_0)
            }, void 0, false, {
                fileName: "[project]/src/components/statistics-dashboard.tsx",
                lineNumber: 549,
                columnNumber: 339
            }, this)
        ]
    }, name_1, true, {
        fileName: "[project]/src/components/statistics-dashboard.tsx",
        lineNumber: 549,
        columnNumber: 10
    }, this);
}
function _StatisticsDashboardAnonymous(a, b) {
    return a.mastery - b.mastery;
}
function _StatisticsDashboardAllMusclesMap(m) {
    return m.muscle.name;
}
var _c;
__turbopack_context__.k.register(_c, "StatisticsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/anatomy-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomyData",
    ()=>anatomyData,
    "getAllMuscles",
    ()=>getAllMuscles,
    "getAllStructures",
    ()=>getAllStructures,
    "getSections",
    ()=>getSections,
    "getTotalCount",
    ()=>getTotalCount
]);
const anatomyData = {
    "title": "Samenvatting Anatomie",
    "sections": [
        {
            "id": "deep_back_muscles",
            "title": "DIEPE SCHUINE RUGSPIEREN",
            "subsections": [
                {
                    "id": "spinocostal_group",
                    "title": "Spinocostale groep",
                    "muscles": [
                        {
                            "name": "m. serratus posterior superior",
                            "origin": "proc. spinosus C6-T2",
                            "insertion": "angulus costae rib 2-5",
                            "innervation": "Nervi intercostales",
                            "function": "Elevatie costae (inspiratie) => vergroten van de thoraxholte"
                        },
                        {
                            "name": "m. serratus posterior inferior",
                            "origin": "proc. spinosus T11-L2",
                            "insertion": "angulus costae rib 9-12",
                            "innervation": "Nervi intercostales",
                            "function": "Depressie costae (expiratie) => verkleinen van de thoraxholte"
                        }
                    ]
                },
                {
                    "id": "spinotransverse_group",
                    "title": "Spinotransversale groep",
                    "muscles": [
                        {
                            "name": "m. splenius capitis",
                            "origin": "proc. spinosus C3-C7",
                            "insertion": "proc. mastoideus os temporalis en linea nuchae",
                            "innervation": "Rr. dorsalis nn. spinales cervicales",
                            "function": "Unilaterale contractie: Lateroflexie hoofd, Homolaterale rotatie hoofd en nek. Bilaterale contractie: retroflexie hoofd"
                        },
                        {
                            "name": "m. splenius cervicis",
                            "origin": "proc. spinosus T1-T6",
                            "insertion": "tuberculum posterior (proc. transversus)",
                            "innervation": "Rr. dorsalis nn. spinales cervicales",
                            "function": "Unilaterale contractie: lateroflexie hoofd. Bilaterale contractie: retroflexie hoofd"
                        }
                    ]
                },
                {
                    "id": "transversospinal_group",
                    "title": "Transversospinale groep",
                    "muscles": [
                        {
                            "name": "m. semispinalis thoracis",
                            "origin": "proc. transversus T7-T12",
                            "insertion": "proc. spinosus T6-C6",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: lateroflexie WZ. Bilaterale contractie: retroflexie WZ"
                        },
                        {
                            "name": "m. semispinalis cervicis",
                            "origin": "proc. transversus T1-T6",
                            "insertion": "proc. spinosus C2-C5",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: Lateroflexie hoofd en nek, Contralaterale rotatie hoofd en nek. Bilaterale contractie: Retroflexie, Extensie hoofd, nek en romp"
                        },
                        {
                            "name": "m. semispinalis capitis",
                            "origin": "Proc. transversus T1-T7, Proc. articularis C4-C7",
                            "insertion": "linea nuchae",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: heterolaterale torsie hoofd. Bilaterale contractie: retroflexie hoofd"
                        },
                        {
                            "name": "m. multifidus",
                            "origin": "Dorsale zijde sacrum, Proc. mamillaris lumbale wervels, Proc. transversus thoracale wervels, Proc. articularis C4-C7",
                            "insertion": "proc. spinosus 2-4 hogere wervels",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie en torsie wervelzuil. Bilaterale contractie: retroflexie wervelzuil"
                        },
                        {
                            "name": "mm. rotatores",
                            "origin": "proc. transversus cervicale en thoracale wervels",
                            "insertion": "basis vd proc. spinosus vd bovenliggende wervel",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Wervels draaien rond overlangse as"
                        }
                    ]
                }
            ]
        },
        {
            "id": "straight_back_muscles",
            "title": "DIEPE RECHTE RUGSPIEREN",
            "subsections": [
                {
                    "id": "longer_back_muscles",
                    "title": "Lange rechte rugspieren",
                    "muscles": [
                        {
                            "name": "mm. spinales thoracis",
                            "origin": "proc. Spinosus T11-L2",
                            "insertion": "proc. Spinosus T1-T8",
                            "innervation": "rr. dorsalis nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie/extensie WZ"
                        },
                        {
                            "name": "mm. spinales capitis",
                            "origin": "proc. spinosus C6-T2",
                            "insertion": "m. semispinales capitis",
                            "innervation": "rr. dorsalis nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie/extensie WZ"
                        },
                        {
                            "name": "mm. spinales cervicis",
                            "origin": "proc. Spinosus C6-T2",
                            "insertion": "proc. Spinosus C2-C4",
                            "innervation": "rr. dorsalis nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie/extensie WZ"
                        }
                    ]
                },
                {
                    "id": "short_back_muscles",
                    "title": "Korte rechte rugspieren",
                    "muscles": [
                        {
                            "name": "mm. intertransversarii lumborum medialis",
                            "origin": "proc. mamillaris L1-L5",
                            "insertion": "proc. accessorius van de bovenliggende wervel",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
                        },
                        {
                            "name": "mm. intertransversarii lumborum lateralis",
                            "origin": "proc. costarius L1-L5",
                            "insertion": "proc. costarius van de bovenliggende wervel",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
                        },
                        {
                            "name": "mm. intertransversarii thoracis",
                            "origin": "proc. transversus",
                            "insertion": "proc. transversus van de bovenliggende wervel",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
                        },
                        {
                            "name": "mm. intertransversarii cervicis anteriores",
                            "origin": "tuberculum anterius van de cervicale wervels",
                            "insertion": "tuberculum anterius van de bovenliggende wervel",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
                        },
                        {
                            "name": "mm. intertransversarii cervicis posteriores",
                            "origin": "tuberculum posterius van de cervicale wervels",
                            "insertion": "tuberculum posterius van de bovenliggende wervel",
                            "innervation": "rr. dorsales nn. spinales",
                            "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
                        },
                        {
                            "name": "mm. interspinales",
                            "origin": "proc. spinosus",
                            "insertion": "proc. spinosus van de bovenliggende wervel",
                            "innervation": "rr. dorsalis nn. spinales",
                            "function": "Retroflexie/extensie wervelzuil"
                        },
                        {
                            "name": "mm. levatores costarum",
                            "origin": "proc. transversus C7-T11",
                            "insertion": "breves = buitenzijde onderliggende rib, longi = buitenzijde rib 2 ribben lager",
                            "innervation": "rr. intercostalis 1-11",
                            "function": "Lateroflexie wervelzuil. Inspiratie bevorderen (ribben opheffen) = hulpademhalingsspier"
                        }
                    ]
                }
            ]
        },
        {
            "id": "auxiliary_apparatus",
            "title": "HULPAPPARATEN",
            "subsections": [
                {
                    "id": "fascia_thoracolumbalis",
                    "title": "Fascia thoracolumbalis",
                    "structures": [
                        {
                            "name": "Ligamentum iliolumbale",
                            "origin": "proc. spinosus T1-L5, sacrum, dorsaal deel van crista iliaca",
                            "course": "op de erector spinae, onder m. serratus posterior superior en mm. rhomboidei, gaat over in de fascia nuchae (onder m. trapezius)",
                            "insertion": "linea nuchae",
                            "function": "Origo van de m. latissimus dorsi en m. gluteus maximus",
                            "note": "Ligamentum iliolumbale = oppervlakkig blad van fascia thoracolumbalis"
                        },
                        {
                            "name": "Ligamentum lumbocostale",
                            "origin": "proc. costarius L1-L5, onderste rib, crista iliaca",
                            "course": "tussen m. quadratus lumborum en m. erector spinae",
                            "function": "Origo van m. obliquus abdominis internus en m. transversus abdominis",
                            "note": "Ligamentum lumbocostale = diep blad van fascia thoracolumbalis"
                        }
                    ]
                }
            ]
        },
        {
            "id": "musculi_capitis",
            "title": "MUSCULI CAPITIS",
            "muscles": [
                {
                    "name": "m. rectus capitis posterior major",
                    "origin": "proc. spinosus axis",
                    "insertion": "middelste 1/3 van de linea nuchae inf.",
                    "innervation": "n. suboccipitalis",
                    "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
                },
                {
                    "name": "m. rectus capitis posterior minor",
                    "origin": "tuberculum posterior atlantis",
                    "insertion": "binnenste 1/3 van de linea nuchae inf.",
                    "innervation": "n. suboccipitalis",
                    "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
                },
                {
                    "name": "m. obliquus capitis superior",
                    "origin": "massa lateralis atlantis",
                    "insertion": "linea nuchae inferior boven m. rectus capitis posterior major",
                    "innervation": "n. suboccipitalis",
                    "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
                },
                {
                    "name": "m. obliquus capitis inferior",
                    "origin": "proc. spinosus axis",
                    "insertion": "massa lateralis atlantis",
                    "innervation": "n. suboccipitalis",
                    "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
                },
                {
                    "name": "m. rectus capitis lateralis",
                    "origin": "massa lateralis atlantis",
                    "insertion": "proc. jugularis ossis occipitalis",
                    "innervation": "n. suboccipitalis",
                    "function": "Unilaterale contractie: homolaterale FLEXIE hoofd. Bilaterale contractie: HOOFD RECHT HOUDEN"
                }
            ]
        },
        {
            "id": "pelvic_floor",
            "title": "BEKKENBODEMSPIEREN",
            "subsections": [
                {
                    "id": "superficial_layer",
                    "title": "Het oppervlakkige plan",
                    "muscles": [
                        {
                            "name": "m. sphincter ani externus",
                            "origin": "Omgeeft het hele anaalkanaal",
                            "insertion": "",
                            "innervation": "nn. rectales inferiores van n. pudendus",
                            "function": "Willekeurige contractie aars. Vormt aarsspleet. Ophouden van stoelgang"
                        },
                        {
                            "name": "m. bulbospongiosus",
                            "origin": "Man: centrum tendineum perinei. Vrouw: centrum tendineum perinei",
                            "insertion": "Man: corpora cavernosa (L en R) en corpus spongiosum. Vrouw: dorsale clitoriswand",
                            "innervation": "nn. perinealis van n. pudendus",
                            "function": "Man: Erectie, Trekt ritmisch samen bij ejalculatie, Evacueert tijdens contractie sperma/urine uit urethra. Vrouw: Afsluiten vaginale opening, Trekt ritmisch samen tijdens orgasme"
                        },
                        {
                            "name": "m. ischiocavernosus",
                            "origin": "Man: binnenzijde van tuber ischiadicum en ramus ossis ischii. Vrouw: binnenzijde van tuber ischiadicum en ramus ossis ischii",
                            "insertion": "Man: crura. Vrouw: dorsale zijde van clitoris",
                            "innervation": "nn. perinealis van n. pudendus",
                            "function": "Man: Erectie in stand houden (belemmeren van bloedafvoer uit corpora cavernosa). Vrouw: Clitoriszwelling in stand houden"
                        },
                        {
                            "name": "m. transversus perinei superficialis",
                            "origin": "tuber ischiadicum",
                            "insertion": "centrum tendineum perinei",
                            "innervation": "nn. perinealis van n. pudendus",
                            "function": "Stabiliseren van het perineum"
                        }
                    ]
                },
                {
                    "id": "middle_layer",
                    "title": "Het midden plan",
                    "muscles": [
                        {
                            "name": "m. transversus perinei profundus",
                            "origin": "r. ossis ischii en r. inferior ossis pubis",
                            "insertion": "hiatus urogenitalis",
                            "innervation": "n. dorsalis penis/clitoridis van n. pudendus",
                            "function": "Steunfunctie (fixeren van perineum)"
                        },
                        {
                            "name": "m. sphincter urethrae externus",
                            "origin": "Ringvormig rond urethra, versmelt partieel met m. transversus perinei profundus",
                            "insertion": "",
                            "innervation": "n. dorsalis penis/clitoridis van n. pudendus",
                            "function": "Fixeren van urethra in perineum. Afsluiten van urethra"
                        },
                        {
                            "name": "m. sphincter ani (diepe deel)",
                            "origin": "Diepe deel van de spier",
                            "insertion": "",
                            "innervation": "nn. rectales inferiores van n. pudendus",
                            "function": "Afsluiten van het anaalkanaal"
                        }
                    ]
                },
                {
                    "id": "deep_layer",
                    "title": "Het diepe plan",
                    "note": "Vormen diaphragma pelvis omgeven door fascia pelvis visceralis en parietalis",
                    "muscles": [
                        {
                            "name": "m. levator ani",
                            "origin": "Os pubis tot spina ischiadica (arcus tendineus)",
                            "insertion": "Centrum tendineum perinei, wanden van organen, coccyx",
                            "innervation": "r. m. levator ani van n. pudendus",
                            "function": "Ondersteuning bekkenorganen, afsluiten bekkenbodem"
                        },
                        {
                            "name": "m. puborectalis",
                            "origin": "os pubis (1 cm van symphysis pubis)",
                            "insertion": "Voorste vezels: Man: m. levator prostatae, Vrouw: m. pubovaginalis. Middelste vezels: centrum tendineum perinei. Dorsale vezels: dorsale zijde rectum",
                            "innervation": "r. m. levator ani van n. pudendus",
                            "function": "Anorectale hoek verwekken => faecaal continent"
                        },
                        {
                            "name": "m. pubococcygeus",
                            "origin": "os pubis",
                            "insertion": "lig. anococcygeum en coccyx",
                            "innervation": "r. m. levator ani van n. pudendus",
                            "function": "Coccyx oplichten. Verwekt crena ani/aarsgroeve"
                        },
                        {
                            "name": "m. iliococcygeus",
                            "origin": "spina ischiadica",
                            "insertion": "lig. anococcygeum en coccyx",
                            "innervation": "Plexus sacralis S3-S4",
                            "function": "Bekkenbodem ondersteunen"
                        },
                        {
                            "name": "m. coccygeus",
                            "origin": "spina ischiadica",
                            "insertion": "laterale rand coccyx",
                            "innervation": "n. coccygeus plexus sacralis",
                            "function": "Ondersteunen van de coccyx"
                        }
                    ]
                }
            ]
        }
    ]
};
function getAllMuscles() {
    const muscles = [];
    anatomyData.sections.forEach((section)=>{
        // Muscles directly on section
        if (section.muscles) {
            section.muscles.forEach((muscle)=>{
                muscles.push({
                    muscle,
                    sectionTitle: section.title
                });
            });
        }
        // Muscles in subsections
        if (section.subsections) {
            section.subsections.forEach((subsection)=>{
                if (subsection.muscles) {
                    subsection.muscles.forEach((muscle)=>{
                        muscles.push({
                            muscle,
                            sectionTitle: section.title,
                            subsectionTitle: subsection.title
                        });
                    });
                }
            });
        }
    });
    return muscles;
}
function getAllStructures() {
    const structures = [];
    anatomyData.sections.forEach((section)=>{
        if (section.subsections) {
            section.subsections.forEach((subsection)=>{
                if (subsection.structures) {
                    subsection.structures.forEach((structure)=>{
                        structures.push({
                            structure,
                            sectionTitle: section.title,
                            subsectionTitle: subsection.title
                        });
                    });
                }
            });
        }
    });
    return structures;
}
function getSections() {
    return anatomyData.sections.map((section)=>({
            id: section.id,
            title: section.title,
            subsections: section.subsections?.map((sub)=>({
                    id: sub.id,
                    title: sub.title
                })) || []
        }));
}
function getTotalCount() {
    return {
        muscles: getAllMuscles().length,
        structures: getAllStructures().length
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/study-app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudyApp",
    ()=>StudyApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$flashcard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/flashcard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiple$2d$choice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/multiple-choice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$muscle$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/muscle-overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$statistics$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/statistics-dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$anatomy$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/anatomy-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-study-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
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
;
;
function StudyApp() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(124);
    if ($[0] !== "8423d4573e2804f4ffff2dedb45de4626d6f463298dd3d433a68ad666d3288ba") {
        for(let $i = 0; $i < 124; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8423d4573e2804f4ffff2dedb45de4626d6f463298dd3d433a68ad666d3288ba";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Set();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedSections, setSelectedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set();
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selectedSubsections, setSelectedSubsections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = new Set([
            "origin",
            "insertion",
            "innervation",
            "function"
        ]);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [flashcardShowFields, setFlashcardShowFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = new Set([
            "origin",
            "insertion",
            "innervation",
            "function",
            "name",
            "origin_reverse",
            "insertion_reverse",
            "innervation_reverse",
            "function_reverse",
            "true_false",
            "match_property",
            "origo_or_insertio",
            "which_muscle_origo_insertio"
        ]);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [mcQuestionTypes, setMcQuestionTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { getStatistics, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"])();
    let t4;
    if ($[5] !== getStatistics || $[6] !== isLoaded) {
        t4 = isLoaded ? getStatistics() : null;
        $[5] = getStatistics;
        $[6] = isLoaded;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const stats = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$anatomy$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSections"])();
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const sections = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$anatomy$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMuscles"])();
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const allMuscles = t6;
    let t7;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "StudyApp[useEffect()]": ()=>{
                const savedTheme = localStorage.getItem("anatomy-study-theme");
                if (savedTheme === "dark") {
                    setIsDark(true);
                    document.documentElement.classList.add("dark");
                }
            }
        })["StudyApp[useEffect()]"];
        t8 = [];
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[12] !== isDark) {
        t9 = ({
            "StudyApp[toggleTheme]": ()=>{
                setIsDark(!isDark);
                if (isDark) {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("anatomy-study-theme", "light");
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("anatomy-study-theme", "dark");
                }
            }
        })["StudyApp[toggleTheme]"];
        $[12] = isDark;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const toggleTheme = t9;
    let t10;
    bb0: {
        if (selectedSections.size === 0 && selectedSubsections.size === 0) {
            t10 = allMuscles;
            break bb0;
        }
        let t11;
        if ($[14] !== selectedSections || $[15] !== selectedSubsections) {
            t11 = allMuscles.filter({
                "StudyApp[allMuscles.filter()]": (t12)=>{
                    const { sectionTitle, subsectionTitle } = t12;
                    const section = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$anatomy$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anatomyData"].sections.find({
                        "StudyApp[allMuscles.filter() > anatomyData.sections.find()]": (s)=>s.title === sectionTitle
                    }["StudyApp[allMuscles.filter() > anatomyData.sections.find()]"]);
                    if (!section) {
                        return false;
                    }
                    if (selectedSections.has(section.id)) {
                        return true;
                    }
                    if (subsectionTitle) {
                        const subsection = section.subsections?.find({
                            "StudyApp[allMuscles.filter() > (anonymous)()]": (sub)=>sub.title === subsectionTitle
                        }["StudyApp[allMuscles.filter() > (anonymous)()]"]);
                        if (subsection && selectedSubsections.has(subsection.id)) {
                            return true;
                        }
                    }
                    return false;
                }
            }["StudyApp[allMuscles.filter()]"]);
            $[14] = selectedSections;
            $[15] = selectedSubsections;
            $[16] = t11;
        } else {
            t11 = $[16];
        }
        t10 = t11;
    }
    const filteredMuscles = t10;
    let t11;
    if ($[17] !== selectedSections) {
        t11 = ({
            "StudyApp[handleSectionChange]": (sectionId, checked)=>{
                const newSet = new Set(selectedSections);
                if (checked) {
                    newSet.add(sectionId);
                } else {
                    newSet.delete(sectionId);
                }
                setSelectedSections(newSet);
            }
        })["StudyApp[handleSectionChange]"];
        $[17] = selectedSections;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const handleSectionChange = t11;
    let t12;
    if ($[19] !== selectedSubsections) {
        t12 = ({
            "StudyApp[handleSubsectionChange]": (subsectionId, checked_0)=>{
                const newSet_0 = new Set(selectedSubsections);
                if (checked_0) {
                    newSet_0.add(subsectionId);
                } else {
                    newSet_0.delete(subsectionId);
                }
                setSelectedSubsections(newSet_0);
            }
        })["StudyApp[handleSubsectionChange]"];
        $[19] = selectedSubsections;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    const handleSubsectionChange = t12;
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "StudyApp[handleSelectAll]": ()=>{
                const allSectionIds = new Set(sections.map(_StudyAppHandleSelectAllSectionsMap));
                const allSubsectionIds = new Set(sections.flatMap(_StudyAppHandleSelectAllSectionsFlatMap));
                setSelectedSections(allSectionIds);
                setSelectedSubsections(allSubsectionIds);
            }
        })["StudyApp[handleSelectAll]"];
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    const handleSelectAll = t13;
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "StudyApp[handleClearAll]": ()=>{
                setSelectedSections(new Set());
                setSelectedSubsections(new Set());
            }
        })["StudyApp[handleClearAll]"];
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const handleClearAll = t14;
    let t15;
    if ($[23] !== flashcardShowFields) {
        t15 = ({
            "StudyApp[toggleFlashcardField]": (field)=>{
                const newSet_1 = new Set(flashcardShowFields);
                if (newSet_1.has(field)) {
                    if (newSet_1.size > 1) {
                        newSet_1.delete(field);
                    }
                } else {
                    newSet_1.add(field);
                }
                setFlashcardShowFields(newSet_1);
            }
        })["StudyApp[toggleFlashcardField]"];
        $[23] = flashcardShowFields;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const toggleFlashcardField = t15;
    let t16;
    if ($[25] !== mcQuestionTypes) {
        t16 = ({
            "StudyApp[toggleMcQuestionType]": (type)=>{
                const newSet_2 = new Set(mcQuestionTypes);
                if (newSet_2.has(type)) {
                    if (newSet_2.size > 1) {
                        newSet_2.delete(type);
                    }
                } else {
                    newSet_2.add(type);
                }
                setMcQuestionTypes(newSet_2);
            }
        })["StudyApp[toggleMcQuestionType]"];
        $[25] = mcQuestionTypes;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const toggleMcQuestionType = t16;
    const totalSelected = selectedSections.size + selectedSubsections.size;
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                            className: "h-8 w-8 text-pink-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 289,
                            columnNumber: 78
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "h-3 w-3 text-red-500 absolute -bottom-1 -right-1 fill-red-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 289,
                            columnNumber: 129
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 289,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent",
                            children: "Anatomie Studie"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 289,
                            columnNumber: 223
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Spieren leren"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 289,
                            columnNumber: 353
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 289,
                    columnNumber: 218
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== stats) {
        t18 = stats && stats.streakDays > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "hidden md:flex bg-orange-50 text-orange-600 border-orange-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                    className: "h-3 w-3 mr-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 296,
                    columnNumber: 143
                }, this),
                stats.streakDays,
                " dagen streak!"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 296,
            columnNumber: 44
        }, this);
        $[28] = stats;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== stats) {
        t19 = stats && stats.accuracy > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "hidden md:flex bg-green-50 text-green-600 border-green-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-3 w-3 mr-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 304,
                    columnNumber: 138
                }, this),
                stats.accuracy,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 304,
            columnNumber: 42
        }, this);
        $[30] = stats;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== filteredMuscles.length) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "hidden sm:flex",
            children: [
                filteredMuscles.length,
                " spieren"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[32] = filteredMuscles.length;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== isDark) {
        t21 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 320,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 320,
            columnNumber: 50
        }, this);
        $[34] = isDark;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t21 || $[37] !== toggleTheme) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: toggleTheme,
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[36] = t21;
        $[37] = toggleTheme;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 337,
                    columnNumber: 78
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 337,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                    children: "Instellingen"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 344,
                    columnNumber: 24
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                    children: "Pas je oefensessie aan"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 344,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold mb-3 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 351,
                    columnNumber: 70
                }, this),
                "Selecteer secties om te oefenen"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 mb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    onClick: handleSelectAll,
                    children: "Alles"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 358,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    onClick: handleClearAll,
                    children: "Niets"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 358,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== handleSectionChange || $[44] !== handleSubsectionChange || $[45] !== selectedSections || $[46] !== selectedSubsections) {
        t27 = sections.map({
            "StudyApp[sections.map()]": (section_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                    id: `settings-${section_0.id}`,
                                    checked: selectedSections.has(section_0.id),
                                    onCheckedChange: {
                                        "StudyApp[sections.map() > <Checkbox>.onCheckedChange]": (checked_1)=>handleSectionChange(section_0.id, checked_1 === true)
                                    }["StudyApp[sections.map() > <Checkbox>.onCheckedChange]"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/study-app.tsx",
                                    lineNumber: 366,
                                    columnNumber: 139
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: `settings-${section_0.id}`,
                                    className: "text-sm font-medium cursor-pointer",
                                    children: section_0.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/study-app.tsx",
                                    lineNumber: 368,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 366,
                            columnNumber: 94
                        }, this),
                        section_0.subsections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-6 space-y-1",
                            children: section_0.subsections.map({
                                "StudyApp[sections.map() > section_0.subsections.map()]": (sub_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                id: `settings-${sub_1.id}`,
                                                checked: selectedSubsections.has(sub_1.id),
                                                onCheckedChange: {
                                                    "StudyApp[sections.map() > section_0.subsections.map() > <Checkbox>.onCheckedChange]": (checked_2)=>handleSubsectionChange(sub_1.id, checked_2 === true)
                                                }["StudyApp[sections.map() > section_0.subsections.map() > <Checkbox>.onCheckedChange]"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/study-app.tsx",
                                                lineNumber: 369,
                                                columnNumber: 140
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: `settings-${sub_1.id}`,
                                                className: "text-xs cursor-pointer text-muted-foreground",
                                                children: sub_1.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/study-app.tsx",
                                                lineNumber: 371,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, sub_1.id, true, {
                                        fileName: "[project]/src/components/study-app.tsx",
                                        lineNumber: 369,
                                        columnNumber: 80
                                    }, this)
                            }["StudyApp[sections.map() > section_0.subsections.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 368,
                            columnNumber: 232
                        }, this)
                    ]
                }, section_0.id, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 366,
                    columnNumber: 48
                }, this)
        }["StudyApp[sections.map()]"]);
        $[43] = handleSectionChange;
        $[44] = handleSubsectionChange;
        $[45] = selectedSections;
        $[46] = selectedSubsections;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "h-[200px] border rounded-md p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: t27
            }, void 0, false, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 384,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[48] = t27;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    const t29 = totalSelected === 0 ? "Alle spieren worden getoond" : `${totalSelected} selectie(s) actief`;
    let t30;
    if ($[50] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground mt-2",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[50] = t29;
        $[51] = t30;
    } else {
        t30 = $[51];
    }
    let t31;
    if ($[52] !== t28 || $[53] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t25,
                t26,
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[52] = t28;
        $[53] = t30;
        $[54] = t31;
    } else {
        t31 = $[54];
    }
    let t32;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold mb-3 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 417,
                    columnNumber: 70
                }, this),
                "Flashcard velden"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    if ($[57] !== flashcardShowFields || $[58] !== toggleFlashcardField) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        {
                            id: "origin",
                            label: "Origo"
                        },
                        {
                            id: "insertion",
                            label: "Insertie"
                        },
                        {
                            id: "innervation",
                            label: "Innervatie"
                        },
                        {
                            id: "function",
                            label: "Functie"
                        }
                    ].map({
                        "StudyApp[(anonymous)()]": (field_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: `fc-${field_0.id}`,
                                        children: field_0.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/study-app.tsx",
                                        lineNumber: 437,
                                        columnNumber: 117
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        id: `fc-${field_0.id}`,
                                        checked: flashcardShowFields.has(field_0.id),
                                        onCheckedChange: {
                                            "StudyApp[(anonymous)() > <Switch>.onCheckedChange]": ()=>toggleFlashcardField(field_0.id)
                                        }["StudyApp[(anonymous)() > <Switch>.onCheckedChange]"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/study-app.tsx",
                                        lineNumber: 437,
                                        columnNumber: 176
                                    }, this)
                                ]
                            }, field_0.id, true, {
                                fileName: "[project]/src/components/study-app.tsx",
                                lineNumber: 437,
                                columnNumber: 49
                            }, this)
                    }["StudyApp[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 424,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[57] = flashcardShowFields;
        $[58] = toggleFlashcardField;
        $[59] = t34;
    } else {
        t34 = $[59];
    }
    let t35;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[60] = t35;
    } else {
        t35 = $[60];
    }
    let t36;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold mb-3 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 456,
                    columnNumber: 70
                }, this),
                "Meerkeuzevraag types"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2",
            children: "Standaard vragen"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[62] = t37;
    } else {
        t37 = $[62];
    }
    let t38;
    if ($[63] !== mcQuestionTypes || $[64] !== toggleMcQuestionType) {
        t38 = [
            {
                id: "name",
                label: "Spiernaam raden"
            },
            {
                id: "origin",
                label: "Origo vragen"
            },
            {
                id: "insertion",
                label: "Insertie vragen"
            },
            {
                id: "innervation",
                label: "Innervatie vragen"
            },
            {
                id: "function",
                label: "Functie vragen"
            }
        ].map({
            "StudyApp[(anonymous)()]": (type_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: `mc-${type_0.id}`,
                            children: type_0.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 486,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                            id: `mc-${type_0.id}`,
                            checked: mcQuestionTypes.has(type_0.id),
                            onCheckedChange: {
                                "StudyApp[(anonymous)() > <Switch>.onCheckedChange]": ()=>toggleMcQuestionType(type_0.id)
                            }["StudyApp[(anonymous)() > <Switch>.onCheckedChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 486,
                            columnNumber: 168
                        }, this)
                    ]
                }, type_0.id, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 486,
                    columnNumber: 44
                }, this)
        }["StudyApp[(anonymous)()]"]);
        $[63] = mcQuestionTypes;
        $[64] = toggleMcQuestionType;
        $[65] = t38;
    } else {
        t38 = $[65];
    }
    let t39;
    let t40;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            className: "my-3"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2",
            children: "Omgekeerde vragen"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[66] = t39;
        $[67] = t40;
    } else {
        t39 = $[66];
        t40 = $[67];
    }
    let t41;
    if ($[68] !== mcQuestionTypes || $[69] !== toggleMcQuestionType) {
        t41 = [
            {
                id: "origin_reverse",
                label: "Spier bij origo"
            },
            {
                id: "insertion_reverse",
                label: "Spier bij insertie"
            },
            {
                id: "innervation_reverse",
                label: "Spier bij innervatie"
            },
            {
                id: "function_reverse",
                label: "Spier bij functie"
            }
        ].map({
            "StudyApp[(anonymous)()]": (type_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: `mc-${type_1.id}`,
                            children: type_1.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 522,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                            id: `mc-${type_1.id}`,
                            checked: mcQuestionTypes.has(type_1.id),
                            onCheckedChange: {
                                "StudyApp[(anonymous)() > <Switch>.onCheckedChange]": ()=>toggleMcQuestionType(type_1.id)
                            }["StudyApp[(anonymous)() > <Switch>.onCheckedChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 522,
                            columnNumber: 168
                        }, this)
                    ]
                }, type_1.id, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 522,
                    columnNumber: 44
                }, this)
        }["StudyApp[(anonymous)()]"]);
        $[68] = mcQuestionTypes;
        $[69] = toggleMcQuestionType;
        $[70] = t41;
    } else {
        t41 = $[70];
    }
    let t42;
    let t43;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            className: "my-3"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2",
            children: "Extra vraagtypes"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[71] = t42;
        $[72] = t43;
    } else {
        t42 = $[71];
        t43 = $[72];
    }
    let t44;
    if ($[73] !== mcQuestionTypes || $[74] !== toggleMcQuestionType) {
        t44 = [
            {
                id: "true_false",
                label: "Waar/Niet waar vragen"
            },
            {
                id: "match_property",
                label: "Eigenschap matchen"
            }
        ].map({
            "StudyApp[(anonymous)()]": (type_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: `mc-${type_2.id}`,
                            children: type_2.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 552,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                            id: `mc-${type_2.id}`,
                            checked: mcQuestionTypes.has(type_2.id),
                            onCheckedChange: {
                                "StudyApp[(anonymous)() > <Switch>.onCheckedChange]": ()=>toggleMcQuestionType(type_2.id)
                            }["StudyApp[(anonymous)() > <Switch>.onCheckedChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 552,
                            columnNumber: 168
                        }, this)
                    ]
                }, type_2.id, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 552,
                    columnNumber: 44
                }, this)
        }["StudyApp[(anonymous)()]"]);
        $[73] = mcQuestionTypes;
        $[74] = toggleMcQuestionType;
        $[75] = t44;
    } else {
        t44 = $[75];
    }
    let t45;
    let t46;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            className: "my-3"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 565,
            columnNumber: 11
        }, this);
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2",
            children: "🎯 Examen-stijl vragen"
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[76] = t45;
        $[77] = t46;
    } else {
        t45 = $[76];
        t46 = $[77];
    }
    let t47;
    if ($[78] !== mcQuestionTypes || $[79] !== toggleMcQuestionType) {
        t47 = [
            {
                id: "origo_or_insertio",
                label: "Is dit origo of insertie?"
            },
            {
                id: "which_muscle_origo_insertio",
                label: "Welke spier (slimme fouten)"
            }
        ].map({
            "StudyApp[(anonymous)()]": (type_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: `mc-${type_3.id}`,
                            children: type_3.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 582,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                            id: `mc-${type_3.id}`,
                            checked: mcQuestionTypes.has(type_3.id),
                            onCheckedChange: {
                                "StudyApp[(anonymous)() > <Switch>.onCheckedChange]": ()=>toggleMcQuestionType(type_3.id)
                            }["StudyApp[(anonymous)() > <Switch>.onCheckedChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 582,
                            columnNumber: 168
                        }, this)
                    ]
                }, type_3.id, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 582,
                    columnNumber: 44
                }, this)
        }["StudyApp[(anonymous)()]"]);
        $[78] = mcQuestionTypes;
        $[79] = toggleMcQuestionType;
        $[80] = t47;
    } else {
        t47 = $[80];
    }
    let t48;
    if ($[81] !== t38 || $[82] !== t41 || $[83] !== t44 || $[84] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-[280px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 pr-4",
                        children: [
                            t37,
                            t38,
                            t39,
                            t40,
                            t41,
                            t42,
                            t43,
                            t44,
                            t45,
                            t46,
                            t47
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/study-app.tsx",
                        lineNumber: 594,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 594,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[81] = t38;
        $[82] = t41;
        $[83] = t44;
        $[84] = t47;
        $[85] = t48;
    } else {
        t48 = $[85];
    }
    let t49;
    if ($[86] !== t31 || $[87] !== t34 || $[88] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                    className: "w-[400px] sm:w-[540px] overflow-y-auto",
                    children: [
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-6",
                            children: [
                                t31,
                                t32,
                                t34,
                                t35,
                                t48
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 605,
                            columnNumber: 93
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 605,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[86] = t31;
        $[87] = t34;
        $[88] = t48;
        $[89] = t49;
    } else {
        t49 = $[89];
    }
    let t50;
    if ($[90] !== t18 || $[91] !== t19 || $[92] !== t20 || $[93] !== t22 || $[94] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b sticky top-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        t17,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                t18,
                                t19,
                                t20,
                                t22,
                                t49
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 615,
                            columnNumber: 208
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 615,
                    columnNumber: 152
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 615,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 615,
            columnNumber: 11
        }, this);
        $[90] = t18;
        $[91] = t19;
        $[92] = t20;
        $[93] = t22;
        $[94] = t49;
        $[95] = t50;
    } else {
        t50 = $[95];
    }
    let t51;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "flashcards",
            className: "flex items-center gap-1 md:gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 627,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Flashcards"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 627,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[96] = t51;
    } else {
        t51 = $[96];
    }
    let t52;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "quiz",
            className: "flex items-center gap-1 md:gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 634,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Quiz"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 634,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 634,
            columnNumber: 11
        }, this);
        $[97] = t52;
    } else {
        t52 = $[97];
    }
    let t53;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "stats",
            className: "flex items-center gap-1 md:gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 641,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Statistieken"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 641,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[98] = t53;
    } else {
        t53 = $[98];
    }
    let t54;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full max-w-lg mx-auto grid-cols-4 mb-8",
            children: [
                t51,
                t52,
                t53,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "overview",
                    className: "flex items-center gap-1 md:gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 648,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Overzicht"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 648,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 648,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[99] = t54;
    } else {
        t54 = $[99];
    }
    let t55;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: "📚 Flashcards"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 655,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Klik op een kaart om de details te zien. Gebruik sneltoetsen voor sneller leren!"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 655,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 655,
            columnNumber: 11
        }, this);
        $[100] = t55;
    } else {
        t55 = $[100];
    }
    let t56;
    if ($[101] !== flashcardShowFields) {
        t56 = Array.from(flashcardShowFields);
        $[101] = flashcardShowFields;
        $[102] = t56;
    } else {
        t56 = $[102];
    }
    let t57;
    if ($[103] !== filteredMuscles || $[104] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "flashcards",
            className: "mt-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    t55,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$flashcard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flashcard"], {
                        muscles: filteredMuscles,
                        questionField: "origin",
                        showFields: t56
                    }, void 0, false, {
                        fileName: "[project]/src/components/study-app.tsx",
                        lineNumber: 670,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 670,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 670,
            columnNumber: 11
        }, this);
        $[103] = filteredMuscles;
        $[104] = t56;
        $[105] = t57;
    } else {
        t57 = $[105];
    }
    let t58;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: "🧠 Meerkeuzevragen"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 679,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Test je kennis met meerkeuzevragen. Gebruik toetsen 1-4 om snel te antwoorden!"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 679,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[106] = t58;
    } else {
        t58 = $[106];
    }
    let t59;
    if ($[107] !== mcQuestionTypes) {
        t59 = Array.from(mcQuestionTypes);
        $[107] = mcQuestionTypes;
        $[108] = t59;
    } else {
        t59 = $[108];
    }
    let t60;
    if ($[109] !== filteredMuscles || $[110] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "quiz",
            className: "mt-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    t58,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$multiple$2d$choice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultipleChoice"], {
                        muscles: filteredMuscles,
                        questionTypes: t59
                    }, void 0, false, {
                        fileName: "[project]/src/components/study-app.tsx",
                        lineNumber: 694,
                        columnNumber: 103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 694,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[109] = filteredMuscles;
        $[110] = t59;
        $[111] = t60;
    } else {
        t60 = $[111];
    }
    let t61;
    if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "stats",
            className: "mt-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "📊 Statistieken"
                            }, void 0, false, {
                                fileName: "[project]/src/components/study-app.tsx",
                                lineNumber: 703,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Bekijk je voortgang en ontdek welke spieren meer aandacht nodig hebben."
                            }, void 0, false, {
                                fileName: "[project]/src/components/study-app.tsx",
                                lineNumber: 703,
                                columnNumber: 196
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/study-app.tsx",
                        lineNumber: 703,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$statistics$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatisticsDashboard"], {
                        allMuscles: allMuscles
                    }, void 0, false, {
                        fileName: "[project]/src/components/study-app.tsx",
                        lineNumber: 703,
                        columnNumber: 314
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 703,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 703,
            columnNumber: 11
        }, this);
        $[112] = t61;
    } else {
        t61 = $[112];
    }
    let t62;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: "📋 Overzicht"
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 710,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Bekijk alle spieren en hun eigenschappen in een handig overzicht."
                }, void 0, false, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 710,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[113] = t62;
    } else {
        t62 = $[113];
    }
    let t63;
    if ($[114] !== filteredMuscles) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "overview",
            className: "mt-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    t62,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$muscle$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MuscleOverview"], {
                        muscles: filteredMuscles
                    }, void 0, false, {
                        fileName: "[project]/src/components/study-app.tsx",
                        lineNumber: 717,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 717,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 717,
            columnNumber: 11
        }, this);
        $[114] = filteredMuscles;
        $[115] = t63;
    } else {
        t63 = $[115];
    }
    let t64;
    if ($[116] !== t57 || $[117] !== t60 || $[118] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container mx-auto px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "flashcards",
                className: "w-full",
                children: [
                    t54,
                    t57,
                    t60,
                    t61,
                    t63
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 725,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[116] = t57;
        $[117] = t60;
        $[118] = t63;
        $[119] = t64;
    } else {
        t64 = $[119];
    }
    let t65;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-white/50 dark:bg-gray-900/50 border-t mt-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-4 text-center text-sm text-muted-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Gemaakt met",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "h-4 w-4 inline text-red-500 fill-red-500 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/study-app.tsx",
                            lineNumber: 735,
                            columnNumber: 186
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/study-app.tsx",
                    lineNumber: 735,
                    columnNumber: 167
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/study-app.tsx",
                lineNumber: 735,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[120] = t65;
    } else {
        t65 = $[120];
    }
    let t66;
    if ($[121] !== t50 || $[122] !== t64) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors",
            children: [
                t50,
                t64,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/study-app.tsx",
            lineNumber: 742,
            columnNumber: 11
        }, this);
        $[121] = t50;
        $[122] = t64;
        $[123] = t66;
    } else {
        t66 = $[123];
    }
    return t66;
}
_s(StudyApp, "dLpCMdDsj9ErrUS7PJmygQKXf2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$study$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyProgress"]
    ];
});
_c = StudyApp;
function _StudyAppHandleSelectAllSectionsFlatMap(s_1) {
    return s_1.subsections.map(_StudyAppHandleSelectAllSectionsFlatMapS_1SubsectionsMap);
}
function _StudyAppHandleSelectAllSectionsFlatMapS_1SubsectionsMap(sub_0) {
    return sub_0.id;
}
function _StudyAppHandleSelectAllSectionsMap(s_0) {
    return s_0.id;
}
var _c;
__turbopack_context__.k.register(_c, "StudyApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a4baf4de._.js.map