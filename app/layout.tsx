import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Wedding of Andi & Rina",
  description: "Undangan pernikahan Andi & Rina - 12 Juni 2027",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
