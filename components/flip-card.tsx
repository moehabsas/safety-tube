"use client";

import Image from "next/image";
import { useState, useEffectEvent, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function FlipCard({
  title,
  image,
  description,
  className,
  ...props
}: React.ComponentProps<"article"> & {
  title: string;
  image: string;
  description: string;
}) {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  const flipEvent = useEffectEvent(flip);

  useEffect(() => {
    const keydownListener = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flipEvent();
      }
    };

    window.addEventListener("keydown", keydownListener);

    return () => {
      window.removeEventListener("keydown", keydownListener);
    };
  }, []);

  return (
    <article
      className={cn(
        "w-full aspect-9/16 perspective-distant cursor-pointer",
        className
      )}
      onClick={flip}
      role="button"
      aria-labelledby="fcn"
      {...props}
    >
      <div
        className={cn(
          "relative size-full transition-transform duration-700 ease-out transform-3d",
          {
            "rotate-y-180 rtl:-rotate-y-180": flipped,
          }
        )}
      >
        {/* Front - Image */}
        <FlipCardFace className="select-none">
          <Image
            src={image}
            alt={title}
            className="object-cover opacity-70 blur-sm"
            aria-hidden
            fill
          />
          <Image src={image} alt={title} className="object-contain" fill />
        </FlipCardFace>

        {/* Back - Details */}
        <FlipCardFace className="px-5 py-12 space-y-6" back>
          <h3 className="font-bold text-center text-2xl">{title}</h3>
          <p className="font-mono text-muted-foreground leading-relaxed">
            {description}
          </p>
        </FlipCardFace>

        {/* Card note */}
        <p
          id="fcn"
          className={cn(
            "absolute inset-x-5 bottom-5 font-mono text-shadow-xl text-sm select-none z-999 rotate-y-0 transition-all ease-out",
            {
              "text-muted-foreground rotate-y-180 duration-500": flipped,
            }
          )}
          role="note"
        >
          {flipped ? "اضغط للعودة" : title}
        </p>
      </div>
    </article>
  );
}

function FlipCardFace({
  className,
  back = false,
  ...props
}: React.ComponentProps<"div"> & {
  back?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 backface-hidden bg-card border shadow-lg rounded-2xl overflow-hidden",
        { "rotate-y-180": back },
        className
      )}
      {...props}
    />
  );
}
