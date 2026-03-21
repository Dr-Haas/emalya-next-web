
import React from 'react';
import { Info } from 'lucide-react';

const InfoBox = () => {
  return (
    <div className="p-4 mb-8 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex gap-3">
        <Info className="text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-800">Pourquoi nous envoyer des photos ?</h3>
          <p className="text-amber-700 text-sm">
            En nous envoyant des photos de votre sourire actuel, notre praticien pourra 
            évaluer votre situation et préparer un plan de traitement personnalisé avant 
            votre premier rendez-vous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
