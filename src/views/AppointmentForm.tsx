"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Form } from "@/components/ui/form";
import PersonalInfoFields from "@/components/appointment/PersonalInfoFields";
import TermsCheckbox from "@/components/appointment/TermsCheckbox";
import SubmitButton from "@/components/appointment/SubmitButton";
import { useAppointmentForm } from "@/hooks/useAppointmentForm";

const AppointmentForm = () => {
  const { form, isSubmitting, onSubmit } = useAppointmentForm();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 bg-emalya-offwhite">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-emalya-blue mb-4">
                Contactez l&apos;équipe médicale
              </h1>
              <p className="text-emalya-gray">
                Complétez le formulaire ci-dessous pour échanger avec notre équipe médicale
                <br className="hidden md:block" /> et obtenir plus d&apos;informations sur nos traitements.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <PersonalInfoFields control={form.control} />
                <TermsCheckbox control={form.control} />
                <SubmitButton isSubmitting={isSubmitting} />
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentForm;
