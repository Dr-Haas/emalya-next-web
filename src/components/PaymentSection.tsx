"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, Banknote, ExternalLink, ChevronsRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useGsapFadeIn } from '@/hooks/useGsapAnimations';

const PaymentSection = () => {
  const router = useRouter();
  const sectionRef = useGsapFadeIn<HTMLDivElement>({ y: 50, duration: 0.9 });

  const handleBookAppointment = () => {
    router.push('/rendez-vous');
  };
  const handleLearnMore = () => {
    router.push('/facilitation-paiement');
  };

  return (
    <section className="bg-emalya-offwhite py-16 border-t border-emalya-cream" id="paiement">
      <div className="container mx-auto">
        <div ref={sectionRef} className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-emalya-blue h-7 w-7" />
                <h2 className="text-2xl md:text-3xl font-bold text-emalya-blue">Facilitez votre paiement</h2>
              </div>
              
              <p className="text-emalya-gray text-lg mb-6">
                ÉMALYA vous propose le paiement en <span className="font-semibold">4 fois sans frais</span>, en partenariat avec FloaBank.
              </p>
              
              <div className="bg-emalya-cream rounded-lg p-5 mb-6">
                <div className="flex items-start gap-3">
                  <Banknote className="text-emalya-blue mt-1 h-5 w-5" />
                  <p className="text-emalya-gray">
                    Aucune démarche bancaire, tout se fait en quelques minutes au cabinet.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-emalya-gray italic mb-6">
                → Disponible pour les soins esthétiques réalisés avec la méthode ÉMALYA
              </p>

              <div className="flex items-center gap-4">
                <Button onClick={handleBookAppointment} className="bg-emalya-blue text-white hover:bg-emalya-blue/90 transition-colors">
                  Réserver un rendez-vous
                  <ChevronsRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button variant="outline" onClick={handleLearnMore} className="border-emalya-blue text-emalya-blue hover:bg-emalya-blue/10 transition-colors">
                  En savoir plus
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white flex-shrink-0 w-full md:w-64 lg:w-80 flex items-center justify-center p-8">
              <img src="/assets/floa-logo.png" alt="FLOA Bank" className="w-full max-w-[180px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
