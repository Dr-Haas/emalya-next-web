import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Pack Signature et Pack Premium : protocoles esthétiques conservateurs sans taille des dents, tarifs dès 5 000 € et 10 000 €.",
};

export default function HomePage() {
  return <Index />;
}
