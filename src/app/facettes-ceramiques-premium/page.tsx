import type { Metadata } from "next";
import FacettesCeramique from "@/views/FacettesCeramique";

export const metadata: Metadata = {
  title: "Facettes Céramiques Emalya   facettes céramiques sans préparation",
  description:
    "Facettes Céramiques Emalya : transformation durable sur émail intact.",
  alternates: { canonical: "/facettes-ceramiques-premium" },
};

export default function PackPremiumPage() {
  return <FacettesCeramique />;
}
