import { articleSchema } from "@/schemas/article"
import { blogSchema } from "@/schemas/blog"
import { eventSchema } from "@/schemas/event"
import { layoutSchema } from "@/schemas/layout"
import { pageSchema } from "@/schemas/page"
import { policySchema } from "@/schemas/policy"
import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

export const collections = {
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: `./src/content/pages`,
    }),
    schema: pageSchema,
  }),
  articles: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: `./src/content/articles`,
    }),
    schema: articleSchema,
  }),
  blogs: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: `./src/content/blogs`,
    }),
    schema: blogSchema,
  }),
  events: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: `./src/content/events`,
    }),
    schema: eventSchema,
  }),
  policies: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: `./src/content/policies`,
    }),
    schema: policySchema,
  }),
  layouts: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yml,yaml,json}",
      base: `./src/content/layouts`,
    }),
    schema: layoutSchema,
  }),
}
