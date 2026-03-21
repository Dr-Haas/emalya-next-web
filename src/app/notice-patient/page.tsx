import type { Metadata } from "next";
import NoticePatient from "@/views/NoticePatient";

export const metadata: Metadata = {
  title: "Notice patient",
  description: "Informations utiles pour votre parcours de soins ÉMALYA.",
};

export default function NoticePatientPage() {
  return <NoticePatient />;
}
