import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

type Product = {
  _id: string;
  name: string;
  slug: string;
  images?: SanityImage[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produk/${product.slug}`} className="group block">
      <div className="aspect-square bg-page-2 overflow-hidden mb-2.5 border border-page-2">
        {product.images?.[0] ? (
          <img
            src={urlForImage(product.images[0]).width(400).height(400).url()}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-soft text-xs">
            Belum ada foto
          </div>
        )}
      </div>
      <h3 className="text-[13.5px] leading-snug text-[#211E1A] group-hover:text-green line-clamp-2">
        {product.name}
      </h3>
    </Link>
  );
}
