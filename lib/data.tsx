export interface Flashcard {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  lastModified: Date;
  icon: React.ElementType;
  cards: Flashcard[];
}

export const topics: Topic[] = [];
