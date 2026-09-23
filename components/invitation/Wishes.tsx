import { invitation } from "@/data/invitation";

export default function Wishes() {
  return (
    <section className="py-16 px-6 bg-cream/20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-rose-800 mb-2">
          Ucapan & Doa
        </h2>
        <p className="text-amber-600 text-sm text-center mb-8">
          Kirimkan doa terbaik untuk kami
        </p>

        <div className="space-y-4">
          {invitation.wishes.map((wish, index) => (
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
      </div>
    </section>
  );
}
