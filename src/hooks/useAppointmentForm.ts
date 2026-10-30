"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { formSchema, normalizePhone, type FormData } from "@/lib/appointmentSchema";

export const useAppointmentForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
      city: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        patient: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: normalizePhone(data.phoneNumber),
          address: data.address,
          postalCode: data.postalCode,
          city: data.city,
        },
        metadata: {
          submittedAt: new Date().toISOString(),
          source: "emalya-website",
        },
      };

      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(`Erreur serveur: ${response.status}`);
      }

      toast.success("Votre demande a été envoyée avec succès !");
      router.push("/merci");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit,
  };
};
