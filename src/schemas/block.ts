import type React from "react"
import { slugs } from "@/data/config.json"
import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { menuSchema } from "@/schemas/menu"
import { getCollection, getEntries, reference, z } from "astro:content"

// Schema for Astro content collections
export const blockSchema = z
  .object({
    block: z.string(),
    content: z.string(),
    title: z.string(),
    description: z.string(),
    buttons: linkSchema.array(),
    image: imageSchema,
    list: z.string().array(),
    logo: imageSchema,
    menus: menuSchema.array(),
    text: z.string(),
    socials: z.string().array(),
    channels: z.any(),
    hours: z.any().array(),
    company: z.any(),
    policies: z.any(),
    form: z.any(),
    items: z
      .object({
        id: z.string(),
        href: z.string(),
        title: z.string(),
        description: z.string(),
        image: imageSchema,
        avatar: imageSchema,
        rating: z.number(),
        tagline: z.string(),
      })
      .partial()
      .array(),
    posts: reference("posts").array(),
    services: reference("services").array(),
    events: reference("events").array(),
    reviews: reference("reviews").array(),
  })
  .partial()
  .strict()

export type BlockSchema = z.infer<typeof blockSchema>

// Type for block component props
export type BlockProps = Omit<
  BlockSchema,
  "block" | "content" | "posts" | "services" | "events" | "reviews"
> & {
  posts?: BlockSchema["items"] | undefined
  services?: BlockSchema["items"] | undefined
  events?: BlockSchema["items"] | undefined
  reviews?: BlockSchema["items"] | undefined
  children?: React.ReactNode
}

// Transform block with references to the actual entries
// If posts, services, events or reviews is an array with references, use getEntries
// Else, use getCollection
// Then, map the entries to the correct structure
export async function transformBlock({
  posts,
  services,
  events,
  reviews,
  ...block
}: BlockSchema): Promise<BlockProps> {
  const transformedPosts = (
    posts && posts.length > 0
      ? await getEntries(posts)
      : await getCollection("posts")
  ).map((post) => {
    return {
      ...post.data,
      href: `/${slugs.posts}/${post.id}/`,
    }
  })

  const transformedServices = (
    services && services.length > 0
      ? await getEntries(services)
      : await getCollection("services")
  ).map((service) => {
    return {
      ...service.data,
      href: `/${slugs.services}/${service.id}/`,
    }
  })

  const transformedEvents = (
    events && events.length > 0
      ? await getEntries(events)
      : await getCollection("events")
  ).map((event) => {
    return {
      ...event.data,
      href: `/${slugs.events}/${event.id}/`,
    }
  })

  const transformedReviews = (
    reviews && reviews.length > 0
      ? await getEntries(reviews)
      : await getCollection("reviews")
  ).map((review) => {
    return {
      ...review.data,
      id: review.id,
    }
  })

  return {
    ...block,
    posts: transformedPosts,
    services: transformedServices,
    events: transformedEvents,
    reviews: transformedReviews,
  }
}
