import { blockSchema } from "@/schemas/block"
import { imageSchema } from "@/schemas/image"
import { seoSchema } from "@/schemas/seo"
import { reference } from "astro:content"
import { z } from "zod"

export const pageSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    blocks: blockSchema
      .extend({
        // Choose which block to render
        block: z.string(),
        // Reference to other collections. Get transformed to items
        pages: reference("pages").array().optional(),
        articles: reference("articles").array().optional(),
      })
      .array(),
    seo: seoSchema,
  })
  .partial()
  .strict()

export type PageSchema = z.infer<typeof pageSchema>
