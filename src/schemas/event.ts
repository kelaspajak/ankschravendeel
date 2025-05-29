import { imageSchema } from "@/schemas/image"
import { seoSchema } from "@/schemas/seo"
import { z } from "zod"

export const eventSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    when: z.string(),
    where: z.string(),
    image: imageSchema,
    seo: seoSchema,
  })
  .partial()
  .strict()

export type EventSchema = z.infer<typeof eventSchema>
