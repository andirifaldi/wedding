"use client";

import { useState, useEffect, useCallback } from "react";

const photos = [
  { src: "/images/couple.jpg", alt: "Foto Pasangan" },
  { src: "/images/photo-1.jpg", alt: "Foto 1" },
  { src: "/images/photo-2.jpg", alt: "Foto 2" },
  { src: "/images/photo-3.jpg", alt: "Foto 3" },
  { src: "/images/photo-4.jpg", alt: "Foto 4" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setAnimating(false), 50);
    }, 300);
  }, [animating]);

  const prev = () => {
    goTo(current === 0 ? photos.length - 1 : current - 1);
  };

  const next = useCallback(() => {
    goTo(current === photos.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  // Auto-advance every 10 seconds
  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-lg mx-auto">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2 text-center">
          Galeri
        </p>
        <h2 className="text-3xl font-serif font-bold text-center text-rose-800 mb-8">
          Moments
        </h2>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative">
            <img
              key={current}
              src={photos[current].src}
              alt={photos[current].alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                animating
                  ? "opacity-0 scale-105 translate-x-8"
                  : "opacity-100 scale-100 translate-x-0"
              }`}
            />

            {/* Nav buttons */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-rose-800 flex items-center justify-center text-lg font-bold shadow-md hover:bg-white transition-colors z-10"
            >
              ‹
            </button>
            <button
              onClick={() => next()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-rose-800 flex items-center justify-center text-lg font-bold shadow-md hover:bg-white transition-colors z-10"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 text-white text-xs font-medium backdrop-blur-sm">
              {current + 1} / {photos.length}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-rose-800"
                    : "w-2 bg-rose-200 hover:bg-rose-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
