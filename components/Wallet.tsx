// components/Wallet.tsx
import React from 'react';
import { useWallet } from '../context/WalletContext';

const Wallet: React.FC = () => {
  const { usdBalance, cryptoBalance } = useWallet();

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4 text-black">Mi Wallet</h2>
      <div className="mb-2">
        <span className="text-black">Saldo en USD: ${usdBalance.toFixed(2)}</span>
      </div>
      <h3 className="font-bold mb-2 text-black">Criptomonedas:</h3>
      <ul className="text-black">
        {cryptoBalance.length === 0 ? (
          <p>No tienes criptomonedas en tu wallet.</p>
        ) : (
          cryptoBalance.map((crypto) => (
            <li key={crypto.id}>
              {crypto.name} ({crypto.symbol.toUpperCase()}): {crypto.amount.toFixed(4)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Wallet;
