
import React, { useState } from 'react';
import { TrendingUp, Clock, Star } from 'lucide-react';
import MatchCard from '../components/MatchCard';
import BetModal from '../components/BetModal';
import { toast } from '@/components/ui/use-toast';

const Home = () => {
  const [betModal, setBetModal] = useState<{
    isOpen: boolean;
    bet: any;
  }>({ isOpen: false, bet: null });

  // Mock data for matches
  const liveMatches = [
    {
      id: '1',
      homeTeam: 'Flamengo',
      awayTeam: 'Palmeiras',
      date: 'Hoje',
      time: '16:30',
      championship: 'Campeonato Brasileiro',
      odds: { home: 2.10, draw: 3.20, away: 3.40 },
      isLive: true
    },
    {
      id: '2',
      homeTeam: 'Santos',
      awayTeam: 'Corinthians',
      date: 'Hoje',
      time: '18:00',
      championship: 'Campeonato Brasileiro',
      odds: { home: 2.80, draw: 3.10, away: 2.50 },
      isLive: true
    }
  ];

  const upcomingMatches = [
    {
      id: '3',
      homeTeam: 'São Paulo',
      awayTeam: 'Grêmio',
      date: 'Amanhã',
      time: '16:00',
      championship: 'Copa do Brasil',
      odds: { home: 1.90, draw: 3.40, away: 4.20 }
    },
    {
      id: '4',
      homeTeam: 'Atlético-MG',
      awayTeam: 'Internacional',
      date: 'Domingo',
      time: '20:00',
      championship: 'Campeonato Brasileiro',
      odds: { home: 2.60, draw: 3.00, away: 2.90 }
    }
  ];

  const handleBet = (matchId: string, betType: string, odds: number) => {
    const match = [...liveMatches, ...upcomingMatches].find(m => m.id === matchId);
    if (match) {
      setBetModal({
        isOpen: true,
        bet: {
          matchId,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
          betType,
          odds
        }
      });
    }
  };

  const handleConfirmBet = (amount: number) => {
    toast({
      title: "Aposta confirmada!",
      description: `Sua aposta de R$ ${amount.toFixed(2)} foi registrada com sucesso.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0A3D62] to-[#1e5f8b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aposte nos Próximos Jogos
          </h1>
          <p className="text-xl mb-8 text-white/90">
            As melhores odds do futebol brasileiro e internacional
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-white/80">Jogos por mês</div>
            </div>
            <div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-white/80">Pagamentos rápidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Suporte online</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Live Matches Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <h2 className="text-2xl font-bold text-gray-800">Jogos ao Vivo</h2>
            <TrendingUp className="ml-2 text-red-500" size={24} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBet={handleBet}
              />
            ))}
          </div>
        </section>

        {/* Upcoming Matches Section */}
        <section>
          <div className="flex items-center mb-6">
            <Clock className="mr-3 text-[#0A3D62]" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Próximos Jogos</h2>
            <Star className="ml-2 text-yellow-500" size={24} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBet={handleBet}
              />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-bold mb-6 text-center">Estatísticas de Hoje</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0A3D62]">12</div>
              <div className="text-gray-600">Jogos hoje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">847</div>
              <div className="text-gray-600">Apostas ativas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">R$ 45.2k</div>
              <div className="text-gray-600">Total em apostas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">3.2x</div>
              <div className="text-gray-600">Maior odd do dia</div>
            </div>
          </div>
        </section>
      </div>

      <BetModal
        isOpen={betModal.isOpen}
        onClose={() => setBetModal({ isOpen: false, bet: null })}
        bet={betModal.bet}
        onConfirmBet={handleConfirmBet}
      />
    </div>
  );
};

export default Home;
