
import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import MatchCard from '../components/MatchCard';
import BetModal from '../components/BetModal';
import { toast } from '@/components/ui/use-toast';

const Matches = () => {
  const [selectedChampionship, setSelectedChampionship] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [betModal, setBetModal] = useState<{
    isOpen: boolean;
    bet: any;
  }>({ isOpen: false, bet: null });

  const championships = [
    { id: 'all', name: 'Todos os Campeonatos' },
    { id: 'brasileiro', name: 'Campeonato Brasileiro' },
    { id: 'copa-brasil', name: 'Copa do Brasil' },
    { id: 'champions', name: 'Champions League' },
    { id: 'libertadores', name: 'Copa Libertadores' },
    { id: 'premier', name: 'Premier League' },
  ];

  const allMatches = [
    {
      id: '1',
      homeTeam: 'Flamengo',
      awayTeam: 'Palmeiras',
      date: '01/07',
      time: '16:30',
      championship: 'Campeonato Brasileiro',
      championshipId: 'brasileiro',
      odds: { home: 2.10, draw: 3.20, away: 3.40 },
      isLive: true
    },
    {
      id: '2',
      homeTeam: 'Santos',
      awayTeam: 'Corinthians',
      date: '01/07',
      time: '18:00',
      championship: 'Campeonato Brasileiro',
      championshipId: 'brasileiro',
      odds: { home: 2.80, draw: 3.10, away: 2.50 }
    },
    {
      id: '3',
      homeTeam: 'São Paulo',
      awayTeam: 'Grêmio',
      date: '02/07',
      time: '16:00',
      championship: 'Copa do Brasil',
      championshipId: 'copa-brasil',
      odds: { home: 1.90, draw: 3.40, away: 4.20 }
    },
    {
      id: '4',
      homeTeam: 'Atlético-MG',
      awayTeam: 'Internacional',
      date: '03/07',
      time: '20:00',
      championship: 'Campeonato Brasileiro',
      championshipId: 'brasileiro',
      odds: { home: 2.60, draw: 3.00, away: 2.90 }
    },
    {
      id: '5',
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      date: '03/07',
      time: '14:30',
      championship: 'Premier League',
      championshipId: 'premier',
      odds: { home: 2.40, draw: 3.60, away: 2.80 }
    },
    {
      id: '6',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      date: '04/07',
      time: '16:00',
      championship: 'Champions League',
      championshipId: 'champions',
      odds: { home: 2.20, draw: 3.40, away: 3.10 }
    }
  ];

  const filteredMatches = allMatches.filter(match => {
    const matchesChampionship = selectedChampionship === 'all' || match.championshipId === selectedChampionship;
    const matchesSearch = searchTerm === '' || 
      match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.championship.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesChampionship && matchesSearch;
  });

  const handleBet = (matchId: string, betType: string, odds: number) => {
    const match = allMatches.find(m => m.id === matchId);
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Todas as Partidas</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter size={16} className="inline mr-1" />
                Campeonato
              </label>
              <select
                value={selectedChampionship}
                onChange={(e) => setSelectedChampionship(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent"
              >
                {championships.map(championship => (
                  <option key={championship.id} value={championship.id}>
                    {championship.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search size={16} className="inline mr-1" />
                Buscar times
              </label>
              <input
                type="text"
                placeholder="Digite o nome de um time..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredMatches.length} partida{filteredMatches.length !== 1 ? 's' : ''}
            {selectedChampionship !== 'all' && 
              ` em ${championships.find(c => c.id === selectedChampionship)?.name}`
            }
          </p>
        </div>

        {/* Matches Grid */}
        {filteredMatches.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBet={handleBet}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">Nenhuma partida encontrada</div>
            <p className="text-gray-600">Tente alterar os filtros de busca</p>
          </div>
        )}

        <BetModal
          isOpen={betModal.isOpen}
          onClose={() => setBetModal({ isOpen: false, bet: null })}
          bet={betModal.bet}
          onConfirmBet={handleConfirmBet}
        />
      </div>
    </div>
  );
};

export default Matches;
