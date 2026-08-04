import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  ALL_CATEGORIES_QUERY,
  FEATURED_PRODUCTS_QUERY,
} from "@/sanity/lib/queries";

type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
};

type Product = {
  _id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  images?: any[];
  category?: { title: string; slug: string };
};

// Data diambil saat build & di-refresh berkala (bukan setiap request),
// supaya katalog tetap cepat walau produknya ratusan.
export const revalidate = 60;

async function getData() {
  try {
    const [categories, featuredProducts] = await Promise.all([
      client.fetch<Category[]>(ALL_CATEGORIES_QUERY),
      client.fetch<Product[]>(FEATURED_PRODUCTS_QUERY),
    ]);
    return { categories, featuredProducts };
  } catch (err) {
    // Sanity belum terhubung (project ID masih placeholder) — tampilkan state kosong
    // alih-alih meng-crash halaman, supaya project tetap bisa di-build & di-preview.
    return { categories: [] as Category[], featuredProducts: [] as Product[] };
  }
}

export default async function Home() {
  const { categories, featuredProducts } = await getData();

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-onyx/95 backdrop-blur border-b border-champagne/20">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-champagne flex items-center justify-center text-champagne font-serif text-sm">
              K
            </div>
            <span className="font-serif text-xl text-ivory tracking-wide">
              Kalyana Tenda
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.14em] text-ivory/70">
            {categories.slice(0, 4).map((c) => (
              <Link key={c._id} href={`/kategori/${c.slug}`} className="hover:text-champagne">
                {c.title}
              </Link>
            ))}
          </div>
          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            className="border border-champagne text-champagne text-xs uppercase tracking-[0.12em] px-6 py-2.5 hover:bg-champagne hover:text-onyx transition"
          >
            Konsultasi
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-onyx text-ivory text-center px-10 py-32">
        <span className="text-[11px] uppercase tracking-[0.28em] text-champagne">
          Produsen tenda terlengkap
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-6 max-w-2xl mx-auto leading-tight">
          Menaungi setiap momen dengan{" "}
          <em className="text-champagne-light not-italic italic">
            kemewahan yang tenang
          </em>
        </h1>
        <p className="text-ivory/60 max-w-md mx-auto mb-10 font-light">
          Dari resepsi pernikahan intim hingga panggung acara berskala besar.
        </p>
        <Link
          href="/kategori"
          className="inline-block bg-champagne text-onyx text-xs uppercase tracking-[0.14em] px-8 py-4 hover:bg-champagne-light transition"
        >
          Lihat semua kategori
        </Link>
      </section>

      {/* PRODUK UNGGULAN */}
      <section className="max-w-6xl mx-auto px-10 py-24">
        <div className="text-center max-w-lg mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.28em] text-green">
            Produk unggulan
          </span>
          <h2 className="font-serif text-3xl mt-4">Pilihan paling banyak dicari</h2>
        </div>

        {featuredProducts.length === 0 ? (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16">
            Belum ada produk. Tambahkan produk lewat dashboard di{" "}
            <code className="text-green">/studio</code> setelah Sanity terhubung.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <Link
                key={p._id}
                href={`/produk/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] bg-page-2 overflow-hidden mb-4">
                  {p.images?.[0] && (
                    <img
                      src={urlForImage(p.images[0]).width(500).height(625).url()}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  )}
                </div>
                <span className="text-[11px] uppercase tracking-[0.1em] text-ink-soft">
                  {p.category?.title}
                </span>
                <h3 className="font-serif text-xl mt-1">{p.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* KATEGORI */}
      <section className="bg-page-2 px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.28em] text-green">
              Koleksi
            </span>
            <h2 className="font-serif text-3xl mt-4">Jelajahi berdasarkan kategori</h2>
          </div>

          {categories.length === 0 ? (
            <div className="text-center text-ink-soft text-sm border border-dashed border-page py-16">
              Belum ada kategori. Tambahkan lewat dashboard di{" "}
              <code className="text-green">/studio</code>.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((c) => (
                <Link
                  key={c._id}
                  href={`/kategori/${c.slug}`}
                  className="bg-page text-center py-8 px-4 hover:bg-onyx hover:text-ivory transition"
                >
                  <span className="font-serif text-lg">{c.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="bg-onyx text-ivory/50 text-xs px-10 py-10 flex flex-wrap justify-between gap-3">
        <span>© 2026 Kalyana Tenda</span>
        <span>Bogor, Jawa Barat · Melayani Jabodetabek</span>
      </footer>
    </>
  );
}
