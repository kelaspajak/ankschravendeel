import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { z } from "astro:content"

export const media1Schema = z
  .object({
    content: z.string(),
    buttons: linkSchema.array(),
    image: imageSchema,
  })
  .partial()
  .strict()

export type Media1Props = z.infer<typeof media1Schema>
