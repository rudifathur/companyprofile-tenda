import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Situs",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Nama Brand",
      type: "string",
      description: "Muncul di sebelah logo dan di judul tab browser",
      initialValue: "Tenda Trikora",
    }),
    defineField({
      name: "logo",
      title: "Logo (untuk header & footer)",
      type: "image",
      description: "Disarankan format PNG transparan, persegi atau landscape",
    }),
    defineField({
      name: "favicon",
      title: "Favicon (ikon kecil di tab browser)",
      type: "image",
      description: "Disarankan gambar persegi (contoh: 512x512px), akan otomatis di-crop persegi",
    }),
  ],
  preview: {
    select: { title: "siteName", media: "logo" },
  },
});
