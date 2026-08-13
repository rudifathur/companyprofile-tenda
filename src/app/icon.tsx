import { getSiteSettings } from "@/sanity/lib/getSiteSettings";
import { urlForImage } from "@/sanity/lib/image";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default async function Icon() {
  const settings = await getSiteSettings();

  if (settings.favicon) {
    const imageUrl = urlForImage(settings.favicon).width(64).height(64).url();
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    return new Response(buffer, {
      headers: { "Content-Type": "image/png" },
    });
  }

  // Fallback sederhana kalau favicon belum diisi di Sanity: lingkaran onyx polos
  const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="32" fill="#121110"/></svg>`;
  return new Response(fallbackSvg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
