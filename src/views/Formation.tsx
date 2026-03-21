import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

const Formation = () => {
  const modules = [
    "Philosophie clinique « sublimer sans altérer » et sélection des cas",
    "Pack Signature : indications, limites, gestuelle et finition",
    "Pack Premium : protocole no-prep, empreintes et collaboration prothésiste",
    "Communication patient & gestion des attentes",
  ];

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="bg-gradient-to-br from-emalya-cream to-white py-16 md:py-24">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emalya-blue/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-emalya-blue" />
              <span className="text-sm font-medium text-emalya-blue">Formation continue</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-emalya-blue mb-6">
              Formation ÉMALYA
            </h1>
            <p className="text-lg text-emalya-gray leading-relaxed">
              Des modules pour les chirurgiens-dentistes et équipes qui souhaitent intégrer nos protocoles
              conservateurs   avec la même rigueur que pour nos patients : zéro compromis sur l’émail, des
              indications assumées et une finition irréprochable.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-emalya-blue mb-8 text-center">Ce que vous travaillerez</h2>
            <ul className="space-y-4">
              {modules.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emalya-blue mt-0.5 flex-shrink-0" />
                  <span className="text-emalya-gray text-lg">{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-emalya-gray">
              Les prochaines sessions et modalités (présentiel / visio) sont communiquées sur demande après
              étude de votre profil.
            </p>
          </div>
        </section>

        <section className="section bg-emalya-blue text-white">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Passer à l’étape suivante</h2>
            <p className="text-white/90 mb-8">
              Pour candidater ou recevoir le programme détaillé, écrivez-nous via le formulaire de contact.
            </p>
            <Button
              asChild
              className="bg-white text-emalya-blue hover:bg-emalya-pink px-8 py-6 rounded-xl font-semibold group"
            >
              <Link href={ROUTES.rendezVous}>
                Demander un échange
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

export default Formation;
