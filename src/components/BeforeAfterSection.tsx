"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import type { StaticImageData } from 'next/image';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useGsapFadeIn, useGsapStagger } from '@/hooks/useGsapAnimations';

const cases = [
  {
    id: 1,
    before: "/assets/before-teeth.png",
    after: "/assets/after-teeth.png",
    caption: "Résultat obtenu en une seule séance, sans douleur et sans préparation des dents naturelles."
  },
  {
    id: 2,
    before: "/assets/before-teeth-2.png",
    after: "/assets/after-teeth-2.png",
    caption: "Transformation complète avec des facettes composites pour un sourire harmonieux."
  },
  {
    id: 3,
    before: "/assets/before-teeth-3.png",
    after: "/assets/after-teeth-3.png",
    caption: "Correction des imperfections pour un sourire naturel et éclatant."
  },
  {
    id: 4,
    before: "/assets/before-teeth-4.png",
    after: "/assets/after-teeth-4.png",
    caption: "Restauration esthétique pour un sourire parfaitement aligné."
  },
  {
    id: 5,
    before: "/assets/before-teeth-5.png",
    after: "/assets/after-teeth-5.png",
    caption: "Blanchiment et harmonisation pour un sourire lumineux et naturel."
  }
];

function imageSrc(src: string | StaticImageData): string {
  return typeof src === 'string' ? src : src.src;
}

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData;
  afterImage: string | StaticImageData;
}

const BeforeAfterSlider = ({ beforeImage, afterImage }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize shadow-xl select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* After Image (Background) */}
      <img 
        src={imageSrc(afterImage)} 
        alt="Après traitement ÉMALYA" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute top-0 left-0 bottom-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={imageSrc(beforeImage)} 
          alt="Avant traitement ÉMALYA" 
          className="absolute top-0 left-0 h-full object-cover"
          style={{ 
            width: containerWidth > 0 ? `${containerWidth}px` : '100%',
            minWidth: containerWidth > 0 ? `${containerWidth}px` : '100%',
          }}
          draggable={false}
        />
      </div>
      
      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-emalya-blue rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <svg className="w-4 h-4 text-emalya-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-background px-3 py-1 rounded-full text-sm font-medium z-20">
        Avant
      </div>
      <div className="absolute bottom-4 right-4 bg-emalya-blue/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-20">
        Après
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const titleRef = useGsapFadeIn<HTMLDivElement>({ y: 30 });
  const slidersRef = useGsapStagger<HTMLDivElement>('.ba-case', { y: 50, stagger: 0.2, scale: false });
  const ctaRef = useGsapFadeIn<HTMLDivElement>({ y: 20 });

  return (
    <section id="avant-apres" className="section bg-emalya-cream">
      <div className="container">
        <div ref={titleRef}>
          <h2 className="text-center text-emalya-blue mb-4">Transformations ÉMALYA</h2>
          <p className="text-center text-emalya-gray mb-12 max-w-2xl mx-auto">
            Découvrez le résultat de nos traitements. Faites glisser la barre pour comparer avant et après.
          </p>
        </div>
        
        <div ref={slidersRef} className="max-w-3xl mx-auto space-y-12">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="ba-case space-y-4">
              <BeforeAfterSlider 
                beforeImage={caseItem.before} 
                afterImage={caseItem.after} 
              />
              <p className="text-center text-emalya-gray italic">
                {caseItem.caption}
              </p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-12">
          <Link
            href="/simulateur-sourire"
            className="btn-primary inline-flex items-center justify-center gap-2 group"
          >
            <Sparkles className="h-5 w-5" />
            Simuler mon sourire
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
