import { invitation } from "@/data/invitation";

export default function Gallery() {
  const photos = [
    { src: "/images/couple.jpg", alt: "Foto Pasangan" },
    { src: "/images/photo-1.jpg", alt: "Foto 1" },
    { src: "/images/photo-2.jpg", alt: "Foto 2" },
    { src: "/images/photo-3.jpg", alt: "Foto 3" },
    { src: "/images/photo-4.jpg", alt: "Foto 4" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2 text-center">
          Galeri
        </p>
        <h2 className="text-3xl font-serif font-bold text-center text-rose-800 mb-10">
          Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
