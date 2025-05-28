import { z } from "zod"

export const eventSchema = z
  .object({
    title: z.string(),
    description: z.string().optional(),
    when: z.string().optional(),
    where: z.string().optional(),
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

export type EventSchema = z.infer<typeof eventSchema>
