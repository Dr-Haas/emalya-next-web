"use client";

import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/useGsapAnimations";

const FormationSection = () => {
  const titleRef = useGsapFadeIn<HTMLDivElement>({ y: 30 });
  const cardsRef = useGsapStagger<HTMLDivElement>(".formation-card", { scale: true, stagger: 0.15, y: 40 });

  return (
    <section id="formation" className="section bg-white border-y border-emalya-cream">
      <div className="container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-emalya-blue font-semibold text-sm uppercase tracking-wider mb-3">
            <GraduationCap className="w-5 h-5" />
            Transmission & excellence
          </span>
          <h2 className="text-emalya-blue mb-4">Formation ÉMALYA</h2>
          <p className="text-lg text-emalya-gray">
            Des parcours structurés pour les praticiens qui souhaitent maîtriser nos protocoles conservateurs :
            sélection des cas, gestuelle, finition — avec la même exigence clinique que sur nos patients.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10"
        >
          {[
            {
              title: "Modules ciblés",
              text: "Mise à niveau sur les indications, les limites et le dialogue patient pour des résultats prévisibles.",
            },
            {
              title: "Cas live & mentoring",
              text: "Analyse de situations réelles et critères d’éligibilité alignés sur la philosophie « sublimer sans altérer ».",
            },
            {
              title: "Réseau",
              text: "Rejoindre une communauté de praticiens engagés sur l’esthétique conservatrice haut de gamme.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="formation-card bg-emalya-offwhite rounded-xl p-6 border border-emalya-cream shadow-sm"
            >
              <h3 className="text-lg font-bold text-emalya-blue mb-2">{item.title}</h3>
              <p className="text-emalya-gray text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-emalya-blue text-white hover:bg-emalya-blue/90 px-8 py-6 rounded-xl font-semibold group"
          >
            <Link href={ROUTES.formation}>
              Découvrir la formation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
