import type { Metadata } from "next";
import FacilitationPaiement from "@/views/FacilitationPaiement";

export const metadata: Metadata = {
  title: "Facilitation du paiement",
  description: "Paiement en plusieurs fois avec FloaBank pour vos soins esthétiques ÉMALYA.",
};

export default function FacilitationPaiementPage() {
  return <FacilitationPaiement />;
}
