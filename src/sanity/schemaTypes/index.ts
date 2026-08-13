import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { product } from "./product";
import { banner } from "./banner";
import { portfolio } from "./portfolio";
import { promo } from "./promo";
import { blogPost } from "./blogPost";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, banner, category, product, portfolio, promo, blogPost],
};
