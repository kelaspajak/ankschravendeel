import { imageSchema } from "@/schemas/image"
import { reference, z } from "astro:content"

export const dataSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    rating: z.number().min(1).max(5),
    tagline: z.string(),
    avatar: imageSchema,
    image: imageSchema,
  })
  .partial()
  .strict()

export type DataSchema = z.infer<typeof dataSchema>

export type DataProps = DataSchema
