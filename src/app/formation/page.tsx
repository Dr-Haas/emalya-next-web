import type { Metadata } from "next";
import Formation from "@/views/Formation";

export const metadata: Metadata = {
  title: "Formation",
  description: "Parcours de formation pour praticiens   protocoles Pack Signature et Pack Premium.",
};

export default function FormationPage() {
  return <Formation />;
}
