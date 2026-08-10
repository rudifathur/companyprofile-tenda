import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Artikel Blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "coverImage", title: "Gambar Sampul", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Ringkasan Singkat", type: "text", rows: 2 }),
    defineField({ name: "body", title: "Isi Artikel", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "publishedAt", title: "Tanggal Publish", type: "datetime", initialValue: () => new Date().toISOString() }),
  ],
  preview: { select: { title: "title", media: "coverImage" } },
});
