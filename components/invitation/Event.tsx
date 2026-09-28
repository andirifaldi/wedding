import { invitation } from "@/data/invitation";

export default function Event() {
  const { akad, resepsi } = invitation.events;

  return (
    <section className="py-16 px-6 bg-cream/20">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2">
          Waktu & Tempat
        </p>
        <h2 className="text-3xl font-serif font-bold text-rose-800 mb-10">
          Detail Pernikahan
        </h2>

        {/* Akad Nikah */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100 mb-6">
          <div className="text-amber-600 text-sm font-bold tracking-wider uppercase mb-1">
            {akad.name}
          </div>
          <div className="text-amber-500 text-xs tracking-wider uppercase mb-1">
            {akad.day}
          </div>
          <div className="text-3xl font-serif font-bold text-rose-800 mb-4">
            {akad.date}
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 text-left">
              <span className="text-rose-400 mt-0.5">🕐</span>
              <div>
                <p className="font-semibold text-rose-800 text-sm">Waktu</p>
                <p className="text-gray-500 text-sm">{akad.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resepsi */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100">
          <div className="text-amber-600 text-sm font-bold tracking-wider uppercase mb-1">
            {resepsi.name}
          </div>
          <div className="text-amber-500 text-xs tracking-wider uppercase mb-1">
            {resepsi.day}
          </div>
          <div className="text-3xl font-serif font-bold text-rose-800 mb-4">
            {resepsi.date}
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 text-left">
              <span className="text-rose-400 mt-0.5">🕐</span>
              <div>
                <p className="font-semibold text-rose-800 text-sm">Waktu</p>
                <p className="text-gray-500 text-sm">{resepsi.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <span className="text-rose-400 mt-0.5">📍</span>
              <div>
                <p className="font-semibold text-rose-800 text-sm">Tempat</p>
                <p className="text-gray-500 text-sm">{resepsi.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
