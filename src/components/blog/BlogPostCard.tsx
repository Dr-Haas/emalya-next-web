import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

const categoryStyles: Record<string, string> = {
  Technique: "bg-emalya-blue/10 text-emalya-blue border-emalya-blue/20",
  "Guide patient": "bg-emalya-cream text-emalya-blue border-emalya-cream",
  Comparatif: "bg-white text-emalya-blue border-emalya-blue/30",
  Conseils: "bg-emalya-pink/15 text-emalya-blue border-emalya-pink/30",
};

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

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const cat = post.category ?? "Article";
  const badgeClass = categoryStyles[cat] ?? "bg-emalya-offwhite text-emalya-gray border-emalya-cream";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col rounded-2xl border border-emalya-cream bg-white p-6 shadow-sm transition-all duration-300 hover:border-emalya-blue/25 hover:shadow-md md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className={`inline-flex rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wide ${badgeClass}`}>
          {cat}
        </span>
        <time className="text-sm text-emalya-gray/80" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      </div>
      <h2 className="text-xl font-bold text-emalya-blue transition-colors group-hover:text-emalya-blue/90 md:text-2xl">
        {post.title}
      </h2>
      <p className="mt-3 flex-1 text-emalya-gray leading-relaxed">{post.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emalya-blue">
        Lire l’article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
