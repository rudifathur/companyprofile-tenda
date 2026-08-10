import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { BLOG_POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { Image as SanityImage } from "sanity";

type Post = {
  _id: string;
  title: string;
  coverImage?: SanityImage;
  excerpt?: string;
  body?: PortableTextBlock[];
  publishedAt?: string;
};

export const revalidate = 60;

async function getPost(slug: string) {
  try {
    return await client.fetch<Post | null>(BLOG_POST_QUERY, { slug });
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-14">
        {post.publishedAt && (
          <span className="text-xs text-ink-soft">
            {new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        )}
        <h1 className="font-serif text-3xl md:text-4xl mt-2 mb-6">{post.title}</h1>
        {post.coverImage && (
          <img src={urlForImage(post.coverImage).width(900).url()} alt={post.title} className="w-full mb-8" />
        )}
        {post.body && (
          <div className="prose prose-sm max-w-none text-[#211E1A]">
            <PortableText value={post.body} />
          </div>
        )}
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
