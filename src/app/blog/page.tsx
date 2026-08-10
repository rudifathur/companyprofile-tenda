import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import { BLOG_LIST_QUERY } from "@/sanity/lib/queries";
import type { Image as SanityImage } from "sanity";

type Post = { _id: string; title: string; slug: string; coverImage?: SanityImage; excerpt?: string; publishedAt?: string };

export const revalidate = 60;

export default async function BlogListPage() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch<Post[]>(BLOG_LIST_QUERY);
  } catch {
    posts = [];
  }

  return (
    <>
      <SiteHeader />
      <section className="bg-page-2 px-6 py-10 border-b border-page-2">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-green">Artikel</span>
          <h1 className="font-serif text-3xl mt-2">Blog</h1>
        </div>
      </section>
      <main className="max-w-5xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <div className="text-center text-ink-soft text-sm border border-dashed border-page-2 rounded py-16">
            Belum ada artikel. Tambahkan lewat dashboard di <code className="text-green">/studio</code> pada menu &quot;Artikel Blog&quot;.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-video bg-page-2 overflow-hidden mb-3">
                  {post.coverImage && (
                    <img src={urlForImage(post.coverImage).width(600).height(340).url()} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  )}
                </div>
                {post.publishedAt && (
                  <span className="text-xs text-ink-soft">
                    {new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                )}
                <h2 className="font-serif text-xl mt-1 group-hover:text-green">{post.title}</h2>
                {post.excerpt && <p className="text-sm text-ink-soft mt-1.5">{post.excerpt}</p>}
              </Link>
            ))}
          </div>
        )}
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <SiteFooter />
    </>
  );
}
