import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { z } from "astro:content"

export const hero4Schema = z
  .object({
    content: z.string(),
    buttons: linkSchema.array(),
    image: imageSchema,
  })
  .partial()
  .strict()

export type Hero4Props = z.infer<typeof hero4Schema>
