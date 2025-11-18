import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import {
  GenericStringInMemoryStorage,
  GenericStringStorage,
} from "../fhevm/GenericStringStorage";

interface UseInMemoryStorageState {
  storage: GenericStringStorage;
  isInitialized: boolean;
  error: string | null;
}

interface InMemoryStorageProviderProps {
  children: ReactNode;
}

const InMemoryStorageContext = createContext<
  UseInMemoryStorageState | undefined
>(undefined);

export const useInMemoryStorage = () => {
  const context = useContext(InMemoryStorageContext);
  if (!context) {
    throw new Error(
      "useInMemoryStorage must be used within a InMemoryStorageProvider"
    );
  }
  return context;
};

export const InMemoryStorageProvider: React.FC<
  InMemoryStorageProviderProps
> = ({ children }) => {
  const [storage, setStorage] = useState<GenericStringStorage | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Initialize storage with error handling
      const newStorage = new GenericStringInMemoryStorage();
      setStorage(newStorage);
      setIsInitialized(true);
    } catch (err) {
      console.error("Failed to initialize in-memory storage:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
      setIsInitialized(true); // Still mark as initialized to prevent infinite loading
    }
  }, []);

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Show error state if initialization failed
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md">
          <h3 className="text-red-800 font-medium">Storage Initialization Error</h3>
          <p className="text-red-600 text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <InMemoryStorageContext.Provider value={{ storage: storage!, isInitialized, error }}>
      {children}
    </InMemoryStorageContext.Provider>
  );
};

