import type { MetadataRoute } from "next";
import { baseurl } from "@/lib/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "*",
      },
    ],
    host: new URL(baseurl).host,
    sitemap: `${baseurl}/sitemap.xml`,
  } satisfies MetadataRoute.Robots;
}
