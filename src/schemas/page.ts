import { blockSchema } from "@/schemas/block"
import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { seoSchema } from "@/schemas/seo"
import { reference, z } from "astro:content"

export const pageSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    when: z.string(),
    where: z.string(),
    image: imageSchema,
    avatar: z.string(),
    form: z.any(),
    socials: z.string().array(),
    buttons: linkSchema.array(),
    published: z.date(),
    blocks: blockSchema.array(),
    // person: reference("persons"),
    seo: seoSchema,
  })
  .partial()
  .strict()

export type PageSchema = z.infer<typeof pageSchema>
