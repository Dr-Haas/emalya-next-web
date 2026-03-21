import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — conseils & techniques",
  description:
    "Articles sur les facettes sans taille, le choix composite ou céramique, et le parcours patient ÉMALYA.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-16 container max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-emalya-blue mb-4">Blog</h1>
        <p className="text-emalya-gray mb-12">
          Articles techniques pour comprendre nos protocoles — avec liens vers le{" "}
          <Link href="/facettes-composites-naturelles" className="text-emalya-blue underline">
            Pack Signature
          </Link>{" "}
          et le{" "}
          <Link href="/facettes-ceramiques-premium" className="text-emalya-blue underline">
            Pack Premium
          </Link>
          .
        </p>
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-2xl font-semibold text-emalya-blue group-hover:underline">{post.title}</h2>
                <p className="text-sm text-emalya-gray/80 mt-1">{post.date}</p>
                <p className="text-emalya-gray mt-2">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
