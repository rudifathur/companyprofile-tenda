import { defineField, defineType } from "sanity";

export const promo = defineType({
  name: "promo",
  title: "Promo",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul Promo", type: "string", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Gambar Promo", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
    defineField({ name: "validUntil", title: "Berlaku Sampai (opsional)", type: "date" }),
    defineField({ name: "isActive", title: "Tampilkan?", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
