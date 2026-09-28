"use client";

import { useState, useEffect } from "react";

const weddingDate = new Date("2026-10-03T11:00:00+07:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-rose-50 text-center">
      <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2">
        Hitung Mundur
      </p>
      <h2 className="text-3xl font-serif font-bold text-rose-800 mb-10">
        Menuju Hari Bahagia
      </h2>

      <div className="flex justify-center gap-3 sm:gap-5">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-rose-800 to-rose-900 flex items-center justify-center shadow-lg mb-2">
              <span className="text-2xl sm:text-3xl font-bold text-amber-200">
                {String(value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-rose-600 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
