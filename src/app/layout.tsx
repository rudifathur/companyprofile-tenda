import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Kalyana Tenda — Produsen Tenda Terlengkap",
  description:
    "Sewa dan produksi tenda untuk pernikahan, kondangan, hingga event & konser berskala besar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-[#211E1A]">
        {children}
      </body>
    </html>
  );
}
