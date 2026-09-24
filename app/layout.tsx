import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Wedding of Adit & Vera",
  description: "Undangan pernikahan Adit & Vera - 12 Juni 2027",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
