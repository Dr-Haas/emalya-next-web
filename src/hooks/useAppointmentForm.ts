"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { formSchema, FormData } from '@/components/appointment/PersonalInfoFields';

const N8N_WEBHOOK_URL = 'https://dikio.app.n8n.cloud/webhook/742140a4-eb6e-4847-b48c-891a5d1dd846';

export const useAppointmentForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      postalCode: '',
      city: '',
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
          phoneNumber: data.phoneNumber,
          address: data.address,
          postalCode: data.postalCode,
          city: data.city
        },
        metadata: {
          submittedAt: new Date().toISOString(),
          source: 'emalya-website'
        }
      };

      console.log('Sending data to n8n webhook...');
      
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.status}`);
      }

      console.log('Data sent successfully to n8n');
      toast.success('Votre demande a été envoyée avec succès !');
      router.push('/merci');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
};
