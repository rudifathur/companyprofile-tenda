import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";
import type { Image as SanityImage } from "sanity";

type PortfolioItem = { _id: string; caption?: string; image: SanityImage };

export const revalidate = 60;

export default async function GaleriPage() {
  let items: PortfolioItem[] = [];
  try {
    items = await client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY);
  } catch {
    items = [];
  }

  return (
    <>
      <SiteHeader />
      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">Portofolio</span>
          <h1 className="font-serif text-3xl mt-2">Galeri Acara Kami</h1>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16">
            Belum ada foto galeri. Tambahkan lewat dashboard di <code className="text-green">/studio</code> pada menu &quot;Galeri Portofolio&quot;.
          </div>
        ) : (
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {items.map((item) => (
              <div key={item._id} className="break-inside-avoid">
                <img
                  src={urlForImage(item.image).width(600).url()}
                  alt={item.caption || "Galeri"}
                  className="w-full object-cover"
                />
                {item.caption && <p className="text-xs text-ink-soft mt-1.5">{item.caption}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
