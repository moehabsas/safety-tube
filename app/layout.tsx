import type { Metadata, Viewport } from "next";
import { Cairo, Rubik } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { baseurl } from "@/lib/config";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic"],
});

export const viewport: Viewport = {
  themeColor: "#4f6ef7",
};

export const metadata: Metadata = {
  title: {
    template: "السلامة والصحة المهنية | %s",
    default: "السلامة والصحة المهنية",
  },
  description: "موقع فريق السلامة والصحة المهنية.",
  keywords: ["السلامة", "الصحة", "المهنية", "شنتنا الحجر"],
  metadataBase: new URL(baseurl),
  openGraph: {
    type: "website",
    siteName: "السلامة والصحة المهنية",
    countryName: "مصر",
    locale: "ar",
    url: "/",
    images: [
      {
        url: "/images/og.webp",
        alt: "السلامة والصحة المهنية",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@moehabsas",
  },
  authors: [{ name: "Mohamed El-Gedawy", url: "https://github.com/moehabsas" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${rubik.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
