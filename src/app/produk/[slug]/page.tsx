import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { PRODUCT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { Image as SanityImage } from "sanity";

type ProductDetail = {
  _id: string;
  name: string;
  shortDescription?: string;
  description?: PortableTextBlock[];
  images?: SanityImage[];
  sizes?: string[];
  whatsappMessage?: string;
  category?: { title: string; slug: string };
};

export const revalidate = 60;

async function getProduct(slug: string) {
  try {
    return await client.fetch<ProductDetail | null>(PRODUCT_BY_SLUG_QUERY, { slug });
  } catch {
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const waText = encodeURIComponent(
    product.whatsappMessage ||
      `Halo, saya tertarik dengan produk "${product.name}". Boleh minta info lebih lanjut?`
  );

  return (
    <>
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <nav className="text-xs text-ink-soft mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-green">Beranda</Link>
          <span>/</span>
          {product.category && (
            <>
              <Link href={`/kategori/${product.category.slug}`} className="hover:text-green">
                {product.category.title}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-[#211E1A]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* GALERI */}
          <div>
            <div className="aspect-square bg-page-2 overflow-hidden mb-3">
              {product.images?.[0] ? (
                <img
                  src={urlForImage(product.images[0]).width(700).height(700).url()}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-ink-soft text-sm">
                  Belum ada foto
                </div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1, 5).map((img, i) => (
                  <div key={i} className="aspect-square bg-page-2 overflow-hidden">
                    <img
                      src={urlForImage(img).width(200).height(200).url()}
                      alt={`${product.name} ${i + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* INFO */}
          <div>
            {product.category && (
              <span className="text-[11px] uppercase tracking-[0.2em] text-green">
                {product.category.title}
              </span>
            )}
            <h1 className="font-serif text-3xl mt-2 mb-4">{product.name}</h1>

            {product.shortDescription && (
              <p className="text-ink-soft text-sm mb-6">{product.shortDescription}</p>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wide text-[#211E1A] font-medium">
                  Pilihan ukuran
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.sizes.map((s, i) => (
                    <span
                      key={i}
                      className="border border-page-2 text-xs px-3 py-1.5 text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={`https://wa.me/6280000000000?text=${waText}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-6 py-3.5 hover:opacity-90 transition"
            >
              Tanya via WhatsApp
            </a>

            {product.description && (
              <div className="mt-10 pt-8 border-t border-page-2 prose prose-sm max-w-none text-[#211E1A]">
                <PortableText value={product.description} />
              </div>
            )}
          </div>
        </div>
      </main>

      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
