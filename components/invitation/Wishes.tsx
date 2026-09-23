"use client";

import { useState, useEffect } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbynai93vd1XfFHfh7UT2s05giAfXSmGBZxozZ_vnEknLc-MdFA0mbHvVRgEmMqoliCPMQ/exec";

interface Wish {
  name: string;
  message: string;
  timestamp?: string;
}

export default function Wishes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishes from Google Sheets on mount
  useEffect(() => {
    fetch(APPS_SCRIPT_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setWishes(data.data.reverse()); // newest first
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan ucapan harus diisi.");
      return;
    }

    setSending(true);
    setError("");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      setSent(true);
      setName("");
      setMessage("");

      // Refresh list after a short delay (Google Sheets needs ~2-3s to save)
      setTimeout(() => {
        fetch(APPS_SCRIPT_URL)
          .then((res) => res.json())
          .then((data) => {
            if (data.data) {
              setWishes(data.data.reverse());
            }
          });
      }, 3000);
    } catch {
      setError("Gagal mengirim. Silakan coba lagi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-cream/20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-rose-800 mb-2">
          Ucapan & Doa
        </h2>
        <p className="text-amber-600 text-sm text-center mb-8">
          Kirimkan doa terbaik untuk kami
        </p>

        {/* Form */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-rose-700 mb-1.5">
                Nama
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                disabled={sending}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm text-gray-700 placeholder-gray-400 disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-rose-700 mb-1.5">
                Ucapan & Doa
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis ucapan dan doa terbaik Anda..."
                rows={4}
                disabled={sending}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm text-gray-700 placeholder-gray-400 resize-none disabled:opacity-50"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {sent && (
              <p className="text-green-600 text-sm font-medium">
                ✅ Terima kasih! Ucapan Anda telah terkirim.
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={sending}
              className="w-full py-3.5 bg-rose-800 hover:bg-rose-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              {sending ? "Mengirim..." : "Kirim Ucapan & Doa"}
            </button>
          </div>
        </div>

        {/* Wishes list from Google Sheets */}
        {loading ? (
          <div className="text-center text-rose-400 text-sm py-4">Memuat...</div>
        ) : wishes.length === 0 ? (
          <div className="text-center text-rose-400 text-sm py-4">
            Belum ada ucapan. Jadilah yang pertama!
          </div>
        ) : (
          <div className="space-y-4">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white font-bold text-sm">
                    {wish.name[0]}
                  </div>
                  <p className="font-semibold text-rose-800 text-sm">
                    {wish.name}
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {wish.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
