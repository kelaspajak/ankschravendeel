import { dataSchema } from "@/schemas/data"
import { layoutSchema } from "@/schemas/layout"
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
  posts: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/posts",
    }),
    schema: pageSchema,
  }),
  articles: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/articles",
    }),
    schema: pageSchema,
  }),
  events: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/events",
    }),
    schema: pageSchema,
  }),
  services: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/services",
    }),
    schema: pageSchema,
  }),
  policies: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/policies",
    }),
    schema: pageSchema,
  }),
  persons: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/persons",
    }),
    schema: pageSchema,
  }),
  reviews: defineCollection({
    loader: file("src/content/reviews.yml"),
    schema: dataSchema,
  }),
  layouts: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yml,yaml,json}",
      base: `./src/content/layouts`,
    }),
    schema: layoutSchema,
  }),
}
