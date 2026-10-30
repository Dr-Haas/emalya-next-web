import { NextResponse } from "next/server";
import { patientSchema, normalizePhone } from "@/lib/appointmentSchema";
import { appendSheetRow, getSheetsConfig } from "@/integrations/google-sheets/server";
import { addBrevoContactServer, getBrevoApiKey } from "@/integrations/brevo/server";

// La signature du jeton Google utilise le module crypto de Node.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: CORS_HEADERS });

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// Seul POST est exporté : Next.js répond 405 à toute autre méthode.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "JSON invalide" }, 400);
  }

  const parsed = patientSchema.safeParse((body as { patient?: unknown })?.patient);
  if (!parsed.success) {
    return json(
      { success: false, error: "Données invalides", details: parsed.error.flatten().fieldErrors },
      400,
    );
  }

  const config = getSheetsConfig();
  if (!config) {
    console.error("Configuration Google Sheets manquante (GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY).");
    return json({ success: false, error: "Configuration serveur manquante" }, 500);
  }

  const patient = { ...parsed.data, phoneNumber: normalizePhone(parsed.data.phoneNumber) };

  // Ordre des colonnes : Prénom, Nom, Email, Téléphone, Adresse, Code postal, Ville, Horodatage (ISO), Nombre d'images
  const row = [
    patient.firstName,
    patient.lastName,
    patient.email,
    patient.phoneNumber,
    patient.address,
    patient.postalCode,
    patient.city,
    new Date().toISOString(),
    0,
  ];

  try {
    await appendSheetRow(config, row);
  } catch (error) {
    console.error("Échec d'écriture Google Sheets :", error);
    return json({ success: false, error: "Échec de l'enregistrement" }, 502);
  }

  // Ajout du contact dans Brevo : facultatif, n'empêche jamais l'envoi de la demande.
  if (getBrevoApiKey()) {
    const brevo = await addBrevoContactServer({
      email: patient.email,
      firstName: patient.firstName,
      lastName: patient.lastName,
      attributes: {
        TELEPHONE: patient.phoneNumber,
        VILLE: patient.city,
        CODE_POSTAL: patient.postalCode,
      },
    });
    if (!brevo.ok) console.warn("Brevo contact non créé :", brevo.error);
  }

  return json({ success: true });
}
