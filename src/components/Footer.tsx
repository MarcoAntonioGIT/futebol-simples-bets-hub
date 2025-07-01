
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ocean-blue text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-sponge-yellow">🧽 Bob Esponja Bet</h3>
            <p className="text-white/80 text-sm">
              A melhor plataforma de apostas submarinas da Fenda do Biquíni.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sponge-yellow">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="text-white/70 hover:text-sponge-yellow">Sobre Nós</Link></li>
              <li><Link to="/termos" className="text-white/70 hover:text-sponge-yellow">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-white/70 hover:text-sponge-yellow">Política de Privacidade</Link></li>
              <li><Link to="/suporte" className="text-white/70 hover:text-sponge-yellow">Suporte</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sponge-yellow">Aposta Responsável</h4>
            <p className="text-white/80 text-sm">
              Aposte com responsabilidade na Fenda do Biquíni. +18 anos.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          © 2024 Bob Esponja Bet. Todos os direitos reservados na Fenda do Biquíni.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
