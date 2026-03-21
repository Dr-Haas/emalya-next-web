"use client";

import { useEffect } from "react";
import Link from "next/link";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { CheckCircle, Home, MessageCircle, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je viens de soumettre ma demande de rendez-vous et j'aimerais en savoir plus sur les prochaines étapes.",
);

const ProcessStep = ({
  icon: Icon,
  step,
  title,
  description,
}: {
  icon: React.ElementType;
  step: number;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: step * 0.2 }}
    className="flex gap-4 items-start"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-left">
      <p className="text-sm text-muted-foreground mb-1">Étape {step}</p>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </motion.div>
);

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const baseWa = getWhatsAppHref() || "https://wa.me/33756899441";
  const whatsappUrl = `${baseWa}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600 h-10 w-10" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Demande reçue avec succès !</h1>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Merci pour votre confiance. Voici les prochaines étapes de votre parcours vers un sourire sublimé.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Préparer votre rendez-vous en visio</h2>

            <div className="space-y-6">
              <ProcessStep
                icon={MessageCircle}
                step={1}
                title="Échange sur WhatsApp"
                description="Contactez-nous sur WhatsApp pour toute information complémentaire et pour répondre à vos questions avant le rendez-vous."
              />
              <ProcessStep
                icon={Calendar}
                step={2}
                title="Rendez-vous en visio"
                description="Planifiez votre consultation en visioconférence avec le Médecin pour évaluer votre situation et définir le traitement le plus adapté à votre sourire."
              />
              <ProcessStep
                icon={Calendar}
                step={3}
                title="Planification du rendez-vous"
                description="Si vous êtes éligible, nous planifions ensemble votre rendez-vous du jeudi à notre cabinet."
              />
              <ProcessStep
                icon={CheckCircle}
                step={4}
                title="Votre nouveau sourire"
                description="Le jour J, notre équipe réalise votre traitement avec précision et expertise pour un résultat naturel et harmonieux."
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-center text-white mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Disponible 24h/24</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3">Planifiez votre consultation vidéo</h3>

            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Contactez-nous sur WhatsApp pour organiser un premier échange en visio avec le Docteur, évaluer la meilleure solution pour votre sourire et recevoir un devis personnalisé.
            </p>

            <Button size="lg" className="bg-white text-green-600 hover:bg-white/90 font-semibold text-lg px-8" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Discuter sur WhatsApp
              </a>
            </Button>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Retour à l&apos;accueil
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/facettes-composites-naturelles">En savoir plus sur nos protocoles</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
