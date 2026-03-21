import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { BlogArticleCTA } from "@/components/blog/BlogArticleCTA";
import { BlogRelatedArticles } from "@/components/blog/BlogRelatedArticles";

type Props = { params: Promise<{ slug: string }> };

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <article className="flex-1 pt-28 pb-16 container max-w-3xl mx-auto px-4">
        <p className="text-sm text-emalya-gray mb-2">{post.date}</p>
        <h1 className="text-4xl font-bold text-emalya-blue mb-8">{post.title}</h1>
        <BlogMarkdown content={post.content} />
        <BlogRelatedArticles currentSlug={slug} />
        <div className="mt-12">
          <BlogArticleCTA />
        </div>
        <div className="mt-10 border-t border-emalya-cream pt-8">
          <Link href="/blog" className="text-emalya-blue font-medium hover:underline">
            ← Tous les articles
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
}
