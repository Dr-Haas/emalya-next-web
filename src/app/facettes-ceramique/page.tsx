"use client";

import { ArrowRight, Check, X, Gem, Shield, Sparkles, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FacettesCeramiquePage() {
  const technique = [
    "Aucune taille des dents",
    "Aucune préparation",
    "Aucune atteinte à l'émail",
    "Facettes extrêmement fines",
    "Collage sur dents intactes"
  ];

  const ceramicBenefits = [
    { icon: <Shield className="w-6 h-6" />, text: "Stabilité de teinte dans le temps" },
    { icon: <Sparkles className="w-6 h-6" />, text: "Résistance supérieure" },
    { icon: <Clock className="w-6 h-6" />, text: "Esthétique plus lumineuse" },
    { icon: <Gem className="w-6 h-6" />, text: "Durabilité nettement plus élevée" },
  ];

  const whyCeramic = [
    "Un résultat plus pérenne",
    "Une meilleure tenue dans le temps",
    "Une précision et une reproductibilité supérieures",
    "Une esthétique haut de gamme constante"
  ];

  const eligibleCriteria = [
    "Dents bien alignées",
    "Dents pas trop volumineuses",
    "Dents pas trop projetées vers l'avant",
    "Émail sain et intact",
    "Envie d'un changement esthétique durable et structurant"
  ];

  const notEligible = [
    "Dents trop grosses",
    "Dents trop avancées",
    "Désalignement important",
    "Nécessité de réduire le volume des dents"
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emalya-blue via-emalya-blue to-emalya-blue/90 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-emalya-pink rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Gem className="w-5 h-5 text-emalya-pink" />
                <span className="text-sm font-medium">Transformation durable</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Facettes Céramiques Emalya
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                La transformation durable du sourire
              </p>

              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
                Les Facettes Céramiques Emalya sans préparation sont destinées aux patients souhaitant
                modifier réellement l&apos;esthétique de leur sourire, tout en conservant une approche 100% conservatrice.
                Elles permettent une transformation plus globale et plus durable que le composite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-emalya-blue hover:bg-emalya-pink px-8 py-6 rounded-xl font-semibold text-lg group">
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

        {/* Technique */}
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emalya-blue mb-4">
                En quoi consiste la technique ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {technique.map((item, index) => (
                <Card key={index} className="border-emalya-cream hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emalya-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-emalya-blue" />
                    </div>
                    <p className="font-medium text-emalya-gray">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages céramique */}
        <section className="section bg-emalya-cream">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emalya-blue mb-4">
                La céramique permet d&apos;obtenir
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ceramicBenefits.map((benefit, index) => (
                <Card key={index} className="border-emalya-cream bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emalya-blue/10 text-emalya-blue">
                      {benefit.icon}
                    </div>
                    <p className="font-medium text-emalya-gray text-lg">{benefit.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi céramique */}
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-br from-emalya-blue to-emalya-blue/90 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Pourquoi la céramique plutôt que le composite pour les facettes ?
              </h2>

              <p className="text-lg text-white/90 mb-8 text-center">
                Lorsqu&apos;un patient souhaite des facettes, nous privilégions volontairement la céramique, car elle offre :
              </p>

              <ul className="space-y-4 max-w-xl mx-auto">
                {whyCeramic.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emalya-pink mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 text-center">
                <p className="text-lg font-medium text-emalya-pink">
                  C&apos;est la solution de choix pour une véritable métamorphose du sourire, pensée sur le long terme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Éligibilité */}
        <section className="section bg-emalya-offwhite">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-emalya-blue mb-12 text-center">
              Critères d&apos;éligibilité – Facettes Céramiques Emalya no-prep
            </h2>

            <p className="text-center text-emalya-gray mb-10 max-w-2xl mx-auto">
              Cette technique très conservatrice nécessite des critères précis :
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

                  <p className="mt-4 text-sm text-emalya-gray italic">
                    Dans ces situations, la technique no-prep ne permettrait pas un résultat esthétique optimal
                    sans compromettre l&apos;équilibre du sourire.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-to-r from-emalya-blue to-emalya-blue/90 text-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt pour une transformation durable ?
            </h2>

            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Découvrez si les Facettes Céramiques Emalya sont adaptées à votre sourire lors d&apos;une consultation personnalisée.
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
                <Link href="/composite-emalya">
                  Découvrir le Composite Emalya
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
