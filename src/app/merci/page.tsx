import type { Metadata } from "next";
import ThankYou from "@/views/ThankYou";

export const metadata: Metadata = {
  title: "Demande envoyée",
  robots: { index: false, follow: true },
};

export default function MerciPage() {
  return <ThankYou />;
}
