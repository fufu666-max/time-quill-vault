import { useMemo, useEffect, useState } from 'react';
import { useWalletClient } from 'wagmi';
import { BrowserProvider, JsonRpcSigner } from 'ethers';

async function walletClientToSigner(walletClient: any): Promise<JsonRpcSigner> {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ...(chain.contracts?.ensRegistry?.address ? { ensAddress: chain.contracts.ensRegistry.address } : {}),
  };

  const provider = new BrowserProvider(transport, network);
  const signer = await provider.getSigner(account.address);
  return signer;
}

export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  const [signer, setSigner] = useState<JsonRpcSigner | undefined>(undefined);

  useEffect(() => {
    if (walletClient) {
      walletClientToSigner(walletClient).then(setSigner);
    } else {
      setSigner(undefined);
    }
  }, [walletClient]);

  return useMemo(() => signer, [signer]);
}

export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  const provider = useMemo(() => {
    if (!walletClient) return undefined;
    const { chain, transport } = walletClient;
    const network = {
      chainId: chain.id,
      name: chain.name,
      ...(chain.contracts?.ensRegistry?.address ? { ensAddress: chain.contracts.ensRegistry.address } : {}),
    };
    return new BrowserProvider(transport, network);
  }, [walletClient]);
  return provider;
}

