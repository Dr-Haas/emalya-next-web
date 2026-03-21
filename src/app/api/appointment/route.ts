import { NextResponse } from "next/server";
import { addBrevoContactServer, getBrevoApiKey } from "@/integrations/brevo/server";

const DEFAULT_N8N =
  "https://dikio.app.n8n.cloud/webhook/742140a4-eb6e-4847-b48c-891a5d1dd846";

type Body = {
  patient: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    postalCode: string;
    city: string;
  };
  metadata?: { submittedAt?: string; source?: string };
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const { patient } = body;
  if (!patient?.email || !patient?.firstName || !patient?.lastName) {
    return NextResponse.json({ error: "Données patient incomplètes" }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL || DEFAULT_N8N;

  const payload = {
    patient: {
      firstName: patient.firstName,
      lastName: patient.lastName,
      email: patient.email,
      phoneNumber: patient.phoneNumber,
      address: patient.address,
      postalCode: patient.postalCode,
      city: patient.city,
    },
    metadata: {
      submittedAt: new Date().toISOString(),
      source: "emalya-website",
      ...body.metadata,
    },
  };

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      return NextResponse.json(
        { error: `Webhook n8n: ${webhookRes.status}` },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json({ error: "Échec envoi webhook" }, { status: 502 });
  }

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

  if (!brevo.ok && getBrevoApiKey()) {
    console.warn("Brevo contact non créé:", brevo.error);
  }

  return NextResponse.json({ ok: true, brevo: brevo.ok });
}
