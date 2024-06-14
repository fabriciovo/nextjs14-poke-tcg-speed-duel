"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [pokemon, setPokemon] = useState<any>(undefined);

  return (
    <AppContext.Provider
      value={{
        setPokemon,
      }}
    >
      <>{children}</>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
