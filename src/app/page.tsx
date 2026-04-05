import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Facette Composite Emalya et Facettes Céramiques Emalya : protocoles esthétiques conservateurs sans taille des dents.",
};

export default function HomePage() {
  return <Index />;
}
