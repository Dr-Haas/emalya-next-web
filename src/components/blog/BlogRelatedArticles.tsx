import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

type BlogRelatedArticlesProps = {
  currentSlug: string;
};

export function BlogRelatedArticles({ currentSlug }: BlogRelatedArticlesProps) {
  const others = getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (others.length === 0) return null;

  return (
    <section className="mt-14 border-t border-emalya-cream pt-10">
      <h2 className="text-xl font-bold text-emalya-blue mb-6">À lire aussi</h2>
      <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        {others.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex h-full flex-col rounded-xl border border-emalya-cream bg-emalya-offwhite/50 p-4 transition-colors hover:border-emalya-blue/25 hover:bg-white"
            >
              {p.category && (
                <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-emalya-blue/70">{p.category}</span>
              )}
              <span className="font-semibold text-emalya-blue group-hover:underline">{p.title}</span>
              <p className="mt-2 line-clamp-3 text-sm text-emalya-gray">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
