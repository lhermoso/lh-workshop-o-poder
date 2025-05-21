import React from 'react';
import { CTAButton } from './CTAButton';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#0a0e17] to-[#1a1f2e] text-white py-6">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            <span className="text-primary">O Poder da</span> Terceira Linha
          </h1>
          <CTAButton />
        </div>
      </div>
    </header>
  );
};
