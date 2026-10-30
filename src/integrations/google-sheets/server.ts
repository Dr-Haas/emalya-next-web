/**
 * Google Sheets, usage serveur uniquement : aucun identifiant Google n'est envoyé au navigateur
 * et le patient n'a jamais à se connecter à Google.
 *
 * L'écriture dans un tableau exige un compte de service Google (une simple clé d'API
 * ne permet que la lecture de tableaux publics). Variables d'environnement :
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL  adresse du compte de service (xxx@yyy.iam.gserviceaccount.com)
 *   GOOGLE_PRIVATE_KEY            clé privée du compte de service (les "\n" littéraux sont acceptés)
 *   GOOGLE_SHEET_ID               facultatif, identifiant du tableau (valeur par défaut ci-dessous)
 *   GOOGLE_SHEET_RANGE            facultatif, plage d'ajout (valeur par défaut ci-dessous)
 * Le tableau doit être partagé en écriture avec l'adresse du compte de service.
 */
import { createSign } from "crypto";

const DEFAULT_SHEET_ID = "1GgN4ny2mg_y981pIiSdMPoYR9MTpnsFaLrJ5xR8bcYI";
const DEFAULT_RANGE = "'Feuille 1'!A:I";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

type SheetsConfig = {
  clientEmail: string;
  privateKey: string;
  sheetId: string;
  range: string;
};

export function getSheetsConfig(): SheetsConfig | null {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!clientEmail || !rawKey) return null;
  return {
    clientEmail,
    privateKey: rawKey.replace(/\\n/g, "\n"),
    sheetId: process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID,
    range: process.env.GOOGLE_SHEET_RANGE || DEFAULT_RANGE,
  };
}

const base64url = (input: string | Buffer) =>
  Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(config: SheetsConfig): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.expiresAt - 60 > now) return cachedToken.value;

  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({ iss: config.clientEmail, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = base64url(signer.sign(config.privateKey));

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claims}.${signature}`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Authentification Google refusée (${res.status}) : ${await res.text()}`);
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: data.access_token, expiresAt: now + data.expires_in };
  return data.access_token;
}

/** Ajoute une ligne en bas du tableau (append, RAW, INSERT_ROWS). */
export async function appendSheetRow(config: SheetsConfig, row: (string | number)[]): Promise<void> {
  const token = await getAccessToken(config);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(config.sheetId)}` +
    `/values/${encodeURIComponent(config.range)}:append` +
    `?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) {
    throw new Error(`Google Sheets append (${res.status}) : ${await res.text()}`);
  }
}

/**
 * Méthode simple (recommandée) : un script Apps Script publié en « Application Web » depuis le tableau.
 * Une seule variable : GOOGLE_SHEETS_WEBHOOK_URL (l'URL donnée par Google au déploiement).
 * Aucun identifiant Google n'est stocké sur le site ; l'URL reste côté serveur.
 */
export function getSheetsWebhookUrl(): string | null {
  return process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim() || null;
}

export async function appendViaWebhook(url: string, row: (string | number)[]): Promise<void> {
  // Apps Script répond par une redirection 302 que fetch suit automatiquement.
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ row }),
    redirect: "follow",
  });
  const text = await res.text();
  let ok = false;
  try {
    ok = res.ok && JSON.parse(text)?.success === true;
  } catch {
    ok = false;
  }
  if (!ok) {
    throw new Error(`Apps Script (${res.status}) : ${text.slice(0, 300)}`);
  }
}
