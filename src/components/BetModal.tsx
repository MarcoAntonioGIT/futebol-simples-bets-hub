
import React, { useState } from 'react';
import { X, Calculator } from 'lucide-react';

interface BetModalProps {
  isOpen: boolean;
  onClose: () => void;
  bet: {
    matchId: string;
    homeTeam: string;
    awayTeam: string;
    betType: string;
    odds: number;
  } | null;
  onConfirmBet: (amount: number) => void;
}

const BetModal: React.FC<BetModalProps> = ({ isOpen, onClose, bet, onConfirmBet }) => {
  const [betAmount, setBetAmount] = useState<number>(10);

  if (!isOpen || !bet) return null;

  const potentialReturn = betAmount * bet.odds;
  const profit = potentialReturn - betAmount;

  const getBetTypeLabel = (type: string) => {
    switch (type) {
      case 'home': return 'Vitória da Casa';
      case 'draw': return 'Empate';
      case 'away': return 'Vitória Visitante';
      default: return type;
    }
  };

  const handleConfirm = () => {
    onConfirmBet(betAmount);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Confirmar Aposta</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">{bet.homeTeam} vs {bet.awayTeam}</h3>
            <p className="text-sm text-gray-600">
              Aposta: {getBetTypeLabel(bet.betType)} (Odd: {bet.odds.toFixed(2)})
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor da Aposta (R$)
              </label>
              <input
                type="number"
                min="1"
                step="1"
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent"
              />
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Calculator size={18} className="text-green-600 mr-2" />
                <span className="font-semibold text-green-800">Retorno Potencial</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Valor apostado:</span>
                  <span>R$ {betAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lucro potencial:</span>
                  <span className="text-green-600 font-semibold">R$ {profit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-1">
                  <span className="font-semibold">Total a receber:</span>
                  <span className="font-bold text-green-600">R$ {potentialReturn.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 bg-[#0A3D62] text-white rounded-lg hover:bg-[#0A3D62]/90 transition-colors font-semibold"
          >
            Confirmar Aposta
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetModal;
