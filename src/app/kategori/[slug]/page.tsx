import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { groq } from "next-sanity";
import type { Image as SanityImage } from "sanity";

type Product = {
  _id: string;
  name: string;
  slug: string;
  images?: SanityImage[];
};

const CATEGORY_QUERY = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id, title, description
  }
`;

export const revalidate = 60;

async function getData(slug: string) {
  try {
    const [category, products] = await Promise.all([
      client.fetch<{ _id: string; title: string; description?: string } | null>(
        CATEGORY_QUERY,
        { slug }
      ),
      client.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, { categorySlug: slug }),
    ]);
    return { category, products };
  } catch {
    return { category: null, products: [] as Product[] };
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { category, products } = await getData(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">
            Kategori
          </span>
          <h1 className="font-serif text-3xl mt-2">{category.title}</h1>
          {category.description && (
            <p className="text-ink-soft text-sm mt-2 max-w-xl">
              {category.description}
            </p>
          )}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {products.length === 0 ? (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16">
            Belum ada produk di kategori ini.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </main>

      <WhatsAppFloat />
      <SiteFooter />
    </>
  );
}
