import type { Metadata } from "next";
import SmileSimulator from "@/views/SmileSimulator";

export const metadata: Metadata = {
  title: "Simulateur sourire",
  description: "Visualisez une projection de votre sourire avec le simulateur ÉMALYA.",
};

export default function SimulateurPage() {
  return <SmileSimulator />;
}
