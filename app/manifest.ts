import type { MetadataRoute } from "next";

export default function manifest() {
  return {
    name: "السلامة والصحة المهنية",
    short_name: "فريق السلامة المهنية",
    description: "موقع فريق السلامة والصحة المهنية.",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "253x256",
        type: "image/x-icon",
      },
    ],
  } satisfies MetadataRoute.Manifest;
}
