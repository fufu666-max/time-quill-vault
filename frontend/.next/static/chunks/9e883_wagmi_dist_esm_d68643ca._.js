(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hydrate",
    ()=>Hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/hydrate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function Hydrate(parameters) {
    const { children, config, initialState, reconnectOnMount = true } = parameters;
    const { onMount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(config, {
        initialState,
        reconnectOnMount
    });
    // Hydrate for non-SSR
    if (!config._internal.ssr) onMount();
    // Hydrate for SSR
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hydrate.useEffect": ()=>{
            if (!active.current) return;
            if (!config._internal.ssr) return;
            onMount();
            return ({
                "Hydrate.useEffect": ()=>{
                    active.current = false;
                }
            })["Hydrate.useEffect"];
        }
    }["Hydrate.useEffect"], []);
    return children;
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiContext",
    ()=>WagmiContext,
    "WagmiProvider",
    ()=>WagmiProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)");
'use client';
;
;
const WagmiContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WagmiProvider(parameters) {
    const { children, config } = parameters;
    const props = {
        value: config
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hydrate"], parameters, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(WagmiContext.Provider, props, children));
} //# sourceMappingURL=context.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.19.5'; //# sourceMappingURL=version.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>"wagmi@".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]); //# sourceMappingURL=getVersion.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
;
;
class BaseError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    get docsBaseUrl() {
        return 'https://wagmi.sh/react';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiError'
        });
    }
} //# sourceMappingURL=base.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiProviderNotFoundError",
    ()=>WagmiProviderNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class WagmiProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('`useConfig` must be used within `WagmiProvider`.', {
            docsPath: '/api/WagmiProvider'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiProviderNotFoundError'
        });
    }
} //# sourceMappingURL=context.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConfig() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _parameters_config;
    // biome-ignore lint/correctness/useHookAtTopLevel: false alarm
    const config = (_parameters_config = parameters.config) !== null && _parameters_config !== void 0 ? _parameters_config : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiContext"]);
    if (!config) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProviderNotFoundError"]();
    return config;
} //# sourceMappingURL=useConfig.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncExternalStoreWithTracked",
    ()=>useSyncExternalStoreWithTracked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
'use client';
;
;
;
const isPlainObject = (obj)=>typeof obj === 'object' && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot) {
    let getServerSnapshot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getSnapshot, isEqual = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"];
    const trackedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscribe, getSnapshot, getServerSnapshot, {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (x)=>x
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"], {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (a, b)=>{
            if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
                for (const key of trackedKeys.current){
                    const equal = isEqual(a[key], b[key]);
                    if (!equal) return false;
                }
                return true;
            }
            return isEqual(a, b);
        }
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSyncExternalStoreWithTracked.useMemo": ()=>{
            if (isPlainObject(result)) {
                const trackedResult = {
                    ...result
                };
                let properties = {};
                for (const [key, value] of Object.entries(trackedResult)){
                    properties = {
                        ...properties,
                        [key]: {
                            configurable: false,
                            enumerable: true,
                            get: ({
                                "useSyncExternalStoreWithTracked.useMemo": ()=>{
                                    if (!trackedKeys.current.includes(key)) {
                                        trackedKeys.current.push(key);
                                    }
                                    return value;
                                }
                            })["useSyncExternalStoreWithTracked.useMemo"]
                        }
                    };
                }
                Object.defineProperties(trackedResult, properties);
                return trackedResult;
            }
            return result;
        }
    }["useSyncExternalStoreWithTracked.useMemo"], [
        result
    ]);
} //# sourceMappingURL=useSyncExternalStoreWithTracked.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccount",
    ()=>useAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)");
'use client';
;
;
;
function useAccount() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithTracked"])({
        "useAccount.useSyncExternalStoreWithTracked": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
                onChange
            })
    }["useAccount.useSyncExternalStoreWithTracked"], {
        "useAccount.useSyncExternalStoreWithTracked": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config)
    }["useAccount.useSyncExternalStoreWithTracked"]);
} //# sourceMappingURL=useAccount.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccountEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccountEffect",
    ()=>useAccountEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useAccountEffect() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { onConnect, onDisconnect } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAccountEffect.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
                onChange (data, prevData) {
                    if ((prevData.status === 'reconnecting' || prevData.status === 'connecting' && prevData.address === undefined) && data.status === 'connected') {
                        const { address, addresses, chain, chainId, connector } = data;
                        const isReconnected = prevData.status === 'reconnecting' || // if `previousAccount.status` is `undefined`, the connector connected immediately.
                        prevData.status === undefined;
                        onConnect === null || onConnect === void 0 ? void 0 : onConnect({
                            address,
                            addresses,
                            chain,
                            chainId,
                            connector,
                            isReconnected
                        });
                    } else if (prevData.status === 'connected' && data.status === 'disconnected') onDisconnect === null || onDisconnect === void 0 ? void 0 : onDisconnect();
                }
            });
        }
    }["useAccountEffect.useEffect"], [
        config,
        onConnect,
        onDisconnect
    ]);
} //# sourceMappingURL=useAccountEffect.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteQuery",
    ()=>useInfiniteQuery,
    "useQuery",
    ()=>useQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
;
function useQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
}
function useInfiniteQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
} //# sourceMappingURL=query.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChainId",
    ()=>useChainId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useChainId() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useChainId.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchChainId"])(config, {
                onChange
            })
    }["useChainId.useSyncExternalStore"], {
        "useChainId.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(config)
    }["useChainId.useSyncExternalStore"], {
        "useChainId.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(config)
    }["useChainId.useSyncExternalStore"]);
} //# sourceMappingURL=useChainId.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBalance",
    ()=>useBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useBalance() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    var _parameters_chainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalanceQueryOptions"])(config, {
        ...parameters,
        chainId: (_parameters_chainId = parameters.chainId) !== null && _parameters_chainId !== void 0 ? _parameters_chainId : chainId
    });
    var _query_enabled;
    const enabled = Boolean(address && ((_query_enabled = query.enabled) !== null && _query_enabled !== void 0 ? _query_enabled : true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useBalance.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnsAvatar",
    ()=>useEnsAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useEnsAvatar() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { name, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    var _parameters_chainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAvatarQueryOptions"])(config, {
        ...parameters,
        chainId: (_parameters_chainId = parameters.chainId) !== null && _parameters_chainId !== void 0 ? _parameters_chainId : chainId
    });
    var _query_enabled;
    const enabled = Boolean(name && ((_query_enabled = query.enabled) !== null && _query_enabled !== void 0 ? _query_enabled : true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsAvatar.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useEnsName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnsName",
    ()=>useEnsName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/getEnsName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useEnsName() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    var _parameters_chainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsNameQueryOptions"])(config, {
        ...parameters,
        chainId: (_parameters_chainId = parameters.chainId) !== null && _parameters_chainId !== void 0 ? _parameters_chainId : chainId
    });
    var _query_enabled;
    const enabled = Boolean(address && ((_query_enabled = query.enabled) !== null && _query_enabled !== void 0 ? _query_enabled : true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsName.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePublicClient",
    ()=>usePublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function usePublicClient() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])({
        "usePublicClient.useSyncExternalStoreWithSelector": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPublicClient"])(config, {
                onChange
            })
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicClient"])(config, parameters)
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicClient"])(config, parameters)
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": (x)=>x
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": (a, b)=>(a === null || a === void 0 ? void 0 : a.uid) === (b === null || b === void 0 ? void 0 : b.uid)
    }["usePublicClient.useSyncExternalStoreWithSelector"]);
} //# sourceMappingURL=usePublicClient.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnections",
    ()=>useConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnections() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useConnections.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnections"])(config, {
                onChange
            })
    }["useConnections.useSyncExternalStore"], {
        "useConnections.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config)
    }["useConnections.useSyncExternalStore"], {
        "useConnections.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config)
    }["useConnections.useSyncExternalStore"]);
} //# sourceMappingURL=useConnections.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisconnect",
    ()=>useDisconnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useDisconnect() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnections"])({
            config
        }).map((connection)=>connection.connector),
        disconnect: mutate,
        disconnectAsync: mutateAsync
    };
} //# sourceMappingURL=useDisconnect.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectors",
    ()=>useConnectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnectors() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useConnectors.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnectors"])(config, {
                onChange
            })
    }["useConnectors.useSyncExternalStore"], {
        "useConnectors.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectors"])(config)
    }["useConnectors.useSyncExternalStore"], {
        "useConnectors.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectors"])(config)
    }["useConnectors.useSyncExternalStore"]);
} //# sourceMappingURL=useConnectors.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnect",
    ()=>useConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useConnect() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    // Reset mutation back to an idle state when the connector disconnects.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnect.useEffect": ()=>{
            return config.subscribe({
                "useConnect.useEffect": (param)=>{
                    let { status } = param;
                    return status;
                }
            }["useConnect.useEffect"], {
                "useConnect.useEffect": (status, previousStatus)=>{
                    if (previousStatus === 'connected' && status === 'disconnected') result.reset();
                }
            }["useConnect.useEffect"]);
        }
    }["useConnect.useEffect"], [
        config,
        result.reset
    ]);
    return {
        ...result,
        connect: mutate,
        connectAsync: mutateAsync,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectors"])({
            config
        })
    };
} //# sourceMappingURL=useConnect.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignMessage",
    ()=>useSignMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/signMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useSignMessage() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessageMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        signMessage: mutate,
        signMessageAsync: mutateAsync
    };
} //# sourceMappingURL=useSignMessage.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChains",
    ()=>useChains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useChains() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useChains.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchChains"])(config, {
                onChange
            })
    }["useChains.useSyncExternalStore"], {
        "useChains.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChains"])(config)
    }["useChains.useSyncExternalStore"], {
        "useChains.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChains"])(config)
    }["useChains.useSyncExternalStore"]);
} //# sourceMappingURL=useChains.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSwitchChain",
    ()=>useSwitchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useSwitchChain() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchChainMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChains"])({
            config
        }),
        switchChain: mutate,
        switchChainAsync: mutateAsync
    };
} //# sourceMappingURL=useSwitchChain.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/exports/chains.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

////////////////////////////////////////////////////////////////////////////////
// viem/chains
////////////////////////////////////////////////////////////////////////////////
// biome-ignore lint/performance/noBarrelFile: entrypoint module
// biome-ignore lint/performance/noReExportAll: entrypoint module
__turbopack_context__.s([]);
;
 //# sourceMappingURL=chains.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/exports/chains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "abey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abey"],
    "abstract",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstract"],
    "abstractTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstractTestnet"],
    "acala",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acala"],
    "acria",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acria"],
    "adf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adf"],
    "agungTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agungTestnet"],
    "aioz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aioz"],
    "alephZero",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alephZero"],
    "alephZeroTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alephZeroTestnet"],
    "alienx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alienx"],
    "alienxHalTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alienxHalTestnet"],
    "ancient8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ancient8"],
    "ancient8Sepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ancient8Sepolia"],
    "anvil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anvil"],
    "apeChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apeChain"],
    "apexTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apexTestnet"],
    "arbitrum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrum"],
    "arbitrumGoerli",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrumGoerli"],
    "arbitrumNova",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrumNova"],
    "arbitrumSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrumSepolia"],
    "arcTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arcTestnet"],
    "arenaz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arenaz"],
    "areonNetwork",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areonNetwork"],
    "areonNetworkTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areonNetworkTestnet"],
    "areum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areum"],
    "artelaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["artelaTestnet"],
    "arthera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arthera"],
    "artheraTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["artheraTestnet"],
    "assetChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assetChain"],
    "assetChainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assetChainTestnet"],
    "astar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["astar"],
    "astarZkEVM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["astarZkEVM"],
    "astarZkyoto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["astarZkyoto"],
    "atletaOlympia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atletaOlympia"],
    "aurora",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aurora"],
    "auroraTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auroraTestnet"],
    "auroria",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auroria"],
    "autheoTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autheoTestnet"],
    "avalanche",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avalanche"],
    "avalancheFuji",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avalancheFuji"],
    "b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b3"],
    "b3Sepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b3Sepolia"],
    "bahamut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bahamut"],
    "base",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"],
    "baseGoerli",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseGoerli"],
    "basePreconf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePreconf"],
    "baseSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    "baseSepoliaPreconf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepoliaPreconf"],
    "basecampTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basecampTestnet"],
    "beam",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beam"],
    "beamTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beamTestnet"],
    "bearNetworkChainMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bearNetworkChainMainnet"],
    "bearNetworkChainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bearNetworkChainTestnet"],
    "berachain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["berachain"],
    "berachainBepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["berachainBepolia"],
    "berachainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["berachainTestnet"],
    "berachainTestnetbArtio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["berachainTestnetbArtio"],
    "bevmMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bevmMainnet"],
    "bifrost",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bifrost"],
    "birdlayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["birdlayer"],
    "bitTorrent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitTorrent"],
    "bitTorrentTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitTorrentTestnet"],
    "bitgert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitgert"],
    "bitkub",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitkub"],
    "bitkubTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitkubTestnet"],
    "bitlayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitlayer"],
    "bitlayerTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitlayerTestnet"],
    "bitrock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitrock"],
    "blast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blast"],
    "blastSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blastSepolia"],
    "bob",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bob"],
    "bobSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bobSepolia"],
    "boba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boba"],
    "bobaSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bobaSepolia"],
    "boolBetaMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolBetaMainnet"],
    "botanix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["botanix"],
    "botanixTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["botanixTestnet"],
    "bounceBit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceBit"],
    "bounceBitTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceBitTestnet"],
    "bronos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bronos"],
    "bronosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bronosTestnet"],
    "bsc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bsc"],
    "bscGreenfield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bscGreenfield"],
    "bscTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bscTestnet"],
    "bsquared",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bsquared"],
    "bsquaredTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bsquaredTestnet"],
    "btr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btr"],
    "btrTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btrTestnet"],
    "bxn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bxn"],
    "bxnTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bxnTestnet"],
    "cannon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cannon"],
    "canto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canto"],
    "celo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["celo"],
    "celoAlfajores",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["celoAlfajores"],
    "celoSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["celoSepolia"],
    "chang",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chang"],
    "chiliz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chiliz"],
    "chips",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chips"],
    "citreaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["citreaTestnet"],
    "classic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classic"],
    "coinbit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coinbit"],
    "coinex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coinex"],
    "confluxESpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confluxESpace"],
    "confluxESpaceTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confluxESpaceTestnet"],
    "coreDao",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coreDao"],
    "coreTestnet1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coreTestnet1"],
    "coreTestnet2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coreTestnet2"],
    "corn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["corn"],
    "cornTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cornTestnet"],
    "crab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crab"],
    "creatorTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["creatorTestnet"],
    "creditCoin3Devnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["creditCoin3Devnet"],
    "creditCoin3Mainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["creditCoin3Mainnet"],
    "creditCoin3Testnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["creditCoin3Testnet"],
    "cronos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cronos"],
    "cronosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cronosTestnet"],
    "cronoszkEVM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cronoszkEVM"],
    "cronoszkEVMTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cronoszkEVMTestnet"],
    "crossbell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crossbell"],
    "crossfi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crossfi"],
    "curtis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curtis"],
    "cyber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cyber"],
    "cyberTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cyberTestnet"],
    "dailyNetwork",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dailyNetwork"],
    "dailyNetworkTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dailyNetworkTestnet"],
    "darwinia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darwinia"],
    "dbkchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbkchain"],
    "dchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dchain"],
    "dchainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dchainTestnet"],
    "defichainEvm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defichainEvm"],
    "defichainEvmTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defichainEvmTestnet"],
    "degen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degen"],
    "dfk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dfk"],
    "diode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diode"],
    "disChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disChain"],
    "dodochainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dodochainTestnet"],
    "dogechain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dogechain"],
    "domaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domaTestnet"],
    "donatuz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["donatuz"],
    "dosChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dosChain"],
    "dosChainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dosChainTestnet"],
    "dreyerxMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dreyerxMainnet"],
    "dreyerxTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dreyerxTestnet"],
    "dustboyIoT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dustboyIoT"],
    "dymension",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dymension"],
    "edexa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edexa"],
    "edexaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edexaTestnet"],
    "edgeless",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeless"],
    "edgelessTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgelessTestnet"],
    "edgeware",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeware"],
    "edgewareTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgewareTestnet"],
    "eduChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eduChain"],
    "eduChainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eduChainTestnet"],
    "ekta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ekta"],
    "ektaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ektaTestnet"],
    "elastos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elastos"],
    "elastosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elastosTestnet"],
    "electroneum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["electroneum"],
    "electroneumTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["electroneumTestnet"],
    "elysiumTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elysiumTestnet"],
    "energy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["energy"],
    "eni",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eni"],
    "eniTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eniTestnet"],
    "enuls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enuls"],
    "eon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eon"],
    "eos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eos"],
    "eosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eosTestnet"],
    "eteria",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eteria"],
    "etherlink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etherlink"],
    "etherlinkShadownetTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etherlinkShadownetTestnet"],
    "etherlinkTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etherlinkTestnet"],
    "ethernity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethernity"],
    "etp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etp"],
    "evmos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evmos"],
    "evmosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evmosTestnet"],
    "excelonMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["excelonMainnet"],
    "expanse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expanse"],
    "exsat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exsat"],
    "exsatTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exsatTestnet"],
    "fantom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fantom"],
    "fantomSonicTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fantomSonicTestnet"],
    "fantomTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fantomTestnet"],
    "fibo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fibo"],
    "filecoin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filecoin"],
    "filecoinCalibration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filecoinCalibration"],
    "filecoinHyperspace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filecoinHyperspace"],
    "fireChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fireChain"],
    "flame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flame"],
    "flare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flare"],
    "flareTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flareTestnet"],
    "flowMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowMainnet"],
    "flowPreviewnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowPreviewnet"],
    "flowTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowTestnet"],
    "fluence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fluence"],
    "fluenceStage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fluenceStage"],
    "fluenceTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fluenceTestnet"],
    "fluentTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fluentTestnet"],
    "form",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["form"],
    "formTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formTestnet"],
    "forma",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forma"],
    "formicarium",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formicarium"],
    "forta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forta"],
    "foundry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["foundry"],
    "fraxtal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fraxtal"],
    "fraxtalTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fraxtalTestnet"],
    "funkiMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funkiMainnet"],
    "funkiSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funkiSepolia"],
    "fuse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fuse"],
    "fuseSparknet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fuseSparknet"],
    "fusion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fusion"],
    "fusionTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fusionTestnet"],
    "garnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["garnet"],
    "gatechain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gatechain"],
    "geist",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geist"],
    "genesys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genesys"],
    "giwaSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["giwaSepolia"],
    "glideL1Protocol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glideL1Protocol"],
    "glideL2Protocol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glideL2Protocol"],
    "gnosis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gnosis"],
    "gnosisChiado",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gnosisChiado"],
    "goChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goChain"],
    "goat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goat"],
    "gobi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gobi"],
    "godwoken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["godwoken"],
    "goerli",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goerli"],
    "graphite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphite"],
    "graphiteTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphiteTestnet"],
    "gravity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gravity"],
    "gunz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gunz"],
    "guruNetwork",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guruNetwork"],
    "guruTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guruTestnet"],
    "ham",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ham"],
    "happychainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["happychainTestnet"],
    "haqqMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haqqMainnet"],
    "haqqTestedge2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haqqTestedge2"],
    "hardhat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardhat"],
    "harmonyOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["harmonyOne"],
    "hashkey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashkey"],
    "hashkeyTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashkeyTestnet"],
    "haustTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haustTestnet"],
    "hedera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hedera"],
    "hederaPreviewnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hederaPreviewnet"],
    "hederaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hederaTestnet"],
    "hela",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hela"],
    "heliosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heliosTestnet"],
    "hemi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hemi"],
    "hemiSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hemiSepolia"],
    "holesky",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["holesky"],
    "hoodi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoodi"],
    "hpb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpb"],
    "huddle01Mainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["huddle01Mainnet"],
    "huddle01Testnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["huddle01Testnet"],
    "humanity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanity"],
    "humanityTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanityTestnet"],
    "humanode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanode"],
    "humanodeTestnet5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanodeTestnet5"],
    "hychain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hychain"],
    "hychainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hychainTestnet"],
    "hyperEvm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hyperEvm"],
    "hyperliquid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hyperliquid"],
    "hyperliquidEvmTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hyperliquidEvmTestnet"],
    "iSunCoin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iSunCoin"],
    "icbNetwork",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["icbNetwork"],
    "idchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["idchain"],
    "immutableZkEvm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["immutableZkEvm"],
    "immutableZkEvmTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["immutableZkEvmTestnet"],
    "inEVM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inEVM"],
    "initVerse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initVerse"],
    "initVerseGenesis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initVerseGenesis"],
    "injective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injective"],
    "injectiveTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectiveTestnet"],
    "ink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
    "inkSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inkSepolia"],
    "iota",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iota"],
    "iotaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iotaTestnet"],
    "iotex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iotex"],
    "iotexTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iotexTestnet"],
    "jasmyChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jasmyChain"],
    "jasmyChainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jasmyChainTestnet"],
    "jbc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jbc"],
    "jbcTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jbcTestnet"],
    "jocMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jocMainnet"],
    "jocTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jocTestnet"],
    "jovay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jovay"],
    "jovaySepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jovaySepolia"],
    "juneo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneo"],
    "juneoBCH1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoBCH1Chain"],
    "juneoDAI1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoDAI1Chain"],
    "juneoDOGE1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoDOGE1Chain"],
    "juneoEUR1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoEUR1Chain"],
    "juneoGLD1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoGLD1Chain"],
    "juneoLINK1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoLINK1Chain"],
    "juneoLTC1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoLTC1Chain"],
    "juneoSGD1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoSGD1Chain"],
    "juneoSocotraTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoSocotraTestnet"],
    "juneoUSD1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoUSD1Chain"],
    "juneoUSDT1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneoUSDT1Chain"],
    "juneomBTC1Chain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["juneomBTC1Chain"],
    "kaia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kaia"],
    "kairos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kairos"],
    "kakarotSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kakarotSepolia"],
    "kakarotStarknetSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kakarotStarknetSepolia"],
    "kardiaChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kardiaChain"],
    "karura",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["karura"],
    "katana",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["katana"],
    "kava",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kava"],
    "kavaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kavaTestnet"],
    "kcc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kcc"],
    "kiiTestnetOro",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kiiTestnetOro"],
    "kinto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kinto"],
    "klaytn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["klaytn"],
    "klaytnBaobab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["klaytnBaobab"],
    "koi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["koi"],
    "kroma",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kroma"],
    "kromaSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kromaSepolia"],
    "l3x",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l3x"],
    "l3xTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l3xTestnet"],
    "lavita",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lavita"],
    "lens",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lens"],
    "lensTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lensTestnet"],
    "lestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lestnet"],
    "lightlinkPegasus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightlinkPegasus"],
    "lightlinkPhoenix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightlinkPhoenix"],
    "linea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linea"],
    "lineaGoerli",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineaGoerli"],
    "lineaSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineaSepolia"],
    "lineaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineaTestnet"],
    "lisk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lisk"],
    "liskSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liskSepolia"],
    "loadAlphanet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAlphanet"],
    "localhost",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localhost"],
    "loop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loop"],
    "lukso",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lukso"],
    "luksoTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["luksoTestnet"],
    "lumiaMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lumiaMainnet"],
    "lumiaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lumiaTestnet"],
    "lumoz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lumoz"],
    "lumozTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lumozTestnet"],
    "lycan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lycan"],
    "lyra",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lyra"],
    "mainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"],
    "mandala",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mandala"],
    "manta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manta"],
    "mantaSepoliaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantaSepoliaTestnet"],
    "mantaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantaTestnet"],
    "mantle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantle"],
    "mantleSepoliaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantleSepoliaTestnet"],
    "mantleTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantleTestnet"],
    "mantraDuKongEVMTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantraDuKongEVMTestnet"],
    "mantraEVM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mantraEVM"],
    "mapProtocol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProtocol"],
    "matchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchain"],
    "matchainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchainTestnet"],
    "mchVerse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mchVerse"],
    "megaethTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["megaethTestnet"],
    "mekong",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mekong"],
    "meld",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meld"],
    "memecore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memecore"],
    "merlin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merlin"],
    "merlinErigonTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merlinErigonTestnet"],
    "metachain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metachain"],
    "metachainIstanbul",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metachainIstanbul"],
    "metadium",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metadium"],
    "metalL2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metalL2"],
    "meter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meter"],
    "meterTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meterTestnet"],
    "metis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metis"],
    "metisGoerli",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metisGoerli"],
    "metisSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metisSepolia"],
    "mev",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mev"],
    "mevTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mevTestnet"],
    "mint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mint"],
    "mintSepoliaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mintSepoliaTestnet"],
    "mitosisTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mitosisTestnet"],
    "mode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mode"],
    "modeTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modeTestnet"],
    "monad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monad"],
    "monadTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monadTestnet"],
    "moonbaseAlpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moonbaseAlpha"],
    "moonbeam",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moonbeam"],
    "moonbeamDev",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moonbeamDev"],
    "moonriver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moonriver"],
    "morph",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morph"],
    "morphHolesky",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphHolesky"],
    "morphSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphSepolia"],
    "nahmii",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nahmii"],
    "nautilus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nautilus"],
    "near",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["near"],
    "nearTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nearTestnet"],
    "neonDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neonDevnet"],
    "neonMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neonMainnet"],
    "neoxMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neoxMainnet"],
    "neoxT4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neoxT4"],
    "newton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newton"],
    "nexi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nexi"],
    "nexilix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nexilix"],
    "nibiru",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nibiru"],
    "nitrographTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nitrographTestnet"],
    "nomina",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nomina"],
    "oasisTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oasisTestnet"],
    "oasys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oasys"],
    "odysseyTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["odysseyTestnet"],
    "okc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["okc"],
    "omax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omax"],
    "omni",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omni"],
    "omniOmega",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omniOmega"],
    "oneWorld",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oneWorld"],
    "oortMainnetDev",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oortMainnetDev"],
    "opBNB",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opBNB"],
    "opBNBTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opBNBTestnet"],
    "openledger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openledger"],
    "optimism",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimism"],
    "optimismGoerli",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimismGoerli"],
    "optimismSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimismSepolia"],
    "optopia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optopia"],
    "optopiaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optopiaTestnet"],
    "orderly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderly"],
    "orderlySepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderlySepolia"],
    "otimDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["otimDevnet"],
    "palm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palm"],
    "palmTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palmTestnet"],
    "peaq",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peaq"],
    "pgn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pgn"],
    "pgnTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pgnTestnet"],
    "phoenix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phoenix"],
    "planq",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["planq"],
    "plasma",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plasma"],
    "plasmaDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plasmaDevnet"],
    "plasmaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plasmaTestnet"],
    "playfiAlbireo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playfiAlbireo"],
    "plinga",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plinga"],
    "plume",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plume"],
    "plumeDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plumeDevnet"],
    "plumeMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plumeMainnet"],
    "plumeSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plumeSepolia"],
    "plumeTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plumeTestnet"],
    "polterTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polterTestnet"],
    "polygon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygon"],
    "polygonAmoy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonAmoy"],
    "polygonMumbai",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonMumbai"],
    "polygonZkEvm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonZkEvm"],
    "polygonZkEvmCardona",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonZkEvmCardona"],
    "polygonZkEvmTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonZkEvmTestnet"],
    "polynomial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polynomial"],
    "polynomialSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polynomialSepolia"],
    "potos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["potos"],
    "potosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["potosTestnet"],
    "premiumBlockTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["premiumBlockTestnet"],
    "pulsechain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pulsechain"],
    "pulsechainV4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pulsechainV4"],
    "pumpfiTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pumpfiTestnet"],
    "pyrope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pyrope"],
    "qMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qMainnet"],
    "qTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qTestnet"],
    "ql1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ql1"],
    "quai",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quai"],
    "quaiTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quaiTestnet"],
    "real",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["real"],
    "redbellyMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redbellyMainnet"],
    "redbellyTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redbellyTestnet"],
    "reddio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reddio"],
    "reddioSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reddioSepolia"],
    "redstone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redstone"],
    "rei",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rei"],
    "reyaNetwork",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reyaNetwork"],
    "riseTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["riseTestnet"],
    "rivalz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rivalz"],
    "rollux",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rollux"],
    "rolluxTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rolluxTestnet"],
    "ronin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ronin"],
    "root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["root"],
    "rootPorcini",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootPorcini"],
    "rootstock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootstock"],
    "rootstockTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootstockTestnet"],
    "rss3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rss3"],
    "rss3Sepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rss3Sepolia"],
    "saakuru",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saakuru"],
    "saga",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saga"],
    "saigon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saigon"],
    "sanko",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanko"],
    "sapphire",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sapphire"],
    "sapphireTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sapphireTestnet"],
    "satoshiVM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["satoshiVM"],
    "satoshiVMTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["satoshiVMTestnet"],
    "scroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"],
    "scrollSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollSepolia"],
    "sei",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sei"],
    "seiDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seiDevnet"],
    "seiTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seiTestnet"],
    "seismicDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seismicDevnet"],
    "sepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"],
    "shape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shape"],
    "shapeSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shapeSepolia"],
    "shardeum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shardeum"],
    "shardeumSphinx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shardeumSphinx"],
    "shibarium",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shibarium"],
    "shibariumTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shibariumTestnet"],
    "shiden",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shiden"],
    "shimmer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimmer"],
    "shimmerTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimmerTestnet"],
    "sidraChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sidraChain"],
    "silentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["silentData"],
    "silicon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["silicon"],
    "siliconSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siliconSepolia"],
    "sixProtocol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sixProtocol"],
    "skaleBlockBrawlers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleBlockBrawlers"],
    "skaleCalypso",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleCalypso"],
    "skaleCalypsoTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleCalypsoTestnet"],
    "skaleCryptoBlades",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleCryptoBlades"],
    "skaleCryptoColosseum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleCryptoColosseum"],
    "skaleEuropa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleEuropa"],
    "skaleEuropaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleEuropaTestnet"],
    "skaleExorde",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleExorde"],
    "skaleHumanProtocol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleHumanProtocol"],
    "skaleNebula",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleNebula"],
    "skaleNebulaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleNebulaTestnet"],
    "skaleRazor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleRazor"],
    "skaleTitan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleTitan"],
    "skaleTitanTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skaleTitanTestnet"],
    "sketchpad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sketchpad"],
    "snax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snax"],
    "snaxTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snaxTestnet"],
    "somniaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["somniaTestnet"],
    "soneium",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soneium"],
    "soneiumMinato",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soneiumMinato"],
    "songbird",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["songbird"],
    "songbirdTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["songbirdTestnet"],
    "sonic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sonic"],
    "sonicBlazeTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sonicBlazeTestnet"],
    "sonicTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sonicTestnet"],
    "sophon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sophon"],
    "sophonTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sophonTestnet"],
    "sova",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sova"],
    "sovaSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sovaSepolia"],
    "spicy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spicy"],
    "statusNetworkSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusNetworkSepolia"],
    "statusSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusSepolia"],
    "step",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["step"],
    "story",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["story"],
    "storyAeneid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyAeneid"],
    "storyOdyssey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyOdyssey"],
    "storyTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyTestnet"],
    "stratis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stratis"],
    "superlumio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superlumio"],
    "superposition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superposition"],
    "superseed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superseed"],
    "superseedSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["superseedSepolia"],
    "surgeTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surgeTestnet"],
    "swan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swan"],
    "swanProximaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swanProximaTestnet"],
    "swanSaturnTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swanSaturnTestnet"],
    "swellchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swellchain"],
    "swellchainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swellchainTestnet"],
    "swissdlt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swissdlt"],
    "syscoin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syscoin"],
    "syscoinTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syscoinTestnet"],
    "tac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tac"],
    "tacSPB",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tacSPB"],
    "taiko",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taiko"],
    "taikoHekla",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taikoHekla"],
    "taikoJolnir",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taikoJolnir"],
    "taikoKatla",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taikoKatla"],
    "taikoTestnetSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taikoTestnetSepolia"],
    "taraxa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taraxa"],
    "taraxaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taraxaTestnet"],
    "teaSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teaSepolia"],
    "telcoinTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telcoinTestnet"],
    "telos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telos"],
    "telosTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telosTestnet"],
    "tenet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tenet"],
    "ternoa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ternoa"],
    "thaiChain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thaiChain"],
    "that",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["that"],
    "theta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theta"],
    "thetaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thetaTestnet"],
    "thunderCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thunderCore"],
    "thunderTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thunderTestnet"],
    "tiktrixTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tiktrixTestnet"],
    "tomb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tomb"],
    "treasure",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treasure"],
    "treasureTopaz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treasureTopaz"],
    "tron",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tron"],
    "tronNile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tronNile"],
    "tronShasta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tronShasta"],
    "ubiq",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ubiq"],
    "ultra",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ultra"],
    "ultraTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ultraTestnet"],
    "ultron",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ultron"],
    "ultronTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ultronTestnet"],
    "unichain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unichain"],
    "unichainSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unichainSepolia"],
    "unique",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unique"],
    "uniqueOpal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uniqueOpal"],
    "uniqueQuartz",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uniqueQuartz"],
    "unreal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unreal"],
    "vana",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vana"],
    "vanaMoksha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vanaMoksha"],
    "vanar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vanar"],
    "vechain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vechain"],
    "velas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velas"],
    "viction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viction"],
    "victionTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["victionTestnet"],
    "vision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vision"],
    "visionTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTestnet"],
    "wanchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wanchain"],
    "wanchainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wanchainTestnet"],
    "weaveVMAlphanet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weaveVMAlphanet"],
    "wemix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wemix"],
    "wemixTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wemixTestnet"],
    "westendAssetHub",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["westendAssetHub"],
    "whitechain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitechain"],
    "whitechainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitechainTestnet"],
    "wmcTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wmcTestnet"],
    "worldLand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldLand"],
    "worldchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldchain"],
    "worldchainSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldchainSepolia"],
    "x1Testnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x1Testnet"],
    "xLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xLayer"],
    "xLayerTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xLayerTestnet"],
    "xai",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xai"],
    "xaiTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xaiTestnet"],
    "xdc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xdc"],
    "xdcTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xdcTestnet"],
    "xoneMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xoneMainnet"],
    "xoneTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xoneTestnet"],
    "xphereMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xphereMainnet"],
    "xphereTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xphereTestnet"],
    "xrOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xrOne"],
    "xrSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xrSepolia"],
    "xrplevmDevnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xrplevmDevnet"],
    "xrplevmTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xrplevmTestnet"],
    "yooldoVerse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yooldoVerse"],
    "yooldoVerseTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yooldoVerseTestnet"],
    "zenchainTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zenchainTestnet"],
    "zeniq",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeniq"],
    "zeroG",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroG"],
    "zeroGGalileoTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroGGalileoTestnet"],
    "zeroGMainnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroGMainnet"],
    "zeroGTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroGTestnet"],
    "zeroNetwork",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroNetwork"],
    "zetachain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zetachain"],
    "zetachainAthensTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zetachainAthensTestnet"],
    "zhejiang",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zhejiang"],
    "zilliqa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zilliqa"],
    "zilliqaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zilliqaTestnet"],
    "zircuit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zircuit"],
    "zircuitGarfieldTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zircuitGarfieldTestnet"],
    "zircuitTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zircuitTestnet"],
    "zkFair",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkFair"],
    "zkFairTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkFairTestnet"],
    "zkLinkNova",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkLinkNova"],
    "zkLinkNovaSepoliaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkLinkNovaSepoliaTestnet"],
    "zkSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkSync"],
    "zkSyncInMemoryNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkSyncInMemoryNode"],
    "zkSyncLocalNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkSyncLocalNode"],
    "zkSyncSepoliaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zkSyncSepoliaTestnet"],
    "zksync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksync"],
    "zksyncInMemoryNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksyncInMemoryNode"],
    "zksyncLocalCustomHyperchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksyncLocalCustomHyperchain"],
    "zksyncLocalHyperchain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksyncLocalHyperchain"],
    "zksyncLocalHyperchainL1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksyncLocalHyperchainL1"],
    "zksyncLocalNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksyncLocalNode"],
    "zksyncSepoliaTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zksyncSepoliaTestnet"],
    "zora",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zora"],
    "zoraSepolia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoraSepolia"],
    "zoraTestnet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoraTestnet"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$exports$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/exports/chains.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/chains/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=9e883_wagmi_dist_esm_d68643ca._.js.map