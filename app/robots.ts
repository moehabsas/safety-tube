import type { MetadataRoute } from "next";

export default function robots() {
  const baseUrl = process.env.PUBLIC_NEXT_URL!;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "*",
      },
    ],
    host: new URL(baseUrl).host,
    sitemap: `${baseUrl}/sitemap.xml`,
  } satisfies MetadataRoute.Robots;
}
