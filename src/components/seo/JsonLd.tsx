const site =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://emalya.fr";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  name: "ÉMALYA",
  url: site,
  description:
    "Sublimer le sourire sans altérer la dent   protocoles esthétiques conservateurs (Facette Composite Emalya, Facettes Céramiques Emalya).",
  medicalSpecialty: "Dentisterie esthétique",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
