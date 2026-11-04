import { createContext, useContext, useState, type ReactNode } from 'react';

interface AppContextData {
  soulPoints: number;
  agua: number;
  adicionarPontos: (quantidade: number) => void;
  regarPlanta: () => void;
}

const AppContext = createContext<AppContextData | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [soulPoints, setSoulPoints] = useState<number>(150);
  const [agua, setAgua] = useState<number>(50);

  const adicionarPontos = (quantidade: number) => {
    setSoulPoints((prev) => prev + quantidade);
  };

  const regarPlanta = () => {
    if (agua > 0) {
      setAgua((prev) => prev - 10);
      adicionarPontos(15);
    }
  };

  return (
    <AppContext.Provider value={{ soulPoints, agua, adicionarPontos, regarPlanta }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
}