import { invitation } from "@/data/invitation";

export default function Couple() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-white text-center">
      <div className="max-w-md mx-auto">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2">
         Dengan Hormat
        </p>
        <h2 className="text-3xl font-serif font-bold text-rose-800 mb-12">
          Mempelai
        </h2>

        {/* Groom */}
        <div className="mb-10">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-rose-200 to-amber-100 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-4xl">👰</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-rose-800 mb-1">
            {invitation.groom.name}
          </h3>
          <p className="text-rose-600 text-sm">{invitation.groom.parents}</p>
        </div>

        {/* Ampersand */}
        <div className="text-amber-400 text-3xl font-serif my-6">&</div>

        {/* Bride */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-rose-200 to-amber-100 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-4xl">🤵</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-rose-800 mb-1">
            {invitation.bride.name}
          </h3>
          <p className="text-rose-600 text-sm">{invitation.bride.parents}</p>
        </div>
      </div>
    </section>
  );
}
