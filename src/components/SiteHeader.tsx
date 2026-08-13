import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/getSiteSettings";
import MobileMenu from "./MobileMenu";

type Category = { _id: string; title: string; slug: string };

export default async function SiteHeader() {
  let categories: Category[] = [];
  try {
    categories = await client.fetch<Category[]>(ALL_CATEGORIES_QUERY);
  } catch {
    categories = [];
  }
  const settings = await getSiteSettings();
  const siteName = settings.siteName || "Tenda Trikora";

  return (
    <header className="sticky top-0 z-40 bg-onyx border-b border-champagne/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          {settings.logo ? (
            <img
              src={urlForImage(settings.logo).height(64).url()}
              alt={siteName}
              className="h-8 w-auto object-contain"
            />
          ) : (
            <div className="w-8 h-8 rounded-full border border-champagne flex items-center justify-center text-champagne font-serif text-sm">
              {siteName.charAt(0)}
            </div>
          )}
          <span className="font-serif text-lg text-ivory tracking-wide">
            {siteName}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-[13px] text-ivory/75">
          <Link href="/" className="hover:text-champagne">Beranda</Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-champagne py-3">
              Semua Kategori
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-onyx-2 border border-champagne/15 shadow-xl w-64 max-h-96 overflow-y-auto">
              {categories.length === 0 ? (
                <div className="px-4 py-3 text-xs text-ivory/40">Belum ada kategori</div>
              ) : (
                categories.map((c) => (
                  <Link
                    key={c._id}
                    href={`/kategori/${c.slug}`}
                    className="block px-4 py-2.5 text-[13px] text-ivory/75 hover:bg-onyx hover:text-champagne border-b border-champagne/5 last:border-0"
                  >
                    {c.title}
                  </Link>
                ))
              )}
            </div>
          </div>

          <Link href="/galeri" className="hover:text-champagne">Galeri</Link>
          <Link href="/cara-pemesanan" className="hover:text-champagne">Cara Pemesanan</Link>
          <Link href="/promo" className="hover:text-champagne">Promo</Link>
          <Link href="/blog" className="hover:text-champagne">Blog</Link>
          <Link href="/tentang-kami" className="hover:text-champagne">Tentang Kami</Link>
          <Link href="/kontak" className="hover:text-champagne">Kontak</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            className="hidden md:inline-block bg-champagne text-onyx text-xs font-medium px-5 py-2.5 hover:bg-champagne-light transition"
          >
            Hubungi Kami
          </a>
          <MobileMenu categories={categories} />
        </div>
      </div>
    </header>
  );
}
