// pages/index.tsx
import CryptoList from '../components/CryptoList';
import CryptoChart from '../components/CryptoChart';
import Trading from '../components/Trading';
import Wallet from '../components/Wallet';
import { WalletProvider } from '../context/WalletContext';
import { useState } from 'react';

const Home = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<any>(null);

  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 p-4 text-white">
          <h1 className="text-3xl font-bold">Crypto Dashboard</h1>
        </header>
        <main className="container mx-auto p-4">
          <CryptoList />
          <div className="mt-8">
            <CryptoChart />
          </div>
          {selectedCrypto && (
            <div className="mt-8">
              <Trading crypto={selectedCrypto} />
            </div>
          )}
          <div className="mt-8">
            <Wallet />
          </div>
        </main>
      </div>
    </WalletProvider>
  );
};

export default Home;
