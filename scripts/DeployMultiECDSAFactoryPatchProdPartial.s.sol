pragma solidity ^0.8.0;

import "src/factory/MultiECDSAFactoryPatch.sol";
import "src/validator/MultiECDSAValidatorNew.sol";
import "src/Kernel.sol";
import "forge-std/Script.sol";
import "forge-std/console.sol";

contract DeployMultiECDSAFactoryPatchProd is Script {
    function run() public {
        uint256 key = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(key);
        bytes32 salt = bytes32(uint256(0x2));
        Kernel kernelImplementation = new Kernel{salt: salt}(
            IEntryPoint(0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789)
        );
        console.log("Kernel deployed at: %s", address(kernelImplementation));

        MultiECDSAValidatorNew multiECDSAValidatorNew = new MultiECDSAValidatorNew{
                salt: salt
            }();
        console.log(
            "MultiECDSAValidatorNew deployed at: %s",
            address(multiECDSAValidatorNew)
        );

        MultiECDSAFactoryPatch multiECDSAFactoryPatch = MultiECDSAFactoryPatch(0x33DDF684dcc6937FfE59D8405aA80c41fB518C5c);

        multiECDSAFactoryPatch.setImplementation(
            address(kernelImplementation),
            true
        );

        address[] memory owners = new address[](1);
        owners[0] = address(0xdD664b8A02d3B13C0bdfB1878CbE66aA53B2de06);

        multiECDSAFactoryPatch.setOwners(owners);

        multiECDSAFactoryPatch.addStake{value: 1}(1);

        multiECDSAFactoryPatch.transferOwnership(
            0x74427681c620DE258Aa53a382d6a4C865738A06C
        );

        vm.stopBroadcast();
    }
}
