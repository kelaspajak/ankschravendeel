import { reference, z } from "astro:content"

import type {
  PopulatedValue,
  TransformedReferences,
} from "@/lib/transform-references"

export const articleSchema = z
  .object({
    title: z.string(),
    article: reference("articles"),
    articles: reference("articles").array(),
    poep: reference("articles"),
    blocks: z
      .object({
        title: z.string(),
        article: reference("articles"),
      })
      .partial()
      .array(),
    nested: z.object({
      deep: z.object({
        article: reference("articles"),
      }),
    }),
  })
  .partial()
  .strict()

export type ArticleSchema = z.infer<typeof articleSchema>
export type ArticleProps = TransformedReferences<ArticleSchema>
