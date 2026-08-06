import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-onyx text-ivory/60 mt-auto border-t border-champagne/15">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <span className="font-serif text-lg text-ivory">Tenda Trikora</span>
          <p className="mt-3 text-ivory/50 leading-relaxed">
            Jl. Contoh Alamat No. 99, Bogor, Jawa Barat, Indonesia
          </p>
        </div>
        <div>
          <span className="text-ivory text-xs uppercase tracking-wider">Kontak</span>
          <div className="mt-3 space-y-2 text-ivory/50">
            <a href="https://wa.me/6280000000000" target="_blank" className="block hover:text-champagne">
              WhatsApp: 0800-0000-000
            </a>
            <span className="block">Email: halo@tendatrikora.com</span>
          </div>
        </div>
        <div>
          <span className="text-ivory text-xs uppercase tracking-wider">Menu</span>
          <div className="mt-3 space-y-2 text-ivory/50">
            <Link href="/" className="block hover:text-champagne">Beranda</Link>
            <Link href="/kategori" className="block hover:text-champagne">Semua Kategori</Link>
            <Link href="/tentang-kami" className="block hover:text-champagne">Tentang Kami</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-champagne/10 px-6 py-4 text-[11px] text-ivory/35 text-center">
        © 2026 Tenda Trikora. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
