// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32, ebool} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title Encrypted Inheritance Rule Check Contract
/// @notice Checks if a child's encrypted age meets the inheritance condition (age >= 18)
/// @dev Uses FHE to compare encrypted age without revealing the actual age value
contract InheritanceRuleCheck is SepoliaConfig {
    // Contract version for tracking upgrades
    string public constant VERSION = "1.0.0";

    // Minimum age required for inheritance (18 years)
    uint32 private constant MIN_AGE = 18;

    // Encrypted eligibility result for the caller
    mapping(address => ebool) private _eligibilityResults;

    // Events
    event EligibilityChecked(address indexed user, uint256 timestamp);
    event EligibilityResultStored(address indexed user, uint256 timestamp);

    /// @notice Checks if the provided encrypted age meets the inheritance requirement
    /// @param encryptedAge The encrypted age value from the child
    /// @param inputProof The input proof for the encrypted age
    /// @return eligibility The encrypted boolean result (true if age >= 18, false otherwise)
    function checkEligibility(
        externalEuint32 encryptedAge,
        bytes calldata inputProof
    ) external returns (ebool) {
        // Convert external encrypted input to internal euint32
        euint32 age = FHE.fromExternal(encryptedAge, inputProof);

        // Convert the minimum age constant to encrypted type
        euint32 minAgeEncrypted = FHE.asEuint32(MIN_AGE);

        // Perform encrypted comparison: age >= MIN_AGE (greater than or equal)
        ebool isEligible = FHE.ge(age, minAgeEncrypted);

        // Emit event for eligibility check
        emit EligibilityChecked(msg.sender, block.timestamp);

        // Store the result for the caller
        _eligibilityResults[msg.sender] = isEligible;

        // Emit event for result storage
        emit EligibilityResultStored(msg.sender, block.timestamp);

        // Allow the caller to decrypt their result
        FHE.allowThis(isEligible);
        FHE.allow(isEligible, msg.sender);

        return isEligible;
    }

    /// @notice Gets the encrypted eligibility result for a specific address
    /// @param user The address to check eligibility for
    /// @return The encrypted eligibility result
    function getEligibilityResult(address user) external view returns (ebool) {
        return _eligibilityResults[user];
    }

    /// @notice Gets the encrypted eligibility result for the caller
    /// @return The encrypted eligibility result for msg.sender
    function getMyEligibilityResult() external view returns (ebool) {
        return _eligibilityResults[msg.sender];
    }
}
