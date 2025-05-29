import { blockSchema } from "@/schemas/block"
import { seoSchema } from "@/schemas/seo"
import { z } from "zod"

export const pageSchema = z
  .object({
    blocks: blockSchema
      .extend({
        block: z.string(),
      })
      .array(),
    seo: seoSchema,
  })
  .partial()
  .strict()

export type PageSchema = z.infer<typeof pageSchema>
