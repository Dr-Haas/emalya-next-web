
import { toast } from "sonner";

interface BrevoEmailParams {
  to: { email: string; name?: string }[];
  templateId: number;
  params?: Record<string, any>;
  subject?: string;
}

interface BrevoContactParams {
  email: string;
  firstName?: string;
  lastName?: string;
  attributes?: Record<string, any>;
  listIds?: number[];
}

function getBrevoApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_BREVO_API_KEY;
}

// Fonction pour envoyer un email via Brevo
export const sendBrevoEmail = async (params: BrevoEmailParams) => {
  try {
    const apiKey = getBrevoApiKey();
    if (!apiKey) {
      console.error('Brevo: VITE_BREVO_API_KEY manquante');
      toast.error("Configuration email indisponible");
      return { success: false, error: "Missing VITE_BREVO_API_KEY" };
    }
    console.log('Sending email with params:', params);
    // Appel à l'API Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: params.to,
        templateId: params.templateId,
        params: params.params || {},
        subject: params.subject,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      throw new Error(`Brevo API error: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    console.log('Brevo email response:', data);
    return { success: true, data };
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email via Brevo:', error);
    toast.error("Erreur lors de l'envoi de l'email de confirmation");
    return { success: false, error: error.message };
  }
};

// Fonction pour ajouter un contact à Brevo
export const addBrevoContact = async (params: BrevoContactParams) => {
  try {
    const apiKey = getBrevoApiKey();
    if (!apiKey) {
      console.error('Brevo: VITE_BREVO_API_KEY manquante');
      return { success: false, error: "Missing VITE_BREVO_API_KEY" };
    }
    console.log('Adding contact to Brevo with params:', params);
    // Appel à l'API Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: params.email,
        attributes: {
          PRENOM: params.firstName,
          NOM: params.lastName,
          ...params.attributes
        },
        listIds: params.listIds || [],
        updateEnabled: true,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      throw new Error(`Brevo API error: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    console.log('Brevo contact response:', data);
    return { success: true, data };
  } catch (error: any) {
    console.error('Erreur lors de l\'ajout du contact à Brevo:', error);
    return { success: false, error: error.message };
  }
};
