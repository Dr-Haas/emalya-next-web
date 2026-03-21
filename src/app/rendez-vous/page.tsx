import type { Metadata } from "next";
import AppointmentForm from "@/views/AppointmentForm";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description: "Contactez l’équipe médicale ÉMALYA pour un échange sur vos objectifs esthétiques.",
};

export default function RendezVousPage() {
  return <AppointmentForm />;
}
