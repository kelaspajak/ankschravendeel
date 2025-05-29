import { seoSchema } from "@/schemas/seo"
import { z } from "zod"

export const blogSchema = z
  .object({
    title: z.string(),
    seo: seoSchema,
  })
  .partial()
  .strict()

export type BlogSchema = z.infer<typeof blogSchema>
