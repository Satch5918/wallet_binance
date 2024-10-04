// components/Trading.tsx
import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';

interface TradingProps {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
  };
}

const Trading: React.FC<TradingProps> = ({ crypto }) => {
  const [amount, setAmount] = useState<number>(0);
  const { usdBalance, buyCrypto, sellCrypto } = useWallet();

  const handleBuy = () => {
    if (amount > 0) {
      buyCrypto({ id: crypto.id, name: crypto.name, symbol: crypto.symbol, amount: 0 }, crypto.current_price, amount);
    }
  };

  const handleSell = () => {
    if (amount > 0) {
      sellCrypto({ id: crypto.id, name: crypto.name, symbol: crypto.symbol, amount: 0 }, crypto.current_price, amount);
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4 text-black">Operar con {crypto.name}</h2>
      <div className="mb-2">
        <span className="text-black">Precio actual: ${crypto.current_price}</span>
      </div>
      <div className="mb-2">
        <span className="text-black">Saldo en USD: ${usdBalance.toFixed(2)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-2 border rounded-lg text-black"
          placeholder="Cantidad"
        />
        <button
          onClick={handleBuy}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Comprar
        </button>
        <button
          onClick={handleSell}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Vender
        </button>
      </div>
    </div>
  );
};

export default Trading;
