import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <a
        href="tel:+6280000000000"
        aria-label="Telepon kami"
        className="w-12 h-12 rounded-full bg-onyx border border-champagne/50 flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1.1L6.6 10.8Z"
            stroke="#C9A567"
            strokeWidth="1.4"
          />
        </svg>
      </a>
      <Link
        href="https://wa.me/6280000000000"
        target="_blank"
        aria-label="Chat via WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.6 6.32A8.86 8.86 0 0 0 12.02 3.5a8.93 8.93 0 0 0-7.73 13.37L3 21l4.25-1.25a8.9 8.9 0 0 0 4.77 1.37h.01a8.93 8.93 0 0 0 8.93-8.93 8.87 8.87 0 0 0-2.36-5.87Zm-5.58 13.73h-.01a7.4 7.4 0 0 1-3.78-1.04l-.27-.16-2.8.82.75-2.73-.18-.28a7.44 7.44 0 0 1 11.6-9.2 7.4 7.4 0 0 1 2.18 5.26 7.44 7.44 0 0 1-7.49 7.33Zm4.08-5.57c-.22-.11-1.32-.65-1.53-.73-.2-.08-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.16-.48.05-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.65-.18-.44-.36-.38-.5-.38-.13 0-.28-.02-.43-.02-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.87s.81 2.17.92 2.32c.11.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.06 1.32-.54 1.51-1.06.19-.52.19-.96.13-1.06-.06-.09-.2-.15-.42-.26Z" />
        </svg>
      </Link>
    </div>
  );
}
