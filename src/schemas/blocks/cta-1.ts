import { linkSchema } from "@/schemas/link"
import { z } from "astro:content"

export const cta1Schema = z
  .object({
    content: z.string(),
    buttons: linkSchema.array(),
  })
  .partial()
  .strict()

export type Cta1Props = z.infer<typeof cta1Schema>
