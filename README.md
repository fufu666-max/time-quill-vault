# Encrypted Inheritance Rule Check

An FHEVM-based smart contract system for verifying inheritance eligibility based on encrypted age without revealing the actual age value.

## Overview

This project implements a privacy-preserving inheritance rule verification system using Fully Homomorphic Encryption (FHE). Children can submit their encrypted age, and the smart contract will verify if they meet the inheritance requirement (age >= 18) without revealing the actual age.

## Features

- **Privacy-Preserving**: Age values are encrypted using FHE, never revealed on-chain
- **Rule Verification**: Checks if encrypted age meets the requirement (>= 18)
- **Encrypted Results**: Returns encrypted boolean results that only the user can decrypt
- **Complete Flow**: Submit encrypted age �?View encrypted result �?Decrypt result

## Project Structure

```
pro29/
├── contracts/
�?  └── InheritanceRuleCheck.sol  # Main contract for inheritance rule verification
├── deploy/
�?  └── deploy.ts                  # Deployment script
├── test/
�?  ├── InheritanceRuleCheck.ts    # Local network tests
�?  └── InheritanceRuleCheckSepolia.ts  # Sepolia testnet tests
├── frontend/                      # Frontend application (to be set up)
├── hardhat.config.ts              # Hardhat configuration
└── package.json                   # Dependencies
```

## Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher
- **npm**: Package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   npx hardhat vars set MNEMONIC
   npx hardhat vars set INFURA_API_KEY
   npx hardhat vars set ETHERSCAN_API_KEY  # Optional
   ```

3. **Compile contracts**

   ```bash
   npm run compile
   ```

4. **Run tests**

   ```bash
   # Local network tests
   npm run test
   
   # Sepolia testnet tests (after deployment)
   npm run test:sepolia
   ```

### Deployment

#### Local Network

```bash
# Start a local FHEVM-ready node
npx hardhat node

# In another terminal, deploy to local network
npx hardhat deploy --network localhost
```

#### Sepolia Testnet

```bash
# Deploy to Sepolia
npx hardhat deploy --network sepolia

# Verify contract on Etherscan (optional)
npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
```

## Contract Details

### InheritanceRuleCheck.sol

The main contract provides the following functions:

- `checkEligibility(externalEuint32 encryptedAge, bytes calldata inputProof)`: Checks if the encrypted age meets the requirement (>= 18)
- `getEligibilityResult(address user)`: Gets the encrypted eligibility result for a specific address
- `getMyEligibilityResult()`: Gets the encrypted eligibility result for the caller

### Business Logic

1. User submits encrypted age
2. Contract compares encrypted age with minimum age (18) using FHE
3. Contract returns encrypted boolean result
4. User decrypts the result to see if they're eligible

## Testing

### Local Tests

The local tests verify:
- Age 18 is eligible (should return true)
- Age 20 is eligible (should return true)
- Age 17 is not eligible (should return false)
- Age 10 is not eligible (should return false)

### Sepolia Tests

After deploying to Sepolia, run:

```bash
npm run test:sepolia
```

## Frontend Setup

The frontend needs to be set up separately. It should:
1. Connect wallet using Rainbow Kit
2. Allow users to input their age
3. Encrypt the age using FHEVM
4. Submit encrypted age to the contract
5. Retrieve and decrypt the eligibility result
6. Display the result to the user

### Frontend Requirements

- Rainbow Kit for wallet connection
- FHEVM SDK for encryption/decryption
- React/Next.js framework
- Contract ABI and addresses

## Available Scripts

| Script             | Description                    |
| ------------------ | ------------------------------ |
| `npm run compile`  | Compile all contracts          |
| `npm run test`     | Run local network tests        |
| `npm run test:sepolia` | Run Sepolia testnet tests   |
| `npm run coverage` | Generate coverage report       |
| `npm run lint`     | Run linting checks             |
| `npm run clean`    | Clean build artifacts          |

## Documentation

- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)

## License

MIT

## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/zama-ai/fhevm/issues)
- **Documentation**: [FHEVM Docs](https://docs.zama.ai)
- **Community**: [Zama Discord](https://discord.gg/zama)



## Auto-generated Section
Added at 2025-11-28 11:52:25


## Auto-generated Section
Added at 2025-11-28 11:52:25


## Auto-generated Section
Added at 2025-11-28 11:52:26
