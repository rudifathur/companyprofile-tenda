const BADGES = [
  {
    title: "Kirim ke Seluruh Indonesia",
    desc: "Melayani pengiriman & pemasangan di berbagai kota",
    icon: (
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" stroke="currentColor" strokeWidth="1.4" />
    ),
  },
  {
    title: "Konsultasi Gratis",
    desc: "Tim kami bantu hitungkan kebutuhan tenda acara Anda",
    icon: (
      <path d="M4 4h16v12H8l-4 4V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
  {
    title: "Tim Siaga di Hari-H",
    desc: "Standby dari pemasangan hingga acara selesai",
    icon: (
      <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-page-2 border-b border-page-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-8">
        {BADGES.map((b) => (
          <div key={b.title} className="flex items-start gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-green shrink-0 mt-0.5">
              {b.icon}
            </svg>
            <div>
              <h3 className="text-sm font-medium text-[#211E1A]">{b.title}</h3>
              <p className="text-xs text-ink-soft mt-0.5">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
