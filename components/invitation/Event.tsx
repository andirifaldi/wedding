import { invitation } from "@/data/invitation";

export default function Event() {
  return (
    <section className="py-16 px-6 bg-cream/20">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2">
          Waktu & Tempat
        </p>
        <h2 className="text-3xl font-serif font-bold text-rose-800 mb-10">
          Detail Pernikahan
        </h2>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100">
          <div className="text-amber-600 text-sm font-semibold tracking-wider uppercase mb-1">
            {invitation.wedding.day}
          </div>
          <div className="text-4xl font-serif font-bold text-rose-800 mb-6">
            {invitation.wedding.date}
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 text-left">
              <span className="text-rose-400 mt-0.5">🕐</span>
              <div>
                <p className="font-semibold text-rose-800 text-sm">Acara</p>
                <p className="text-gray-500 text-sm">{invitation.event.acara}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-rose-100 pt-6 mb-6">
            <p className="font-serif font-bold text-rose-800 text-lg mb-1">
              {invitation.wedding.location}
            </p>
            <p className="text-gray-500 text-sm">{invitation.wedding.address}</p>
          </div>

          <a
            href={invitation.wedding.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-800 text-cream rounded-full text-sm font-semibold hover:bg-rose-700 transition-colors"
          >
            📍 Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
