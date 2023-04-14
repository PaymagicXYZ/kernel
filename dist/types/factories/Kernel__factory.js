"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kernel__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "InvalidNonce",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignatureLength",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "result",
                type: "bytes",
            },
        ],
        name: "QueryResult",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
            },
        ],
        name: "executeAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_plugin",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "queryPlugin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
var _bytecode = "0x61016034620001d257601f62001ee038819003918201601f19168301926001600160401b0392909183851183861017620001bc578160209284926040978852833981010312620001d257516001600160a01b0381168103620001d25782516200006881620001d7565b600681526005602082016512d95c9b995b60d21b8152602086516200008d81620001d7565b838152019264302e302e3160d81b845251902091208160e052610100948186524660a05280519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f948585528284015260608301524660808301523060a083015260a0825260c082019582871090871117620001bc578590525190206080523060c0526101209081526101409182527f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd880546001600160a01b0319166001179055611cec9384620001f48539608051846116fc015260a051846117b7015260c051846116cd015260e0518461174b0152518361177101525182611728015251818181610527015281816107bf015281816108ba01528181610b5401528181610cad01526111420152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620001bc5760405256fe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806306fdde031461010b578063150b7a02146101065780631626ba7e146101015780633659cfe6146100fc5780633a871cdd146100f757806354fd4d50146100f2578063893d20e8146100ed578063940d3c60146100e8578063b0d691fe146100e3578063bc197c81146100de578063c4d66de8146100d9578063d087d288146100d4578063f23a6e61146100cf578063f2fde38b146100ca5763f333df550361000e57610d6a565b610c5e565b610bd1565b610ad5565b6109d2565b61090f565b61086f565b61073b565b6106ca565b61064e565b6105e0565b6104d7565b610451565b61036f565b610255565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761015b57604052565b610110565b60c0810190811067ffffffffffffffff82111761015b57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761015b57604052565b67ffffffffffffffff811161015b57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b919082519283825260005b8481106102415750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201610202565b346102d55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d5576102d16040516102938161013f565b600681527f4b65726e656c000000000000000000000000000000000000000000000000000060208201526040519182916020835260208301906101f7565b0390f35b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102d557565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036102d557565b359073ffffffffffffffffffffffffffffffffffffffff821682036102d557565b9181601f840112156102d55782359167ffffffffffffffff83116102d557602083818601950101116102d557565b346102d55760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d5576103a66102da565b506103af6102fd565b5060643567ffffffffffffffff81116102d5576103d0903690600401610341565b505060206040517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b929192610408826101bd565b91610416604051938461017c565b8294818452818301116102d5578281602093846000960137010152565b9080601f830112156102d55781602061044e933591016103fc565b90565b346102d55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d55760243567ffffffffffffffff81116102d5576104ad6104a56020923690600401610433565b600435611afa565b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b346102d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d55761050e6102da565b73ffffffffffffffffffffffffffffffffffffffff90817f000000000000000000000000000000000000000000000000000000000000000016331480156105b4575b80156105ab575b61056090611bd6565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2005b50333014610557565b50817f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd854163314610550565b346102d5577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126102d5576004359067ffffffffffffffff82116102d5576101609082360301126102d5576106466020916044359060243590600401611125565b604051908152f35b346102d55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d5576102d160405161068c8161013f565b600581527f302e302e3100000000000000000000000000000000000000000000000000000060208201526040519182916020835260208301906101f7565b346102d55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d557602073ffffffffffffffffffffffffffffffffffffffff7f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd85416604051908152f35b346102d55760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d5576107726102da565b60443567ffffffffffffffff81116102d557610792903690600401610341565b60649291923560028110156102d5576001906107ef73ffffffffffffffffffffffffffffffffffffffff807f0000000000000000000000000000000000000000000000000000000000000000163314908115610842575b50610e17565b6107f881610ed1565b03610823576108129261080c9136916103fc565b90611c8c565b905b1561081b57005b602081519101fd5b61083c926108329136916103fc565b9060243590611c61565b90610814565b90507f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd854163314386107e9565b346102d55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b9181601f840112156102d55782359167ffffffffffffffff83116102d5576020808501948460051b0101116102d557565b346102d55760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d5576109466102da565b5061094f6102fd565b5067ffffffffffffffff6044358181116102d5576109719036906004016108de565b50506064358181116102d55761098b9036906004016108de565b50506084359081116102d5576109a5903690600401610341565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b346102d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d557610a096102da565b7f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd89081549073ffffffffffffffffffffffffffffffffffffffff808316610a77577fffffffffffffffffffffffff000000000000000000000000000000000000000091169116179055600080f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a20616c726561647920696e697469616c697a6564000000006044820152fd5b346102d5576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610bce576040517f35567e1a00000000000000000000000000000000000000000000000000000000815230600482015281602482015260208160448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610bc9578291610b8f575b604051828152602090f35b90506020813d8211610bc1575b81610ba96020938361017c565b81010312610bbd576102d191505138610b84565b5080fd5b3d9150610b9c565b6115b8565b80fd5b346102d55760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d557610c086102da565b50610c116102fd565b5060843567ffffffffffffffff81116102d557610c32903690600401610341565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b346102d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d557610c956102da565b73ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001633148015610d3e575b8015610d35575b610ce690611bd6565b7f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd891167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055600080f35b50333014610cdd565b50807f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd854163314610cd6565b346102d55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102d557610da16102da565b6024359067ffffffffffffffff82116102d55761080c610dc8610dcf933690600401610341565b36916103fc565b901561081b57610e13906040519182917fa52b21690000000000000000000000000000000000000000000000000000000083526020600484015260248301906101f7565b0390fd5b15610e1e57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60021115610edb57565b610ea2565b15610ee757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20656e747279506f696e74000000006044820152fd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156102d5570180359067ffffffffffffffff82116102d5576020019181360383136102d557565b906014116102d55790601490565b90601a116102d55760140190600690565b906020116102d557601a0190600690565b906061116102d55760200190604190565b90929192836061116102d55783116102d557606101917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f0190565b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000903581811693926014811061104757505050565b60140360031b82901b16169150565b7fffffffffffff0000000000000000000000000000000000000000000000000000903581811693926006811061108b57505050565b60060360031b82901b16169150565b9190916040818403126102d55767ffffffffffffffff9281358481116102d557816110c6918401610433565b9360208301359081116102d55761044e9201610433565b908160209103126102d5575180151581036102d55790565b3d15611120573d90611106826101bd565b91611114604051938461017c565b82523d6000602084013e565b606090565b9073ffffffffffffffffffffffffffffffffffffffff91611169837f0000000000000000000000000000000000000000000000000000000000000000163314610ee0565b6101408101604161117a8284610f45565b9050146000146111b0575061118f92506117dd565b905b8061119a575090565b600080808093335af1506111ac6110f5565b5090565b9160616111bd8484610f45565b9050116000146113ae576111d18383610f45565b6111da91610f96565b6111e391611012565b60601c916111f18482610f45565b6111fa91610fa4565b61120391611056565b60d01c946112118583610f45565b61121a91610fb5565b61122391611056565b60d01c946112318184610f45565b61123a91610fc6565b3690611245926103fc565b906112509084610f45565b8061125a92610fd7565b81016112659161109a565b508051602091820120604080517f4584533bad8bbd8aa77024a548a56acb8d2807847381ce1b3364745ca396b2e393810193845273ffffffffffffffffffffffffffffffffffffffff89169181019190915265ffffffffffff8a811660608301528916608082015260a0808201929092529081526112e460c08261017c565b5190206112f090611653565b906112fa916113d8565b7f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd85482169116036113a35785611346926113379261134a95611963565b602080825183010191016110dd565b1590565b61139b577fffffffffffff000000000000000000000000000000000000000000000000000079ffffffffffff00000000000000000000000000000000000000009160d01b169160a01b161790611191565b505050600190565b505050505050600190565b60046040517f4be6321b000000000000000000000000000000000000000000000000000000008152fd5b61044e916113e591611580565b9190916113f7565b60051115610edb57565b611400816113ed565b806114085750565b611411816113ed565b60018103611478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611481816113ed565b600281036114e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b806114f46003926113ed565b146114fb57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b9060418151146000146115ae576115aa916020820151906060604084015193015160001a906115c4565b9091565b5050600090600290565b6040513d6000823e3d90fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116116475791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15610bc957815173ffffffffffffffffffffffffffffffffffffffff811615611641579190565b50600190565b50505050600090600390565b61165b6116b6565b906040519060208201927f1901000000000000000000000000000000000000000000000000000000000000845260228301526042820152604281526080810181811067ffffffffffffffff82111761015b5760405251902090565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163014806117b4575b1561171e577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a081526117ae81610160565b51902090565b507f000000000000000000000000000000000000000000000000000000000000000046146116f5565b919060009273ffffffffffffffffffffffffffffffffffffffff90817f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd85416926101408201908361183d6113e5611837610dc88688610f45565b84611580565b1685146118755791611861610dc86113e59361185b61186796611880565b93610f45565b90611580565b160361186f57565b60019150565b506000955050505050565b60405160208101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c81526060810181811067ffffffffffffffff82111761015b5760405251902090565b90357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1823603018112156102d557016020813591019167ffffffffffffffff82116102d55781360383136102d557565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b90611aec90611ab593611af1956040519586937f9e2045ce000000000000000000000000000000000000000000000000000000006020860152606060248601526119cd608486016119b383610320565b73ffffffffffffffffffffffffffffffffffffffff169052565b602081013560a48601526119fa6119e760408301836118d4565b61016060c48901526101e4880191611924565b611aa5611a99611a42611a1060608601866118d4565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c9591868c84030160e48d0152611924565b60808501356101048a015260a08501356101248a015260c08501356101448a015260e08501356101648a01526101008501356101848a0152611a886101208601866118d4565b90858b8403016101a48c0152611924565b926101408101906118d4565b91878403016101c4880152611924565b9160448401526064830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810184528361017c565b611c8c565b901561081b5790565b9073ffffffffffffffffffffffffffffffffffffffff90817f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd854169282611b446113e58484611580565b168414611bae57611b6091611b5b6113e592611880565b611580565b1603611b8a577f1626ba7e0000000000000000000000000000000000000000000000000000000090565b7fffffffff0000000000000000000000000000000000000000000000000000000090565b505050507f1626ba7e0000000000000000000000000000000000000000000000000000000090565b15611bdd57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060448201527f6f776e6572206f722073656c66000000000000000000000000000000000000006064820152fd5b916000928392602083519301915af1903d604051906020818301016040528082526000602083013e90565b6000918291602082519201905af4903d604051906020818301016040528082526000602083013e9056fea2646970667358221220eb2eab73a1f7f954a10c1e8832e410b81d9edbbe2f7940d4bc3d10dd7145c20164736f6c63430008120033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Kernel__factory = exports.Kernel__factory = /** @class */ (function (_super) {
    __extends(Kernel__factory, _super);
    function Kernel__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    Kernel__factory.prototype.deploy = function (_entryPoint, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, overrides || {});
    };
    Kernel__factory.prototype.getDeployTransaction = function (_entryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, overrides || {});
    };
    Kernel__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Kernel__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Kernel__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Kernel__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Kernel__factory.bytecode = _bytecode;
    Kernel__factory.abi = _abi;
    return Kernel__factory;
}(ethers_1.ContractFactory));
