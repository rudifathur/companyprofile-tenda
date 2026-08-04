import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produk",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Produk",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Foto Produk",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.min(1).error("Minimal 1 foto produk"),
    }),
    defineField({
      name: "shortDescription",
      title: "Deskripsi Singkat",
      description: "Muncul di kartu produk pada halaman kategori",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description",
      title: "Deskripsi Lengkap",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "sizes",
      title: "Pilihan Ukuran / Varian",
      type: "array",
      of: [{ type: "string" }],
      description: 'Contoh: "4x4 m", "6x6 m", "8x12 m"',
    }),
    defineField({
      name: "isFeatured",
      title: "Tampilkan sebagai Produk Unggulan?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "whatsappMessage",
      title: "Pesan WhatsApp Otomatis",
      type: "string",
      description:
        "Teks yang otomatis terisi saat tombol WhatsApp di produk ini diklik",
    }),
  ],
  preview: {
    select: { title: "name", media: "images.0", subtitle: "category.title" },
  },
});
