import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  /** Comparatif, Technique, Guide patient, Conseils */
  category?: string;
};

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        description: String(data.description ?? ""),
        content,
        category: data.category ? String(data.category) : undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      description: String(data.description ?? ""),
      content,
      category: data.category ? String(data.category) : undefined,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
