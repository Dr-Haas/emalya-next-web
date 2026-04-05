import type { Metadata } from "next";
import CompositeBonding from "@/views/CompositeBonding";

export const metadata: Metadata = {
  title: "Facette Composite Emalya   facette composite sans taille",
  description:
    "Facette Composite Emalya : embellissement naturel sans meulage, indications et éligibilité.",
  alternates: { canonical: "/facettes-composites-naturelles" },
};

export default function PackSignaturePage() {
  return <CompositeBonding />;
}
