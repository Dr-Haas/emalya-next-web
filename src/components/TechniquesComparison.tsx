"use client";

import { Check, X, Sparkles, Gem, Clock, Shield, Palette, Target, Banknote } from "lucide-react";
import Link from "next/link";
import { Button } from '@/components/ui/button';

const TechniquesComparison = () => {
  const comparisons = [
    {
      label: "Tarif indicatif (à partir de)",
      icon: Banknote,
      composite: "5 000 €",
      ceramique: "10 000 €",
    },
    {
      label: "Objectif",
      icon: Target,
      composite: "Embellir naturellement",
      ceramique: "Transformer durablement",
    },
    {
      label: "Approche",
      icon: Palette,
      composite: "Ajout ciblé de composite",
      ceramique: "Facettes ultra-fines collées"
    },
    {
      label: "Durabilité",
      icon: Clock,
      composite: "5 à 8 ans",
      ceramique: "15 à 20 ans"
    },
    {
      label: "Résistance aux taches",
      icon: Shield,
      composite: "Moyenne",
      ceramique: "Excellente"
    },
    {
      label: "Rendu esthétique",
      icon: Sparkles,
      composite: "Naturel et subtil",
      ceramique: "Lumineux et éclatant"
    },
    {
      label: "Idéal pour",
      icon: Gem,
      composite: "Petits défauts, retouches",
      ceramique: "Transformation complète"
    }
  ];

  const features = [
    { label: "Aucune taille des dents", composite: true, ceramique: true },
    { label: "Aucune préparation", composite: true, ceramique: true },
    { label: "Respect de l'émail", composite: true, ceramique: true },
    { label: "Résultat réversible", composite: true, ceramique: false },
    { label: "Stabilité couleur long terme", composite: false, ceramique: true },
    { label: "Résistance maximale", composite: false, ceramique: true }
  ];

  return (
    <section id="comparatif" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Comparatif
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Quelle technique choisir ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deux approches conservatrices, un même objectif : sublimer votre sourire sans jamais abîmer vos dents.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Composite Bonding Card */}
          <div className="relative bg-card rounded-2xl border border-border p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -top-4 left-8">
              <span className="bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Embellissement
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6 pt-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Pack Signature</h3>
                <p className="text-sm text-muted-foreground">L'art de la subtilité</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Pour ceux qui veulent un "mieux" sans que cela se voie. Corrections ciblées et naturelles.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {feature.composite ? (
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0" />
                  )}
                  <span className={feature.composite ? "text-foreground" : "text-muted-foreground/60"}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/facettes-composites-naturelles">
              <Button variant="outline" className="w-full border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10">
                En savoir plus
              </Button>
            </Link>
          </div>

          {/* Facettes Céramique Card */}
          <div className="relative bg-card rounded-2xl border-2 border-primary p-8 shadow-xl">
            <div className="absolute -top-4 left-8">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                Transformation
              </span>
            </div>
            <div className="absolute -top-4 right-8">
              <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                <Gem className="w-3 h-3" /> Premium
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6 pt-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Gem className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Pack Premium</h3>
                <p className="text-sm text-muted-foreground">L'excellence durable</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Pour une véritable métamorphose du sourire, pensée sur le long terme avec la céramique.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {feature.ceramique ? (
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0" />
                  )}
                  <span className={feature.ceramique ? "text-foreground" : "text-muted-foreground/60"}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/facettes-ceramiques-premium">
              <Button className="w-full">
                Découvrir
              </Button>
            </Link>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b border-border">
              <div className="font-semibold text-foreground">Critère</div>
              <div className="font-semibold text-emerald-600 text-center">Pack Signature</div>
              <div className="font-semibold text-primary text-center">Pack Premium</div>
            </div>
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-4 items-center ${index !== comparisons.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground font-medium text-sm md:text-base">{item.label}</span>
                </div>
                <div className="text-center text-sm md:text-base text-muted-foreground">{item.composite}</div>
                <div className="text-center text-sm md:text-base text-foreground font-medium">{item.ceramique}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous ne savez pas quelle technique vous convient ?
          </p>
          <Link href="/rendez-vous">
            <Button size="lg" className="shadow-lg">
              Demander une évaluation gratuite
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechniquesComparison;
