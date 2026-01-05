import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CardsCarousel from "@/components/cards-carousel";
import { topics } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

function getTopic(slug: string) {
  const topic = topics.find((topic) => topic.slug === slug);
  return topic ?? null;
}

export function generateStaticParams() {
  return topics.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const topic = getTopic(slug);
  if (!topic) {
    notFound();
  }

  const { title, description, lastModified, cards } = topic;
  const tags = cards.map((c) => c.title);
  const images = cards.map(({ title, image }) => ({
    url: image,
    alt: title,
  }));

  return {
    title,
    description,
    keywords: ["مواضيع السلامة", title, ...tags],
    openGraph: {
      type: "article",
      modifiedTime: lastModified.toISOString(),
      url: `/topics/${slug}`,
      images,
      tags,
    },
  } satisfies Metadata;
}

export default async function Topic({ params }: Props) {
  const { slug } = await params;

  const topic = getTopic(slug);
  if (!topic) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center min-h-svh p-10">
      <CardsCarousel cards={topic.cards} />
    </main>
  );
}
