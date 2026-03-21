import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emalya-offwhite py-12 border-t border-emalya-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="/lovable-uploads/bc788b9e-7681-44f2-996e-ff937005f876.png"
              alt="ÉMALYA Logo"
              className="h-8 md:h-10"
            />
            <p className="text-emalya-gray mt-2">Le futur du sourire.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h3 className="font-medium text-emalya-blue mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#techniques" className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Protocoles
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.formation} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Formation
                  </Link>
                </li>
                <li>
                  <Link href="/#avant-apres" className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Avant/Après
                  </Link>
                </li>
                <li>
                  <Link href="/#comparatif" className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Comparatif
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.blog} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-emalya-blue mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={ROUTES.rendezVous} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Prendre RDV
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.packSignature} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Pack Signature
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.packPremium} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Pack Premium
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.emalyaLab} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Émalya Lab
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.noticePatient} className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Notice patient
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-emalya-blue mb-4">Légal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emalya-gray hover:text-emalya-blue transition-colors">
                    CGV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-emalya-cream text-center text-emalya-gray">
          <p>&copy; {currentYear} ÉMALYA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
