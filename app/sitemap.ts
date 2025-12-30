import type { MetadataRoute } from "next";
import { topics } from "@/lib/data";

export default function sitemap() {
  return [
    {
      url: "/",
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
    },
    ...topics.map(({ slug, lastModified }) => ({
      url: `/topics/${slug}`,
      lastModified,
      priority: 0.5,
    })),
  ] satisfies MetadataRoute.Sitemap;
}
