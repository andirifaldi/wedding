"use client";

import { invitation } from "@/data/invitation";

interface OpeningProps {
  onOpen: () => void;
}

export default function Opening({ onOpen }: OpeningProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-rose-900 via-rose-800 to-amber-900 text-cream">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose-950/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-950/50 to-transparent" />

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 text-amber-300/40 text-4xl">✦</div>
      <div className="absolute top-6 right-6 text-amber-300/40 text-4xl">✦</div>
      <div className="absolute bottom-6 left-6 text-amber-300/40 text-4xl">✦</div>
      <div className="absolute bottom-6 right-6 text-amber-300/40 text-4xl">✦</div>

      <div className="relative z-10 text-center px-8">
        <div className="text-amber-300 tracking-[0.3em] text-xs mb-6 uppercase">
          The Wedding of
        </div>

        <div className="text-5xl md:text-6xl font-serif font-bold mb-2 text-cream">
          {invitation.groom.name.split(" ")[0]}
        </div>
        <div className="text-amber-300 text-2xl my-3 font-serif">&</div>
        <div className="text-5xl md:text-6xl font-serif font-bold mb-8 text-cream">
          {invitation.bride.name.split(" ")[0]}
        </div>

        <div className="text-amber-200 tracking-widest text-sm mb-12">
          {invitation.wedding.date}
        </div>

        <button
          onClick={onOpen}
          className="group relative px-10 py-4 bg-rose-100 text-rose-800 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-rose-200 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            Buka Undangan
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
}
