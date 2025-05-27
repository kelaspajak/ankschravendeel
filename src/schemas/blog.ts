import { z } from "zod"

export const blogSchema = z
  .object({
    title: z.string(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  })
  .strict()

export type BlogSchema = z.infer<typeof blogSchema>
