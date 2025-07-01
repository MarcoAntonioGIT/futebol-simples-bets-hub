
import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';

interface MatchCardProps {
  match: {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    championship: string;
    odds: {
      home: number;
      draw: number;
      away: number;
    };
    isLive?: boolean;
  };
  onBet: (matchId: string, betType: string, odds: number) => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onBet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">{match.championship}</span>
        {match.isLive && (
          <div className="flex items-center text-red-500 text-sm font-medium">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            AO VIVO
          </div>
        )}
      </div>
      
      <div className="text-center mb-4">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <h3 className="font-semibold text-lg">{match.homeTeam}</h3>
          </div>
          <div className="mx-4 text-gray-400">
            <span className="text-sm">VS</span>
          </div>
          <div className="text-center flex-1">
            <h3 className="font-semibold text-lg">{match.awayTeam}</h3>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-2 text-gray-600">
          <Clock size={16} className="mr-1" />
          <span className="text-sm">{match.date} às {match.time}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button
          onClick={() => onBet(match.id, 'home', match.odds.home)}
          className="bg-gray-100 hover:bg-[#0A3D62] hover:text-white p-3 rounded-lg text-center transition-colors group"
        >
          <div className="text-xs text-gray-600 group-hover:text-white/80">Casa</div>
          <div className="font-bold">{match.odds.home.toFixed(2)}</div>
        </button>
        
        <button
          onClick={() => onBet(match.id, 'draw', match.odds.draw)}
          className="bg-gray-100 hover:bg-[#0A3D62] hover:text-white p-3 rounded-lg text-center transition-colors group"
        >
          <div className="text-xs text-gray-600 group-hover:text-white/80">Empate</div>
          <div className="font-bold">{match.odds.draw.toFixed(2)}</div>
        </button>
        
        <button
          onClick={() => onBet(match.id, 'away', match.odds.away)}
          className="bg-gray-100 hover:bg-[#0A3D62] hover:text-white p-3 rounded-lg text-center transition-colors group"
        >
          <div className="text-xs text-gray-600 group-hover:text-white/80">Fora</div>
          <div className="font-bold">{match.odds.away.toFixed(2)}</div>
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
