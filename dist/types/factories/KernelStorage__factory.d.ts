import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { KernelStorage, KernelStorageInterface } from "../KernelStorage";
type KernelStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KernelStorage__factory extends ContractFactory {
    constructor(...args: KernelStorageConstructorParams);
    deploy(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<KernelStorage>;
    getDeployTransaction(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): KernelStorage;
    connect(signer: Signer): KernelStorage__factory;
    static readonly bytecode = "0x60a0346100b057601f61065038819003918201601f19168301916001600160401b038311848410176100b5578084926020946040528339810103126100b057516001600160a01b03811681036100b0576080527f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd880546001600160a01b031916600117905560405161058490816100cc823960805181818160ac015281816101ef0152818161031901526104050152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe604060808152600436101561001357600080fd5b600090813560e01c9081633659cfe6146103af578163893d20e81461033d578163b0d691fe146102ce578163d087d28814610170575063f2fde38b1461005857600080fd5b3461016d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016d5760043573ffffffffffffffffffffffffffffffffffffffff80821680920361016957807f000000000000000000000000000000000000000000000000000000000000000016331490811561013c575b508015610133575b6100e7906104c3565b7f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd8907fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905580f35b503330146100de565b90507f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd854163314386100d6565b8280fd5b80fd5b9050346102ca57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ca578051907f35567e1a00000000000000000000000000000000000000000000000000000000825230600483015282602483015260208260448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa9182156102c0578392610229575b6020838351908152f35b90915060203d81116102b9575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116820182811067ffffffffffffffff82111761028c576020918391855281010312610169576020925051903861021f565b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b503d610236565b81513d85823e3d90fd5b5080fd5b9050346102ca57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ca576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b9050346102ca57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ca5760209073ffffffffffffffffffffffffffffffffffffffff7f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd854169051908152f35b823461016d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016d5773ffffffffffffffffffffffffffffffffffffffff600435818116918282036104bf57807f0000000000000000000000000000000000000000000000000000000000000000163314908115610492575b508015610489575b610440906104c3565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8280a280f35b50333014610437565b90507f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd8541633148461042f565b8380fd5b156104ca57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060448201527f6f776e6572206f722073656c66000000000000000000000000000000000000006064820152fdfea2646970667358221220132b6ddf554f2f0d388d840df86190b0d0300bea035d913d845fe76e9589800464736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "_entryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): KernelStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KernelStorage;
}
export {};
