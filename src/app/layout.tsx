import type { Metadata } from "next";
import { Inter, Audiowide } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const audiowide = Audiowide({ weight: "400", subsets: ["latin"], variable: "--font-audiowide" });

export const metadata: Metadata = {
  title: "KODY — Acesso Antecipado",
  description: "Seja o primeiro a estruturar sua empresa com IA. Garanta seu acesso antecipado ao KODY OS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${audiowide.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
