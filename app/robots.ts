import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/config";

export default function robots() {
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
