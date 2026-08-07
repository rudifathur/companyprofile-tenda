import { defineField, defineType } from "sanity";

export const banner = defineType({
  name: "banner",
  title: "Banner Promosi",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Gambar Banner",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      description: "Ukuran yang disarankan: lebar 1600px, tinggi 560px (rasio sekitar 3:1)",
    }),
    defineField({
      name: "title",
      title: "Judul (opsional)",
      type: "string",
      description: "Muncul sebagai teks di atas gambar, boleh dikosongkan",
    }),
    defineField({
      name: "linkUrl",
      title: "Link Tujuan (opsional)",
      type: "string",
      description:
        'Kemana banner ini mengarah kalau diklik. Bisa link kategori (contoh: /kategori/tenda-pernikahan), halaman lain, atau link luar (https://...). Kosongkan jika tidak perlu bisa diklik.',
    }),
    defineField({
      name: "order",
      title: "Urutan Tampil",
      type: "number",
      description: "Angka lebih kecil tampil lebih dulu",
    }),
    defineField({
      name: "isActive",
      title: "Tampilkan di Website?",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
    prepare({ title, media }) {
      return { title: title || "(Tanpa judul)", media };
    },
  },
});
