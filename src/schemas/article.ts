import {
  getEntry,
  reference,
  z,
  type CollectionEntry,
  type CollectionKey,
  type ReferenceDataEntry,
} from "astro:content"

export const articleSchema = z
  .object({
    title: z.string(),
    article: reference("articles"),
    poep: reference("articles"),
    blocks: z
      .object({
        title: z.string(),
        article: reference("articles"),
      })
      .partial()
      .array(),
    nested: z.object({
      deep: z.object({
        article: reference("articles"),
      }),
    }),
  })
  .partial()
  .strict()

export type ArticleSchema = z.infer<typeof articleSchema>

export async function populateEntryRecursively(
  article: CollectionEntry<"articles">,
  depth: number = 0
) {
  const MAX_DEPTH = 3

  // base case: check if depth has been reached
  if (depth > MAX_DEPTH) {
    console.log(`depth reached: ${depth}`)
    return article
  }

  // Perform the recursive operation
  console.log(`current depth: ${depth}`)

  const nestedArticle = await getEntry(article.data.article)

  const newArticle = {
    ...article,
    data: {
      ...article.data,
      article: nestedArticle,
    },
  }

  // Recursive call
  return populateEntryRecursively(newArticle, depth + 1)
}

// Find and replace all references in any object
export async function populateObject(value: unknown): Promise<unknown> {
  // base case: primitive value
  if (value === null || typeof value !== "object") {
    return value
  }

  // reference object: replace with entry data
  if (
    typeof value === "object" &&
    value !== null &&
    Object.prototype.hasOwnProperty.call(value, "collection") &&
    Object.prototype.hasOwnProperty.call(value, "id") &&
    Object.keys(value).length === 2
  ) {
    const entry = await getEntry(value as ReferenceDataEntry<CollectionKey>)
    if (!entry) return value
    return entry.data
  }

  // array: recursively process each item
  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => populateObject(item)))
  }

  // object: recursively process each property
  const result: Record<string, unknown> = {}
  const entries = Object.entries(value as Record<string, unknown>)
  for (const [key, val] of entries) {
    result[key] = await populateObject(val)
  }
  return result
}
