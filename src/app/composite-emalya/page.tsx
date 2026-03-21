"use client";

import { ArrowRight, Check, X, Leaf, Palette, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompositeEmalyaPage() {
  const howItWorks = [
    "Aucune taille, aucune préparation",
    "Aucun meulage de la dent",
    "Ajout de composite uniquement là où c'est nécessaire",
    "Travail artistique et minutieux, dent par dent",
    "Respect total de la morphologie naturelle"
  ];

  const objectives = [
    "Améliorer sans transformer",
    "Corriger les petits défauts",
    "Sublimer les détails du sourire",
    "Conserver une esthétique naturelle, non artificielle"
  ];

  const eligibleCriteria = [
    "Dents déjà alignées",
    "Dents de taille harmonieuse",
    "Défauts légers à modérés (formes, bords, petits espaces)",
    "Sourire déjà équilibré, nécessitant seulement un embellissement",
    "Patient recherchant un rendu très naturel"
  ];

  const notEligible = [
    "Dents très désalignées",
    "Volonté de changement radical",
    "Problème de position ou de volume important"
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emalya-cream via-emalya-offwhite to-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emalya-blue rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-emalya-pink rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emalya-blue/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="w-5 h-5 text-emalya-blue" />
                <span className="text-sm font-medium text-emalya-blue">Embellissement naturel</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-emalya-blue">
                Composite Emalya
              </h1>

              <p className="text-xl md:text-2xl text-emalya-blue/80 mb-4 font-medium">
                L&apos;embellissement naturel du sourire
              </p>

              <p className="text-lg text-emalya-gray max-w-3xl mx-auto mb-10">
                Le Composite Emalya est une technique d&apos;esthétique dentaire ultra-conservatrice,
                qui consiste à ajouter du composite de manière ciblée sur certaines zones de la dent
                afin d&apos;améliorer l&apos;harmonie du sourire, sans jamais dénaturer son aspect naturel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-emalya-blue text-white hover:bg-emalya-blue/90 px-8 py-6 rounded-xl font-semibold text-lg group">
                  <Link href="/rendez-vous">
                    <Phone className="mr-2 h-5 w-5" />
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comment fonctionne */}
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="bg-emalya-cream/50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-emalya-blue/10">
                  <Palette className="w-6 h-6 text-emalya-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-emalya-blue">
                  Comment fonctionne la technique ?
                </h2>
              </div>

              <p className="text-lg text-emalya-gray mb-8">
                Contrairement aux facettes, il ne s&apos;agit pas de recouvrir la dent, mais de
                <span className="font-semibold text-emalya-blue"> sculpter avec précision</span> les détails qui font la différence :
                angles, bords incisifs, micro-asymétries, proportions.
              </p>

              <ul className="space-y-4">
                {howItWorks.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emalya-blue mt-0.5 flex-shrink-0" />
                    <span className="text-emalya-gray text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-emalya-gray italic">
                Chaque ajout est pensé pour se fondre parfaitement dans le sourire existant,
                avec un rendu invisible et subtil.
              </p>
            </div>
          </div>
        </section>

        {/* Objectif */}
        <section className="section bg-emalya-offwhite">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-emalya-blue" />
                <h2 className="text-2xl md:text-3xl font-bold text-emalya-blue">
                  Objectif du Composite Emalya
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <Card key={index} className="border-emalya-cream bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emalya-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-emalya-blue" />
                    </div>
                    <p className="font-medium text-emalya-gray text-lg">{objective}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="bg-emalya-blue/10 rounded-xl p-6 inline-block">
                <p className="text-lg text-emalya-blue font-medium">
                  C&apos;est une technique idéale pour les patients qui veulent un &quot;mieux&quot; sans que cela se voie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Éligibilité */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-emalya-blue mb-12 text-center">
              Critères d&apos;éligibilité
            </h2>

            <p className="text-center text-emalya-gray mb-10 max-w-2xl mx-auto">
              Cette technique nécessite certaines conditions pour garantir un résultat optimal :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Check className="w-6 h-6" />
                    Critères favorables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {eligibleCriteria.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-emalya-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <X className="w-6 h-6" />
                    Non indiqué si
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {notEligible.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-emalya-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-to-r from-emalya-blue to-emalya-blue/90 text-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Envie d&apos;un sourire sublimé naturellement ?
            </h2>

            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Découvrez si le Composite Emalya est adapté à votre sourire lors d&apos;une consultation personnalisée.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-emalya-blue hover:bg-emalya-pink px-8 py-6 rounded-xl font-semibold text-lg group" asChild>
                <Link href="/rendez-vous">
                  <Phone className="mr-2 h-5 w-5" />
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-emalya-blue px-8 py-6 rounded-xl font-semibold text-lg" asChild>
                <Link href="/facettes-ceramique">
                  Découvrir les Facettes Céramiques Emalya
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
