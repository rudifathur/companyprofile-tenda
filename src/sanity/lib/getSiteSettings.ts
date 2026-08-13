import { client } from "./client";
import { SITE_SETTINGS_QUERY } from "./queries";
import type { Image as SanityImage } from "sanity";

export type SiteSettings = {
  siteName?: string;
  logo?: SanityImage;
  favicon?: SanityImage;
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
    return settings || {};
  } catch {
    return {};
  }
}
