"use client";

import { ArrowRight, Leaf, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useGsapFadeIn, useGsapStagger } from '@/hooks/useGsapAnimations';

interface ProductCardProps {
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  link: string;
  isPrimary?: boolean;
}

const ProductCard = ({ icon, badge, title, subtitle, description, price, features, link, isPrimary }: ProductCardProps) => {
  return (
    <div className={`product-card rounded-2xl p-8 md:p-10 flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
      isPrimary 
        ? 'bg-emalya-blue text-white shadow-lg scale-[1.02]' 
        : 'bg-white shadow-md border border-emalya-cream'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${isPrimary ? 'bg-white/20' : 'bg-emalya-cream'}`}>
          {icon}
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
          isPrimary ? 'bg-emalya-pink text-emalya-blue' : 'bg-emalya-blue/10 text-emalya-blue'
        }`}>
          {badge}
        </span>
      </div>
      
      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-emalya-blue'}`}>
        {title}
      </h3>
      
      <p className={`text-sm font-medium mb-4 ${isPrimary ? 'text-emalya-pink' : 'text-emalya-blue/70'}`}>
        {subtitle}
      </p>
      
      <p className={`mb-6 leading-relaxed ${isPrimary ? 'text-white/90' : 'text-emalya-gray'}`}>
        {description}
      </p>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                isPrimary ? 'bg-emalya-pink' : 'bg-emalya-blue'
              }`} />
              <span className={`text-sm ${isPrimary ? 'text-white/80' : 'text-emalya-gray'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <p className={`text-lg font-semibold mb-4 ${isPrimary ? 'text-emalya-pink' : 'text-emalya-blue'}`}>
          {price}
        </p>
        
        <Button 
          asChild
          className={`w-full py-6 rounded-xl font-semibold group ${
            isPrimary 
              ? 'bg-white text-emalya-blue hover:bg-emalya-pink' 
              : 'bg-emalya-blue text-white hover:bg-emalya-blue/90'
          }`}
        >
          <Link href={link}>
            Découvrir
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ProductsShowcase = () => {
  const titleRef = useGsapFadeIn<HTMLDivElement>({ y: 30 });
  const cardsRef = useGsapStagger<HTMLDivElement>('.product-card', { scale: true, stagger: 0.25, y: 50 });

  const products = [
    {
      icon: <Leaf className="w-6 h-6 text-emalya-blue" />,
      badge: "Embellissement naturel",
      title: "Composite Emalya",
      subtitle: "L'embellissement naturel du sourire",
      description: "Technique ultra-conservatrice qui consiste à ajouter du composite de manière ciblée pour améliorer l'harmonie du sourire, sans jamais dénaturer son aspect naturel.",
      price: "Tarif sur consultation",
      features: [
        "Aucune taille ni préparation",
        "Aucun meulage de la dent",
        "Travail artistique dent par dent",
        "Rendu invisible et subtil",
        "Idéal pour un \"mieux\" discret"
      ],
      link: "/composite-emalya",
      isPrimary: false
    },
    {
      icon: <Gem className="w-6 h-6 text-white" />,
      badge: "Transformation durable",
      title: "Facettes Céramiques Emalya",
      subtitle: "La transformation durable du sourire",
      description: "Facettes céramiques sans préparation pour une transformation plus globale et plus durable. Stabilité de teinte, résistance supérieure et esthétique lumineuse.",
      price: "Tarif sur consultation",
      features: [
        "Aucune taille des dents",
        "Aucune atteinte à l'émail",
        "Facettes ultra-fines",
        "Durabilité supérieure",
        "Esthétique haut de gamme"
      ],
      link: "/facettes-ceramique",
      isPrimary: true
    }
  ];

  return (
    <section id="techniques" className="section bg-gradient-to-b from-emalya-offwhite to-emalya-cream">
      <div className="container">
        <div ref={titleRef} className="text-center mb-6">
          <h2 className="text-emalya-blue mb-4">✨ Nos techniques esthétiques</h2>
          <p className="text-lg text-emalya-gray max-w-3xl mx-auto mb-6">
            Deux approches esthétiques conservatrices, sans aucune taille des dents ni préparation, 
            chacune répondant à un objectif précis :
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-emalya-cream px-4 py-2 rounded-full text-emalya-blue font-medium">
              👉 Embellir naturellement
            </span>
            <span className="bg-emalya-blue px-4 py-2 rounded-full text-white font-medium">
              👉 Transformer durablement
            </span>
          </div>
        </div>

        <p className="text-center text-emalya-gray mb-12 max-w-2xl mx-auto">
          Dans tous les cas, la dent naturelle est respectée, et aucun meulage n'est réalisé.
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
