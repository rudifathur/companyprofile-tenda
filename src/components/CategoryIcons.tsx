import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

type Category = { _id: string; title: string; slug: string; coverImage?: SanityImage };

export default function CategoryIcons({ categories }: { categories: Category[] }) {
  if (categories.length === 0) return null;

  return (
    <div className="bg-page border-b border-page-2 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex gap-8 px-6 py-6 min-w-max md:min-w-0 md:justify-center md:flex-wrap">
        {categories.slice(0, 10).map((c) => (
          <Link key={c._id} href={`/kategori/${c.slug}`} className="flex flex-col items-center gap-2 group w-16">
            <div className="w-14 h-14 rounded-full bg-page-2 overflow-hidden border border-page-2 group-hover:border-champagne transition flex items-center justify-center">
              {c.coverImage ? (
                <img
                  src={urlForImage(c.coverImage).width(112).height(112).url()}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-serif text-lg text-ink-soft">{c.title.charAt(0)}</span>
              )}
            </div>
            <span className="text-[11px] text-center leading-tight text-[#211E1A] group-hover:text-green">
              {c.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
