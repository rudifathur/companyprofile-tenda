import { defineField, defineType } from "sanity";

export const portfolio = defineType({
  name: "portfolio",
  title: "Galeri Portofolio",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Foto", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Keterangan", type: "string", description: "Contoh: Resepsi Pernikahan, Bogor" }),
    defineField({ name: "category", title: "Kategori Terkait (opsional)", type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number" }),
  ],
  preview: { select: { title: "caption", media: "image" } },
});
