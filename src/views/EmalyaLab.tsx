import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FlaskConical, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

const EmalyaLab = () => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="bg-gradient-to-br from-emalya-blue to-emalya-blue/90 text-white py-20 md:py-28">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <FlaskConical className="w-5 h-5 text-emalya-pink" />
              <span className="text-sm font-medium">R&D & innovation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Émalya Lab</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Un espace dédié à l’expérimentation contrôlée, au protocole et à la veille sur les matériaux et
              les techniques qui respectent notre ligne : <strong>sublimer le sourire sans altérer la dent</strong>.
              Le Lab peut être intégré au site principal ou évoluer vers un site dédié selon la roadmap produit.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container max-w-3xl mx-auto text-center text-emalya-gray">
            <p className="text-lg mb-8">
              Vous êtes journaliste, partenaire ou praticien ? Contactez-nous pour les dossiers presse et les
              collaborations autour de la recherche clinique appliquée.
            </p>
            <Button
              asChild
              className="bg-emalya-blue text-white hover:bg-emalya-blue/90 px-8 py-6 rounded-xl font-semibold group"
            >
              <Link href={ROUTES.rendezVous}>
                Contacter l&apos;équipe
                <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmalyaLab;
