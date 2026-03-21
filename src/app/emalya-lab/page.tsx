import type { Metadata } from "next";
import EmalyaLab from "@/views/EmalyaLab";

export const metadata: Metadata = {
  title: "Émalya Lab",
  description: "R&D et innovation autour des protocoles conservateurs ÉMALYA.",
};

export default function EmalyaLabPage() {
  return <EmalyaLab />;
}
