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
      description: "Disarankan gambar persegi (contoh: 512x512px)",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Nomor WhatsApp",
      type: "string",
      description: "Format internasional tanpa tanda + atau spasi, contoh: 6281234567890",
      validation: (r) => r.regex(/^62\d{8,13}$/, { name: "format nomor", invert: false }).warning("Sebaiknya diawali 62, tanpa spasi/simbol"),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Alamat",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "instagramUrl",
      title: "Link Instagram",
      type: "url",
      description: "Contoh: https://instagram.com/tendatrikora",
    }),
    defineField({
      name: "tiktokUrl",
      title: "Link TikTok",
      type: "url",
      description: "Contoh: https://tiktok.com/@tendatrikora",
    }),
    defineField({
      name: "facebookUrl",
      title: "Link Facebook",
      type: "url",
      description: "Contoh: https://facebook.com/tendatrikora",
    }),
  ],
  preview: {
    select: { title: "siteName", media: "logo" },
  },
});
