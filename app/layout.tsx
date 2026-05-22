import type { Metadata } from "next";
import { Red_Hat_Display, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/app/components/SmoothScroll";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Quem Somos — Balzani",
  description:
    "Somos o maior hub de soluções para o mercado imobiliário. Especialistas em lançamentos com foco em performance e resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${redHatDisplay.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
