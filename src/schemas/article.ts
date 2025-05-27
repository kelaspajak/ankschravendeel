import { reference } from "astro:content"
import { z } from "zod"

export const articleSchema = z
  .object({
    blog: reference("blogs"),
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  })
  .strict()

export type ArticleSchema = z.infer<typeof articleSchema>
