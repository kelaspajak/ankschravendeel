import { articleSchema } from "@/schemas/article"
import { blogSchema } from "@/schemas/blog"
import { pageSchema } from "@/schemas/page"
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
      base: `./src/content/posts`,
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
}
