import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategori Tenda",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Kategori",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Singkat",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Gambar Sampul Kategori",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Urutan Tampil",
      type: "number",
      description: "Angka lebih kecil tampil lebih dulu di menu",
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
});
