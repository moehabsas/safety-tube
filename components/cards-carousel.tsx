"use client";

import type { Flashcard } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffectEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FlipCard from "@/components/flip-card";

export default function CardsCarousel({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const previous = () => {
    setIndex((prev) => (prev + cards.length - 1) % cards.length);
  };

  const nextEvent = useEffectEvent(next);
  const previousEvent = useEffectEvent(previous);

  useEffect(() => {
    const actions: Record<string, () => void> = {
      ArrowLeft: previousEvent,
      ArrowRight: nextEvent,
    };

    const keydownListener = ({ key }: KeyboardEvent) => actions[key]?.();

    window.addEventListener("keydown", keydownListener);

    return () => {
      window.removeEventListener("keydown", keydownListener);
    };
  }, []);

  const card = cards.at(index);

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-10">
      {card && <FlipCard {...card} />}

      <footer className="flex items-center justify-between gap-10 px-10">
        <Button
          size="icon-lg"
          variant="outline"
          className="rounded-full"
          disabled={index < 1}
          onClick={previous}
          aria-label="السابق"
          title="السابق"
        >
          <ChevronRight />
        </Button>

        <p className="flex gap-3 font-semibold text-md select-none">
          <span>{index + 1}</span>
          <span className="text-muted-foreground">/</span>
          <span>{cards.length}</span>
        </p>

        <Button
          size="icon-lg"
          variant="outline"
          className="rounded-full"
          disabled={index > cards.length - 2}
          onClick={next}
          aria-label="التالي"
          title="التالي"
        >
          <ChevronLeft />
        </Button>
      </footer>
    </div>
  );
}
