// Auto-generated modification at 2025-11-28 11:52:25
// Auto-generated modification at 2025-11-28 11:52:25
// Auto-generated modification at 2025-11-28 11:52:24
"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId } from 'wagmi';
import { useEffect, useState } from 'react';

export function Header() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const [mounted, setMounted] = useState(false);

  // Only render connection status after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const getNetworkName = (id: number) => {
    switch (id) {
      case 1: return 'Ethereum';
      case 11155111: return 'Sepolia';
      case 31337: return 'Localhost';
      default: return 'Unknown';
    }
  };

  return (
    <header className="modern-header">
      <nav className="flex w-full justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 shadow-lg glow-border">
            <span className="text-white text-2xl loading-pulse">🔐</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-600 bg-clip-text text-transparent">
              Inheritance Rule Check
            </h1>
            <p className="text-sm text-[var(--text-secondary)] font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[var(--success)] rounded-full animate-pulse"></span>
              Verify eligibility privately with FHE
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {mounted && isConnected && (
            <>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] fade-in-up">
                <div className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[var(--success)]">Connected</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(99,102,241,0.1)] to-[rgba(99,102,241,0.05)] border border-[rgba(99,102,241,0.2)] fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-sm font-semibold text-[var(--accent)]">{getNetworkName(chainId)}</span>
              </div>
            </>
          )}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ConnectButton />
          </div>
        </div>
      </nav>
      
      {/* Decorative line under header */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30"></div>
    </header>
  );
}

