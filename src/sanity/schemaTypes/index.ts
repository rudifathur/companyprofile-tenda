import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { product } from "./product";
import { banner } from "./banner";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, category, product],
};
