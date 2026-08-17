import { client } from "./client";
import { SITE_SETTINGS_QUERY } from "./queries";
import type { Image as SanityImage } from "sanity";

export type SiteSettings = {
  siteName?: string;
  logo?: SanityImage;
  favicon?: SanityImage;
  whatsappNumber?: string;
  email?: string;
  address?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  facebookUrl?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
};

const DEFAULT_WA = "6280000000000";

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
    return settings || {};
  } catch {
    return {};
  }
}

// Helper supaya tiap tempat yang butuh nomor WA selalu ada fallback konsisten
export function waNumber(settings: SiteSettings) {
  return settings.whatsappNumber || DEFAULT_WA;
}

export function waLink(settings: SiteSettings, message?: string) {
  const num = waNumber(settings);
  return message ? `https://wa.me/${num}?text=${encodeURIComponent(message)}` : `https://wa.me/${num}`;
}
