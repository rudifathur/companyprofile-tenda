"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

type Slide = {
  _id: string;
  title?: string;
  image: SanityImage;
  linkUrl?: string;
};

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <>
      <img
        src={urlForImage(slide.image).width(1600).height(560).url()}
        alt={slide.title || "Banner"}
        className="w-full h-full object-cover"
      />
      {slide.title && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute bottom-6 left-6 md:bottom-10 md:left-10 font-serif text-white text-2xl md:text-3xl">
            {slide.title}
          </span>
        </>
      )}
    </>
  );
}

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full aspect-[16/6] md:aspect-[16/5] overflow-hidden bg-onyx">
      {slides.map((slide, i) => {
        const style = {
          opacity: i === active ? 1 : 0,
          pointerEvents: i === active ? ("auto" as const) : ("none" as const),
        };
        return slide.linkUrl ? (
          <Link
            key={slide._id}
            href={slide.linkUrl}
            className="absolute inset-0 transition-opacity duration-700"
            style={style}
          >
            <SlideContent slide={slide} />
          </Link>
        ) : (
          <div key={slide._id} className="absolute inset-0 transition-opacity duration-700" style={style}>
            <SlideContent slide={slide} />
          </div>
        );
      })}

      {slides.length > 1 && (
        <div className="absolute bottom-4 right-6 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className="w-2 h-2 rounded-full transition"
              style={{ background: i === active ? "#C9A567" : "rgba(255,255,255,0.4)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
