import { blockSchema } from "@/schemas/block"
import { imageSchema } from "@/schemas/image"
import { z } from "zod"

export const layoutSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    company: z.string(),
    lang: z.string(),
    banner: blockSchema.extend({ block: z.string() }),
    header: blockSchema.extend({ block: z.string() }),
    footer: blockSchema.extend({ block: z.string() }),
    head: z.string(),
    body: z.string(),
    css: z.string(),
  })
  .partial()
  .strict()

export type LayoutSchema = z.infer<typeof layoutSchema>
