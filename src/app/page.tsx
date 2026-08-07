import Link from "next/link";
import { client } from "@/sanity/lib/client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import {
  FEATURED_PRODUCTS_QUERY,
  CATEGORIES_WITH_PRODUCTS_QUERY,
  LATEST_PRODUCTS_QUERY,
  BANNERS_QUERY,
} from "@/sanity/lib/queries";
import type { Image as SanityImage } from "sanity";

type Product = {
  _id: string;
  name: string;
  slug: string;
  images?: SanityImage[];
};

type CategoryWithProducts = {
  _id: string;
  title: string;
  slug: string;
  coverImage?: SanityImage;
  products: Product[];
};

type Banner = {
  _id: string;
  title?: string;
  image: SanityImage;
  linkUrl?: string;
};

export const revalidate = 60;

async function getData() {
  try {
    const [featured, categoriesWithProducts, latest, banners] = await Promise.all([
      client.fetch<Product[]>(FEATURED_PRODUCTS_QUERY),
      client.fetch<CategoryWithProducts[]>(CATEGORIES_WITH_PRODUCTS_QUERY),
      client.fetch<Product[]>(LATEST_PRODUCTS_QUERY),
      client.fetch<Banner[]>(BANNERS_QUERY),
    ]);
    return { featured, categoriesWithProducts, latest, banners };
  } catch {
    return {
      featured: [] as Product[],
      categoriesWithProducts: [] as CategoryWithProducts[],
      latest: [] as Product[],
      banners: [] as Banner[],
    };
  }
}

export default async function Home() {
  const { featured, categoriesWithProducts, latest, banners } = await getData();
  const hasAnyContent =
    featured.length > 0 || categoriesWithProducts.length > 0 || latest.length > 0;

  return (
    <>
      <SiteHeader />

      <HeroCarousel slides={banners} />

      {/* HERO — ringkas, bukan full-page seperti versi company profile */}
      <section className="bg-onyx text-ivory text-center px-6 py-16 md:py-20">
        <span className="text-[11px] uppercase tracking-[0.28em] text-champagne">
          Produsen tenda terlengkap
        </span>
        <h1 className="text-3xl md:text-4xl font-light mt-4 mb-3 max-w-2xl mx-auto leading-tight">
          Menaungi setiap momen, dari kondangan hingga panggung besar
        </h1>
        <p className="text-ivory/60 max-w-md mx-auto text-sm">
          Produksi &amp; sewa tenda untuk pernikahan, event, hingga kebutuhan
          kemanusiaan — siap kirim ke seluruh Indonesia.
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {!hasAnyContent && (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16 mb-12">
            Katalog masih kosong. Tambahkan kategori & produk lewat dashboard
            di <code className="text-green">/studio</code>.
          </div>
        )}

        {/* PRODUK UNGGULAN */}
        {featured.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl mb-5 pb-3 border-b border-page-2">
              Produk Unggulan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-8">
              {featured.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* PER KATEGORI */}
        {categoriesWithProducts
          .filter((c) => c.products?.length > 0)
          .map((cat) => (
            <section key={cat._id} className="mb-14">
              <div className="flex items-center justify-between pb-3 border-b border-page-2 mb-5">
                <h2 className="text-2xl">{cat.title}</h2>
                <Link
                  href={`/kategori/${cat.slug}`}
                  className="text-xs text-green hover:text-champagne uppercase tracking-wide whitespace-nowrap"
                >
                  Lihat semua →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
                {cat.products.map((p) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </section>
          ))}

        {/* PRODUK TERBARU */}
        {latest.length > 0 && (
          <section>
            <h2 className="text-2xl mb-5 pb-3 border-b border-page-2">
              Produk Terbaru
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-8">
              {latest.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
