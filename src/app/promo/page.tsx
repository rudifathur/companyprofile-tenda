import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { ACTIVE_PROMOS_QUERY } from "@/sanity/lib/queries";
import type { Image as SanityImage } from "sanity";

type Promo = { _id: string; title: string; image?: SanityImage; description?: string; validUntil?: string };

export const revalidate = 60;

export default async function PromoPage() {
  let promos: Promo[] = [];
  try {
    promos = await client.fetch<Promo[]>(ACTIVE_PROMOS_QUERY);
  } catch {
    promos = [];
  }

  return (
    <>
      <SiteHeader />
      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">Penawaran</span>
          <h1 className="font-serif text-3xl mt-2">Promo Saat Ini</h1>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-6 py-12">
        {promos.length === 0 ? (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16">
            Belum ada promo aktif. Tambahkan lewat dashboard di <code className="text-green">/studio</code> pada menu &quot;Promo&quot;.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((p) => (
              <div key={p._id} className="border border-page-2">
                <div className="aspect-video bg-page-2 overflow-hidden">
                  {p.image && (
                    <img src={urlForImage(p.image).width(500).height(280).url()} alt={p.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl mb-2">{p.title}</h3>
                  {p.description && <p className="text-sm text-ink-soft mb-3">{p.description}</p>}
                  {p.validUntil && (
                    <p className="text-xs text-champagne-light bg-onyx inline-block px-2.5 py-1">
                      Berlaku sampai {new Date(p.validUntil).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  )}
                </div>
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
