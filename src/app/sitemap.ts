import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://emalya.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteUrl}/facettes-composites-naturelles`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/facettes-ceramiques-premium`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/rendez-vous`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/facilitation-paiement`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/simulateur-sourire`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/formation`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/emalya-lab`, lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${siteUrl}/notice-patient`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
