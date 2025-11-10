// Auto-generated modification at 2025-11-28 11:52:25
// Auto-generated modification at 2025-11-28 11:52:25
// Auto-generated modification at 2025-11-28 11:52:24
"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';

export function Header() {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  // Only render connection status after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="modern-header">
      <nav className="flex w-full justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 shadow-lg">
            <span className="text-white text-2xl">🔐</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-600 bg-clip-text text-transparent">
              Inheritance Rule Check
            </h1>
            <p className="text-sm text-[var(--text-secondary)] font-medium">Verify eligibility privately with FHE</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {mounted && isConnected && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
              <div className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[var(--success)]">Connected</span>
            </div>
          )}
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}

