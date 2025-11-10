(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/////////////////////////////
//
__turbopack_context__.s([]);
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
 // dummy change; to pick-up ws security issue changes
 //# sourceMappingURL=ethers.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/abi/bytes32.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  About bytes32 strings...
 *
 *  @_docloc: api/utils:Bytes32 Strings
 */ __turbopack_context__.s([
    "decodeBytes32String",
    ()=>decodeBytes32String,
    "encodeBytes32String",
    ()=>encodeBytes32String
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
;
function encodeBytes32String(text) {
    // Get the bytes
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(text);
    // Check we have room for null-termination
    if (bytes.length > 31) {
        throw new Error("bytes32 string must be less than 32 bytes");
    }
    // Zero-pad (implicitly null-terminates)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadBytes"])(bytes, 32);
}
function decodeBytes32String(_bytes) {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_bytes, "bytes");
    // Must be 32 bytes with a null-termination
    if (data.length !== 32) {
        throw new Error("invalid bytes32 - not 32 bytes long");
    }
    if (data[31] !== 0) {
        throw new Error("invalid bytes32 string - no null terminator");
    }
    // Find the null termination
    let length = 31;
    while(data[length - 1] === 0){
        length--;
    }
    // Determine the string value
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8String"])(data.slice(0, length));
} //# sourceMappingURL=bytes32.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/constants/numbers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  A constant for the order N for the secp256k1 curve.
 *
 *  (**i.e.** ``0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n``)
 */ __turbopack_context__.s([
    "MaxInt256",
    ()=>MaxInt256,
    "MaxUint256",
    ()=>MaxUint256,
    "MinInt256",
    ()=>MinInt256,
    "N",
    ()=>N,
    "WeiPerEther",
    ()=>WeiPerEther
]);
const N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
const WeiPerEther = BigInt("1000000000000000000");
const MaxUint256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const MinInt256 = BigInt("0x8000000000000000000000000000000000000000000000000000000000000000") * BigInt(-1);
const MaxInt256 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"); //# sourceMappingURL=numbers.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/constants/strings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// NFKC (composed)             // (decomposed)
/**
 *  A constant for the ether symbol (normalized using NFKC).
 *
 *  (**i.e.** ``"\\u039e"``)
 */ __turbopack_context__.s([
    "EtherSymbol",
    ()=>EtherSymbol,
    "MessagePrefix",
    ()=>MessagePrefix
]);
const EtherSymbol = "\u039e"; // "\uD835\uDF63";
const MessagePrefix = "\x19Ethereum Signed Message:\n"; //# sourceMappingURL=strings.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/contract/factory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractFactory",
    ()=>ContractFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/interface.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/contract-address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/contract/contract.js [app-client] (ecmascript)");
;
;
;
;
;
class ContractFactory {
    attach(target) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseContract"](target, this.interface, this.runner);
    }
    /**
     *  Resolves to the transaction to deploy the contract, passing %%args%%
     *  into the constructor.
     */ async getDeployTransaction() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        let overrides = {};
        const fragment = this.interface.deploy;
        if (fragment.inputs.length + 1 === args.length) {
            overrides = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyOverrides"])(args.pop());
        }
        if (fragment.inputs.length !== args.length) {
            throw new Error("incorrect number of arguments to constructor");
        }
        const resolvedArgs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveArgs"])(this.runner, fragment.inputs, args);
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
            this.bytecode,
            this.interface.encodeDeploy(resolvedArgs)
        ]);
        return Object.assign({}, overrides, {
            data
        });
    }
    /**
     *  Resolves to the Contract deployed by passing %%args%% into the
     *  constructor.
     *
     *  This will resolve to the Contract before it has been deployed to the
     *  network, so the [[BaseContract-waitForDeployment]] should be used before
     *  sending any transactions to it.
     */ async deploy() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const tx = await this.getDeployTransaction(...args);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.runner && typeof this.runner.sendTransaction === "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
            operation: "sendTransaction"
        });
        const sentTx = await this.runner.sendTransaction(tx);
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAddress"])(sentTx);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseContract"](address, this.interface, this.runner, sentTx);
    }
    /**
     *  Return a new **ContractFactory** with the same ABI and bytecode,
     *  but connected to %%runner%%.
     */ connect(runner) {
        return new ContractFactory(this.interface, this.bytecode, runner);
    }
    /**
     *  Create a new **ContractFactory** from the standard Solidity JSON output.
     */ static fromSolidity(output, runner) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(output != null, "bad compiler output", "output", output);
        if (typeof output === "string") {
            output = JSON.parse(output);
        }
        const abi = output.abi;
        let bytecode = "";
        if (output.bytecode) {
            bytecode = output.bytecode;
        } else if (output.evm && output.evm.bytecode) {
            bytecode = output.evm.bytecode;
        }
        return new this(abi, bytecode, runner);
    }
    /**
     *  Create a new **ContractFactory** with %%abi%% and %%bytecode%%,
     *  optionally connected to %%runner%%.
     *
     *  The %%bytecode%% may be the ``bytecode`` property within the
     *  standard Solidity JSON output.
     */ constructor(abi, bytecode, runner){
        /**
     *  The Contract Interface.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "interface", void 0);
        /**
     *  The Contract deployment bytecode. Often called the initcode.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "bytecode", void 0);
        /**
     *  The ContractRunner to deploy the Contract as.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "runner", void 0);
        const iface = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"].from(abi);
        // Dereference Solidity bytecode objects and allow a missing `0x`-prefix
        if (bytecode instanceof Uint8Array) {
            bytecode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(bytecode));
        } else {
            if (typeof bytecode === "object") {
                bytecode = bytecode.object;
            }
            if (!bytecode.startsWith("0x")) {
                bytecode = "0x" + bytecode;
            }
            bytecode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(bytecode));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            bytecode,
            interface: iface,
            runner: runner || null
        });
    }
} //# sourceMappingURL=factory.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/crypto/hmac.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  An **HMAC** enables verification that a given key was used
 *  to authenticate a payload.
 *
 *  See: [[link-wiki-hmac]]
 *
 *  @_subsection: api/crypto:HMAC  [about-hmac]
 */ __turbopack_context__.s([
    "computeHmac",
    ()=>computeHmac
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$crypto$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/crypto-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
;
let locked = false;
const _computeHmac = function(algorithm, key, data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$crypto$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHmac"])(algorithm, key).update(data).digest();
};
let __computeHmac = _computeHmac;
function computeHmac(algorithm, _key, _data) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_key, "key");
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_data, "data");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(__computeHmac(algorithm, key, data));
}
computeHmac._ = _computeHmac;
computeHmac.lock = function() {
    locked = true;
};
computeHmac.register = function(func) {
    if (locked) {
        throw new Error("computeHmac is locked");
    }
    __computeHmac = func;
};
Object.freeze(computeHmac); //# sourceMappingURL=hmac.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/crypto/random.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  A **Cryptographically Secure Random Value** is one that has been
 *  generated with additional care take to prevent side-channels
 *  from allowing others to detect it and prevent others from through
 *  coincidence generate the same values.
 *
 *  @_subsection: api/crypto:Random Values  [about-crypto-random]
 */ __turbopack_context__.s([
    "randomBytes",
    ()=>randomBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$crypto$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/crypto-browser.js [app-client] (ecmascript)");
;
let locked = false;
const _randomBytes = function(length) {
    return new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$crypto$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(length));
};
let __randomBytes = _randomBytes;
function randomBytes(length) {
    return __randomBytes(length);
}
randomBytes._ = _randomBytes;
randomBytes.lock = function() {
    locked = true;
};
randomBytes.register = function(func) {
    if (locked) {
        throw new Error("randomBytes is locked");
    }
    __randomBytes = func;
};
Object.freeze(randomBytes); //# sourceMappingURL=random.js.map
}),
"[project]/frontend/node_modules/@noble/hashes/esm/ripemd160.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RIPEMD160",
    ()=>RIPEMD160,
    "ripemd160",
    ()=>ripemd160
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/_sha2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const Rho = /* @__PURE__ */ new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id = /* @__PURE__ */ Uint8Array.from({
    length: 16
}, (_, i)=>i);
const Pi = /* @__PURE__ */ Id.map((i)=>(9 * i + 5) % 16);
let idxL = [
    Id
];
let idxR = [
    Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    idxL,
    idxR
])j.push(j[i].map((k)=>Rho[k]));
const shifts = /* @__PURE__ */ [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const shiftsL = /* @__PURE__ */ idxL.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const shiftsR = /* @__PURE__ */ idxR.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const Kl = /* @__PURE__ */ new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr = /* @__PURE__ */ new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift)=>word << shift | word >>> 32 - shift;
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const BUF = /* @__PURE__ */ new Uint32Array(16);
class RIPEMD160 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA2"] {
    get() {
        const { h0, h1, h2, h3, h4 } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 0x67452301 | 0;
        this.h1 = 0xefcdab89 | 0;
        this.h2 = 0x98badcfe | 0;
        this.h3 = 0x10325476 | 0;
        this.h4 = 0xc3d2e1f0 | 0;
    }
}
const ripemd160 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new RIPEMD160()); //# sourceMappingURL=ripemd160.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/crypto/ripemd160.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ripemd160",
    ()=>ripemd160
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/ripemd160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
;
let locked = false;
const _ripemd160 = function(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"])(data);
};
let __ripemd160 = _ripemd160;
function ripemd160(_data) {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_data, "data");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(__ripemd160(data));
}
ripemd160._ = _ripemd160;
ripemd160.lock = function() {
    locked = true;
};
ripemd160.register = function(func) {
    if (locked) {
        throw new TypeError("ripemd160 is locked");
    }
    __ripemd160 = func;
};
Object.freeze(ripemd160); //# sourceMappingURL=ripemd160.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/crypto/pbkdf2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  A **Password-Based Key-Derivation Function** is designed to create
 *  a sequence of bytes suitible as a **key** from a human-rememberable
 *  password.
 *
 *  @_subsection: api/crypto:Passwords  [about-pbkdf]
 */ __turbopack_context__.s([
    "pbkdf2",
    ()=>pbkdf2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$crypto$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/crypto-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
;
let locked = false;
const _pbkdf2 = function(password, salt, iterations, keylen, algo) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$crypto$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2Sync"])(password, salt, iterations, keylen, algo);
};
let __pbkdf2 = _pbkdf2;
function pbkdf2(_password, _salt, iterations, keylen, algo) {
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_password, "password");
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_salt, "salt");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(__pbkdf2(password, salt, iterations, keylen, algo));
}
pbkdf2._ = _pbkdf2;
pbkdf2.lock = function() {
    locked = true;
};
pbkdf2.register = function(func) {
    if (locked) {
        throw new Error("pbkdf2 is locked");
    }
    __pbkdf2 = func;
};
Object.freeze(pbkdf2); //# sourceMappingURL=pbkdf2.js.map
}),
"[project]/frontend/node_modules/@noble/hashes/esm/scrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrypt",
    ()=>scrypt,
    "scryptAsync",
    ()=>scryptAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/_assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
// RFC 7914 Scrypt KDF
// Left rotate for uint32
const rotl = (a, b)=>a << b | a >>> 32 - b;
// The main Scrypt loop: uses Salsa extensively.
// Six versions of the function were tried, this is the fastest one.
// prettier-ignore
function XorAndSalsa(prev, pi, input, ii, out, oi) {
    // Based on https://cr.yp.to/salsa20.html
    // Xor blocks
    let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
    let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
    let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
    let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
    let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
    let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
    let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
    let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
    // Save state to temporary variables (salsa)
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    // Main loop (salsa)
    for(let i = 0; i < 8; i += 2){
        x04 ^= rotl(x00 + x12 | 0, 7);
        x08 ^= rotl(x04 + x00 | 0, 9);
        x12 ^= rotl(x08 + x04 | 0, 13);
        x00 ^= rotl(x12 + x08 | 0, 18);
        x09 ^= rotl(x05 + x01 | 0, 7);
        x13 ^= rotl(x09 + x05 | 0, 9);
        x01 ^= rotl(x13 + x09 | 0, 13);
        x05 ^= rotl(x01 + x13 | 0, 18);
        x14 ^= rotl(x10 + x06 | 0, 7);
        x02 ^= rotl(x14 + x10 | 0, 9);
        x06 ^= rotl(x02 + x14 | 0, 13);
        x10 ^= rotl(x06 + x02 | 0, 18);
        x03 ^= rotl(x15 + x11 | 0, 7);
        x07 ^= rotl(x03 + x15 | 0, 9);
        x11 ^= rotl(x07 + x03 | 0, 13);
        x15 ^= rotl(x11 + x07 | 0, 18);
        x01 ^= rotl(x00 + x03 | 0, 7);
        x02 ^= rotl(x01 + x00 | 0, 9);
        x03 ^= rotl(x02 + x01 | 0, 13);
        x00 ^= rotl(x03 + x02 | 0, 18);
        x06 ^= rotl(x05 + x04 | 0, 7);
        x07 ^= rotl(x06 + x05 | 0, 9);
        x04 ^= rotl(x07 + x06 | 0, 13);
        x05 ^= rotl(x04 + x07 | 0, 18);
        x11 ^= rotl(x10 + x09 | 0, 7);
        x08 ^= rotl(x11 + x10 | 0, 9);
        x09 ^= rotl(x08 + x11 | 0, 13);
        x10 ^= rotl(x09 + x08 | 0, 18);
        x12 ^= rotl(x15 + x14 | 0, 7);
        x13 ^= rotl(x12 + x15 | 0, 9);
        x14 ^= rotl(x13 + x12 | 0, 13);
        x15 ^= rotl(x14 + x13 | 0, 18);
    }
    // Write output (salsa)
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r) {
    // The block B is r 128-byte chunks (which is equivalent of 2r 64-byte chunks)
    let head = oi + 0;
    let tail = oi + 16 * r;
    for(let i = 0; i < 16; i++)out[tail + i] = input[ii + (2 * r - 1) * 16 + i]; // X ← B[2r−1]
    for(let i = 0; i < r; i++, head += 16, ii += 16){
        // We write odd & even Yi at same time. Even: 0bXXXXX0 Odd:  0bXXXXX1
        XorAndSalsa(out, tail, input, ii, out, head); // head[i] = Salsa(blockIn[2*i] ^ tail[i-1])
        if (i > 0) tail += 16; // First iteration overwrites tmp value in tail
        XorAndSalsa(out, head, input, ii += 16, out, tail); // tail[i] = Salsa(blockIn[2*i+1] ^ head[i])
    }
}
// Common prologue and epilogue for sync/async functions
function scryptInit(password, salt, _opts) {
    // Maxmem - 1GB+1KB by default
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10,
        maxmem: 1024 ** 3 + 1024
    }, _opts);
    const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(N);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(r);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(p);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(dkLen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(asyncTick);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(maxmem);
    if (onProgress !== undefined && typeof onProgress !== 'function') throw new Error('progressCb should be function');
    const blockSize = 128 * r;
    const blockSize32 = blockSize / 4;
    if (N <= 1 || (N & N - 1) !== 0 || N >= 2 ** (blockSize / 8) || N > 2 ** 32) {
        // NOTE: we limit N to be less than 2**32 because of 32 bit variant of Integrify function
        // There is no JS engines that allows alocate more than 4GB per single Uint8Array for now, but can change in future.
        throw new Error('Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32');
    }
    if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
        throw new Error('Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)');
    }
    if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
        throw new Error('Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32');
    }
    const memUsed = blockSize * (N + p);
    if (memUsed > maxmem) {
        throw new Error("Scrypt: parameters too large, ".concat(memUsed, " (128 * r * (N + p)) > ").concat(maxmem, " (maxmem)"));
    }
    // [B0...Bp−1] ← PBKDF2HMAC-SHA256(Passphrase, Salt, 1, blockSize*ParallelizationFactor)
    // Since it has only one iteration there is no reason to use async variant
    const B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"], password, salt, {
        c: 1,
        dkLen: blockSize * p
    });
    const B32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(B);
    // Re-used between parallel iterations. Array(iterations) of B
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize * N));
    const tmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize));
    let blockMixCb = ()=>{};
    if (onProgress) {
        const totalBlockMix = 2 * N * p;
        // Invoke callback if progress changes from 10.01 to 10.02
        // Allows to draw smooth progress bar on up to 8K screen
        const callbackPer = Math.max(Math.floor(totalBlockMix / 10000), 1);
        let blockMixCnt = 0;
        blockMixCb = ()=>{
            blockMixCnt++;
            if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix)) onProgress(blockMixCnt / totalBlockMix);
        };
    }
    return {
        N,
        r,
        p,
        dkLen,
        blockSize32,
        V,
        B32,
        B,
        tmp,
        blockMixCb,
        asyncTick
    };
}
function scryptOutput(password, dkLen, B, V, tmp) {
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"], password, B, {
        c: 1,
        dkLen
    });
    B.fill(0);
    V.fill(0);
    tmp.fill(0);
    return res;
}
function scrypt(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        for(let i = 0, pos = 0; i < N - 1; i++){
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        }
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        for(let i = 0; i < N; i++){
            // First u32 of the last 64-byte block (u32 is LE)
            const j = B32[Pi + blockSize32 - 16] % N; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        }
    }
    return scryptOutput(password, dkLen, B, V, tmp);
}
async function scryptAsync(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        let pos = 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncLoop"])(N - 1, asyncTick, ()=>{
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        });
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncLoop"])(N, asyncTick, ()=>{
            // First u32 of the last 64-byte block (u32 is LE)
            const j = B32[Pi + blockSize32 - 16] % N; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        });
    }
    return scryptOutput(password, dkLen, B, V, tmp);
} //# sourceMappingURL=scrypt.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/crypto/scrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrypt",
    ()=>scrypt,
    "scryptSync",
    ()=>scryptSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/scrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
;
let lockedSync = false, lockedAsync = false;
const _scryptAsync = async function(passwd, salt, N, r, p, dkLen, onProgress) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptAsync"])(passwd, salt, {
        N,
        r,
        p,
        dkLen,
        onProgress
    });
};
const _scryptSync = function(passwd, salt, N, r, p, dkLen) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrypt"])(passwd, salt, {
        N,
        r,
        p,
        dkLen
    });
};
let __scryptAsync = _scryptAsync;
let __scryptSync = _scryptSync;
async function scrypt(_passwd, _salt, N, r, p, dkLen, progress) {
    const passwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_passwd, "passwd");
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_salt, "salt");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(await __scryptAsync(passwd, salt, N, r, p, dkLen, progress));
}
scrypt._ = _scryptAsync;
scrypt.lock = function() {
    lockedAsync = true;
};
scrypt.register = function(func) {
    if (lockedAsync) {
        throw new Error("scrypt is locked");
    }
    __scryptAsync = func;
};
Object.freeze(scrypt);
function scryptSync(_passwd, _salt, N, r, p, dkLen) {
    const passwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_passwd, "passwd");
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_salt, "salt");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(__scryptSync(passwd, salt, N, r, p, dkLen));
}
scryptSync._ = _scryptSync;
scryptSync.lock = function() {
    lockedSync = true;
};
scryptSync.register = function(func) {
    if (lockedSync) {
        throw new Error("scryptSync is locked");
    }
    __scryptSync = func;
};
Object.freeze(scryptSync); //# sourceMappingURL=scrypt.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/crypto/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 *  A fundamental building block of Ethereum is the underlying
 *  cryptographic primitives.
 *
 *  @_section: api/crypto:Cryptographic Functions   [about-crypto]
 */ __turbopack_context__.s([
    "lock",
    ()=>lock
]);
// We import all these so we can export lock()
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/hmac.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/ripemd160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/scrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/sha2.js [app-client] (ecmascript)");
null;
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
/**
 *  Once called, prevents any future change to the underlying cryptographic
 *  primitives using the ``.register`` feature for hooks.
 */ function lock() {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHmac"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrypt"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptSync"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha512"].lock();
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"].lock();
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/hash/authorization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashAuthorization",
    ()=>hashAuthorization,
    "verifyAuthorization",
    ()=>verifyAuthorization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/rlp-encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
;
;
;
;
function hashAuthorization(auth) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof auth.address === "string", "invalid address for hashAuthorization", "auth.address", auth);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        "0x05",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])([
            auth.chainId != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(auth.chainId) : "0x",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(auth.address),
            auth.nonce != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(auth.nonce) : "0x"
        ])
    ]));
}
function verifyAuthorization(auth, sig) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"])(hashAuthorization(auth), sig);
} //# sourceMappingURL=authorization.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/hash/message.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashMessage",
    ()=>hashMessage,
    "verifyMessage",
    ()=>verifyMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/constants/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
;
;
;
;
function hashMessage(message) {
    if (typeof message === "string") {
        message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(message);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessagePrefix"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(String(message.length)),
        message
    ]));
}
function verifyMessage(message, sig) {
    const digest = hashMessage(message);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"])(digest, sig);
} //# sourceMappingURL=message.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/hash/solidity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solidityPacked",
    ()=>solidityPacked,
    "solidityPackedKeccak256",
    ()=>solidityPackedKeccak256,
    "solidityPackedSha256",
    ()=>solidityPackedSha256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/sha2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
;
;
;
const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
function _pack(type, value, isArray) {
    switch(type){
        case "address":
            if (isArray) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(value, 32));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(value));
        case "string":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(value);
        case "bytes":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(value);
        case "bool":
            value = !!value ? "0x01" : "0x00";
            if (isArray) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(value, 32));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(value);
    }
    let match = type.match(regexNumber);
    if (match) {
        let signed = match[1] === "int";
        let size = parseInt(match[2] || "256");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((!match[2] || match[2] === String(size)) && size % 8 === 0 && size !== 0 && size <= 256, "invalid number type", "type", type);
        if (isArray) {
            size = 256;
        }
        if (signed) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTwos"])(value, size);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(value), size / 8));
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(String(size) === match[1] && size !== 0 && size <= 32, "invalid bytes type", "type", type);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLength"])(value) === size, "invalid value for ".concat(type), "value", value);
        if (isArray) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadBytes"])(value, 32));
        }
        return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
        const baseType = match[1];
        const count = parseInt(match[2] || String(value.length));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(count === value.length, "invalid array length for ".concat(type), "value", value);
        const result = [];
        value.forEach(function(value) {
            result.push(_pack(baseType, value, true));
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(result));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid type", "type", type);
}
function solidityPacked(types, values) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(types.length === values.length, "wrong number of values; expected ${ types.length }", "values", values);
    const tight = [];
    types.forEach(function(type, index) {
        tight.push(_pack(type, values[index]));
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(tight));
}
function solidityPackedKeccak256(types, values) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(solidityPacked(types, values));
}
function solidityPackedSha256(types, values) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(solidityPacked(types, values));
} //# sourceMappingURL=solidity.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  There are many awesome community services that provide Ethereum
 *  nodes both for developers just starting out and for large-scale
 *  communities.
 *
 *  @_section: api/providers/thirdparty: Community Providers  [thirdparty]
 */ // Show the throttle message only once per service
__turbopack_context__.s([
    "showThrottleMessage",
    ()=>showThrottleMessage
]);
const shown = new Set();
function showThrottleMessage(service) {
    if (shown.has(service)) {
        return;
    }
    shown.add(service);
    console.log("========= NOTICE =========");
    console.log("Request-Rate Exceeded for ".concat(service, " (this message will not be repeated)"));
    console.log("");
    console.log("The default API keys for each service are provided as a highly-throttled,");
    console.log("community resource for low-traffic projects and early prototyping.");
    console.log("");
    console.log("While your application will continue to function, we highly recommended");
    console.log("signing up for your own API keys to improve performance, increase your");
    console.log("request rate/limit and enable other perks, such as metrics and advanced APIs.");
    console.log("");
    console.log("For more details: https:/\/docs.ethers.org/api-keys/");
    console.log("==========================");
} //# sourceMappingURL=community.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-ankr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-ankr]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Goerli Testnet (``goerli``)
 *  - Sepolia Testnet (``sepolia``)
 *  - Arbitrum (``arbitrum``)
 *  - Base (``base``)
 *  - Base Goerlia Testnet (``base-goerli``)
 *  - Base Sepolia Testnet (``base-sepolia``)
 *  - BNB (``bnb``)
 *  - BNB Testnet (``bnbt``)
 *  - Optimism (``optimism``)
 *  - Optimism Goerli Testnet (``optimism-goerli``)
 *  - Optimism Sepolia Testnet (``optimism-sepolia``)
 *  - Polygon (``matic``)
 *  - Polygon Mumbai Testnet (``matic-mumbai``)
 *
 *  @_subsection: api/providers/thirdparty:Ankr  [providers-ankr]
 */ __turbopack_context__.s([
    "AnkrProvider",
    ()=>AnkrProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
const defaultApiKey = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function getHost(name) {
    switch(name){
        case "mainnet":
            return "rpc.ankr.com/eth";
        case "goerli":
            return "rpc.ankr.com/eth_goerli";
        case "sepolia":
            return "rpc.ankr.com/eth_sepolia";
        case "arbitrum":
            return "rpc.ankr.com/arbitrum";
        case "base":
            return "rpc.ankr.com/base";
        case "base-goerli":
            return "rpc.ankr.com/base_goerli";
        case "base-sepolia":
            return "rpc.ankr.com/base_sepolia";
        case "bnb":
            return "rpc.ankr.com/bsc";
        case "bnbt":
            return "rpc.ankr.com/bsc_testnet_chapel";
        case "matic":
            return "rpc.ankr.com/polygon";
        case "matic-mumbai":
            return "rpc.ankr.com/polygon_mumbai";
        case "optimism":
            return "rpc.ankr.com/optimism";
        case "optimism-goerli":
            return "rpc.ankr.com/optimism_testnet";
        case "optimism-sepolia":
            return "rpc.ankr.com/optimism_sepolia";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class AnkrProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new AnkrProvider(chainId, this.apiKey);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    /**
     *  Returns a prepared request for connecting to %%network%% with
     *  %%apiKey%%.
     */ static getRequest(network, apiKey) {
        if (apiKey == null) {
            apiKey = defaultApiKey;
        }
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"]("https://".concat(getHost(network.name), "/").concat(apiKey));
        request.allowGzip = true;
        if (apiKey === defaultApiKey) {
            request.retryFunc = async (request, response, attempt)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("AnkrProvider");
                return true;
            };
        }
        return request;
    }
    getRpcError(payload, error) {
        if (payload.method === "eth_sendRawTransaction") {
            if (error && error.error && error.error.message === "INTERNAL_ERROR: could not replace existing tx") {
                error.error.message = "replacement transaction underpriced";
            }
        }
        return super.getRpcError(payload, error);
    }
    isCommunityResource() {
        return this.apiKey === defaultApiKey;
    }
    /**
     *  Create a new **AnkrProvider**.
     *
     *  By default connecting to ``mainnet`` with a highly throttled
     *  API key.
     */ constructor(_network, apiKey){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (apiKey == null) {
            apiKey = defaultApiKey;
        }
        // Ankr does not support filterId, so we force polling
        const options = {
            polling: true,
            staticNetwork: network
        };
        const request = AnkrProvider.getRequest(network, apiKey);
        super(request, network, options), /**
     *  The API key for the Ankr connection.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            apiKey
        });
    }
} //# sourceMappingURL=provider-ankr.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-alchemy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-alchemy]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Goerli Testnet (``goerli``)
 *  - Sepolia Testnet (``sepolia``)
 *  - Arbitrum (``arbitrum``)
 *  - Arbitrum Goerli Testnet (``arbitrum-goerli``)
 *  - Arbitrum Sepolia Testnet (``arbitrum-sepolia``)
 *  - Base (``base``)
 *  - Base Goerlia Testnet (``base-goerli``)
 *  - Base Sepolia Testnet (``base-sepolia``)
 *  - Optimism (``optimism``)
 *  - Optimism Goerli Testnet (``optimism-goerli``)
 *  - Optimism Sepolia Testnet (``optimism-sepolia``)
 *  - Polygon (``matic``)
 *  - Polygon Amoy Testnet (``matic-amoy``)
 *  - Polygon Mumbai Testnet (``matic-mumbai``)
 *
 *  @_subsection: api/providers/thirdparty:Alchemy  [providers-alchemy]
 */ __turbopack_context__.s([
    "AlchemyProvider",
    ()=>AlchemyProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
const defaultApiKey = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
function getHost(name) {
    switch(name){
        case "mainnet":
            return "eth-mainnet.alchemyapi.io";
        case "goerli":
            return "eth-goerli.g.alchemy.com";
        case "sepolia":
            return "eth-sepolia.g.alchemy.com";
        case "arbitrum":
            return "arb-mainnet.g.alchemy.com";
        case "arbitrum-goerli":
            return "arb-goerli.g.alchemy.com";
        case "arbitrum-sepolia":
            return "arb-sepolia.g.alchemy.com";
        case "base":
            return "base-mainnet.g.alchemy.com";
        case "base-goerli":
            return "base-goerli.g.alchemy.com";
        case "base-sepolia":
            return "base-sepolia.g.alchemy.com";
        case "matic":
            return "polygon-mainnet.g.alchemy.com";
        case "matic-amoy":
            return "polygon-amoy.g.alchemy.com";
        case "matic-mumbai":
            return "polygon-mumbai.g.alchemy.com";
        case "optimism":
            return "opt-mainnet.g.alchemy.com";
        case "optimism-goerli":
            return "opt-goerli.g.alchemy.com";
        case "optimism-sepolia":
            return "opt-sepolia.g.alchemy.com";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class AlchemyProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new AlchemyProvider(chainId, this.apiKey);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    async _perform(req) {
        // https://docs.alchemy.com/reference/trace-transaction
        if (req.method === "getTransactionResult") {
            const { trace, tx } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
                trace: this.send("trace_transaction", [
                    req.hash
                ]),
                tx: this.getTransaction(req.hash)
            });
            if (trace == null || tx == null) {
                return null;
            }
            let data;
            let error = false;
            try {
                data = trace[0].result.output;
                error = trace[0].error === "Reverted";
            } catch (error) {}
            if (data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!error, "an error occurred during transaction executions", "CALL_EXCEPTION", {
                    action: "getTransactionResult",
                    data,
                    reason: null,
                    transaction: tx,
                    invocation: null,
                    revert: null // @TODO
                });
                return data;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "could not parse trace result", "BAD_DATA", {
                value: trace
            });
        }
        return await super._perform(req);
    }
    isCommunityResource() {
        return this.apiKey === defaultApiKey;
    }
    static getRequest(network, apiKey) {
        if (apiKey == null) {
            apiKey = defaultApiKey;
        }
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"]("https://".concat(getHost(network.name), "/v2/").concat(apiKey));
        request.allowGzip = true;
        if (apiKey === defaultApiKey) {
            request.retryFunc = async (request, response, attempt)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("alchemy");
                return true;
            };
        }
        return request;
    }
    constructor(_network, apiKey){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (apiKey == null) {
            apiKey = defaultApiKey;
        }
        const request = AlchemyProvider.getRequest(network, apiKey);
        super(request, network, {
            staticNetwork: network
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            apiKey
        });
    }
} //# sourceMappingURL=provider-alchemy.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-chainstack.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-chainstack]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Arbitrum (``arbitrum``)
 *  - BNB Smart Chain Mainnet (``bnb``)
 *  - Polygon (``matic``)
 *
 *  @_subsection: api/providers/thirdparty:Chainstack  [providers-chainstack]
 */ __turbopack_context__.s([
    "ChainstackProvider",
    ()=>ChainstackProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
function getApiKey(name) {
    switch(name){
        case "mainnet":
            return "39f1d67cedf8b7831010a665328c9197";
        case "arbitrum":
            return "0550c209db33c3abf4cc927e1e18cea1";
        case "bnb":
            return "98b5a77e531614387366f6fc5da097f8";
        case "matic":
            return "cd9d4d70377471aa7c142ec4a4205249";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
function getHost(name) {
    switch(name){
        case "mainnet":
            return "ethereum-mainnet.core.chainstack.com";
        case "arbitrum":
            return "arbitrum-mainnet.core.chainstack.com";
        case "bnb":
            return "bsc-mainnet.core.chainstack.com";
        case "matic":
            return "polygon-mainnet.core.chainstack.com";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class ChainstackProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new ChainstackProvider(chainId, this.apiKey);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    isCommunityResource() {
        return this.apiKey === getApiKey(this._network.name);
    }
    /**
     *  Returns a prepared request for connecting to %%network%%
     *  with %%apiKey%% and %%projectSecret%%.
     */ static getRequest(network, apiKey) {
        if (apiKey == null) {
            apiKey = getApiKey(network.name);
        }
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"]("https://".concat(getHost(network.name), "/").concat(apiKey));
        request.allowGzip = true;
        if (apiKey === getApiKey(network.name)) {
            request.retryFunc = async (request, response, attempt)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("ChainstackProvider");
                return true;
            };
        }
        return request;
    }
    /**
     *  Creates a new **ChainstackProvider**.
     */ constructor(_network, apiKey){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (apiKey == null) {
            apiKey = getApiKey(network.name);
        }
        const request = ChainstackProvider.getRequest(network, apiKey);
        super(request, network, {
            staticNetwork: network
        }), /**
     *  The API key for the Chainstack connection.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            apiKey
        });
    }
} //# sourceMappingURL=provider-chainstack.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-cloudflare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  About Cloudflare
 *
 *  @_subsection: api/providers/thirdparty:Cloudflare  [providers-cloudflare]
 */ __turbopack_context__.s([
    "CloudflareProvider",
    ()=>CloudflareProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
class CloudflareProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    constructor(_network){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(network.name === "mainnet", "unsupported network", "network", _network);
        super("https:/\/cloudflare-eth.com/", network, {
            staticNetwork: network
        });
    }
} //# sourceMappingURL=provider-cloudflare.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-etherscan.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-etherscan]] provides a third-party service for connecting to
 *  various blockchains over a combination of JSON-RPC and custom API
 *  endpoints.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Goerli Testnet (``goerli``)
 *  - Sepolia Testnet (``sepolia``)
 *  - Holesky Testnet (``holesky``)
 *  - Arbitrum (``arbitrum``)
 *  - Arbitrum Goerli Testnet (``arbitrum-goerli``)
 *  - Base (``base``)
 *  - Base Sepolia Testnet (``base-sepolia``)
 *  - BNB Smart Chain Mainnet (``bnb``)
 *  - BNB Smart Chain Testnet (``bnbt``)
 *  - Optimism (``optimism``)
 *  - Optimism Goerli Testnet (``optimism-goerli``)
 *  - Polygon (``matic``)
 *  - Polygon Mumbai Testnet (``matic-mumbai``)
 *  - Polygon Amoy Testnet (``matic-amoy``)
 *
 *  @_subsection api/providers/thirdparty:Etherscan  [providers-etherscan]
 */ __turbopack_context__.s([
    "EtherscanPlugin",
    ()=>EtherscanPlugin,
    "EtherscanProvider",
    ()=>EtherscanProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/abi-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/plugins-network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
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
const THROTTLE = 2000;
function isPromise(value) {
    return value && typeof value.then === "function";
}
const EtherscanPluginId = "org.ethers.plugins.provider.Etherscan";
class EtherscanPlugin extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkPlugin"] {
    clone() {
        return new EtherscanPlugin(this.baseUrl);
    }
    /**
     *  Creates a new **EtherscanProvider** which will use
     *  %%baseUrl%%.
     */ constructor(baseUrl){
        super(EtherscanPluginId), /**
     *  The Etherscan API base URL.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "baseUrl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            baseUrl
        });
    }
}
const skipKeys = [
    "enableCcipRead"
];
let nextId = 1;
var _plugin = /*#__PURE__*/ new WeakMap();
class EtherscanProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractProvider"] {
    /**
     *  Returns the base URL.
     *
     *  If an [[EtherscanPlugin]] is configured on the
     *  [[EtherscanBaseProvider_network]], returns the plugin's
     *  baseUrl.
     *
     *  Deprecated; for Etherscan v2 the base is no longer a simply
     *  host, but instead a URL including a chainId parameter. Changing
     *  this to return a URL prefix could break some libraries, so it
     *  is left intact but will be removed in the future as it is unused.
     */ getBaseUrl() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugin)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugin).baseUrl;
        }
        switch(this.network.name){
            case "mainnet":
                return "https:/\/api.etherscan.io";
            case "goerli":
                return "https:/\/api-goerli.etherscan.io";
            case "sepolia":
                return "https:/\/api-sepolia.etherscan.io";
            case "holesky":
                return "https:/\/api-holesky.etherscan.io";
            case "arbitrum":
                return "https:/\/api.arbiscan.io";
            case "arbitrum-goerli":
                return "https:/\/api-goerli.arbiscan.io";
            case "base":
                return "https:/\/api.basescan.org";
            case "base-sepolia":
                return "https:/\/api-sepolia.basescan.org";
            case "bnb":
                return "https:/\/api.bscscan.com";
            case "bnbt":
                return "https:/\/api-testnet.bscscan.com";
            case "matic":
                return "https:/\/api.polygonscan.com";
            case "matic-amoy":
                return "https:/\/api-amoy.polygonscan.com";
            case "matic-mumbai":
                return "https:/\/api-testnet.polygonscan.com";
            case "optimism":
                return "https:/\/api-optimistic.etherscan.io";
            case "optimism-goerli":
                return "https:/\/api-goerli-optimistic.etherscan.io";
            default:
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", this.network);
    }
    /**
     *  Returns the URL for the %%module%% and %%params%%.
     */ getUrl(module, params) {
        let query = Object.keys(params).reduce((accum, key)=>{
            const value = params[key];
            if (value != null) {
                accum += "&".concat(key, "=").concat(value);
            }
            return accum;
        }, "");
        if (this.apiKey) {
            query += "&apikey=".concat(this.apiKey);
        }
        return "https://api.etherscan.io/v2/api?chainid=".concat(this.network.chainId, "&module=").concat(module).concat(query);
    }
    /**
     *  Returns the URL for using POST requests.
     */ getPostUrl() {
        return "https://api.etherscan.io/v2/api?chainid=".concat(this.network.chainId);
    }
    /**
     *  Returns the parameters for using POST requests.
     */ getPostData(module, params) {
        params.module = module;
        params.apikey = this.apiKey;
        params.chainid = this.network.chainId;
        return params;
    }
    async detectNetwork() {
        return this.network;
    }
    /**
     *  Resolves to the result of calling %%module%% with %%params%%.
     *
     *  If %%post%%, the request is made as a POST request.
     */ async fetch(module, params, post) {
        const id = nextId++;
        const url = post ? this.getPostUrl() : this.getUrl(module, params);
        const payload = post ? this.getPostData(module, params) : null;
        this.emit("debug", {
            action: "sendRequest",
            id,
            url,
            payload: payload
        });
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"](url);
        request.setThrottleParams({
            slotInterval: 1000
        });
        request.retryFunc = (req, resp, attempt)=>{
            if (this.isCommunityResource()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("Etherscan");
            }
            return Promise.resolve(true);
        };
        request.processFunc = async (request, response)=>{
            const result = response.hasBody() ? JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8String"])(response.body)) : {};
            const throttle = (typeof result.result === "string" ? result.result : "").toLowerCase().indexOf("rate limit") >= 0;
            if (module === "proxy") {
                // This JSON response indicates we are being throttled
                if (result && result.status == 0 && result.message == "NOTOK" && throttle) {
                    this.emit("debug", {
                        action: "receiveError",
                        id,
                        reason: "proxy-NOTOK",
                        error: result
                    });
                    response.throwThrottleError(result.result, THROTTLE);
                }
            } else {
                if (throttle) {
                    this.emit("debug", {
                        action: "receiveError",
                        id,
                        reason: "null result",
                        error: result.result
                    });
                    response.throwThrottleError(result.result, THROTTLE);
                }
            }
            return response;
        };
        if (payload) {
            request.setHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
            request.body = Object.keys(payload).map((k)=>"".concat(k, "=").concat(payload[k])).join("&");
        }
        const response = await request.send();
        try {
            response.assertOk();
        } catch (error) {
            this.emit("debug", {
                action: "receiveError",
                id,
                error,
                reason: "assertOk"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "response error", "SERVER_ERROR", {
                request,
                response
            });
        }
        if (!response.hasBody()) {
            this.emit("debug", {
                action: "receiveError",
                id,
                error: "missing body",
                reason: "null body"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "missing response", "SERVER_ERROR", {
                request,
                response
            });
        }
        const result = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8String"])(response.body));
        if (module === "proxy") {
            if (result.jsonrpc != "2.0") {
                this.emit("debug", {
                    action: "receiveError",
                    id,
                    result,
                    reason: "invalid JSON-RPC"
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "invalid JSON-RPC response (missing jsonrpc='2.0')", "SERVER_ERROR", {
                    request,
                    response,
                    info: {
                        result
                    }
                });
            }
            if (result.error) {
                this.emit("debug", {
                    action: "receiveError",
                    id,
                    result,
                    reason: "JSON-RPC error"
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "error response", "SERVER_ERROR", {
                    request,
                    response,
                    info: {
                        result
                    }
                });
            }
            this.emit("debug", {
                action: "receiveRequest",
                id,
                result
            });
            return result.result;
        } else {
            // getLogs, getHistory have weird success responses
            if (result.status == 0 && (result.message === "No records found" || result.message === "No transactions found")) {
                this.emit("debug", {
                    action: "receiveRequest",
                    id,
                    result
                });
                return result.result;
            }
            if (result.status != 1 || typeof result.message === "string" && !result.message.match(/^OK/)) {
                this.emit("debug", {
                    action: "receiveError",
                    id,
                    result
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "error response", "SERVER_ERROR", {
                    request,
                    response,
                    info: {
                        result
                    }
                });
            }
            this.emit("debug", {
                action: "receiveRequest",
                id,
                result
            });
            return result.result;
        }
    }
    /**
     *  Returns %%transaction%% normalized for the Etherscan API.
     */ _getTransactionPostData(transaction) {
        const result = {};
        for(let key in transaction){
            if (skipKeys.indexOf(key) >= 0) {
                continue;
            }
            if (transaction[key] == null) {
                continue;
            }
            let value = transaction[key];
            if (key === "type" && value === 0) {
                continue;
            }
            if (key === "blockTag" && value === "latest") {
                continue;
            }
            // Quantity-types require no leading zero, unless 0
            if (({
                type: true,
                gasLimit: true,
                gasPrice: true,
                maxFeePerGs: true,
                maxPriorityFeePerGas: true,
                nonce: true,
                value: true
            })[key]) {
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(value);
            } else if (key === "accessList") {
                value = "[" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(value).map((set)=>{
                    return '{address:"'.concat(set.address, '",storageKeys:["').concat(set.storageKeys.join('","'), '"]}');
                }).join(",") + "]";
            } else if (key === "blobVersionedHashes") {
                if (value.length === 0) {
                    continue;
                }
                // @TODO: update this once the API supports blobs
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "Etherscan API does not support blobVersionedHashes", "UNSUPPORTED_OPERATION", {
                    operation: "_getTransactionPostData",
                    info: {
                        transaction
                    }
                });
            } else {
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(value);
            }
            result[key] = value;
        }
        return result;
    }
    /**
     *  Throws the normalized Etherscan error.
     */ _checkError(req, error, transaction) {
        // Pull any message out if, possible
        let message = "";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "SERVER_ERROR")) {
            // Check for an error emitted by a proxy call
            try {
                message = error.info.result.error.message;
            } catch (e) {}
            if (!message) {
                try {
                    message = error.info.message;
                } catch (e) {}
            }
        }
        if (req.method === "estimateGas") {
            if (!message.match(/revert/i) && message.match(/insufficient funds/i)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "insufficient funds", "INSUFFICIENT_FUNDS", {
                    transaction: req.transaction
                });
            }
        }
        if (req.method === "call" || req.method === "estimateGas") {
            if (message.match(/execution reverted/i)) {
                let data = "";
                try {
                    data = error.info.result.error.data;
                } catch (error) {}
                const e = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiCoder"].getBuiltinCallException(req.method, req.transaction, data);
                e.info = {
                    request: req,
                    error
                };
                throw e;
            }
        }
        if (message) {
            if (req.method === "broadcastTransaction") {
                const transaction = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].from(req.signedTransaction);
                if (message.match(/replacement/i) && message.match(/underpriced/i)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                        transaction
                    });
                }
                if (message.match(/insufficient funds/)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                        transaction
                    });
                }
                if (message.match(/same hash was already imported|transaction nonce is too low|nonce too low/)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "nonce has already been used", "NONCE_EXPIRED", {
                        transaction
                    });
                }
            }
        }
        // Something we could not process
        throw error;
    }
    async _detectNetwork() {
        return this.network;
    }
    async _perform(req) {
        switch(req.method){
            case "chainId":
                return this.network.chainId;
            case "getBlockNumber":
                return this.fetch("proxy", {
                    action: "eth_blockNumber"
                });
            case "getGasPrice":
                return this.fetch("proxy", {
                    action: "eth_gasPrice"
                });
            case "getPriorityFee":
                // This is temporary until Etherscan completes support
                if (this.network.name === "mainnet") {
                    return "1000000000";
                } else if (this.network.name === "optimism") {
                    return "1000000";
                } else {
                    throw new Error("fallback onto the AbstractProvider default");
                }
            /* Working with Etherscan to get this added:
            try {
                const test = await this.fetch("proxy", {
                    action: "eth_maxPriorityFeePerGas"
                });
                console.log(test);
                return test;
            } catch (e) {
                console.log("DEBUG", e);
                throw e;
            }
            */ /* This might be safe; but due to rounding neither myself
               or Etherscan are necessarily comfortable with this. :)
            try {
                const result = await this.fetch("gastracker", { action: "gasoracle" });
                console.log(result);
                const gasPrice = parseUnits(result.SafeGasPrice, "gwei");
                const baseFee = parseUnits(result.suggestBaseFee, "gwei");
                const priorityFee = gasPrice - baseFee;
                if (priorityFee < 0) { throw new Error("negative priority fee; defer to abstract provider default"); }
                return priorityFee;
            } catch (error) {
                console.log("DEBUG", error);
                throw error;
            }
            */ case "getBalance":
                // Returns base-10 result
                return this.fetch("account", {
                    action: "balance",
                    address: req.address,
                    tag: req.blockTag
                });
            case "getTransactionCount":
                return this.fetch("proxy", {
                    action: "eth_getTransactionCount",
                    address: req.address,
                    tag: req.blockTag
                });
            case "getCode":
                return this.fetch("proxy", {
                    action: "eth_getCode",
                    address: req.address,
                    tag: req.blockTag
                });
            case "getStorage":
                return this.fetch("proxy", {
                    action: "eth_getStorageAt",
                    address: req.address,
                    position: req.position,
                    tag: req.blockTag
                });
            case "broadcastTransaction":
                return this.fetch("proxy", {
                    action: "eth_sendRawTransaction",
                    hex: req.signedTransaction
                }, true).catch((error)=>{
                    return this._checkError(req, error, req.signedTransaction);
                });
            case "getBlock":
                if ("blockTag" in req) {
                    return this.fetch("proxy", {
                        action: "eth_getBlockByNumber",
                        tag: req.blockTag,
                        boolean: req.includeTransactions ? "true" : "false"
                    });
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "getBlock by blockHash not supported by Etherscan", "UNSUPPORTED_OPERATION", {
                    operation: "getBlock(blockHash)"
                });
            case "getTransaction":
                return this.fetch("proxy", {
                    action: "eth_getTransactionByHash",
                    txhash: req.hash
                });
            case "getTransactionReceipt":
                return this.fetch("proxy", {
                    action: "eth_getTransactionReceipt",
                    txhash: req.hash
                });
            case "call":
                {
                    if (req.blockTag !== "latest") {
                        throw new Error("EtherscanProvider does not support blockTag for call");
                    }
                    const postData = this._getTransactionPostData(req.transaction);
                    postData.module = "proxy";
                    postData.action = "eth_call";
                    try {
                        return await this.fetch("proxy", postData, true);
                    } catch (error) {
                        return this._checkError(req, error, req.transaction);
                    }
                }
            case "estimateGas":
                {
                    const postData = this._getTransactionPostData(req.transaction);
                    postData.module = "proxy";
                    postData.action = "eth_estimateGas";
                    try {
                        return await this.fetch("proxy", postData, true);
                    } catch (error) {
                        return this._checkError(req, error, req.transaction);
                    }
                }
            /*
                        case "getLogs": {
                            // Needs to complain if more than one address is passed in
                            const args: Record<string, any> = { action: "getLogs" }
            
                            if (params.filter.fromBlock) {
                                args.fromBlock = checkLogTag(params.filter.fromBlock);
                            }
            
                            if (params.filter.toBlock) {
                                args.toBlock = checkLogTag(params.filter.toBlock);
                            }
            
                            if (params.filter.address) {
                                args.address = params.filter.address;
                            }
            
                            // @TODO: We can handle slightly more complicated logs using the logs API
                            if (params.filter.topics && params.filter.topics.length > 0) {
                                if (params.filter.topics.length > 1) {
                                    logger.throwError("unsupported topic count", Logger.Errors.UNSUPPORTED_OPERATION, { topics: params.filter.topics });
                                }
                                if (params.filter.topics.length === 1) {
                                    const topic0 = params.filter.topics[0];
                                    if (typeof(topic0) !== "string" || topic0.length !== 66) {
                                        logger.throwError("unsupported topic format", Logger.Errors.UNSUPPORTED_OPERATION, { topic0: topic0 });
                                    }
                                    args.topic0 = topic0;
                                }
                            }
            
                            const logs: Array<any> = await this.fetch("logs", args);
            
                            // Cache txHash => blockHash
                            let blocks: { [tag: string]: string } = {};
            
                            // Add any missing blockHash to the logs
                            for (let i = 0; i < logs.length; i++) {
                                const log = logs[i];
                                if (log.blockHash != null) { continue; }
                                if (blocks[log.blockNumber] == null) {
                                    const block = await this.getBlock(log.blockNumber);
                                    if (block) {
                                        blocks[log.blockNumber] = block.hash;
                                    }
                                }
            
                                log.blockHash = blocks[log.blockNumber];
                            }
            
                            return logs;
                        }
            */ default:
                break;
        }
        return super._perform(req);
    }
    async getNetwork() {
        return this.network;
    }
    /**
     *  Resolves to the current price of ether.
     *
     *  This returns ``0`` on any network other than ``mainnet``.
     */ async getEtherPrice() {
        if (this.network.name !== "mainnet") {
            return 0.0;
        }
        return parseFloat((await this.fetch("stats", {
            action: "ethprice"
        })).ethusd);
    }
    /**
     *  Resolves to a [Contract]] for %%address%%, using the
     *  Etherscan API to retreive the Contract ABI.
     */ async getContract(_address) {
        let address = this._getAddress(_address);
        if (isPromise(address)) {
            address = await address;
        }
        try {
            const resp = await this.fetch("contract", {
                action: "getabi",
                address
            });
            const abi = JSON.parse(resp);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](address, abi, this);
        } catch (error) {
            return null;
        }
    }
    isCommunityResource() {
        return this.apiKey == null;
    }
    /**
     *  Creates a new **EtherscanBaseProvider**.
     */ constructor(_network, _apiKey){
        const apiKey = _apiKey != null ? _apiKey : null;
        super(), /**
     *  The connected network.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "network", void 0), /**
     *  The API key or null if using the community provided bandwidth.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugin, {
            writable: true,
            value: void 0
        });
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugin, network.getPlugin(EtherscanPluginId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            apiKey,
            network
        });
    }
} //# sourceMappingURL=provider-etherscan.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/ws-browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocket",
    ()=>_WebSocket
]);
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    //TURBOPACK unreachable
    ;
}
;
const _WebSocket = getGlobal().WebSocket;
;
 //# sourceMappingURL=ws-browser.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  Generic long-lived socket provider.
 *
 *  Sub-classing notes
 *  - a sub-class MUST call the `_start()` method once connected
 *  - a sub-class MUST override the `_write(string)` method
 *  - a sub-class MUST call `_processMessage(string)` for each message
 *
 *  @_subsection: api/providers/abstract-provider:Socket Providers  [about-socketProvider]
 */ __turbopack_context__.s([
    "SocketBlockSubscriber",
    ()=>SocketBlockSubscriber,
    "SocketEventSubscriber",
    ()=>SocketEventSubscriber,
    "SocketPendingSubscriber",
    ()=>SocketPendingSubscriber,
    "SocketProvider",
    ()=>SocketProvider,
    "SocketSubscriber",
    ()=>SocketSubscriber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _provider = /*#__PURE__*/ new WeakMap(), _filter = /*#__PURE__*/ new WeakMap(), _filterId = /*#__PURE__*/ new WeakMap(), _paused = /*#__PURE__*/ new WeakMap(), _emitPromise = /*#__PURE__*/ new WeakMap();
class SocketSubscriber {
    /**
     *  The filter.
     */ get filter() {
        return JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter));
    }
    start() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).send("eth_subscribe", this.filter).then((filterId)=>{
            ;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)._register(filterId, this);
            return filterId;
        }));
    }
    stop() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterId).then((filterId)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).destroyed) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).send("eth_unsubscribe", [
                filterId
            ]);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterId, null);
    }
    // @TODO: pause should trap the current blockNumber, unsub, and on resume use getLogs
    //        and resume
    pause(dropWhilePaused) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(dropWhilePaused, "preserve logs while paused not supported by SocketSubscriber yet", "UNSUPPORTED_OPERATION", {
            operation: "pause(false)"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _paused, !!dropWhilePaused);
    }
    resume() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _paused, null);
    }
    /**
     *  @_ignore:
     */ _handleMessage(message) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterId) == null) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _paused) === null) {
            let emitPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _emitPromise);
            if (emitPromise == null) {
                emitPromise = this._emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider), message);
            } else {
                emitPromise = emitPromise.then(async ()=>{
                    await this._emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider), message);
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _emitPromise, emitPromise.then(()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _emitPromise) === emitPromise) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _emitPromise, null);
                }
            }));
        }
    }
    /**
     *  Sub-classes **must** override this to emit the events on the
     *  provider.
     */ async _emit(provider, message) {
        throw new Error("sub-classes must implemente this; _emit");
    }
    /**
     *  Creates a new **SocketSubscriber** attached to %%provider%% listening
     *  to %%filter%%.
     */ constructor(provider, filter){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterId, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _paused, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _emitPromise, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, provider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter, JSON.stringify(filter));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterId, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _paused, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _emitPromise, null);
    }
}
class SocketBlockSubscriber extends SocketSubscriber {
    async _emit(provider, message) {
        provider.emit("block", parseInt(message.number));
    }
    /**
     *  @_ignore:
     */ constructor(provider){
        super(provider, [
            "newHeads"
        ]);
    }
}
class SocketPendingSubscriber extends SocketSubscriber {
    async _emit(provider, message) {
        provider.emit("pending", message);
    }
    /**
     *  @_ignore:
     */ constructor(provider){
        super(provider, [
            "newPendingTransactions"
        ]);
    }
}
var _logFilter = /*#__PURE__*/ new WeakMap();
class SocketEventSubscriber extends SocketSubscriber {
    /**
     *  The filter.
     */ get logFilter() {
        return JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logFilter));
    }
    async _emit(provider, message) {
        provider.emit(this.logFilter, provider._wrapLog(message, provider._network));
    }
    /**
     *  @_ignore:
     */ constructor(provider, filter){
        super(provider, [
            "logs",
            filter
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logFilter, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logFilter, JSON.stringify(filter));
    }
}
var _callbacks = /*#__PURE__*/ new WeakMap(), // Maps each filterId to its subscriber
_subs = /*#__PURE__*/ new WeakMap(), // If any events come in before a subscriber has finished
// registering, queue them
_pending = /*#__PURE__*/ new WeakMap();
class SocketProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcApiProvider"] {
    // This value is only valid after _start has been called
    /*
    get _network(): Network {
        if (this.#network == null) {
            throw new Error("this shouldn't happen");
        }
        return this.#network.clone();
    }
    */ _getSubscriber(sub) {
        switch(sub.type){
            case "close":
                return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmanagedSubscriber"]("close");
            case "block":
                return new SocketBlockSubscriber(this);
            case "pending":
                return new SocketPendingSubscriber(this);
            case "event":
                return new SocketEventSubscriber(this, sub.filter);
            case "orphan":
                // Handled auto-matically within AbstractProvider
                // when the log.removed = true
                if (sub.filter.orphan === "drop-log") {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmanagedSubscriber"]("drop-log");
                }
        }
        return super._getSubscriber(sub);
    }
    /**
     *  Register a new subscriber. This is used internalled by Subscribers
     *  and generally is unecessary unless extending capabilities.
     */ _register(filterId, subscriber) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).set(filterId, subscriber);
        const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pending).get(filterId);
        if (pending) {
            for (const message of pending){
                subscriber._handleMessage(message);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pending).delete(filterId);
        }
    }
    async _send(payload) {
        // WebSocket provider doesn't accept batches
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(!Array.isArray(payload), "WebSocket does not support batch send", "payload", payload);
        // @TODO: stringify payloads here and store to prevent mutations
        // Prepare a promise to respond to
        const promise = new Promise((resolve, reject)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks).set(payload.id, {
                payload,
                resolve,
                reject
            });
        });
        // Wait until the socket is connected before writing to it
        await this._waitUntilReady();
        // Write the request to the socket
        await this._write(JSON.stringify(payload));
        return [
            await promise
        ];
    }
    // Sub-classes must call this once they are connected
    /*
    async _start(): Promise<void> {
        if (this.#ready) { return; }

        for (const { payload } of this.#callbacks.values()) {
            await this._write(JSON.stringify(payload));
        }

        this.#ready = (async function() {
            await super._start();
        })();
    }
    */ /**
     *  Sub-classes **must** call this with messages received over their
     *  transport to be processed and dispatched.
     */ async _processMessage(message) {
        const result = JSON.parse(message);
        if (result && typeof result === "object" && "id" in result) {
            const callback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks).get(result.id);
            if (callback == null) {
                this.emit("error", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("received result for unknown id", "UNKNOWN_ERROR", {
                    reasonCode: "UNKNOWN_ID",
                    result
                }));
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks).delete(result.id);
            callback.resolve(result);
        } else if (result && result.method === "eth_subscription") {
            const filterId = result.params.subscription;
            const subscriber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).get(filterId);
            if (subscriber) {
                subscriber._handleMessage(result.params.result);
            } else {
                let pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pending).get(filterId);
                if (pending == null) {
                    pending = [];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pending).set(filterId, pending);
                }
                pending.push(result.params.result);
            }
        } else {
            this.emit("error", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("received unexpected message", "UNKNOWN_ERROR", {
                reasonCode: "UNEXPECTED_MESSAGE",
                result
            }));
            return;
        }
    }
    /**
     *  Sub-classes **must** override this to send %%message%% over their
     *  transport.
     */ async _write(message) {
        throw new Error("sub-classes must override this");
    }
    /**
     *  Creates a new **SocketProvider** connected to %%network%%.
     *
     *  If unspecified, the network will be discovered.
     */ constructor(network, _options){
        // Copy the options
        const options = Object.assign({}, _options != null ? _options : {});
        // Support for batches is generally not supported for
        // connection-base providers; if this changes in the future
        // the _send should be updated to reflect this
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(options.batchMaxCount == null || options.batchMaxCount === 1, "sockets-based providers do not support batches", "options.batchMaxCount", _options);
        options.batchMaxCount = 1;
        // Socket-based Providers (generally) cannot change their network,
        // since they have a long-lived connection; but let people override
        // this if they have just cause.
        if (options.staticNetwork == null) {
            options.staticNetwork = true;
        }
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pending, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _callbacks, new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs, new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pending, new Map());
    }
} //# sourceMappingURL=provider-socket.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-websocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocketProvider",
    ()=>WebSocketProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ws$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/ws-browser.js [app-client] (ecmascript)"); /*-browser*/ 
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-socket.js [app-client] (ecmascript)");
;
;
;
;
;
var _connect = /*#__PURE__*/ new WeakMap(), _websocket = /*#__PURE__*/ new WeakMap();
class WebSocketProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocketProvider"] {
    get websocket() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket) == null) {
            throw new Error("websocket closed");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket);
    }
    async _write(message) {
        this.websocket.send(message);
    }
    async destroy() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket) != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket).close();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket, null);
        }
        super.destroy();
    }
    constructor(url, network, options){
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket, {
            writable: true,
            value: void 0
        });
        if (typeof url === "string") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, ()=>{
                return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ws$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocket"](url);
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect).call(this));
        } else if (typeof url === "function") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, url);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket, url());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _websocket, url);
        }
        this.websocket.onopen = async ()=>{
            try {
                await this._start();
                this.resume();
            } catch (error) {
                console.log("failed to start WebsocketProvider", error);
            // @TODO: now what? Attempt reconnect?
            }
        };
        this.websocket.onmessage = (message)=>{
            this._processMessage(message.data);
        };
    /*
                this.websocket.onclose = (event) => {
                    // @TODO: What event.code should we reconnect on?
                    const reconnect = false;
                    if (reconnect) {
                        this.pause(true);
                        if (this.#connect) {
                            this.#websocket = this.#connect();
                            this.#websocket.onopen = ...
                            // @TODO: this requires the super class to rebroadcast; move it there
                        }
                        this._reconnect();
                    }
                };
        */ }
} //# sourceMappingURL=provider-websocket.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-infura.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-infura]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Goerli Testnet (``goerli``)
 *  - Sepolia Testnet (``sepolia``)
 *  - Arbitrum (``arbitrum``)
 *  - Arbitrum Goerli Testnet (``arbitrum-goerli``)
 *  - Arbitrum Sepolia Testnet (``arbitrum-sepolia``)
 *  - Base (``base``)
 *  - Base Goerlia Testnet (``base-goerli``)
 *  - Base Sepolia Testnet (``base-sepolia``)
 *  - BNB Smart Chain Mainnet (``bnb``)
 *  - BNB Smart Chain Testnet (``bnbt``)
 *  - Linea (``linea``)
 *  - Linea Goerli Testnet (``linea-goerli``)
 *  - Linea Sepolia Testnet (``linea-sepolia``)
 *  - Optimism (``optimism``)
 *  - Optimism Goerli Testnet (``optimism-goerli``)
 *  - Optimism Sepolia Testnet (``optimism-sepolia``)
 *  - Polygon (``matic``)
 *  - Polygon Amoy Testnet (``matic-amoy``)
 *  - Polygon Mumbai Testnet (``matic-mumbai``)
 *
 *  @_subsection: api/providers/thirdparty:INFURA  [providers-infura]
 */ __turbopack_context__.s([
    "InfuraProvider",
    ()=>InfuraProvider,
    "InfuraWebSocketProvider",
    ()=>InfuraWebSocketProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-websocket.js [app-client] (ecmascript)");
;
;
;
;
;
;
const defaultProjectId = "84842078b09946638c03157f83405213";
function getHost(name) {
    switch(name){
        case "mainnet":
            return "mainnet.infura.io";
        case "goerli":
            return "goerli.infura.io";
        case "sepolia":
            return "sepolia.infura.io";
        case "arbitrum":
            return "arbitrum-mainnet.infura.io";
        case "arbitrum-goerli":
            return "arbitrum-goerli.infura.io";
        case "arbitrum-sepolia":
            return "arbitrum-sepolia.infura.io";
        case "base":
            return "base-mainnet.infura.io";
        case "base-goerlia":
        case "base-goerli":
            return "base-goerli.infura.io";
        case "base-sepolia":
            return "base-sepolia.infura.io";
        case "bnb":
            return "bsc-mainnet.infura.io";
        case "bnbt":
            return "bsc-testnet.infura.io";
        case "linea":
            return "linea-mainnet.infura.io";
        case "linea-goerli":
            return "linea-goerli.infura.io";
        case "linea-sepolia":
            return "linea-sepolia.infura.io";
        case "matic":
            return "polygon-mainnet.infura.io";
        case "matic-amoy":
            return "polygon-amoy.infura.io";
        case "matic-mumbai":
            return "polygon-mumbai.infura.io";
        case "optimism":
            return "optimism-mainnet.infura.io";
        case "optimism-goerli":
            return "optimism-goerli.infura.io";
        case "optimism-sepolia":
            return "optimism-sepolia.infura.io";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class InfuraWebSocketProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocketProvider"] {
    isCommunityResource() {
        return this.projectId === defaultProjectId;
    }
    /**
     *  Creates a new **InfuraWebSocketProvider**.
     */ constructor(network, projectId){
        const provider = new InfuraProvider(network, projectId);
        const req = provider._getConnection();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!req.credentials, "INFURA WebSocket project secrets unsupported", "UNSUPPORTED_OPERATION", {
            operation: "InfuraProvider.getWebSocketProvider()"
        });
        const url = req.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
        super(url, provider._network), /**
     *  The Project ID for the INFURA connection.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projectId", void 0), /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projectSecret", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            projectId: provider.projectId,
            projectSecret: provider.projectSecret
        });
    }
}
class InfuraProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new InfuraProvider(chainId, this.projectId, this.projectSecret);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    isCommunityResource() {
        return this.projectId === defaultProjectId;
    }
    /**
     *  Creates a new **InfuraWebSocketProvider**.
     */ static getWebSocketProvider(network, projectId) {
        return new InfuraWebSocketProvider(network, projectId);
    }
    /**
     *  Returns a prepared request for connecting to %%network%%
     *  with %%projectId%% and %%projectSecret%%.
     */ static getRequest(network, projectId, projectSecret) {
        if (projectId == null) {
            projectId = defaultProjectId;
        }
        if (projectSecret == null) {
            projectSecret = null;
        }
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"]("https://".concat(getHost(network.name), "/v3/").concat(projectId));
        request.allowGzip = true;
        if (projectSecret) {
            request.setCredentials("", projectSecret);
        }
        if (projectId === defaultProjectId) {
            request.retryFunc = async (request, response, attempt)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("InfuraProvider");
                return true;
            };
        }
        return request;
    }
    /**
     *  Creates a new **InfuraProvider**.
     */ constructor(_network, projectId, projectSecret){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (projectId == null) {
            projectId = defaultProjectId;
        }
        if (projectSecret == null) {
            projectSecret = null;
        }
        const request = InfuraProvider.getRequest(network, projectId, projectSecret);
        super(request, network, {
            staticNetwork: network
        }), /**
     *  The Project ID for the INFURA connection.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projectId", void 0), /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projectSecret", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            projectId,
            projectSecret
        });
    }
} //# sourceMappingURL=provider-infura.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-quicknode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-quicknode]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Goerli Testnet (``goerli``)
 *  - Sepolia Testnet (``sepolia``)
 *  - Holesky Testnet (``holesky``)
 *  - Arbitrum (``arbitrum``)
 *  - Arbitrum Goerli Testnet (``arbitrum-goerli``)
 *  - Arbitrum Sepolia Testnet (``arbitrum-sepolia``)
 *  - Base Mainnet (``base``);
 *  - Base Goerli Testnet (``base-goerli``);
 *  - Base Sepolia Testnet (``base-sepolia``);
 *  - BNB Smart Chain Mainnet (``bnb``)
 *  - BNB Smart Chain Testnet (``bnbt``)
 *  - Optimism (``optimism``)
 *  - Optimism Goerli Testnet (``optimism-goerli``)
 *  - Optimism Sepolia Testnet (``optimism-sepolia``)
 *  - Polygon (``matic``)
 *  - Polygon Mumbai Testnet (``matic-mumbai``)
 *
 *  @_subsection: api/providers/thirdparty:QuickNode  [providers-quicknode]
 */ __turbopack_context__.s([
    "QuickNodeProvider",
    ()=>QuickNodeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
const defaultToken = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
function getHost(name) {
    switch(name){
        case "mainnet":
            return "ethers.quiknode.pro";
        case "goerli":
            return "ethers.ethereum-goerli.quiknode.pro";
        case "sepolia":
            return "ethers.ethereum-sepolia.quiknode.pro";
        case "holesky":
            return "ethers.ethereum-holesky.quiknode.pro";
        case "arbitrum":
            return "ethers.arbitrum-mainnet.quiknode.pro";
        case "arbitrum-goerli":
            return "ethers.arbitrum-goerli.quiknode.pro";
        case "arbitrum-sepolia":
            return "ethers.arbitrum-sepolia.quiknode.pro";
        case "base":
            return "ethers.base-mainnet.quiknode.pro";
        case "base-goerli":
            return "ethers.base-goerli.quiknode.pro";
        case "base-spolia":
            return "ethers.base-sepolia.quiknode.pro";
        case "bnb":
            return "ethers.bsc.quiknode.pro";
        case "bnbt":
            return "ethers.bsc-testnet.quiknode.pro";
        case "matic":
            return "ethers.matic.quiknode.pro";
        case "matic-mumbai":
            return "ethers.matic-testnet.quiknode.pro";
        case "optimism":
            return "ethers.optimism.quiknode.pro";
        case "optimism-goerli":
            return "ethers.optimism-goerli.quiknode.pro";
        case "optimism-sepolia":
            return "ethers.optimism-sepolia.quiknode.pro";
        case "xdai":
            return "ethers.xdai.quiknode.pro";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class QuickNodeProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new QuickNodeProvider(chainId, this.token);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    isCommunityResource() {
        return this.token === defaultToken;
    }
    /**
     *  Returns a new request prepared for %%network%% and the
     *  %%token%%.
     */ static getRequest(network, token) {
        if (token == null) {
            token = defaultToken;
        }
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"]("https://".concat(getHost(network.name), "/").concat(token));
        request.allowGzip = true;
        //if (projectSecret) { request.setCredentials("", projectSecret); }
        if (token === defaultToken) {
            request.retryFunc = async (request, response, attempt)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("QuickNodeProvider");
                return true;
            };
        }
        return request;
    }
    /**
     *  Creates a new **QuickNodeProvider**.
     */ constructor(_network, token){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (token == null) {
            token = defaultToken;
        }
        const request = QuickNodeProvider.getRequest(network, token);
        super(request, network, {
            staticNetwork: network
        }), /**
     *  The API token.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "token", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            token
        });
    }
} //# sourceMappingURL=provider-quicknode.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-fallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  A **FallbackProvider** provides resilience, security and performance
 *  in a way that is customizable and configurable.
 *
 *  @_section: api/providers/fallback-provider:Fallback Provider [about-fallback-provider]
 */ __turbopack_context__.s([
    "FallbackProvider",
    ()=>FallbackProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const BN_1 = BigInt("1");
const BN_2 = BigInt("2");
function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}
function stall(duration) {
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
}
function getTime() {
    return new Date().getTime();
}
function stringify(value) {
    return JSON.stringify(value, (key, value)=>{
        if (typeof value === "bigint") {
            return {
                type: "bigint",
                value: value.toString()
            };
        }
        return value;
    });
}
;
const defaultConfig = {
    stallTimeout: 400,
    priority: 1,
    weight: 1
};
const defaultState = {
    blockNumber: -2,
    requests: 0,
    lateResponses: 0,
    errorResponses: 0,
    outOfSync: -1,
    unsupportedEvents: 0,
    rollingDuration: 0,
    score: 0,
    _network: null,
    _updateNumber: null,
    _totalTime: 0,
    _lastFatalError: null,
    _lastFatalErrorTimestamp: 0
};
async function waitForSync(config, blockNumber) {
    while(config.blockNumber < 0 || config.blockNumber < blockNumber){
        if (!config._updateNumber) {
            config._updateNumber = (async ()=>{
                try {
                    const blockNumber = await config.provider.getBlockNumber();
                    if (blockNumber > config.blockNumber) {
                        config.blockNumber = blockNumber;
                    }
                } catch (error) {
                    config.blockNumber = -2;
                    config._lastFatalError = error;
                    config._lastFatalErrorTimestamp = getTime();
                }
                config._updateNumber = null;
            })();
        }
        await config._updateNumber;
        config.outOfSync++;
        if (config._lastFatalError) {
            break;
        }
    }
}
function _normalize(value) {
    if (value == null) {
        return "null";
    }
    if (Array.isArray(value)) {
        return "[" + value.map(_normalize).join(",") + "]";
    }
    if (typeof value === "object" && typeof value.toJSON === "function") {
        return _normalize(value.toJSON());
    }
    switch(typeof value){
        case "boolean":
        case "symbol":
            return value.toString();
        case "bigint":
        case "number":
            return BigInt(value).toString();
        case "string":
            return JSON.stringify(value);
        case "object":
            {
                const keys = Object.keys(value);
                keys.sort();
                return "{" + keys.map((k)=>"".concat(JSON.stringify(k), ":").concat(_normalize(value[k]))).join(",") + "}";
            }
    }
    console.log("Could not serialize", value);
    throw new Error("Hmm...");
}
function normalizeResult(method, value) {
    if ("error" in value) {
        const error = value.error;
        let tag;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "CALL_EXCEPTION")) {
            tag = _normalize(Object.assign({}, error, {
                shortMessage: undefined,
                reason: undefined,
                info: undefined
            }));
        } else {
            tag = _normalize(error);
        }
        return {
            tag,
            value: error
        };
    }
    const result = value.result;
    return {
        tag: _normalize(result),
        value: result
    };
}
// This strategy picks the highest weight result, as long as the weight is
// equal to or greater than quorum
function checkQuorum(quorum, results) {
    const tally = new Map();
    for (const { value, tag, weight } of results){
        const t = tally.get(tag) || {
            value,
            weight: 0
        };
        t.weight += weight;
        tally.set(tag, t);
    }
    let best = null;
    for (const r of tally.values()){
        if (r.weight >= quorum && (!best || r.weight > best.weight)) {
            best = r;
        }
    }
    if (best) {
        return best.value;
    }
    return undefined;
}
function getMedian(quorum, results) {
    let resultWeight = 0;
    const errorMap = new Map();
    let bestError = null;
    const values = [];
    for (const { value, tag, weight } of results){
        if (value instanceof Error) {
            const e = errorMap.get(tag) || {
                value,
                weight: 0
            };
            e.weight += weight;
            errorMap.set(tag, e);
            if (bestError == null || e.weight > bestError.weight) {
                bestError = e;
            }
        } else {
            values.push(BigInt(value));
            resultWeight += weight;
        }
    }
    if (resultWeight < quorum) {
        // We have quorum for an error
        if (bestError && bestError.weight >= quorum) {
            return bestError.value;
        }
        // We do not have quorum for a result
        return undefined;
    }
    // Get the sorted values
    values.sort((a, b)=>a < b ? -1 : b > a ? 1 : 0);
    const mid = Math.floor(values.length / 2);
    // Odd-length; take the middle value
    if (values.length % 2) {
        return values[mid];
    }
    // Even length; take the ceiling of the mean of the center two values
    return (values[mid - 1] + values[mid] + BN_1) / BN_2;
}
function getAnyResult(quorum, results) {
    // If any value or error meets quorum, that is our preferred result
    const result = checkQuorum(quorum, results);
    if (result !== undefined) {
        return result;
    }
    // Otherwise, do we have any result?
    for (const r of results){
        if (r.value) {
            return r.value;
        }
    }
    // Nope!
    return undefined;
}
function getFuzzyMode(quorum, results) {
    if (quorum === 1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(getMedian(quorum, results), "%internal");
    }
    const tally = new Map();
    const add = (result, weight)=>{
        const t = tally.get(result) || {
            result,
            weight: 0
        };
        t.weight += weight;
        tally.set(result, t);
    };
    for (const { weight, value } of results){
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(value);
        add(r - 1, weight);
        add(r, weight);
        add(r + 1, weight);
    }
    let bestWeight = 0;
    let bestResult = undefined;
    for (const { weight, result } of tally.values()){
        // Use this result, if this result meets quorum and has either:
        // - a better weight
        // - or equal weight, but the result is larger
        if (weight >= quorum && (weight > bestWeight || bestResult != null && weight === bestWeight && result > bestResult)) {
            bestWeight = weight;
            bestResult = result;
        }
    }
    return bestResult;
}
var _configs = /*#__PURE__*/ new WeakMap(), _height = /*#__PURE__*/ new WeakMap(), _initialSyncPromise = /*#__PURE__*/ new WeakMap(), // Grab the next (random) config that is not already part of
// the running set
_getNextConfig = /*#__PURE__*/ new WeakSet(), // Adds a new runner (if available) to running.
_addRunner = /*#__PURE__*/ new WeakSet(), _initialSync = /*#__PURE__*/ new WeakSet(), _checkQuorum = /*#__PURE__*/ new WeakSet(), _waitForQuorum = /*#__PURE__*/ new WeakSet();
class FallbackProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractProvider"] {
    get providerConfigs() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).map((c)=>{
            const result = Object.assign({}, c);
            for(const key in result){
                if (key[0] === "_") {
                    delete result[key];
                }
            }
            return result;
        });
    }
    async _detectNetwork() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(await this._perform({
            method: "chainId"
        })));
    }
    // @TODO: Add support to select providers to be the event subscriber
    //_getSubscriber(sub: Subscription): Subscriber {
    //    throw new Error("@TODO");
    //}
    /**
     *  Transforms a %%req%% into the correct method call on %%provider%%.
     */ async _translatePerform(provider, req) {
        switch(req.method){
            case "broadcastTransaction":
                return await provider.broadcastTransaction(req.signedTransaction);
            case "call":
                return await provider.call(Object.assign({}, req.transaction, {
                    blockTag: req.blockTag
                }));
            case "chainId":
                return (await provider.getNetwork()).chainId;
            case "estimateGas":
                return await provider.estimateGas(req.transaction);
            case "getBalance":
                return await provider.getBalance(req.address, req.blockTag);
            case "getBlock":
                {
                    const block = "blockHash" in req ? req.blockHash : req.blockTag;
                    return await provider.getBlock(block, req.includeTransactions);
                }
            case "getBlockNumber":
                return await provider.getBlockNumber();
            case "getCode":
                return await provider.getCode(req.address, req.blockTag);
            case "getGasPrice":
                return (await provider.getFeeData()).gasPrice;
            case "getPriorityFee":
                return (await provider.getFeeData()).maxPriorityFeePerGas;
            case "getLogs":
                return await provider.getLogs(req.filter);
            case "getStorage":
                return await provider.getStorage(req.address, req.position, req.blockTag);
            case "getTransaction":
                return await provider.getTransaction(req.hash);
            case "getTransactionCount":
                return await provider.getTransactionCount(req.address, req.blockTag);
            case "getTransactionReceipt":
                return await provider.getTransactionReceipt(req.hash);
            case "getTransactionResult":
                return await provider.getTransactionResult(req.hash);
        }
    }
    async _perform(req) {
        // Broadcasting a transaction is rare (ish) and already incurs
        // a cost on the user, so spamming is safe-ish. Just send it to
        // every backend.
        if (req.method === "broadcastTransaction") {
            // Once any broadcast provides a positive result, use it. No
            // need to wait for anyone else
            const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).map((c)=>null);
            const broadcasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).map(async (param, index)=>{
                let { provider, weight } = param;
                try {
                    const result = await provider._perform(req);
                    results[index] = Object.assign(normalizeResult(req.method, {
                        result
                    }), {
                        weight
                    });
                } catch (error) {
                    results[index] = Object.assign(normalizeResult(req.method, {
                        error
                    }), {
                        weight
                    });
                }
            });
            // As each promise finishes...
            while(true){
                // Check for a valid broadcast result
                const done = results.filter((r)=>r != null);
                for (const { value } of done){
                    if (!(value instanceof Error)) {
                        return value;
                    }
                }
                // Check for a legit broadcast error (one which we cannot
                // recover from; some nodes may return the following red
                // herring events:
                // - alredy seend (UNKNOWN_ERROR)
                // - NONCE_EXPIRED
                // - REPLACEMENT_UNDERPRICED
                const result = checkQuorum(this.quorum, results.filter((r)=>r != null));
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(result, "INSUFFICIENT_FUNDS")) {
                    throw result;
                }
                // Kick off the next provider (if any)
                const waiting = broadcasts.filter((b, i)=>results[i] == null);
                if (waiting.length === 0) {
                    break;
                }
                await Promise.race(waiting);
            }
            // Use standard quorum results; any result was returned above,
            // so this will find any error that met quorum if any
            const result = getAnyResult(this.quorum, results);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(result !== undefined, "problem multi-broadcasting", "SERVER_ERROR", {
                request: "%sub-requests",
                info: {
                    request: req,
                    results: results.map(stringify)
                }
            });
            if (result instanceof Error) {
                throw result;
            }
            return result;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialSync, initialSync).call(this);
        // Bootstrap enough runners to meet quorum
        const running = new Set();
        let inflightQuorum = 0;
        while(true){
            const runner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRunner, addRunner).call(this, running, req);
            if (runner == null) {
                break;
            }
            inflightQuorum += runner.config.weight;
            if (inflightQuorum >= this.quorum) {
                break;
            }
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _waitForQuorum, waitForQuorum).call(this, running, req);
        // Track requests sent to a provider that are still
        // outstanding after quorum has been otherwise found
        for (const runner of running){
            if (runner.perform && runner.result == null) {
                runner.config.lateResponses++;
            }
        }
        return result;
    }
    async destroy() {
        for (const { provider } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs)){
            provider.destroy();
        }
        super.destroy();
    }
    /**
     *  Creates a new **FallbackProvider** with %%providers%% connected to
     *  %%network%%.
     *
     *  If a [[Provider]] is included in %%providers%%, defaults are used
     *  for the configuration.
     */ constructor(providers, network, options){
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getNextConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRunner), // Initializes the blockNumber and network for each runner and
        // blocks until initialized
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialSync), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkQuorum), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _waitForQuorum), /**
     *  The number of backends that must agree on a value before it is
     *  accpeted.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "quorum", void 0), /**
     *  @_ignore:
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "eventQuorum", void 0), /**
     *  @_ignore:
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "eventWorkers", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialSyncPromise, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs, providers.map((p)=>{
            if (p instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractProvider"]) {
                return Object.assign({
                    provider: p
                }, defaultConfig, defaultState);
            } else {
                return Object.assign({}, defaultConfig, p, defaultState);
            }
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height, -2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialSyncPromise, null);
        if (options && options.quorum != null) {
            this.quorum = options.quorum;
        } else {
            this.quorum = Math.ceil((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).reduce((accum, config)=>{
                accum += config.weight;
                return accum;
            }, 0) / 2);
        }
        this.eventQuorum = 1;
        this.eventWorkers = 1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(this.quorum <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).reduce((a, c)=>a + c.weight, 0), "quorum exceed provider weight", "quorum", this.quorum);
    }
} //# sourceMappingURL=provider-fallback.js.map
function getNextConfig(running) {
    // @TODO: Maybe do a check here to favour (heavily) providers that
    //        do not require waitForSync and disfavour providers that
    //        seem down-ish or are behaving slowly
    const configs = Array.from(running).map((r)=>r.config);
    // Shuffle the states, sorted by priority
    const allConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).slice();
    shuffle(allConfigs);
    allConfigs.sort((a, b)=>a.priority - b.priority);
    for (const config of allConfigs){
        if (config._lastFatalError) {
            continue;
        }
        if (configs.indexOf(config) === -1) {
            return config;
        }
    }
    return null;
}
function addRunner(running, req) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getNextConfig, getNextConfig).call(this, running);
    // No runners available
    if (config == null) {
        return null;
    }
    // Create a new runner
    const runner = {
        config,
        result: null,
        didBump: false,
        perform: null,
        staller: null
    };
    const now = getTime();
    // Start performing this operation
    runner.perform = (async ()=>{
        try {
            config.requests++;
            const result = await this._translatePerform(config.provider, req);
            runner.result = {
                result
            };
        } catch (error) {
            config.errorResponses++;
            runner.result = {
                error
            };
        }
        const dt = getTime() - now;
        config._totalTime += dt;
        config.rollingDuration = 0.95 * config.rollingDuration + 0.05 * dt;
        runner.perform = null;
    })();
    // Start a staller; when this times out, it's time to force
    // kicking off another runner because we are taking too long
    runner.staller = (async ()=>{
        await stall(config.stallTimeout);
        runner.staller = null;
    })();
    running.add(runner);
    return runner;
}
async function initialSync() {
    let initialSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialSyncPromise);
    if (!initialSync) {
        const promises = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).forEach((config)=>{
            promises.push((async ()=>{
                await waitForSync(config, 0);
                if (!config._lastFatalError) {
                    config._network = await config.provider.getNetwork();
                }
            })());
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialSyncPromise, initialSync = (async ()=>{
            // Wait for all providers to have a block number and network
            await Promise.all(promises);
            // Check all the networks match
            let chainId = null;
            for (const config of (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs)){
                if (config._lastFatalError) {
                    continue;
                }
                const network = config._network;
                if (chainId == null) {
                    chainId = network.chainId;
                } else if (network.chainId !== chainId) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "cannot mix providers on different networks", "UNSUPPORTED_OPERATION", {
                        operation: "new FallbackProvider"
                    });
                }
            }
        })());
    }
    await initialSync;
}
async function checkQuorum1(running, req) {
    // Get all the result objects
    const results = [];
    for (const runner of running){
        if (runner.result != null) {
            const { tag, value } = normalizeResult(req.method, runner.result);
            results.push({
                tag,
                value,
                weight: runner.config.weight
            });
        }
    }
    // Are there enough results to event meet quorum?
    if (results.reduce((a, r)=>a + r.weight, 0) < this.quorum) {
        return undefined;
    }
    switch(req.method){
        case "getBlockNumber":
            {
                // We need to get the bootstrap block height
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height) === -2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height, Math.ceil((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(getMedian(this.quorum, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _configs).filter((c)=>!c._lastFatalError).map((c)=>({
                            value: c.blockNumber,
                            tag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(c.blockNumber).toString(),
                            weight: c.weight
                        }))))));
                }
                // Find the mode across all the providers, allowing for
                // a little drift between block heights
                const mode = getFuzzyMode(this.quorum, results);
                if (mode === undefined) {
                    return undefined;
                }
                if (mode > (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height, mode);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _height);
            }
        case "getGasPrice":
        case "getPriorityFee":
        case "estimateGas":
            return getMedian(this.quorum, results);
        case "getBlock":
            // Pending blocks are in the mempool and already
            // quite untrustworthy; just grab anything
            if ("blockTag" in req && req.blockTag === "pending") {
                return getAnyResult(this.quorum, results);
            }
            return checkQuorum(this.quorum, results);
        case "call":
        case "chainId":
        case "getBalance":
        case "getTransactionCount":
        case "getCode":
        case "getStorage":
        case "getTransaction":
        case "getTransactionReceipt":
        case "getLogs":
            return checkQuorum(this.quorum, results);
        case "broadcastTransaction":
            return getAnyResult(this.quorum, results);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "unsupported method", "UNSUPPORTED_OPERATION", {
        operation: "_perform(".concat(stringify(req.method), ")")
    });
}
async function waitForQuorum(running, req) {
    if (running.size === 0) {
        throw new Error("no runners?!");
    }
    // Any promises that are interesting to watch for; an expired stall
    // or a successful perform
    const interesting = [];
    let newRunners = 0;
    for (const runner of running){
        // No responses, yet; keep an eye on it
        if (runner.perform) {
            interesting.push(runner.perform);
        }
        // Still stalling...
        if (runner.staller) {
            interesting.push(runner.staller);
            continue;
        }
        // This runner has already triggered another runner
        if (runner.didBump) {
            continue;
        }
        // Got a response (result or error) or stalled; kick off another runner
        runner.didBump = true;
        newRunners++;
    }
    // Check if we have reached quorum on a result (or error)
    const value = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkQuorum, checkQuorum1).call(this, running, req);
    if (value !== undefined) {
        if (value instanceof Error) {
            throw value;
        }
        return value;
    }
    // Add any new runners, because a staller timed out or a result
    // or error response came in.
    for(let i = 0; i < newRunners; i++){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _addRunner, addRunner).call(this, running, req);
    }
    // All providers have returned, and we have no result
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(interesting.length > 0, "quorum not met", "SERVER_ERROR", {
        request: "%sub-requests",
        info: {
            request: req,
            results: Array.from(running).map((r)=>stringify(r.result))
        }
    });
    // Wait for someone to either complete its perform or stall out
    await Promise.race(interesting);
    // This is recursive, but at worst case the depth is 2x the
    // number of providers (each has a perform and a staller)
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _waitForQuorum, waitForQuorum).call(this, running, req);
}
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/default-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultProvider",
    ()=>getDefaultProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$ankr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-ankr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$alchemy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-alchemy.js [app-client] (ecmascript)");
//import { BlockscoutProvider } from "./provider-blockscout.js";
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$chainstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-chainstack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$cloudflare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-cloudflare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$etherscan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-etherscan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$infura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-infura.js [app-client] (ecmascript)");
//import { PocketProvider } from "./provider-pocket.js";
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$quicknode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-quicknode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-fallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-websocket.js [app-client] (ecmascript)");
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
function isWebSocketLike(value) {
    return value && typeof value.send === "function" && typeof value.close === "function";
}
const Testnets = "goerli kovan sepolia classicKotti optimism-goerli arbitrum-goerli matic-mumbai bnbt".split(" ");
function getDefaultProvider(network, options) {
    if (options == null) {
        options = {};
    }
    const allowService = (name)=>{
        if (options[name] === "-") {
            return false;
        }
        if (typeof options.exclusive === "string") {
            return name === options.exclusive;
        }
        if (Array.isArray(options.exclusive)) {
            return options.exclusive.indexOf(name) !== -1;
        }
        return true;
    };
    if (typeof network === "string" && network.match(/^https?:/)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](network);
    }
    if (typeof network === "string" && network.match(/^wss?:/) || isWebSocketLike(network)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocketProvider"](network);
    }
    // Get the network and name, if possible
    let staticNetwork = null;
    try {
        staticNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(network);
    } catch (error) {}
    const providers = [];
    if (allowService("publicPolygon") && staticNetwork) {
        if (staticNetwork.name === "matic") {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"]("https:/\/polygon-rpc.com/", staticNetwork, {
                staticNetwork
            }));
        } else if (staticNetwork.name === "matic-amoy") {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"]("https:/\/rpc-amoy.polygon.technology/", staticNetwork, {
                staticNetwork
            }));
        }
    }
    if (allowService("alchemy")) {
        try {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$alchemy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlchemyProvider"](network, options.alchemy));
        } catch (error) {}
    }
    if (allowService("ankr") && options.ankr != null) {
        try {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$ankr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnkrProvider"](network, options.ankr));
        } catch (error) {}
    }
    /* Temporarily remove until custom error issue is fixed
        if (allowService("blockscout")) {
            try {
                providers.push(new BlockscoutProvider(network, options.blockscout));
            } catch (error) { }
        }
    */ if (allowService("chainstack")) {
        try {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$chainstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainstackProvider"](network, options.chainstack));
        } catch (error) {}
    }
    if (allowService("cloudflare")) {
        try {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$cloudflare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudflareProvider"](network));
        } catch (error) {}
    }
    if (allowService("etherscan")) {
        try {
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$etherscan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherscanProvider"](network, options.etherscan));
        } catch (error) {}
    }
    if (allowService("infura")) {
        try {
            let projectId = options.infura;
            let projectSecret = undefined;
            if (typeof projectId === "object") {
                projectSecret = projectId.projectSecret;
                projectId = projectId.projectId;
            }
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$infura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfuraProvider"](network, projectId, projectSecret));
        } catch (error) {}
    }
    /*
        if (options.pocket !== "-") {
            try {
                let appId = options.pocket;
                let secretKey: undefined | string = undefined;
                let loadBalancer: undefined | boolean = undefined;
                if (typeof(appId) === "object") {
                    loadBalancer = !!appId.loadBalancer;
                    secretKey = appId.secretKey;
                    appId = appId.appId;
                }
                providers.push(new PocketProvider(network, appId, secretKey, loadBalancer));
            } catch (error) { console.log(error); }
        }
    */ if (allowService("quicknode")) {
        try {
            let token = options.quicknode;
            providers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$quicknode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickNodeProvider"](network, token));
        } catch (error) {}
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(providers.length, "unsupported default network", "UNSUPPORTED_OPERATION", {
        operation: "getDefaultProvider"
    });
    // No need for a FallbackProvider
    if (providers.length === 1) {
        return providers[0];
    }
    // We use the floor because public third-party providers can be unreliable,
    // so a low number of providers with a large quorum will fail too often
    let quorum = Math.floor(providers.length / 2);
    if (quorum > 2) {
        quorum = 2;
    }
    // Testnets don't need as strong a security gaurantee and speed is
    // more useful during testing
    if (staticNetwork && Testnets.indexOf(staticNetwork.name) !== -1) {
        quorum = 1;
    }
    // Provided override qorum takes priority
    if (options && options.quorum) {
        quorum = options.quorum;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FallbackProvider"](providers, undefined, {
        quorum
    });
} //# sourceMappingURL=default-provider.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/signer-noncemanager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NonceManager",
    ()=>NonceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-signer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _noncePromise = /*#__PURE__*/ new WeakMap(), _delta = /*#__PURE__*/ new WeakMap();
class NonceManager extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSigner"] {
    async getAddress() {
        return this.signer.getAddress();
    }
    connect(provider) {
        return new NonceManager(this.signer.connect(provider));
    }
    async getNonce(blockTag) {
        if (blockTag === "pending") {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noncePromise) == null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noncePromise, super.getNonce("pending"));
            }
            const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delta);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noncePromise) + delta;
        }
        return super.getNonce(blockTag);
    }
    /**
     *  Manually increment the nonce. This may be useful when managng
     *  offline transactions.
     */ increment() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delta).value++;
    }
    /**
     *  Resets the nonce, causing the **NonceManager** to reload the current
     *  nonce from the blockchain on the next transaction.
     */ reset() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delta, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noncePromise, null);
    }
    async sendTransaction(tx) {
        const noncePromise = this.getNonce("pending");
        this.increment();
        tx = await this.signer.populateTransaction(tx);
        tx.nonce = await noncePromise;
        // @TODO: Maybe handle interesting/recoverable errors?
        // Like don't increment if the tx was certainly not sent
        return await this.signer.sendTransaction(tx);
    }
    signTransaction(tx) {
        return this.signer.signTransaction(tx);
    }
    signMessage(message) {
        return this.signer.signMessage(message);
    }
    signTypedData(domain, types, value) {
        return this.signer.signTypedData(domain, types, value);
    }
    /**
     *  Creates a new **NonceManager** to manage %%signer%%.
     */ constructor(signer){
        super(signer.provider), /**
     *  The Signer being managed.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "signer", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noncePromise, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delta, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            signer
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _noncePromise, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _delta, 0);
    }
} //# sourceMappingURL=signer-noncemanager.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-blockscout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-blockscout]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Sepolia Testnet (``sepolia``)
 *  - Holesky Testnet (``holesky``)
 *  - Ethereum Classic (``classic``)
 *  - Arbitrum (``arbitrum``)
 *  - Base (``base``)
 *  - Base Sepolia Testnet (``base-sepolia``)
 *  - Gnosis (``xdai``)
 *  - Optimism (``optimism``)
 *  - Optimism Sepolia Testnet (``optimism-sepolia``)
 *  - Polygon (``matic``)
 *
 *  @_subsection: api/providers/thirdparty:Blockscout  [providers-blockscout]
 */ __turbopack_context__.s([
    "BlockscoutProvider",
    ()=>BlockscoutProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
function getUrl(name) {
    switch(name){
        case "mainnet":
            return "https:/\/eth.blockscout.com/api/eth-rpc";
        case "sepolia":
            return "https:/\/eth-sepolia.blockscout.com/api/eth-rpc";
        case "holesky":
            return "https:/\/eth-holesky.blockscout.com/api/eth-rpc";
        case "classic":
            return "https:/\/etc.blockscout.com/api/eth-rpc";
        case "arbitrum":
            return "https:/\/arbitrum.blockscout.com/api/eth-rpc";
        case "base":
            return "https:/\/base.blockscout.com/api/eth-rpc";
        case "base-sepolia":
            return "https:/\/base-sepolia.blockscout.com/api/eth-rpc";
        case "matic":
            return "https:/\/polygon.blockscout.com/api/eth-rpc";
        case "optimism":
            return "https:/\/optimism.blockscout.com/api/eth-rpc";
        case "optimism-sepolia":
            return "https:/\/optimism-sepolia.blockscout.com/api/eth-rpc";
        case "xdai":
            return "https:/\/gnosis.blockscout.com/api/eth-rpc";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class BlockscoutProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new BlockscoutProvider(chainId, this.apiKey);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    isCommunityResource() {
        return this.apiKey === null;
    }
    getRpcRequest(req) {
        // Blockscout enforces the TAG argument for estimateGas
        const resp = super.getRpcRequest(req);
        if (resp && resp.method === "eth_estimateGas" && resp.args.length == 1) {
            resp.args = resp.args.slice();
            resp.args.push("latest");
        }
        return resp;
    }
    getRpcError(payload, _error) {
        const error = _error ? _error.error : null;
        // Blockscout currently drops the VM result and replaces it with a
        // human-readable string, so we need to make it machine-readable.
        if (error && error.code === -32015 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(error.data || "", true)) {
            const panicCodes = {
                "assert(false)": "01",
                "arithmetic underflow or overflow": "11",
                "division or modulo by zero": "12",
                "out-of-bounds array access; popping on an empty array": "31",
                "out-of-bounds access of an array or bytesN": "32"
            };
            let panicCode = "";
            if (error.message === "VM execution error.") {
                // eth_call passes this message
                panicCode = panicCodes[error.data] || "";
            } else if (panicCodes[error.message || ""]) {
                panicCode = panicCodes[error.message || ""];
            }
            if (panicCode) {
                error.message += " (reverted: ".concat(error.data, ")");
                error.data = "0x4e487b7100000000000000000000000000000000000000000000000000000000000000" + panicCode;
            }
        } else if (error && error.code === -32000) {
            if (error.message === "wrong transaction nonce") {
                error.message += " (nonce too low)";
            }
        }
        return super.getRpcError(payload, _error);
    }
    /**
     *  Returns a prepared request for connecting to %%network%%
     *  with %%apiKey%%.
     */ static getRequest(network) {
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"](getUrl(network.name));
        request.allowGzip = true;
        return request;
    }
    /**
     *  Creates a new **BlockscoutProvider**.
     */ constructor(_network, apiKey){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (apiKey == null) {
            apiKey = null;
        }
        const request = BlockscoutProvider.getRequest(network);
        super(request, network, {
            staticNetwork: network
        }), /**
     *  The API key.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            apiKey
        });
    }
} //# sourceMappingURL=provider-blockscout.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-pocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  [[link-pocket]] provides a third-party service for connecting to
 *  various blockchains over JSON-RPC.
 *
 *  **Supported Networks**
 *
 *  - Ethereum Mainnet (``mainnet``)
 *  - Goerli Testnet (``goerli``)
 *  - Polygon (``matic``)
 *  - Arbitrum (``arbitrum``)
 *
 *  @_subsection: api/providers/thirdparty:Pocket  [providers-pocket]
 */ __turbopack_context__.s([
    "PocketProvider",
    ()=>PocketProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
const defaultApplicationId = "62e1ad51b37b8e00394bda3b";
function getHost(name) {
    switch(name){
        case "mainnet":
            return "eth-mainnet.gateway.pokt.network";
        case "goerli":
            return "eth-goerli.gateway.pokt.network";
        case "matic":
            return "poly-mainnet.gateway.pokt.network";
        case "matic-mumbai":
            return "polygon-mumbai-rpc.gateway.pokt.network";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported network", "network", name);
}
class PocketProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"] {
    _getProvider(chainId) {
        try {
            return new PocketProvider(chainId, this.applicationId, this.applicationSecret);
        } catch (error) {}
        return super._getProvider(chainId);
    }
    /**
     *  Returns a prepared request for connecting to %%network%% with
     *  %%applicationId%%.
     */ static getRequest(network, applicationId, applicationSecret) {
        if (applicationId == null) {
            applicationId = defaultApplicationId;
        }
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"]("https://".concat(getHost(network.name), "/v1/lb/").concat(applicationId));
        request.allowGzip = true;
        if (applicationSecret) {
            request.setCredentials("", applicationSecret);
        }
        if (applicationId === defaultApplicationId) {
            request.retryFunc = async (request, response, attempt)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"])("PocketProvider");
                return true;
            };
        }
        return request;
    }
    isCommunityResource() {
        return this.applicationId === defaultApplicationId;
    }
    /**
     *  Create a new **PocketProvider**.
     *
     *  By default connecting to ``mainnet`` with a highly throttled
     *  API key.
     */ constructor(_network, applicationId, applicationSecret){
        if (_network == null) {
            _network = "mainnet";
        }
        const network = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
        if (applicationId == null) {
            applicationId = defaultApplicationId;
        }
        if (applicationSecret == null) {
            applicationSecret = null;
        }
        const options = {
            staticNetwork: network
        };
        const request = PocketProvider.getRequest(network, applicationId, applicationSecret);
        super(request, network, options), /**
     *  The Application ID for the Pocket connection.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "applicationId", void 0), /**
     *  The Application Secret for making authenticated requests
     *  to the Pocket connection.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "applicationSecret", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            applicationId,
            applicationSecret
        });
    }
} //# sourceMappingURL=provider-pocket.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/providers/provider-ipcsocket-browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IpcSocketProvider",
    ()=>IpcSocketProvider
]);
const IpcSocketProvider = undefined;
;
 //# sourceMappingURL=provider-ipcsocket-browser.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/utils/fixednumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  The **FixedNumber** class permits using values with decimal places,
 *  using fixed-pont math.
 *
 *  Fixed-point math is still based on integers under-the-hood, but uses an
 *  internal offset to store fractional components below, and each operation
 *  corrects for this after each operation.
 *
 *  @_section: api/utils/fixed-point-math:Fixed-Point Maths  [about-fixed-point-math]
 */ __turbopack_context__.s([
    "FixedNumber",
    ()=>FixedNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
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
const BN_N1 = BigInt(-1);
const BN_0 = BigInt(0);
const BN_1 = BigInt(1);
const BN_5 = BigInt(5);
const _guard = {};
// Constant to pull zeros from for multipliers
let Zeros = "0000";
while(Zeros.length < 80){
    Zeros += Zeros;
}
// Returns a string "1" followed by decimal "0"s
function getTens(decimals) {
    let result = Zeros;
    while(result.length < decimals){
        result += result;
    }
    return BigInt("1" + result.substring(0, decimals));
}
function checkValue(val, format, safeOp) {
    const width = BigInt(format.width);
    if (format.signed) {
        const limit = BN_1 << width - BN_1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(safeOp == null || val >= -limit && val < limit, "overflow", "NUMERIC_FAULT", {
            operation: safeOp,
            fault: "overflow",
            value: val
        });
        if (val > BN_0) {
            val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromTwos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mask"])(val, width), width);
        } else {
            val = -(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromTwos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mask"])(-val, width), width);
        }
    } else {
        const limit = BN_1 << width;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(safeOp == null || val >= 0 && val < limit, "overflow", "NUMERIC_FAULT", {
            operation: safeOp,
            fault: "overflow",
            value: val
        });
        val = (val % limit + limit) % limit & limit - BN_1;
    }
    return val;
}
function getFormat(value) {
    if (typeof value === "number") {
        value = "fixed128x".concat(value);
    }
    let signed = true;
    let width = 128;
    let decimals = 18;
    if (typeof value === "string") {
        // Parse the format string
        if (value === "fixed") {
        // defaults...
        } else if (value === "ufixed") {
            signed = false;
        } else {
            const match = value.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(match, "invalid fixed format", "format", value);
            signed = match[1] !== "u";
            width = parseInt(match[2]);
            decimals = parseInt(match[3]);
        }
    } else if (value) {
        // Extract the values from the object
        const v = value;
        const check = (key, type, defaultValue)=>{
            if (v[key] == null) {
                return defaultValue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof v[key] === type, "invalid fixed format (" + key + " not " + type + ")", "format." + key, v[key]);
            return v[key];
        };
        signed = check("signed", "boolean", signed);
        width = check("width", "number", width);
        decimals = check("decimals", "number", decimals);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(width % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", width);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(decimals <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", decimals);
    const name = (signed ? "" : "u") + "fixed" + String(width) + "x" + String(decimals);
    return {
        signed,
        width,
        decimals,
        name
    };
}
function toString(val, decimals) {
    let negative = "";
    if (val < BN_0) {
        negative = "-";
        val *= BN_N1;
    }
    let str = val.toString();
    // No decimal point for whole values
    if (decimals === 0) {
        return negative + str;
    }
    // Pad out to the whole component (including a whole digit)
    while(str.length <= decimals){
        str = Zeros + str;
    }
    // Insert the decimal point
    const index = str.length - decimals;
    str = str.substring(0, index) + "." + str.substring(index);
    // Trim the whole component (leaving at least one 0)
    while(str[0] === "0" && str[1] !== "."){
        str = str.substring(1);
    }
    // Trim the decimal component (leaving at least one 0)
    while(str[str.length - 1] === "0" && str[str.length - 2] !== "."){
        str = str.substring(0, str.length - 1);
    }
    return negative + str;
}
var _format = /*#__PURE__*/ new WeakMap(), // The actual value (accounting for decimals)
_val = /*#__PURE__*/ new WeakMap(), // A base-10 value to multiple values by to maintain the magnitude
_tens = /*#__PURE__*/ new WeakMap(), _checkFormat = /*#__PURE__*/ new WeakSet(), _checkValue = /*#__PURE__*/ new WeakSet(), _add = /*#__PURE__*/ new WeakSet(), _sub = /*#__PURE__*/ new WeakSet(), _mul = /*#__PURE__*/ new WeakSet(), _div = /*#__PURE__*/ new WeakSet();
class FixedNumber {
    /**
     *  If true, negative values are permitted, otherwise only
     *  positive values and zero are allowed.
     */ get signed() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format).signed;
    }
    /**
     *  The number of bits available to store the value.
     */ get width() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format).width;
    }
    /**
     *  The number of decimal places in the fixed-point arithment field.
     */ get decimals() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format).decimals;
    }
    /**
     *  The value as an integer, based on the smallest unit the
     *  [[decimals]] allow.
     */ get value() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val);
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% added
     *  to %%other%%, ignoring overflow.
     */ addUnsafe(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _add, add).call(this, other);
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% added
     *  to %%other%%. A [[NumericFaultError]] is thrown if overflow
     *  occurs.
     */ add(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _add, add).call(this, other, "add");
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
     *  from %%this%%, ignoring overflow.
     */ subUnsafe(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _sub, sub).call(this, other);
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
     *  from %%this%%. A [[NumericFaultError]] is thrown if overflow
     *  occurs.
     */ sub(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _sub, sub).call(this, other, "sub");
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
     *  by %%other%%, ignoring overflow and underflow (precision loss).
     */ mulUnsafe(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mul, mul).call(this, other);
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
     *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
     *  occurs.
     */ mul(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mul, mul).call(this, other, "mul");
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
     *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
     *  occurs or if underflow (precision loss) occurs.
     */ mulSignal(other) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat, checkFormat).call(this, other);
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(other, _val);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(value % (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens) === BN_0, "precision lost during signalling mul", "NUMERIC_FAULT", {
            operation: "mulSignal",
            fault: "underflow",
            value: this
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, value / (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens), "mulSignal");
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% divided
     *  by %%other%%, ignoring underflow (precision loss). A
     *  [[NumericFaultError]] is thrown if overflow occurs.
     */ divUnsafe(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _div, div).call(this, other);
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% divided
     *  by %%other%%, ignoring underflow (precision loss). A
     *  [[NumericFaultError]] is thrown if overflow occurs.
     */ div(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _div, div).call(this, other, "div");
    }
    /**
     *  Returns a new [[FixedNumber]] with the result of %%this%% divided
     *  by %%other%%. A [[NumericFaultError]] is thrown if underflow
     *  (precision loss) occurs.
     */ divSignal(other) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(other, _val) !== BN_0, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat, checkFormat).call(this, other);
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(value % (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(other, _val) === BN_0, "precision lost during signalling div", "NUMERIC_FAULT", {
            operation: "divSignal",
            fault: "underflow",
            value: this
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, value / (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(other, _val), "divSignal");
    }
    /**
     *  Returns a comparison result between %%this%% and %%other%%.
     *
     *  This is suitable for use in sorting, where ``-1`` implies %%this%%
     *  is smaller, ``1`` implies %%this%% is larger and ``0`` implies
     *  both are equal.
     */ cmp(other) {
        let a = this.value, b = other.value;
        // Coerce a and b to the same magnitude
        const delta = this.decimals - other.decimals;
        if (delta > 0) {
            b *= getTens(delta);
        } else if (delta < 0) {
            a *= getTens(-delta);
        }
        // Comnpare
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
    /**
     *  Returns true if %%other%% is equal to %%this%%.
     */ eq(other) {
        return this.cmp(other) === 0;
    }
    /**
     *  Returns true if %%other%% is less than to %%this%%.
     */ lt(other) {
        return this.cmp(other) < 0;
    }
    /**
     *  Returns true if %%other%% is less than or equal to %%this%%.
     */ lte(other) {
        return this.cmp(other) <= 0;
    }
    /**
     *  Returns true if %%other%% is greater than to %%this%%.
     */ gt(other) {
        return this.cmp(other) > 0;
    }
    /**
     *  Returns true if %%other%% is greater than or equal to %%this%%.
     */ gte(other) {
        return this.cmp(other) >= 0;
    }
    /**
     *  Returns a new [[FixedNumber]] which is the largest **integer**
     *  that is less than or equal to %%this%%.
     *
     *  The decimal component of the result will always be ``0``.
     */ floor() {
        let val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) < BN_0) {
            val -= (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens) - BN_1;
        }
        val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, val, "floor");
    }
    /**
     *  Returns a new [[FixedNumber]] which is the smallest **integer**
     *  that is greater than or equal to %%this%%.
     *
     *  The decimal component of the result will always be ``0``.
     */ ceiling() {
        let val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) > BN_0) {
            val += (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens) - BN_1;
        }
        val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, val, "ceiling");
    }
    /**
     *  Returns a new [[FixedNumber]] with the decimal component
     *  rounded up on ties at %%decimals%% places.
     */ round(decimals) {
        if (decimals == null) {
            decimals = 0;
        }
        // Not enough precision to not already be rounded
        if (decimals >= this.decimals) {
            return this;
        }
        const delta = this.decimals - decimals;
        const bump = BN_5 * getTens(delta - 1);
        let value = this.value + bump;
        const tens = getTens(delta);
        value = value / tens * tens;
        checkValue(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format), "round");
        return new FixedNumber(_guard, value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format));
    }
    /**
     *  Returns true if %%this%% is equal to ``0``.
     */ isZero() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) === BN_0;
    }
    /**
     *  Returns true if %%this%% is less than ``0``.
     */ isNegative() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) < BN_0;
    }
    /**
     *  Returns the string representation of %%this%%.
     */ toString() {
        return this._value;
    }
    /**
     *  Returns a float approximation.
     *
     *  Due to IEEE 754 precission (or lack thereof), this function
     *  can only return an approximation and most values will contain
     *  rounding errors.
     */ toUnsafeFloat() {
        return parseFloat(this.toString());
    }
    /**
     *  Return a new [[FixedNumber]] with the same value but has had
     *  its field set to %%format%%.
     *
     *  This will throw if the value cannot fit into %%format%%.
     */ toFormat(format) {
        return FixedNumber.fromString(this.toString(), format);
    }
    /**
     *  Creates a new [[FixedNumber]] for %%value%% divided by
     *  %%decimal%% places with %%format%%.
     *
     *  This will throw a [[NumericFaultError]] if %%value%% (once adjusted
     *  for %%decimals%%) cannot fit in %%format%%, either due to overflow
     *  or underflow (precision loss).
     */ static fromValue(_value, _decimals, _format) {
        const decimals = _decimals == null ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(_decimals);
        const format = getFormat(_format);
        let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(_value, "value");
        const delta = decimals - format.decimals;
        if (delta > 0) {
            const tens = getTens(delta);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(value % tens === BN_0, "value loses precision for format", "NUMERIC_FAULT", {
                operation: "fromValue",
                fault: "underflow",
                value: _value
            });
            value /= tens;
        } else if (delta < 0) {
            value *= getTens(-delta);
        }
        checkValue(value, format, "fromValue");
        return new FixedNumber(_guard, value, format);
    }
    /**
     *  Creates a new [[FixedNumber]] for %%value%% with %%format%%.
     *
     *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
     *  in %%format%%, either due to overflow or underflow (precision loss).
     */ static fromString(_value, _format) {
        const match = _value.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(match && match[2].length + match[3].length > 0, "invalid FixedNumber string value", "value", _value);
        const format = getFormat(_format);
        let whole = match[2] || "0", decimal = match[3] || "";
        // Pad out the decimals
        while(decimal.length < format.decimals){
            decimal += Zeros;
        }
        // Check precision is safe
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decimal.substring(format.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
            operation: "fromString",
            fault: "underflow",
            value: _value
        });
        // Remove extra padding
        decimal = decimal.substring(0, format.decimals);
        const value = BigInt(match[1] + whole + decimal);
        checkValue(value, format, "fromString");
        return new FixedNumber(_guard, value, format);
    }
    /**
     *  Creates a new [[FixedNumber]] with the big-endian representation
     *  %%value%% with %%format%%.
     *
     *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
     *  in %%format%% due to overflow.
     */ static fromBytes(_value, _format) {
        let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_value, "value"));
        const format = getFormat(_format);
        if (format.signed) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromTwos"])(value, format.width);
        }
        checkValue(value, format, "fromBytes");
        return new FixedNumber(_guard, value, format);
    }
    // Use this when changing this file to get some typing info,
    // but then switch to any to mask the internal type
    //constructor(guard: any, value: bigint, format: _FixedFormat) {
    /**
     *  @private
     */ constructor(guard, value, format){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _add);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _sub);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mul);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _div);
        /**
     *  The specific fixed-point arithmetic field for this value.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "format", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens, {
            writable: true,
            value: void 0
        });
        /**
     *  This is a property so console.log shows a human-meaningful value.
     *
     *  @private
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_value", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPrivate"])(guard, _guard, "FixedNumber");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val, value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format, format);
        const _value = toString(value, format.decimals);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            format: format.name,
            _value
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens, getTens(format.decimals));
    }
} //const f1 = FixedNumber.fromString("12.56", "fixed16x2");
 //const f2 = FixedNumber.fromString("0.3", "fixed16x2");
 //console.log(f1.divSignal(f2));
 //const BUMP = FixedNumber.from("0.5");
 //# sourceMappingURL=fixednumber.js.map
function checkFormat(other) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(this.format === other.format, "incompatible format; use fixedNumber.toFormat", "other", other);
}
function checkValue1(val, safeOp) {
    /*
                const width = BigInt(this.width);
                if (this.signed) {
                    const limit = (BN_1 << (width - BN_1));
                    assert(safeOp == null || (val >= -limit  && val < limit), "overflow", "NUMERIC_FAULT", {
                        operation: <string>safeOp, fault: "overflow", value: val
                    });
        
                    if (val > BN_0) {
                        val = fromTwos(mask(val, width), width);
                    } else {
                        val = -fromTwos(mask(-val, width), width);
                    }
        
                } else {
                    const masked = mask(val, width);
                    assert(safeOp == null || (val >= 0 && val === masked), "overflow", "NUMERIC_FAULT", {
                        operation: <string>safeOp, fault: "overflow", value: val
                    });
                    val = masked;
                }
        */ val = checkValue(val, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format), safeOp);
    return new FixedNumber(_guard, val, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _format));
}
function add(o, safeOp) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat, checkFormat).call(this, o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, _val), safeOp);
}
function sub(o, safeOp) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat, checkFormat).call(this, o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, _val), safeOp);
}
function mul(o, safeOp) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat, checkFormat).call(this, o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, _val) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens), safeOp);
}
function div(o, safeOp) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, _val) !== BN_0, "division by zero", "NUMERIC_FAULT", {
        operation: "div",
        fault: "divide-by-zero",
        value: this
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkFormat, checkFormat).call(this, o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkValue, checkValue1).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _val) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tens) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, _val), safeOp);
}
}),
"[project]/frontend/node_modules/ethers/lib.esm/utils/units.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  Most interactions with Ethereum requires integer values, which use
 *  the smallest magnitude unit.
 *
 *  For example, imagine dealing with dollars and cents. Since dollars
 *  are divisible, non-integer values are possible, such as ``$10.77``.
 *  By using the smallest indivisible unit (i.e. cents), the value can
 *  be kept as the integer ``1077``.
 *
 *  When receiving decimal input from the user (as a decimal string),
 *  the value should be converted to an integer and when showing a user
 *  a value, the integer value should be converted to a decimal string.
 *
 *  This creates a clear distinction, between values to be used by code
 *  (integers) and values used for display logic to users (decimals).
 *
 *  The native unit in Ethereum, //ether// is divisible to 18 decimal places,
 *  where each individual unit is called a //wei//.
 *
 *  @_subsection api/utils:Unit Conversion  [about-units]
 */ __turbopack_context__.s([
    "formatEther",
    ()=>formatEther,
    "formatUnits",
    ()=>formatUnits,
    "parseEther",
    ()=>parseEther,
    "parseUnits",
    ()=>parseUnits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fixednumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fixednumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
;
;
;
const names = [
    "wei",
    "kwei",
    "mwei",
    "gwei",
    "szabo",
    "finney",
    "ether"
];
function formatUnits(value, unit) {
    let decimals = 18;
    if (typeof unit === "string") {
        const index = names.indexOf(unit);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index >= 0, "invalid unit", "unit", unit);
        decimals = 3 * index;
    } else if (unit != null) {
        decimals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(unit, "unit");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fixednumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FixedNumber"].fromValue(value, decimals, {
        decimals,
        width: 512
    }).toString();
}
function parseUnits(value, unit) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof value === "string", "value must be a string", "value", value);
    let decimals = 18;
    if (typeof unit === "string") {
        const index = names.indexOf(unit);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index >= 0, "invalid unit", "unit", unit);
        decimals = 3 * index;
    } else if (unit != null) {
        decimals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(unit, "unit");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fixednumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FixedNumber"].fromString(value, {
        decimals,
        width: 512
    }).value;
}
function formatEther(wei) {
    return formatUnits(wei, 18);
}
function parseEther(ether) {
    return parseUnits(ether, 18);
} //# sourceMappingURL=units.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/utils/uuid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  Explain UUID and link to RFC here.
 *
 *  @_subsection: api/utils:UUID  [about-uuid]
 */ __turbopack_context__.s([
    "uuidV4",
    ()=>uuidV4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
function uuidV4(randomBytes) {
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(randomBytes, "randomBytes");
    // Section: 4.1.3:
    // - time_hi_and_version[12:16] = 0b0100
    bytes[6] = bytes[6] & 0x0f | 0x40;
    // Section 4.4
    // - clock_seq_hi_and_reserved[6] = 0b0
    // - clock_seq_hi_and_reserved[7] = 0b1
    bytes[8] = bytes[8] & 0x3f | 0x80;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(bytes);
    return [
        value.substring(2, 10),
        value.substring(10, 14),
        value.substring(14, 18),
        value.substring(18, 22),
        value.substring(22, 34)
    ].join("-");
} //# sourceMappingURL=uuid.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/decode-owl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "decodeOwl",
    ()=>decodeOwl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
;
const subsChrs = " !#$%&'()*+,-./<=>?@[]^_`{|}~";
const Word = /^[a-z]*$/i;
function unfold(words, sep) {
    let initial = 97;
    return words.reduce((accum, word)=>{
        if (word === sep) {
            initial++;
        } else if (word.match(Word)) {
            accum.push(String.fromCharCode(initial) + word);
        } else {
            initial = 97;
            accum.push(word);
        }
        return accum;
    }, []);
}
function decode(data, subs) {
    // Replace all the substitutions with their expanded form
    for(let i = subsChrs.length - 1; i >= 0; i--){
        data = data.split(subsChrs[i]).join(subs.substring(2 * i, 2 * i + 2));
    }
    // Get all tle clumps; each suffix, first-increment and second-increment
    const clumps = [];
    const leftover = data.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (all, item, semi, word)=>{
        if (semi) {
            for(let i = parseInt(semi); i >= 0; i--){
                clumps.push(";");
            }
        } else {
            clumps.push(item.toLowerCase());
        }
        return "";
    });
    /* c8 ignore start */ if (leftover) {
        throw new Error("leftovers: ".concat(JSON.stringify(leftover)));
    }
    /* c8 ignore stop */ return unfold(unfold(clumps, ";"), ":");
}
function decodeOwl(data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(data[0] === "0", "unsupported auwl data", "data", data);
    return decode(data.substring(1 + 2 * subsChrs.length), data.substring(1, 1 + 2 * subsChrs.length));
} //# sourceMappingURL=decode-owl.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wordlist",
    ()=>Wordlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
;
;
class Wordlist {
    /**
     *  Sub-classes may override this to provide a language-specific
     *  method for spliting %%phrase%% into individual words.
     *
     *  By default, %%phrase%% is split using any sequences of
     *  white-space as defined by regular expressions (i.e. ``/\s+/``).
     */ split(phrase) {
        return phrase.toLowerCase().split(/\s+/g);
    }
    /**
     *  Sub-classes may override this to provider a language-specific
     *  method for joining %%words%% into a phrase.
     *
     *  By default, %%words%% are joined by a single space.
     */ join(words) {
        return words.join(" ");
    }
    /**
     *  Creates a new Wordlist instance.
     *
     *  Sub-classes MUST call this if they provide their own constructor,
     *  passing in the locale string of the language.
     *
     *  Generally there is no need to create instances of a Wordlist,
     *  since each language-specific Wordlist creates an instance and
     *  there is no state kept internally, so they are safe to share.
     */ constructor(locale){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "locale", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            locale
        });
    }
} //# sourceMappingURL=wordlist.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist-owl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Use the encode-latin.js script to create the necessary
// data files to be consumed by this class
__turbopack_context__.s([
    "WordlistOwl",
    ()=>WordlistOwl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$decode$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/decode-owl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var _data = /*#__PURE__*/ new WeakMap(), _checksum = /*#__PURE__*/ new WeakMap(), _words = /*#__PURE__*/ new WeakMap(), _loadWords = /*#__PURE__*/ new WeakSet();
class WordlistOwl extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wordlist"] {
    /**
     *  The OWL-encoded data.
     */ get _data() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data);
    }
    /**
     *  Decode all the words for the wordlist.
     */ _decodeWords() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$decode$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeOwl"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data));
    }
    getWord(index) {
        const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _loadWords, loadWords).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index >= 0 && index < words.length, "invalid word index: ".concat(index), "index", index);
        return words[index];
    }
    getWordIndex(word) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _loadWords, loadWords).call(this).indexOf(word);
    }
    /**
     *  Creates a new Wordlist for %%locale%% using the OWL %%data%%
     *  and validated against the %%checksum%%.
     */ constructor(locale, data, checksum){
        super(locale), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _loadWords), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checksum, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _words, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _data, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checksum, checksum);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _words, null);
    }
} //# sourceMappingURL=wordlist-owl.js.map
function loadWords() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _words) == null) {
        const words = this._decodeWords();
        // Verify the computed list matches the official list
        const checksum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"])(words.join("\n") + "\n");
        /* c8 ignore start */ if (checksum !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checksum)) {
            throw new Error("BIP39 Wordlist for ".concat(this.locale, " FAILED"));
        }
        /* c8 ignore stop */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _words, words);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _words);
}
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/lang-en.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangEn",
    ()=>LangEn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist-owl.js [app-client] (ecmascript)");
;
const words = "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO";
const checksum = "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60";
let wordlist = null;
class LangEn extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordlistOwl"] {
    /**
     *  Returns a singleton instance of a ``LangEn``, creating it
     *  if this is the first time being called.
     */ static wordlist() {
        if (wordlist == null) {
            wordlist = new LangEn();
        }
        return wordlist;
    }
    /**
     *  Creates a new instance of the English language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langEn]] should suffice.
     *
     *  @_ignore:
     */ constructor(){
        super("en", words, checksum);
    }
} //# sourceMappingURL=lang-en.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/mnemonic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mnemonic",
    ()=>Mnemonic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/sha2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/lang-en.js [app-client] (ecmascript)");
;
;
;
;
// Returns a byte with the MSB bits set
function getUpperMask(bits) {
    return (1 << bits) - 1 << 8 - bits & 0xff;
}
// Returns a byte with the LSB bits set
function getLowerMask(bits) {
    return (1 << bits) - 1 & 0xff;
}
function mnemonicToEntropy(mnemonic, wordlist) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNormalize"])("NFKD");
    if (wordlist == null) {
        wordlist = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"].wordlist();
    }
    const words = wordlist.split(mnemonic);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(words.length % 3 === 0 && words.length >= 12 && words.length <= 24, "invalid mnemonic length", "mnemonic", "[ REDACTED ]");
    const entropy = new Uint8Array(Math.ceil(11 * words.length / 8));
    let offset = 0;
    for(let i = 0; i < words.length; i++){
        let index = wordlist.getWordIndex(words[i].normalize("NFKD"));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index >= 0, "invalid mnemonic word at index ".concat(i), "mnemonic", "[ REDACTED ]");
        for(let bit = 0; bit < 11; bit++){
            if (index & 1 << 10 - bit) {
                entropy[offset >> 3] |= 1 << 7 - offset % 8;
            }
            offset++;
        }
    }
    const entropyBits = 32 * words.length / 3;
    const checksumBits = words.length / 3;
    const checksumMask = getUpperMask(checksumBits);
    const checksum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(entropy.slice(0, entropyBits / 8)))[0] & checksumMask;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(checksum === (entropy[entropy.length - 1] & checksumMask), "invalid mnemonic checksum", "mnemonic", "[ REDACTED ]");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(entropy.slice(0, entropyBits / 8));
}
function entropyToMnemonic(entropy, wordlist) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(entropy.length % 4 === 0 && entropy.length >= 16 && entropy.length <= 32, "invalid entropy size", "entropy", "[ REDACTED ]");
    if (wordlist == null) {
        wordlist = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"].wordlist();
    }
    const indices = [
        0
    ];
    let remainingBits = 11;
    for(let i = 0; i < entropy.length; i++){
        // Consume the whole byte (with still more to go)
        if (remainingBits > 8) {
            indices[indices.length - 1] <<= 8;
            indices[indices.length - 1] |= entropy[i];
            remainingBits -= 8;
        // This byte will complete an 11-bit index
        } else {
            indices[indices.length - 1] <<= remainingBits;
            indices[indices.length - 1] |= entropy[i] >> 8 - remainingBits;
            // Start the next word
            indices.push(entropy[i] & getLowerMask(8 - remainingBits));
            remainingBits += 3;
        }
    }
    // Compute the checksum bits
    const checksumBits = entropy.length / 4;
    const checksum = parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(entropy).substring(2, 4), 16) & getUpperMask(checksumBits);
    // Shift the checksum into the word indices
    indices[indices.length - 1] <<= checksumBits;
    indices[indices.length - 1] |= checksum >> 8 - checksumBits;
    return wordlist.join(indices.map((index)=>wordlist.getWord(index)));
}
const _guard = {};
class Mnemonic {
    /**
     *  Returns the seed for the mnemonic.
     */ computeSeed() {
        const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])("mnemonic" + this.password, "NFKD");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(this.phrase, "NFKD"), salt, 2048, 64, "sha512");
    }
    /**
     *  Creates a new Mnemonic for the %%phrase%%.
     *
     *  The default %%password%% is the empty string and the default
     *  wordlist is the [English wordlists](LangEn).
     */ static fromPhrase(phrase, password, wordlist) {
        // Normalize the case and space; throws if invalid
        const entropy = mnemonicToEntropy(phrase, wordlist);
        phrase = entropyToMnemonic((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(entropy), wordlist);
        return new Mnemonic(_guard, entropy, phrase, password, wordlist);
    }
    /**
     *  Create a new **Mnemonic** from the %%entropy%%.
     *
     *  The default %%password%% is the empty string and the default
     *  wordlist is the [English wordlists](LangEn).
     */ static fromEntropy(_entropy, password, wordlist) {
        const entropy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_entropy, "entropy");
        const phrase = entropyToMnemonic(entropy, wordlist);
        return new Mnemonic(_guard, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(entropy), phrase, password, wordlist);
    }
    /**
     *  Returns the phrase for %%mnemonic%%.
     */ static entropyToPhrase(_entropy, wordlist) {
        const entropy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_entropy, "entropy");
        return entropyToMnemonic(entropy, wordlist);
    }
    /**
     *  Returns the entropy for %%phrase%%.
     */ static phraseToEntropy(phrase, wordlist) {
        return mnemonicToEntropy(phrase, wordlist);
    }
    /**
     *  Returns true if %%phrase%% is a valid [[link-bip-39]] phrase.
     *
     *  This checks all the provided words belong to the %%wordlist%%,
     *  that the length is valid and the checksum is correct.
     */ static isValidMnemonic(phrase, wordlist) {
        try {
            mnemonicToEntropy(phrase, wordlist);
            return true;
        } catch (error) {}
        return false;
    }
    /**
     *  @private
     */ constructor(guard, entropy, phrase, password, wordlist){
        /**
     *  The mnemonic phrase of 12, 15, 18, 21 or 24 words.
     *
     *  Use the [[wordlist]] ``split`` method to get the individual words.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "phrase", void 0);
        /**
     *  The password used for this mnemonic. If no password is used this
     *  is the empty string (i.e. ``""``) as per the specification.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "password", void 0);
        /**
     *  The wordlist for this mnemonic.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "wordlist", void 0);
        /**
     *  The underlying entropy which the mnemonic encodes.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "entropy", void 0);
        if (password == null) {
            password = "";
        }
        if (wordlist == null) {
            wordlist = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"].wordlist();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPrivate"])(guard, _guard, "Mnemonic");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            phrase,
            password,
            wordlist,
            entropy
        });
    }
} //# sourceMappingURL=mnemonic.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/base-wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseWallet",
    ()=>BaseWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/message.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-signer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var _signingKey = /*#__PURE__*/ new WeakMap();
class BaseWallet extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSigner"] {
    // Store private values behind getters to reduce visibility
    // in console.log
    /**
     *  The [[SigningKey]] used for signing payloads.
     */ get signingKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signingKey);
    }
    /**
     *  The private key for this wallet.
     */ get privateKey() {
        return this.signingKey.privateKey;
    }
    async getAddress() {
        return this.address;
    }
    connect(provider) {
        return new BaseWallet((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signingKey), provider);
    }
    async signTransaction(tx) {
        tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyRequest"])(tx);
        // Replace any Addressable or ENS name with an address
        const { to, from } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            to: tx.to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(tx.to, this) : undefined,
            from: tx.from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(tx.from, this) : undefined
        });
        if (to != null) {
            tx.to = to;
        }
        if (from != null) {
            tx.from = from;
        }
        if (tx.from != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(tx.from) === this.address, "transaction from address mismatch", "tx.from", tx.from);
            delete tx.from;
        }
        // Build the transaction
        const btx = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].from(tx);
        btx.signature = this.signingKey.sign(btx.unsignedHash);
        return btx.serialized;
    }
    async signMessage(message) {
        return this.signMessageSync(message);
    }
    // @TODO: Add a secialized signTx and signTyped sync that enforces
    // all parameters are known?
    /**
     *  Returns the signature for %%message%% signed with this wallet.
     */ signMessageSync(message) {
        return this.signingKey.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(message)).serialized;
    }
    /**
     *  Returns the Authorization for %%auth%%.
     */ authorizeSync(auth) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof auth.address === "string", "invalid address for authorizeSync", "auth.address", auth);
        const signature = this.signingKey.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashAuthorization"])(auth));
        return Object.assign({}, {
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(auth.address),
            nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(auth.nonce || 0),
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(auth.chainId || 0)
        }, {
            signature
        });
    }
    /**
     *  Resolves to the Authorization for %%auth%%.
     */ async authorize(auth) {
        auth = Object.assign({}, auth, {
            address: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(auth.address, this)
        });
        return this.authorizeSync(await this.populateAuthorization(auth));
    }
    async signTypedData(domain, types, value) {
        // Populate any ENS names
        const populated = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedDataEncoder"].resolveNames(domain, types, value, async (name)=>{
            // @TODO: this should use resolveName; addresses don't
            //        need a provider
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.provider != null, "cannot resolve ENS names without a provider", "UNSUPPORTED_OPERATION", {
                operation: "resolveName",
                info: {
                    name
                }
            });
            const address = await this.provider.resolveName(name);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(address != null, "unconfigured ENS name", "UNCONFIGURED_NAME", {
                value: name
            });
            return address;
        });
        return this.signingKey.sign(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedDataEncoder"].hash(populated.domain, types, populated.value)).serialized;
    }
    /**
     *  Creates a new BaseWallet for %%privateKey%%, optionally
     *  connected to %%provider%%.
     *
     *  If %%provider%% is not specified, only offline methods can
     *  be used.
     */ constructor(privateKey, provider){
        super(provider), /**
     *  The wallet address.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "address", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signingKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(privateKey && typeof privateKey.sign === "function", "invalid private key", "privateKey", "[ REDACTED ]");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signingKey, privateKey);
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeAddress"])(this.signingKey.publicKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            address
        });
    }
} //# sourceMappingURL=base-wallet.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/aes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */ __turbopack_context__.s([
    "AES",
    ()=>AES
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AES_key, _AES_Kd, _AES_Ke;
// Number of rounds by keysize
const numberOfRounds = {
    16: 10,
    24: 12,
    32: 14
};
// Round constant words
const rcon = [
    0x01,
    0x02,
    0x04,
    0x08,
    0x10,
    0x20,
    0x40,
    0x80,
    0x1b,
    0x36,
    0x6c,
    0xd8,
    0xab,
    0x4d,
    0x9a,
    0x2f,
    0x5e,
    0xbc,
    0x63,
    0xc6,
    0x97,
    0x35,
    0x6a,
    0xd4,
    0xb3,
    0x7d,
    0xfa,
    0xef,
    0xc5,
    0x91
];
// S-box and Inverse S-box (S is for Substitution)
const S = [
    0x63,
    0x7c,
    0x77,
    0x7b,
    0xf2,
    0x6b,
    0x6f,
    0xc5,
    0x30,
    0x01,
    0x67,
    0x2b,
    0xfe,
    0xd7,
    0xab,
    0x76,
    0xca,
    0x82,
    0xc9,
    0x7d,
    0xfa,
    0x59,
    0x47,
    0xf0,
    0xad,
    0xd4,
    0xa2,
    0xaf,
    0x9c,
    0xa4,
    0x72,
    0xc0,
    0xb7,
    0xfd,
    0x93,
    0x26,
    0x36,
    0x3f,
    0xf7,
    0xcc,
    0x34,
    0xa5,
    0xe5,
    0xf1,
    0x71,
    0xd8,
    0x31,
    0x15,
    0x04,
    0xc7,
    0x23,
    0xc3,
    0x18,
    0x96,
    0x05,
    0x9a,
    0x07,
    0x12,
    0x80,
    0xe2,
    0xeb,
    0x27,
    0xb2,
    0x75,
    0x09,
    0x83,
    0x2c,
    0x1a,
    0x1b,
    0x6e,
    0x5a,
    0xa0,
    0x52,
    0x3b,
    0xd6,
    0xb3,
    0x29,
    0xe3,
    0x2f,
    0x84,
    0x53,
    0xd1,
    0x00,
    0xed,
    0x20,
    0xfc,
    0xb1,
    0x5b,
    0x6a,
    0xcb,
    0xbe,
    0x39,
    0x4a,
    0x4c,
    0x58,
    0xcf,
    0xd0,
    0xef,
    0xaa,
    0xfb,
    0x43,
    0x4d,
    0x33,
    0x85,
    0x45,
    0xf9,
    0x02,
    0x7f,
    0x50,
    0x3c,
    0x9f,
    0xa8,
    0x51,
    0xa3,
    0x40,
    0x8f,
    0x92,
    0x9d,
    0x38,
    0xf5,
    0xbc,
    0xb6,
    0xda,
    0x21,
    0x10,
    0xff,
    0xf3,
    0xd2,
    0xcd,
    0x0c,
    0x13,
    0xec,
    0x5f,
    0x97,
    0x44,
    0x17,
    0xc4,
    0xa7,
    0x7e,
    0x3d,
    0x64,
    0x5d,
    0x19,
    0x73,
    0x60,
    0x81,
    0x4f,
    0xdc,
    0x22,
    0x2a,
    0x90,
    0x88,
    0x46,
    0xee,
    0xb8,
    0x14,
    0xde,
    0x5e,
    0x0b,
    0xdb,
    0xe0,
    0x32,
    0x3a,
    0x0a,
    0x49,
    0x06,
    0x24,
    0x5c,
    0xc2,
    0xd3,
    0xac,
    0x62,
    0x91,
    0x95,
    0xe4,
    0x79,
    0xe7,
    0xc8,
    0x37,
    0x6d,
    0x8d,
    0xd5,
    0x4e,
    0xa9,
    0x6c,
    0x56,
    0xf4,
    0xea,
    0x65,
    0x7a,
    0xae,
    0x08,
    0xba,
    0x78,
    0x25,
    0x2e,
    0x1c,
    0xa6,
    0xb4,
    0xc6,
    0xe8,
    0xdd,
    0x74,
    0x1f,
    0x4b,
    0xbd,
    0x8b,
    0x8a,
    0x70,
    0x3e,
    0xb5,
    0x66,
    0x48,
    0x03,
    0xf6,
    0x0e,
    0x61,
    0x35,
    0x57,
    0xb9,
    0x86,
    0xc1,
    0x1d,
    0x9e,
    0xe1,
    0xf8,
    0x98,
    0x11,
    0x69,
    0xd9,
    0x8e,
    0x94,
    0x9b,
    0x1e,
    0x87,
    0xe9,
    0xce,
    0x55,
    0x28,
    0xdf,
    0x8c,
    0xa1,
    0x89,
    0x0d,
    0xbf,
    0xe6,
    0x42,
    0x68,
    0x41,
    0x99,
    0x2d,
    0x0f,
    0xb0,
    0x54,
    0xbb,
    0x16
];
const Si = [
    0x52,
    0x09,
    0x6a,
    0xd5,
    0x30,
    0x36,
    0xa5,
    0x38,
    0xbf,
    0x40,
    0xa3,
    0x9e,
    0x81,
    0xf3,
    0xd7,
    0xfb,
    0x7c,
    0xe3,
    0x39,
    0x82,
    0x9b,
    0x2f,
    0xff,
    0x87,
    0x34,
    0x8e,
    0x43,
    0x44,
    0xc4,
    0xde,
    0xe9,
    0xcb,
    0x54,
    0x7b,
    0x94,
    0x32,
    0xa6,
    0xc2,
    0x23,
    0x3d,
    0xee,
    0x4c,
    0x95,
    0x0b,
    0x42,
    0xfa,
    0xc3,
    0x4e,
    0x08,
    0x2e,
    0xa1,
    0x66,
    0x28,
    0xd9,
    0x24,
    0xb2,
    0x76,
    0x5b,
    0xa2,
    0x49,
    0x6d,
    0x8b,
    0xd1,
    0x25,
    0x72,
    0xf8,
    0xf6,
    0x64,
    0x86,
    0x68,
    0x98,
    0x16,
    0xd4,
    0xa4,
    0x5c,
    0xcc,
    0x5d,
    0x65,
    0xb6,
    0x92,
    0x6c,
    0x70,
    0x48,
    0x50,
    0xfd,
    0xed,
    0xb9,
    0xda,
    0x5e,
    0x15,
    0x46,
    0x57,
    0xa7,
    0x8d,
    0x9d,
    0x84,
    0x90,
    0xd8,
    0xab,
    0x00,
    0x8c,
    0xbc,
    0xd3,
    0x0a,
    0xf7,
    0xe4,
    0x58,
    0x05,
    0xb8,
    0xb3,
    0x45,
    0x06,
    0xd0,
    0x2c,
    0x1e,
    0x8f,
    0xca,
    0x3f,
    0x0f,
    0x02,
    0xc1,
    0xaf,
    0xbd,
    0x03,
    0x01,
    0x13,
    0x8a,
    0x6b,
    0x3a,
    0x91,
    0x11,
    0x41,
    0x4f,
    0x67,
    0xdc,
    0xea,
    0x97,
    0xf2,
    0xcf,
    0xce,
    0xf0,
    0xb4,
    0xe6,
    0x73,
    0x96,
    0xac,
    0x74,
    0x22,
    0xe7,
    0xad,
    0x35,
    0x85,
    0xe2,
    0xf9,
    0x37,
    0xe8,
    0x1c,
    0x75,
    0xdf,
    0x6e,
    0x47,
    0xf1,
    0x1a,
    0x71,
    0x1d,
    0x29,
    0xc5,
    0x89,
    0x6f,
    0xb7,
    0x62,
    0x0e,
    0xaa,
    0x18,
    0xbe,
    0x1b,
    0xfc,
    0x56,
    0x3e,
    0x4b,
    0xc6,
    0xd2,
    0x79,
    0x20,
    0x9a,
    0xdb,
    0xc0,
    0xfe,
    0x78,
    0xcd,
    0x5a,
    0xf4,
    0x1f,
    0xdd,
    0xa8,
    0x33,
    0x88,
    0x07,
    0xc7,
    0x31,
    0xb1,
    0x12,
    0x10,
    0x59,
    0x27,
    0x80,
    0xec,
    0x5f,
    0x60,
    0x51,
    0x7f,
    0xa9,
    0x19,
    0xb5,
    0x4a,
    0x0d,
    0x2d,
    0xe5,
    0x7a,
    0x9f,
    0x93,
    0xc9,
    0x9c,
    0xef,
    0xa0,
    0xe0,
    0x3b,
    0x4d,
    0xae,
    0x2a,
    0xf5,
    0xb0,
    0xc8,
    0xeb,
    0xbb,
    0x3c,
    0x83,
    0x53,
    0x99,
    0x61,
    0x17,
    0x2b,
    0x04,
    0x7e,
    0xba,
    0x77,
    0xd6,
    0x26,
    0xe1,
    0x69,
    0x14,
    0x63,
    0x55,
    0x21,
    0x0c,
    0x7d
];
// Transformations for encryption
const T1 = [
    0xc66363a5,
    0xf87c7c84,
    0xee777799,
    0xf67b7b8d,
    0xfff2f20d,
    0xd66b6bbd,
    0xde6f6fb1,
    0x91c5c554,
    0x60303050,
    0x02010103,
    0xce6767a9,
    0x562b2b7d,
    0xe7fefe19,
    0xb5d7d762,
    0x4dababe6,
    0xec76769a,
    0x8fcaca45,
    0x1f82829d,
    0x89c9c940,
    0xfa7d7d87,
    0xeffafa15,
    0xb25959eb,
    0x8e4747c9,
    0xfbf0f00b,
    0x41adadec,
    0xb3d4d467,
    0x5fa2a2fd,
    0x45afafea,
    0x239c9cbf,
    0x53a4a4f7,
    0xe4727296,
    0x9bc0c05b,
    0x75b7b7c2,
    0xe1fdfd1c,
    0x3d9393ae,
    0x4c26266a,
    0x6c36365a,
    0x7e3f3f41,
    0xf5f7f702,
    0x83cccc4f,
    0x6834345c,
    0x51a5a5f4,
    0xd1e5e534,
    0xf9f1f108,
    0xe2717193,
    0xabd8d873,
    0x62313153,
    0x2a15153f,
    0x0804040c,
    0x95c7c752,
    0x46232365,
    0x9dc3c35e,
    0x30181828,
    0x379696a1,
    0x0a05050f,
    0x2f9a9ab5,
    0x0e070709,
    0x24121236,
    0x1b80809b,
    0xdfe2e23d,
    0xcdebeb26,
    0x4e272769,
    0x7fb2b2cd,
    0xea75759f,
    0x1209091b,
    0x1d83839e,
    0x582c2c74,
    0x341a1a2e,
    0x361b1b2d,
    0xdc6e6eb2,
    0xb45a5aee,
    0x5ba0a0fb,
    0xa45252f6,
    0x763b3b4d,
    0xb7d6d661,
    0x7db3b3ce,
    0x5229297b,
    0xdde3e33e,
    0x5e2f2f71,
    0x13848497,
    0xa65353f5,
    0xb9d1d168,
    0x00000000,
    0xc1eded2c,
    0x40202060,
    0xe3fcfc1f,
    0x79b1b1c8,
    0xb65b5bed,
    0xd46a6abe,
    0x8dcbcb46,
    0x67bebed9,
    0x7239394b,
    0x944a4ade,
    0x984c4cd4,
    0xb05858e8,
    0x85cfcf4a,
    0xbbd0d06b,
    0xc5efef2a,
    0x4faaaae5,
    0xedfbfb16,
    0x864343c5,
    0x9a4d4dd7,
    0x66333355,
    0x11858594,
    0x8a4545cf,
    0xe9f9f910,
    0x04020206,
    0xfe7f7f81,
    0xa05050f0,
    0x783c3c44,
    0x259f9fba,
    0x4ba8a8e3,
    0xa25151f3,
    0x5da3a3fe,
    0x804040c0,
    0x058f8f8a,
    0x3f9292ad,
    0x219d9dbc,
    0x70383848,
    0xf1f5f504,
    0x63bcbcdf,
    0x77b6b6c1,
    0xafdada75,
    0x42212163,
    0x20101030,
    0xe5ffff1a,
    0xfdf3f30e,
    0xbfd2d26d,
    0x81cdcd4c,
    0x180c0c14,
    0x26131335,
    0xc3ecec2f,
    0xbe5f5fe1,
    0x359797a2,
    0x884444cc,
    0x2e171739,
    0x93c4c457,
    0x55a7a7f2,
    0xfc7e7e82,
    0x7a3d3d47,
    0xc86464ac,
    0xba5d5de7,
    0x3219192b,
    0xe6737395,
    0xc06060a0,
    0x19818198,
    0x9e4f4fd1,
    0xa3dcdc7f,
    0x44222266,
    0x542a2a7e,
    0x3b9090ab,
    0x0b888883,
    0x8c4646ca,
    0xc7eeee29,
    0x6bb8b8d3,
    0x2814143c,
    0xa7dede79,
    0xbc5e5ee2,
    0x160b0b1d,
    0xaddbdb76,
    0xdbe0e03b,
    0x64323256,
    0x743a3a4e,
    0x140a0a1e,
    0x924949db,
    0x0c06060a,
    0x4824246c,
    0xb85c5ce4,
    0x9fc2c25d,
    0xbdd3d36e,
    0x43acacef,
    0xc46262a6,
    0x399191a8,
    0x319595a4,
    0xd3e4e437,
    0xf279798b,
    0xd5e7e732,
    0x8bc8c843,
    0x6e373759,
    0xda6d6db7,
    0x018d8d8c,
    0xb1d5d564,
    0x9c4e4ed2,
    0x49a9a9e0,
    0xd86c6cb4,
    0xac5656fa,
    0xf3f4f407,
    0xcfeaea25,
    0xca6565af,
    0xf47a7a8e,
    0x47aeaee9,
    0x10080818,
    0x6fbabad5,
    0xf0787888,
    0x4a25256f,
    0x5c2e2e72,
    0x381c1c24,
    0x57a6a6f1,
    0x73b4b4c7,
    0x97c6c651,
    0xcbe8e823,
    0xa1dddd7c,
    0xe874749c,
    0x3e1f1f21,
    0x964b4bdd,
    0x61bdbddc,
    0x0d8b8b86,
    0x0f8a8a85,
    0xe0707090,
    0x7c3e3e42,
    0x71b5b5c4,
    0xcc6666aa,
    0x904848d8,
    0x06030305,
    0xf7f6f601,
    0x1c0e0e12,
    0xc26161a3,
    0x6a35355f,
    0xae5757f9,
    0x69b9b9d0,
    0x17868691,
    0x99c1c158,
    0x3a1d1d27,
    0x279e9eb9,
    0xd9e1e138,
    0xebf8f813,
    0x2b9898b3,
    0x22111133,
    0xd26969bb,
    0xa9d9d970,
    0x078e8e89,
    0x339494a7,
    0x2d9b9bb6,
    0x3c1e1e22,
    0x15878792,
    0xc9e9e920,
    0x87cece49,
    0xaa5555ff,
    0x50282878,
    0xa5dfdf7a,
    0x038c8c8f,
    0x59a1a1f8,
    0x09898980,
    0x1a0d0d17,
    0x65bfbfda,
    0xd7e6e631,
    0x844242c6,
    0xd06868b8,
    0x824141c3,
    0x299999b0,
    0x5a2d2d77,
    0x1e0f0f11,
    0x7bb0b0cb,
    0xa85454fc,
    0x6dbbbbd6,
    0x2c16163a
];
const T2 = [
    0xa5c66363,
    0x84f87c7c,
    0x99ee7777,
    0x8df67b7b,
    0x0dfff2f2,
    0xbdd66b6b,
    0xb1de6f6f,
    0x5491c5c5,
    0x50603030,
    0x03020101,
    0xa9ce6767,
    0x7d562b2b,
    0x19e7fefe,
    0x62b5d7d7,
    0xe64dabab,
    0x9aec7676,
    0x458fcaca,
    0x9d1f8282,
    0x4089c9c9,
    0x87fa7d7d,
    0x15effafa,
    0xebb25959,
    0xc98e4747,
    0x0bfbf0f0,
    0xec41adad,
    0x67b3d4d4,
    0xfd5fa2a2,
    0xea45afaf,
    0xbf239c9c,
    0xf753a4a4,
    0x96e47272,
    0x5b9bc0c0,
    0xc275b7b7,
    0x1ce1fdfd,
    0xae3d9393,
    0x6a4c2626,
    0x5a6c3636,
    0x417e3f3f,
    0x02f5f7f7,
    0x4f83cccc,
    0x5c683434,
    0xf451a5a5,
    0x34d1e5e5,
    0x08f9f1f1,
    0x93e27171,
    0x73abd8d8,
    0x53623131,
    0x3f2a1515,
    0x0c080404,
    0x5295c7c7,
    0x65462323,
    0x5e9dc3c3,
    0x28301818,
    0xa1379696,
    0x0f0a0505,
    0xb52f9a9a,
    0x090e0707,
    0x36241212,
    0x9b1b8080,
    0x3ddfe2e2,
    0x26cdebeb,
    0x694e2727,
    0xcd7fb2b2,
    0x9fea7575,
    0x1b120909,
    0x9e1d8383,
    0x74582c2c,
    0x2e341a1a,
    0x2d361b1b,
    0xb2dc6e6e,
    0xeeb45a5a,
    0xfb5ba0a0,
    0xf6a45252,
    0x4d763b3b,
    0x61b7d6d6,
    0xce7db3b3,
    0x7b522929,
    0x3edde3e3,
    0x715e2f2f,
    0x97138484,
    0xf5a65353,
    0x68b9d1d1,
    0x00000000,
    0x2cc1eded,
    0x60402020,
    0x1fe3fcfc,
    0xc879b1b1,
    0xedb65b5b,
    0xbed46a6a,
    0x468dcbcb,
    0xd967bebe,
    0x4b723939,
    0xde944a4a,
    0xd4984c4c,
    0xe8b05858,
    0x4a85cfcf,
    0x6bbbd0d0,
    0x2ac5efef,
    0xe54faaaa,
    0x16edfbfb,
    0xc5864343,
    0xd79a4d4d,
    0x55663333,
    0x94118585,
    0xcf8a4545,
    0x10e9f9f9,
    0x06040202,
    0x81fe7f7f,
    0xf0a05050,
    0x44783c3c,
    0xba259f9f,
    0xe34ba8a8,
    0xf3a25151,
    0xfe5da3a3,
    0xc0804040,
    0x8a058f8f,
    0xad3f9292,
    0xbc219d9d,
    0x48703838,
    0x04f1f5f5,
    0xdf63bcbc,
    0xc177b6b6,
    0x75afdada,
    0x63422121,
    0x30201010,
    0x1ae5ffff,
    0x0efdf3f3,
    0x6dbfd2d2,
    0x4c81cdcd,
    0x14180c0c,
    0x35261313,
    0x2fc3ecec,
    0xe1be5f5f,
    0xa2359797,
    0xcc884444,
    0x392e1717,
    0x5793c4c4,
    0xf255a7a7,
    0x82fc7e7e,
    0x477a3d3d,
    0xacc86464,
    0xe7ba5d5d,
    0x2b321919,
    0x95e67373,
    0xa0c06060,
    0x98198181,
    0xd19e4f4f,
    0x7fa3dcdc,
    0x66442222,
    0x7e542a2a,
    0xab3b9090,
    0x830b8888,
    0xca8c4646,
    0x29c7eeee,
    0xd36bb8b8,
    0x3c281414,
    0x79a7dede,
    0xe2bc5e5e,
    0x1d160b0b,
    0x76addbdb,
    0x3bdbe0e0,
    0x56643232,
    0x4e743a3a,
    0x1e140a0a,
    0xdb924949,
    0x0a0c0606,
    0x6c482424,
    0xe4b85c5c,
    0x5d9fc2c2,
    0x6ebdd3d3,
    0xef43acac,
    0xa6c46262,
    0xa8399191,
    0xa4319595,
    0x37d3e4e4,
    0x8bf27979,
    0x32d5e7e7,
    0x438bc8c8,
    0x596e3737,
    0xb7da6d6d,
    0x8c018d8d,
    0x64b1d5d5,
    0xd29c4e4e,
    0xe049a9a9,
    0xb4d86c6c,
    0xfaac5656,
    0x07f3f4f4,
    0x25cfeaea,
    0xafca6565,
    0x8ef47a7a,
    0xe947aeae,
    0x18100808,
    0xd56fbaba,
    0x88f07878,
    0x6f4a2525,
    0x725c2e2e,
    0x24381c1c,
    0xf157a6a6,
    0xc773b4b4,
    0x5197c6c6,
    0x23cbe8e8,
    0x7ca1dddd,
    0x9ce87474,
    0x213e1f1f,
    0xdd964b4b,
    0xdc61bdbd,
    0x860d8b8b,
    0x850f8a8a,
    0x90e07070,
    0x427c3e3e,
    0xc471b5b5,
    0xaacc6666,
    0xd8904848,
    0x05060303,
    0x01f7f6f6,
    0x121c0e0e,
    0xa3c26161,
    0x5f6a3535,
    0xf9ae5757,
    0xd069b9b9,
    0x91178686,
    0x5899c1c1,
    0x273a1d1d,
    0xb9279e9e,
    0x38d9e1e1,
    0x13ebf8f8,
    0xb32b9898,
    0x33221111,
    0xbbd26969,
    0x70a9d9d9,
    0x89078e8e,
    0xa7339494,
    0xb62d9b9b,
    0x223c1e1e,
    0x92158787,
    0x20c9e9e9,
    0x4987cece,
    0xffaa5555,
    0x78502828,
    0x7aa5dfdf,
    0x8f038c8c,
    0xf859a1a1,
    0x80098989,
    0x171a0d0d,
    0xda65bfbf,
    0x31d7e6e6,
    0xc6844242,
    0xb8d06868,
    0xc3824141,
    0xb0299999,
    0x775a2d2d,
    0x111e0f0f,
    0xcb7bb0b0,
    0xfca85454,
    0xd66dbbbb,
    0x3a2c1616
];
const T3 = [
    0x63a5c663,
    0x7c84f87c,
    0x7799ee77,
    0x7b8df67b,
    0xf20dfff2,
    0x6bbdd66b,
    0x6fb1de6f,
    0xc55491c5,
    0x30506030,
    0x01030201,
    0x67a9ce67,
    0x2b7d562b,
    0xfe19e7fe,
    0xd762b5d7,
    0xabe64dab,
    0x769aec76,
    0xca458fca,
    0x829d1f82,
    0xc94089c9,
    0x7d87fa7d,
    0xfa15effa,
    0x59ebb259,
    0x47c98e47,
    0xf00bfbf0,
    0xadec41ad,
    0xd467b3d4,
    0xa2fd5fa2,
    0xafea45af,
    0x9cbf239c,
    0xa4f753a4,
    0x7296e472,
    0xc05b9bc0,
    0xb7c275b7,
    0xfd1ce1fd,
    0x93ae3d93,
    0x266a4c26,
    0x365a6c36,
    0x3f417e3f,
    0xf702f5f7,
    0xcc4f83cc,
    0x345c6834,
    0xa5f451a5,
    0xe534d1e5,
    0xf108f9f1,
    0x7193e271,
    0xd873abd8,
    0x31536231,
    0x153f2a15,
    0x040c0804,
    0xc75295c7,
    0x23654623,
    0xc35e9dc3,
    0x18283018,
    0x96a13796,
    0x050f0a05,
    0x9ab52f9a,
    0x07090e07,
    0x12362412,
    0x809b1b80,
    0xe23ddfe2,
    0xeb26cdeb,
    0x27694e27,
    0xb2cd7fb2,
    0x759fea75,
    0x091b1209,
    0x839e1d83,
    0x2c74582c,
    0x1a2e341a,
    0x1b2d361b,
    0x6eb2dc6e,
    0x5aeeb45a,
    0xa0fb5ba0,
    0x52f6a452,
    0x3b4d763b,
    0xd661b7d6,
    0xb3ce7db3,
    0x297b5229,
    0xe33edde3,
    0x2f715e2f,
    0x84971384,
    0x53f5a653,
    0xd168b9d1,
    0x00000000,
    0xed2cc1ed,
    0x20604020,
    0xfc1fe3fc,
    0xb1c879b1,
    0x5bedb65b,
    0x6abed46a,
    0xcb468dcb,
    0xbed967be,
    0x394b7239,
    0x4ade944a,
    0x4cd4984c,
    0x58e8b058,
    0xcf4a85cf,
    0xd06bbbd0,
    0xef2ac5ef,
    0xaae54faa,
    0xfb16edfb,
    0x43c58643,
    0x4dd79a4d,
    0x33556633,
    0x85941185,
    0x45cf8a45,
    0xf910e9f9,
    0x02060402,
    0x7f81fe7f,
    0x50f0a050,
    0x3c44783c,
    0x9fba259f,
    0xa8e34ba8,
    0x51f3a251,
    0xa3fe5da3,
    0x40c08040,
    0x8f8a058f,
    0x92ad3f92,
    0x9dbc219d,
    0x38487038,
    0xf504f1f5,
    0xbcdf63bc,
    0xb6c177b6,
    0xda75afda,
    0x21634221,
    0x10302010,
    0xff1ae5ff,
    0xf30efdf3,
    0xd26dbfd2,
    0xcd4c81cd,
    0x0c14180c,
    0x13352613,
    0xec2fc3ec,
    0x5fe1be5f,
    0x97a23597,
    0x44cc8844,
    0x17392e17,
    0xc45793c4,
    0xa7f255a7,
    0x7e82fc7e,
    0x3d477a3d,
    0x64acc864,
    0x5de7ba5d,
    0x192b3219,
    0x7395e673,
    0x60a0c060,
    0x81981981,
    0x4fd19e4f,
    0xdc7fa3dc,
    0x22664422,
    0x2a7e542a,
    0x90ab3b90,
    0x88830b88,
    0x46ca8c46,
    0xee29c7ee,
    0xb8d36bb8,
    0x143c2814,
    0xde79a7de,
    0x5ee2bc5e,
    0x0b1d160b,
    0xdb76addb,
    0xe03bdbe0,
    0x32566432,
    0x3a4e743a,
    0x0a1e140a,
    0x49db9249,
    0x060a0c06,
    0x246c4824,
    0x5ce4b85c,
    0xc25d9fc2,
    0xd36ebdd3,
    0xacef43ac,
    0x62a6c462,
    0x91a83991,
    0x95a43195,
    0xe437d3e4,
    0x798bf279,
    0xe732d5e7,
    0xc8438bc8,
    0x37596e37,
    0x6db7da6d,
    0x8d8c018d,
    0xd564b1d5,
    0x4ed29c4e,
    0xa9e049a9,
    0x6cb4d86c,
    0x56faac56,
    0xf407f3f4,
    0xea25cfea,
    0x65afca65,
    0x7a8ef47a,
    0xaee947ae,
    0x08181008,
    0xbad56fba,
    0x7888f078,
    0x256f4a25,
    0x2e725c2e,
    0x1c24381c,
    0xa6f157a6,
    0xb4c773b4,
    0xc65197c6,
    0xe823cbe8,
    0xdd7ca1dd,
    0x749ce874,
    0x1f213e1f,
    0x4bdd964b,
    0xbddc61bd,
    0x8b860d8b,
    0x8a850f8a,
    0x7090e070,
    0x3e427c3e,
    0xb5c471b5,
    0x66aacc66,
    0x48d89048,
    0x03050603,
    0xf601f7f6,
    0x0e121c0e,
    0x61a3c261,
    0x355f6a35,
    0x57f9ae57,
    0xb9d069b9,
    0x86911786,
    0xc15899c1,
    0x1d273a1d,
    0x9eb9279e,
    0xe138d9e1,
    0xf813ebf8,
    0x98b32b98,
    0x11332211,
    0x69bbd269,
    0xd970a9d9,
    0x8e89078e,
    0x94a73394,
    0x9bb62d9b,
    0x1e223c1e,
    0x87921587,
    0xe920c9e9,
    0xce4987ce,
    0x55ffaa55,
    0x28785028,
    0xdf7aa5df,
    0x8c8f038c,
    0xa1f859a1,
    0x89800989,
    0x0d171a0d,
    0xbfda65bf,
    0xe631d7e6,
    0x42c68442,
    0x68b8d068,
    0x41c38241,
    0x99b02999,
    0x2d775a2d,
    0x0f111e0f,
    0xb0cb7bb0,
    0x54fca854,
    0xbbd66dbb,
    0x163a2c16
];
const T4 = [
    0x6363a5c6,
    0x7c7c84f8,
    0x777799ee,
    0x7b7b8df6,
    0xf2f20dff,
    0x6b6bbdd6,
    0x6f6fb1de,
    0xc5c55491,
    0x30305060,
    0x01010302,
    0x6767a9ce,
    0x2b2b7d56,
    0xfefe19e7,
    0xd7d762b5,
    0xababe64d,
    0x76769aec,
    0xcaca458f,
    0x82829d1f,
    0xc9c94089,
    0x7d7d87fa,
    0xfafa15ef,
    0x5959ebb2,
    0x4747c98e,
    0xf0f00bfb,
    0xadadec41,
    0xd4d467b3,
    0xa2a2fd5f,
    0xafafea45,
    0x9c9cbf23,
    0xa4a4f753,
    0x727296e4,
    0xc0c05b9b,
    0xb7b7c275,
    0xfdfd1ce1,
    0x9393ae3d,
    0x26266a4c,
    0x36365a6c,
    0x3f3f417e,
    0xf7f702f5,
    0xcccc4f83,
    0x34345c68,
    0xa5a5f451,
    0xe5e534d1,
    0xf1f108f9,
    0x717193e2,
    0xd8d873ab,
    0x31315362,
    0x15153f2a,
    0x04040c08,
    0xc7c75295,
    0x23236546,
    0xc3c35e9d,
    0x18182830,
    0x9696a137,
    0x05050f0a,
    0x9a9ab52f,
    0x0707090e,
    0x12123624,
    0x80809b1b,
    0xe2e23ddf,
    0xebeb26cd,
    0x2727694e,
    0xb2b2cd7f,
    0x75759fea,
    0x09091b12,
    0x83839e1d,
    0x2c2c7458,
    0x1a1a2e34,
    0x1b1b2d36,
    0x6e6eb2dc,
    0x5a5aeeb4,
    0xa0a0fb5b,
    0x5252f6a4,
    0x3b3b4d76,
    0xd6d661b7,
    0xb3b3ce7d,
    0x29297b52,
    0xe3e33edd,
    0x2f2f715e,
    0x84849713,
    0x5353f5a6,
    0xd1d168b9,
    0x00000000,
    0xeded2cc1,
    0x20206040,
    0xfcfc1fe3,
    0xb1b1c879,
    0x5b5bedb6,
    0x6a6abed4,
    0xcbcb468d,
    0xbebed967,
    0x39394b72,
    0x4a4ade94,
    0x4c4cd498,
    0x5858e8b0,
    0xcfcf4a85,
    0xd0d06bbb,
    0xefef2ac5,
    0xaaaae54f,
    0xfbfb16ed,
    0x4343c586,
    0x4d4dd79a,
    0x33335566,
    0x85859411,
    0x4545cf8a,
    0xf9f910e9,
    0x02020604,
    0x7f7f81fe,
    0x5050f0a0,
    0x3c3c4478,
    0x9f9fba25,
    0xa8a8e34b,
    0x5151f3a2,
    0xa3a3fe5d,
    0x4040c080,
    0x8f8f8a05,
    0x9292ad3f,
    0x9d9dbc21,
    0x38384870,
    0xf5f504f1,
    0xbcbcdf63,
    0xb6b6c177,
    0xdada75af,
    0x21216342,
    0x10103020,
    0xffff1ae5,
    0xf3f30efd,
    0xd2d26dbf,
    0xcdcd4c81,
    0x0c0c1418,
    0x13133526,
    0xecec2fc3,
    0x5f5fe1be,
    0x9797a235,
    0x4444cc88,
    0x1717392e,
    0xc4c45793,
    0xa7a7f255,
    0x7e7e82fc,
    0x3d3d477a,
    0x6464acc8,
    0x5d5de7ba,
    0x19192b32,
    0x737395e6,
    0x6060a0c0,
    0x81819819,
    0x4f4fd19e,
    0xdcdc7fa3,
    0x22226644,
    0x2a2a7e54,
    0x9090ab3b,
    0x8888830b,
    0x4646ca8c,
    0xeeee29c7,
    0xb8b8d36b,
    0x14143c28,
    0xdede79a7,
    0x5e5ee2bc,
    0x0b0b1d16,
    0xdbdb76ad,
    0xe0e03bdb,
    0x32325664,
    0x3a3a4e74,
    0x0a0a1e14,
    0x4949db92,
    0x06060a0c,
    0x24246c48,
    0x5c5ce4b8,
    0xc2c25d9f,
    0xd3d36ebd,
    0xacacef43,
    0x6262a6c4,
    0x9191a839,
    0x9595a431,
    0xe4e437d3,
    0x79798bf2,
    0xe7e732d5,
    0xc8c8438b,
    0x3737596e,
    0x6d6db7da,
    0x8d8d8c01,
    0xd5d564b1,
    0x4e4ed29c,
    0xa9a9e049,
    0x6c6cb4d8,
    0x5656faac,
    0xf4f407f3,
    0xeaea25cf,
    0x6565afca,
    0x7a7a8ef4,
    0xaeaee947,
    0x08081810,
    0xbabad56f,
    0x787888f0,
    0x25256f4a,
    0x2e2e725c,
    0x1c1c2438,
    0xa6a6f157,
    0xb4b4c773,
    0xc6c65197,
    0xe8e823cb,
    0xdddd7ca1,
    0x74749ce8,
    0x1f1f213e,
    0x4b4bdd96,
    0xbdbddc61,
    0x8b8b860d,
    0x8a8a850f,
    0x707090e0,
    0x3e3e427c,
    0xb5b5c471,
    0x6666aacc,
    0x4848d890,
    0x03030506,
    0xf6f601f7,
    0x0e0e121c,
    0x6161a3c2,
    0x35355f6a,
    0x5757f9ae,
    0xb9b9d069,
    0x86869117,
    0xc1c15899,
    0x1d1d273a,
    0x9e9eb927,
    0xe1e138d9,
    0xf8f813eb,
    0x9898b32b,
    0x11113322,
    0x6969bbd2,
    0xd9d970a9,
    0x8e8e8907,
    0x9494a733,
    0x9b9bb62d,
    0x1e1e223c,
    0x87879215,
    0xe9e920c9,
    0xcece4987,
    0x5555ffaa,
    0x28287850,
    0xdfdf7aa5,
    0x8c8c8f03,
    0xa1a1f859,
    0x89898009,
    0x0d0d171a,
    0xbfbfda65,
    0xe6e631d7,
    0x4242c684,
    0x6868b8d0,
    0x4141c382,
    0x9999b029,
    0x2d2d775a,
    0x0f0f111e,
    0xb0b0cb7b,
    0x5454fca8,
    0xbbbbd66d,
    0x16163a2c
];
// Transformations for decryption
const T5 = [
    0x51f4a750,
    0x7e416553,
    0x1a17a4c3,
    0x3a275e96,
    0x3bab6bcb,
    0x1f9d45f1,
    0xacfa58ab,
    0x4be30393,
    0x2030fa55,
    0xad766df6,
    0x88cc7691,
    0xf5024c25,
    0x4fe5d7fc,
    0xc52acbd7,
    0x26354480,
    0xb562a38f,
    0xdeb15a49,
    0x25ba1b67,
    0x45ea0e98,
    0x5dfec0e1,
    0xc32f7502,
    0x814cf012,
    0x8d4697a3,
    0x6bd3f9c6,
    0x038f5fe7,
    0x15929c95,
    0xbf6d7aeb,
    0x955259da,
    0xd4be832d,
    0x587421d3,
    0x49e06929,
    0x8ec9c844,
    0x75c2896a,
    0xf48e7978,
    0x99583e6b,
    0x27b971dd,
    0xbee14fb6,
    0xf088ad17,
    0xc920ac66,
    0x7dce3ab4,
    0x63df4a18,
    0xe51a3182,
    0x97513360,
    0x62537f45,
    0xb16477e0,
    0xbb6bae84,
    0xfe81a01c,
    0xf9082b94,
    0x70486858,
    0x8f45fd19,
    0x94de6c87,
    0x527bf8b7,
    0xab73d323,
    0x724b02e2,
    0xe31f8f57,
    0x6655ab2a,
    0xb2eb2807,
    0x2fb5c203,
    0x86c57b9a,
    0xd33708a5,
    0x302887f2,
    0x23bfa5b2,
    0x02036aba,
    0xed16825c,
    0x8acf1c2b,
    0xa779b492,
    0xf307f2f0,
    0x4e69e2a1,
    0x65daf4cd,
    0x0605bed5,
    0xd134621f,
    0xc4a6fe8a,
    0x342e539d,
    0xa2f355a0,
    0x058ae132,
    0xa4f6eb75,
    0x0b83ec39,
    0x4060efaa,
    0x5e719f06,
    0xbd6e1051,
    0x3e218af9,
    0x96dd063d,
    0xdd3e05ae,
    0x4de6bd46,
    0x91548db5,
    0x71c45d05,
    0x0406d46f,
    0x605015ff,
    0x1998fb24,
    0xd6bde997,
    0x894043cc,
    0x67d99e77,
    0xb0e842bd,
    0x07898b88,
    0xe7195b38,
    0x79c8eedb,
    0xa17c0a47,
    0x7c420fe9,
    0xf8841ec9,
    0x00000000,
    0x09808683,
    0x322bed48,
    0x1e1170ac,
    0x6c5a724e,
    0xfd0efffb,
    0x0f853856,
    0x3daed51e,
    0x362d3927,
    0x0a0fd964,
    0x685ca621,
    0x9b5b54d1,
    0x24362e3a,
    0x0c0a67b1,
    0x9357e70f,
    0xb4ee96d2,
    0x1b9b919e,
    0x80c0c54f,
    0x61dc20a2,
    0x5a774b69,
    0x1c121a16,
    0xe293ba0a,
    0xc0a02ae5,
    0x3c22e043,
    0x121b171d,
    0x0e090d0b,
    0xf28bc7ad,
    0x2db6a8b9,
    0x141ea9c8,
    0x57f11985,
    0xaf75074c,
    0xee99ddbb,
    0xa37f60fd,
    0xf701269f,
    0x5c72f5bc,
    0x44663bc5,
    0x5bfb7e34,
    0x8b432976,
    0xcb23c6dc,
    0xb6edfc68,
    0xb8e4f163,
    0xd731dcca,
    0x42638510,
    0x13972240,
    0x84c61120,
    0x854a247d,
    0xd2bb3df8,
    0xaef93211,
    0xc729a16d,
    0x1d9e2f4b,
    0xdcb230f3,
    0x0d8652ec,
    0x77c1e3d0,
    0x2bb3166c,
    0xa970b999,
    0x119448fa,
    0x47e96422,
    0xa8fc8cc4,
    0xa0f03f1a,
    0x567d2cd8,
    0x223390ef,
    0x87494ec7,
    0xd938d1c1,
    0x8ccaa2fe,
    0x98d40b36,
    0xa6f581cf,
    0xa57ade28,
    0xdab78e26,
    0x3fadbfa4,
    0x2c3a9de4,
    0x5078920d,
    0x6a5fcc9b,
    0x547e4662,
    0xf68d13c2,
    0x90d8b8e8,
    0x2e39f75e,
    0x82c3aff5,
    0x9f5d80be,
    0x69d0937c,
    0x6fd52da9,
    0xcf2512b3,
    0xc8ac993b,
    0x10187da7,
    0xe89c636e,
    0xdb3bbb7b,
    0xcd267809,
    0x6e5918f4,
    0xec9ab701,
    0x834f9aa8,
    0xe6956e65,
    0xaaffe67e,
    0x21bccf08,
    0xef15e8e6,
    0xbae79bd9,
    0x4a6f36ce,
    0xea9f09d4,
    0x29b07cd6,
    0x31a4b2af,
    0x2a3f2331,
    0xc6a59430,
    0x35a266c0,
    0x744ebc37,
    0xfc82caa6,
    0xe090d0b0,
    0x33a7d815,
    0xf104984a,
    0x41ecdaf7,
    0x7fcd500e,
    0x1791f62f,
    0x764dd68d,
    0x43efb04d,
    0xccaa4d54,
    0xe49604df,
    0x9ed1b5e3,
    0x4c6a881b,
    0xc12c1fb8,
    0x4665517f,
    0x9d5eea04,
    0x018c355d,
    0xfa877473,
    0xfb0b412e,
    0xb3671d5a,
    0x92dbd252,
    0xe9105633,
    0x6dd64713,
    0x9ad7618c,
    0x37a10c7a,
    0x59f8148e,
    0xeb133c89,
    0xcea927ee,
    0xb761c935,
    0xe11ce5ed,
    0x7a47b13c,
    0x9cd2df59,
    0x55f2733f,
    0x1814ce79,
    0x73c737bf,
    0x53f7cdea,
    0x5ffdaa5b,
    0xdf3d6f14,
    0x7844db86,
    0xcaaff381,
    0xb968c43e,
    0x3824342c,
    0xc2a3405f,
    0x161dc372,
    0xbce2250c,
    0x283c498b,
    0xff0d9541,
    0x39a80171,
    0x080cb3de,
    0xd8b4e49c,
    0x6456c190,
    0x7bcb8461,
    0xd532b670,
    0x486c5c74,
    0xd0b85742
];
const T6 = [
    0x5051f4a7,
    0x537e4165,
    0xc31a17a4,
    0x963a275e,
    0xcb3bab6b,
    0xf11f9d45,
    0xabacfa58,
    0x934be303,
    0x552030fa,
    0xf6ad766d,
    0x9188cc76,
    0x25f5024c,
    0xfc4fe5d7,
    0xd7c52acb,
    0x80263544,
    0x8fb562a3,
    0x49deb15a,
    0x6725ba1b,
    0x9845ea0e,
    0xe15dfec0,
    0x02c32f75,
    0x12814cf0,
    0xa38d4697,
    0xc66bd3f9,
    0xe7038f5f,
    0x9515929c,
    0xebbf6d7a,
    0xda955259,
    0x2dd4be83,
    0xd3587421,
    0x2949e069,
    0x448ec9c8,
    0x6a75c289,
    0x78f48e79,
    0x6b99583e,
    0xdd27b971,
    0xb6bee14f,
    0x17f088ad,
    0x66c920ac,
    0xb47dce3a,
    0x1863df4a,
    0x82e51a31,
    0x60975133,
    0x4562537f,
    0xe0b16477,
    0x84bb6bae,
    0x1cfe81a0,
    0x94f9082b,
    0x58704868,
    0x198f45fd,
    0x8794de6c,
    0xb7527bf8,
    0x23ab73d3,
    0xe2724b02,
    0x57e31f8f,
    0x2a6655ab,
    0x07b2eb28,
    0x032fb5c2,
    0x9a86c57b,
    0xa5d33708,
    0xf2302887,
    0xb223bfa5,
    0xba02036a,
    0x5ced1682,
    0x2b8acf1c,
    0x92a779b4,
    0xf0f307f2,
    0xa14e69e2,
    0xcd65daf4,
    0xd50605be,
    0x1fd13462,
    0x8ac4a6fe,
    0x9d342e53,
    0xa0a2f355,
    0x32058ae1,
    0x75a4f6eb,
    0x390b83ec,
    0xaa4060ef,
    0x065e719f,
    0x51bd6e10,
    0xf93e218a,
    0x3d96dd06,
    0xaedd3e05,
    0x464de6bd,
    0xb591548d,
    0x0571c45d,
    0x6f0406d4,
    0xff605015,
    0x241998fb,
    0x97d6bde9,
    0xcc894043,
    0x7767d99e,
    0xbdb0e842,
    0x8807898b,
    0x38e7195b,
    0xdb79c8ee,
    0x47a17c0a,
    0xe97c420f,
    0xc9f8841e,
    0x00000000,
    0x83098086,
    0x48322bed,
    0xac1e1170,
    0x4e6c5a72,
    0xfbfd0eff,
    0x560f8538,
    0x1e3daed5,
    0x27362d39,
    0x640a0fd9,
    0x21685ca6,
    0xd19b5b54,
    0x3a24362e,
    0xb10c0a67,
    0x0f9357e7,
    0xd2b4ee96,
    0x9e1b9b91,
    0x4f80c0c5,
    0xa261dc20,
    0x695a774b,
    0x161c121a,
    0x0ae293ba,
    0xe5c0a02a,
    0x433c22e0,
    0x1d121b17,
    0x0b0e090d,
    0xadf28bc7,
    0xb92db6a8,
    0xc8141ea9,
    0x8557f119,
    0x4caf7507,
    0xbbee99dd,
    0xfda37f60,
    0x9ff70126,
    0xbc5c72f5,
    0xc544663b,
    0x345bfb7e,
    0x768b4329,
    0xdccb23c6,
    0x68b6edfc,
    0x63b8e4f1,
    0xcad731dc,
    0x10426385,
    0x40139722,
    0x2084c611,
    0x7d854a24,
    0xf8d2bb3d,
    0x11aef932,
    0x6dc729a1,
    0x4b1d9e2f,
    0xf3dcb230,
    0xec0d8652,
    0xd077c1e3,
    0x6c2bb316,
    0x99a970b9,
    0xfa119448,
    0x2247e964,
    0xc4a8fc8c,
    0x1aa0f03f,
    0xd8567d2c,
    0xef223390,
    0xc787494e,
    0xc1d938d1,
    0xfe8ccaa2,
    0x3698d40b,
    0xcfa6f581,
    0x28a57ade,
    0x26dab78e,
    0xa43fadbf,
    0xe42c3a9d,
    0x0d507892,
    0x9b6a5fcc,
    0x62547e46,
    0xc2f68d13,
    0xe890d8b8,
    0x5e2e39f7,
    0xf582c3af,
    0xbe9f5d80,
    0x7c69d093,
    0xa96fd52d,
    0xb3cf2512,
    0x3bc8ac99,
    0xa710187d,
    0x6ee89c63,
    0x7bdb3bbb,
    0x09cd2678,
    0xf46e5918,
    0x01ec9ab7,
    0xa8834f9a,
    0x65e6956e,
    0x7eaaffe6,
    0x0821bccf,
    0xe6ef15e8,
    0xd9bae79b,
    0xce4a6f36,
    0xd4ea9f09,
    0xd629b07c,
    0xaf31a4b2,
    0x312a3f23,
    0x30c6a594,
    0xc035a266,
    0x37744ebc,
    0xa6fc82ca,
    0xb0e090d0,
    0x1533a7d8,
    0x4af10498,
    0xf741ecda,
    0x0e7fcd50,
    0x2f1791f6,
    0x8d764dd6,
    0x4d43efb0,
    0x54ccaa4d,
    0xdfe49604,
    0xe39ed1b5,
    0x1b4c6a88,
    0xb8c12c1f,
    0x7f466551,
    0x049d5eea,
    0x5d018c35,
    0x73fa8774,
    0x2efb0b41,
    0x5ab3671d,
    0x5292dbd2,
    0x33e91056,
    0x136dd647,
    0x8c9ad761,
    0x7a37a10c,
    0x8e59f814,
    0x89eb133c,
    0xeecea927,
    0x35b761c9,
    0xede11ce5,
    0x3c7a47b1,
    0x599cd2df,
    0x3f55f273,
    0x791814ce,
    0xbf73c737,
    0xea53f7cd,
    0x5b5ffdaa,
    0x14df3d6f,
    0x867844db,
    0x81caaff3,
    0x3eb968c4,
    0x2c382434,
    0x5fc2a340,
    0x72161dc3,
    0x0cbce225,
    0x8b283c49,
    0x41ff0d95,
    0x7139a801,
    0xde080cb3,
    0x9cd8b4e4,
    0x906456c1,
    0x617bcb84,
    0x70d532b6,
    0x74486c5c,
    0x42d0b857
];
const T7 = [
    0xa75051f4,
    0x65537e41,
    0xa4c31a17,
    0x5e963a27,
    0x6bcb3bab,
    0x45f11f9d,
    0x58abacfa,
    0x03934be3,
    0xfa552030,
    0x6df6ad76,
    0x769188cc,
    0x4c25f502,
    0xd7fc4fe5,
    0xcbd7c52a,
    0x44802635,
    0xa38fb562,
    0x5a49deb1,
    0x1b6725ba,
    0x0e9845ea,
    0xc0e15dfe,
    0x7502c32f,
    0xf012814c,
    0x97a38d46,
    0xf9c66bd3,
    0x5fe7038f,
    0x9c951592,
    0x7aebbf6d,
    0x59da9552,
    0x832dd4be,
    0x21d35874,
    0x692949e0,
    0xc8448ec9,
    0x896a75c2,
    0x7978f48e,
    0x3e6b9958,
    0x71dd27b9,
    0x4fb6bee1,
    0xad17f088,
    0xac66c920,
    0x3ab47dce,
    0x4a1863df,
    0x3182e51a,
    0x33609751,
    0x7f456253,
    0x77e0b164,
    0xae84bb6b,
    0xa01cfe81,
    0x2b94f908,
    0x68587048,
    0xfd198f45,
    0x6c8794de,
    0xf8b7527b,
    0xd323ab73,
    0x02e2724b,
    0x8f57e31f,
    0xab2a6655,
    0x2807b2eb,
    0xc2032fb5,
    0x7b9a86c5,
    0x08a5d337,
    0x87f23028,
    0xa5b223bf,
    0x6aba0203,
    0x825ced16,
    0x1c2b8acf,
    0xb492a779,
    0xf2f0f307,
    0xe2a14e69,
    0xf4cd65da,
    0xbed50605,
    0x621fd134,
    0xfe8ac4a6,
    0x539d342e,
    0x55a0a2f3,
    0xe132058a,
    0xeb75a4f6,
    0xec390b83,
    0xefaa4060,
    0x9f065e71,
    0x1051bd6e,
    0x8af93e21,
    0x063d96dd,
    0x05aedd3e,
    0xbd464de6,
    0x8db59154,
    0x5d0571c4,
    0xd46f0406,
    0x15ff6050,
    0xfb241998,
    0xe997d6bd,
    0x43cc8940,
    0x9e7767d9,
    0x42bdb0e8,
    0x8b880789,
    0x5b38e719,
    0xeedb79c8,
    0x0a47a17c,
    0x0fe97c42,
    0x1ec9f884,
    0x00000000,
    0x86830980,
    0xed48322b,
    0x70ac1e11,
    0x724e6c5a,
    0xfffbfd0e,
    0x38560f85,
    0xd51e3dae,
    0x3927362d,
    0xd9640a0f,
    0xa621685c,
    0x54d19b5b,
    0x2e3a2436,
    0x67b10c0a,
    0xe70f9357,
    0x96d2b4ee,
    0x919e1b9b,
    0xc54f80c0,
    0x20a261dc,
    0x4b695a77,
    0x1a161c12,
    0xba0ae293,
    0x2ae5c0a0,
    0xe0433c22,
    0x171d121b,
    0x0d0b0e09,
    0xc7adf28b,
    0xa8b92db6,
    0xa9c8141e,
    0x198557f1,
    0x074caf75,
    0xddbbee99,
    0x60fda37f,
    0x269ff701,
    0xf5bc5c72,
    0x3bc54466,
    0x7e345bfb,
    0x29768b43,
    0xc6dccb23,
    0xfc68b6ed,
    0xf163b8e4,
    0xdccad731,
    0x85104263,
    0x22401397,
    0x112084c6,
    0x247d854a,
    0x3df8d2bb,
    0x3211aef9,
    0xa16dc729,
    0x2f4b1d9e,
    0x30f3dcb2,
    0x52ec0d86,
    0xe3d077c1,
    0x166c2bb3,
    0xb999a970,
    0x48fa1194,
    0x642247e9,
    0x8cc4a8fc,
    0x3f1aa0f0,
    0x2cd8567d,
    0x90ef2233,
    0x4ec78749,
    0xd1c1d938,
    0xa2fe8cca,
    0x0b3698d4,
    0x81cfa6f5,
    0xde28a57a,
    0x8e26dab7,
    0xbfa43fad,
    0x9de42c3a,
    0x920d5078,
    0xcc9b6a5f,
    0x4662547e,
    0x13c2f68d,
    0xb8e890d8,
    0xf75e2e39,
    0xaff582c3,
    0x80be9f5d,
    0x937c69d0,
    0x2da96fd5,
    0x12b3cf25,
    0x993bc8ac,
    0x7da71018,
    0x636ee89c,
    0xbb7bdb3b,
    0x7809cd26,
    0x18f46e59,
    0xb701ec9a,
    0x9aa8834f,
    0x6e65e695,
    0xe67eaaff,
    0xcf0821bc,
    0xe8e6ef15,
    0x9bd9bae7,
    0x36ce4a6f,
    0x09d4ea9f,
    0x7cd629b0,
    0xb2af31a4,
    0x23312a3f,
    0x9430c6a5,
    0x66c035a2,
    0xbc37744e,
    0xcaa6fc82,
    0xd0b0e090,
    0xd81533a7,
    0x984af104,
    0xdaf741ec,
    0x500e7fcd,
    0xf62f1791,
    0xd68d764d,
    0xb04d43ef,
    0x4d54ccaa,
    0x04dfe496,
    0xb5e39ed1,
    0x881b4c6a,
    0x1fb8c12c,
    0x517f4665,
    0xea049d5e,
    0x355d018c,
    0x7473fa87,
    0x412efb0b,
    0x1d5ab367,
    0xd25292db,
    0x5633e910,
    0x47136dd6,
    0x618c9ad7,
    0x0c7a37a1,
    0x148e59f8,
    0x3c89eb13,
    0x27eecea9,
    0xc935b761,
    0xe5ede11c,
    0xb13c7a47,
    0xdf599cd2,
    0x733f55f2,
    0xce791814,
    0x37bf73c7,
    0xcdea53f7,
    0xaa5b5ffd,
    0x6f14df3d,
    0xdb867844,
    0xf381caaf,
    0xc43eb968,
    0x342c3824,
    0x405fc2a3,
    0xc372161d,
    0x250cbce2,
    0x498b283c,
    0x9541ff0d,
    0x017139a8,
    0xb3de080c,
    0xe49cd8b4,
    0xc1906456,
    0x84617bcb,
    0xb670d532,
    0x5c74486c,
    0x5742d0b8
];
const T8 = [
    0xf4a75051,
    0x4165537e,
    0x17a4c31a,
    0x275e963a,
    0xab6bcb3b,
    0x9d45f11f,
    0xfa58abac,
    0xe303934b,
    0x30fa5520,
    0x766df6ad,
    0xcc769188,
    0x024c25f5,
    0xe5d7fc4f,
    0x2acbd7c5,
    0x35448026,
    0x62a38fb5,
    0xb15a49de,
    0xba1b6725,
    0xea0e9845,
    0xfec0e15d,
    0x2f7502c3,
    0x4cf01281,
    0x4697a38d,
    0xd3f9c66b,
    0x8f5fe703,
    0x929c9515,
    0x6d7aebbf,
    0x5259da95,
    0xbe832dd4,
    0x7421d358,
    0xe0692949,
    0xc9c8448e,
    0xc2896a75,
    0x8e7978f4,
    0x583e6b99,
    0xb971dd27,
    0xe14fb6be,
    0x88ad17f0,
    0x20ac66c9,
    0xce3ab47d,
    0xdf4a1863,
    0x1a3182e5,
    0x51336097,
    0x537f4562,
    0x6477e0b1,
    0x6bae84bb,
    0x81a01cfe,
    0x082b94f9,
    0x48685870,
    0x45fd198f,
    0xde6c8794,
    0x7bf8b752,
    0x73d323ab,
    0x4b02e272,
    0x1f8f57e3,
    0x55ab2a66,
    0xeb2807b2,
    0xb5c2032f,
    0xc57b9a86,
    0x3708a5d3,
    0x2887f230,
    0xbfa5b223,
    0x036aba02,
    0x16825ced,
    0xcf1c2b8a,
    0x79b492a7,
    0x07f2f0f3,
    0x69e2a14e,
    0xdaf4cd65,
    0x05bed506,
    0x34621fd1,
    0xa6fe8ac4,
    0x2e539d34,
    0xf355a0a2,
    0x8ae13205,
    0xf6eb75a4,
    0x83ec390b,
    0x60efaa40,
    0x719f065e,
    0x6e1051bd,
    0x218af93e,
    0xdd063d96,
    0x3e05aedd,
    0xe6bd464d,
    0x548db591,
    0xc45d0571,
    0x06d46f04,
    0x5015ff60,
    0x98fb2419,
    0xbde997d6,
    0x4043cc89,
    0xd99e7767,
    0xe842bdb0,
    0x898b8807,
    0x195b38e7,
    0xc8eedb79,
    0x7c0a47a1,
    0x420fe97c,
    0x841ec9f8,
    0x00000000,
    0x80868309,
    0x2bed4832,
    0x1170ac1e,
    0x5a724e6c,
    0x0efffbfd,
    0x8538560f,
    0xaed51e3d,
    0x2d392736,
    0x0fd9640a,
    0x5ca62168,
    0x5b54d19b,
    0x362e3a24,
    0x0a67b10c,
    0x57e70f93,
    0xee96d2b4,
    0x9b919e1b,
    0xc0c54f80,
    0xdc20a261,
    0x774b695a,
    0x121a161c,
    0x93ba0ae2,
    0xa02ae5c0,
    0x22e0433c,
    0x1b171d12,
    0x090d0b0e,
    0x8bc7adf2,
    0xb6a8b92d,
    0x1ea9c814,
    0xf1198557,
    0x75074caf,
    0x99ddbbee,
    0x7f60fda3,
    0x01269ff7,
    0x72f5bc5c,
    0x663bc544,
    0xfb7e345b,
    0x4329768b,
    0x23c6dccb,
    0xedfc68b6,
    0xe4f163b8,
    0x31dccad7,
    0x63851042,
    0x97224013,
    0xc6112084,
    0x4a247d85,
    0xbb3df8d2,
    0xf93211ae,
    0x29a16dc7,
    0x9e2f4b1d,
    0xb230f3dc,
    0x8652ec0d,
    0xc1e3d077,
    0xb3166c2b,
    0x70b999a9,
    0x9448fa11,
    0xe9642247,
    0xfc8cc4a8,
    0xf03f1aa0,
    0x7d2cd856,
    0x3390ef22,
    0x494ec787,
    0x38d1c1d9,
    0xcaa2fe8c,
    0xd40b3698,
    0xf581cfa6,
    0x7ade28a5,
    0xb78e26da,
    0xadbfa43f,
    0x3a9de42c,
    0x78920d50,
    0x5fcc9b6a,
    0x7e466254,
    0x8d13c2f6,
    0xd8b8e890,
    0x39f75e2e,
    0xc3aff582,
    0x5d80be9f,
    0xd0937c69,
    0xd52da96f,
    0x2512b3cf,
    0xac993bc8,
    0x187da710,
    0x9c636ee8,
    0x3bbb7bdb,
    0x267809cd,
    0x5918f46e,
    0x9ab701ec,
    0x4f9aa883,
    0x956e65e6,
    0xffe67eaa,
    0xbccf0821,
    0x15e8e6ef,
    0xe79bd9ba,
    0x6f36ce4a,
    0x9f09d4ea,
    0xb07cd629,
    0xa4b2af31,
    0x3f23312a,
    0xa59430c6,
    0xa266c035,
    0x4ebc3774,
    0x82caa6fc,
    0x90d0b0e0,
    0xa7d81533,
    0x04984af1,
    0xecdaf741,
    0xcd500e7f,
    0x91f62f17,
    0x4dd68d76,
    0xefb04d43,
    0xaa4d54cc,
    0x9604dfe4,
    0xd1b5e39e,
    0x6a881b4c,
    0x2c1fb8c1,
    0x65517f46,
    0x5eea049d,
    0x8c355d01,
    0x877473fa,
    0x0b412efb,
    0x671d5ab3,
    0xdbd25292,
    0x105633e9,
    0xd647136d,
    0xd7618c9a,
    0xa10c7a37,
    0xf8148e59,
    0x133c89eb,
    0xa927eece,
    0x61c935b7,
    0x1ce5ede1,
    0x47b13c7a,
    0xd2df599c,
    0xf2733f55,
    0x14ce7918,
    0xc737bf73,
    0xf7cdea53,
    0xfdaa5b5f,
    0x3d6f14df,
    0x44db8678,
    0xaff381ca,
    0x68c43eb9,
    0x24342c38,
    0xa3405fc2,
    0x1dc37216,
    0xe2250cbc,
    0x3c498b28,
    0x0d9541ff,
    0xa8017139,
    0x0cb3de08,
    0xb4e49cd8,
    0x56c19064,
    0xcb84617b,
    0x32b670d5,
    0x6c5c7448,
    0xb85742d0
];
// Transformations for decryption key expansion
const U1 = [
    0x00000000,
    0x0e090d0b,
    0x1c121a16,
    0x121b171d,
    0x3824342c,
    0x362d3927,
    0x24362e3a,
    0x2a3f2331,
    0x70486858,
    0x7e416553,
    0x6c5a724e,
    0x62537f45,
    0x486c5c74,
    0x4665517f,
    0x547e4662,
    0x5a774b69,
    0xe090d0b0,
    0xee99ddbb,
    0xfc82caa6,
    0xf28bc7ad,
    0xd8b4e49c,
    0xd6bde997,
    0xc4a6fe8a,
    0xcaaff381,
    0x90d8b8e8,
    0x9ed1b5e3,
    0x8ccaa2fe,
    0x82c3aff5,
    0xa8fc8cc4,
    0xa6f581cf,
    0xb4ee96d2,
    0xbae79bd9,
    0xdb3bbb7b,
    0xd532b670,
    0xc729a16d,
    0xc920ac66,
    0xe31f8f57,
    0xed16825c,
    0xff0d9541,
    0xf104984a,
    0xab73d323,
    0xa57ade28,
    0xb761c935,
    0xb968c43e,
    0x9357e70f,
    0x9d5eea04,
    0x8f45fd19,
    0x814cf012,
    0x3bab6bcb,
    0x35a266c0,
    0x27b971dd,
    0x29b07cd6,
    0x038f5fe7,
    0x0d8652ec,
    0x1f9d45f1,
    0x119448fa,
    0x4be30393,
    0x45ea0e98,
    0x57f11985,
    0x59f8148e,
    0x73c737bf,
    0x7dce3ab4,
    0x6fd52da9,
    0x61dc20a2,
    0xad766df6,
    0xa37f60fd,
    0xb16477e0,
    0xbf6d7aeb,
    0x955259da,
    0x9b5b54d1,
    0x894043cc,
    0x87494ec7,
    0xdd3e05ae,
    0xd33708a5,
    0xc12c1fb8,
    0xcf2512b3,
    0xe51a3182,
    0xeb133c89,
    0xf9082b94,
    0xf701269f,
    0x4de6bd46,
    0x43efb04d,
    0x51f4a750,
    0x5ffdaa5b,
    0x75c2896a,
    0x7bcb8461,
    0x69d0937c,
    0x67d99e77,
    0x3daed51e,
    0x33a7d815,
    0x21bccf08,
    0x2fb5c203,
    0x058ae132,
    0x0b83ec39,
    0x1998fb24,
    0x1791f62f,
    0x764dd68d,
    0x7844db86,
    0x6a5fcc9b,
    0x6456c190,
    0x4e69e2a1,
    0x4060efaa,
    0x527bf8b7,
    0x5c72f5bc,
    0x0605bed5,
    0x080cb3de,
    0x1a17a4c3,
    0x141ea9c8,
    0x3e218af9,
    0x302887f2,
    0x223390ef,
    0x2c3a9de4,
    0x96dd063d,
    0x98d40b36,
    0x8acf1c2b,
    0x84c61120,
    0xaef93211,
    0xa0f03f1a,
    0xb2eb2807,
    0xbce2250c,
    0xe6956e65,
    0xe89c636e,
    0xfa877473,
    0xf48e7978,
    0xdeb15a49,
    0xd0b85742,
    0xc2a3405f,
    0xccaa4d54,
    0x41ecdaf7,
    0x4fe5d7fc,
    0x5dfec0e1,
    0x53f7cdea,
    0x79c8eedb,
    0x77c1e3d0,
    0x65daf4cd,
    0x6bd3f9c6,
    0x31a4b2af,
    0x3fadbfa4,
    0x2db6a8b9,
    0x23bfa5b2,
    0x09808683,
    0x07898b88,
    0x15929c95,
    0x1b9b919e,
    0xa17c0a47,
    0xaf75074c,
    0xbd6e1051,
    0xb3671d5a,
    0x99583e6b,
    0x97513360,
    0x854a247d,
    0x8b432976,
    0xd134621f,
    0xdf3d6f14,
    0xcd267809,
    0xc32f7502,
    0xe9105633,
    0xe7195b38,
    0xf5024c25,
    0xfb0b412e,
    0x9ad7618c,
    0x94de6c87,
    0x86c57b9a,
    0x88cc7691,
    0xa2f355a0,
    0xacfa58ab,
    0xbee14fb6,
    0xb0e842bd,
    0xea9f09d4,
    0xe49604df,
    0xf68d13c2,
    0xf8841ec9,
    0xd2bb3df8,
    0xdcb230f3,
    0xcea927ee,
    0xc0a02ae5,
    0x7a47b13c,
    0x744ebc37,
    0x6655ab2a,
    0x685ca621,
    0x42638510,
    0x4c6a881b,
    0x5e719f06,
    0x5078920d,
    0x0a0fd964,
    0x0406d46f,
    0x161dc372,
    0x1814ce79,
    0x322bed48,
    0x3c22e043,
    0x2e39f75e,
    0x2030fa55,
    0xec9ab701,
    0xe293ba0a,
    0xf088ad17,
    0xfe81a01c,
    0xd4be832d,
    0xdab78e26,
    0xc8ac993b,
    0xc6a59430,
    0x9cd2df59,
    0x92dbd252,
    0x80c0c54f,
    0x8ec9c844,
    0xa4f6eb75,
    0xaaffe67e,
    0xb8e4f163,
    0xb6edfc68,
    0x0c0a67b1,
    0x02036aba,
    0x10187da7,
    0x1e1170ac,
    0x342e539d,
    0x3a275e96,
    0x283c498b,
    0x26354480,
    0x7c420fe9,
    0x724b02e2,
    0x605015ff,
    0x6e5918f4,
    0x44663bc5,
    0x4a6f36ce,
    0x587421d3,
    0x567d2cd8,
    0x37a10c7a,
    0x39a80171,
    0x2bb3166c,
    0x25ba1b67,
    0x0f853856,
    0x018c355d,
    0x13972240,
    0x1d9e2f4b,
    0x47e96422,
    0x49e06929,
    0x5bfb7e34,
    0x55f2733f,
    0x7fcd500e,
    0x71c45d05,
    0x63df4a18,
    0x6dd64713,
    0xd731dcca,
    0xd938d1c1,
    0xcb23c6dc,
    0xc52acbd7,
    0xef15e8e6,
    0xe11ce5ed,
    0xf307f2f0,
    0xfd0efffb,
    0xa779b492,
    0xa970b999,
    0xbb6bae84,
    0xb562a38f,
    0x9f5d80be,
    0x91548db5,
    0x834f9aa8,
    0x8d4697a3
];
const U2 = [
    0x00000000,
    0x0b0e090d,
    0x161c121a,
    0x1d121b17,
    0x2c382434,
    0x27362d39,
    0x3a24362e,
    0x312a3f23,
    0x58704868,
    0x537e4165,
    0x4e6c5a72,
    0x4562537f,
    0x74486c5c,
    0x7f466551,
    0x62547e46,
    0x695a774b,
    0xb0e090d0,
    0xbbee99dd,
    0xa6fc82ca,
    0xadf28bc7,
    0x9cd8b4e4,
    0x97d6bde9,
    0x8ac4a6fe,
    0x81caaff3,
    0xe890d8b8,
    0xe39ed1b5,
    0xfe8ccaa2,
    0xf582c3af,
    0xc4a8fc8c,
    0xcfa6f581,
    0xd2b4ee96,
    0xd9bae79b,
    0x7bdb3bbb,
    0x70d532b6,
    0x6dc729a1,
    0x66c920ac,
    0x57e31f8f,
    0x5ced1682,
    0x41ff0d95,
    0x4af10498,
    0x23ab73d3,
    0x28a57ade,
    0x35b761c9,
    0x3eb968c4,
    0x0f9357e7,
    0x049d5eea,
    0x198f45fd,
    0x12814cf0,
    0xcb3bab6b,
    0xc035a266,
    0xdd27b971,
    0xd629b07c,
    0xe7038f5f,
    0xec0d8652,
    0xf11f9d45,
    0xfa119448,
    0x934be303,
    0x9845ea0e,
    0x8557f119,
    0x8e59f814,
    0xbf73c737,
    0xb47dce3a,
    0xa96fd52d,
    0xa261dc20,
    0xf6ad766d,
    0xfda37f60,
    0xe0b16477,
    0xebbf6d7a,
    0xda955259,
    0xd19b5b54,
    0xcc894043,
    0xc787494e,
    0xaedd3e05,
    0xa5d33708,
    0xb8c12c1f,
    0xb3cf2512,
    0x82e51a31,
    0x89eb133c,
    0x94f9082b,
    0x9ff70126,
    0x464de6bd,
    0x4d43efb0,
    0x5051f4a7,
    0x5b5ffdaa,
    0x6a75c289,
    0x617bcb84,
    0x7c69d093,
    0x7767d99e,
    0x1e3daed5,
    0x1533a7d8,
    0x0821bccf,
    0x032fb5c2,
    0x32058ae1,
    0x390b83ec,
    0x241998fb,
    0x2f1791f6,
    0x8d764dd6,
    0x867844db,
    0x9b6a5fcc,
    0x906456c1,
    0xa14e69e2,
    0xaa4060ef,
    0xb7527bf8,
    0xbc5c72f5,
    0xd50605be,
    0xde080cb3,
    0xc31a17a4,
    0xc8141ea9,
    0xf93e218a,
    0xf2302887,
    0xef223390,
    0xe42c3a9d,
    0x3d96dd06,
    0x3698d40b,
    0x2b8acf1c,
    0x2084c611,
    0x11aef932,
    0x1aa0f03f,
    0x07b2eb28,
    0x0cbce225,
    0x65e6956e,
    0x6ee89c63,
    0x73fa8774,
    0x78f48e79,
    0x49deb15a,
    0x42d0b857,
    0x5fc2a340,
    0x54ccaa4d,
    0xf741ecda,
    0xfc4fe5d7,
    0xe15dfec0,
    0xea53f7cd,
    0xdb79c8ee,
    0xd077c1e3,
    0xcd65daf4,
    0xc66bd3f9,
    0xaf31a4b2,
    0xa43fadbf,
    0xb92db6a8,
    0xb223bfa5,
    0x83098086,
    0x8807898b,
    0x9515929c,
    0x9e1b9b91,
    0x47a17c0a,
    0x4caf7507,
    0x51bd6e10,
    0x5ab3671d,
    0x6b99583e,
    0x60975133,
    0x7d854a24,
    0x768b4329,
    0x1fd13462,
    0x14df3d6f,
    0x09cd2678,
    0x02c32f75,
    0x33e91056,
    0x38e7195b,
    0x25f5024c,
    0x2efb0b41,
    0x8c9ad761,
    0x8794de6c,
    0x9a86c57b,
    0x9188cc76,
    0xa0a2f355,
    0xabacfa58,
    0xb6bee14f,
    0xbdb0e842,
    0xd4ea9f09,
    0xdfe49604,
    0xc2f68d13,
    0xc9f8841e,
    0xf8d2bb3d,
    0xf3dcb230,
    0xeecea927,
    0xe5c0a02a,
    0x3c7a47b1,
    0x37744ebc,
    0x2a6655ab,
    0x21685ca6,
    0x10426385,
    0x1b4c6a88,
    0x065e719f,
    0x0d507892,
    0x640a0fd9,
    0x6f0406d4,
    0x72161dc3,
    0x791814ce,
    0x48322bed,
    0x433c22e0,
    0x5e2e39f7,
    0x552030fa,
    0x01ec9ab7,
    0x0ae293ba,
    0x17f088ad,
    0x1cfe81a0,
    0x2dd4be83,
    0x26dab78e,
    0x3bc8ac99,
    0x30c6a594,
    0x599cd2df,
    0x5292dbd2,
    0x4f80c0c5,
    0x448ec9c8,
    0x75a4f6eb,
    0x7eaaffe6,
    0x63b8e4f1,
    0x68b6edfc,
    0xb10c0a67,
    0xba02036a,
    0xa710187d,
    0xac1e1170,
    0x9d342e53,
    0x963a275e,
    0x8b283c49,
    0x80263544,
    0xe97c420f,
    0xe2724b02,
    0xff605015,
    0xf46e5918,
    0xc544663b,
    0xce4a6f36,
    0xd3587421,
    0xd8567d2c,
    0x7a37a10c,
    0x7139a801,
    0x6c2bb316,
    0x6725ba1b,
    0x560f8538,
    0x5d018c35,
    0x40139722,
    0x4b1d9e2f,
    0x2247e964,
    0x2949e069,
    0x345bfb7e,
    0x3f55f273,
    0x0e7fcd50,
    0x0571c45d,
    0x1863df4a,
    0x136dd647,
    0xcad731dc,
    0xc1d938d1,
    0xdccb23c6,
    0xd7c52acb,
    0xe6ef15e8,
    0xede11ce5,
    0xf0f307f2,
    0xfbfd0eff,
    0x92a779b4,
    0x99a970b9,
    0x84bb6bae,
    0x8fb562a3,
    0xbe9f5d80,
    0xb591548d,
    0xa8834f9a,
    0xa38d4697
];
const U3 = [
    0x00000000,
    0x0d0b0e09,
    0x1a161c12,
    0x171d121b,
    0x342c3824,
    0x3927362d,
    0x2e3a2436,
    0x23312a3f,
    0x68587048,
    0x65537e41,
    0x724e6c5a,
    0x7f456253,
    0x5c74486c,
    0x517f4665,
    0x4662547e,
    0x4b695a77,
    0xd0b0e090,
    0xddbbee99,
    0xcaa6fc82,
    0xc7adf28b,
    0xe49cd8b4,
    0xe997d6bd,
    0xfe8ac4a6,
    0xf381caaf,
    0xb8e890d8,
    0xb5e39ed1,
    0xa2fe8cca,
    0xaff582c3,
    0x8cc4a8fc,
    0x81cfa6f5,
    0x96d2b4ee,
    0x9bd9bae7,
    0xbb7bdb3b,
    0xb670d532,
    0xa16dc729,
    0xac66c920,
    0x8f57e31f,
    0x825ced16,
    0x9541ff0d,
    0x984af104,
    0xd323ab73,
    0xde28a57a,
    0xc935b761,
    0xc43eb968,
    0xe70f9357,
    0xea049d5e,
    0xfd198f45,
    0xf012814c,
    0x6bcb3bab,
    0x66c035a2,
    0x71dd27b9,
    0x7cd629b0,
    0x5fe7038f,
    0x52ec0d86,
    0x45f11f9d,
    0x48fa1194,
    0x03934be3,
    0x0e9845ea,
    0x198557f1,
    0x148e59f8,
    0x37bf73c7,
    0x3ab47dce,
    0x2da96fd5,
    0x20a261dc,
    0x6df6ad76,
    0x60fda37f,
    0x77e0b164,
    0x7aebbf6d,
    0x59da9552,
    0x54d19b5b,
    0x43cc8940,
    0x4ec78749,
    0x05aedd3e,
    0x08a5d337,
    0x1fb8c12c,
    0x12b3cf25,
    0x3182e51a,
    0x3c89eb13,
    0x2b94f908,
    0x269ff701,
    0xbd464de6,
    0xb04d43ef,
    0xa75051f4,
    0xaa5b5ffd,
    0x896a75c2,
    0x84617bcb,
    0x937c69d0,
    0x9e7767d9,
    0xd51e3dae,
    0xd81533a7,
    0xcf0821bc,
    0xc2032fb5,
    0xe132058a,
    0xec390b83,
    0xfb241998,
    0xf62f1791,
    0xd68d764d,
    0xdb867844,
    0xcc9b6a5f,
    0xc1906456,
    0xe2a14e69,
    0xefaa4060,
    0xf8b7527b,
    0xf5bc5c72,
    0xbed50605,
    0xb3de080c,
    0xa4c31a17,
    0xa9c8141e,
    0x8af93e21,
    0x87f23028,
    0x90ef2233,
    0x9de42c3a,
    0x063d96dd,
    0x0b3698d4,
    0x1c2b8acf,
    0x112084c6,
    0x3211aef9,
    0x3f1aa0f0,
    0x2807b2eb,
    0x250cbce2,
    0x6e65e695,
    0x636ee89c,
    0x7473fa87,
    0x7978f48e,
    0x5a49deb1,
    0x5742d0b8,
    0x405fc2a3,
    0x4d54ccaa,
    0xdaf741ec,
    0xd7fc4fe5,
    0xc0e15dfe,
    0xcdea53f7,
    0xeedb79c8,
    0xe3d077c1,
    0xf4cd65da,
    0xf9c66bd3,
    0xb2af31a4,
    0xbfa43fad,
    0xa8b92db6,
    0xa5b223bf,
    0x86830980,
    0x8b880789,
    0x9c951592,
    0x919e1b9b,
    0x0a47a17c,
    0x074caf75,
    0x1051bd6e,
    0x1d5ab367,
    0x3e6b9958,
    0x33609751,
    0x247d854a,
    0x29768b43,
    0x621fd134,
    0x6f14df3d,
    0x7809cd26,
    0x7502c32f,
    0x5633e910,
    0x5b38e719,
    0x4c25f502,
    0x412efb0b,
    0x618c9ad7,
    0x6c8794de,
    0x7b9a86c5,
    0x769188cc,
    0x55a0a2f3,
    0x58abacfa,
    0x4fb6bee1,
    0x42bdb0e8,
    0x09d4ea9f,
    0x04dfe496,
    0x13c2f68d,
    0x1ec9f884,
    0x3df8d2bb,
    0x30f3dcb2,
    0x27eecea9,
    0x2ae5c0a0,
    0xb13c7a47,
    0xbc37744e,
    0xab2a6655,
    0xa621685c,
    0x85104263,
    0x881b4c6a,
    0x9f065e71,
    0x920d5078,
    0xd9640a0f,
    0xd46f0406,
    0xc372161d,
    0xce791814,
    0xed48322b,
    0xe0433c22,
    0xf75e2e39,
    0xfa552030,
    0xb701ec9a,
    0xba0ae293,
    0xad17f088,
    0xa01cfe81,
    0x832dd4be,
    0x8e26dab7,
    0x993bc8ac,
    0x9430c6a5,
    0xdf599cd2,
    0xd25292db,
    0xc54f80c0,
    0xc8448ec9,
    0xeb75a4f6,
    0xe67eaaff,
    0xf163b8e4,
    0xfc68b6ed,
    0x67b10c0a,
    0x6aba0203,
    0x7da71018,
    0x70ac1e11,
    0x539d342e,
    0x5e963a27,
    0x498b283c,
    0x44802635,
    0x0fe97c42,
    0x02e2724b,
    0x15ff6050,
    0x18f46e59,
    0x3bc54466,
    0x36ce4a6f,
    0x21d35874,
    0x2cd8567d,
    0x0c7a37a1,
    0x017139a8,
    0x166c2bb3,
    0x1b6725ba,
    0x38560f85,
    0x355d018c,
    0x22401397,
    0x2f4b1d9e,
    0x642247e9,
    0x692949e0,
    0x7e345bfb,
    0x733f55f2,
    0x500e7fcd,
    0x5d0571c4,
    0x4a1863df,
    0x47136dd6,
    0xdccad731,
    0xd1c1d938,
    0xc6dccb23,
    0xcbd7c52a,
    0xe8e6ef15,
    0xe5ede11c,
    0xf2f0f307,
    0xfffbfd0e,
    0xb492a779,
    0xb999a970,
    0xae84bb6b,
    0xa38fb562,
    0x80be9f5d,
    0x8db59154,
    0x9aa8834f,
    0x97a38d46
];
const U4 = [
    0x00000000,
    0x090d0b0e,
    0x121a161c,
    0x1b171d12,
    0x24342c38,
    0x2d392736,
    0x362e3a24,
    0x3f23312a,
    0x48685870,
    0x4165537e,
    0x5a724e6c,
    0x537f4562,
    0x6c5c7448,
    0x65517f46,
    0x7e466254,
    0x774b695a,
    0x90d0b0e0,
    0x99ddbbee,
    0x82caa6fc,
    0x8bc7adf2,
    0xb4e49cd8,
    0xbde997d6,
    0xa6fe8ac4,
    0xaff381ca,
    0xd8b8e890,
    0xd1b5e39e,
    0xcaa2fe8c,
    0xc3aff582,
    0xfc8cc4a8,
    0xf581cfa6,
    0xee96d2b4,
    0xe79bd9ba,
    0x3bbb7bdb,
    0x32b670d5,
    0x29a16dc7,
    0x20ac66c9,
    0x1f8f57e3,
    0x16825ced,
    0x0d9541ff,
    0x04984af1,
    0x73d323ab,
    0x7ade28a5,
    0x61c935b7,
    0x68c43eb9,
    0x57e70f93,
    0x5eea049d,
    0x45fd198f,
    0x4cf01281,
    0xab6bcb3b,
    0xa266c035,
    0xb971dd27,
    0xb07cd629,
    0x8f5fe703,
    0x8652ec0d,
    0x9d45f11f,
    0x9448fa11,
    0xe303934b,
    0xea0e9845,
    0xf1198557,
    0xf8148e59,
    0xc737bf73,
    0xce3ab47d,
    0xd52da96f,
    0xdc20a261,
    0x766df6ad,
    0x7f60fda3,
    0x6477e0b1,
    0x6d7aebbf,
    0x5259da95,
    0x5b54d19b,
    0x4043cc89,
    0x494ec787,
    0x3e05aedd,
    0x3708a5d3,
    0x2c1fb8c1,
    0x2512b3cf,
    0x1a3182e5,
    0x133c89eb,
    0x082b94f9,
    0x01269ff7,
    0xe6bd464d,
    0xefb04d43,
    0xf4a75051,
    0xfdaa5b5f,
    0xc2896a75,
    0xcb84617b,
    0xd0937c69,
    0xd99e7767,
    0xaed51e3d,
    0xa7d81533,
    0xbccf0821,
    0xb5c2032f,
    0x8ae13205,
    0x83ec390b,
    0x98fb2419,
    0x91f62f17,
    0x4dd68d76,
    0x44db8678,
    0x5fcc9b6a,
    0x56c19064,
    0x69e2a14e,
    0x60efaa40,
    0x7bf8b752,
    0x72f5bc5c,
    0x05bed506,
    0x0cb3de08,
    0x17a4c31a,
    0x1ea9c814,
    0x218af93e,
    0x2887f230,
    0x3390ef22,
    0x3a9de42c,
    0xdd063d96,
    0xd40b3698,
    0xcf1c2b8a,
    0xc6112084,
    0xf93211ae,
    0xf03f1aa0,
    0xeb2807b2,
    0xe2250cbc,
    0x956e65e6,
    0x9c636ee8,
    0x877473fa,
    0x8e7978f4,
    0xb15a49de,
    0xb85742d0,
    0xa3405fc2,
    0xaa4d54cc,
    0xecdaf741,
    0xe5d7fc4f,
    0xfec0e15d,
    0xf7cdea53,
    0xc8eedb79,
    0xc1e3d077,
    0xdaf4cd65,
    0xd3f9c66b,
    0xa4b2af31,
    0xadbfa43f,
    0xb6a8b92d,
    0xbfa5b223,
    0x80868309,
    0x898b8807,
    0x929c9515,
    0x9b919e1b,
    0x7c0a47a1,
    0x75074caf,
    0x6e1051bd,
    0x671d5ab3,
    0x583e6b99,
    0x51336097,
    0x4a247d85,
    0x4329768b,
    0x34621fd1,
    0x3d6f14df,
    0x267809cd,
    0x2f7502c3,
    0x105633e9,
    0x195b38e7,
    0x024c25f5,
    0x0b412efb,
    0xd7618c9a,
    0xde6c8794,
    0xc57b9a86,
    0xcc769188,
    0xf355a0a2,
    0xfa58abac,
    0xe14fb6be,
    0xe842bdb0,
    0x9f09d4ea,
    0x9604dfe4,
    0x8d13c2f6,
    0x841ec9f8,
    0xbb3df8d2,
    0xb230f3dc,
    0xa927eece,
    0xa02ae5c0,
    0x47b13c7a,
    0x4ebc3774,
    0x55ab2a66,
    0x5ca62168,
    0x63851042,
    0x6a881b4c,
    0x719f065e,
    0x78920d50,
    0x0fd9640a,
    0x06d46f04,
    0x1dc37216,
    0x14ce7918,
    0x2bed4832,
    0x22e0433c,
    0x39f75e2e,
    0x30fa5520,
    0x9ab701ec,
    0x93ba0ae2,
    0x88ad17f0,
    0x81a01cfe,
    0xbe832dd4,
    0xb78e26da,
    0xac993bc8,
    0xa59430c6,
    0xd2df599c,
    0xdbd25292,
    0xc0c54f80,
    0xc9c8448e,
    0xf6eb75a4,
    0xffe67eaa,
    0xe4f163b8,
    0xedfc68b6,
    0x0a67b10c,
    0x036aba02,
    0x187da710,
    0x1170ac1e,
    0x2e539d34,
    0x275e963a,
    0x3c498b28,
    0x35448026,
    0x420fe97c,
    0x4b02e272,
    0x5015ff60,
    0x5918f46e,
    0x663bc544,
    0x6f36ce4a,
    0x7421d358,
    0x7d2cd856,
    0xa10c7a37,
    0xa8017139,
    0xb3166c2b,
    0xba1b6725,
    0x8538560f,
    0x8c355d01,
    0x97224013,
    0x9e2f4b1d,
    0xe9642247,
    0xe0692949,
    0xfb7e345b,
    0xf2733f55,
    0xcd500e7f,
    0xc45d0571,
    0xdf4a1863,
    0xd647136d,
    0x31dccad7,
    0x38d1c1d9,
    0x23c6dccb,
    0x2acbd7c5,
    0x15e8e6ef,
    0x1ce5ede1,
    0x07f2f0f3,
    0x0efffbfd,
    0x79b492a7,
    0x70b999a9,
    0x6bae84bb,
    0x62a38fb5,
    0x5d80be9f,
    0x548db591,
    0x4f9aa883,
    0x4697a38d
];
function convertToInt32(bytes) {
    const result = [];
    for(let i = 0; i < bytes.length; i += 4){
        result.push(bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]);
    }
    return result;
}
class AES {
    get key() {
        return __classPrivateFieldGet(this, _AES_key, "f").slice();
    }
    encrypt(plaintext) {
        if (plaintext.length != 16) {
            throw new TypeError('invalid plaintext size (must be 16 bytes)');
        }
        const rounds = __classPrivateFieldGet(this, _AES_Ke, "f").length - 1;
        const a = [
            0,
            0,
            0,
            0
        ];
        // convert plaintext to (ints ^ key)
        let t = convertToInt32(plaintext);
        for(let i = 0; i < 4; i++){
            t[i] ^= __classPrivateFieldGet(this, _AES_Ke, "f")[0][i];
        }
        // apply round transforms
        for(let r = 1; r < rounds; r++){
            for(let i = 0; i < 4; i++){
                a[i] = T1[t[i] >> 24 & 0xff] ^ T2[t[(i + 1) % 4] >> 16 & 0xff] ^ T3[t[(i + 2) % 4] >> 8 & 0xff] ^ T4[t[(i + 3) % 4] & 0xff] ^ __classPrivateFieldGet(this, _AES_Ke, "f")[r][i];
            }
            t = a.slice();
        }
        // the last round is special
        const result = new Uint8Array(16);
        let tt = 0;
        for(let i = 0; i < 4; i++){
            tt = __classPrivateFieldGet(this, _AES_Ke, "f")[rounds][i];
            result[4 * i] = (S[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
            result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
            result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
            result[4 * i + 3] = (S[t[(i + 3) % 4] & 0xff] ^ tt) & 0xff;
        }
        return result;
    }
    decrypt(ciphertext) {
        if (ciphertext.length != 16) {
            throw new TypeError('invalid ciphertext size (must be 16 bytes)');
        }
        const rounds = __classPrivateFieldGet(this, _AES_Kd, "f").length - 1;
        const a = [
            0,
            0,
            0,
            0
        ];
        // convert plaintext to (ints ^ key)
        let t = convertToInt32(ciphertext);
        for(let i = 0; i < 4; i++){
            t[i] ^= __classPrivateFieldGet(this, _AES_Kd, "f")[0][i];
        }
        // apply round transforms
        for(let r = 1; r < rounds; r++){
            for(let i = 0; i < 4; i++){
                a[i] = T5[t[i] >> 24 & 0xff] ^ T6[t[(i + 3) % 4] >> 16 & 0xff] ^ T7[t[(i + 2) % 4] >> 8 & 0xff] ^ T8[t[(i + 1) % 4] & 0xff] ^ __classPrivateFieldGet(this, _AES_Kd, "f")[r][i];
            }
            t = a.slice();
        }
        // the last round is special
        const result = new Uint8Array(16);
        let tt = 0;
        for(let i = 0; i < 4; i++){
            tt = __classPrivateFieldGet(this, _AES_Kd, "f")[rounds][i];
            result[4 * i] = (Si[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
            result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
            result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
            result[4 * i + 3] = (Si[t[(i + 1) % 4] & 0xff] ^ tt) & 0xff;
        }
        return result;
    }
    constructor(key){
        _AES_key.set(this, void 0);
        _AES_Kd.set(this, void 0);
        _AES_Ke.set(this, void 0);
        if (!(this instanceof AES)) {
            throw Error('AES must be instanitated with `new`');
        }
        __classPrivateFieldSet(this, _AES_key, new Uint8Array(key), "f");
        const rounds = numberOfRounds[this.key.length];
        if (rounds == null) {
            throw new TypeError('invalid key size (must be 16, 24 or 32 bytes)');
        }
        // encryption round keys
        __classPrivateFieldSet(this, _AES_Ke, [], "f");
        // decryption round keys
        __classPrivateFieldSet(this, _AES_Kd, [], "f");
        for(let i = 0; i <= rounds; i++){
            __classPrivateFieldGet(this, _AES_Ke, "f").push([
                0,
                0,
                0,
                0
            ]);
            __classPrivateFieldGet(this, _AES_Kd, "f").push([
                0,
                0,
                0,
                0
            ]);
        }
        const roundKeyCount = (rounds + 1) * 4;
        const KC = this.key.length / 4;
        // convert the key into ints
        const tk = convertToInt32(this.key);
        // copy values into round key arrays
        let index;
        for(let i = 0; i < KC; i++){
            index = i >> 2;
            __classPrivateFieldGet(this, _AES_Ke, "f")[index][i % 4] = tk[i];
            __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - index][i % 4] = tk[i];
        }
        // key expansion (fips-197 section 5.2)
        let rconpointer = 0;
        let t = KC, tt;
        while(t < roundKeyCount){
            tt = tk[KC - 1];
            tk[0] ^= S[tt >> 16 & 0xFF] << 24 ^ S[tt >> 8 & 0xFF] << 16 ^ S[tt & 0xFF] << 8 ^ S[tt >> 24 & 0xFF] ^ rcon[rconpointer] << 24;
            rconpointer += 1;
            // key expansion (for non-256 bit)
            if (KC != 8) {
                for(let i = 1; i < KC; i++){
                    tk[i] ^= tk[i - 1];
                }
            // key expansion for 256-bit keys is "slightly different" (fips-197)
            } else {
                for(let i = 1; i < KC / 2; i++){
                    tk[i] ^= tk[i - 1];
                }
                tt = tk[KC / 2 - 1];
                tk[KC / 2] ^= S[tt & 0xFF] ^ S[tt >> 8 & 0xFF] << 8 ^ S[tt >> 16 & 0xFF] << 16 ^ S[tt >> 24 & 0xFF] << 24;
                for(let i = KC / 2 + 1; i < KC; i++){
                    tk[i] ^= tk[i - 1];
                }
            }
            // copy values into round key arrays
            let i = 0, r, c;
            while(i < KC && t < roundKeyCount){
                r = t >> 2;
                c = t % 4;
                __classPrivateFieldGet(this, _AES_Ke, "f")[r][c] = tk[i];
                __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - r][c] = tk[i++];
                t++;
            }
        }
        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
        for(let r = 1; r < rounds; r++){
            for(let c = 0; c < 4; c++){
                tt = __classPrivateFieldGet(this, _AES_Kd, "f")[r][c];
                __classPrivateFieldGet(this, _AES_Kd, "f")[r][c] = U1[tt >> 24 & 0xFF] ^ U2[tt >> 16 & 0xFF] ^ U3[tt >> 8 & 0xFF] ^ U4[tt & 0xFF];
            }
        }
    }
}
_AES_key = new WeakMap(), _AES_Kd = new WeakMap(), _AES_Ke = new WeakMap(); //# sourceMappingURL=aes.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeOfOperation",
    ()=>ModeOfOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/aes.js [app-client] (ecmascript)");
;
class ModeOfOperation {
    constructor(name, key, cls){
        if (cls && !(this instanceof cls)) {
            throw new Error("".concat(name, ' must be instantiated with "new"'));
        }
        Object.defineProperties(this, {
            aes: {
                enumerable: true,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AES"](key)
            },
            name: {
                enumerable: true,
                value: name
            }
        });
    }
} //# sourceMappingURL=mode.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-cbc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cipher Block Chaining
__turbopack_context__.s([
    "CBC",
    ()=>CBC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CBC_iv, _CBC_lastBlock;
;
class CBC extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _CBC_iv, "f"));
    }
    encrypt(plaintext) {
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const ciphertext = new Uint8Array(plaintext.length);
        for(let i = 0; i < plaintext.length; i += 16){
            for(let j = 0; j < 16; j++){
                __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j] ^= plaintext[i + j];
            }
            __classPrivateFieldSet(this, _CBC_lastBlock, this.aes.encrypt(__classPrivateFieldGet(this, _CBC_lastBlock, "f")), "f");
            ciphertext.set(__classPrivateFieldGet(this, _CBC_lastBlock, "f"), i);
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (ciphertext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        const plaintext = new Uint8Array(ciphertext.length);
        for(let i = 0; i < ciphertext.length; i += 16){
            const block = this.aes.decrypt(ciphertext.subarray(i, i + 16));
            for(let j = 0; j < 16; j++){
                plaintext[i + j] = block[j] ^ __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j];
                __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j] = ciphertext[i + j];
            }
        }
        return plaintext;
    }
    constructor(key, iv){
        super("ECC", key, CBC);
        _CBC_iv.set(this, void 0);
        _CBC_lastBlock.set(this, void 0);
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _CBC_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _CBC_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _CBC_lastBlock, this.iv, "f");
    }
}
_CBC_iv = new WeakMap(), _CBC_lastBlock = new WeakMap(); //# sourceMappingURL=mode-cbc.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-cfb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cipher Feedback
__turbopack_context__.s([
    "CFB",
    ()=>CFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CFB_instances, _CFB_iv, _CFB_shiftRegister, _CFB_shift;
;
class CFB extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _CFB_iv, "f"));
    }
    encrypt(plaintext) {
        if (8 * plaintext.length % this.segmentSize) {
            throw new TypeError("invalid plaintext size (must be multiple of segmentSize bytes)");
        }
        const segmentSize = this.segmentSize / 8;
        const ciphertext = new Uint8Array(plaintext);
        for(let i = 0; i < ciphertext.length; i += segmentSize){
            const xorSegment = this.aes.encrypt(__classPrivateFieldGet(this, _CFB_shiftRegister, "f"));
            for(let j = 0; j < segmentSize; j++){
                ciphertext[i + j] ^= xorSegment[j];
            }
            __classPrivateFieldGet(this, _CFB_instances, "m", _CFB_shift).call(this, ciphertext.subarray(i));
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (8 * ciphertext.length % this.segmentSize) {
            throw new TypeError("invalid ciphertext size (must be multiple of segmentSize bytes)");
        }
        const segmentSize = this.segmentSize / 8;
        const plaintext = new Uint8Array(ciphertext);
        for(let i = 0; i < plaintext.length; i += segmentSize){
            const xorSegment = this.aes.encrypt(__classPrivateFieldGet(this, _CFB_shiftRegister, "f"));
            for(let j = 0; j < segmentSize; j++){
                plaintext[i + j] ^= xorSegment[j];
            }
            __classPrivateFieldGet(this, _CFB_instances, "m", _CFB_shift).call(this, ciphertext.subarray(i));
        }
        return plaintext;
    }
    constructor(key, iv, segmentSize = 8){
        super("CFB", key, CFB);
        _CFB_instances.add(this);
        _CFB_iv.set(this, void 0);
        _CFB_shiftRegister.set(this, void 0);
        // This library currently only handles byte-aligned segmentSize
        if (!Number.isInteger(segmentSize) || segmentSize % 8) {
            throw new TypeError("invalid segmentSize");
        }
        Object.defineProperties(this, {
            segmentSize: {
                enumerable: true,
                value: segmentSize
            }
        });
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _CFB_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _CFB_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _CFB_shiftRegister, this.iv, "f");
    }
}
_CFB_iv = new WeakMap(), _CFB_shiftRegister = new WeakMap(), _CFB_instances = new WeakSet(), _CFB_shift = function _CFB_shift(data) {
    const segmentSize = this.segmentSize / 8;
    // Shift the register
    __classPrivateFieldGet(this, _CFB_shiftRegister, "f").set(__classPrivateFieldGet(this, _CFB_shiftRegister, "f").subarray(segmentSize));
    __classPrivateFieldGet(this, _CFB_shiftRegister, "f").set(data.subarray(0, segmentSize), 16 - segmentSize);
}; //# sourceMappingURL=mode-cfb.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-ctr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Counter Mode
__turbopack_context__.s([
    "CTR",
    ()=>CTR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CTR_remaining, _CTR_remainingIndex, _CTR_counter;
;
class CTR extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    get counter() {
        return new Uint8Array(__classPrivateFieldGet(this, _CTR_counter, "f"));
    }
    setCounterValue(value) {
        if (!Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
            throw new TypeError("invalid counter initial integer value");
        }
        for(let index = 15; index >= 0; --index){
            __classPrivateFieldGet(this, _CTR_counter, "f")[index] = value % 256;
            value = Math.floor(value / 256);
        }
    }
    setCounterBytes(value) {
        if (value.length !== 16) {
            throw new TypeError("invalid counter initial Uint8Array value length");
        }
        __classPrivateFieldGet(this, _CTR_counter, "f").set(value);
    }
    increment() {
        for(let i = 15; i >= 0; i--){
            if (__classPrivateFieldGet(this, _CTR_counter, "f")[i] === 255) {
                __classPrivateFieldGet(this, _CTR_counter, "f")[i] = 0;
            } else {
                __classPrivateFieldGet(this, _CTR_counter, "f")[i]++;
                break;
            }
        }
    }
    encrypt(plaintext) {
        var _a, _b;
        const crypttext = new Uint8Array(plaintext);
        for(let i = 0; i < crypttext.length; i++){
            if (__classPrivateFieldGet(this, _CTR_remainingIndex, "f") === 16) {
                __classPrivateFieldSet(this, _CTR_remaining, this.aes.encrypt(__classPrivateFieldGet(this, _CTR_counter, "f")), "f");
                __classPrivateFieldSet(this, _CTR_remainingIndex, 0, "f");
                this.increment();
            }
            crypttext[i] ^= __classPrivateFieldGet(this, _CTR_remaining, "f")[__classPrivateFieldSet(this, _CTR_remainingIndex, (_b = __classPrivateFieldGet(this, _CTR_remainingIndex, "f"), _a = _b++, _b), "f"), _a];
        }
        return crypttext;
    }
    decrypt(ciphertext) {
        return this.encrypt(ciphertext);
    }
    constructor(key, initialValue){
        super("CTR", key, CTR);
        // Remaining bytes for the one-time pad
        _CTR_remaining.set(this, void 0);
        _CTR_remainingIndex.set(this, void 0);
        // The current counter
        _CTR_counter.set(this, void 0);
        __classPrivateFieldSet(this, _CTR_counter, new Uint8Array(16), "f");
        __classPrivateFieldGet(this, _CTR_counter, "f").fill(0);
        __classPrivateFieldSet(this, _CTR_remaining, __classPrivateFieldGet(this, _CTR_counter, "f"), "f"); // This will be discarded immediately
        __classPrivateFieldSet(this, _CTR_remainingIndex, 16, "f");
        if (initialValue == null) {
            initialValue = 1;
        }
        if (typeof initialValue === "number") {
            this.setCounterValue(initialValue);
        } else {
            this.setCounterBytes(initialValue);
        }
    }
}
_CTR_remaining = new WeakMap(), _CTR_remainingIndex = new WeakMap(), _CTR_counter = new WeakMap(); //# sourceMappingURL=mode-ctr.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-ecb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Electronic Code Book
__turbopack_context__.s([
    "ECB",
    ()=>ECB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
;
class ECB extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    encrypt(plaintext) {
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const crypttext = new Uint8Array(plaintext.length);
        for(let i = 0; i < plaintext.length; i += 16){
            crypttext.set(this.aes.encrypt(plaintext.subarray(i, i + 16)), i);
        }
        return crypttext;
    }
    decrypt(crypttext) {
        if (crypttext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        const plaintext = new Uint8Array(crypttext.length);
        for(let i = 0; i < crypttext.length; i += 16){
            plaintext.set(this.aes.decrypt(crypttext.subarray(i, i + 16)), i);
        }
        return plaintext;
    }
    constructor(key){
        super("ECB", key, ECB);
    }
} //# sourceMappingURL=mode-ecb.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-ofb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Output Feedback
__turbopack_context__.s([
    "OFB",
    ()=>OFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OFB_iv, _OFB_lastPrecipher, _OFB_lastPrecipherIndex;
;
class OFB extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _OFB_iv, "f"));
    }
    encrypt(plaintext) {
        var _a, _b;
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const ciphertext = new Uint8Array(plaintext);
        for(let i = 0; i < ciphertext.length; i++){
            if (__classPrivateFieldGet(this, _OFB_lastPrecipherIndex, "f") === 16) {
                __classPrivateFieldSet(this, _OFB_lastPrecipher, this.aes.encrypt(__classPrivateFieldGet(this, _OFB_lastPrecipher, "f")), "f");
                __classPrivateFieldSet(this, _OFB_lastPrecipherIndex, 0, "f");
            }
            ciphertext[i] ^= __classPrivateFieldGet(this, _OFB_lastPrecipher, "f")[__classPrivateFieldSet(this, _OFB_lastPrecipherIndex, (_b = __classPrivateFieldGet(this, _OFB_lastPrecipherIndex, "f"), _a = _b++, _b), "f"), _a];
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (ciphertext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        return this.encrypt(ciphertext);
    }
    constructor(key, iv){
        super("OFB", key, OFB);
        _OFB_iv.set(this, void 0);
        _OFB_lastPrecipher.set(this, void 0);
        _OFB_lastPrecipherIndex.set(this, void 0);
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _OFB_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _OFB_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _OFB_lastPrecipher, this.iv, "f");
        __classPrivateFieldSet(this, _OFB_lastPrecipherIndex, 16, "f");
    }
}
_OFB_iv = new WeakMap(), _OFB_lastPrecipher = new WeakMap(), _OFB_lastPrecipherIndex = new WeakMap(); //# sourceMappingURL=mode-ofb.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/padding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pkcs7Pad",
    ()=>pkcs7Pad,
    "pkcs7Strip",
    ()=>pkcs7Strip
]);
function pkcs7Pad(data) {
    const padder = 16 - data.length % 16;
    const result = new Uint8Array(data.length + padder);
    result.set(data);
    for(let i = data.length; i < result.length; i++){
        result[i] = padder;
    }
    return result;
}
function pkcs7Strip(data) {
    if (data.length < 16) {
        throw new TypeError('PKCS#7 invalid length');
    }
    const padder = data[data.length - 1];
    if (padder > 16) {
        throw new TypeError('PKCS#7 padding byte out of range');
    }
    const length = data.length - padder;
    for(let i = 0; i < padder; i++){
        if (data[length + i] !== padder) {
            throw new TypeError('PKCS#7 invalid padding byte');
        }
    }
    return new Uint8Array(data.subarray(0, length));
} //# sourceMappingURL=padding.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/aes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cbc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-cbc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cfb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-cfb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ctr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ecb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ecb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ofb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ofb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$padding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/padding.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  @_ignore
 */ __turbopack_context__.s([
    "getPassword",
    ()=>getPassword,
    "looseArrayify",
    ()=>looseArrayify,
    "spelunk",
    ()=>spelunk,
    "zpad",
    ()=>zpad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
;
function looseArrayify(hexString) {
    if (typeof hexString === "string" && !hexString.startsWith("0x")) {
        hexString = "0x" + hexString;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCopy"])(hexString);
}
function zpad(value, length) {
    value = String(value);
    while(value.length < length){
        value = '0' + value;
    }
    return value;
}
function getPassword(password) {
    if (typeof password === 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(password, "NFKC");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCopy"])(password);
}
function spelunk(object, _path) {
    const match = _path.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(match != null, "invalid path", "path", _path);
    const path = match[1];
    const type = match[3];
    const reqd = match[4] === "!";
    let cur = object;
    for (const comp of path.toLowerCase().split('.')){
        // Search for a child object with a case-insensitive matching key
        if (Array.isArray(cur)) {
            if (!comp.match(/^[0-9]+$/)) {
                break;
            }
            cur = cur[parseInt(comp)];
        } else if (typeof cur === "object") {
            let found = null;
            for(const key in cur){
                if (key.toLowerCase() === comp) {
                    found = cur[key];
                    break;
                }
            }
            cur = found;
        } else {
            cur = null;
        }
        if (cur == null) {
            break;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(!reqd || cur != null, "missing required value", "path", path);
    if (type && cur != null) {
        if (type === "int") {
            if (typeof cur === "string" && cur.match(/^-?[0-9]+$/)) {
                return parseInt(cur);
            } else if (Number.isSafeInteger(cur)) {
                return cur;
            }
        }
        if (type === "number") {
            if (typeof cur === "string" && cur.match(/^-?[0-9.]*$/)) {
                return parseFloat(cur);
            }
        }
        if (type === "data") {
            if (typeof cur === "string") {
                return looseArrayify(cur);
            }
        }
        if (type === "array" && Array.isArray(cur)) {
            return cur;
        }
        if (type === typeof cur) {
            return cur;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "wrong type found for ".concat(type, " "), "path", path);
    }
    return cur;
} /*
export function follow(object: any, path: string): null | string {
    let currentChild = object;

    for (const comp of path.toLowerCase().split('/')) {

        // Search for a child object with a case-insensitive matching key
        let matchingChild = null;
        for (const key in currentChild) {
             if (key.toLowerCase() === comp) {
                 matchingChild = currentChild[key];
                 break;
             }
        }

        if (matchingChild === null) { return null; }

        currentChild = matchingChild;
    }

    return currentChild;
}

// "path/to/something:type!"
export function followRequired(data: any, path: string): string {
    const value = follow(data, path);
    if (value != null) { return value; }
    return logger.throwArgumentError("invalid value", `data:${ path }`,
    JSON.stringify(data));
}
*/  // See: https://www.ietf.org/rfc/rfc4122.txt (Section 4.4)
 /*
export function uuidV4(randomBytes: BytesLike): string {
    const bytes = getBytes(randomBytes, "randomBytes");

    // Section: 4.1.3:
    // - time_hi_and_version[12:16] = 0b0100
    bytes[6] = (bytes[6] & 0x0f) | 0x40;

    // Section 4.4
    // - clock_seq_hi_and_reserved[6] = 0b0
    // - clock_seq_hi_and_reserved[7] = 0b1
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const value = hexlify(bytes);

    return [
       value.substring(2, 10),
       value.substring(10, 14),
       value.substring(14, 18),
       value.substring(18, 22),
       value.substring(22, 34),
    ].join("-");
}
*/  //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/json-keystore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  The JSON Wallet formats allow a simple way to store the private
 *  keys needed in Ethereum along with related information and allows
 *  for extensible forms of encryption.
 *
 *  These utilities facilitate decrypting and encrypting the most common
 *  JSON Wallet formats.
 *
 *  @_subsection: api/wallet:JSON Wallets  [json-wallets]
 */ __turbopack_context__.s([
    "decryptKeystoreJson",
    ()=>decryptKeystoreJson,
    "decryptKeystoreJsonSync",
    ()=>decryptKeystoreJsonSync,
    "encryptKeystoreJson",
    ()=>encryptKeystoreJson,
    "encryptKeystoreJsonSync",
    ()=>encryptKeystoreJsonSync,
    "isKeystoreJson",
    ()=>isKeystoreJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ctr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/scrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/uuid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$_version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/_version.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const defaultPath = "m/44'/60'/0'/0/0";
function isKeystoreJson(json) {
    try {
        const data = JSON.parse(json);
        const version = data.version != null ? parseInt(data.version) : 0;
        if (version === 3) {
            return true;
        }
    } catch (error) {}
    return false;
}
function decrypt(data, key, ciphertext) {
    const cipher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.cipher:string");
    if (cipher === "aes-128-ctr") {
        const iv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.cipherparams.iv:data!");
        const aesCtr = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTR"](key, iv);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(aesCtr.decrypt(ciphertext));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "unsupported cipher", "UNSUPPORTED_OPERATION", {
        operation: "decrypt"
    });
}
function getAccount(data, _key) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_key);
    const ciphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.ciphertext:data!");
    const computedMAC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        key.slice(16, 32),
        ciphertext
    ]))).substring(2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(computedMAC === (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.mac:string!").toLowerCase(), "incorrect password", "password", "[ REDACTED ]");
    const privateKey = decrypt(data, key.slice(0, 16), ciphertext);
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeAddress"])(privateKey);
    if (data.address) {
        let check = data.address.toLowerCase();
        if (!check.startsWith("0x")) {
            check = "0x" + check;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(check) === address, "keystore address/privateKey mismatch", "address", data.address);
    }
    const account = {
        address,
        privateKey
    };
    // Version 0.1 x-ethers metadata must contain an encrypted mnemonic phrase
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "x-ethers.version:string");
    if (version === "0.1") {
        const mnemonicKey = key.slice(32, 64);
        const mnemonicCiphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "x-ethers.mnemonicCiphertext:data!");
        const mnemonicIv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "x-ethers.mnemonicCounter:data!");
        const mnemonicAesCtr = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTR"](mnemonicKey, mnemonicIv);
        account.mnemonic = {
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "x-ethers.path:string") || defaultPath,
            locale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "x-ethers.locale:string") || "en",
            entropy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(mnemonicAesCtr.decrypt(mnemonicCiphertext)))
        };
    }
    return account;
}
function getDecryptKdfParams(data) {
    const kdf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdf:string");
    if (kdf && typeof kdf === "string") {
        if (kdf.toLowerCase() === "scrypt") {
            const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.salt:data!");
            const N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.n:int!");
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.r:int!");
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.p:int!");
            // Make sure N is a power of 2
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(N > 0 && (N & N - 1) === 0, "invalid kdf.N", "kdf.N", N);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(r > 0 && p > 0, "invalid kdf", "kdf", kdf);
            const dkLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.dklen:int!");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(dkLen === 32, "invalid kdf.dklen", "kdf.dflen", dkLen);
            return {
                name: "scrypt",
                salt,
                N,
                r,
                p,
                dkLen: 64
            };
        } else if (kdf.toLowerCase() === "pbkdf2") {
            const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.salt:data!");
            const prf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.prf:string!");
            const algorithm = prf.split("-").pop();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(algorithm === "sha256" || algorithm === "sha512", "invalid kdf.pdf", "kdf.pdf", prf);
            const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.c:int!");
            const dkLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "crypto.kdfparams.dklen:int!");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(dkLen === 32, "invalid kdf.dklen", "kdf.dklen", dkLen);
            return {
                name: "pbkdf2",
                salt,
                count,
                dkLen,
                algorithm
            };
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported key-derivation function", "kdf", kdf);
}
function decryptKeystoreJsonSync(json, _password) {
    const data = JSON.parse(json);
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPassword"])(_password);
    const params = getDecryptKdfParams(data);
    if (params.name === "pbkdf2") {
        const { salt, count, dkLen, algorithm } = params;
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(password, salt, count, dkLen, algorithm);
        return getAccount(data, key);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", {
        params
    });
    const { salt, N, r, p, dkLen } = params;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptSync"])(password, salt, N, r, p, dkLen);
    return getAccount(data, key);
}
function stall(duration) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, duration);
    });
}
async function decryptKeystoreJson(json, _password, progress) {
    const data = JSON.parse(json);
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPassword"])(_password);
    const params = getDecryptKdfParams(data);
    if (params.name === "pbkdf2") {
        if (progress) {
            progress(0);
            await stall(0);
        }
        const { salt, count, dkLen, algorithm } = params;
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(password, salt, count, dkLen, algorithm);
        if (progress) {
            progress(1);
            await stall(0);
        }
        return getAccount(data, key);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", {
        params
    });
    const { salt, N, r, p, dkLen } = params;
    const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrypt"])(password, salt, N, r, p, dkLen, progress);
    return getAccount(data, key);
}
function getEncryptKdfParams(options) {
    // Check/generate the salt
    const salt = options.salt != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(options.salt, "options.salt") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(32);
    // Override the scrypt password-based key derivation function parameters
    let N = 1 << 17, r = 8, p = 1;
    if (options.scrypt) {
        if (options.scrypt.N) {
            N = options.scrypt.N;
        }
        if (options.scrypt.r) {
            r = options.scrypt.r;
        }
        if (options.scrypt.p) {
            p = options.scrypt.p;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof N === "number" && N > 0 && Number.isSafeInteger(N) && (BigInt(N) & BigInt(N - 1)) === BigInt(0), "invalid scrypt N parameter", "options.N", N);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof r === "number" && r > 0 && Number.isSafeInteger(r), "invalid scrypt r parameter", "options.r", r);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof p === "number" && p > 0 && Number.isSafeInteger(p), "invalid scrypt p parameter", "options.p", p);
    return {
        name: "scrypt",
        dkLen: 32,
        salt,
        N,
        r,
        p
    };
}
function _encryptKeystore(key, kdf, account, options) {
    const privateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(account.privateKey, "privateKey");
    // Override initialization vector
    const iv = options.iv != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(options.iv, "options.iv") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(16);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(iv.length === 16, "invalid options.iv length", "options.iv", options.iv);
    // Override the uuid
    const uuidRandom = options.uuid != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(options.uuid, "options.uuid") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(16);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(uuidRandom.length === 16, "invalid options.uuid length", "options.uuid", options.iv);
    // This will be used to encrypt the wallet (as per Web3 secret storage)
    // - 32 bytes   As normal for the Web3 secret storage (derivedKey, macPrefix)
    // - 32 bytes   AES key to encrypt mnemonic with (required here to be Ethers Wallet)
    const derivedKey = key.slice(0, 16);
    const macPrefix = key.slice(16, 32);
    // Encrypt the private key
    const aesCtr = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTR"](derivedKey, iv);
    const ciphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(aesCtr.encrypt(privateKey));
    // Compute the message authentication code, used to check the password
    const mac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        macPrefix,
        ciphertext
    ]));
    // See: https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition
    const data = {
        address: account.address.substring(2).toLowerCase(),
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidV4"])(uuidRandom),
        version: 3,
        Crypto: {
            cipher: "aes-128-ctr",
            cipherparams: {
                iv: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(iv).substring(2)
            },
            ciphertext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(ciphertext).substring(2),
            kdf: "scrypt",
            kdfparams: {
                salt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(kdf.salt).substring(2),
                n: kdf.N,
                dklen: 32,
                p: kdf.p,
                r: kdf.r
            },
            mac: mac.substring(2)
        }
    };
    // If we have a mnemonic, encrypt it into the JSON wallet
    if (account.mnemonic) {
        const client = options.client != null ? options.client : "ethers/".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$_version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]);
        const path = account.mnemonic.path || defaultPath;
        const locale = account.mnemonic.locale || "en";
        const mnemonicKey = key.slice(32, 64);
        const entropy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(account.mnemonic.entropy, "account.mnemonic.entropy");
        const mnemonicIv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(16);
        const mnemonicAesCtr = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTR"](mnemonicKey, mnemonicIv);
        const mnemonicCiphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(mnemonicAesCtr.encrypt(entropy));
        const now = new Date();
        const timestamp = now.getUTCFullYear() + "-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zpad"])(now.getUTCMonth() + 1, 2) + "-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zpad"])(now.getUTCDate(), 2) + "T" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zpad"])(now.getUTCHours(), 2) + "-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zpad"])(now.getUTCMinutes(), 2) + "-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zpad"])(now.getUTCSeconds(), 2) + ".0Z";
        const gethFilename = "UTC--" + timestamp + "--" + data.address;
        data["x-ethers"] = {
            client,
            gethFilename,
            path,
            locale,
            mnemonicCounter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(mnemonicIv).substring(2),
            mnemonicCiphertext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(mnemonicCiphertext).substring(2),
            version: "0.1"
        };
    }
    return JSON.stringify(data);
}
function encryptKeystoreJsonSync(account, password, options) {
    if (options == null) {
        options = {};
    }
    const passwordBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPassword"])(password);
    const kdf = getEncryptKdfParams(options);
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptSync"])(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64);
    return _encryptKeystore((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(key), kdf, account, options);
}
async function encryptKeystoreJson(account, password, options) {
    if (options == null) {
        options = {};
    }
    const passwordBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPassword"])(password);
    const kdf = getEncryptKdfParams(options);
    const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrypt"])(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64, options.progressCallback);
    return _encryptKeystore((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(key), kdf, account, options);
} //# sourceMappingURL=json-keystore.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/hdwallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  Explain HD Wallets..
 *
 *  @_subsection: api/wallet:HD Wallets  [hd-wallets]
 */ __turbopack_context__.s([
    "HDNodeVoidWallet",
    ()=>HDNodeVoidWallet,
    "HDNodeWallet",
    ()=>HDNodeWallet,
    "defaultPath",
    ()=>defaultPath,
    "getAccountPath",
    ()=>getAccountPath,
    "getIndexedAccountPath",
    ()=>getIndexedAccountPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_static_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/hmac.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/ripemd160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/signing-key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/sha2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-signer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/base58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/lang-en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$base$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/base-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/mnemonic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/json-keystore.js [app-client] (ecmascript)");
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
const defaultPath = "m/44'/60'/0'/0/0";
// "Bitcoin seed"
const MasterSecret = new Uint8Array([
    66,
    105,
    116,
    99,
    111,
    105,
    110,
    32,
    115,
    101,
    101,
    100
]);
const HardenedBit = 0x80000000;
const N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
const Nibbles = "0123456789abcdef";
function zpad(value, length) {
    let result = "";
    while(value){
        result = Nibbles[value % 16] + result;
        value = Math.trunc(value / 16);
    }
    while(result.length < length * 2){
        result = "0" + result;
    }
    return "0x" + result;
}
function encodeBase58Check(_value) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_value);
    const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(value)), 0, 4);
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        value,
        check
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase58"])(bytes);
}
const _guard = {};
function ser_I(index, chainCode, publicKey, privateKey) {
    const data = new Uint8Array(37);
    if (index & HardenedBit) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(privateKey != null, "cannot derive child of neutered node", "UNSUPPORTED_OPERATION", {
            operation: "deriveChild"
        });
        // Data = 0x00 || ser_256(k_par)
        data.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(privateKey), 1);
    } else {
        // Data = ser_p(point(k_par))
        data.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(publicKey));
    }
    // Data += ser_32(i)
    for(let i = 24; i >= 0; i -= 8){
        data[33 + (i >> 3)] = index >> 24 - i & 0xff;
    }
    const I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHmac"])("sha512", chainCode, data));
    return {
        IL: I.slice(0, 32),
        IR: I.slice(32)
    };
}
function derivePath(node, path) {
    const components = path.split("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(components.length > 0, "invalid path", "path", path);
    if (components[0] === "m") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(node.depth === 0, 'cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth '.concat(node.depth), "path", path);
        components.shift();
    }
    let result = node;
    for(let i = 0; i < components.length; i++){
        const component = components[i];
        if (component.match(/^[0-9]+'$/)) {
            const index = parseInt(component.substring(0, component.length - 1));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index < HardenedBit, "invalid path index", "path[".concat(i, "]"), component);
            result = result.deriveChild(HardenedBit + index);
        } else if (component.match(/^[0-9]+$/)) {
            const index = parseInt(component);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index < HardenedBit, "invalid path index", "path[".concat(i, "]"), component);
            result = result.deriveChild(index);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid path component", "path[".concat(i, "]"), component);
        }
    }
    return result;
}
var _account = /*#__PURE__*/ new WeakSet();
class HDNodeWallet extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$base$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseWallet"] {
    connect(provider) {
        return new HDNodeWallet(_guard, this.signingKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.mnemonic, provider);
    }
    /**
     *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
     *  %%password%%.
     *
     *  If %%progressCallback%% is specified, it will receive periodic
     *  updates as the encryption process progreses.
     */ async encrypt(password, progressCallback) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptKeystoreJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _account, account).call(this), password, {
            progressCallback
        });
    }
    /**
     *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
     *  %%password%%.
     *
     *  It is preferred to use the [async version](encrypt) instead,
     *  which allows a [[ProgressCallback]] to keep the user informed.
     *
     *  This method will block the event loop (freezing all UI) until
     *  it is complete, which may be a non-trivial duration.
     */ encryptSync(password) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptKeystoreJsonSync"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _account, account).call(this), password);
    }
    /**
     *  The extended key.
     *
     *  This key will begin with the prefix ``xpriv`` and can be used to
     *  reconstruct this HD Node to derive its children.
     */ get extendedKey() {
        // We only support the mainnet values for now, but if anyone needs
        // testnet values, let me know. I believe current sentiment is that
        // we should always use mainnet, and use BIP-44 to derive the network
        //   - Mainnet: public=0x0488B21E, private=0x0488ADE4
        //   - Testnet: public=0x043587CF, private=0x04358394
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", {
            operation: "extendedKey"
        });
        return encodeBase58Check((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
            "0x0488ADE4",
            zpad(this.depth, 1),
            this.parentFingerprint,
            zpad(this.index, 4),
            this.chainCode,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                "0x00",
                this.privateKey
            ])
        ]));
    }
    /**
     *  Returns true if this wallet has a path, providing a Type Guard
     *  that the path is non-null.
     */ hasPath() {
        return this.path != null;
    }
    /**
     *  Returns a neutered HD Node, which removes the private details
     *  of an HD Node.
     *
     *  A neutered node has no private key, but can be used to derive
     *  child addresses and other public data about the HD Node.
     */ neuter() {
        return new HDNodeVoidWallet(_guard, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.provider);
    }
    /**
     *  Return the child for %%index%%.
     */ deriveChild(_index) {
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(_index, "index");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index <= 0xffffffff, "invalid index", "index", index);
        // Base path
        let path = this.path;
        if (path) {
            path += "/" + (index & ~HardenedBit);
            if (index & HardenedBit) {
                path += "'";
            }
        }
        const { IR, IL } = ser_I(index, this.chainCode, this.publicKey, this.privateKey);
        const ki = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeHex"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])(IL) + BigInt(this.privateKey)) % N, 32));
        return new HDNodeWallet(_guard, ki, this.fingerprint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(IR), path, index, this.depth + 1, this.mnemonic, this.provider);
    }
    /**
     *  Return the HDNode for %%path%% from this node.
     */ derivePath(path) {
        return derivePath(this, path);
    }
    /**
     *  Creates a new HD Node from %%extendedKey%%.
     *
     *  If the %%extendedKey%% will either have a prefix or ``xpub`` or
     *  ``xpriv``, returning a neutered HD Node ([[HDNodeVoidWallet]])
     *  or full HD Node ([[HDNodeWallet) respectively.
     */ static fromExtendedKey(extendedKey) {
        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase58"])(extendedKey)); // @TODO: redact
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(bytes.length === 82 || encodeBase58Check(bytes.slice(0, 78)) === extendedKey, "invalid extended key", "extendedKey", "[ REDACTED ]");
        const depth = bytes[4];
        const parentFingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(bytes.slice(5, 9));
        const index = parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(bytes.slice(9, 13)).substring(2), 16);
        const chainCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(bytes.slice(13, 45));
        const key = bytes.slice(45, 78);
        switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(bytes.slice(0, 4))){
            // Public Key
            case "0x0488b21e":
            case "0x043587cf":
                {
                    const publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(key);
                    return new HDNodeVoidWallet(_guard, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeAddress"])(publicKey), publicKey, parentFingerprint, chainCode, null, index, depth, null);
                }
            // Private Key
            case "0x0488ade4":
            case "0x04358394 ":
                if (key[0] !== 0) {
                    break;
                }
                return new HDNodeWallet(_guard, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"](key.slice(1)), parentFingerprint, chainCode, null, index, depth, null, null);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid extended key prefix", "extendedKey", "[ REDACTED ]");
    }
    /**
     *  Creates a new random HDNode.
     */ static createRandom(password, path, wordlist) {
        if (password == null) {
            password = "";
        }
        if (path == null) {
            path = defaultPath;
        }
        if (wordlist == null) {
            wordlist = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"].wordlist();
        }
        const mnemonic = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mnemonic"].fromEntropy((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(16), password, wordlist);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HDNodeWallet, HDNodeWallet, fromSeed).call(HDNodeWallet, mnemonic.computeSeed(), mnemonic).derivePath(path);
    }
    /**
     *  Create an HD Node from %%mnemonic%%.
     */ static fromMnemonic(mnemonic, path) {
        if (!path) {
            path = defaultPath;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HDNodeWallet, HDNodeWallet, fromSeed).call(HDNodeWallet, mnemonic.computeSeed(), mnemonic).derivePath(path);
    }
    /**
     *  Creates an HD Node from a mnemonic %%phrase%%.
     */ static fromPhrase(phrase, password, path, wordlist) {
        if (password == null) {
            password = "";
        }
        if (path == null) {
            path = defaultPath;
        }
        if (wordlist == null) {
            wordlist = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"].wordlist();
        }
        const mnemonic = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mnemonic"].fromPhrase(phrase, password, wordlist);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HDNodeWallet, HDNodeWallet, fromSeed).call(HDNodeWallet, mnemonic.computeSeed(), mnemonic).derivePath(path);
    }
    /**
     *  Creates an HD Node from a %%seed%%.
     */ static fromSeed(seed) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HDNodeWallet, HDNodeWallet, fromSeed).call(HDNodeWallet, seed, null);
    }
    /**
     *  @private
     */ constructor(guard, signingKey, parentFingerprint, chainCode, path, index, depth, mnemonic, provider){
        super(signingKey, provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _account), /**
     *  The compressed public key.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "publicKey", void 0), /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "fingerprint", void 0), /**
     *  The parent fingerprint.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "parentFingerprint", void 0), /**
     *  The mnemonic used to create this HD Node, if available.
     *
     *  Sources such as extended keys do not encode the mnemonic, in
     *  which case this will be ``null``.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "mnemonic", void 0), /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "chainCode", void 0), /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provide full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  encode it.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "path", void 0), /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "index", void 0), /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "depth", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPrivate"])(guard, _guard, "HDNodeWallet");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            publicKey: signingKey.compressedPublicKey
        });
        const fingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(this.publicKey)), 0, 4);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            parentFingerprint,
            fingerprint,
            chainCode,
            path,
            index,
            depth
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            mnemonic
        });
    }
}
function account() {
    const account = {
        address: this.address,
        privateKey: this.privateKey
    };
    const m = this.mnemonic;
    if (this.path && m && m.wordlist.locale === "en" && m.password === "") {
        account.mnemonic = {
            path: this.path,
            locale: "en",
            entropy: m.entropy
        };
    }
    return account;
}
function fromSeed(_seed, mnemonic) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBytesLike"])(_seed), "invalid seed", "seed", "[REDACTED]");
    const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_seed, "seed");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(seed.length >= 16 && seed.length <= 64, "invalid seed", "seed", "[REDACTED]");
    const I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHmac"])("sha512", MasterSecret, seed));
    const signingKey = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(I.slice(0, 32)));
    return new HDNodeWallet(_guard, signingKey, "0x00000000", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(I.slice(32)), "m", 0, 0, mnemonic, null);
}
class HDNodeVoidWallet extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoidSigner"] {
    connect(provider) {
        return new HDNodeVoidWallet(_guard, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, provider);
    }
    /**
     *  The extended key.
     *
     *  This key will begin with the prefix ``xpub`` and can be used to
     *  reconstruct this neutered key to derive its children addresses.
     */ get extendedKey() {
        // We only support the mainnet values for now, but if anyone needs
        // testnet values, let me know. I believe current sentiment is that
        // we should always use mainnet, and use BIP-44 to derive the network
        //   - Mainnet: public=0x0488B21E, private=0x0488ADE4
        //   - Testnet: public=0x043587CF, private=0x04358394
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", {
            operation: "extendedKey"
        });
        return encodeBase58Check((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
            "0x0488B21E",
            zpad(this.depth, 1),
            this.parentFingerprint,
            zpad(this.index, 4),
            this.chainCode,
            this.publicKey
        ]));
    }
    /**
     *  Returns true if this wallet has a path, providing a Type Guard
     *  that the path is non-null.
     */ hasPath() {
        return this.path != null;
    }
    /**
     *  Return the child for %%index%%.
     */ deriveChild(_index) {
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(_index, "index");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index <= 0xffffffff, "invalid index", "index", index);
        // Base path
        let path = this.path;
        if (path) {
            path += "/" + (index & ~HardenedBit);
            if (index & HardenedBit) {
                path += "'";
            }
        }
        const { IR, IL } = ser_I(index, this.chainCode, this.publicKey, null);
        const Ki = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"].addPoints(IL, this.publicKey, true);
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeAddress"])(Ki);
        return new HDNodeVoidWallet(_guard, address, Ki, this.fingerprint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(IR), path, index, this.depth + 1, this.provider);
    }
    /**
     *  Return the signer for %%path%% from this node.
     */ derivePath(path) {
        return derivePath(this, path);
    }
    /**
     *  @private
     */ constructor(guard, address, publicKey, parentFingerprint, chainCode, path, index, depth, provider){
        super(address, provider), /**
     *  The compressed public key.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "publicKey", void 0), /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "fingerprint", void 0), /**
     *  The parent node fingerprint.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "parentFingerprint", void 0), /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "chainCode", void 0), /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provider full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  enocde it.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "path", void 0), /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "index", void 0), /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "depth", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPrivate"])(guard, _guard, "HDNodeVoidWallet");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            publicKey
        });
        const fingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(publicKey)), 0, 4);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            publicKey,
            fingerprint,
            parentFingerprint,
            chainCode,
            path,
            index,
            depth
        });
    }
}
function getAccountPath(_index) {
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(_index, "index");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index >= 0 && index < HardenedBit, "invalid account index", "index", index);
    return "m/44'/60'/".concat(index, "'/0/0");
}
function getIndexedAccountPath(_index) {
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(_index, "index");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(index >= 0 && index < HardenedBit, "invalid account index", "index", index);
    return "m/44'/60'/0'/0/".concat(index);
} //# sourceMappingURL=hdwallet.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/json-crowdsale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  @_subsection: api/wallet:JSON Wallets  [json-wallets]
 */ __turbopack_context__.s([
    "decryptCrowdsaleJson",
    ()=>decryptCrowdsaleJson,
    "isCrowdsaleJson",
    ()=>isCrowdsaleJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cbc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-cbc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$padding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/padding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
function isCrowdsaleJson(json) {
    try {
        const data = JSON.parse(json);
        if (data.encseed) {
            return true;
        }
    } catch (error) {}
    return false;
}
function decryptCrowdsaleJson(json, _password) {
    const data = JSON.parse(json);
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPassword"])(_password);
    // Ethereum Address
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "ethaddr:string!"));
    // Encrypted Seed
    const encseed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["looseArrayify"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spelunk"])(data, "encseed:string!"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(encseed && encseed.length % 16 === 0, "invalid encseed", "json", json);
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"])(password, password, 2000, 32, "sha256")).slice(0, 16);
    const iv = encseed.slice(0, 16);
    const encryptedSeed = encseed.slice(16);
    // Decrypt the seed
    const aesCbc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cbc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CBC"](key, iv);
    const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$padding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pkcs7Strip"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(aesCbc.decrypt(encryptedSeed)));
    // This wallet format is weird... Convert the binary encoded hex to a string.
    let seedHex = "";
    for(let i = 0; i < seed.length; i++){
        seedHex += String.fromCharCode(seed[i]);
    }
    return {
        address,
        privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"])(seedHex)
    };
} //# sourceMappingURL=json-crowdsale.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wallet/wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallet",
    ()=>Wallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_static_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/signing-key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$base$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/base-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/hdwallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/json-crowdsale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/json-keystore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/mnemonic.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function stall(duration) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, duration);
    });
}
class Wallet extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$base$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseWallet"] {
    connect(provider) {
        return new Wallet(this.signingKey, provider);
    }
    /**
     *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
     *  %%password%%.
     *
     *  If %%progressCallback%% is specified, it will receive periodic
     *  updates as the encryption process progreses.
     */ async encrypt(password, progressCallback) {
        const account = {
            address: this.address,
            privateKey: this.privateKey
        };
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptKeystoreJson"])(account, password, {
            progressCallback
        });
    }
    /**
     *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
     *  %%password%%.
     *
     *  It is preferred to use the [async version](encrypt) instead,
     *  which allows a [[ProgressCallback]] to keep the user informed.
     *
     *  This method will block the event loop (freezing all UI) until
     *  it is complete, which may be a non-trivial duration.
     */ encryptSync(password) {
        const account = {
            address: this.address,
            privateKey: this.privateKey
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptKeystoreJsonSync"])(account, password);
    }
    /**
     *  Creates (asynchronously) a **Wallet** by decrypting the %%json%%
     *  with %%password%%.
     *
     *  If %%progress%% is provided, it is called periodically during
     *  decryption so that any UI can be updated.
     */ static async fromEncryptedJson(json, password, progress) {
        let account = null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeystoreJson"])(json)) {
            account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptKeystoreJson"])(json, password, progress);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrowdsaleJson"])(json)) {
            if (progress) {
                progress(0);
                await stall(0);
            }
            account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptCrowdsaleJson"])(json, password);
            if (progress) {
                progress(1);
                await stall(0);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Wallet, Wallet, fromAccount).call(Wallet, account);
    }
    /**
     *  Creates a **Wallet** by decrypting the %%json%% with %%password%%.
     *
     *  The [[fromEncryptedJson]] method is preferred, as this method
     *  will lock up and freeze the UI during decryption, which may take
     *  some time.
     */ static fromEncryptedJsonSync(json, password) {
        let account = null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeystoreJson"])(json)) {
            account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptKeystoreJsonSync"])(json, password);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrowdsaleJson"])(json)) {
            account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptCrowdsaleJson"])(json, password);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid JSON wallet", "json", "[ REDACTED ]");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Wallet, Wallet, fromAccount).call(Wallet, account);
    }
    /**
     *  Creates a new random [[HDNodeWallet]] using the available
     *  [cryptographic random source](randomBytes).
     *
     *  If there is no crytographic random source, this will throw.
     */ static createRandom(provider) {
        const wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDNodeWallet"].createRandom();
        if (provider) {
            return wallet.connect(provider);
        }
        return wallet;
    }
    /**
     *  Creates a [[HDNodeWallet]] for %%phrase%%.
     */ static fromPhrase(phrase, provider) {
        const wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDNodeWallet"].fromPhrase(phrase);
        if (provider) {
            return wallet.connect(provider);
        }
        return wallet;
    }
    /**
     *  Create a new wallet for the private %%key%%, optionally connected
     *  to %%provider%%.
     */ constructor(key, provider){
        if (typeof key === "string" && !key.startsWith("0x")) {
            key = "0x" + key;
        }
        let signingKey = typeof key === "string" ? new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"](key) : key;
        super(signingKey, provider);
    }
} //# sourceMappingURL=wallet.js.map
function fromAccount(account) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(account, "invalid JSON wallet", "json", "[ REDACTED ]");
    if ("mnemonic" in account && account.mnemonic && account.mnemonic.locale === "en") {
        const mnemonic = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mnemonic"].fromEntropy(account.mnemonic.entropy);
        const wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDNodeWallet"].fromMnemonic(mnemonic, account.mnemonic.path);
        if (wallet.address === account.address && wallet.privateKey === account.privateKey) {
            return wallet;
        }
        console.log("WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key");
    }
    const wallet = new Wallet(account.privateKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(wallet.address === account.address, "address/privateKey mismatch", "json", "[ REDACTED ]");
    return wallet;
}
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/bit-reader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBits",
    ()=>decodeBits
]);
const Base64 = ")!@#$%^&*(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
function decodeBits(width, data) {
    const maxValue = (1 << width) - 1;
    const result = [];
    let accum = 0, bits = 0, flood = 0;
    for(let i = 0; i < data.length; i++){
        // Accumulate 6 bits of data
        accum = accum << 6 | Base64.indexOf(data[i]);
        bits += 6;
        // While we have enough for a word...
        while(bits >= width){
            // ...read the word
            const value = accum >> bits - width;
            accum &= (1 << bits - width) - 1;
            bits -= width;
            // A value of 0 indicates we exceeded maxValue, it
            // floods over into the next value
            if (value === 0) {
                flood += maxValue;
            } else {
                result.push(value + flood);
                flood = 0;
            }
        }
    }
    return result;
} //# sourceMappingURL=bit-reader.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/decode-owla.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeOwlA",
    ()=>decodeOwlA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$bit$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/bit-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$decode$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/decode-owl.js [app-client] (ecmascript)");
;
;
;
function decodeOwlA(data, accents) {
    let words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$decode$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeOwl"])(data).join(",");
    // Inject the accents
    accents.split(/,/g).forEach((accent)=>{
        const match = accent.match(/^([a-z]*)([0-9]+)([0-9])(.*)$/);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(match !== null, "internal error parsing accents", "accents", accents);
        let posOffset = 0;
        const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$bit$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBits"])(parseInt(match[3]), match[4]);
        const charCode = parseInt(match[2]);
        const regex = new RegExp("([".concat(match[1], "])"), "g");
        words = words.replace(regex, (all, letter)=>{
            const rem = --positions[posOffset];
            if (rem === 0) {
                letter = String.fromCharCode(letter.charCodeAt(0), charCode);
                posOffset++;
            }
            return letter;
        });
    });
    return words.split(",");
} //# sourceMappingURL=decode-owla.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist-owla.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WordlistOwlA",
    ()=>WordlistOwlA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist-owl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$decode$2d$owla$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/decode-owla.js [app-client] (ecmascript)");
;
;
;
;
;
var _accent = /*#__PURE__*/ new WeakMap();
class WordlistOwlA extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordlistOwl"] {
    /**
     *  The OWLA-encoded accent data.
     */ get _accent() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accent);
    }
    /**
     *  Decode all the words for the wordlist.
     */ _decodeWords() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$decode$2d$owla$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeOwlA"])(this._data, this._accent);
    }
    /**
     *  Creates a new Wordlist for %%locale%% using the OWLA %%data%%
     *  and %%accent%% data and validated against the %%checksum%%.
     */ constructor(locale, data, accent, checksum){
        super(locale, data, checksum), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accent, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _accent, accent);
    }
} //# sourceMappingURL=wordlist-owla.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlists-browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wordlists",
    ()=>wordlists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/lang-en.js [app-client] (ecmascript)");
;
const wordlists = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"].wordlist()
}; //# sourceMappingURL=wordlists-browser.js.map
}),
"[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbiCoder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiCoder"],
    "AbstractProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractProvider"],
    "AbstractSigner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSigner"],
    "AlchemyProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$alchemy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlchemyProvider"],
    "AnkrProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$ankr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnkrProvider"],
    "BaseContract",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseContract"],
    "BaseWallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$base$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseWallet"],
    "Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Block"],
    "BlockscoutProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$blockscout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockscoutProvider"],
    "BrowserProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"],
    "ChainstackProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$chainstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainstackProvider"],
    "CloudflareProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$cloudflare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudflareProvider"],
    "ConstructorFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstructorFragment"],
    "Contract",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"],
    "ContractEventPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractEventPayload"],
    "ContractFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFactory"],
    "ContractTransactionReceipt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractTransactionReceipt"],
    "ContractTransactionResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractTransactionResponse"],
    "ContractUnknownEventPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractUnknownEventPayload"],
    "EnsPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsPlugin"],
    "EnsResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ens$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsResolver"],
    "ErrorDescription",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ErrorDescription"],
    "ErrorFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorFragment"],
    "EtherSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherSymbol"],
    "EtherscanPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$etherscan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherscanPlugin"],
    "EtherscanProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$etherscan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtherscanProvider"],
    "EventFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventFragment"],
    "EventLog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventLog"],
    "EventPayload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventPayload"],
    "FallbackFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FallbackFragment"],
    "FallbackProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FallbackProvider"],
    "FeeData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeData"],
    "FeeDataNetworkPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeDataNetworkPlugin"],
    "FetchCancelSignal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchCancelSignal"],
    "FetchRequest",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"],
    "FetchResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchResponse"],
    "FetchUrlFeeDataNetworkPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUrlFeeDataNetworkPlugin"],
    "FixedNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fixednumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FixedNumber"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
    "FunctionFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionFragment"],
    "GasCostPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GasCostPlugin"],
    "HDNodeVoidWallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDNodeVoidWallet"],
    "HDNodeWallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDNodeWallet"],
    "Indexed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Indexed"],
    "InfuraProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$infura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfuraProvider"],
    "InfuraWebSocketProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$infura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfuraWebSocketProvider"],
    "Interface",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"],
    "IpcSocketProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$ipcsocket$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IpcSocketProvider"],
    "JsonRpcApiProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcApiProvider"],
    "JsonRpcProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"],
    "JsonRpcSigner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcSigner"],
    "LangEn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangEn"],
    "Log",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Log"],
    "LogDescription",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LogDescription"],
    "MaxInt256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxInt256"],
    "MaxUint256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxUint256"],
    "MessagePrefix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessagePrefix"],
    "MinInt256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MinInt256"],
    "Mnemonic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mnemonic"],
    "MulticoinProviderPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ens$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MulticoinProviderPlugin"],
    "N",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"],
    "NamedFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NamedFragment"],
    "Network",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"],
    "NetworkPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkPlugin"],
    "NonceManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$signer$2d$noncemanager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonceManager"],
    "ParamType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParamType"],
    "PocketProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$pocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PocketProvider"],
    "QuickNodeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$quicknode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickNodeProvider"],
    "Result",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$coders$2f$abstract$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"],
    "Signature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"],
    "SigningKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"],
    "SocketBlockSubscriber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocketBlockSubscriber"],
    "SocketEventSubscriber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocketEventSubscriber"],
    "SocketPendingSubscriber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocketPendingSubscriber"],
    "SocketProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocketProvider"],
    "SocketSubscriber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocketSubscriber"],
    "StructFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StructFragment"],
    "Transaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"],
    "TransactionDescription",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TransactionDescription"],
    "TransactionReceipt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionReceipt"],
    "TransactionResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionResponse"],
    "Typed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$typed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typed"],
    "TypedDataEncoder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedDataEncoder"],
    "UndecodedEventLog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndecodedEventLog"],
    "UnmanagedSubscriber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmanagedSubscriber"],
    "Utf8ErrorFuncs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Utf8ErrorFuncs"],
    "VoidSigner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoidSigner"],
    "Wallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet"],
    "WebSocketProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocketProvider"],
    "WeiPerEther",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeiPerEther"],
    "Wordlist",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wordlist"],
    "WordlistOwl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordlistOwl"],
    "WordlistOwlA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owla$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordlistOwlA"],
    "ZeroAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroAddress"],
    "ZeroHash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$hashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroHash"],
    "accessListify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"],
    "assert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"],
    "assertArgument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"],
    "assertArgumentCount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgumentCount"],
    "assertNormalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNormalize"],
    "assertPrivate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPrivate"],
    "authorizationify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorizationify"],
    "checkResultErrors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$coders$2f$abstract$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkResultErrors"],
    "computeAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeAddress"],
    "computeHmac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHmac"],
    "concat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"],
    "copyRequest",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyRequest"],
    "dataLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLength"],
    "dataSlice",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"],
    "decodeBase58",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase58"],
    "decodeBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base64$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"],
    "decodeBytes32String",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$bytes32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBytes32String"],
    "decodeRlp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRlp"],
    "decryptCrowdsaleJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptCrowdsaleJson"],
    "decryptKeystoreJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptKeystoreJson"],
    "decryptKeystoreJsonSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptKeystoreJsonSync"],
    "defaultPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPath"],
    "defineProperties",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"],
    "dnsEncode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dnsEncode"],
    "encodeBase58",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase58"],
    "encodeBase64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base64$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"],
    "encodeBytes32String",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$bytes32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBytes32String"],
    "encodeRlp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"],
    "encryptKeystoreJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptKeystoreJson"],
    "encryptKeystoreJsonSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptKeystoreJsonSync"],
    "ensNormalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensNormalize"],
    "formatEther",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEther"],
    "formatUnits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"],
    "fromTwos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromTwos"],
    "getAccountPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccountPath"],
    "getAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"],
    "getBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
    "getBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"],
    "getBytesCopy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCopy"],
    "getCreate2Address",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreate2Address"],
    "getCreateAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAddress"],
    "getDefaultProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$default$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultProvider"],
    "getIcapAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcapAddress"],
    "getIndexedAccountPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIndexedAccountPath"],
    "getNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    "getUint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUint"],
    "hashAuthorization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashAuthorization"],
    "hashMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"],
    "hexlify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"],
    "id",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"],
    "isAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"],
    "isAddressable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressable"],
    "isBytesLike",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBytesLike"],
    "isCallException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCallException"],
    "isCrowdsaleJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCrowdsaleJson"],
    "isError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"],
    "isHexString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"],
    "isKeystoreJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeystoreJson"],
    "isValidName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidName"],
    "keccak256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"],
    "lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lock"],
    "makeError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"],
    "mask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mask"],
    "namehash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"],
    "parseEther",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEther"],
    "parseUnits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUnits"],
    "pbkdf2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2"],
    "randomBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"],
    "recoverAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"],
    "resolveAddress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"],
    "resolveProperties",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"],
    "ripemd160",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"],
    "scrypt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrypt"],
    "scryptSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptSync"],
    "sha256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"],
    "sha512",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha512"],
    "showThrottleMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showThrottleMessage"],
    "solidityPacked",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solidityPacked"],
    "solidityPackedKeccak256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solidityPackedKeccak256"],
    "solidityPackedSha256",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solidityPackedSha256"],
    "stripZerosLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripZerosLeft"],
    "toBeArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"],
    "toBeHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeHex"],
    "toBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"],
    "toNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"],
    "toQuantity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"],
    "toTwos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTwos"],
    "toUtf8Bytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"],
    "toUtf8CodePoints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8CodePoints"],
    "toUtf8String",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8String"],
    "uuidV4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidV4"],
    "verifyAuthorization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAuthorization"],
    "verifyMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyMessage"],
    "verifyTypedData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTypedData"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$_version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"],
    "wordlists",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlists$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordlists"],
    "zeroPadBytes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadBytes"],
    "zeroPadValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$_version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/_version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$bytes32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/bytes32.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/abi-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$fragments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/fragments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$coders$2f$abstract$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/coders/abstract-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/interface.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$typed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/abi/typed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/contract-address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/constants/addresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/constants/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$hashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/constants/hashes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/constants/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/contract/factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/contract/wrappers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/hmac.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$ripemd160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/ripemd160.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/sha2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/scrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/crypto/signing-key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/message.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/solidity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/hash/typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$default$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/default-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-signer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$signer$2d$noncemanager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/signer-noncemanager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/abstract-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-fallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$alchemy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-alchemy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$ankr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-ankr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$blockscout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-blockscout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$chainstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-chainstack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$cloudflare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-cloudflare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$etherscan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-etherscan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$infura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-infura.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$pocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-pocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$quicknode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-quicknode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$ipcsocket$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-ipcsocket-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-websocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ens$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/ens-resolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/plugins-network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$community$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/community.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/transaction/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/base58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base64$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/base64-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fixednumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/fixednumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/units.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/rlp-decode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/rlp-encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/utils/uuid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$mnemonic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/mnemonic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$base$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/base-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$hdwallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/hdwallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$crowdsale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/json-crowdsale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wallet$2f$json$2d$keystore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wallet/json-keystore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$lang$2d$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/lang-en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist-owl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlist$2d$owla$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlist-owla.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$wordlists$2f$wordlists$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/wordlists/wordlists-browser.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ethers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const constants = {
    FHEVM_HANDLE_VERSION: 0,
    DEFAULT_DURATION_DAYS: 365,
    PUBLIC_DECRYPT_EIP712: {
        domain: {
            version: "1",
            name: "Decryption"
        },
        types: {
            PublicDecryptVerification: [
                {
                    name: "ctHandles",
                    type: "bytes32[]"
                },
                {
                    name: "decryptedResult",
                    type: "bytes"
                },
                {
                    name: "extraData",
                    type: "bytes"
                }
            ]
        }
    },
    INPUT_VERIFICATION_EIP712: {
        domain: {
            version: "1",
            name: "InputVerification"
        },
        types: {
            CiphertextVerification: [
                {
                    name: "ctHandles",
                    type: "bytes32[]"
                },
                {
                    name: "userAddress",
                    type: "address"
                },
                {
                    name: "contractAddress",
                    type: "address"
                },
                {
                    name: "contractChainId",
                    type: "uint256"
                },
                {
                    name: "extraData",
                    type: "bytes"
                }
            ]
        }
    },
    TEST_MNEMONIC: "test test test test test test test future home encrypt virtual machine",
    DEFAULT_KMS_SIGNERS_ACCOUNTS: {
        initialIndex: 0,
        path: "m/44'/60'/1'/0"
    },
    DEFAULT_COPROCESSOR_SIGNERS_ACCOUNTS: {
        initialIndex: 0,
        path: "m/44'/60'/2'/0"
    },
    DEFAULT_RELAYER_SIGNERS_ACCOUNTS: {
        initialIndex: 0,
        path: "m/44'/60'/3'/0"
    },
    SEPOLIA_ETHEREUM_TESTNET_CHAINID: 11155111,
    FHEVM_CORE_CONTRACTS_PACKAGE_NAME: "@fhevm/core-contracts",
    ZAMA_FHE_ORACLE_SOLIDITY_PACKAGE_NAME: "@zama-fhe/oracle-solidity"
};
Object.freeze(constants);
const __TURBOPACK__default__export__ = constants;
 //# sourceMappingURL=constants.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmError",
    ()=>FhevmError,
    "assertArrayOfUint8ArrayDeepEqual",
    ()=>assertArrayOfUint8ArrayDeepEqual,
    "assertFhevm",
    ()=>assertFhevm,
    "assertFhevmFailed",
    ()=>assertFhevmFailed,
    "assertIsArray",
    ()=>assertIsArray,
    "assertIsArrayProperty",
    ()=>assertIsArrayProperty,
    "assertIsObjectProperty",
    ()=>assertIsObjectProperty,
    "assertUint8ArrayDeepEqual",
    ()=>assertUint8ArrayDeepEqual,
    "isHardhatError",
    ()=>isHardhatError,
    "isHardhatProviderError",
    ()=>isHardhatProviderError
]);
function assertFhevm(check, message) {
    if (!check) {
        const title = "Fhevm assertion failed";
        message = message ? title + ": " + message : title;
        throw new FhevmError(message);
    }
}
function assertFhevmFailed(message) {
    const title = "Fhevm assertion failed";
    message = message ? title + ": " + message : title;
    throw new FhevmError(message);
}
function assertIsArray(value, valueName) {
    assertFhevm(Array.isArray(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not an array"));
}
function assertIsArrayProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new FhevmError("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (prop === undefined || prop === null) {
            throw new FhevmError("Invalid ".concat(typeName, ". Missing '").concat(key, "' property."));
        }
        if (!Array.isArray(prop)) {
            throw new FhevmError("Expected '".concat(key, "' in ").concat(typeName, " to be an array."));
        }
    }
}
function assertUint8ArrayDeepEqual(a1, a2) {
    assertFhevm(a1.length === a2.length, "Arrays do not have the same length");
    for(let i = 0; i < a1.length; ++i){
        assertFhevm(a1[i] === a2[i], "Arrays are different. a1[".concat(i, "]=").concat(a1[i], " !== a2[").concat(i, "]=").concat(a2[i]));
    }
}
function assertArrayOfUint8ArrayDeepEqual(a1, a2) {
    assertFhevm(a1.length === a2.length, "Arrays do not have the same length");
    for(let i = 0; i < a1.length; ++i){
        assertUint8ArrayDeepEqual(a1[i], a2[i]);
    }
}
function assertIsObjectProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new FhevmError("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (prop === undefined || prop === null) {
            throw new FhevmError("Invalid ".concat(typeName, ". Missing '").concat(key, "' property."));
        }
        if (typeof prop !== "object") {
            throw new FhevmError("Expected '".concat(key, "' in ").concat(typeName, " to be an object. Got ").concat(typeof prop, " instead."));
        }
    }
}
class FhevmError extends Error {
    constructor(message, options){
        super(message, options);
        //@ts-ignore
        Object.defineProperty(this, "__isFhevmError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.__isFhevmError = true;
    }
}
function isHardhatProviderError(other) {
    if (other === undefined || other === null) {
        return false;
    }
    if (!(other instanceof Error)) {
        return false;
    }
    if (!("code" in other)) {
        return false;
    }
    if (!("_isProviderError" in other)) {
        return false;
    }
    return other._isProviderError === true;
}
function isHardhatError(other) {
    if (other === undefined || other === null) {
        return false;
    }
    if (!(other instanceof Error)) {
        return false;
    }
    if (!("number" in other)) {
        return false;
    }
    if (!("_isHardhatError" in other)) {
        return false;
    }
    return other._isHardhatError === true;
} //# sourceMappingURL=error.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsString",
    ()=>assertIsString,
    "assertIsStringArray",
    ()=>assertIsStringArray,
    "assertIsStringArrayProperty",
    ()=>assertIsStringArrayProperty,
    "assertIsStringProperty",
    ()=>assertIsStringProperty,
    "ensure0x",
    ()=>ensure0x,
    "ensurePrefix",
    ()=>ensurePrefix,
    "ensureSuffix",
    ()=>ensureSuffix,
    "remove0x",
    ()=>remove0x,
    "removePrefix",
    ()=>removePrefix,
    "removeSuffix",
    ()=>removeSuffix,
    "toLowerCaseSet",
    ()=>toLowerCaseSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
function removePrefix(s, prefix) {
    return s.startsWith(prefix) ? s.substring(prefix.length) : s;
}
function removeSuffix(s, suffix) {
    return s.endsWith(suffix) ? s.substring(0, s.length - suffix.length) : s;
}
function ensure0x(s) {
    return !s.startsWith("0x") ? "0x".concat(s) : s;
}
function remove0x(s) {
    return s.startsWith("0x") ? s.substring(2) : s;
}
function ensurePrefix(s, prefix) {
    return !s.startsWith(prefix) ? prefix + s : s;
}
function ensureSuffix(s, suffix) {
    return !s.endsWith(suffix) ? s + suffix : s;
}
function assertIsString(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "string", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type string, got ").concat(typeof value, " instead"));
}
function assertIsStringArray(value, valueName) {
    if (!Array.isArray(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not an array of string"));
    }
    for(let i = 0; i < value.length; ++i){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value[i] === "string", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", "[").concat(i, "] is not of type string, got ").concat(typeof value[i], " instead"));
    }
}
function assertIsStringProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (typeof prop !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expected '".concat(key, "' in ").concat(typeName, " to be a string, but got ").concat(typeof prop, " instead."));
        }
    }
}
function assertIsStringArrayProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        assertIsStringArray(prop, " ".concat(typeName, ".").concat(key));
    }
}
function toLowerCaseSet(array) {
    const s = new Set();
    for(let i = 0; i < array.length; ++i){
        const item = array[i];
        if (item) {
            s.add(item.toLowerCase());
        }
    }
    return s;
} //# sourceMappingURL=string.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsEIP712Domain",
    ()=>assertIsEIP712Domain,
    "isThresholdReached",
    ()=>isThresholdReached,
    "multiSignEIP712",
    ()=>multiSignEIP712,
    "signEIP712",
    ()=>signEIP712
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
async function signEIP712(signer, domain, types, message) {
    const signature = await signer.signTypedData(domain, types, message);
    const sigRSV = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Signature.from(signature);
    const v = 27 + sigRSV.yParity;
    const r = sigRSV.r;
    const s = sigRSV.s;
    const result = r + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(s, "0x") + v.toString(16);
    return result;
}
async function multiSignEIP712(signers, domain, types, message) {
    const signatures = [];
    for(let idx = 0; idx < signers.length; idx++){
        const signer = signers[idx];
        const signature = await signEIP712(signer, domain, types, message);
        signatures.push(signature);
    }
    return signatures;
}
function assertIsEIP712Domain(eip712Domain, name, expectedDomain) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(Array.isArray(eip712Domain), "Invalid ".concat(name, " EIP712 domain"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain.length >= 5, "Invalid ".concat(name, " EIP712 domain"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[1] === expectedDomain.name, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[1], ", expected ").concat(expectedDomain.name));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[2] === expectedDomain.version, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[2], ", expected ").concat(expectedDomain.version));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[3] === expectedDomain.chainId, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[3], ", expected ").concat(expectedDomain.chainId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain[4] === expectedDomain.verifyingContract, "Invalid ".concat(name, " EIP712 domain name. Got ").concat(eip712Domain[4], ", expected ").concat(expectedDomain.verifyingContract));
}
function isThresholdReached(signersAddress, recoveredAddresses, threshold, signerType) {
    const addressMap = new Map();
    recoveredAddresses.forEach((address, index)=>{
        if (addressMap.has(address)) {
            const duplicateValue = address;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Duplicate ".concat(signerType, " signer address found: ").concat(duplicateValue, " appears multiple times in recovered addresses"));
        }
        addressMap.set(address, index);
    });
    for (const address of recoveredAddresses){
        if (!signersAddress.includes(address)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid address found: ".concat(address, " is not in the list of ").concat(signerType, " signers"));
        }
    }
    return recoveredAddresses.length >= threshold;
} //# sourceMappingURL=eip712.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/decryptUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copy/Paste from https://github.com/zama-ai/relayer-sdk/blob/main/src/relayer/decryptUtils.ts#L18
*/ // Duplicated code from relayer-sdk/src/relayer/userDecrypt.ts
__turbopack_context__.s([
    "checkEncryptedBits",
    ()=>checkEncryptedBits
]);
const NumEncryptedBits = {
    0: 2,
    2: 8,
    3: 16,
    4: 32,
    5: 64,
    6: 128,
    7: 160,
    8: 256
};
function checkEncryptedBits(handles) {
    let total = 0;
    for (const handle of handles){
        if (handle.length !== 66) {
            throw new Error("Handle ".concat(handle, " is not of valid length"));
        }
        const hexPair = handle.slice(-4, -2).toLowerCase();
        const typeDiscriminant = parseInt(hexPair, 16);
        if (!(typeDiscriminant in NumEncryptedBits)) {
            throw new Error("Handle ".concat(handle, " is not of valid type"));
        }
        total += NumEncryptedBits[typeDiscriminant];
        // enforce 2048‑bit limit
        if (total > 2048) {
            throw new Error("Cannot decrypt more than 2048 encrypted bits in a single request");
        }
    }
    return total;
} //# sourceMappingURL=decryptUtils.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/publicDecrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copy/Paste from https://github.com/zama-ai/relayer-sdk/blob/main/src/relayer/publicDecrypt.ts
*/ __turbopack_context__.s([
    "deserializeDecryptedResult",
    ()=>deserializeDecryptedResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
// Duplicated code from relayer-sdk/src/relayer/publicDecrypt.ts
const CiphertextType = {
    0: "bool",
    2: "uint256",
    3: "uint256",
    4: "uint256",
    5: "uint256",
    6: "uint256",
    7: "address",
    8: "uint256"
};
function deserializeDecryptedResult(handles, decryptedResult) {
    let typesList = [];
    for (const handle of handles){
        const hexPair = handle.slice(-4, -2).toLowerCase();
        const typeDiscriminant = parseInt(hexPair, 16);
        typesList.push(typeDiscriminant);
    }
    const restoredEncoded = "0x" + "00".repeat(32) + // dummy requestID (ignored)
    decryptedResult.slice(2) + "00".repeat(32); // dummy empty bytes[] length (ignored)
    const abiTypes = typesList.map((t)=>{
        const abiType = CiphertextType[t]; // all types are valid because this was supposedly checked already inside the `checkEncryptedBits` function
        return abiType;
    });
    const coder = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder();
    const decoded = coder.decode([
        "uint256",
        ...abiTypes,
        "bytes[]"
    ], restoredEncoded);
    // strip dummy first/last element
    const rawValues = decoded.slice(1, 1 + typesList.length);
    let results = {};
    handles.forEach((handle, idx)=>results[handle] = rawValues[idx]);
    return results;
} //# sourceMappingURL=publicDecrypt.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/userDecrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    This file contains duplicated code from relayer-sdk/src/relayer/userDecrypt.ts
*/ __turbopack_context__.s([
    "buildUserDecryptedResult",
    ()=>buildUserDecryptedResult,
    "checkDeadlineValidity",
    ()=>checkDeadlineValidity,
    "checkMaxContractAddresses",
    ()=>checkMaxContractAddresses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
;
const MAX_USER_DECRYPT_CONTRACT_ADDRESSES = 10;
const MAX_USER_DECRYPT_DURATION_DAYS = 365n;
function checkDeadlineValidity(startTimestamp, durationDays) {
    if (durationDays === BigInt(0)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("durationDays is null");
    }
    if (durationDays > MAX_USER_DECRYPT_DURATION_DAYS) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("durationDays is above max duration of ".concat(MAX_USER_DECRYPT_DURATION_DAYS));
    }
    const currentTimestamp = BigInt(Math.floor(Date.now() / 1000));
    if (startTimestamp > currentTimestamp) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("startTimestamp is set in the future");
    }
    const durationInSeconds = durationDays * BigInt(86400);
    if (startTimestamp + durationInSeconds < currentTimestamp) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("User decrypt request has expired");
    }
}
// Duplicated code from relayer-sdk/src/relayer/userDecrypt.ts
function formatAccordingToType(decryptedBigInt, type) {
    if (type === 0) {
        // ebool
        return decryptedBigInt === BigInt(1);
    } else if (type === 7) {
        // eaddress
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress("0x" + decryptedBigInt.toString(16).padStart(40, "0"));
    } else if (type === 9) {
        // ebytes64
        return "0x" + decryptedBigInt.toString(16).padStart(128, "0");
    } else if (type === 10) {
        // ebytes128
        return "0x" + decryptedBigInt.toString(16).padStart(256, "0");
    } else if (type === 11) {
        // ebytes256
        return "0x" + decryptedBigInt.toString(16).padStart(512, "0");
    } // euintXXX
    return decryptedBigInt;
}
function buildUserDecryptedResult(handles, listBigIntDecryptions) {
    let typesList = [];
    for (const handle of handles){
        const hexPair = handle.slice(-4, -2).toLowerCase();
        const typeDiscriminant = parseInt(hexPair, 16);
        typesList.push(typeDiscriminant);
    }
    let results = {};
    handles.forEach((handle, idx)=>results[handle] = formatAccordingToType(listBigIntDecryptions[idx], typesList[idx]));
    return results;
}
function checkMaxContractAddresses(contractAddresses) {
    const contractAddressesLength = contractAddresses.length;
    if (contractAddressesLength === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("contractAddresses is empty");
    }
    if (contractAddressesLength > MAX_USER_DECRYPT_CONTRACT_ADDRESSES) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("contractAddresses max length of ".concat(MAX_USER_DECRYPT_CONTRACT_ADDRESSES, " exceeded"));
    }
} //# sourceMappingURL=userDecrypt.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/sdk/keypair.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEIP712",
    ()=>createEIP712,
    "generateKeypair",
    ()=>generateKeypair
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
// Follows relayer-sdk keys lengths
const ML_KEM_CT_PK_LENGTH = 1568;
const ML_KEM_SK_LENGTH = 3168;
const PUBLIC_KEY_LENGTH = (ML_KEM_CT_PK_LENGTH + 8) * 2;
const PRIVATE_KEY_LENGTH = (ML_KEM_SK_LENGTH + 8) * 2;
function _verifyKeypair(keyPair) {
    keyPair.publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(keyPair.publicKey);
    keyPair.privateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(keyPair.privateKey);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString("0x" + keyPair.publicKey, PUBLIC_KEY_LENGTH)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid key pair's publicKey. Call FhevmInstance.generateKeyPair() to generate a valid FHEVM key pair.");
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString("0x" + keyPair.privateKey, PRIVATE_KEY_LENGTH)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid key pair's publicKey. Call FhevmInstance.generateKeyPair() to generate a valid FHEVM key pair.");
    }
}
function generateKeypair() {
    const wallet = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Wallet.createRandom();
    const walletPublicKeyNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(wallet.publicKey);
    const walletPrivateKeyNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(wallet.privateKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(walletPublicKeyNoPrefix.length === walletPrivateKeyNoPrefix.length + 2);
    const publicKeyPrefixLen = 2 * PUBLIC_KEY_LENGTH - walletPublicKeyNoPrefix.length;
    const privateKeyPrefixLen = 2 * PRIVATE_KEY_LENGTH - (2 + walletPrivateKeyNoPrefix.length);
    let n = Math.floor(publicKeyPrefixLen / 8);
    const publicKeyPrefix = "deadbeef".repeat(n) + "0".repeat(publicKeyPrefixLen - n * 8);
    n = Math.floor(privateKeyPrefixLen / 8);
    const privateKeyPrefix = "deadbeef".repeat(n) + "0".repeat(privateKeyPrefixLen - n * 8);
    const publicKey = "0x" + publicKeyPrefix + walletPublicKeyNoPrefix;
    const privateKey = "0x" + privateKeyPrefix + "00" + walletPrivateKeyNoPrefix;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(publicKey.length === 2 + 2 * PUBLIC_KEY_LENGTH);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(privateKey.length === 2 + 2 * PRIVATE_KEY_LENGTH);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(walletPublicKeyNoPrefix.length === 66);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(walletPrivateKeyNoPrefix.length === 64);
    const keypair = {
        publicKey,
        privateKey
    };
    _verifyKeypair(keypair);
    return keypair;
}
const createEIP712 = (verifyingContract, contractsChainId)=>(publicKey, contractAddresses, startTimestamp, durationDays, delegatedAccount)=>{
        const extraData = "0x00";
        if (delegatedAccount && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(delegatedAccount)) throw new Error("Invalid delegated account.");
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(verifyingContract)) {
            throw new Error("Invalid verifying contract address.");
        }
        if (!contractAddresses.every((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(c))) {
            throw new Error("Invalid contract address.");
        }
        // Format the public key based on its type
        const formattedPublicKey = typeof publicKey === "string" ? publicKey.startsWith("0x") ? publicKey : "0x".concat(publicKey) : publicKey;
        // Convert timestamps to strings if they're bigints
        const formattedStartTimestamp = typeof startTimestamp === "number" ? startTimestamp.toString() : startTimestamp;
        const formattedDurationDays = typeof durationDays === "number" ? durationDays.toString() : durationDays;
        const EIP712Domain = [
            {
                name: "name",
                type: "string"
            },
            {
                name: "version",
                type: "string"
            },
            {
                name: "chainId",
                type: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address"
            }
        ];
        const domain = {
            name: "Decryption",
            version: "1",
            chainId: contractsChainId,
            verifyingContract
        };
        if (delegatedAccount) {
            return {
                types: {
                    EIP712Domain,
                    DelegatedUserDecryptRequestVerification: [
                        {
                            name: "publicKey",
                            type: "bytes"
                        },
                        {
                            name: "contractAddresses",
                            type: "address[]"
                        },
                        {
                            name: "contractsChainId",
                            type: "uint256"
                        },
                        {
                            name: "startTimestamp",
                            type: "uint256"
                        },
                        {
                            name: "durationDays",
                            type: "uint256"
                        },
                        {
                            name: "extraData",
                            type: "bytes"
                        },
                        {
                            name: "delegatedAccount",
                            type: "address"
                        }
                    ]
                },
                primaryType: "DelegatedUserDecryptRequestVerification",
                domain,
                message: {
                    publicKey: formattedPublicKey,
                    contractAddresses,
                    contractsChainId,
                    startTimestamp: formattedStartTimestamp,
                    durationDays: formattedDurationDays,
                    extraData,
                    delegatedAccount: delegatedAccount
                }
            };
        }
        return {
            types: {
                EIP712Domain,
                UserDecryptRequestVerification: [
                    {
                        name: "publicKey",
                        type: "bytes"
                    },
                    {
                        name: "contractAddresses",
                        type: "address[]"
                    },
                    {
                        name: "contractsChainId",
                        type: "uint256"
                    },
                    {
                        name: "startTimestamp",
                        type: "uint256"
                    },
                    {
                        name: "durationDays",
                        type: "uint256"
                    },
                    {
                        name: "extraData",
                        type: "bytes"
                    }
                ]
            },
            primaryType: "UserDecryptRequestVerification",
            domain,
            message: {
                publicKey: formattedPublicKey,
                contractAddresses,
                contractsChainId,
                startTimestamp: formattedStartTimestamp,
                durationDays: formattedDurationDays,
                extraData
            }
        };
    }; //# sourceMappingURL=keypair.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addressToBytes",
    ()=>addressToBytes,
    "addressesInAddressList",
    ()=>addressesInAddressList,
    "assertIsAddress",
    ()=>assertIsAddress,
    "assertIsAddressArray",
    ()=>assertIsAddressArray,
    "assertIsAddressProperty",
    ()=>assertIsAddressProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function assertIsAddress(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(value, valueName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", ": '").concat(value, "' is not a valid address"));
}
function assertIsAddressArray(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(value, valueName);
    for(let i = 0; i < value.length; ++i){
        assertIsAddress(value[i], valueName ? "".concat(valueName, "[").concat(i, "]") : undefined);
    }
}
function assertIsAddressProperty(value, propertyNames, typeName) {
    if (typeof value !== "object" || value === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(typeName, " must be a non-null object."));
    }
    for (const key of propertyNames){
        const prop = value[key];
        if (typeof prop !== "string") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expected '".concat(key, "' in ").concat(typeName, " to be a valid address, but got ").concat(typeof prop, " instead."));
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(prop)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Expected '".concat(key, "' in ").concat(typeName, " to be a valid address, but got ").concat(typeof prop, " instead."));
        }
    }
}
function addressToBytes(value, valueName) {
    assertIsAddress(value, valueName);
    // Debug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(value, 20).toLocaleLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, 20));
    // Should use this line of code instead (faster)
    //return EthersT.getBytes(EthersT.zeroPadValue(value, 20));
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, 20));
}
function addressesInAddressList(addresses, addressList) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toLowerCaseSet"])(addressList);
    for(let i = 0; i < addresses.length; ++i){
        if (!s.has(addresses[i].toLowerCase())) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=address.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsHexString",
    ()=>assertIsHexString,
    "fromHexString",
    ()=>fromHexString,
    "numberToEvenHexString",
    ()=>numberToEvenHexString,
    "numberToHexNoPrefix",
    ()=>numberToHexNoPrefix,
    "toHexString",
    ()=>toHexString,
    "uint8ArrayToHexNoPrefix",
    ()=>uint8ArrayToHexNoPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function uint8ArrayToHexNoPrefix(uint8Array) {
    //return EthersT.hexlify(uint8Array).slice(2);
    return Array.from(uint8Array).map((byte)=>byte.toString(16).padStart(2, "0")).join("");
}
function numberToHexNoPrefix(num) {
    const hex = num.toString(16);
    return hex.length % 2 ? "0" + hex : hex;
}
function numberToEvenHexString(num) {
    if (typeof num !== "number" || num < 0) {
        throw new Error("Input should be a non-negative number.");
    }
    let hexString = num.toString(16);
    if (hexString.length % 2 !== 0) {
        hexString = "0" + hexString;
    }
    return hexString;
}
const fromHexString = (hexString)=>{
    const arr = hexString.replace(/^(0x)/, "").match(/.{1,2}/g);
    if (!arr) return new Uint8Array();
    return Uint8Array.from(arr.map((byte)=>parseInt(byte, 16)));
};
const toHexString = (bytes)=>"0x".concat(bytes.reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), ""));
function assertIsHexString(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(value, valueName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", ": ").concat(value, " is not a valid hex string."));
} //# sourceMappingURL=hex.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_UINT128",
    ()=>MAX_UINT128,
    "MAX_UINT16",
    ()=>MAX_UINT16,
    "MAX_UINT160",
    ()=>MAX_UINT160,
    "MAX_UINT256",
    ()=>MAX_UINT256,
    "MAX_UINT32",
    ()=>MAX_UINT32,
    "MAX_UINT512",
    ()=>MAX_UINT512,
    "MAX_UINT64",
    ()=>MAX_UINT64,
    "MAX_UINT8",
    ()=>MAX_UINT8,
    "assertIsBigUint1024",
    ()=>assertIsBigUint1024,
    "assertIsBigUint128",
    ()=>assertIsBigUint128,
    "assertIsBigUint16",
    ()=>assertIsBigUint16,
    "assertIsBigUint160",
    ()=>assertIsBigUint160,
    "assertIsBigUint2048",
    ()=>assertIsBigUint2048,
    "assertIsBigUint256",
    ()=>assertIsBigUint256,
    "assertIsBigUint32",
    ()=>assertIsBigUint32,
    "assertIsBigUint512",
    ()=>assertIsBigUint512,
    "assertIsBigUint64",
    ()=>assertIsBigUint64,
    "assertIsBigUint8",
    ()=>assertIsBigUint8,
    "assertIsBoolean",
    ()=>assertIsBoolean,
    "assertIsNumber",
    ()=>assertIsNumber,
    "assertIsUintNumber",
    ()=>assertIsUintNumber,
    "bitwiseNotUIntBits",
    ()=>bitwiseNotUIntBits,
    "boolToBigInt",
    ()=>boolToBigInt,
    "getMaxBigInt",
    ()=>getMaxBigInt,
    "getRandomBigInt",
    ()=>getRandomBigInt,
    "isEvenUInt",
    ()=>isEvenUInt,
    "isInt",
    ()=>isInt,
    "isUInt",
    ()=>isUInt,
    "log2BigInt",
    ()=>log2BigInt,
    "toUIntNumber",
    ()=>toUIntNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
;
;
const MAX_UINT8 = 0xffn;
const MAX_UINT16 = 0xffffn;
const MAX_UINT32 = 0xffffffffn;
const MAX_UINT64 = 0xffffffffffffffffn;
const MAX_UINT128 = 0xffffffffffffffffffffffffffffffffn;
const MAX_UINT160 = 0xffffffffffffffffffffffffffffffffffffffffn;
const MAX_UINT256 = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
const MAX_UINT512 = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
function toUIntNumber(value, name) {
    try {
        const bn = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getUint(value, name);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getNumber(bn);
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("".concat(name, " is not a positive integer"));
    }
}
function isInt(value) {
    if (typeof value === "bigint") {
        return true;
    }
    if (typeof value === "number") {
        return Number.isInteger(value);
    }
    return false;
}
function isUInt(value) {
    if (!isInt(value)) {
        return false;
    }
    return value >= 0;
}
function isEvenUInt(value) {
    if (!isUInt(value)) {
        return false;
    }
    return typeof value === "bigint" ? value % 2n === 0n : value % 2 === 0;
}
function boolToBigInt(value) {
    if (value === null || value === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Missing value");
    }
    let zeroOrOne = 0n;
    // Must be 0 or 1
    if (typeof value === "bigint") {
        if (value !== 1n && value !== 0n) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The value must be 1 or 0.");
        }
        zeroOrOne = value;
    } else if (typeof value === "number") {
        if (value !== 1 && value !== 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The value must be 1 or 0.");
        }
        zeroOrOne = value === 0 ? 0n : 1n;
    } else if (typeof value === "boolean") {
        zeroOrOne = value === true ? 1n : 0n;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The value must be a boolean, a number or a bigint.");
    }
    return zeroOrOne;
}
function bitwiseNotUIntBits(value, numBits) {
    if (typeof value !== "bigint") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The input value must be a BigInt.");
    }
    if (!isUInt(numBits)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("The numBits parameter must be a positive integer.");
    }
    // Create the mask with numBits bits set to 1
    const BIT_MASK = (BigInt(1) << BigInt(numBits)) - BigInt(1);
    return ~value & BIT_MASK;
}
function getMaxBigInt(bitLength) {
    if (!isUInt(bitLength)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid bitLength argument (".concat(bitLength, "), expecting a positive integer value."));
    }
    return (1n << BigInt(bitLength)) - 1n;
}
function log2BigInt(x) {
    const n = x.toString(2).length - 1;
    return x <= 0n ? 0n : BigInt(n);
}
function getRandomBigInt(numBits) {
    if (numBits <= 0) {
        throw new TypeError("Number of bits must be greater than 0");
    }
    const numBytes = Math.ceil(numBits / 8);
    const randomBytes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].randomBytes(numBytes);
    let randomBigInt = BigInt(0);
    for(let i = 0; i < numBytes; i++){
        randomBigInt = randomBigInt << BigInt(8) | BigInt(randomBytes[i]);
    }
    const mask = (BigInt(1) << BigInt(numBits)) - BigInt(1);
    randomBigInt = randomBigInt & mask;
    return randomBigInt;
}
function assertIsUintNumber(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "number", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type number, got ").concat(typeof value, " instead"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(isUInt(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not an uint, got ").concat(typeof value, " instead"));
}
function assertIsBigUint8(value, valueName) {
    _assertIsBigUint(value, 8, MAX_UINT8, valueName);
}
function assertIsBigUint16(value, valueName) {
    _assertIsBigUint(value, 16, MAX_UINT16, valueName);
}
function assertIsBigUint32(value, valueName) {
    _assertIsBigUint(value, 32, MAX_UINT32, valueName);
}
function assertIsBigUint64(value, valueName) {
    _assertIsBigUint(value, 64, MAX_UINT64, valueName);
}
function assertIsBigUint128(value, valueName) {
    _assertIsBigUint(value, 128, MAX_UINT128, valueName);
}
function assertIsBigUint160(value, valueName) {
    _assertIsBigUint(value, 128, MAX_UINT160, valueName);
}
function assertIsBigUint256(value, valueName) {
    _assertIsBigUint(value, 256, MAX_UINT256, valueName);
}
function assertIsBigUint512(value, valueName) {
    _assertIsBigUint(value, 512, MAX_UINT512, valueName);
}
function assertIsBigUint1024(value, valueName) {
    _assertIsBigUint(value, 1024, getMaxBigInt(1024), valueName);
}
function assertIsBigUint2048(value, valueName) {
    _assertIsBigUint(value, 2048, getMaxBigInt(2048), valueName);
}
function _assertIsBigUint(value, bitLen, max, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "bigint", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type bigint, got ").concat(typeof value, " instead"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value >= 0 && value <= max, "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is larger than uint").concat(bitLen, " maximum value, got ").concat(value, " > ").concat(max));
}
function assertIsBoolean(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "boolean", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type boolean, got ").concat(typeof value, " instead"));
}
function assertIsNumber(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof value === "number", "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type number, got ").concat(typeof value, " instead"));
} //# sourceMappingURL=math.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsBytes",
    ()=>assertIsBytes,
    "assertIsBytes1",
    ()=>assertIsBytes1,
    "assertIsBytes20",
    ()=>assertIsBytes20,
    "assertIsBytes32",
    ()=>assertIsBytes32,
    "assertIsBytes32String",
    ()=>assertIsBytes32String,
    "assertIsBytes8",
    ()=>assertIsBytes8,
    "assertIsBytesLike",
    ()=>assertIsBytesLike,
    "assertIsBytesString",
    ()=>assertIsBytesString,
    "assertIsUint8Array",
    ()=>assertIsUint8Array,
    "bytesToBigInt",
    ()=>bytesToBigInt,
    "concatBytes",
    ()=>concatBytes,
    "uintToBytes",
    ()=>uintToBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function assertIsUint8Array(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value instanceof Uint8Array, "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not of type Uint8Array"));
}
function assertIsBytesLike(value, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " is not bytes-like (expected a hex string or Uint8Array)"));
}
function assertIsBytes32String(value, valueName) {
    assertIsBytesString(value, 32, valueName);
}
function assertIsBytesString(value, width, valueName) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(value, valueName);
    if (width === undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes string"));
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, width), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes").concat(width, " string"));
    }
}
function assertIsBytes1(value, valueName) {
    assertIsBytes(value, 1, valueName);
}
function assertIsBytes8(value, valueName) {
    assertIsBytes(value, 8, valueName);
}
function assertIsBytes20(value, valueName) {
    assertIsBytes(value, 20, valueName);
}
function assertIsBytes32(value, valueName) {
    assertIsBytes(value, 32, valueName);
}
function assertIsBytes(value, width, valueName) {
    assertIsUint8Array(value, valueName);
    if (width === undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isBytesLike(value), "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes string"));
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(value.length === width, "".concat(valueName !== null && valueName !== void 0 ? valueName : "value", " : ").concat(value, " is not a valid bytes").concat(width, " Uint8Array. Expecting length ").concat(width, ", got ").concat(value.length, " instead"));
    }
}
function bytesToBigInt(byteArray) {
    if (!byteArray || byteArray.length === 0) {
        return BigInt(0);
    }
    /*
    
      Equivalent to:
      ==============
  
      // faster: using C/C++ lib bigint-buffer
      import { toBigIntBE } from "bigint-buffer";
      // Buffer: Node only
      const buffer = Buffer.from(byteArray);
      const result = toBigIntBE(buffer);
      return new Uint8Array(toBufferBE(value, 64));
  
    */ return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(byteArray);
}
function uintToBytes(value, width) {
    // May be using EthersT.toBeArray(value) is more efficient.
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(value, width));
}
function concatBytes() {
    for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
        arrays[_key] = arguments[_key];
    }
    const totalLength = arrays.reduce((sum, arr)=>sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
} //# sourceMappingURL=bytes.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_FHE_TYPES",
    ()=>ALL_FHE_TYPES,
    "FheType",
    ()=>FheType,
    "checkFheType",
    ()=>checkFheType,
    "getFheTypeBitLength",
    ()=>getFheTypeBitLength,
    "getFheTypeByteLength",
    ()=>getFheTypeByteLength,
    "getFheTypeInfo",
    ()=>getFheTypeInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
;
;
var FheType;
(function(FheType) {
    FheType[FheType["Bool"] = 0] = "Bool";
    FheType[FheType["Uint4"] = 1] = "Uint4";
    FheType[FheType["Uint8"] = 2] = "Uint8";
    FheType[FheType["Uint16"] = 3] = "Uint16";
    FheType[FheType["Uint32"] = 4] = "Uint32";
    FheType[FheType["Uint64"] = 5] = "Uint64";
    FheType[FheType["Uint128"] = 6] = "Uint128";
    FheType[FheType["Uint160"] = 7] = "Uint160";
    FheType[FheType["Uint256"] = 8] = "Uint256";
    FheType[FheType["Uint512"] = 9] = "Uint512";
    FheType[FheType["Uint1024"] = 10] = "Uint1024";
    FheType[FheType["Uint2048"] = 11] = "Uint2048";
    FheType[FheType["Uint2"] = 12] = "Uint2";
    FheType[FheType["Uint6"] = 13] = "Uint6";
    FheType[FheType["Uint10"] = 14] = "Uint10";
    FheType[FheType["Uint12"] = 15] = "Uint12";
    FheType[FheType["Uint14"] = 16] = "Uint14";
    FheType[FheType["Int2"] = 17] = "Int2";
    FheType[FheType["Int4"] = 18] = "Int4";
    FheType[FheType["Int6"] = 19] = "Int6";
    FheType[FheType["Int8"] = 20] = "Int8";
    FheType[FheType["Int10"] = 21] = "Int10";
    FheType[FheType["Int12"] = 22] = "Int12";
    FheType[FheType["Int14"] = 23] = "Int14";
    FheType[FheType["Int16"] = 24] = "Int16";
    FheType[FheType["Int32"] = 25] = "Int32";
    FheType[FheType["Int64"] = 26] = "Int64";
    FheType[FheType["Int128"] = 27] = "Int128";
    FheType[FheType["Int160"] = 28] = "Int160";
    FheType[FheType["Int256"] = 29] = "Int256";
    FheType[FheType["AsciiString"] = 30] = "AsciiString";
    FheType[FheType["Int512"] = 31] = "Int512";
    FheType[FheType["Int1024"] = 32] = "Int1024";
    FheType[FheType["Int2048"] = 33] = "Int2048";
    FheType[FheType["Uint24"] = 34] = "Uint24";
    FheType[FheType["Uint40"] = 35] = "Uint40";
    FheType[FheType["Uint48"] = 36] = "Uint48";
    FheType[FheType["Uint56"] = 37] = "Uint56";
    FheType[FheType["Uint72"] = 38] = "Uint72";
    FheType[FheType["Uint80"] = 39] = "Uint80";
    FheType[FheType["Uint88"] = 40] = "Uint88";
    FheType[FheType["Uint96"] = 41] = "Uint96";
    FheType[FheType["Uint104"] = 42] = "Uint104";
    FheType[FheType["Uint112"] = 43] = "Uint112";
    FheType[FheType["Uint120"] = 44] = "Uint120";
    FheType[FheType["Uint136"] = 45] = "Uint136";
    FheType[FheType["Uint144"] = 46] = "Uint144";
    FheType[FheType["Uint152"] = 47] = "Uint152";
    FheType[FheType["Uint168"] = 48] = "Uint168";
    FheType[FheType["Uint176"] = 49] = "Uint176";
    FheType[FheType["Uint184"] = 50] = "Uint184";
    FheType[FheType["Uint192"] = 51] = "Uint192";
    FheType[FheType["Uint200"] = 52] = "Uint200";
    FheType[FheType["Uint208"] = 53] = "Uint208";
    FheType[FheType["Uint216"] = 54] = "Uint216";
    FheType[FheType["Uint224"] = 55] = "Uint224";
    FheType[FheType["Uint232"] = 56] = "Uint232";
    FheType[FheType["Uint240"] = 57] = "Uint240";
    FheType[FheType["Uint248"] = 58] = "Uint248";
    FheType[FheType["Int24"] = 59] = "Int24";
    FheType[FheType["Int40"] = 60] = "Int40";
    FheType[FheType["Int48"] = 61] = "Int48";
    FheType[FheType["Int56"] = 62] = "Int56";
    FheType[FheType["Int72"] = 63] = "Int72";
    FheType[FheType["Int80"] = 64] = "Int80";
    FheType[FheType["Int88"] = 65] = "Int88";
    FheType[FheType["Int96"] = 66] = "Int96";
    FheType[FheType["Int104"] = 67] = "Int104";
    FheType[FheType["Int112"] = 68] = "Int112";
    FheType[FheType["Int120"] = 69] = "Int120";
    FheType[FheType["Int136"] = 70] = "Int136";
    FheType[FheType["Int144"] = 71] = "Int144";
    FheType[FheType["Int152"] = 72] = "Int152";
    FheType[FheType["Int168"] = 73] = "Int168";
    FheType[FheType["Int176"] = 74] = "Int176";
    FheType[FheType["Int184"] = 75] = "Int184";
    FheType[FheType["Int192"] = 76] = "Int192";
    FheType[FheType["Int200"] = 77] = "Int200";
    FheType[FheType["Int208"] = 78] = "Int208";
    FheType[FheType["Int216"] = 79] = "Int216";
    FheType[FheType["Int224"] = 80] = "Int224";
    FheType[FheType["Int232"] = 81] = "Int232";
    FheType[FheType["Int240"] = 82] = "Int240";
    FheType[FheType["Int248"] = 83] = "Int248";
})(FheType || (FheType = {}));
const ALL_FHE_TYPES = [
    {
        type: "Bool",
        value: 0,
        supportedOperators: [
            "and",
            "or",
            "xor",
            "eq",
            "ne",
            "not",
            "select",
            "rand"
        ],
        bitLength: 2,
        clearMatchingType: "bool"
    },
    {
        type: "Uint4",
        value: 1,
        supportedOperators: [],
        bitLength: 4,
        clearMatchingType: "uint8"
    },
    {
        type: "Uint8",
        value: 2,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 8,
        clearMatchingType: "uint8",
        aliases: [
            {
                type: "Bytes1",
                supportedOperators: [],
                clearMatchingType: "bytes1"
            }
        ]
    },
    {
        type: "Uint16",
        value: 3,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 16,
        clearMatchingType: "uint16",
        aliases: [
            {
                type: "Bytes2",
                supportedOperators: [],
                clearMatchingType: "bytes2"
            }
        ]
    },
    {
        type: "Uint32",
        value: 4,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 32,
        clearMatchingType: "uint32",
        aliases: [
            {
                type: "Bytes4",
                supportedOperators: [],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint64",
        value: 5,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 64,
        clearMatchingType: "uint64",
        aliases: [
            {
                type: "Bytes8",
                supportedOperators: [],
                clearMatchingType: "bytes8"
            }
        ]
    },
    {
        type: "Uint128",
        value: 6,
        supportedOperators: [
            "add",
            "sub",
            "mul",
            "div",
            "rem",
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "ge",
            "gt",
            "le",
            "lt",
            "min",
            "max",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 128,
        clearMatchingType: "uint128",
        aliases: [
            {
                type: "Bytes16",
                supportedOperators: [],
                clearMatchingType: "bytes16"
            }
        ]
    },
    {
        type: "Uint160",
        value: 7,
        supportedOperators: [],
        bitLength: 160,
        clearMatchingType: "uint160",
        aliases: [
            {
                type: "Address",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select"
                ],
                clearMatchingType: "address"
            },
            {
                type: "Bytes20",
                supportedOperators: [],
                clearMatchingType: "bytes20"
            }
        ]
    },
    {
        type: "Uint256",
        value: 8,
        supportedOperators: [
            "and",
            "or",
            "xor",
            "shl",
            "shr",
            "rotl",
            "rotr",
            "eq",
            "ne",
            "neg",
            "not",
            "select",
            "rand",
            "randBounded"
        ],
        bitLength: 256,
        clearMatchingType: "uint256",
        aliases: [
            {
                type: "Bytes32",
                supportedOperators: [],
                clearMatchingType: "bytes32"
            }
        ]
    },
    {
        type: "Uint512",
        value: 9,
        supportedOperators: [],
        bitLength: 512,
        clearMatchingType: "bytes memory",
        aliases: [
            {
                type: "Bytes64",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select",
                    "rand"
                ],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint1024",
        value: 10,
        supportedOperators: [],
        bitLength: 1024,
        clearMatchingType: "bytes memory",
        aliases: [
            {
                type: "Bytes128",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select",
                    "rand"
                ],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint2048",
        value: 11,
        supportedOperators: [],
        bitLength: 2048,
        clearMatchingType: "bytes memory",
        aliases: [
            {
                type: "Bytes256",
                supportedOperators: [
                    "eq",
                    "ne",
                    "select",
                    "rand"
                ],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint2",
        value: 12,
        supportedOperators: [],
        bitLength: 2,
        clearMatchingType: "uint8"
    },
    {
        type: "Uint6",
        value: 13,
        supportedOperators: [],
        bitLength: 6,
        clearMatchingType: "uint8"
    },
    {
        type: "Uint10",
        value: 14,
        supportedOperators: [],
        bitLength: 10,
        clearMatchingType: "uint16"
    },
    {
        type: "Uint12",
        value: 15,
        supportedOperators: [],
        bitLength: 12,
        clearMatchingType: "uint16"
    },
    {
        type: "Uint14",
        value: 16,
        supportedOperators: [],
        bitLength: 14,
        clearMatchingType: "uint16"
    },
    {
        type: "Int2",
        value: 17,
        supportedOperators: [],
        bitLength: 2,
        clearMatchingType: "int8"
    },
    {
        type: "Int4",
        value: 18,
        supportedOperators: [],
        bitLength: 4,
        clearMatchingType: "int8"
    },
    {
        type: "Int6",
        value: 19,
        supportedOperators: [],
        bitLength: 6,
        clearMatchingType: "int8"
    },
    {
        type: "Int8",
        value: 20,
        supportedOperators: [],
        bitLength: 8,
        clearMatchingType: "int8"
    },
    {
        type: "Int10",
        value: 21,
        supportedOperators: [],
        bitLength: 10,
        clearMatchingType: "int16"
    },
    {
        type: "Int12",
        value: 22,
        supportedOperators: [],
        bitLength: 12,
        clearMatchingType: "int16"
    },
    {
        type: "Int14",
        value: 23,
        supportedOperators: [],
        bitLength: 14,
        clearMatchingType: "int16"
    },
    {
        type: "Int16",
        value: 24,
        supportedOperators: [],
        bitLength: 16,
        clearMatchingType: "int16"
    },
    {
        type: "Int32",
        value: 25,
        supportedOperators: [],
        bitLength: 32,
        clearMatchingType: "int32"
    },
    {
        type: "Int64",
        value: 26,
        supportedOperators: [],
        bitLength: 64,
        clearMatchingType: "int64"
    },
    {
        type: "Int128",
        value: 27,
        supportedOperators: [],
        bitLength: 128,
        clearMatchingType: "int128"
    },
    {
        type: "Int160",
        value: 28,
        supportedOperators: [],
        bitLength: 160,
        clearMatchingType: "int160"
    },
    {
        type: "Int256",
        value: 29,
        supportedOperators: [],
        bitLength: 256,
        clearMatchingType: "int256"
    },
    {
        type: "AsciiString",
        value: 30,
        supportedOperators: [],
        bitLength: 0,
        clearMatchingType: "string memory"
    },
    {
        type: "Int512",
        value: 31,
        supportedOperators: [],
        bitLength: 512,
        clearMatchingType: "bytes memory"
    },
    {
        type: "Int1024",
        value: 32,
        supportedOperators: [],
        bitLength: 1024,
        clearMatchingType: "bytes memory"
    },
    {
        type: "Int2048",
        value: 33,
        supportedOperators: [],
        bitLength: 2048,
        clearMatchingType: "bytes memory"
    },
    {
        type: "Uint24",
        value: 34,
        supportedOperators: [],
        bitLength: 24,
        clearMatchingType: "uint24",
        aliases: [
            {
                type: "Bytes3",
                supportedOperators: [],
                clearMatchingType: "bytes3"
            }
        ]
    },
    {
        type: "Uint40",
        value: 35,
        supportedOperators: [],
        bitLength: 40,
        clearMatchingType: "uint40",
        aliases: [
            {
                type: "Bytes5",
                supportedOperators: [],
                clearMatchingType: "bytes5"
            }
        ]
    },
    {
        type: "Uint48",
        value: 36,
        supportedOperators: [],
        bitLength: 48,
        clearMatchingType: "uint48",
        aliases: [
            {
                type: "Bytes6",
                supportedOperators: [],
                clearMatchingType: "bytes6"
            }
        ]
    },
    {
        type: "Uint56",
        value: 37,
        supportedOperators: [],
        bitLength: 56,
        clearMatchingType: "uint56",
        aliases: [
            {
                type: "Bytes7",
                supportedOperators: [],
                clearMatchingType: ""
            }
        ]
    },
    {
        type: "Uint72",
        value: 38,
        supportedOperators: [],
        bitLength: 72,
        clearMatchingType: "uint72",
        aliases: [
            {
                type: "Bytes9",
                supportedOperators: [],
                clearMatchingType: "bytes9"
            }
        ]
    },
    {
        type: "Uint80",
        value: 39,
        supportedOperators: [],
        bitLength: 80,
        clearMatchingType: "uint80",
        aliases: [
            {
                type: "Bytes10",
                supportedOperators: [],
                clearMatchingType: "bytes10"
            }
        ]
    },
    {
        type: "Uint88",
        value: 40,
        supportedOperators: [],
        bitLength: 88,
        clearMatchingType: "uint88",
        aliases: [
            {
                type: "Bytes11",
                supportedOperators: [],
                clearMatchingType: "bytes11"
            }
        ]
    },
    {
        type: "Uint96",
        value: 41,
        supportedOperators: [],
        bitLength: 96,
        clearMatchingType: "uint96",
        aliases: [
            {
                type: "Bytes12",
                supportedOperators: [],
                clearMatchingType: "bytes12"
            }
        ]
    },
    {
        type: "Uint104",
        value: 42,
        supportedOperators: [],
        bitLength: 104,
        clearMatchingType: "uint104",
        aliases: [
            {
                type: "Bytes13",
                supportedOperators: [],
                clearMatchingType: "bytes13"
            }
        ]
    },
    {
        type: "Uint112",
        value: 43,
        supportedOperators: [],
        bitLength: 112,
        clearMatchingType: "uint112",
        aliases: [
            {
                type: "Bytes14",
                supportedOperators: [],
                clearMatchingType: "bytes14"
            }
        ]
    },
    {
        type: "Uint120",
        value: 44,
        supportedOperators: [],
        bitLength: 120,
        clearMatchingType: "uint120",
        aliases: [
            {
                type: "Bytes15",
                supportedOperators: [],
                clearMatchingType: "bytes15"
            }
        ]
    },
    {
        type: "Uint136",
        value: 45,
        supportedOperators: [],
        bitLength: 136,
        clearMatchingType: "uint136",
        aliases: [
            {
                type: "Bytes17",
                supportedOperators: [],
                clearMatchingType: "bytes17"
            }
        ]
    },
    {
        type: "Uint144",
        value: 46,
        supportedOperators: [],
        bitLength: 144,
        clearMatchingType: "uint144",
        aliases: [
            {
                type: "Bytes18",
                supportedOperators: [],
                clearMatchingType: "bytes18"
            }
        ]
    },
    {
        type: "Uint152",
        value: 47,
        supportedOperators: [],
        bitLength: 152,
        clearMatchingType: "uint152",
        aliases: [
            {
                type: "Bytes19",
                supportedOperators: [],
                clearMatchingType: "bytes19"
            }
        ]
    },
    {
        type: "Uint168",
        value: 48,
        supportedOperators: [],
        bitLength: 168,
        clearMatchingType: "uint168",
        aliases: [
            {
                type: "Bytes21",
                supportedOperators: [],
                clearMatchingType: "bytes21"
            }
        ]
    },
    {
        type: "Uint176",
        value: 49,
        supportedOperators: [],
        bitLength: 176,
        clearMatchingType: "uint176",
        aliases: [
            {
                type: "Bytes22",
                supportedOperators: [],
                clearMatchingType: "bytes22"
            }
        ]
    },
    {
        type: "Uint184",
        value: 50,
        supportedOperators: [],
        bitLength: 184,
        clearMatchingType: "uint184",
        aliases: [
            {
                type: "Bytes23",
                supportedOperators: [],
                clearMatchingType: "bytes23"
            }
        ]
    },
    {
        type: "Uint192",
        value: 51,
        supportedOperators: [],
        bitLength: 192,
        clearMatchingType: "uint192",
        aliases: [
            {
                type: "Bytes24",
                supportedOperators: [],
                clearMatchingType: "24"
            }
        ]
    },
    {
        type: "Uint200",
        value: 52,
        supportedOperators: [],
        bitLength: 200,
        clearMatchingType: "uint200",
        aliases: [
            {
                type: "Bytes25",
                supportedOperators: [],
                clearMatchingType: "25"
            }
        ]
    },
    {
        type: "Uint208",
        value: 53,
        supportedOperators: [],
        bitLength: 208,
        clearMatchingType: "uint208",
        aliases: [
            {
                type: "Bytes26",
                supportedOperators: [],
                clearMatchingType: "26"
            }
        ]
    },
    {
        type: "Uint216",
        value: 54,
        supportedOperators: [],
        bitLength: 216,
        clearMatchingType: "uint216",
        aliases: [
            {
                type: "Bytes27",
                supportedOperators: [],
                clearMatchingType: "27"
            }
        ]
    },
    {
        type: "Uint224",
        value: 55,
        supportedOperators: [],
        bitLength: 224,
        clearMatchingType: "uint224",
        aliases: [
            {
                type: "Bytes28",
                supportedOperators: [],
                clearMatchingType: "28"
            }
        ]
    },
    {
        type: "Uint232",
        value: 56,
        supportedOperators: [],
        bitLength: 232,
        clearMatchingType: "uint232",
        aliases: [
            {
                type: "Bytes29",
                supportedOperators: [],
                clearMatchingType: "bytes29"
            }
        ]
    },
    {
        type: "Uint240",
        value: 57,
        supportedOperators: [],
        bitLength: 240,
        clearMatchingType: "uint240",
        aliases: [
            {
                type: "Bytes30",
                supportedOperators: [],
                clearMatchingType: "bytes30"
            }
        ]
    },
    {
        type: "Uint248",
        value: 58,
        supportedOperators: [],
        bitLength: 248,
        clearMatchingType: "uint248",
        aliases: [
            {
                type: "Bytes31",
                supportedOperators: [],
                clearMatchingType: "bytes31"
            }
        ]
    },
    {
        type: "Int24",
        value: 59,
        supportedOperators: [],
        bitLength: 24,
        clearMatchingType: "int24"
    },
    {
        type: "Int40",
        value: 60,
        supportedOperators: [],
        bitLength: 40,
        clearMatchingType: "int40"
    },
    {
        type: "Int48",
        value: 61,
        supportedOperators: [],
        bitLength: 48,
        clearMatchingType: "int48"
    },
    {
        type: "Int56",
        value: 62,
        supportedOperators: [],
        bitLength: 56,
        clearMatchingType: "int56"
    },
    {
        type: "Int72",
        value: 63,
        supportedOperators: [],
        bitLength: 72,
        clearMatchingType: "int72"
    },
    {
        type: "Int80",
        value: 64,
        supportedOperators: [],
        bitLength: 80,
        clearMatchingType: "int80"
    },
    {
        type: "Int88",
        value: 65,
        supportedOperators: [],
        bitLength: 88,
        clearMatchingType: "int88"
    },
    {
        type: "Int96",
        value: 66,
        supportedOperators: [],
        bitLength: 96,
        clearMatchingType: "int96"
    },
    {
        type: "Int104",
        value: 67,
        supportedOperators: [],
        bitLength: 104,
        clearMatchingType: "int104"
    },
    {
        type: "Int112",
        value: 68,
        supportedOperators: [],
        bitLength: 112,
        clearMatchingType: "int112"
    },
    {
        type: "Int120",
        value: 69,
        supportedOperators: [],
        bitLength: 120,
        clearMatchingType: "int120"
    },
    {
        type: "Int136",
        value: 70,
        supportedOperators: [],
        bitLength: 136,
        clearMatchingType: "int136"
    },
    {
        type: "Int144",
        value: 71,
        supportedOperators: [],
        bitLength: 144,
        clearMatchingType: "int144"
    },
    {
        type: "Int152",
        value: 72,
        supportedOperators: [],
        bitLength: 152,
        clearMatchingType: "int152"
    },
    {
        type: "Int168",
        value: 73,
        supportedOperators: [],
        bitLength: 168,
        clearMatchingType: "int168"
    },
    {
        type: "Int176",
        value: 74,
        supportedOperators: [],
        bitLength: 176,
        clearMatchingType: "int176"
    },
    {
        type: "Int184",
        value: 75,
        supportedOperators: [],
        bitLength: 184,
        clearMatchingType: "int184"
    },
    {
        type: "Int192",
        value: 76,
        supportedOperators: [],
        bitLength: 192,
        clearMatchingType: "int192"
    },
    {
        type: "Int200",
        value: 77,
        supportedOperators: [],
        bitLength: 200,
        clearMatchingType: "int200"
    },
    {
        type: "Int208",
        value: 78,
        supportedOperators: [],
        bitLength: 208,
        clearMatchingType: "int208"
    },
    {
        type: "Int216",
        value: 79,
        supportedOperators: [],
        bitLength: 216,
        clearMatchingType: "int216"
    },
    {
        type: "Int224",
        value: 80,
        supportedOperators: [],
        bitLength: 224,
        clearMatchingType: "int224"
    },
    {
        type: "Int232",
        value: 81,
        supportedOperators: [],
        bitLength: 232,
        clearMatchingType: "int232"
    },
    {
        type: "Int240",
        value: 82,
        supportedOperators: [],
        bitLength: 240,
        clearMatchingType: "int240"
    },
    {
        type: "Int248",
        value: 83,
        supportedOperators: [],
        bitLength: 248,
        clearMatchingType: "int248"
    }
];
function checkFheType(fheType) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUInt"])(fheType)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid FheType ".concat(fheType));
    }
    const theFheType = fheType;
    if (theFheType >= ALL_FHE_TYPES.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid FheType ".concat(fheType));
    }
}
function getFheTypeByteLength(fheType) {
    const fheBitLen = getFheTypeBitLength(fheType);
    return Math.ceil(fheBitLen / 8);
}
function getFheTypeBitLength(fheType) {
    return getFheTypeInfo(fheType).bitLength;
}
function getFheTypeInfo(type) {
    return ALL_FHE_TYPES[type];
} //# sourceMappingURL=FheType.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FheTypeToFhevmType",
    ()=>FheTypeToFhevmType,
    "FhevmType",
    ()=>FhevmType,
    "FhevmTypeMap",
    ()=>FhevmTypeMap,
    "FhevmTypeNameMap",
    ()=>FhevmTypeNameMap,
    "FhevmTypeToFheType",
    ()=>FhevmTypeToFheType,
    "allFhevmTypeInfos",
    ()=>allFhevmTypeInfos,
    "allFhevmTypeNames",
    ()=>allFhevmTypeNames,
    "allFhevmTypes",
    ()=>allFhevmTypes,
    "checkFhevmType",
    ()=>checkFhevmType,
    "getFhevmTypeFheBitLength",
    ()=>getFhevmTypeFheBitLength,
    "getFhevmTypeInfo",
    ()=>getFhevmTypeInfo,
    "getFhevmTypeMaxClearTextBigInt",
    ()=>getFhevmTypeMaxClearTextBigInt,
    "isFhevmEaddress",
    ()=>isFhevmEaddress,
    "isFhevmEbool",
    ()=>isFhevmEbool,
    "isFhevmEbytes",
    ()=>isFhevmEbytes,
    "isFhevmEuint",
    ()=>isFhevmEuint,
    "isFhevmType",
    ()=>isFhevmType,
    "tryParseFhevmType",
    ()=>tryParseFhevmType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
;
;
;
var FhevmType;
(function(FhevmType) {
    FhevmType[FhevmType["ebool"] = 0] = "ebool";
    FhevmType[FhevmType["euint4"] = 1] = "euint4";
    FhevmType[FhevmType["euint8"] = 2] = "euint8";
    FhevmType[FhevmType["euint16"] = 3] = "euint16";
    FhevmType[FhevmType["euint32"] = 4] = "euint32";
    FhevmType[FhevmType["euint64"] = 5] = "euint64";
    FhevmType[FhevmType["euint128"] = 6] = "euint128";
    FhevmType[FhevmType["eaddress"] = 7] = "eaddress";
    FhevmType[FhevmType["euint256"] = 8] = "euint256";
    FhevmType[FhevmType["ebytes64"] = 9] = "ebytes64";
    FhevmType[FhevmType["ebytes128"] = 10] = "ebytes128";
    FhevmType[FhevmType["ebytes256"] = 11] = "ebytes256";
})(FhevmType || (FhevmType = {}));
const FhevmTypeMap = {
    ebool: FhevmType.ebool,
    euint4: FhevmType.euint4,
    euint8: FhevmType.euint8,
    euint16: FhevmType.euint16,
    euint32: FhevmType.euint32,
    euint64: FhevmType.euint64,
    euint128: FhevmType.euint128,
    eaddress: FhevmType.eaddress,
    euint256: FhevmType.euint256,
    ebytes64: FhevmType.ebytes64,
    ebytes128: FhevmType.ebytes128,
    ebytes256: FhevmType.ebytes256
};
Object.freeze(FhevmTypeMap);
const FhevmTypeNameMap = {
    [FhevmType.ebool]: "ebool",
    [FhevmType.euint4]: "euint4",
    [FhevmType.euint8]: "euint8",
    [FhevmType.euint16]: "euint16",
    [FhevmType.euint32]: "euint32",
    [FhevmType.euint64]: "euint64",
    [FhevmType.euint128]: "euint128",
    [FhevmType.euint256]: "euint256",
    [FhevmType.eaddress]: "eaddress",
    [FhevmType.ebytes64]: "ebytes64",
    [FhevmType.ebytes128]: "ebytes128",
    [FhevmType.ebytes256]: "ebytes256"
};
Object.freeze(FhevmTypeNameMap);
const allFhevmTypes = [
    FhevmType.ebool,
    FhevmType.euint4,
    FhevmType.euint8,
    FhevmType.euint16,
    FhevmType.euint32,
    FhevmType.euint64,
    FhevmType.euint128,
    FhevmType.eaddress,
    FhevmType.euint256,
    FhevmType.ebytes64,
    FhevmType.ebytes128,
    FhevmType.ebytes256
];
Object.freeze(allFhevmTypes);
const allFhevmTypeNames = [
    "ebool",
    "euint4",
    "euint8",
    "euint16",
    "euint32",
    "euint64",
    "euint128",
    "eaddress",
    "euint256",
    "ebytes64",
    "ebytes128",
    "ebytes256"
];
Object.freeze(allFhevmTypeNames);
const allFhevmTypeInfos = Object.freeze([
    Object.freeze({
        type: FhevmType.ebool,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Bool,
        name: "ebool",
        solidityTypeName: "bool",
        clearTextBitLength: 1
    }),
    Object.freeze({
        type: FhevmType.euint4,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint4,
        name: "euint4",
        solidityTypeName: "uint4",
        clearTextBitLength: 4
    }),
    Object.freeze({
        type: FhevmType.euint8,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint8,
        name: "euint8",
        solidityTypeName: "uint8",
        clearTextBitLength: 8
    }),
    Object.freeze({
        type: FhevmType.euint16,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint16,
        name: "euint16",
        solidityTypeName: "uint16",
        clearTextBitLength: 16
    }),
    Object.freeze({
        type: FhevmType.euint32,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint32,
        name: "euint32",
        solidityTypeName: "uint32",
        clearTextBitLength: 32
    }),
    Object.freeze({
        type: FhevmType.euint64,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint64,
        name: "euint64",
        solidityTypeName: "uint64",
        clearTextBitLength: 64
    }),
    Object.freeze({
        name: "euint128",
        type: FhevmType.euint128,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint128,
        solidityTypeName: "uint128",
        clearTextBitLength: 128
    }),
    Object.freeze({
        name: "eaddress",
        type: FhevmType.eaddress,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint160,
        solidityTypeName: "address",
        clearTextBitLength: 160
    }),
    Object.freeze({
        name: "euint256",
        type: FhevmType.euint256,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint256,
        solidityTypeName: "uint256",
        clearTextBitLength: 256
    }),
    Object.freeze({
        name: "ebytes64",
        type: FhevmType.ebytes64,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint512,
        solidityTypeName: "bytes",
        clearTextBitLength: 512
    }),
    Object.freeze({
        name: "ebytes128",
        type: FhevmType.ebytes128,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint1024,
        solidityTypeName: "bytes",
        clearTextBitLength: 1024
    }),
    Object.freeze({
        name: "ebytes256",
        type: FhevmType.ebytes256,
        fheType: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FheType"].Uint2048,
        solidityTypeName: "bytes",
        clearTextBitLength: 2048
    })
]);
function isFhevmType(fhevmType) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUInt"])(fhevmType)) {
        return false;
    }
    const theFhevmType = fhevmType;
    if (theFhevmType >= allFhevmTypeInfos.length) {
        return false;
    }
    return true;
}
function isFhevmEbytes(fhevmType) {
    return fhevmType === FhevmType.ebytes64 || fhevmType === FhevmType.ebytes128 || fhevmType === FhevmType.ebytes256;
}
function isFhevmEuint(fhevmType) {
    return fhevmType === FhevmType.euint4 || fhevmType === FhevmType.euint8 || fhevmType === FhevmType.euint16 || fhevmType === FhevmType.euint32 || fhevmType === FhevmType.euint64 || fhevmType === FhevmType.euint128 || fhevmType === FhevmType.euint256;
}
function isFhevmEbool(fhevmType) {
    return fhevmType === FhevmType.ebool;
}
function isFhevmEaddress(fhevmType) {
    return fhevmType === FhevmType.eaddress;
}
function checkFhevmType(fhevmType) {
    if (!isFhevmType(fhevmType)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid FhevmType ".concat(fhevmType));
    }
}
function FheTypeToFhevmType(fheType) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFheType"])(fheType);
    if (fheType >= allFhevmTypeInfos.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Cannot convert FheType ".concat(fheType, " to FhevmType"));
    }
    return fheType;
}
function FhevmTypeToFheType(fhevmType) {
    checkFhevmType(fhevmType);
    if (fhevmType >= __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_FHE_TYPES"].length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Cannot convert FhevmType: ".concat(fhevmType, " to FheType"));
    }
    return fhevmType;
}
function getFhevmTypeInfo(type) {
    if (typeof type === "string") {
        return allFhevmTypeInfos[FhevmTypeMap[type]];
    }
    return allFhevmTypeInfos[type];
}
function getFhevmTypeFheBitLength(fhevmType) {
    const fheType = FhevmTypeToFheType(fhevmType);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeBitLength"])(fheType);
}
function getFhevmTypeMaxClearTextBigInt(fhevmType) {
    const fhevmTypeInfo = getFhevmTypeInfo(fhevmType);
    const clearTextBitLen = fhevmTypeInfo.clearTextBitLength;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxBigInt"])(clearTextBitLen);
}
function tryParseFhevmType(name) {
    if (typeof name !== "string") {
        return undefined;
    }
    if (!(name in FhevmTypeMap)) {
        return undefined;
    }
    try {
        return FhevmTypeMap[name];
    } catch (e) {
        return undefined;
    }
} //# sourceMappingURL=FhevmType.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmHandle",
    ()=>FhevmHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmHandle_hash21, _FhevmHandle_chainId, _FhevmHandle_fhevmType, _FhevmHandle_fheType, _FhevmHandle_version, _FhevmHandle_computed, _FhevmHandle_index;
;
;
;
;
;
;
;
;
class FhevmHandle {
    get hash21() {
        return __classPrivateFieldGet(this, _FhevmHandle_hash21, "f");
    }
    get chainId() {
        return __classPrivateFieldGet(this, _FhevmHandle_chainId, "f");
    }
    get fhevmType() {
        return __classPrivateFieldGet(this, _FhevmHandle_fhevmType, "f");
    }
    get fheType() {
        return __classPrivateFieldGet(this, _FhevmHandle_fheType, "f");
    }
    get version() {
        return __classPrivateFieldGet(this, _FhevmHandle_version, "f");
    }
    get computed() {
        return __classPrivateFieldGet(this, _FhevmHandle_computed, "f");
    }
    get index() {
        return __classPrivateFieldGet(this, _FhevmHandle_index, "f");
    }
    get fhevmTypeInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(__classPrivateFieldGet(this, _FhevmHandle_fhevmType, "f"));
    }
    get fheTypeInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeInfo"])(__classPrivateFieldGet(this, _FhevmHandle_fheType, "f"));
    }
    /**
     * Handles have the following format:
     * [21 first random bytes from hashing] | index_21 | chainID_22...29 | type_30 | version_31
     *
     * Handle format for user inputs and ops results are as such:
     * keccak256(keccak256(CiphertextFHEList)||index_handle)[0:20] || index_handle[21] || chainID [22:29] ||  handle_type [30] || handle_version [31]
     * If the handle stems from computation, the index_handle must be set to 0xff.
     * The CiphertextFHEList actually contains: 1 byte (= N) for size of handles_list, N bytes for the handles_types : 1 per handle, then the original fhe160list raw ciphertext
     */ static fromBytes32Hex(handleBytes32Hex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof handleBytes32Hex === "string", "handle argument type mismatch. Got a ".concat(typeof handleBytes32Hex, ", expecting a string."));
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isHexString(handleBytes32Hex, 32)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", handle length sould be 66"));
        }
        const hash21 = handleBytes32Hex.slice(0, 44);
        // Byte 21 = index
        const handleIndexHex = handleBytes32Hex.slice(44, 46);
        let handleIndex = 0;
        try {
            handleIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleIndexHex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 21 does not contain a valid index"));
        }
        // If the handle stems from computation, the index_handle must be set to 0xff.
        const computed = handleIndex === 255;
        // Bytes 22-29 must be the chainId
        const handleChainIdHex = handleBytes32Hex.slice(46, 62);
        let chainId = 0;
        try {
            chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleChainIdHex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 22-29 does not contain a valid chainId"));
        }
        // Byte30: type
        const handleTypeHex = handleBytes32Hex.slice(62, 64);
        let fheType = undefined;
        let fhevmType = undefined;
        try {
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleTypeHex);
            fheType = t;
            fhevmType = t;
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 30 does not contain the a valid (got 0x").concat(handleTypeHex, ")."));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFheType"])(fheType);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFhevmType"])(fhevmType);
        // Byte31: handle version is 0 at this point
        const handleVersionHex = handleBytes32Hex.slice(64, 66);
        let version = 0;
        try {
            version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUIntNumber"])("0x" + handleVersionHex);
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 31 does not contain a valid version number."));
        }
        if (version !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid handle ".concat(handleBytes32Hex, ", Byte 31 does not contain the expected version=").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION, ", got ").concat(version, " instead"));
        }
        const fhevmHandle = new FhevmHandle(hash21, chainId, fhevmType, fheType, version, computed, handleIndex < 255 ? handleIndex : undefined);
        // For debug purpose
        // const _h = fhevmHandle.toHandleBytes32Hex();
        // if (_h !== handleBytes32Hex) {
        //   assertFhevmFailed(`${_h} === ${handleBytes32Hex}`);
        // }
        return fhevmHandle;
    }
    static verify(handleBytes32, expected) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(handleBytes32, "handleBytes32");
        if (handleBytes32 === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Handle is not initialized");
        }
        const fhevmHandle = FhevmHandle.fromBytes32Hex(handleBytes32);
        if ((expected === null || expected === void 0 ? void 0 : expected.chainId) !== undefined) {
            if (fhevmHandle.chainId !== expected.chainId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Chain ID mismatch for handle ".concat(handleBytes32, ", expected ").concat(expected.chainId, ", but got ").concat(fhevmHandle.chainId, " instead."));
            }
        }
        if ((expected === null || expected === void 0 ? void 0 : expected.fhevmType) !== undefined) {
            if (fhevmHandle.fhevmType !== expected.fhevmType) {
                const fhevmTypeInfo = fhevmHandle.fhevmTypeInfo;
                const expectedFhevmTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(expected.fhevmType);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Type mismatch for handle '".concat(handleBytes32, "': expected '").concat(expectedFhevmTypeInfo.name, "', but got '").concat(fhevmTypeInfo.name, "' instead."));
            }
        }
        if ((expected === null || expected === void 0 ? void 0 : expected.fheType) !== undefined) {
            if (fhevmHandle.fheType !== expected.fheType) {
                const fheTypeInfo = fhevmHandle.fheTypeInfo;
                const expectedFheTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeInfo"])(expected.fheType);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Type mismatch for handle '".concat(handleBytes32, "': expected '").concat(expectedFheTypeInfo.type, "', but got '").concat(fheTypeInfo.type, "' instead."));
            }
        }
        return fhevmHandle;
    }
    toHandleBytes32() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(Number(__classPrivateFieldGet(this, _FhevmHandle_fheType, "f")) === Number(__classPrivateFieldGet(this, _FhevmHandle_fhevmType, "f")));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _FhevmHandle_index, "f") === undefined && __classPrivateFieldGet(this, _FhevmHandle_computed, "f") || __classPrivateFieldGet(this, _FhevmHandle_index, "f") !== undefined && __classPrivateFieldGet(this, _FhevmHandle_index, "f") < 255 && !__classPrivateFieldGet(this, _FhevmHandle_computed, "f"));
        const chainId32Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uintToBytes"])(__classPrivateFieldGet(this, _FhevmHandle_chainId, "f"), 32);
        const chainId8Bytes = chainId32Bytes.subarray(24, 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(chainId32Bytes.length === 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(chainId8Bytes.length === 8);
        //const encryptionIndex1Byte = [this.#index === undefined ? 255 : this.#index];
        const handleHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__classPrivateFieldGet(this, _FhevmHandle_hash21, "f"));
        const handleBytes32AsBytes = new Uint8Array(32);
        handleBytes32AsBytes.set(handleHash, 0);
        handleBytes32AsBytes[21] = __classPrivateFieldGet(this, _FhevmHandle_index, "f") === undefined ? 255 : __classPrivateFieldGet(this, _FhevmHandle_index, "f");
        handleBytes32AsBytes.set(chainId8Bytes, 22);
        handleBytes32AsBytes[30] = __classPrivateFieldGet(this, _FhevmHandle_fheType, "f");
        handleBytes32AsBytes[31] = __classPrivateFieldGet(this, _FhevmHandle_version, "f");
        return handleBytes32AsBytes;
    }
    toHandleBytes32Hex() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(this.toHandleBytes32());
    }
    static createInputHandle(blobHashBytes32, aclAddress, chainId, fhevmType, ciphertextVersion, index) {
        const hash21 = FhevmHandle._computeInputHash21(blobHashBytes32, aclAddress, chainId, index);
        return new FhevmHandle(hash21, chainId, fhevmType, fhevmType, ciphertextVersion, false, index);
    }
    /**
     * blobHashBytes32 = keccak256(ciphertextWithZKProof)
     */ static _computeInputHash21(blobHashBytes32, aclAddress, chainId, index) {
        /*
    
            handle_hash = blobHash 32 Bytes + index 1 Byte + aclAddress 20 Bytes + chainId 32 bytes
            =======================================================================================
    
            let mut handle_hash = Keccak256::new();
            handle_hash.update(blob_hash);
            handle_hash.update([ct_idx as u8]);
            handle_hash.update(
                Address::from_str(&aux_data.acl_contract_address)
                    .expect("valid acl_contract_address")
                    .into_array(),
            );
            handle_hash.update(chain_id_bytes);
            let mut handle = handle_hash.finalize().to_vec();
    
        */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32"])(blobHashBytes32, "blobHash");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(aclAddress, "aclAddress");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsNumber"])(index, "index");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsNumber"])(chainId, "chainId");
        const encryptionIndex1Byte = new Uint8Array([
            index
        ]);
        const aclContractAddress20Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressToBytes"])(aclAddress, "ACL address");
        const chainId32Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uintToBytes"])(chainId, 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes1"])(encryptionIndex1Byte);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes20"])(aclContractAddress20Bytes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32"])(chainId32Bytes);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(blobHashBytes32, encryptionIndex1Byte, aclContractAddress20Bytes, chainId32Bytes));
    }
    static computeHandlesHex(ciphertextWithZKProof, fhevmTypes, aclContractAddress, chainId, ciphertextVersion) {
        const handlesAsBytes = FhevmHandle.computeHandles(ciphertextWithZKProof, fhevmTypes, aclContractAddress, chainId, ciphertextVersion);
        return handlesAsBytes.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify);
    }
    static computeHandles(ciphertextWithZKProof, fhevmTypes, aclContractAddress, chainId, ciphertextVersion) {
        if (BigInt(chainId) > __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_UINT64"]) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("ChainId exceeds maximum allowed value (8 bytes)"); // fhevm assumes chainID is only taking up to 8 bytes
        }
        // Should be identical to:
        // https://github.com/zama-ai/fhevm-backend/blob/bae00d1b0feafb63286e94acdc58dc88d9c481bf/fhevm-engine/zkproof-worker/src/verifier.rs#L301
        const blobHashBytes32Hex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(ciphertextWithZKProof);
        const blobHashBytes32 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(blobHashBytes32Hex);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(blobHashBytes32.length === 32);
        /*
    
        const ENCRYPTION_TYPES = {
          1: 0, // ebool takes 2 encrypted bits
          8: 2,
          16: 3,
          32: 4,
          64: 5,
          128: 6,
          160: 7,
          256: 8,
          512: 9,
          1024: 10,
          2048: 11,
        };
    
        */ const handles = fhevmTypes.map((fhevmType, encryptionIndex)=>{
            const fhevmHandle = FhevmHandle.createInputHandle(blobHashBytes32, aclContractAddress, chainId, fhevmType, ciphertextVersion, encryptionIndex);
            return fhevmHandle.toHandleBytes32();
        });
        return handles;
    }
    constructor(hash21, chainId, fhevmType, fheType, version, computed, index){
        _FhevmHandle_hash21.set(this, void 0);
        _FhevmHandle_chainId.set(this, void 0);
        _FhevmHandle_fhevmType.set(this, void 0);
        _FhevmHandle_fheType.set(this, void 0);
        _FhevmHandle_version.set(this, void 0);
        _FhevmHandle_computed.set(this, void 0);
        _FhevmHandle_index.set(this, void 0);
        __classPrivateFieldSet(this, _FhevmHandle_hash21, hash21, "f");
        __classPrivateFieldSet(this, _FhevmHandle_chainId, chainId, "f");
        __classPrivateFieldSet(this, _FhevmHandle_fhevmType, fhevmType, "f");
        __classPrivateFieldSet(this, _FhevmHandle_fheType, fheType, "f");
        __classPrivateFieldSet(this, _FhevmHandle_version, version, "f");
        __classPrivateFieldSet(this, _FhevmHandle_computed, computed, "f");
        if (index !== undefined) {
            __classPrivateFieldSet(this, _FhevmHandle_index, index, "f");
        }
    }
}
_FhevmHandle_hash21 = new WeakMap(), _FhevmHandle_chainId = new WeakMap(), _FhevmHandle_fhevmType = new WeakMap(), _FhevmHandle_fheType = new WeakMap(), _FhevmHandle_version = new WeakMap(), _FhevmHandle_computed = new WeakMap(), _FhevmHandle_index = new WeakMap(); /*
private static computeMockCiphertextWithZKProof(
    clearTextValuesBigInt: bigint[],
    fheTypes: FheType[],
    rand32BufferList: Buffer[],
  ): Uint8Array {
    let encrypted = Buffer.alloc(0);

    const numHandles = clearTextValuesBigInt.length;

    assertHHFhevm(rand32BufferList.length === numHandles);
    assertHHFhevm(fheTypes.length === numHandles);

    // 1. Build the typed values hash
    for (let i = 0; i < numHandles; ++i) {
      //type + value as bigint + random(32)
      const clearTextValueBigInt = clearTextValuesBigInt[i];
      const fheByteLen = getFheTypeByteLength(fheTypes[i]);

      const fheTypeBuffer = Buffer.from([fheTypes[i]]);
      const clearTextValueBuffer = toBufferBE(clearTextValueBigInt, fheByteLen);
      const rand32Buffer = rand32BufferList[i];

      // concatenate 32 random bytes at the end of buffer to simulate encryption noise
      const encBuffer = Buffer.concat([fheTypeBuffer, clearTextValueBuffer, rand32Buffer]);

      encrypted = Buffer.concat([encrypted, encBuffer]);
    }

    return new Uint8Array(new Keccak(256).update(Buffer.from(new Uint8Array(encrypted))).digest());
  }

*/  /*
const closestPP = getClosestPP();
      const pp = publicParams[closestPP]!.publicParams;
      const buffContract = fromHexString(contractAddress);
      const buffUser = fromHexString(userAddress);
      const buffAcl = fromHexString(aclContractAddress);
      const buffChainId = fromHexString(chainId.toString(16).padStart(64, '0'));
      const auxData = new Uint8Array(
        buffContract.length + buffUser.length + buffAcl.length + 32, // buffChainId.length,
      );
      auxData.set(buffContract, 0);
      auxData.set(buffUser, 20);
      auxData.set(buffAcl, 40);
      auxData.set(buffChainId, auxData.length - buffChainId.length);
      const encrypted = builder.build_with_proof_packed(
        pp,
        auxData,
        ZkComputeLoad.Verify,
      );
      ciphertextWithZKProof = encrypted.safe_serialize(
        SERIALIZED_SIZE_LIMIT_CIPHERTEXT,
      );
      return ciphertextWithZKProof;
*/  /*

// Compute input handle
export function computeInputHandlesBytes32AsBytes(
  ciphertextWithZKProof: Uint8Array | string,
  encryptionTypes: FheType[],
  chainId: number,
  aclContractAddress: string,
  ciphertextVersion: number,
): Uint8Array[] {
  const ciphertextWithZKProofUint8Array: Uint8Array =
    typeof ciphertextWithZKProof === "string" ? EthersT.toBeArray(aclContractAddress) : ciphertextWithZKProof;

  const blobHash = new Keccak(256).update(Buffer.from(ciphertextWithZKProofUint8Array)).digest();
  const aclContractAddress20Bytes = Buffer.from(EthersT.toBeArray(aclContractAddress));

  const chainId32Bytes = Buffer.from(new Uint8Array(toBufferBE(BigInt(chainId), 32)));
  const chainId8Bytes = chainId32Bytes.subarray(24, 32);

  const handlesBytes32AsBytes: Uint8Array[] = encryptionTypes.map(
    (encryptionType: FheType, encryptionIndex: number) => {
      const encryptionIndex1Byte = Buffer.from([encryptionIndex]);

      const handleHashBuffer = Buffer.concat([
        blobHash,
        encryptionIndex1Byte,
        aclContractAddress20Bytes,
        chainId32Bytes,
      ]);
      const handleHash = new Keccak(256).update(handleHashBuffer).digest();

      const handleBytes32AsBytes = new Uint8Array(32);
      handleBytes32AsBytes.set(handleHash, 0);

      handleBytes32AsBytes[21] = encryptionIndex;
      chainId8Bytes.copy(handleBytes32AsBytes, 22);
      handleBytes32AsBytes[30] = encryptionType;
      handleBytes32AsBytes[31] = ciphertextVersion;

      return handleBytes32AsBytes;
    },
  );

  return handlesBytes32AsBytes;
}


*/  /*
  public static computeHandles(
    ciphertextWithZKProof: Uint8Array,
    fhevmTypes: FhevmType[],
    aclContractAddress: string,
    chainId: number,
    ciphertextVersion: number,
  ): Uint8Array[] {

// Compute input handle (used by provider, must be moved to base)
export function computeInputHandlesBytes32AsBytes(
  ciphertextWithZKProof: Uint8Array | string,
  encryptionTypes: FheType[],
  chainId: number,
  aclContractAddress: string,
  ciphertextVersion: number,
): Uint8Array[] {
  const ciphertextWithZKProofUint8Array: Uint8Array =
    typeof ciphertextWithZKProof === "string" ? EthersT.toBeArray(aclContractAddress) : ciphertextWithZKProof;

  const blobHash = new Keccak(256).update(Buffer.from(ciphertextWithZKProofUint8Array)).digest();
  const aclContractAddress20Bytes = Buffer.from(EthersT.toBeArray(aclContractAddress));

  const chainId32Bytes = Buffer.from(new Uint8Array(toBufferBE(BigInt(chainId), 32)));
  const chainId8Bytes = chainId32Bytes.subarray(24, 32);

  const handlesBytes32AsBytes: Uint8Array[] = encryptionTypes.map(
    (encryptionType: FheType, encryptionIndex: number) => {
      const encryptionIndex1Byte = Buffer.from([encryptionIndex]);

      const handleHashBuffer = Buffer.concat([
        blobHash,
        encryptionIndex1Byte,
        aclContractAddress20Bytes,
        chainId32Bytes,
      ]);
      const handleHash = new Keccak(256).update(handleHashBuffer).digest();

      const handleBytes32AsBytes = new Uint8Array(32);
      handleBytes32AsBytes.set(handleHash, 0);

      handleBytes32AsBytes[21] = encryptionIndex;
      chainId8Bytes.copy(handleBytes32AsBytes, 22);
      handleBytes32AsBytes[30] = encryptionType;
      handleBytes32AsBytes[31] = ciphertextVersion;

      return handleBytes32AsBytes;
    },
  );

  return handlesBytes32AsBytes;
}

*/  //# sourceMappingURL=FhevmHandle.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmContractWrapper",
    ()=>FhevmContractWrapper,
    "FhevmCoprocessorContractWrapper",
    ()=>FhevmCoprocessorContractWrapper,
    "FhevmDecryptionOracleContractWrapper",
    ()=>FhevmDecryptionOracleContractWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FhevmContractWrapper_name;
;
;
class FhevmContractWrapper {
    get name() {
        return __classPrivateFieldGet(this, _FhevmContractWrapper_name, "f");
    }
    get properties() {
        return {
            address: this.address,
            contract: this.readonlyContract,
            package: this.package,
            contractName: this.name
        };
    }
    async _callOrThrow(p, funcName) {
        try {
            return await p;
        } catch (e) {
            console.error("invalid deployed ".concat(this.name, " contact at ").concat(this.address, ". Function ").concat(funcName, " does not exist."));
            throw e;
        }
    }
    constructor(name){
        _FhevmContractWrapper_name.set(this, void 0);
        __classPrivateFieldSet(this, _FhevmContractWrapper_name, name, "f");
    }
}
_FhevmContractWrapper_name = new WeakMap();
class FhevmCoprocessorContractWrapper extends FhevmContractWrapper {
    get package() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_CORE_CONTRACTS_PACKAGE_NAME;
    }
    constructor(name){
        super(name);
    }
}
class FhevmDecryptionOracleContractWrapper extends FhevmContractWrapper {
    get package() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ZAMA_FHE_ORACLE_SOLIDITY_PACKAGE_NAME;
    }
    constructor(name){
        super(name);
    }
} //# sourceMappingURL=FhevmContractWrapper.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/InputVerifier.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputVerifierInterfaceVersion",
    ()=>InputVerifierInterfaceVersion,
    "InputVerifierPartialInterface",
    ()=>InputVerifierPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const InputVerifierInterfaceVersion = "0.8.0-0";
const InputVerifierPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [],
        name: "AlreadySigner",
        type: "error"
    },
    {
        inputs: [],
        name: "AtLeastOneSignerIsRequired",
        type: "error"
    },
    {
        inputs: [],
        name: "DeserializingInputProofFail",
        type: "error"
    },
    {
        inputs: [],
        name: "ECDSAInvalidSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "length",
                type: "uint256"
            }
        ],
        name: "ECDSAInvalidSignatureLength",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }
        ],
        name: "ECDSAInvalidSignatureS",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "EmptyInputProof",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "InitialSignersSetIsEmpty",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidChainId",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidHandleVersion",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidIndex",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInputHandle",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signerRecovered",
                type: "address"
            }
        ],
        name: "InvalidSigner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotASigner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotHostOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "numSignatures",
                type: "uint256"
            }
        ],
        name: "SignatureThresholdNotReached",
        type: "error"
    },
    {
        inputs: [],
        name: "SignaturesVerificationFailed",
        type: "error"
    },
    {
        inputs: [],
        name: "SignerNull",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        inputs: [],
        name: "ZeroSignature",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [],
        name: "EIP712DomainChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "SignerAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "SignerRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "EIP712_INPUT_VERIFICATION_TYPE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "EIP712_INPUT_VERIFICATION_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "addSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "cleanTransientStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "eip712Domain",
        outputs: [
            {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "version",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "verifyingContract",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getCoprocessorSigners",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getHandleVersion",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "getThreshold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "verifyingContractSource",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "chainIDSource",
                type: "uint64"
            },
            {
                internalType: "address[]",
                name: "initialSigners",
                type: "address[]"
            }
        ],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "isSigner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reinitializeV3",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address"
            }
        ],
        name: "removeSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "userAddress",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "contractAddress",
                        type: "address"
                    }
                ],
                internalType: "struct FHEVMExecutor.ContextUserInputs",
                name: "context",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "inputHandle",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "inputProof",
                type: "bytes"
            }
        ],
        name: "verifyCiphertext",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
]); //# sourceMappingURL=InputVerifier.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputVerifier",
    ()=>InputVerifier,
    "computeInputProofHex",
    ()=>computeInputProofHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$InputVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/InputVerifier.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InputVerifier_inputVerifierReadonlyContract, _InputVerifier_inputVerifierContractAddress, _InputVerifier_signersAddresses, _InputVerifier_threshold, _InputVerifier_eip712Domain;
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
class InputVerifier extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, inputVerifierContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(inputVerifierContractAddress, "inputVerifierContractAddress");
        const inputVerifier = new InputVerifier();
        __classPrivateFieldSet(inputVerifier, _InputVerifier_inputVerifierContractAddress, inputVerifierContractAddress, "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_inputVerifierReadonlyContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(inputVerifierContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$InputVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifierPartialInterface"], runner), "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_eip712Domain, properties === null || properties === void 0 ? void 0 : properties.eip712Domain, "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_signersAddresses, properties === null || properties === void 0 ? void 0 : properties.signersAddresses, "f");
        __classPrivateFieldSet(inputVerifier, _InputVerifier_threshold, properties === null || properties === void 0 ? void 0 : properties.threshold, "f");
        await inputVerifier._initialize();
        return inputVerifier;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f") !== undefined, "InputVerifier wrapper is not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f") !== undefined, "InputVerifier wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").interface;
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f") !== undefined, "InputVerifier wrapper is not initialized");
        if (!__classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f")) {
            const signers = await __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").getCoprocessorSigners();
            __classPrivateFieldSet(this, _InputVerifier_signersAddresses, signers, "f");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(__classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f"));
        if (__classPrivateFieldGet(this, _InputVerifier_threshold, "f") === undefined) {
            const threshold = await __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").getThreshold();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint8"])(threshold);
            __classPrivateFieldSet(this, _InputVerifier_threshold, Number(threshold), "f");
        }
        if (__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") === undefined) {
            // ignore extensions
            const eip712Domain = await __classPrivateFieldGet(this, _InputVerifier_inputVerifierReadonlyContract, "f").eip712Domain();
            // Add extra checks (in case EIP712 are changing)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain.length === 7);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[0], "eip712Domain[0]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[1], "eip712Domain[1]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[2], "eip712Domain[2]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint256"])(eip712Domain[3], "eip712Domain[3]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(eip712Domain[4], "eip712Domain[4]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(eip712Domain[5], "eip712Domain[5]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(Array.isArray(eip712Domain[6]) && eip712Domain[6].length === 0, "eip712Domain[6]");
            __classPrivateFieldSet(this, _InputVerifier_eip712Domain, {
                fields: Number(BigInt(eip712Domain[0])),
                name: eip712Domain[1],
                version: eip712Domain[2],
                chainId: eip712Domain[3],
                verifyingContract: eip712Domain[4],
                salt: eip712Domain[5]
            }, "f");
        }
        // Add extra checks (in case EIP712 are chanbging)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").fields === Number(0x0f));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").salt === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").name === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.domain.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.domain.version);
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_inputVerifierContractAddress, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_inputVerifierContractAddress, "f");
    }
    // The InputVerifier is always using the gatewayChainId in its eip712 domain
    get gatewayChainId() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").chainId;
    }
    // The InputVerifier is always using the address of the "InputVerification.sol" contract deployed
    // on the gateway chainId in its eip712 domain
    get gatewayInputVerificationAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f").verifyingContract;
    }
    get eip712Domain() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_eip712Domain, "f");
    }
    getCoprocessorSigners() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_signersAddresses, "f");
    }
    getThreshold() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _InputVerifier_threshold, "f") !== undefined, "InputVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _InputVerifier_threshold, "f");
    }
    async assertMatchCoprocessorSigners(signers) {
        const addresses = this.getCoprocessorSigners();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(signers, "signers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(signers.length === addresses.length, "signers.length === addresses.length");
        for(let i = 0; i < addresses.length; ++i){
            const s = await signers[i].getAddress();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(addresses[i] === s, "addresses[".concat(i, "] === await signers[").concat(i, "].getAddress()"));
        }
    }
    verifySignatures(handlesBytes32List, userAddress, contractAddress, contractChainId, extraData, signatures) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(signatures);
        const domain = this.eip712Domain;
        const recoveredAddresses = signatures.map((signature)=>{
            const sig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(signature);
            const recoveredAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].verifyTypedData({
                name: domain.name,
                version: domain.version,
                chainId: domain.chainId,
                verifyingContract: domain.verifyingContract
            }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.types, {
                ctHandles: handlesBytes32List,
                userAddress,
                contractAddress,
                contractChainId,
                extraData
            }, sig);
            return recoveredAddress;
        });
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThresholdReached"])(this.getCoprocessorSigners(), recoveredAddresses, this.getThreshold(), "coprocessor")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Coprocessor signers threshold is not reached");
        }
    }
    // See: fhevm-gateway/contracts/InputVerification.sol
    createCiphertextVerificationEIP712(handlesBytes32List, contractChainId, contractAddress, userAddress, extraData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(userAddress, "userAddress");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(contractAddress, "contractAddress");
        const domain = this.eip712Domain;
        const eip712 = {
            domain: {
                chainId: domain.chainId,
                name: domain.name,
                version: domain.version,
                verifyingContract: domain.verifyingContract
            },
            types: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INPUT_VERIFICATION_EIP712.types,
            message: {
                ctHandles: handlesBytes32List.map((handle)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(handle), 32)),
                userAddress: userAddress,
                contractAddress: contractAddress,
                contractChainId: contractChainId,
                extraData
            }
        };
        return eip712;
    }
    constructor(){
        super("InputVerifier");
        _InputVerifier_inputVerifierReadonlyContract.set(this, void 0);
        _InputVerifier_inputVerifierContractAddress.set(this, void 0);
        _InputVerifier_signersAddresses.set(this, void 0);
        _InputVerifier_threshold.set(this, void 0);
        _InputVerifier_eip712Domain.set(this, void 0);
    }
}
_InputVerifier_inputVerifierReadonlyContract = new WeakMap(), _InputVerifier_inputVerifierContractAddress = new WeakMap(), _InputVerifier_signersAddresses = new WeakMap(), _InputVerifier_threshold = new WeakMap(), _InputVerifier_eip712Domain = new WeakMap();
function computeInputProofHex(handlesBytes32Hex, coprocessorsSignaturesHex, extraData) {
    const numHandles = handlesBytes32Hex.length;
    const numCoprocessorSigners = coprocessorsSignaturesHex.length;
    const numHandlesHexByte1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHexNoPrefix"])(numHandles);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(numHandlesHexByte1.length === 2); // 1 byte
    const numCoprocessorSignersHexByte1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHexNoPrefix"])(numCoprocessorSigners);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(numCoprocessorSignersHexByte1.length === 2); // 1 byte
    // Compute inputProof
    let inputProofHex = "0x" + numHandlesHexByte1 + numCoprocessorSignersHexByte1;
    // Append the list of handles
    for(let i = 0; i < numHandles; ++i){
        const handlesBytes32HexNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(handlesBytes32Hex[i], "0x");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(handlesBytes32HexNoPrefix.length === 2 * 32);
        inputProofHex += handlesBytes32HexNoPrefix;
    }
    // Append list of coprocessor signatures
    coprocessorsSignaturesHex.map((signatureHex)=>{
        const signatureBytes65HexNoPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePrefix"])(signatureHex, "0x");
        if (signatureBytes65HexNoPrefix.length !== 2 * 65) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid coprocessor signature: ".concat(signatureBytes65HexNoPrefix, ". Invalid length."));
        }
        inputProofHex += signatureBytes65HexNoPrefix;
    });
    // Append the extra data to the input proof
    inputProofHex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].concat([
        inputProofHex,
        extraData
    ]);
    return inputProofHex;
} //# sourceMappingURL=InputVerifier.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/runtime.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns `true` if the Typescript code is running within a node process, `false` otherwise
 */ __turbopack_context__.s([
    "isBunRuntime",
    ()=>isBunRuntime,
    "isNodeRuntime",
    ()=>isNodeRuntime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function isNodeRuntime() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions != null && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node != null;
}
function isBunRuntime() {
    return typeof Bun !== "undefined";
} //# sourceMappingURL=runtime.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canSign",
    ()=>canSign,
    "connectedChainId",
    ()=>connectedChainId,
    "connectedWeb3Client",
    ()=>connectedWeb3Client,
    "getProviderChainId",
    ()=>getProviderChainId,
    "getSignerChainId",
    ()=>getSignerChainId,
    "getWeb3ClientVersion",
    ()=>getWeb3ClientVersion,
    "isReadonlyContract",
    ()=>isReadonlyContract,
    "isReadonlyProvider",
    ()=>isReadonlyProvider,
    "minimalProviderSend",
    ()=>minimalProviderSend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/runtime.js [app-client] (ecmascript)");
;
;
;
async function minimalProviderSend(provider, method, params) {
    let response;
    // Call send first otherwise call request.
    // In case provider is a Hardhat provider, call via send.
    if ("send" in provider && typeof provider.send === "function") {
        response = await provider.send(method, params);
    } else if ("request" in provider && typeof provider.request === "function") {
        response = await provider.request({
            method,
            params
        });
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid provider: must implement request() or send()");
    }
    return response;
}
async function connectedChainId(provider) {
    try {
        return await getProviderChainId(provider);
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProviderError"])(e)) {
            // RPC method not supported
            if (e.code === -32004) {
                throw e;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatError"])(e)) {
            // HH only: cannot connect to specified network
            if (e.number === 108) {
                return undefined;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeRuntime"])()) {
            if (e instanceof Error && "code" in e) {
                // Connection refused, this error can only be catched from a node runtime
                if (e.code === "ECONNREFUSED") {
                    return undefined;
                }
            }
        }
        // Propagate the error
        throw e;
    }
}
async function getProviderChainId(provider) {
    const chainIdHex = await minimalProviderSend(provider, "eth_chainId", []);
    return Number(BigInt(chainIdHex));
}
async function connectedWeb3Client(provider) {
    try {
        return {
            client: await getWeb3ClientVersion(provider),
            couldNotConnect: false
        };
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatProviderError"])(e)) {
            // RPC method not supported
            if (e.code === -32004) {
                return {
                    client: undefined,
                    couldNotConnect: false
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardhatError"])(e)) {
            // HH only: cannot connect to specified network
            if (e.number === 108) {
                return {
                    client: undefined,
                    couldNotConnect: true
                };
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeRuntime"])()) {
            if (e instanceof Error && "code" in e) {
                // Connection refused, this error can only be catched from a node runtime
                if (e.code === "ECONNREFUSED") {
                    return {
                        client: undefined,
                        couldNotConnect: true
                    };
                }
            }
        }
        // Propagate the error
        throw e;
    }
}
async function getWeb3ClientVersion(provider) {
    return minimalProviderSend(provider, "web3_clientVersion", []);
}
async function getSignerChainId(signer) {
    const provider = signer.provider;
    if (!provider) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unable to determine signer provider");
    }
    const network = await provider.getNetwork();
    return Number(network.chainId);
}
function canSign(obj) {
    if (!obj) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid argument");
    }
    const isDirectSigner = typeof obj.signTransaction === "function";
    const canProduceSigner = typeof obj.getSigner === "function";
    return isDirectSigner || canProduceSigner;
}
function isReadonlyContract(contract) {
    return !canSign(contract.runner);
}
function isReadonlyProvider(obj) {
    if (!obj) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid argument");
    }
    return !canSign(obj) && typeof obj.estimateGas === "function" && typeof obj.call === "function" && typeof obj.getBlock === "function" && typeof obj.getNetwork === "function" && typeof obj.getCode === "function";
} //# sourceMappingURL=provider.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/methods.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FHEVM_AWAIT_DECRYPTION_ORACLE",
    ()=>FHEVM_AWAIT_DECRYPTION_ORACLE,
    "FHEVM_CREATE_DECRYPTION_SIGNATURES",
    ()=>FHEVM_CREATE_DECRYPTION_SIGNATURES,
    "FHEVM_GET_CLEAR_TEXT",
    ()=>FHEVM_GET_CLEAR_TEXT,
    "RELAYER_METADATA",
    ()=>RELAYER_METADATA,
    "RELAYER_V1_INPUT_PROOF",
    ()=>RELAYER_V1_INPUT_PROOF,
    "RELAYER_V1_PUBLIC_DECRYPT",
    ()=>RELAYER_V1_PUBLIC_DECRYPT,
    "RELAYER_V1_USER_DECRYPT",
    ()=>RELAYER_V1_USER_DECRYPT
]);
const RELAYER_METADATA = "fhevm_relayer_metadata";
const RELAYER_V1_PUBLIC_DECRYPT = "fhevm_relayer_v1_public_decrypt";
const RELAYER_V1_USER_DECRYPT = "fhevm_relayer_v1_user_decrypt";
const RELAYER_V1_INPUT_PROOF = "fhevm_relayer_v1_input_proof";
const FHEVM_GET_CLEAR_TEXT = "fhevm_getClearText";
const FHEVM_AWAIT_DECRYPTION_ORACLE = "fhevm_awaitDecryptionOracle";
const FHEVM_CREATE_DECRYPTION_SIGNATURES = "fhevm_createDecryptionSignatures"; //# sourceMappingURL=methods.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsRelayerMetadata",
    ()=>assertIsRelayerMetadata,
    "assertIsRelayerV1InputProofPayload",
    ()=>assertIsRelayerV1InputProofPayload,
    "assertIsRelayerV1InputProofResponse",
    ()=>assertIsRelayerV1InputProofResponse,
    "assertIsRelayerV1PublicDecryptPayload",
    ()=>assertIsRelayerV1PublicDecryptPayload,
    "assertIsRelayerV1PublicDecryptResponse",
    ()=>assertIsRelayerV1PublicDecryptResponse,
    "assertIsRelayerV1UserDecryptPayload",
    ()=>assertIsRelayerV1UserDecryptPayload,
    "assertIsRelayerV1UserDecryptResponse",
    ()=>assertIsRelayerV1UserDecryptResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
;
;
;
function _assertIsRelayerV1UserDecryptValidity(value) {
    const stringFields = [
        "durationDays",
        "startTimestamp"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringFields, "RelayerV1UserDecryptValidity");
}
function assertIsRelayerV1InputProofPayload(value) {
    const stringFields = [
        "contractAddress",
        "userAddress",
        "ciphertextWithInputVerification",
        "contractChainId",
        "extraData"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringFields, "RelayerV1InputProofPayload");
}
function assertIsRelayerV1InputProofResponse(value) {
    const keys = [
        "handles",
        "signatures"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value, keys, "RelayerV1InputProofResponse");
}
function assertIsRelayerV1PublicDecryptPayload(value) {
    const arrayKeys = [
        "ciphertextHandles"
    ];
    const stringKeys = [
        "extraData"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value, arrayKeys, "RelayerV1PublicDecryptPayload");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1PublicDecryptResponse");
}
function assertIsRelayerV1PublicDecryptResponse(value) {
    const arrayKeys = [
        "signatures"
    ];
    const stringKeys = [
        "decrypted_value"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value, arrayKeys, "RelayerV1PublicDecryptResponse");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1PublicDecryptResponse");
}
function assertIsRelayerV1UserDecryptResponse(value) {
    const stringKeys = [
        "signature"
    ];
    const objectKeys = [
        "payload"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1UserDecryptResponse");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsObjectProperty"])(value, objectKeys, "RelayerV1UserDecryptResponse");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringArrayProperty"])(value.payload, [
        "decrypted_values"
    ], "RelayerV1UserDecryptResponse");
}
function assertIsRelayerV1UserDecryptPayload(value) {
    const arrayKeys = [
        "handleContractPairs",
        "contractAddresses"
    ];
    const stringKeys = [
        "contractsChainId",
        "publicKey",
        "signature",
        "userAddress",
        "extraData"
    ];
    const objectKeys = [
        "requestValidity"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerV1UserDecryptPayload");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArrayProperty"])(value, arrayKeys, "RelayerV1UserDecryptPayload");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsObjectProperty"])(value, objectKeys, "RelayerV1UserDecryptPayload");
    _assertIsRelayerV1UserDecryptValidity(value.requestValidity);
}
function assertIsRelayerMetadata(value) {
    const stringKeys = [
        "version"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "RelayerMetadata");
    const keys = [
        "ACLAddress",
        "CoprocessorAddress",
        "InputVerifierAddress",
        "KMSVerifierAddress",
        "relayerSignerAddress"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressProperty"])(value, keys, "RelayerMetadata");
} //# sourceMappingURL=payloads.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/mock_payloads.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsMockRelayerV1InputProofPayload",
    ()=>assertIsMockRelayerV1InputProofPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)");
;
;
;
;
;
function assertIsMockRelayerV1InputProofPayload(value) {
    const objectKeys = [
        "mockData"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1InputProofPayload"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsObjectProperty"])(value, objectKeys, "MockRelayerV1InputProofPayload");
    _assertIsMockRelayerData(value.mockData);
}
function _assertIsMockRelayerData(value) {
    const arrayKeys = [
        "clearTextValuesBigIntHex",
        "metadatas",
        "fheTypes",
        "fhevmTypes",
        "random32List"
    ];
    const stringKeys = [
        "aclContractAddress"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsStringProperty"])(value, stringKeys, "MockRelayerData");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArrayProperty"])(value, arrayKeys, "MockRelayerData");
} //# sourceMappingURL=mock_payloads.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestFhevmAwaitDecryptionOracle",
    ()=>requestFhevmAwaitDecryptionOracle,
    "requestFhevmCreateDecryptionSignatures",
    ()=>requestFhevmCreateDecryptionSignatures,
    "requestFhevmGetClearText",
    ()=>requestFhevmGetClearText,
    "requestRelayerMetadata",
    ()=>requestRelayerMetadata,
    "requestRelayerV1InputProof",
    ()=>requestRelayerV1InputProof,
    "requestRelayerV1PublicDecrypt",
    ()=>requestRelayerV1PublicDecrypt,
    "requestRelayerV1UserDecrypt",
    ()=>requestRelayerV1UserDecrypt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/methods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$mock_payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/mock_payloads.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/payloads.js [app-client] (ecmascript)");
;
;
;
;
async function requestRelayerV1InputProof(relayerProvider, payload) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$mock_payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsMockRelayerV1InputProofPayload"])(payload);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_INPUT_PROOF"], [
        payload
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1InputProofResponse"])(response);
    return response;
}
async function requestRelayerV1UserDecrypt(relayerProvider, payload) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1UserDecryptPayload"])(payload);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_USER_DECRYPT"], [
        payload
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1UserDecryptResponse"])(response);
    return {
        response: [
            response
        ]
    };
}
async function requestRelayerV1PublicDecrypt(relayerProvider, payload) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1PublicDecryptPayload"])(payload);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_V1_PUBLIC_DECRYPT"], [
        payload
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerV1PublicDecryptResponse"])(response);
    return {
        response: [
            response
        ]
    };
}
async function requestRelayerMetadata(relayerProvider) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_METADATA"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$payloads$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsRelayerMetadata"])(response);
    return response;
}
async function requestFhevmAwaitDecryptionOracle(relayerProvider) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_AWAIT_DECRYPTION_ORACLE"], []);
}
async function requestFhevmGetClearText(relayerProvider, payload) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_GET_CLEAR_TEXT"], [
        payload
    ]);
}
async function requestFhevmCreateDecryptionSignatures(relayerProvider, payload) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimalProviderSend"])(relayerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FHEVM_CREATE_DECRYPTION_SIGNATURES"], [
        payload
    ]);
} //# sourceMappingURL=MockRelayer.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockRelayerEncryptedInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockRelayerEncryptedInput",
    ()=>MockRelayerEncryptedInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FheType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MockRelayerEncryptedInput_clearTextValues, _MockRelayerEncryptedInput_fhevmTypes, _MockRelayerEncryptedInput_fheTypes, _MockRelayerEncryptedInput_totalFheBits, _MockRelayerEncryptedInput_contractChainId, _MockRelayerEncryptedInput_contractAddress, _MockRelayerEncryptedInput_userAddress, _MockRelayerEncryptedInput_relayerProvider, _MockRelayerEncryptedInput_aclContractAddress, _MockRelayerEncryptedInput_inputVerifier;
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
class MockRelayerEncryptedInput {
    get userAddress() {
        return __classPrivateFieldGet(this, _MockRelayerEncryptedInput_userAddress, "f");
    }
    get contractAddress() {
        return __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractAddress, "f");
    }
    _checkAddFheBits(fheBitLen) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(fheBitLen >= 0);
        if (__classPrivateFieldGet(this, _MockRelayerEncryptedInput_totalFheBits, "f") + fheBitLen > MockRelayerEncryptedInput.MAX_FHE_BITS) {
            throw Error("Packing more than 2048 bits in a single input ciphertext is unsupported");
        }
        if (__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length + 1 > MockRelayerEncryptedInput.MAX_VAR_COUNT) {
            throw Error("Packing more than 256 variables in a single input ciphertext is unsupported");
        }
    }
    _addClearTextValueFheBitsPair(clearTextValue, fhevmType) {
        // Bool = 2
        const fheType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmTypeToFheType"])(fhevmType);
        const fheBitLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeBitLength"])(fheType);
        this._checkAddFheBits(fheBitLen);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f").push(fhevmType);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f").push(fheType);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").push(clearTextValue);
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_totalFheBits, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_totalFheBits, "f") + fheBitLen, "f");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length <= MockRelayerEncryptedInput.MAX_VAR_COUNT);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_totalFheBits, "f") <= MockRelayerEncryptedInput.MAX_FHE_BITS);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length === __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f").length);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length === __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f").length);
    }
    _addBytes(clearTextValue, fhevmType) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEbytes"])(fhevmType));
        const fhevmTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(fhevmType);
        const fheBitLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeBitLength"])(fhevmTypeInfo.fheType);
        const clearTextBitLen = fhevmTypeInfo.clearTextBitLength;
        // For bytes, cleatText bit length and cypherText bit length are the same
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(clearTextBitLen === fheBitLen);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(fheBitLen % 8 === 0);
        const fheByteLen = fheBitLen / 8;
        if (clearTextValue.length > fheByteLen) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Uncorrect length of input Uint8Array, should be ".concat(fheByteLen, " for an ").concat(fhevmTypeInfo.name));
        }
        const clearTextValueBigInt = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(clearTextValue);
        const maxClearTextValueBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxBigInt"])(clearTextBitLen);
        //const clearTextValueBigInt : bigint = bytesToBigInt(clearTextValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(clearTextValue.length * 8 === fheBitLen);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(clearTextValueBigInt <= maxClearTextValueBigInt);
        this._addClearTextValueFheBitsPair(clearTextValueBigInt, fhevmType);
        return this;
    }
    _addUint(clearTextValue, fhevmzType) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmEuint"])(fhevmzType));
        const fhevmTypeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFhevmTypeInfo"])(fhevmzType);
        const clearTextBitLen = fhevmTypeInfo.clearTextBitLength;
        if (clearTextValue < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid unsigned integer value ".concat(clearTextValue));
        }
        const clearTextValueBigInt = BigInt(clearTextValue);
        const maxClearTextValueBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxBigInt"])(clearTextBitLen);
        if (clearTextValueBigInt > maxClearTextValueBigInt) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid ".concat(fhevmTypeInfo.solidityTypeName, " value: ").concat(clearTextValue, ", it exceeds the maximum allowed value of ").concat(maxClearTextValueBigInt, "."));
        }
        this._addClearTextValueFheBitsPair(clearTextValueBigInt, fhevmzType);
        return this;
    }
    // Accepts : 0, 1, true, false
    addBool(value) {
        const zeroOrOneBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolToBigInt"])(value);
        this._addClearTextValueFheBitsPair(zeroOrOneBigInt, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebool);
        return this;
    }
    add8(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint8);
    }
    add16(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint16);
    }
    add32(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint32);
    }
    add64(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint64);
    }
    add128(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint128);
    }
    addAddress(value) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(value)) {
            throw new Error("Invalid address value: ${value}.");
        }
        const clearTextValue = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(value);
        this._addClearTextValueFheBitsPair(clearTextValue, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].eaddress);
        return this;
    }
    add256(value) {
        return this._addUint(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint256);
    }
    addBytes64(value) {
        return this._addBytes(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes64);
    }
    addBytes128(value) {
        return this._addBytes(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes128);
    }
    addBytes256(value) {
        return this._addBytes(value, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes256);
    }
    _toMockFhevmRelayerV1InputProofPayload(extraData) {
        const numHandles = __classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f").length;
        const clearTextValuesBigIntHex = [];
        const clearTextValuesBigInt = [];
        const rand32BufferList = [];
        const metadatas = [];
        //const randomBytes = EthersT.getBytes("0xd3f33f613ae8521e98fe2aa43bd0c6ad37d81c388c93460b78683e692602b981");
        for(let i = 0; i < numHandles; ++i){
            const clearTextValueBigInt = BigInt(__classPrivateFieldGet(this, _MockRelayerEncryptedInput_clearTextValues, "f")[i]);
            clearTextValuesBigInt.push(clearTextValueBigInt);
            clearTextValuesBigIntHex.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(clearTextValueBigInt));
            rand32BufferList.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].randomBytes(32));
            //rand32BufferList.push(randomBytes);
            metadatas.push({
                blockNumber: 0,
                index: 0,
                transactionHash: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash
            });
        }
        const mockCiphertextWithInputVerification = MockRelayerEncryptedInput._computeMockCiphertextWithZKProof(clearTextValuesBigInt, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f"), rand32BufferList);
        const mockData = {
            clearTextValuesBigIntHex,
            metadatas,
            fheTypes: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fheTypes, "f"),
            fhevmTypes: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f"),
            aclContractAddress: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_aclContractAddress, "f"),
            random32List: rand32BufferList.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify)
        };
        const mockPayload = {
            contractAddress: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractAddress, "f"),
            userAddress: __classPrivateFieldGet(this, _MockRelayerEncryptedInput_userAddress, "f"),
            ciphertextWithInputVerification: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].hexlify(mockCiphertextWithInputVerification),
            contractChainId: "0x" + __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractChainId, "f").toString(16),
            extraData,
            mockData
        };
        return mockPayload;
    }
    static _computeMockCiphertextWithZKProof(clearTextValuesBigInt, fheTypes, rand32BufferList) {
        let encrypted = new Uint8Array(0);
        const numHandles = clearTextValuesBigInt.length;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(rand32BufferList.length === numHandles);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(fheTypes.length === numHandles);
        // 1. Build the typed values hash
        for(let i = 0; i < numHandles; ++i){
            /*
              type + value as bigint + random(32)
            */ const clearTextValueBigInt = clearTextValuesBigInt[i];
            const fheByteLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FheType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFheTypeByteLength"])(fheTypes[i]);
            const fheType1Byte = new Uint8Array([
                fheTypes[i]
            ]);
            const clearTextValueXXBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uintToBytes"])(clearTextValueBigInt, fheByteLen);
            const rand32Buffer = rand32BufferList[i];
            // concatenate 32 random bytes at the end of buffer to simulate encryption noise
            encrypted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(encrypted, fheType1Byte, clearTextValueXXBytes, rand32Buffer);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].keccak256(encrypted));
    }
    async encrypt() {
        const extraData = "0x00";
        /*
          Mock equivalent to https://github.com/zama-ai/fhevm-js/blob/main/src/relayer/sendEncryption.ts
    
          From sendEncryption.ts:
          =======================
    
            const bits = input.getBits();
            const ciphertext = input.encrypt();
            const payload = {
              contractAddress: getAddress(contractAddress),
              userAddress: getAddress(userAddress),
              ciphertextWithInputVerification: toHexString(ciphertext),
              contractChainId: '0x' + chainId.toString(16),
            };
    
        */ const payload = this._toMockFhevmRelayerV1InputProofPayload(extraData);
        const mockCiphertextWithZKProof = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getBytes(payload.ciphertextWithInputVerification);
        /*
          Mock equivalent to https://github.com/zama-ai/fhevm-js/blob/main/src/relayer/sendEncryption.ts
    
            const url = `${relayerUrl}/v1/input-proof`;
            ...
            const response = await fetch(url, options);
            ...
    
          Will add the clear values to the mock database.
        */ /*
          const payload = {
              contractAddress: getAddress(contractAddress),
              userAddress: getAddress(userAddress),
              ciphertextWithInputVerification: toHexString(ciphertext),
              contractChainId: '0x' + chainId.toString(16),
            };
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            };
        */ const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1InputProof"](__classPrivateFieldGet(this, _MockRelayerEncryptedInput_relayerProvider, "f"), payload);
        const handlesBytes32List = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].computeHandles(mockCiphertextWithZKProof, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_fhevmTypes, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_aclContractAddress, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractChainId, "f"), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].FHEVM_HANDLE_VERSION);
        __classPrivateFieldGet(this, _MockRelayerEncryptedInput_inputVerifier, "f").verifySignatures(handlesBytes32List, __classPrivateFieldGet(this, _MockRelayerEncryptedInput_userAddress, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractAddress, "f"), __classPrivateFieldGet(this, _MockRelayerEncryptedInput_contractChainId, "f"), extraData, response.signatures);
        const inputProofHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeInputProofHex"])(response.handles, response.signatures, extraData);
        return {
            handles: handlesBytes32List,
            inputProof: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeArray(inputProofHex)
        };
    }
    getBits() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("ZKInput interface method: Not supported in mock mode");
    }
    constructor(relayerProvider, contractChainId, contractAddress, userAddress, aclContractAddress, inputVerifier){
        _MockRelayerEncryptedInput_clearTextValues.set(this, []);
        _MockRelayerEncryptedInput_fhevmTypes.set(this, []);
        _MockRelayerEncryptedInput_fheTypes.set(this, []);
        _MockRelayerEncryptedInput_totalFheBits.set(this, 0);
        _MockRelayerEncryptedInput_contractChainId.set(this, void 0);
        _MockRelayerEncryptedInput_contractAddress.set(this, void 0);
        _MockRelayerEncryptedInput_userAddress.set(this, void 0);
        _MockRelayerEncryptedInput_relayerProvider.set(this, void 0);
        _MockRelayerEncryptedInput_aclContractAddress.set(this, void 0);
        _MockRelayerEncryptedInput_inputVerifier.set(this, void 0);
        // Check if chainId exceeds 8 bytes
        if (BigInt(contractChainId) > __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_UINT64"]) {
            throw new Error("ChainId exceeds maximum allowed value (8 bytes)"); // fhevm assumes chainID is only taking up to 8 bytes
        }
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_relayerProvider, relayerProvider, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_contractChainId, contractChainId, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_contractAddress, contractAddress, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_userAddress, userAddress, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_aclContractAddress, aclContractAddress, "f");
        __classPrivateFieldSet(this, _MockRelayerEncryptedInput_inputVerifier, inputVerifier, "f");
    }
}
_MockRelayerEncryptedInput_clearTextValues = new WeakMap(), _MockRelayerEncryptedInput_fhevmTypes = new WeakMap(), _MockRelayerEncryptedInput_fheTypes = new WeakMap(), _MockRelayerEncryptedInput_totalFheBits = new WeakMap(), _MockRelayerEncryptedInput_contractChainId = new WeakMap(), _MockRelayerEncryptedInput_contractAddress = new WeakMap(), _MockRelayerEncryptedInput_userAddress = new WeakMap(), _MockRelayerEncryptedInput_relayerProvider = new WeakMap(), _MockRelayerEncryptedInput_aclContractAddress = new WeakMap(), _MockRelayerEncryptedInput_inputVerifier = new WeakMap();
Object.defineProperty(MockRelayerEncryptedInput, "MAX_FHE_BITS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2048
});
Object.defineProperty(MockRelayerEncryptedInput, "MAX_VAR_COUNT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 256
}); //# sourceMappingURL=MockRelayerEncryptedInput.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/KMSVerifier.itf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KMSVerifierInterfaceVersion",
    ()=>KMSVerifierInterfaceVersion,
    "KMSVerifierPartialInterface",
    ()=>KMSVerifierPartialInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const KMSVerifierInterfaceVersion = "0.8.0-0";
const KMSVerifierPartialInterface = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Interface([
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [],
        name: "DeserializingDecryptionProofFail",
        type: "error"
    },
    {
        inputs: [],
        name: "ECDSAInvalidSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "length",
                type: "uint256"
            }
        ],
        name: "ECDSAInvalidSignatureLength",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }
        ],
        name: "ECDSAInvalidSignatureS",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "ERC1967InvalidImplementation",
        type: "error"
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error"
    },
    {
        inputs: [],
        name: "EmptyDecryptionProof",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedCall",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error"
    },
    {
        inputs: [],
        name: "KMSAlreadySigner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "invalidSigner",
                type: "address"
            }
        ],
        name: "KMSInvalidSigner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "numSignatures",
                type: "uint256"
            }
        ],
        name: "KMSSignatureThresholdNotReached",
        type: "error"
    },
    {
        inputs: [],
        name: "KMSSignerNull",
        type: "error"
    },
    {
        inputs: [],
        name: "KMSZeroSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "NotHostOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error"
    },
    {
        inputs: [],
        name: "NotInitializingFromEmptyProxy",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [],
        name: "SignersSetIsEmpty",
        type: "error"
    },
    {
        inputs: [],
        name: "ThresholdIsAboveNumberOfSigners",
        type: "error"
    },
    {
        inputs: [],
        name: "ThresholdIsNull",
        type: "error"
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32"
            }
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [],
        name: "EIP712DomainChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64"
            }
        ],
        name: "Initialized",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "newKmsSignersSet",
                type: "address[]"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newThreshold",
                type: "uint256"
            }
        ],
        name: "NewContextSet",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferStarted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "DECRYPTION_RESULT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "EIP712_PUBLIC_DECRYPT_TYPE",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "newSignersSet",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "newThreshold",
                type: "uint256"
            }
        ],
        name: "defineNewContext",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "eip712Domain",
        outputs: [
            {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "version",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "verifyingContract",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getKmsSigners",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getThreshold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "verifyingContractSource",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "chainIDSource",
                type: "uint64"
            },
            {
                internalType: "address[]",
                name: "initialSigners",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "initialThreshold",
                type: "uint256"
            }
        ],
        name: "initializeFromEmptyProxy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "isSigner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reinitializeV3",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "threshold",
                type: "uint256"
            }
        ],
        name: "setThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "handlesList",
                type: "bytes32[]"
            },
            {
                internalType: "bytes",
                name: "decryptedResult",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "decryptionProof",
                type: "bytes"
            }
        ],
        name: "verifyDecryptionEIP712KMSSignatures",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
]); //# sourceMappingURL=KMSVerifier.itf.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KMSVerifier",
    ()=>KMSVerifier,
    "computeDecryptionCallbackSignaturesAndCalldata",
    ()=>computeDecryptionCallbackSignaturesAndCalldata,
    "computeDecryptionSignatures",
    ()=>computeDecryptionSignatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/FhevmType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/FhevmContractWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$KMSVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/interfaces/KMSVerifier.itf.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _KMSVerifier_kmsVerifierContract, _KMSVerifier_kmsVerifierContractAddress, _KMSVerifier_signersAddresses, _KMSVerifier_threshold, _KMSVerifier_eip712Domain;
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
class KMSVerifier extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$FhevmContractWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmCoprocessorContractWrapper"] {
    static async create(runner, kmsVerifierContractAddress, abi, properties) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(kmsVerifierContractAddress, "kmsVerifierContractAddress");
        if (properties !== undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not yet implemented");
        }
        const kmsVerifier = new KMSVerifier();
        __classPrivateFieldSet(kmsVerifier, _KMSVerifier_kmsVerifierContractAddress, kmsVerifierContractAddress, "f");
        __classPrivateFieldSet(kmsVerifier, _KMSVerifier_kmsVerifierContract, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(kmsVerifierContractAddress, abi !== null && abi !== void 0 ? abi : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$interfaces$2f$KMSVerifier$2e$itf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifierPartialInterface"], runner), "f");
        await kmsVerifier._initialize();
        return kmsVerifier;
    }
    get readonlyContract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f") !== undefined, "KMSVerifier wrapper is not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f");
    }
    get interface() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f") !== undefined, "KMSVerifier wrapper is not yet initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").interface;
    }
    async _initialize() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f") !== undefined, "KMSVerifier wrapper is not initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_signersAddresses, "f") === undefined, "KMSVerifier wrapper already initialized");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_threshold, "f") === undefined, "KMSVerifier wrapper already initialized");
        const signers = await __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").getKmsSigners();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(signers);
        __classPrivateFieldSet(this, _KMSVerifier_signersAddresses, signers, "f");
        const threshold = await __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").getThreshold();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint8"])(threshold);
        __classPrivateFieldSet(this, _KMSVerifier_threshold, Number(threshold), "f");
        if (__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") === undefined) {
            // ignore extensions
            const eip712Domain = await __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContract, "f").eip712Domain();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712Domain.length === 7);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[0], "eip712Domain[0]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[1], "eip712Domain[1]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsString"])(eip712Domain[2], "eip712Domain[2]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBigUint256"])(eip712Domain[3], "eip712Domain[3]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(eip712Domain[4], "eip712Domain[4]");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsBytes32String"])(eip712Domain[5], "eip712Domain[5]");
            __classPrivateFieldSet(this, _KMSVerifier_eip712Domain, {
                fields: Number(BigInt(eip712Domain[0])),
                name: eip712Domain[1],
                version: eip712Domain[2],
                chainId: eip712Domain[3],
                verifyingContract: eip712Domain[4],
                salt: eip712Domain[5]
            }, "f");
        }
        // Add extra checks (in case EIP712 are chanbging)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").fields === Number(0x0f));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").salt === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").name === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.version);
    }
    get address() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContractAddress, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_kmsVerifierContractAddress, "f");
    }
    // The KMSVerifier is always using the gatewayChainId in its eip712 domain
    get gatewayChainId() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").chainId;
    }
    // The KMSVerifier is always using the address of the "Decryption.sol" contract deployed
    // on the gateway chainId in its eip712 domain
    get gatewayDecryptionAddress() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f").verifyingContract;
    }
    get eip712Domain() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_eip712Domain, "f");
    }
    getKmsSignersAddresses() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_signersAddresses, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_signersAddresses, "f");
    }
    async assertMatchKmsSigners(signers) {
        const addresses = this.getKmsSignersAddresses();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsArray"])(signers, "signers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(signers.length === addresses.length, "signers.length === addresses.length");
        for(let i = 0; i < addresses.length; ++i){
            const s = await signers[i].getAddress();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(addresses[i] === s, "addresses[".concat(i, "] === await signers[").concat(i, "].getAddress()"));
        }
    }
    getThreshold() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _KMSVerifier_threshold, "f") !== undefined, "KMSVerifier wrapper not initialized");
        return __classPrivateFieldGet(this, _KMSVerifier_threshold, "f");
    }
    createPublicDecryptVerificationEIP712(handlesBytes32List, decryptedResult, extraData) {
        const domain = this.eip712Domain;
        const eip712 = {
            domain: {
                chainId: domain.chainId,
                name: domain.name,
                version: domain.version,
                verifyingContract: domain.verifyingContract
            },
            types: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.types,
            message: {
                ctHandles: handlesBytes32List,
                decryptedResult: decryptedResult,
                extraData
            }
        };
        return eip712;
    }
    constructor(){
        super("KMSVerifier");
        _KMSVerifier_kmsVerifierContract.set(this, void 0);
        _KMSVerifier_kmsVerifierContractAddress.set(this, void 0);
        _KMSVerifier_signersAddresses.set(this, void 0);
        _KMSVerifier_threshold.set(this, void 0);
        _KMSVerifier_eip712Domain.set(this, void 0);
    }
}
_KMSVerifier_kmsVerifierContract = new WeakMap(), _KMSVerifier_kmsVerifierContractAddress = new WeakMap(), _KMSVerifier_signersAddresses = new WeakMap(), _KMSVerifier_threshold = new WeakMap(), _KMSVerifier_eip712Domain = new WeakMap();
async function computeDecryptionSignatures(handlesBytes32Hex, clearTextValues, extraData, abiCoder, kmsVerifier, kmsSigners) {
    const fhevmHandles = handlesBytes32Hex.map((handleBytes32Hex)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmHandle"].fromBytes32Hex(handleBytes32Hex));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(handlesBytes32Hex.length === clearTextValues.length);
    const abiTypes = [];
    const abiValues = [];
    for(let i = 0; i < handlesBytes32Hex.length; ++i){
        let clearTextValue = clearTextValues[i];
        if (typeof clearTextValue === "boolean") {
            clearTextValue = clearTextValue ? "0x01" : "0x00";
        }
        const clearTextValueBigInt = BigInt(clearTextValue);
        const fhevmTypeInfo = fhevmHandles[i].fhevmTypeInfo;
        abiTypes.push(fhevmTypeInfo.solidityTypeName);
        switch(fhevmTypeInfo.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].eaddress:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(40, "0")));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebool:
                {
                    // bigint (0 or 1)
                    abiValues.push(clearTextValueBigInt);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint4:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint8:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint16:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint32:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint64:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint128:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].euint256:
                {
                    // bigint
                    abiValues.push(clearTextValueBigInt);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes64:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(128, "0")));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes128:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(256, "0")));
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$FhevmType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmType"].ebytes256:
                {
                    // string
                    abiValues.push("0x".concat(clearTextValueBigInt.toString(16).padStart(512, "0")));
                    break;
                }
            default:
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Unsupported Fhevm primitive type id: ".concat(fhevmTypeInfo.type, ", name: ").concat(fhevmTypeInfo.name, ", solidity: ").concat(fhevmTypeInfo.solidityTypeName));
                }
        }
    }
    // 1. 31 is just a dummy uint256 requestID to get correct abi encoding for the remaining arguments
    //    (i.e everything except the requestID)
    // 2. Adding also a dummy empty array of bytes for correct abi-encoding when used with signatures
    const encodedData = abiCoder.encode([
        "uint256",
        ...abiTypes,
        "bytes[]"
    ], [
        31,
        ...abiValues,
        []
    ]);
    // 1. We pop the dummy requestID to get the correct value to pass for `decryptedCts`
    // 2. We also pop the last 32 bytes (empty bytes[])
    const decryptedResult = "0x" + encodedData.slice(66).slice(0, -64);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(decryptedResult === "0x" + encodedData.slice(66, -64), "decryptedResult === '0x' + encodedData.slice(66, -64)");
    const eip712 = kmsVerifier.createPublicDecryptVerificationEIP712(handlesBytes32Hex, decryptedResult, extraData);
    const decryptResultsEIP712signatures = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiSignEIP712"])(kmsSigners, eip712.domain, eip712.types, eip712.message);
    return {
        signatures: decryptResultsEIP712signatures,
        types: abiTypes,
        values: abiValues,
        decryptedResult
    };
}
async function computeDecryptionCallbackSignaturesAndCalldata(handlesBytes32Hex, clearTextValuesString, extraData, requestID, callbackSelectorBytes4Hex, abiCoder, kmsVerifier, kmsSigners) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(extraData === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
        "uint8"
    ], [
        0
    ]), "extraData must be 0x00");
    const { signatures, types, values } = await computeDecryptionSignatures(handlesBytes32Hex, clearTextValuesString, extraData, abiCoder, kmsVerifier, kmsSigners);
    // Build the decryptionProof as numSigners + KMS signatures + extraData
    const packedNumSigners = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
        "uint8"
    ], [
        signatures.length
    ]);
    const packedSignatures = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked(Array(signatures.length).fill("bytes"), signatures);
    const decryptionProof = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].concat([
        packedNumSigners,
        packedSignatures,
        extraData
    ]);
    // ABI encode the list of values in order to pass them in the callback
    const encodedCleartexts = abiCoder.encode([
        ...types
    ], [
        ...values
    ]);
    const calldata = callbackSelectorBytes4Hex + abiCoder.encode([
        "uint256",
        "bytes",
        "bytes"
    ], [
        requestID,
        encodedCleartexts,
        decryptionProof
    ]).slice(2);
    return {
        calldata
    };
} //# sourceMappingURL=KMSVerifier.js.map
}),
"[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockFhevmInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockFhevmInstance",
    ()=>MockFhevmInstance
]);
/*
    WARNING : Never import the "hardhat" package!
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/ethers/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$decryptUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/decryptUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$publicDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/publicDecrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/relayer/userDecrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/relayer-sdk/sdk/keypair.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockRelayerEncryptedInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/MockRelayerEncryptedInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/InputVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/contracts/KMSVerifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/fhevm/relayer/MockRelayer.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MockFhevmInstance_relayerProvider, _MockFhevmInstance_readonlyEthersProvider, _MockFhevmInstance_chainId, _MockFhevmInstance_gatewayChainId, _MockFhevmInstance_verifyingContractAddressInputVerification, _MockFhevmInstance_verifyingContractAddressDecryption, _MockFhevmInstance_contractsChainId, _MockFhevmInstance_aclContractAddress, _MockFhevmInstance_kmsVerifier, _MockFhevmInstance_inputVerifier, _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc;
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
class MockFhevmInstance {
    get chainId() {
        return __classPrivateFieldGet(this, _MockFhevmInstance_chainId, "f");
    }
    static async create(relayerProvider, readonlyEthersProvider, config) {
        const kmsVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$KMSVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KMSVerifier"].create(readonlyEthersProvider, config.kmsContractAddress);
        const inputVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$contracts$2f$InputVerifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVerifier"].create(readonlyEthersProvider, config.inputVerifierContractAddress);
        const instance = new MockFhevmInstance(config, {
            relayerProvider,
            readonlyEthersProvider,
            inputVerifier,
            kmsVerifier
        });
        return instance;
    }
    static createEIP712(publicKey, contractAddresses, startTimestamp, durationDays, verifyingContractAddressDecryption, contractsChainId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(contractAddresses, "contractAddresses");
        const eip712Func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEIP712"])(verifyingContractAddressDecryption, contractsChainId);
        const eip712 = eip712Func(publicKey, contractAddresses, startTimestamp, durationDays);
        //Debug Make sure we are in sync with KMSVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.version.toString());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.name === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.name);
        return eip712;
    }
    // Create EIP712 for decryption
    createEIP712(publicKey, contractAddresses, startTimestamp, durationDays) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddressArray"])(contractAddresses, "contractAddresses");
        const eip712 = __classPrivateFieldGet(this, _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc, "f").call(this, publicKey, contractAddresses, startTimestamp, durationDays);
        //Debug Make sure we are in sync with KMSVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(__classPrivateFieldGet(this, _MockFhevmInstance_gatewayChainId, "f")) === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.chainId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.verifyingContract === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.verifyingContract);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.version === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.version);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(eip712.domain.name === __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").eip712Domain.name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(eip712.domain.chainId) === BigInt(__classPrivateFieldGet(this, _MockFhevmInstance_contractsChainId, "f")));
        return eip712;
    }
    createEncryptedInput(contractAddress, userAddress) {
        //Debug Make sure we are in sync with InputVerifier.sol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(__classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressInputVerification, "f") === __classPrivateFieldGet(this, _MockFhevmInstance_inputVerifier, "f").eip712Domain.verifyingContract);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(BigInt(__classPrivateFieldGet(this, _MockFhevmInstance_gatewayChainId, "f")) === __classPrivateFieldGet(this, _MockFhevmInstance_inputVerifier, "f").eip712Domain.chainId);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$MockRelayerEncryptedInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockRelayerEncryptedInput"](__classPrivateFieldGet(this, _MockFhevmInstance_relayerProvider, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_chainId, "f"), contractAddress, userAddress, __classPrivateFieldGet(this, _MockFhevmInstance_aclContractAddress, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_inputVerifier, "f"));
    }
    generateKeypair() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateKeypair"])();
    }
    getPublicKey() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not supported in mock mode");
    }
    getPublicParams(_bits) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Not supported in mock mode");
    }
    async publicDecrypt(handles) {
        const extraData = "0x00";
        // Intercept future type change...
        for(let i = 0; i < handles.length; ++i){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof handles[i] === "string" || handles[i] instanceof Uint8Array, "handle is not a string or a Uint8Array");
        }
        // Casting handles if string
        const relayerHandles = handles.map((h)=>typeof h === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHexString"])(h)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(h));
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$decryptUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEncryptedBits"])(relayerHandles);
        await MockFhevmInstance.verifyPublicACLPermissions(__classPrivateFieldGet(this, _MockFhevmInstance_readonlyEthersProvider, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_aclContractAddress, "f"), relayerHandles);
        // relayer-sdk
        const payloadForRequest = {
            ciphertextHandles: relayerHandles,
            extraData
        };
        // Return a json object basically following the @zama-fhe/relayer-sdk format
        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1PublicDecrypt"](__classPrivateFieldGet(this, _MockFhevmInstance_relayerProvider, "f"), payloadForRequest);
        const result = json.response[0];
        // Add "0x" prefix if needed
        const decryptedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(result.decrypted_value);
        const signatures = result.signatures.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"]);
        // verify signatures on decryption:
        const domain = {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.name,
            version: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.domain.version,
            chainId: __classPrivateFieldGet(this, _MockFhevmInstance_gatewayChainId, "f"),
            verifyingContract: __classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressDecryption, "f")
        };
        const types = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PUBLIC_DECRYPT_EIP712.types;
        // The `signedExtraData` variable is following the @zama-fhe/relayer-sdk implementation
        // TODO: in relayer-sdk, signedExtraData === "0x". However, here, we use "0x00".
        const signedExtraData = "0x00";
        const recoveredAddresses = signatures.map((signature)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(signature.startsWith("0x"));
            const recoveredAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].verifyTypedData(domain, types, {
                ctHandles: handles,
                decryptedResult,
                extraData: signedExtraData
            }, signature);
            return recoveredAddress;
        });
        const thresholdReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$ethers$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThresholdReached"])(__classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").getKmsSignersAddresses(), recoveredAddresses, __classPrivateFieldGet(this, _MockFhevmInstance_kmsVerifier, "f").getThreshold(), "KMS");
        if (!thresholdReached) {
            throw Error("KMS signers threshold is not reached");
        }
        const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$publicDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserializeDecryptedResult"])(relayerHandles, decryptedResult);
        return results;
    }
    async userDecrypt(handles, _privateKey, publicKey, signature, contractAddresses, userAddress, startTimestamp, durationDays) {
        const extraData = "0x00";
        // Intercept future type change...
        for(let i = 0; i < handles.length; ++i){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFhevm"])(typeof handles[i].handle === "string" || handles[i].handle instanceof Uint8Array, "handle is not a string or a Uint8Array");
        }
        // Casting handles if string
        const relayerHandles = handles.map((h)=>({
                handle: typeof h.handle === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHexString"])(h.handle)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHexString"])(h.handle),
                contractAddress: h.contractAddress
            }));
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$decryptUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEncryptedBits"])(relayerHandles.map((h)=>h.handle));
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDeadlineValidity"])(BigInt(startTimestamp), BigInt(durationDays));
        await MockFhevmInstance.verifyUserACLPermissions(__classPrivateFieldGet(this, _MockFhevmInstance_readonlyEthersProvider, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_aclContractAddress, "f"), relayerHandles, userAddress);
        // relayer-sdk
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMaxContractAddresses"])(contractAddresses);
        MockFhevmInstance.verifyHandleContractAddresses(relayerHandles, contractAddresses);
        // Redundant: the mock relayer already performs this check, so it could be removed
        await MockFhevmInstance.verifyUserDecryptSignature(publicKey, signature, contractAddresses, userAddress, startTimestamp, durationDays, __classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressDecryption, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_contractsChainId, "f"));
        // relayer-sdk
        const payloadForRequest = {
            handleContractPairs: relayerHandles,
            requestValidity: {
                startTimestamp: startTimestamp.toString(),
                durationDays: durationDays.toString()
            },
            contractsChainId: __classPrivateFieldGet(this, _MockFhevmInstance_chainId, "f").toString(),
            contractAddresses: contractAddresses.map((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(c)),
            userAddress: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(userAddress),
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(signature),
            publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove0x"])(publicKey),
            extraData
        };
        // Return a json object basically following the @zama-fhe/relayer-sdk format
        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$fhevm$2f$relayer$2f$MockRelayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestRelayerV1UserDecrypt"](__classPrivateFieldGet(this, _MockFhevmInstance_relayerProvider, "f"), payloadForRequest);
        const result = json.response[0];
        // The `decrypted_values` field is specific to the mock relayer.
        const clearTextHexList = result.payload.decrypted_values;
        const listBigIntDecryptions = clearTextHexList.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt);
        const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$relayer$2f$userDecrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildUserDecryptedResult"])(relayerHandles.map((h)=>h.handle), listBigIntDecryptions);
        return results;
    }
    // Static function called by:
    // - MockFhevmInstance.userDecrypt()
    // - packages/hardhat-plugin/src/internal/provider/FhevmProviderExtender._handleFhevmRelayerV1UserDecrypt()
    static async verifyUserDecryptSignature(publicKey, signature, contractAddresses, userAddress, startTimestamp, durationDays, verifyingContractAddressDecryption, contractsChainId) {
        publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(publicKey);
        signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure0x"])(signature);
        const eip712 = MockFhevmInstance.createEIP712(publicKey, contractAddresses, startTimestamp, durationDays, verifyingContractAddressDecryption, contractsChainId);
        const types = {};
        types[eip712.primaryType] = eip712.types[eip712.primaryType];
        const signerAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].verifyTypedData(eip712.domain, types, eip712.message, signature);
        const normalizedSignerAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(signerAddress);
        const normalizedUserAddress = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(userAddress);
        if (normalizedSignerAddress !== normalizedUserAddress) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Invalid EIP-712 signature!");
        }
    }
    static async verifyPublicACLPermissions(readonlyEthersProvider, aclContractAddress, handles) {
        const aclABI = [
            "function isAllowedForDecryption(bytes32 handle) view returns (bool)"
        ];
        const acl = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(aclContractAddress, aclABI, readonlyEthersProvider);
        const verifications = handles.map(async (h)=>{
            const ctHandleHex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(h), 32);
            const allowed = await acl.isAllowedForDecryption(ctHandleHex);
            if (!allowed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Handle ".concat(h, " is not allowed for public decryption!"));
            }
        });
        return Promise.all(verifications).catch((e)=>{
            throw e;
        });
    }
    // (Duplicated code) Should be imported from @zama-fhe/relayer-sdk
    static async verifyUserACLPermissions(readonlyEthersProvider, aclContractAddress, handles, userAddress) {
        const aclABI = [
            "function persistAllowed(bytes32 handle, address account) view returns (bool)"
        ];
        const acl = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(aclContractAddress, aclABI, readonlyEthersProvider);
        const verifications = handles.map(async (param)=>{
            let { handle, contractAddress } = param;
            const ctHandleHex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBigInt(handle), 32);
            const userAllowed = await acl.persistAllowed(ctHandleHex, userAddress);
            const contractAllowed = await acl.persistAllowed(ctHandleHex, contractAddress);
            if (!userAllowed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("User ".concat(userAddress, " is not authorized to user decrypt handle ").concat(handle, "!"));
            }
            if (!contractAllowed) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("dapp contract ".concat(contractAddress, " is not authorized to user decrypt handle ").concat(handle, "!"));
            }
            if (userAddress === contractAddress) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("userAddress ".concat(userAddress, " should not be equal to contractAddress when requesting decryption!"));
            }
        });
        return Promise.all(verifications).catch((e)=>{
            throw e;
        });
    }
    static verifyHandleContractAddresses(handles, contractAddresses) {
        const set = new Set();
        // Build a list of unique allowed contact addresses.
        for(let i = 0; i < contractAddresses.length; ++i){
            const add = contractAddresses[i].toLowerCase();
            if (!set.has(add)) {
                set.add(add);
            }
        }
        // Check that every handle contract (in HandleContractPair) is actually listed in the contractAddresses argument.
        for(let i = 0; i < handles.length; ++i){
            if (!set.has(handles[i].contractAddress.toLowerCase())) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmError"]("Contract address ".concat(handles[i].contractAddress, " associated to handle ").concat(handles[i].handle, " is not listed in the contractAddresses array argument."));
            }
        }
    }
    constructor(config, extra){
        _MockFhevmInstance_relayerProvider.set(this, void 0);
        _MockFhevmInstance_readonlyEthersProvider.set(this, void 0);
        _MockFhevmInstance_chainId.set(this, void 0); //provider's chainId
        _MockFhevmInstance_gatewayChainId.set(this, void 0);
        _MockFhevmInstance_verifyingContractAddressInputVerification.set(this, void 0);
        _MockFhevmInstance_verifyingContractAddressDecryption.set(this, void 0);
        _MockFhevmInstance_contractsChainId.set(this, void 0);
        _MockFhevmInstance_aclContractAddress.set(this, void 0);
        _MockFhevmInstance_kmsVerifier.set(this, void 0);
        _MockFhevmInstance_inputVerifier.set(this, void 0);
        _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc.set(this, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(config.verifyingContractAddressInputVerification, "config.verifyingContractAddressInputVerification");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsAddress"])(config.verifyingContractAddressDecryption, "config.verifyingContractAddressDecryption");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsNumber"])(config.gatewayChainId, "config.gatewayChainId");
        __classPrivateFieldSet(this, _MockFhevmInstance_relayerProvider, extra.relayerProvider, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_readonlyEthersProvider, extra.readonlyEthersProvider, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_chainId, config.chainId, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_gatewayChainId, config.gatewayChainId, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_verifyingContractAddressInputVerification, config.verifyingContractAddressInputVerification, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_verifyingContractAddressDecryption, config.verifyingContractAddressDecryption, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_contractsChainId, config.chainId, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_aclContractAddress, config.aclContractAddress, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_kmsVerifier, extra.kmsVerifier, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_inputVerifier, extra.inputVerifier, "f");
        __classPrivateFieldSet(this, _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$fhevm$2f$mock$2d$utils$2f$_esm$2f$relayer$2d$sdk$2f$sdk$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEIP712"])(__classPrivateFieldGet(this, _MockFhevmInstance_verifyingContractAddressDecryption, "f"), __classPrivateFieldGet(this, _MockFhevmInstance_contractsChainId, "f")), "f");
    }
}
_MockFhevmInstance_relayerProvider = new WeakMap(), _MockFhevmInstance_readonlyEthersProvider = new WeakMap(), _MockFhevmInstance_chainId = new WeakMap(), _MockFhevmInstance_gatewayChainId = new WeakMap(), _MockFhevmInstance_verifyingContractAddressInputVerification = new WeakMap(), _MockFhevmInstance_verifyingContractAddressDecryption = new WeakMap(), _MockFhevmInstance_contractsChainId = new WeakMap(), _MockFhevmInstance_aclContractAddress = new WeakMap(), _MockFhevmInstance_kmsVerifier = new WeakMap(), _MockFhevmInstance_inputVerifier = new WeakMap(), _MockFhevmInstance_fhevmSdkCreateEIP712ForDecryptionFunc = new WeakMap(); //# sourceMappingURL=MockFhevmInstance.js.map
}),
]);

//# sourceMappingURL=9e883_ce14d05d._.js.map