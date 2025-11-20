# Encrypted Inheritance Rule Check

An FHEVM-based smart contract system for verifying inheritance eligibility based on encrypted age without revealing the actual age value.

## 🔗 Live Demo & Resources

- **🌐 Live Application**: [https://heritage-xi.vercel.app/](https://heritage-xi.vercel.app/)
- **🎥 Demo Video**: [https://github.com/YettaGallacher/time-quill-vault/blob/main/heritage.mp4](https://github.com/YettaGallacher/time-quill-vault/blob/main/heritage.mp4)
- **📄 Source Code**: [https://github.com/YettaGallacher/time-quill-vault](https://github.com/YettaGallacher/time-quill-vault)

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
│   └── InheritanceRuleCheck.sol       # Main FHEVM contract for inheritance verification
├── deploy/
│   └── deploy.ts                      # Hardhat deployment scripts with verification
├── test/
│   ├── InheritanceRuleCheck.ts        # Local network tests with boundary cases
│   └── InheritanceRuleCheckSepolia.ts # Sepolia testnet tests
├── frontend/                          # Next.js frontend application
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with error boundary
│   │   ├── page.tsx                   # Main page with inheritance checker
│   │   ├── globals.css                # Styled with animations and responsive design
│   │   └── providers.tsx              # Wagmi and FHEVM providers
│   ├── components/
│   │   ├── InheritanceCheckDemo.tsx   # Main demo component
│   │   ├── Header.tsx                 # Header with wallet connection
│   │   ├── ErrorBoundary.tsx          # Error handling component
│   │   └── fhevm/                     # FHEVM integration utilities
│   ├── config/
│   │   └── wagmi.ts                   # Wagmi configuration
│   └── hooks/
│       ├── useInMemoryStorage.tsx     # Storage hook with error handling
│       └── useEthersSigner.ts         # Ethers signer hook
├── deployments/
│   ├── localhost/                     # Local deployment artifacts
│   └── sepolia/                       # Sepolia deployment artifacts
├── hardhat.config.ts                  # Hardhat configuration with networks
├── package.json                       # Dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
├── heritage.mp4                       # Project demonstration video
└── README.md                          # This documentation
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
- `getMyEligibilityResult()`: Gets the encrypted eligibility result for the caller

### Deployed Contract Addresses

#### Sepolia Testnet
- **Contract Address**: `0x4a7b9e88A6Ec2065674dBB829D8c58aA55f7045b`
- **Network**: Ethereum Sepolia Testnet
- **Block Explorer**: [View on Etherscan](https://sepolia.etherscan.io/address/0x4a7b9e88A6Ec2065674dBB829D8c58aA55f7045b)

#### Local Development
- **Contract Address**: Deployed locally during development
- **Network**: Hardhat Local Network

### Business Logic

1. User submits encrypted age
2. Contract compares encrypted age with minimum age (18) using FHE
3. Contract returns encrypted boolean result
4. User decrypts the result to see if they're eligible

## Testing

### Local Tests

The local tests verify comprehensive boundary cases:
- Age 10 is not eligible (should return false)
- Age 17 is not eligible (should return false)
- Age 18 is eligible (should return true) - exact boundary
- Age 19 is eligible (should return true)
- Age 20 is eligible (should return true)

### Sepolia Tests

After deploying to Sepolia, run:

```bash
npm run test:sepolia
```

## Frontend Application

The frontend is a complete Next.js application with the following features:

### ✨ Features Implemented

1. **Wallet Connection**: Rainbow Kit integration for MetaMask and other wallets
2. **Age Input & Encryption**: Secure age input with FHEVM encryption
3. **Contract Interaction**: Direct interaction with deployed smart contracts
4. **Result Decryption**: Client-side decryption of eligibility results
5. **Error Handling**: Comprehensive error boundaries and user feedback
6. **Responsive Design**: Mobile-first design with animations
7. **Network Status**: Real-time display of connected blockchain network

### 🎯 User Flow

1. Connect wallet using Rainbow Kit
2. Input age (privacy-preserving, never revealed)
3. Age is encrypted client-side using FHEVM
4. Encrypted age is submitted to the smart contract
5. Contract verifies eligibility without seeing actual age
6. Encrypted result is returned and decrypted client-side
7. User sees eligibility status (eligible/not eligible)

### 🛠 Frontend Technologies

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Wallet**: Rainbow Kit + Wagmi
- **Blockchain**: FHEVM SDK for encryption/decryption
- **State Management**: React hooks with error handling
- **TypeScript**: Full type safety throughout

## Available Scripts

| Script                    | Description                              |
| ------------------------- | ---------------------------------------- |
| `npm run compile`         | Compile all contracts                    |
| `npm run test`            | Run local network tests                  |
| `npm run test:sepolia`    | Run Sepolia testnet tests                |
| `npm run test:gas`        | Run gas usage tests                      |
| `npm run coverage`        | Generate coverage report                 |
| `npm run lint`            | Run linting checks                       |
| `npm run lint:fix`        | Auto-fix linting issues                  |
| `npm run prettier:check`  | Check code formatting                    |
| `npm run prettier:write`  | Format code with Prettier                |
| `npm run clean`           | Clean build artifacts                    |
| `npm run deploy`          | Deploy contracts                         |
| `npm run deploy:localhost`| Deploy to local network                  |
| `npm run deploy:sepolia`  | Deploy to Sepolia testnet                |
| `npm run accounts`        | Show available accounts with balances    |
| `npm run node`            | Start local Hardhat node                 |
| `npm run console`         | Open Hardhat console                     |
| `npm run verify`          | Verify contracts on Etherscan            |

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