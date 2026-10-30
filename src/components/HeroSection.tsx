"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import AnimatedWaves from '@/components/motion/AnimatedWaves';
import { prefersReducedMotion } from '@/hooks/useGsapAnimations';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      // Contenu affiché directement, sans mouvement.
      gsap.set(sectionRef.current.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta > *'), { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-title', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.hero-subtitle', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-cta > *', { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedWaves />
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-title text-emalya-blue font-bold text-4xl md:text-5xl lg:text-6xl mb-6 opacity-0">
            Sublimer le sourire. Sans altérer la dent.
          </h1>

          <p className="hero-subtitle text-emalya-gray text-lg md:text-xl mb-10 opacity-0">
            Une sélection rigoureuse des indications et un protocole <strong>sur-mesure</strong> pour deux offres exclusives :
            la <strong>Facette Composite Emalya</strong> et les <strong>Facettes Céramiques Emalya</strong>   sans taille des dents, dans le respect absolu de l’émail.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#techniques" className="btn-primary inline-flex items-center justify-center gap-2 group opacity-0">
              Découvrir nos protocoles
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <Link href="/rendez-vous" className="btn-secondary inline-flex items-center justify-center gap-2 opacity-0">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
