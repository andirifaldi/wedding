import { invitation } from "@/data/invitation";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-rose-800 to-rose-900 text-cream py-16 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <p className="text-3xl font-serif font-bold mb-4 text-amber-200">
          {invitation.groom.name.split(" ")[0]} & {invitation.bride.name.split(" ")[0]}
        </p>
        <p className="text-rose-200 text-sm leading-relaxed">
          Terima kasih atas doa dan kehadiran Anda.
          <br />
          Semoga Tuhan memberkahi langkah kami.
        </p>
        <div className="mt-6 text-amber-300 text-xl">❤️</div>
      </div>
    </footer>
  );
}
