import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ROUTES } from "@/lib/routes";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog   conseils & techniques",
  description:
    "Articles sur les facettes sans taille, le choix composite ou céramique, et le parcours patient ÉMALYA.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emalya-cream/40 via-white to-emalya-offwhite/50">
      <Navbar />
      <main className="flex-1">
        <header className="relative overflow-hidden border-b border-emalya-cream/80 bg-white/80 pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emalya-pink/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emalya-blue/10 blur-3xl" />
          <div className="container relative mx-auto max-w-4xl px-4 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emalya-blue/70">Ressources</p>
            <h1 className="text-4xl font-bold tracking-tight text-emalya-blue md:text-5xl">Blog ÉMALYA</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emalya-gray">
              Conseils techniques et guides patients pour comprendre les protocoles{" "}
              <Link href={ROUTES.packSignature} className="font-medium text-emalya-blue underline decoration-emalya-blue/30 underline-offset-2 hover:decoration-emalya-blue">
                Facette Composite Emalya
              </Link>{" "}
              et{" "}
              <Link href={ROUTES.packPremium} className="font-medium text-emalya-blue underline decoration-emalya-blue/30 underline-offset-2 hover:decoration-emalya-blue">
                Facettes Céramiques Emalya
              </Link>
              .
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-emalya-gray/90 md:text-base">
              Accès rapides :{" "}
              <Link href={ROUTES.rendezVous} className="font-medium text-emalya-blue hover:underline">
                rendez-vous
              </Link>
              ,{" "}
              <Link href={ROUTES.simulateur} className="font-medium text-emalya-blue hover:underline">
                simulateur
              </Link>
              ,{" "}
              <Link href={ROUTES.formation} className="font-medium text-emalya-blue hover:underline">
                formation
              </Link>
              ,{" "}
              <Link href={ROUTES.facilitationPaiement} className="font-medium text-emalya-blue hover:underline">
                paiement en plusieurs fois
              </Link>
              .
            </p>
          </div>
        </header>

        <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
