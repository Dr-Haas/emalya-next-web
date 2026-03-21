import type { Metadata } from "next";
import FacettesCeramique from "@/views/FacettesCeramique";

export const metadata: Metadata = {
  title: "Pack Premium — facettes céramique sans préparation",
  description:
    "Pack Premium (facettes céramique no-prep) à partir de 10 000 €. Transformation durable sur émail intact.",
  alternates: { canonical: "/facettes-ceramiques-premium" },
};

export default function PackPremiumPage() {
  return <FacettesCeramique />;
}
