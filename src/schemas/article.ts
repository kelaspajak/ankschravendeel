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
    articles: reference("articles").array(),
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

// // Find and replace all references in any object
// export async function populateObject(value: unknown): Promise<unknown> {
//   // base case: primitive value
//   if (value === null || typeof value !== "object") {
//     return value
//   }

//   // reference object: replace with entry data
//   if (
//     typeof value === "object" &&
//     value !== null &&
//     Object.prototype.hasOwnProperty.call(value, "collection") &&
//     Object.prototype.hasOwnProperty.call(value, "id") &&
//     Object.keys(value).length === 2
//   ) {
//     const entry = await getEntry(value as ReferenceDataEntry<CollectionKey>)
//     if (!entry) return value
//     return entry.data
//   }

//   // array: recursively process each item
//   if (Array.isArray(value)) {
//     return Promise.all(value.map((item) => populateObject(item)))
//   }

//   // object: recursively process each property
//   const result: Record<string, unknown> = {}
//   const entries = Object.entries(value as Record<string, unknown>)
//   for (const [key, val] of entries) {
//     result[key] = await populateObject(val)
//   }
//   return result
// }

// type guard for reference object
function isReference<C extends CollectionKey>(
  value: unknown
): value is ReferenceDataEntry<C> {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.prototype.hasOwnProperty.call(value, "collection") &&
    Object.prototype.hasOwnProperty.call(value, "id") &&
    Object.keys(value).length === 2
  )
}

// type guard for array
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

// type guard for object
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

// Main utility type that handles all cases
type PopulatedValue<T> =
  T extends ReferenceDataEntry<infer C>
    ? CollectionEntry<C>["data"]
    : T extends Array<infer U>
      ? Array<PopulatedValue<U>>
      : T extends Record<string, unknown>
        ? { [K in keyof T]: PopulatedValue<T[K]> }
        : T

// Exported as a named function so it can be imported elsewhere
export async function populateObject<T>(value: T): Promise<PopulatedValue<T>> {
  // base case: primitive value
  if (!isObject(value)) {
    return value as PopulatedValue<T>
  }

  // reference object: replace with entry data
  if (isReference(value)) {
    const entry = await getEntry(value)
    if (!entry) return value as PopulatedValue<T>
    return entry.data as PopulatedValue<T>
  }

  // array: recursively process each item
  if (isArray(value)) {
    const populatedArray = await Promise.all(
      value.map((item) => populateObject(item))
    )
    return populatedArray as PopulatedValue<T>
  }

  // object: recursively process each property
  const result = {} as Record<string, unknown>
  const entries = Object.entries(value as Record<string, unknown>)
  for (const [key, val] of entries) {
    result[key] = await populateObject(val)
  }

  return result as PopulatedValue<T>
}
