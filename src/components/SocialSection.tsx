"use client";

import React, { lazy, Suspense, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { useGsapFadeIn, useGsapStagger } from '@/hooks/useGsapAnimations';

const Icon = ({ name, ...props }: { name: keyof typeof dynamicIconImports; [key: string]: any }) => {
  const LucideIcon = lazy(dynamicIconImports[name]);
  return (
    <Suspense fallback={<div className="w-5 h-5" />}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

const SocialSection = () => {
  const titleRef = useGsapFadeIn<HTMLDivElement>({ y: 30 });
  const buttonsRef = useGsapStagger<HTMLDivElement>('.social-btn', { y: 20, stagger: 0.15, scale: true });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="bg-emalya-cream py-16">
      <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-emalya-blue mb-3">
            Suivez ÉMALYA
          </h2>
          <p className="text-emalya-gray text-lg mb-8 max-w-2xl mx-auto">
            Découvrez les sourires avant/après, nos conseils esthétiques et les moments en cabinet, sur nos réseaux.
          </p>
        </div>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn w-full sm:w-auto"
          >
            <Button 
              className="w-full sm:w-auto bg-emalya-blue hover:bg-emalya-blue/90 text-white py-6 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300"
            >
              <Icon name="instagram" className="h-5 w-5" />
              <span>Suivre sur Instagram</span>
            </Button>
          </a>
          
          <a 
            href="https://www.tiktok.com/@dr.haas" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn w-full sm:w-auto"
          >
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-emalya-blue text-emalya-blue hover:bg-emalya-blue hover:text-white py-6 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300" 
            >
              <Icon name="youtube" className="h-5 w-5" />
              <span>Voir nos vidéos TikTok</span>
            </Button>
          </a>
        </div>

        <div className="flex justify-center">
          <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@dr.haas" 
            data-unique-id="dr.haas"
            data-embed-type="creator"
            style={{ maxWidth: '780px', minWidth: '288px' }}
          >
            <section>
              <a target="_blank" href="https://www.tiktok.com/@dr.haas?refer=creator_embed">@dr.haas</a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
