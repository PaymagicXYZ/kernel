// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./KernelFactory.sol";
import "src/validator/ECDSAValidator.sol";

contract ECDSAKernelFactory {
    KernelFactory public immutable singletonFactory;
    ECDSAValidator public immutable validator;
    IEntryPoint public immutable entryPoint;

    address owner;

    constructor(
        KernelFactory _singletonFactory,
        ECDSAValidator _validator,
        IEntryPoint _entryPoint,
        address _owner
    ) {
        singletonFactory = _singletonFactory;
        validator = _validator;
        entryPoint = _entryPoint;
        owner = _owner;
    }

    function createAccount(
        uint256 _index
    ) external returns (EIP1967Proxy proxy) {
        bytes memory data = abi.encodePacked(owner);
        proxy = singletonFactory.createAccount(validator, data, _index);
    }

    function getAccountAddress(uint256 _index) public view returns (address) {
        bytes memory data = abi.encodePacked(owner);
        return singletonFactory.getAccountAddress(validator, data, _index);
    }
}
