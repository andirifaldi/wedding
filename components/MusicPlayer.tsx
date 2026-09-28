"use client";
import { useRef, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio("/music/wedding.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const startMusic = () => {
      if (hasPlayed.current || !audioRef.current) return;
      audioRef.current.play().catch(() => {});
      hasPlayed.current = true;
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return null;
}
