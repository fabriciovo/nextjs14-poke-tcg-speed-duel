"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>({
  card:{}
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [card, setCard] = useState<any>(undefined);

  return (
    <AppContext.Provider
      value={{
        card,
        setCard,
      }}
    >
      <>{children}</>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
