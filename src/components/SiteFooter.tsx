import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-onyx text-ivory/60 mt-auto border-t border-champagne/15">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <span className="font-serif text-lg text-ivory">Tenda Trikora</span>
          <p className="mt-3 text-ivory/50 leading-relaxed">
            Jl. Contoh Alamat No. 99, Bogor, Jawa Barat, Indonesia
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center hover:border-champagne hover:text-champagne transition">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="TikTok" className="w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center hover:border-champagne hover:text-champagne transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M14 3c.5 2.5 2 4 5 4.3" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center hover:border-champagne hover:text-champagne transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h4" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
          </div>
        </div>

        <div>
          <span className="text-ivory text-xs uppercase tracking-wider">Kontak</span>
          <div className="mt-3 space-y-2 text-ivory/50">
            <a href="https://wa.me/6280000000000" target="_blank" className="block hover:text-champagne">WhatsApp: 0800-0000-000</a>
            <span className="block">Email: halo@tendatrikora.id</span>
          </div>
        </div>

        <div>
          <span className="text-ivory text-xs uppercase tracking-wider">Jelajahi</span>
          <div className="mt-3 space-y-2 text-ivory/50">
            <Link href="/" className="block hover:text-champagne">Beranda</Link>
            <Link href="/kategori" className="block hover:text-champagne">Semua Kategori</Link>
            <Link href="/galeri" className="block hover:text-champagne">Galeri</Link>
            <Link href="/promo" className="block hover:text-champagne">Promo</Link>
            <Link href="/blog" className="block hover:text-champagne">Blog</Link>
          </div>
        </div>

        <div>
          <span className="text-ivory text-xs uppercase tracking-wider">Perusahaan</span>
          <div className="mt-3 space-y-2 text-ivory/50">
            <Link href="/tentang-kami" className="block hover:text-champagne">Tentang Kami</Link>
            <Link href="/cara-pemesanan" className="block hover:text-champagne">Cara Pemesanan</Link>
            <Link href="/kontak" className="block hover:text-champagne">Kontak</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-champagne/10 px-6 py-4 text-[11px] text-ivory/35 text-center">
        © 2026 Tenda Trikora. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
