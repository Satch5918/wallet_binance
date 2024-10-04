// context/WalletContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CryptoBalance {
  id: string;
  name: string;
  symbol: string;
  amount: number;
}

interface WalletContextType {
  usdBalance: number;
  cryptoBalance: CryptoBalance[];
  buyCrypto: (crypto: CryptoBalance, price: number, amount: number) => void;
  sellCrypto: (crypto: CryptoBalance, price: number, amount: number) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC = ({ children }) => {
  const [usdBalance, setUsdBalance] = useState<number>(10000); // Saldo inicial en USD
  const [cryptoBalance, setCryptoBalance] = useState<CryptoBalance[]>([]);

  const buyCrypto = (crypto: CryptoBalance, price: number, amount: number) => {
    const totalCost = price * amount;
    if (usdBalance >= totalCost) {
      setUsdBalance(usdBalance - totalCost);
      setCryptoBalance((prev) => {
        const existingCrypto = prev.find((c) => c.id === crypto.id);
        if (existingCrypto) {
          return prev.map((c) =>
            c.id === crypto.id ? { ...c, amount: c.amount + amount } : c
          );
        } else {
          return [...prev, { ...crypto, amount }];
        }
      });
    } else {
      alert("No tienes suficiente saldo en USD para comprar.");
    }
  };

  const sellCrypto = (crypto: CryptoBalance, price: number, amount: number) => {
    const totalValue = price * amount;
    const existingCrypto = cryptoBalance.find((c) => c.id === crypto.id);
    if (existingCrypto && existingCrypto.amount >= amount) {
      setUsdBalance(usdBalance + totalValue);
      setCryptoBalance((prev) =>
        prev.map((c) =>
          c.id === crypto.id
            ? { ...c, amount: c.amount - amount }
            : c
        )
      );
    } else {
      alert("No tienes suficientes criptomonedas para vender.");
    }
  };

  return (
    <WalletContext.Provider value={{ usdBalance, cryptoBalance, buyCrypto, sellCrypto }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet debe ser usado dentro de WalletProvider');
  }
  return context;
};
