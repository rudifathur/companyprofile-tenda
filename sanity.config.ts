import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pengaturan Situs")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Halaman Tentang Kami")
        .id("aboutPage")
        .child(
          S.document().schemaType("aboutPage").documentId("aboutPage")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => !["siteSettings", "aboutPage"].includes(item.getId())
      ),
    ]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
