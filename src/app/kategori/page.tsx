import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import type { Image as SanityImage } from "sanity";

type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: SanityImage;
};

export const revalidate = 60;

export default async function AllCategoriesPage() {
  let categories: Category[] = [];
  try {
    categories = await client.fetch<Category[]>(ALL_CATEGORIES_QUERY);
  } catch {
    categories = [];
  }

  return (
    <>
      <SiteHeader />

      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">
            Katalog
          </span>
          <h1 className="font-serif text-3xl mt-2">Semua Kategori Tenda</h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {categories.length === 0 ? (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16">
            Belum ada kategori. Tambahkan lewat dashboard di{" "}
            <code className="text-green">/studio</code>.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Link
                key={c._id}
                href={`/kategori/${c.slug}`}
                className="group block border border-page-2 hover:border-champagne transition"
              >
                <div className="aspect-[4/3] bg-page-2 overflow-hidden">
                  {c.coverImage ? (
                    <img
                      src={urlForImage(c.coverImage).width(400).height(300).url()}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink-soft text-xs">
                      {c.title}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg group-hover:text-green">
                    {c.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <WhatsAppFloat />
      <SiteFooter />
    </>
  );
}
