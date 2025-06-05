import type React from "react"
import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { menuSchema } from "@/schemas/menu"
import { seoSchema } from "@/schemas/seo"
import { reference, z } from "astro:content"

export const itemSchema = z
  .object({
    id: z.string(),
    href: z.string(),
    content: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.string().array(),
    socials: z.string().array(),
    buttons: linkSchema.array(),
    rating: z.number(),
    when: z.string(),
    where: z.string(),
    published: z.date(),
    person: z.object({
      title: z.string(),
      tagline: z.string(),
      avatar: z.string(),
    }),
    image: imageSchema,
  })
  .partial()

export type ItemSchema = z.infer<typeof itemSchema>

export type ItemProps = Omit<ItemSchema, "content"> & {
  children?: React.ReactNode
}

export const blockSchema = itemSchema
  .extend({
    block: z.string(),
    logo: imageSchema,
    menus: menuSchema.array(),
    form: z.any(),
    // Items
    items: itemSchema.array(),
    // References
    posts: reference("posts").array(),
    articles: reference("articles").array(),
    services: reference("services").array(),
    events: reference("events").array(),
    reviews: reference("reviews").array(),
    person: reference("persons"),
  })
  .partial()

export type BlockSchema = z.infer<typeof blockSchema>

export type BlockProps = Omit<
  BlockSchema,
  | "block"
  | "content"
  | "posts"
  | "articles"
  | "services"
  | "events"
  | "reviews"
  | "person"
> & {
  children?: React.ReactNode
  posts?: ItemProps[]
  articles?: ItemProps[]
  services?: ItemProps[]
  events?: ItemProps[]
  reviews?: ItemProps[]
  person?: ItemProps
}

export const pageSchema = blockSchema
  .extend({
    blocks: blockSchema.array(),
    seo: seoSchema,
  })
  .partial()
  .strict()
