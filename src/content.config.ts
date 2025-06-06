import { articleSchema } from "@/schemas/article"
import { dataSchema } from "@/schemas/data"
import { pageSchema } from "@/schemas/page"
import { defineCollection } from "astro:content"
import { file, glob } from "astro/loaders"

export const collections = {
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/pages",
    }),
    schema: pageSchema,
  }),
  articles: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/articles",
    }),
    schema: articleSchema,
  }),
  services: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/services",
    }),
    schema: pageSchema,
  }),
  reviews: defineCollection({
    loader: file("src/content/reviews.yml"),
    schema: dataSchema,
  }),
}
