
/**
 * Structure des données envoyées au webhook Make.com
 * Ce fichier définit et documente le format des données transmises
 */

export interface WebhookPatientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  city: string;
  submittedAt: string;
}

export interface WebhookDataPayload {
  patientInfo: WebhookPatientInfo;
  imagesCount: number;
  imagesUrls: string[];
  patientId: string | null;
  metadata: {
    source: string;
    version: string;
    timestamp: string;
    sessionId: string;
  };
}

/**
 * Prépare les données pour l'envoi vers le webhook Make.com
 * @param data Les données de base à envoyer
 * @returns Les données formatées pour le webhook avec métadonnées
 */
export const webhookData = (data: Omit<WebhookDataPayload, 'metadata'>): WebhookDataPayload => {
  // Générer un identifiant de session unique
  const sessionId = Math.random().toString(36).substring(2, 15) + 
                    Math.random().toString(36).substring(2, 15);
  
  return {
    patientInfo: {
      firstName: data.patientInfo.firstName,
      lastName: data.patientInfo.lastName,
      email: data.patientInfo.email,
      phoneNumber: data.patientInfo.phoneNumber,
      address: data.patientInfo.address,
      postalCode: data.patientInfo.postalCode,
      city: data.patientInfo.city,
      submittedAt: data.patientInfo.submittedAt
    },
    imagesCount: data.imagesCount,
    imagesUrls: data.imagesUrls,
    patientId: data.patientId,
    metadata: {
      source: "emalya-form",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      sessionId: sessionId
    }
  };
};

// Exemple au format JSON pour documentation:
/*
{
  "patientInfo": {
    "firstName": "Jean",
    "lastName": "Dupont",
    "email": "jean.dupont@exemple.fr",
    "phoneNumber": "0612345678",
    "address": "123 Rue de la République",
    "postalCode": "75001",
    "city": "Paris",
    "submittedAt": "2025-04-15T09:30:00.000Z"
  },
  "imagesCount": 3,
  "imagesUrls": [
    "https://pnqtfvpdawgrjxigrvby.supabase.co/storage/v1/object/public/dental_images/123abc-image1.jpg",
    "https://pnqtfvpdawgrjxigrvby.supabase.co/storage/v1/object/public/dental_images/456def-image2.jpg",
    "https://pnqtfvpdawgrjxigrvby.supabase.co/storage/v1/object/public/dental_images/789ghi-image3.jpg"
  ],
  "patientId": "550e8400-e29b-41d4-a716-446655440000",
  "metadata": {
    "source": "emalya-form",
    "version": "1.0.0",
    "timestamp": "2025-04-15T09:35:22.120Z",
    "sessionId": "a1b2c3d4e5f6g7h8i9j0"
  }
}
*/
