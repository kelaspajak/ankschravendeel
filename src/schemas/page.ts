import { blockSchema } from "@/schemas/block"
import { getEntry, reference, z } from "astro:content"

type ItemProps = {}

async function transformReference(value: any) {
  const entry = (await getEntry(value)) as any
  if (!entry) return
  const data = entry?.data as any
  return data
}

export const pageSchema = z
  .object({
    title: z.string(),
    article: reference("articles").transform(transformReference),
    articles: reference("articles").array(),
    service: reference("services").transform(transformReference),
    services: reference("services").array(),
    review: reference("reviews").transform(transformReference),
    reviews: reference("reviews").array(),
    blocks: blockSchema.array(),
  })
  .partial()
  .strict()

export type PageSchema = z.infer<typeof pageSchema>
