import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-[11px] uppercase tracking-[0.2em] text-green">
          Tentang Kami
        </span>
        <h1 className="font-serif text-3xl mt-2 mb-6">Tenda Trikora</h1>
        <p className="text-ink-soft leading-relaxed mb-4">
          Tenda Trikora adalah produsen dan penyedia jasa sewa tenda untuk
          berbagai kebutuhan — mulai dari pernikahan dan kondangan, event
          organizer, konser, hingga kebutuhan tenda darurat dan kemanusiaan.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          Dengan tim yang berpengalaman, kami merancang, memproduksi, dan
          memasang tenda sesuai kebutuhan setiap acara, dari skala kecil
          hingga skala besar, siap dikirim ke seluruh Indonesia.
        </p>
        <div className="mt-10 pt-8 border-t border-page-2 text-sm">
          <p className="mb-1">
            <span className="font-medium">Alamat:</span> Jl. Contoh Alamat No.
            99, Bogor, Jawa Barat
          </p>
          <p>
            <span className="font-medium">WhatsApp:</span> 0800-0000-000
          </p>
        </div>
      </main>
      <WhatsAppFloat />
      <SiteFooter />
    </>
  );
}
