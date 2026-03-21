import type { Metadata } from "next";
import CompositeBonding from "@/views/CompositeBonding";

export const metadata: Metadata = {
  title: "Pack Signature — facettes composites sans taille",
  description:
    "Pack Signature (composite conservateur) à partir de 5 000 €. Embellissement naturel sans meulage, indications et éligibilité.",
  alternates: { canonical: "/facettes-composites-naturelles" },
};

export default function PackSignaturePage() {
  return <CompositeBonding />;
}
