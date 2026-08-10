import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

const STEPS = [
  { n: "01", title: "Konsultasi", desc: "Hubungi kami via WhatsApp, ceritakan jenis acara, jumlah tamu, lokasi, dan tanggal acara Anda." },
  { n: "02", title: "Rancangan & Penawaran", desc: "Tim kami menyiapkan denah tenda, opsi dekorasi, dan rincian biaya sesuai kebutuhan dan anggaran." },
  { n: "03", title: "Pemasangan", desc: "Instalasi dilakukan 1-2 hari sebelum acara, termasuk pengecekan struktur dan kelistrikan." },
  { n: "04", title: "Hari-H & Pembongkaran", desc: "Tim kami siaga selama acara berlangsung dan membongkar tenda setelah acara selesai." },
];

export default function CaraPemesananPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">Panduan</span>
          <h1 className="font-serif text-3xl mt-2">Cara Pemesanan</h1>
        </div>
      </section>
      <main className="max-w-3xl mx-auto px-6 py-14">
        {STEPS.map((s) => (
          <div key={s.n} className="flex gap-6 py-6 border-b border-page-2 last:border-0">
            <span className="font-serif text-2xl text-champagne italic w-10 shrink-0">{s.n}</span>
            <div>
              <h3 className="font-serif text-xl mb-1.5">{s.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            className="inline-block bg-[#25D366] text-white text-sm font-medium px-8 py-3.5 hover:opacity-90 transition"
          >
            Mulai Konsultasi via WhatsApp
          </a>
        </div>
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
