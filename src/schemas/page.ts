import { blockSchema } from "@/schemas/block"
import { imageSchema } from "@/schemas/image"
import { seoSchema } from "@/schemas/seo"
import { z } from "astro:content"

export const pageSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    when: z.string(),
    where: z.string(),
    image: imageSchema,
    blocks: blockSchema.array(),
    seo: seoSchema,
  })
  .partial()
  .strict()

export type PageSchema = z.infer<typeof pageSchema>
