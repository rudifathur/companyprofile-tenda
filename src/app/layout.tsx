import type { Metadata } from "next";
import { Anton, Albert_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tenda Trikora — Produsen Tenda Terlengkap",
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
      className={`${anton.variable} ${albertSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-[#211E1A]">
        {children}
      </body>
    </html>
  );
}
