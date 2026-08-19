import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { getSiteSettings, waNumber } from "@/sanity/lib/getSiteSettings";

export default async function KontakPage() {
  const settings = await getSiteSettings();
  const wa = waNumber(settings);
  const email = settings.email || "tendatrikora.cs@gmail.com";
  const address = settings.address || "Jl. Sasak Dempul KP. Burangkeng RT.001 RW.006 Burangkeng Kec. Setu";

  return (
    <>
      <SiteHeader />
      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">Hubungi Kami</span>
          <h1 className="font-serif text-3xl mt-2">Kontak</h1>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-xl mb-4">Informasi Kontak</h2>
          <div className="space-y-4 text-sm text-ink-soft">
            <div>
              <span className="block text-[#211E1A] font-medium mb-0.5">Alamat</span>
              <span className="whitespace-pre-line">{address}</span>
            </div>
            <div>
              <span className="block text-[#211E1A] font-medium mb-0.5">WhatsApp</span>
              {wa}
            </div>
            <div>
              <span className="block text-[#211E1A] font-medium mb-0.5">Email</span>
              {email}
            </div>
            <div>
              <span className="block text-[#211E1A] font-medium mb-0.5">Jam Operasional</span>
              Setiap hari, 08.00 - 20.00 WIB
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start bg-page-2 p-8">
          <p className="text-sm text-ink-soft mb-5">
            Cara tercepat menghubungi kami adalah lewat WhatsApp — tim akan merespons dalam 1x24 jam.
          </p>
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white text-sm font-medium px-8 py-3.5 hover:opacity-90 transition"
          >
            Chat via WhatsApp
          </a>
        </div>
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
