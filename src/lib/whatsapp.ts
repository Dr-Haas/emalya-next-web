/** Lien WhatsApp (tunnel de conversion). Définir NEXT_PUBLIC_WHATSAPP_PHONE au format international sans + (ex. 33612345678). */
export function getWhatsAppHref(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}
