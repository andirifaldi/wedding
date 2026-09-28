"use client";

import { invitation } from "@/data/invitation";

interface OpeningProps {
  onOpen: () => void;
}

export default function Opening({ onOpen }: OpeningProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      {/* Background foto dengan blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/couple.jpg')",
        }}
      >
        {/* Overlay blur */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient overlay untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-8">
        <div className="text-white/90 tracking-[0.3em] text-xs mb-6 uppercase drop-shadow-md">
          The Wedding of
        </div>

        <div className="text-5xl md:text-6xl font-serif font-bold mb-2 text-white drop-shadow-lg">
          {invitation.groom.name.split(" ")[0]}
        </div>
        <div className="text-white/80 text-2xl my-3 font-serif drop-shadow-md">&</div>
        <div className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white drop-shadow-lg">
          {invitation.bride.name.split(" ")[0]}
        </div>

        <div className="text-white/80 tracking-widest text-sm mb-12 drop-shadow-md">
          {invitation.wedding.date}
        </div>

        <button
          onClick={onOpen}
          className="group relative px-10 py-4 bg-white/90 text-rose-800 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 shadow-xl backdrop-blur-sm"
        >
          <span className="relative z-10 flex items-center gap-2">
            💌 Buka Undangan
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </div>

      {/* Decorative ornaments */}
      <div className="absolute top-6 left-6 text-white/30 text-4xl drop-shadow-lg">✦</div>
      <div className="absolute top-6 right-6 text-white/30 text-4xl drop-shadow-lg">✦</div>
      <div className="absolute bottom-6 left-6 text-white/30 text-4xl drop-shadow-lg">✦</div>
      <div className="absolute bottom-6 right-6 text-white/30 text-4xl drop-shadow-lg">✦</div>
    </div>
  );
}
