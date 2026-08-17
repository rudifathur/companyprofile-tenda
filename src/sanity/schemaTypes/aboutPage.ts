import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "Halaman Tentang Kami",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      description: "Biasanya diisi nama brand, contoh: Tenda Trikora",
    }),
    defineField({
      name: "body",
      title: "Isi Paragraf",
      type: "array",
      of: [{ type: "block" }],
      description: "Bisa lebih dari satu paragraf, tinggal Enter untuk paragraf baru",
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Halaman Tentang Kami" };
    },
  },
});
