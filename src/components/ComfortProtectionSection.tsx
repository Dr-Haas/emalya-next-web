"use client";

import React from 'react';
import { Shield, Droplet, SmilePlus } from 'lucide-react';
import { useGsapFadeIn, useGsapStagger } from '@/hooks/useGsapAnimations';

const ComfortProtectionSection = () => {
  const titleRef = useGsapFadeIn<HTMLDivElement>({ y: 30 });
  const cardsRef = useGsapStagger<HTMLDivElement>('.comfort-card', { scale: true, stagger: 0.2, y: 40 });

  const features = [
    {
      icon: <Droplet className="h-12 w-12 text-emalya-blue" />,
      title: "Sans douleur",
      description: "Notre méthode est totalement indolore et ne nécessite aucune anesthésie. Un confort optimal pendant toute la procédure."
    },
    {
      icon: <Shield className="h-12 w-12 text-emalya-blue" />,
      title: "Protection renforcée",
      description: "Les facettes ÉMALYA ne se contentent pas d'embellir vos dents, elles ajoutent une couche de protection supplémentaire à votre émail naturel."
    },
    {
      icon: <SmilePlus className="h-12 w-12 text-emalya-blue" />,
      title: "Résultats durables",
      description: "Une solution qui allie esthétique et fonctionnalité pour un sourire éclatant et des dents plus fortes."
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-emalya-cream">
      <div className="container">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emalya-blue mb-4">
            Une méthode douce, pour des dents fortes
          </h2>
          <p className="text-lg text-emalya-gray/80 max-w-3xl mx-auto">
            Chez ÉMALYA, nous croyons qu'améliorer votre sourire ne devrait jamais compromettre la santé de vos dents.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="comfort-card bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 rounded-full bg-emalya-cream p-4 inline-flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-emalya-blue mb-3">{feature.title}</h3>
              <p className="text-emalya-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComfortProtectionSection;
