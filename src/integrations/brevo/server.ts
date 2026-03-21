/**
 * Brevo — usage serveur uniquement (clé jamais exposée au navigateur).
 * Variables : BREVO_API_KEY (ou VITE_BREVO_API_KEY en secours), optionnel BREVO_LIST_ID.
 */

export function getBrevoApiKey(): string | undefined {
  return process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
}

interface BrevoContactParams {
  email: string;
  firstName?: string;
  lastName?: string;
  attributes?: Record<string, string | number | boolean>;
  listIds?: number[];
}

export async function addBrevoContactServer(params: BrevoContactParams): Promise<{ ok: boolean; error?: string }> {
  const apiKey = getBrevoApiKey();
  if (!apiKey) {
    return { ok: false, error: "BREVO_API_KEY manquante" };
  }

  const listIdRaw = process.env.BREVO_LIST_ID;
  const listIdsFromEnv = listIdRaw ? [parseInt(listIdRaw, 10)].filter((n) => !Number.isNaN(n)) : [];
  const listIds = [...listIdsFromEnv, ...(params.listIds ?? [])];

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: params.email,
        attributes: {
          PRENOM: params.firstName,
          NOM: params.lastName,
          ...params.attributes,
        },
        listIds,
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      return { ok: false, error: JSON.stringify(errBody) };
    }
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Brevo error";
    return { ok: false, error: message };
  }
}
