
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">⚽ FutebolBets</h3>
            <p className="text-gray-400 text-sm">
              A melhor plataforma de apostas esportivas do Brasil.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
              <li><Link to="/termos" className="text-gray-400 hover:text-white">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-400 hover:text-white">Política de Privacidade</Link></li>
              <li><Link to="/suporte" className="text-gray-400 hover:text-white">Suporte</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Jogo Responsável</h4>
            <p className="text-gray-400 text-sm">
              Aposte com responsabilidade. +18 anos.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 FutebolBets. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
