"use client";

import { Check, X } from 'lucide-react';
import { useGsapFadeIn, useGsapStagger } from '@/hooks/useGsapAnimations';

const ManifestoSection = () => {
  const titleRef = useGsapFadeIn<HTMLHeadingElement>({ y: 30 });
  const textRef = useGsapFadeIn<HTMLParagraphElement>({ y: 20, delay: 0.1 });
  const cardsRef = useGsapStagger<HTMLDivElement>('.manifesto-card', { scale: true, stagger: 0.2 });
  const bottomRef = useGsapFadeIn<HTMLDivElement>({ y: 20, delay: 0.2 });

  return (
    <section className="section bg-emalya-blue text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            🎯 Notre philosophie clinique
          </h2>
          
          <p ref={textRef} className="text-lg mb-10">
            Nous avons fait le choix d'une dentisterie esthétique conservatrice, respectueuse de la dent naturelle.
          </p>
          
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="manifesto-card bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-emalya-pink">🌿 Composite Emalya</h3>
              <p className="text-white/90">Pour l'embellissement subtil et naturel</p>
            </div>
            
            <div className="manifesto-card bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-emalya-pink">💎 Facettes Céramiques Emalya</h3>
              <p className="text-white/90">Pour une transformation durable et pérenne</p>
            </div>
          </div>
          
          <div ref={bottomRef}>
            <p className="text-lg font-semibold mb-6">Dans les deux cas :</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" />
                <span>Aucune taille</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" />
                <span>Aucune préparation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Respect maximal de la dent</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Sélection rigoureuse des indications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
