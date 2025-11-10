"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useAccount, useReadContract, useWriteContract, useChainId, useWaitForTransactionReceipt } from "wagmi";
import { useFhevm } from "../fhevm/useFhevm";
import { useInMemoryStorage } from "../hooks/useInMemoryStorage";
import { useEthersProvider, useEthersSigner } from "../hooks/useEthersSigner";
import { ethers } from "ethers";

// Contract ABI - This will be generated after compilation
const INHERITANCE_RULE_CHECK_ABI = [
  {
    inputs: [
      { internalType: "externalEuint32", name: "encryptedAge", type: "bytes32" },
      { internalType: "bytes", name: "inputProof", type: "bytes" },
    ],
    name: "checkEligibility",
    outputs: [{ internalType: "ebool", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyEligibilityResult",
    outputs: [{ internalType: "ebool", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getEligibilityResult",
    outputs: [{ internalType: "ebool", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Contract address - Default to localhost deployment address
// For localhost network (chainId: 31337): 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
// Override with NEXT_PUBLIC_CONTRACT_ADDRESS environment variable if needed
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

export function InheritanceCheckDemo() {
  const [mounted, setMounted] = useState(false);
  
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContract, data: txHash, isPending: isWritePending, error: writeError, reset: resetWrite } = useWriteContract();
  
  // Wait for transaction confirmation
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const [age, setAge] = useState("");
  const [encryptedResult, setEncryptedResult] = useState<string | null>(null);
  const [decryptedResult, setDecryptedResult] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [message, setMessage] = useState("");

  // Only initialize after client-side mount to avoid SSR hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const { storage: fhevmDecryptionSignatureStorage } = useInMemoryStorage();

  // Get provider and signer from wagmi
  const ethersProvider = useEthersProvider({ chainId });
  const signer = useEthersSigner({ chainId });

  // For FHEVM, use window.ethereum (EIP-1193 provider) or RPC URL for mock chains
  // FHEVM requires either a string URL or an EIP-1193 provider with request method
  const fhevmProvider = useMemo(() => {
    if (!mounted || !isConnected || !chainId) return undefined;
    
    // For localhost/mock chains, pass the RPC URL directly
    if (chainId === 31337) {
      return "http://localhost:8545";
    }
    
    // For real networks, use window.ethereum if available (EIP-1193 provider)
    if (typeof window !== "undefined" && window.ethereum) {
      return window.ethereum as any;
    }
    
    return undefined;
  }, [mounted, isConnected, chainId]);

  // FHEVM instance - only initialize after mount to avoid SSR hydration issues
  const {
    instance: fhevmInstance,
    status: fhevmStatus,
    error: fhevmError,
  } = useFhevm({
    provider: fhevmProvider,
    chainId,
    initialMockChains: { 31337: "http://localhost:8545" },
    enabled: mounted && isConnected && !!fhevmProvider,
  });

  // Read eligibility result
  const { data: eligibilityHandle, refetch: refetchEligibility } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: INHERITANCE_RULE_CHECK_ABI,
    functionName: "getMyEligibilityResult",
    query: {
      enabled: isConnected && CONTRACT_ADDRESS !== "0x0000000000000000000000000000000000000000",
    },
  });

  const handleSubmitAge = useCallback(async () => {
    // Clear previous messages
    setMessage("");
    
    if (!fhevmInstance) {
      setMessage("Error: FHEVM instance not ready. Please wait for initialization.");
      return;
    }

    if (!address) {
      setMessage("Error: Please connect your wallet first.");
      return;
    }

    if (!age || parseInt(age) <= 0) {
      setMessage("Error: Please enter a valid age.");
      return;
    }

    if (CONTRACT_ADDRESS === "0x0000000000000000000000000000000000000000") {
      setMessage("Error: Contract not deployed. Please deploy the contract first.");
      return;
    }

    setIsSubmitting(true);
    setMessage("Encrypting age...");

    try {
      // Create encrypted input
      const input = fhevmInstance.createEncryptedInput(CONTRACT_ADDRESS, address);
      input.add32(parseInt(age));
      const encryptedInput = await input.encrypt();

      // Convert inputProof from Uint8Array to hex string for viem/wagmi
      // inputProof is Uint8Array, we need to convert it to hex string
      let inputProofHex: string;
      if (encryptedInput.inputProof instanceof Uint8Array) {
        // Convert Uint8Array to hex string
        inputProofHex = "0x" + Array.from(encryptedInput.inputProof)
          .map(b => b.toString(16).padStart(2, "0"))
          .join("");
      } else {
        // If it's already a string, use it directly
        inputProofHex = encryptedInput.inputProof as string;
        if (!inputProofHex.startsWith("0x")) {
          inputProofHex = "0x" + inputProofHex;
        }
      }

      // Ensure handles[0] is a hex string
      let handleHex: string;
      if (typeof encryptedInput.handles[0] === "string") {
        handleHex = encryptedInput.handles[0];
        if (!handleHex.startsWith("0x")) {
          handleHex = "0x" + handleHex;
        }
        // Pad to 32 bytes (64 hex characters + 0x = 66 characters)
        if (handleHex.length < 66) {
          handleHex = "0x" + handleHex.slice(2).padStart(64, "0");
        }
      } else {
        // If it's Uint8Array or other format, convert it
        const handleArray = encryptedInput.handles[0] as any;
        handleHex = "0x" + Array.from(new Uint8Array(handleArray))
          .map((b: any) => b.toString(16).padStart(2, "0"))
          .join("");
        if (handleHex.length < 66) {
          handleHex = "0x" + handleHex.slice(2).padStart(64, "0");
        }
      }

      // Reset any previous write errors
      resetWrite();

      setMessage("Preparing transaction... Please confirm in your wallet when it appears.");

      // Log transaction details for debugging
      console.log("Submitting transaction:", {
        address: CONTRACT_ADDRESS,
        functionName: "checkEligibility",
        handleHex: handleHex.slice(0, 20) + "...",
        inputProofHex: inputProofHex.slice(0, 20) + "...",
        chainId,
        walletAddress: address,
      });

      // Call contract - this will trigger wallet popup
      // Note: In wagmi v2, writeContract is called directly and will trigger wallet
      writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: INHERITANCE_RULE_CHECK_ABI,
        functionName: "checkEligibility",
        args: [handleHex as `0x${string}`, inputProofHex as `0x${string}`],
      });
      
      // Log that writeContract was called
      console.log("writeContract called, waiting for wallet confirmation...");
      
      // isWritePending will be true while waiting for user confirmation
      // The message will be updated by useEffect when isWritePending changes
    } catch (error: any) {
      const errorMessage = error?.message || error?.toString() || "Unknown error occurred";
      setMessage(`Error: ${errorMessage}`);
      console.error("Submit error:", error);
      setIsSubmitting(false);
    }
  }, [fhevmInstance, address, age, writeContract]);

  // Handle transaction confirmation and refetch result
  useEffect(() => {
    if (isConfirmed && txHash) {
      const hashString = typeof txHash === 'string' ? txHash : String(txHash);
      setMessage(`Transaction confirmed! Hash: ${hashString.slice(0, 10)}...`);
      setIsSubmitting(false);
      // Refetch eligibility result after transaction is confirmed
      refetchEligibility();
      setTimeout(() => {
        setMessage("Check eligibility result below and decrypt to see if you're eligible.");
      }, 1000);
    }
  }, [isConfirmed, txHash, refetchEligibility]);

  // Handle write errors
  useEffect(() => {
    if (writeError) {
      console.error("Write contract error:", writeError);
      setMessage(`Transaction error: ${writeError.message || writeError.toString()}`);
      setIsSubmitting(false);
    }
  }, [writeError]);

  // Update message during confirmation
  useEffect(() => {
    if (isConfirming) {
      setMessage("Transaction is being confirmed on the blockchain...");
    }
  }, [isConfirming]);
  
  // Handle write pending state
  useEffect(() => {
    if (isWritePending && !txHash) {
      setMessage("Waiting for wallet confirmation... Please check your wallet popup.");
    } else if (isWritePending && txHash) {
      const hashString = typeof txHash === 'string' ? txHash : String(txHash);
      setMessage(`Transaction submitted (${hashString.slice(0, 10)}...). Waiting for confirmation...`);
    }
  }, [isWritePending, txHash]);

  const handleDecrypt = useCallback(async () => {
    if (!fhevmInstance || !address || !eligibilityHandle) {
      setMessage("No eligibility result to decrypt");
      return;
    }

    // Check if handle is zero
    if (eligibilityHandle === "0x0000000000000000000000000000000000000000000000000000000000000000" || 
        !eligibilityHandle) {
      setMessage("No eligibility result found. Please submit your age first.");
      return;
    }

    setIsDecrypting(true);
    setMessage("Decrypting eligibility result...");

    try {
      if (!signer) {
        throw new Error("No signer available");
      }

      // Generate keypair
      const keypair = fhevmInstance.generateKeypair();

      const startTimeStamp = Math.floor(Date.now() / 1000).toString();
      const durationDays = "10";
      const contractAddresses = [CONTRACT_ADDRESS];

      // Create EIP712 signature
      const eip712 = fhevmInstance.createEIP712(
        keypair.publicKey,
        contractAddresses,
        startTimeStamp,
        durationDays
      );

      const signature = await signer.signTypedData(
        eip712.domain,
        { UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification },
        eip712.message
      );

      // Decrypt
      const result = await fhevmInstance.userDecrypt(
        [{ handle: eligibilityHandle, contractAddress: CONTRACT_ADDRESS }],
        keypair.privateKey,
        keypair.publicKey,
        signature.replace("0x", ""),
        contractAddresses,
        address,
        startTimeStamp,
        durationDays
      );

      const decryptedValue = result[eligibilityHandle];
      const isEligible = Boolean(decryptedValue);
      setDecryptedResult(isEligible);
      setMessage(isEligible ? "You are eligible for inheritance!" : "You are not yet eligible (age must be 18 or older)");
    } catch (error: any) {
      setMessage(`Decrypt error: ${error.message}`);
      console.error("Decrypt error:", error);
    } finally {
      setIsDecrypting(false);
    }
  }, [fhevmInstance, address, eligibilityHandle, signer]);

  // Wait for mount before checking connection status to avoid SSR hydration mismatch
  // Ensure consistent structure between server and client
  if (!mounted) {
    return (
      <div className="w-full space-y-6">
        <div className="panel-card">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--success)] bg-clip-text text-transparent mb-3">
            Encrypted Inheritance Rule Check
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Verify if you meet the inheritance requirement (age {'>='} 18) without revealing your actual age
          </p>
        </div>
        <div className="panel-card text-center">
          <p className="text-xl font-semibold text-[var(--text-primary)] py-8">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="w-full space-y-6">
        <div className="panel-card">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--success)] bg-clip-text text-transparent mb-3">
            Encrypted Inheritance Rule Check
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Verify if you meet the inheritance requirement (age {'>='} 18) without revealing your actual age
          </p>
        </div>
        <div className="panel-card text-center">
          <p className="text-xl font-semibold text-[var(--text-primary)] py-8">
            Please connect your wallet to check inheritance eligibility
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Hero Section */}
      <div className="panel-card">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--success)] bg-clip-text text-transparent mb-3">
          Encrypted Inheritance Rule Check
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Verify if you meet the inheritance requirement (age {'>='} 18) without revealing your actual age using fully homomorphic encryption.
        </p>
      </div>

      {/* Age Input Section */}
      <div className="panel-card">
        <h2 className="panel-title mb-6">Enter Your Age</h2>
        <div className="form-group mb-4">
          <div className="flex gap-4">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age (e.g., 18)"
              className="flex-1"
              min="0"
              max="120"
            />
            <button
              onClick={handleSubmitAge}
              disabled={!age || isSubmitting || isWritePending || isConfirming || !fhevmInstance}
              className="btn btn-primary min-w-[140px]"
              title={
                !age
                  ? "Please enter your age"
                  : !fhevmInstance
                  ? "FHEVM is initializing, please wait..."
                  : isWritePending
                  ? "Waiting for wallet confirmation..."
                  : isConfirming
                  ? "Transaction is confirming..."
                  : isSubmitting
                  ? "Submitting..."
                  : "Click to submit your encrypted age"
              }
            >
              {isSubmitting || isWritePending || isConfirming ? "Processing..." : "Submit Age"}
            </button>
          </div>
        </div>
        
        {!age && (
          <p className="text-sm text-[var(--text-muted)] mt-2">Please enter your age above</p>
        )}
        {age && !fhevmInstance && (
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-[rgba(245,158,11,0.1)] to-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
            <p className="text-sm text-[var(--warning)] font-medium">
              FHEVM is initializing... Please wait a moment before submitting.
            </p>
          </div>
        )}
        {fhevmInstance && fhevmStatus !== "ready" && (
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-[rgba(245,158,11,0.1)] to-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
            <p className="text-sm text-[var(--warning)] font-medium">
               FHEVM status: {fhevmStatus}. You can try submitting, but it may fail if not ready.
            </p>
          </div>
        )}
        {fhevmError && (
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
            <p className="text-sm text-[var(--danger)] font-medium">FHEVM Error: {fhevmError.message}</p>
          </div>
        )}
      </div>

      {/* Eligibility Result Section */}
      {eligibilityHandle && eligibilityHandle !== "0x0000000000000000000000000000000000000000000000000000000000000000" && (
        <div className="panel-card">
          <h2 className="panel-title mb-6">Eligibility Result</h2>
          <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-[rgba(99,102,241,0.05)] to-[rgba(99,102,241,0.02)] border border-[rgba(99,102,241,0.15)]">
            <p className="text-xs font-mono text-[var(--text-secondary)] mb-1">Encrypted Result Handle</p>
            <p className="text-sm font-mono text-[var(--accent)] break-all">
              {eligibilityHandle.slice(0, 20)}...{eligibilityHandle.slice(-10)}
            </p>
          </div>
          <button
            onClick={handleDecrypt}
            disabled={isDecrypting || !fhevmInstance}
            className="btn btn-success w-full"
          >
            {isDecrypting ? "Decrypting..." : decryptedResult !== null ? "Decrypt Again" : "Decrypt Result"}
          </button>

          {decryptedResult !== null && (
            <div className={`mt-6 p-6 rounded-xl ${decryptedResult ? "result-card result-eligible" : "result-card result-not-eligible"}`}>
              <p className={`text-2xl font-bold mb-3 ${decryptedResult ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                {decryptedResult ? "Eligible" : "Not Eligible"}
              </p>
              <p className="text-base text-[var(--text-secondary)]">
                {decryptedResult
                  ? "You meet the inheritance requirement (age 18 or older)"
                  : "You do not meet the requirement (must be 18 or older)"}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Message Box */}
      {message && (
        <div className="message-box">
          <p className="text-[var(--text-primary)] font-medium">{message}</p>
        </div>
      )}
    </div>
  );
}

