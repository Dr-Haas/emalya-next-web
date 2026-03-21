import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export function BlogArticleCTA() {
  return (
    <aside className="rounded-2xl border border-emalya-cream bg-gradient-to-br from-emalya-cream/60 to-white p-6 md:p-8">
      <h2 className="text-lg font-semibold text-emalya-blue mb-4">Pour aller plus loin</h2>
      <ul className="space-y-3 text-emalya-gray">
        <li>
          <Link href={ROUTES.packSignature} className="text-emalya-blue font-medium hover:underline">
            Pack Signature (composite conservateur)
          </Link>
          {" — "}
          <span className="text-sm">à partir de 5 000 €</span>
        </li>
        <li>
          <Link href={ROUTES.packPremium} className="text-emalya-blue font-medium hover:underline">
            Pack Premium (céramique)
          </Link>
          {" — "}
          <span className="text-sm">à partir de 10 000 €</span>
        </li>
        <li>
          <Link href={ROUTES.simulateur} className="text-emalya-blue font-medium hover:underline">
            Simulateur de sourire
          </Link>
        </li>
        <li>
          <Link href={ROUTES.rendezVous} className="text-emalya-blue font-medium hover:underline">
            Prendre rendez-vous
          </Link>
        </li>
        <li>
          <Link href={ROUTES.formation} className="text-emalya-blue font-medium hover:underline">
            Formation &amp; parcours patient
          </Link>
        </li>
      </ul>
    </aside>
  );
}
