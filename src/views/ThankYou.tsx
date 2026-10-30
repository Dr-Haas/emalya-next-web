"use client";

import { useEffect } from "react";
import Link from "next/link";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { ROUTES } from "@/lib/routes";
import { CheckCircle, Home, MessageCircle, Video, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je viens de soumettre ma demande de rendez-vous et j'aimerais en savoir plus sur les prochaines étapes.",
);

const STEPS = [
  {
    icon: MessageCircle,
    title: "Échange sur WhatsApp",
    description:
      "Information complémentaire et réponses à vos questions avant le rendez-vous.",
  },
  {
    icon: Video,
    title: "Rendez-vous en visio",
    description:
      "Consultation avec le Médecin pour évaluer votre situation et définir le traitement adapté.",
  },
  {
    icon: CalendarCheck,
    title: "Planification du rendez-vous",
    description: "Si vous êtes éligible, nous fixons ensemble votre rendez-vous du jeudi au cabinet.",
  },
  {
    icon: Sparkles,
    title: "Votre nouveau sourire",
    description: "Réalisation de votre traitement.",
  },
];

const ThankYou = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const baseWa = getWhatsAppHref() || "https://wa.me/33756899441";
  const whatsappUrl = `${baseWa}?text=${WHATSAPP_MESSAGE}`;

  // Sans animation si l'utilisateur a demandé une réduction des mouvements.
  const appear = (delay = 0) =>
    reduceMotion
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.6, ease: "easeOut" as const },
        };

  return (
    <div className="min-h-screen flex flex-col bg-emalya-offwhite">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div {...appear()} className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-emalya-cream flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-emalya-blue h-10 w-10" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-emalya-blue mb-4">Demande reçue avec succès !</h1>

            <p className="text-emalya-gray text-lg max-w-xl mx-auto">
              Merci pour votre confiance. Voici les prochaines étapes de votre parcours vers un sourire sublimé.
            </p>
          </motion.div>

          <div className="bg-white border border-emalya-cream rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-emalya-blue mb-6 text-center">
              Préparer votre rendez-vous en visio
            </h2>

            <ol className="space-y-6">
              {STEPS.map(({ icon: Icon, title, description }, index) => (
                <motion.li key={title} {...appear(0.15 * (index + 1))} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emalya-cream flex items-center justify-center">
                    <Icon className="h-6 w-6 text-emalya-blue" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-emalya-gray/70 mb-1">Étape {index + 1}</p>
                    <h3 className="font-semibold text-emalya-blue mb-1">{title}</h3>
                    <p className="text-emalya-gray text-sm">{description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            {...appear(0.8)}
            className="bg-emalya-blue rounded-2xl p-6 md:p-8 text-center text-white mb-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">Planifiez votre consultation vidéo</h3>

            <p className="text-white/85 mb-6 max-w-md mx-auto">
              Écrivez-nous sur WhatsApp pour organiser un premier échange en visio avec le Médecin et recevoir un
              devis personnalisé.
            </p>

            <Button
              size="lg"
              className="bg-emalya-pink text-emalya-blue hover:bg-emalya-pink/90 font-semibold text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Discuter sur WhatsApp
              </a>
            </Button>
            <p className="text-white/70 text-sm mt-4">+33 7 56 89 94 41</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href={ROUTES.home}>
                <Home className="mr-2 h-4 w-4" /> Retour à l&apos;accueil
              </Link>
            </Button>
            <Button variant="outline" asChild>
              {/* /composite-emalya redirige ici de façon permanente (next.config.mjs) */}
              <Link href={ROUTES.packSignature}>Découvrir la Facette Composite Emalya</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
