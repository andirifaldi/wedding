"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/wedding.mp3");
    audioRef.current.loop = true;
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-rose-800 text-cream shadow-lg flex items-center justify-center text-xl hover:bg-rose-700 transition-all"
      title={playing ? "Matikan Musik" : "Putar Musik"}
    >
      {playing ? "🔇" : "🎵"}
    </button>
  );
}
