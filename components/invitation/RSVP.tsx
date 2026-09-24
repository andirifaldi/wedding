"use client";
import { useState } from "react";
import { invitation } from "@/data/invitation";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Halo, saya ${name || "Tamu"} ingin mengonfirmasi kehadiran untuk acara pernikahan Adit & Vera.\nStatus: ${attending ? "Saya akan hadir" : "Maaf, saya tidak bisa hadir"}.`
    );
    window.open(`https://wa.me/${invitation.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-md mx-auto text-center">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2">RSVP</p>
        <h2 className="text-3xl font-serif font-bold text-rose-800 mb-8">Konfirmasi Kehadiran</h2>
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100 space-y-5">
          <div className="text-left">
            <label className="block text-sm font-medium text-rose-700 mb-1.5">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-rose-700 mb-2">Kehadiran</label>
            <div className="flex gap-3">
              <button
                onClick={() => setAttending(true)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                  attending
                    ? "bg-rose-800 text-cream border-rose-800"
                    : "bg-white text-rose-700 border-rose-200 hover:border-rose-400"
                }`}
              >
                Hadir
              </button>
              <button
                onClick={() => setAttending(false)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                  !attending
                    ? "bg-rose-800 text-cream border-rose-800"
                    : "bg-white text-rose-700 border-rose-200 hover:border-rose-400"
                }`}
              >
                Maaf Tidak Bisa
              </button>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            📱 Kirim via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
