"use client";

import { useState } from "react";
import Link from "next/link";

type Category = { _id: string; title: string; slug: string };

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/cara-pemesanan", label: "Cara Pemesanan" },
  { href: "/promo", label: "Promo" },
  { href: "/blog", label: "Blog" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export default function MobileMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Buka menu"
        className="md:hidden text-ivory p-2 -mr-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-xs bg-onyx border-l border-champagne/20 overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-champagne/15">
              <span className="font-serif text-lg text-ivory">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Tutup menu" className="text-ivory p-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-[14px] text-ivory/80 hover:text-champagne border-b border-champagne/8"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setCategoriesOpen((v) => !v)}
                className="flex items-center justify-between px-5 py-3 text-[14px] text-ivory/80 hover:text-champagne border-b border-champagne/8"
              >
                Semua Kategori
                <span>{categoriesOpen ? "−" : "+"}</span>
              </button>
              {categoriesOpen && (
                <div className="bg-onyx-2">
                  {categories.length === 0 ? (
                    <div className="px-7 py-2.5 text-xs text-ivory/40">Belum ada kategori</div>
                  ) : (
                    categories.map((c) => (
                      <Link
                        key={c._id}
                        href={`/kategori/${c.slug}`}
                        onClick={() => setOpen(false)}
                        className="block px-7 py-2.5 text-[13px] text-ivory/70 hover:text-champagne border-b border-champagne/5"
                      >
                        {c.title}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </nav>

            <div className="px-5 py-4">
              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                className="block text-center bg-champagne text-onyx text-xs font-medium px-5 py-3 hover:bg-champagne-light transition"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
