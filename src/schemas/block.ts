import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { menuSchema } from "@/schemas/menu"
import { reference } from "astro:content"
import { z } from "zod"

export const blockSchema = z
  .object({
    content: z.string(),
    heading: z.string(),
    paragraph: z.string(),
    buttons: linkSchema.array(),
    image: imageSchema,
    list: z.string().array(),
    logo: imageSchema,
    menus: menuSchema.array(),
    text: z.string(),
    socials: z.string().array(),
    pages: reference("pages").array(),
    articles: reference("articles").array(),
    events: reference("events").array(),
    items: z
      .object({
        title: z.string(),
        href: z.string(),
        description: z.string(),
        image: imageSchema,
        avatar: imageSchema,
        rating: z.number(),
        tagline: z.string(),
      })
      .partial()
      .array(),
    channels: z.any(),
    hours: z.any().array(),
    company: z.any(),
    policies: z.any(),
    form: z.any(),
  })
  .partial()
  .strict()

export type BlockSchema = z.infer<typeof blockSchema>
