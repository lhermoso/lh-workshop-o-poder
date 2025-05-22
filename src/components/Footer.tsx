import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e17] text-white py-8">
      <div className="container-wide">
        <div className="flex flex-col items-center">
          <p className="text-center text-sm mb-4">
            Copyright {currentYear} © Léo Hemoso · Todos os direitos Reservados
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link href="/termos" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/lgpd" className="hover:text-primary transition-colors">
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;