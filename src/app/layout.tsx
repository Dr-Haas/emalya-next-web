import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://emalya.fr";
const ogImage = `${siteUrl}/lovable-uploads/15ade1ad-2d52-47c9-beb5-336882d85ac7.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ÉMALYA – Sublimer le sourire sans altérer la dent",
    template: "%s | ÉMALYA",
  },
  description:
    "Deux protocoles exclusifs conservateurs : Facette Composite Emalya et Facettes Céramiques Emalya. Sélection rigoureuse, sur-mesure, sans taille des dents.",
  authors: [{ name: "ÉMALYA" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "ÉMALYA",
    title: "ÉMALYA – Sublimer le sourire sans altérer la dent",
    description:
      "Deux protocoles exclusifs conservateurs : Facette Composite Emalya et Facettes Céramiques Emalya. Sélection rigoureuse et sur-mesure.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "ÉMALYA" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@emalya",
    title: "ÉMALYA – Sublimer le sourire sans altérer la dent",
    description:
      "Deux protocoles exclusifs conservateurs : Facette Composite Emalya et Facettes Céramiques Emalya.",
    images: [ogImage],
  },
  icons: {
    icon: "/lovable-uploads/4687f19b-27cf-43cb-88a5-34f2c88dbbbd.png",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <JsonLd />
        <GoogleAnalytics />
        <Providers>
          <ScrollToTop />
          {children}
        </Providers>
      </body>
    </html>
  );
}
