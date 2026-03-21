import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

type BlogRelatedArticlesProps = {
  currentSlug: string;
};

export function BlogRelatedArticles({ currentSlug }: BlogRelatedArticlesProps) {
  const others = getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 2);

  if (others.length === 0) return null;

  return (
    <section className="mt-12 border-t border-emalya-cream pt-10">
      <h2 className="text-xl font-semibold text-emalya-blue mb-4">Autres articles</h2>
      <ul className="space-y-4">
        {others.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group block">
              <span className="text-emalya-blue font-medium group-hover:underline">{p.title}</span>
              <p className="text-sm text-emalya-gray mt-1">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
