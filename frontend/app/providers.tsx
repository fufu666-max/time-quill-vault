"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '../config/wagmi';
import '@rainbow-me/rainbowkit/styles.css';
import { InMemoryStorageProvider } from "../hooks/useInMemoryStorage";
import { SuppressConsoleErrors } from "./suppress-console-errors";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  // Create QueryClient instance once and keep it stable
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Prevent refetch on window focus in SSR environment
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <InMemoryStorageProvider>
            <SuppressConsoleErrors />
            {children}
          </InMemoryStorageProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
