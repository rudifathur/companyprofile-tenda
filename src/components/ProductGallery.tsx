"use client";

import { useState, useRef } from "react";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

export default function ProductGallery({
  images,
  productName,
}: {
  images: SanityImage[];
  productName: string;
}) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-page-2 flex items-center justify-center text-ink-soft text-sm">
        Belum ada foto
      </div>
    );
  }

  const goNext = () => setActive((prev) => (prev + 1) % images.length);
  const goPrev = () => setActive((prev) => (prev - 1 + images.length) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div>
      {/* GAMBAR UTAMA — bisa di-swipe di HP */}
      <div
        className="aspect-square bg-page-2 overflow-hidden mb-3 relative"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={urlForImage(images[active]).width(700).height(700).url()}
          alt={`${productName} ${active + 1}`}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Foto sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Foto berikutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* THUMBNAIL — klik untuk ganti gambar utama */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="aspect-square bg-page-2 overflow-hidden"
              style={{
                outline: i === active ? "2px solid #C9A567" : "2px solid transparent",
                outlineOffset: "-2px",
              }}
              aria-label={`Lihat foto ${i + 1}`}
            >
              <img
                src={urlForImage(img).width(200).height(200).url()}
                alt={`${productName} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
