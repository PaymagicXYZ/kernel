// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IValidator.sol";
import "openzeppelin-contracts/contracts/utils/cryptography/EIP712.sol";
import "src/utils/KernelHelper.sol";

struct ECDSAValidatorStorage {
    address owner;
}

contract ECDSAValidator is IKernelValidator {
    event OwnerChanged(
        address indexed kernel,
        address indexed oldOwner,
        address indexed newOwner
    );

    event OwnerDelegateChanged(
        address indexed owner,
        address indexed delegate,
        bool enabled
    );

    mapping(address => ECDSAValidatorStorage) public ecdsaValidatorStorage;
    mapping(address => mapping(address => bool)) ownerDelegates;

    function setOwnerDelegate(address delegate) external {
        ownerDelegates[msg.sender][delegate] = true;

        emit OwnerDelegateChanged(msg.sender, delegate, true);
    }

    function disableOwnerDelegate(address delegate) external {
        ownerDelegates[msg.sender][delegate] = false;

        emit OwnerDelegateChanged(msg.sender, delegate, false);
    }

    function isOwnerDelegate(
        address _owner,
        address delegate
    ) public view returns (bool) {
        return ownerDelegates[_owner][delegate];
    }

    function disable(bytes calldata) external override {
        delete ecdsaValidatorStorage[msg.sender];
    }

    function enable(bytes calldata _data) external override {
        address owner = address(bytes20(_data[0:20]));
        address oldOwner = ecdsaValidatorStorage[msg.sender].owner;
        ecdsaValidatorStorage[msg.sender].owner = owner;
        emit OwnerChanged(msg.sender, oldOwner, owner);
    }

    function validateUserOp(
        UserOperation calldata _userOp,
        bytes32 _userOpHash,
        uint256
    ) external view override returns (uint256 validationData) {
        address owner = ecdsaValidatorStorage[_userOp.sender].owner;
        address recovered1 = ECDSA.recover(_userOpHash, _userOp.signature);
        if (owner == recovered1 || isOwnerDelegate(owner, recovered1)) {
            return 0;
        }

        bytes32 hash = ECDSA.toEthSignedMessageHash(_userOpHash);
        address recovered2 = ECDSA.recover(hash, _userOp.signature);
        if (owner != recovered2 && !isOwnerDelegate(owner, recovered2)) {
            return SIG_VALIDATION_FAILED;
        }
    }

    function validateSignature(
        bytes32 hash,
        bytes calldata signature
    ) public view override returns (uint256) {
        address owner = ecdsaValidatorStorage[msg.sender].owner;
        address recovered1 = ECDSA.recover(hash, signature);
        if (owner == recovered1 || isOwnerDelegate(owner, recovered1)) {
            return 0;
        }
        bytes32 ethHash = ECDSA.toEthSignedMessageHash(hash);
        address recovered2 = ECDSA.recover(ethHash, signature);
        if (owner != recovered2 && !isOwnerDelegate(owner, recovered2)) {
            return SIG_VALIDATION_FAILED;
        }
        return 0;
    }
}
