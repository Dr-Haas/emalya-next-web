import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { BlogArticleCTA } from "@/components/blog/BlogArticleCTA";
import { BlogRelatedArticles } from "@/components/blog/BlogRelatedArticles";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emalya-cream/30 via-white to-white">
      <Navbar />
      <article className="flex-1">
        <header className="relative border-b border-emalya-cream/80 bg-white/90 pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-emalya-pink/10 blur-3xl" />
          <div className="container relative mx-auto max-w-3xl px-4">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emalya-blue/80 transition-colors hover:text-emalya-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Blog
            </Link>
            {post.category && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emalya-blue/70">{post.category}</p>
            )}
            <h1 className="text-balance text-3xl font-bold leading-tight text-emalya-blue md:text-4xl lg:text-[2.5rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-emalya-gray md:text-xl">{post.description}</p>
            <time className="mt-6 block text-sm text-emalya-gray/80" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
        </header>

        <div className="container mx-auto max-w-3xl px-4 py-12 md:py-14">
          <BlogMarkdown content={post.content} />
          <BlogRelatedArticles currentSlug={slug} />
          <div className="mt-12">
            <BlogArticleCTA />
          </div>
          <div className="mt-12 border-t border-emalya-cream pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-emalya-blue hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Tous les articles
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
