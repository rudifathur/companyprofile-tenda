import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { getSiteSettings, waNumber } from "@/sanity/lib/getSiteSettings";
import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type AboutPage = { title?: string; body?: PortableTextBlock[] };

export const revalidate = 60;

async function getAboutPage() {
  try {
    return await client.fetch<AboutPage | null>(ABOUT_PAGE_QUERY);
  } catch {
    return null;
  }
}

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const about = await getAboutPage();
  const siteName = settings.siteName || "Tenda Trikora";
  const wa = waNumber(settings);
  const address = settings.address || "Jl. Contoh Alamat No. 99, Bogor, Jawa Barat";

  const pageTitle = about?.title || siteName;
  const hasCustomBody = about?.body && about.body.length > 0;

  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-[11px] uppercase tracking-[0.2em] text-green">
          Tentang Kami
        </span>
        <h1 className="font-serif text-3xl mt-2 mb-6">{pageTitle}</h1>

        {hasCustomBody ? (
          <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed">
            <PortableText value={about!.body!} />
          </div>
        ) : (
          <>
            <p className="text-ink-soft leading-relaxed mb-4">
              {siteName} adalah produsen dan penyedia jasa sewa tenda untuk
              berbagai kebutuhan — mulai dari pernikahan dan kondangan, event
              organizer, konser, hingga kebutuhan tenda darurat dan
              kemanusiaan.
            </p>
            <p className="text-ink-soft leading-relaxed mb-4">
              Dengan tim yang berpengalaman, kami merancang, memproduksi, dan
              memasang tenda sesuai kebutuhan setiap acara, dari skala kecil
              hingga skala besar, siap dikirim ke seluruh Indonesia.
            </p>
          </>
        )}

        <div className="mt-10 pt-8 border-t border-page-2 text-sm">
          <p className="mb-1 whitespace-pre-line">
            <span className="font-medium">Alamat:</span> {address}
          </p>
          <p>
            <span className="font-medium">WhatsApp:</span> {wa}
          </p>
        </div>
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
