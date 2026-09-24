**Strategi Undangan Online**

**1. Tujuan**
Membuat satu halaman undangan pernikahan online menggunakan **Next.js + TypeScript + Tailwind CSS**.
Seluruh data undangan dibuat **statis di dalam source code**, tanpa:
- Backend
- Golang
- Database
- API
- Login
- Dashboard
- Authentication

Fokus utama adalah menghasilkan template undangan yang sederhana, elegan, responsive, dan mudah dikembangkan.

**2. Teknologi**
Teknologi yang digunakan:
- Next.js
- TypeScript
- Tailwind CSS

Struktur sederhana:
```
frontend/
├── app/
│   ├── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── public/
│   ├── images/
│   └── music/
└── package.json
```

**3. Konsep Halaman**
Undangan hanya memiliki **satu halaman**.
Alur halaman:
```
Opening
↓
Mempelai
↓
Foto
↓
Detail Pernikahan
↓
Lokasi
↓
RSVP
↓
Ucapan & Doa
↓
Footer
```
Tidak ada perpindahan halaman.

**4. Opening**
Halaman pertama sebelum undangan dibuka.
Isi:
```
THE WEDDING OF
Adit & Vera
12 Juni 2027
[ Buka Undangan ]
```
Ketika tombol ditekan, halaman undangan ditampilkan.
State sederhana:
```tsx
const [opened, setOpened] = useState(false);
```

**5. Section Mempelai**
Menampilkan informasi pasangan.
Contoh:
```
Aditya Fahmi Nugraha Putra
dari Bapak Ishak Iskandar & Ibu Nani Maryani

&

Vera Noverinda
dari Bapak Nugroho & Ibu Paryati
```
Data ditulis langsung di kode.

**6. Section Foto**
Foto pasangan disimpan di:
```
public/images/
```
Contoh:
```
public/
└── images/
    ├── couple.jpg
    ├── photo-1.jpg
    ├── photo-2.jpg
    └── photo-3.jpg
```
Kemudian digunakan:
```tsx
<img src="/images/couple.jpg" alt="Adit dan Vera" />
```

**7. Section Pernikahan**
Informasi acara dibuat statis.
Contoh:
```
Sabtu 12 Juni 2027
Akad & Resepsi
08:00 WIB - selesai
Jakarta Convention Center
```
Tombol:
```
[ Lihat Lokasi ]
```
Tombol dapat diarahkan langsung ke Google Maps menggunakan URL statis.

**8. Section Countdown**
Countdown tetap dapat dibuat menggunakan JavaScript.
Target tanggal ditulis langsung:
```tsx
const weddingDate = new Date("2027-06-12T08:00:00+07:00");
```
Countdown menampilkan:
```
120 Hari 05 Jam 32 Menit 18 Detik
```
Tidak membutuhkan backend.

**9. Section RSVP**
Karena seluruh data dibuat statis, RSVP **tidak benar-benar disimpan**.
Form hanya digunakan sebagai tampilan prototype.
```
Konfirmasi Kehadiran
Nama [____________________]
Kehadiran [ Saya akan hadir ]
[ Kirim Konfirmasi ]
```
Jika ingin tombol benar-benar melakukan sesuatu tanpa backend, bisa diarahkan ke WhatsApp.
Contoh:
```
https://wa.me/628xxxxxxxxxx?text=Halo,%20saya%20Adit%20ingin%20mengonfirmasi%20kehadiran%20untuk%20acara%20pernikahan.
```

**10. Section Ucapan & Doa**
Ucapan dibuat statis.
Contoh data:
```tsx
const wishes = [
  {
    name: "Budi",
    message: "Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
  },
  {
    name: "Sinta",
    message: "Semoga selalu diberikan kebahagiaan dan keberkahan.",
  },
  {
    name: "Doni",
    message: "Happy wedding! Semoga menjadi keluarga yang selalu bahagia.",
  },
];
```
Kemudian ditampilkan menggunakan:
```tsx
{wishes.map((wish) => (
  <Wish key={wish.name} name={wish.name} message={wish.message} />
))}
```
Form ucapan hanya sebagai elemen visual.

**11. Footer**
Footer sederhana:
```
Adit & Vera
Terima kasih atas doa dan kehadiran Anda. ❤️
```

**12. Struktur Component**
Walaupun hanya satu halaman, sebaiknya kode tetap dipisahkan menjadi component agar mudah dirawat.
```
components/
└── invitation/
    ├── Opening.tsx
    ├── Couple.tsx
    ├── Event.tsx
    ├── Countdown.tsx
    ├── RSVP.tsx
    ├── Wishes.tsx
    └── Footer.tsx
```
Kemudian:
```tsx
// app/page.tsx
cukup mengatur urutan:
<Opening />
<Couple />
<Event />
<Countdown />
<RSVP />
<Wishes />
<Footer />
```

**13. Data Statis**
Semua data dapat diletakkan dalam satu file:
```
data/
└── invitation.ts
```
Contoh:
```tsx
export const invitation = {
  groom: {
    name: "Aditya Fahmi Nugraha",
    parents: "Bapak Ishak Iskandar & Ibu Nani Maryani",
  },
  bride: {
    name: "Vera Noverinda",
    parents: "Bapak Nugroho & Ibu Paryati",
  },
  wedding: {
    date: "12 Juni 2027",
    time: "08:00 WIB - selesai",
    location: "Jalan Sumurbor Gang Attaqwa II no. 40 RT.6/Rw.12 kalideres ",
    mapsUrl: "https://maps.google.com/...",
  },
};
```

**14. Struktur Project**
Struktur final yang direkomendasikan:
```
wedding-invitation/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── invitation/
│       ├── Opening.tsx
│       ├── Couple.tsx
│       ├── Event.tsx
│       ├── Countdown.tsx
│       ├── RSVP.tsx
│       ├── Wishes.tsx
│       └── Footer.tsx
├── data/
│   └── invitation.ts
├── public/
│   ├── images/
│   │   ├── couple.jpg
│   │   ├── photo-1.jpg
│   │   ├── photo-2.jpg
│   │   └── photo-3.jpg
│   └── music/
│       └── wedding.mp3
├── package.json
└── tsconfig.json
```

**15. Strategi Development**
Pengembangan dilakukan secara sederhana:

**Tahap 1 — Setup**
- Next.js
- TypeScript
- Tailwind

**Tahap 2 — Layout**
Buat:
- Opening
- Mempelai
- Event
- RSVP
- Wishes
- Footer

**Tahap 3 — Asset**
Tambahkan:
- Foto pasangan
- Foto gallery
- Musik

**Tahap 4 — Interaksi**
Tambahkan:
- Buka Undangan
- Countdown
- Scroll
- Google Maps
- WhatsApp RSVP
- Music Player

**Tahap 5 — Finishing**
Periksa:
- Mobile
- Tablet
- Desktop
- Performance
- Typography
- Spacing
- Animation

**16. Fitur yang Tidak Dibuat**
Untuk versi ini, jangan membuat:
```
❌ Backend
❌ Golang
❌ Database
❌ REST API
❌ JWT
❌ Login
❌ Register
❌ Dashboard
❌ Admin panel
❌ Payment
❌ Dynamic slug
```
Tujuannya supaya kita bisa fokus membuat **template undangan yang bagus terlebih dahulu**.

**17. Hasil Akhir**
Target akhirnya adalah sebuah website statis:
```
Next.js
├── HTML
├── CSS
└── JavaScript
    ▼
Static Website
```
Website dapat di-deploy ke layanan static hosting dan tidak membutuhkan server backend.

**18. Prioritas**
Urutan pengerjaan:
```
1. Layout
↓
2. Design
↓
3. Responsive
↓
4. Foto
↓
5. Countdown
↓
6. Google Maps
↓
7. RSVP WhatsApp
↓
8. Ucapan statis
↓
9. Music
↓
10. Animation
```
Prinsipnya:
**Buat satu template undangan yang selesai dan bagus terlebih dahulu. Jangan membuat sistem SaaS sebelum template dasarnya matang.**
