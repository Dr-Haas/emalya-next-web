"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, CheckCircle2, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
const FacilitationPaiement = () => {
  const router = useRouter();
  const handleDemandezDevis = () => {
    router.push('/rendez-vous');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-emalya-offwhite">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-emalya-blue mb-6">Facilitez votre règlement avec FloaBank</h1>
            <p className="text-emalya-gray text-lg mb-10 leading-relaxed">
              Nous vous informons qu&apos;une option de paiement en 4 fois sans frais est disponible pour
              les soins esthétiques, via notre partenaire FloaBank.
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-md p-6 w-24 h-24 flex items-center justify-center">
                <CreditCard className="w-12 h-12 text-emalya-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-emalya-blue mb-12 text-center">Comment ça fonctionne ?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-emalya-offwhite border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-emalya-blue text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  <h3 className="text-center text-xl font-semibold text-emalya-blue mb-3">Choix du paiement</h3>
                  <p className="text-center text-emalya-gray">
                    Vous optez pour le paiement échelonné au moment de la prise en charge.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-emalya-offwhite border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-emalya-blue text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  <h3 className="text-center text-xl font-semibold text-emalya-blue mb-3">Procédure guidée</h3>
                  <p className="text-center text-emalya-gray">
                    FloaBank vous guide sur votre mobile en quelques minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-emalya-offwhite border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-emalya-blue text-white flex items-center justify-center font-bold">3</div>
                  </div>
                  <h3 className="text-center text-xl font-semibold text-emalya-blue mb-3">Répartition automatique</h3>
                  <p className="text-center text-emalya-gray">
                    Votre règlement est ensuite automatiquement réparti en 4 mensualités.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-emalya-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-emalya-blue mb-10 text-center">Avantages pour le patient</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-emalya-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-emalya-blue mb-2">Paiement échelonné sans frais supplémentaires</h3>
                  <p className="text-emalya-gray">
                    Aucun coût additionnel n&apos;est appliqué avec la solution d&apos;échelonnement proposée.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-emalya-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-emalya-blue mb-2">Solution digitale simple et rapide</h3>
                  <p className="text-emalya-gray">
                    L&apos;ensemble de la procédure est dématérialisé et ne prend que quelques minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-emalya-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-emalya-blue mb-2">Accord immédiat</h3>
                  <p className="text-emalya-gray">
                    La validation se fait rapidement, sans impact sur votre dossier bancaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About FloaBank */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row overflow-hidden bg-emalya-offwhite rounded-xl shadow-sm">
              <div className="p-8 md:p-10 flex-1">
                <h2 className="text-2xl font-bold text-emalya-blue mb-6">À propos de FloaBank</h2>
                <p className="text-emalya-gray mb-4">
                  FloaBank est une plateforme de paiement sécurisée spécialisée dans les solutions de financement.
                </p>
                <p className="text-emalya-gray mb-4">
                  L&apos;option d&apos;échelonnement est proposée sous réserve d&apos;acceptation par FloaBank.
                </p>
                <p className="text-emalya-gray mb-0">
                  ÉMALYA n&apos;intervient pas dans la validation du paiement.
                </p>
              </div>
              <div className="bg-white flex-shrink-0 w-full md:w-48 lg:w-72 flex items-center justify-center p-6">
                <img src="/assets/floa-logo.png" alt="FLOA Bank" className="w-full max-w-[140px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-emalya-offwhite">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-emalya-blue mb-10 text-center">Questions fréquentes</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-emalya-blue mb-3">Est-ce une demande de crédit ?</h3>
                <p className="text-emalya-gray">
                  Non. Il s&apos;agit d&apos;un échelonnement géré par FloaBank, sans frais et sans intérêts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-emalya-blue mb-3">Est-ce que cela impacte ma capacité d&apos;emprunt ?</h3>
                <p className="text-emalya-gray">
                  Non. FloaBank ne réalise pas de dossier bancaire classique.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-emalya-blue mb-3">Puis-je payer en avance ?</h3>
                <p className="text-emalya-gray">
                  Oui, vous pouvez régler tout ou partie à tout moment via FloaBank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-emalya-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-emalya-cream rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-emalya-blue mb-6">Besoin de plus d&apos;informations ?</h3>
              <p className="text-lg text-emalya-gray mb-8">
                Si vous souhaitez en savoir plus sur les options de règlement disponibles,
                nous sommes à votre disposition lors de votre rendez-vous.
              </p>
              <Button
                onClick={handleDemandezDevis}
                className="bg-emalya-blue hover:bg-emalya-blue/90 text-white"
              >
                Demander un devis
                <ChevronsRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacilitationPaiement;
