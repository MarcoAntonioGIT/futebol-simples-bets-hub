
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Trophy, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/partidas', label: 'Partidas', icon: Calendar },
    { path: '/minhas-apostas', label: 'Minhas Apostas', icon: Trophy },
    { path: '/perfil', label: 'Perfil', icon: User },
  ];

  return (
    <nav className="bg-[#0A3D62] text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            ⚽ FutebolBets
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:block text-sm">Saldo: R$ 250,00</span>
            <Link
              to="/login"
              className="bg-white text-[#0A3D62] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-[#0A3D62] border-t border-white/20">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-white/70'
                }`}
              >
                <Icon size={18} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
