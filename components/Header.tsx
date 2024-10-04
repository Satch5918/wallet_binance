// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CriptoApp</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Mercado</a></li>
          <li><a href="#">Cartera</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
