import { imageSchema } from "@/schemas/image"
import { seoSchema } from "@/schemas/seo"
import { reference } from "astro:content"
import { z } from "zod"

export const articleSchema = z
  .object({
    blog: reference("blogs"),
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    seo: seoSchema,
  })
  .partial()
  .strict()

export type ArticleSchema = z.infer<typeof articleSchema>
