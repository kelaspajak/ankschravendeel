import { getEntry, reference, z, type CollectionEntry } from "astro:content"

export const articleSchema = z
  .object({
    title: z.string(),
    article: reference("articles"),
    blocks: z
      .object({
        title: z.string(),
        article: reference("articles"),
      })
      .partial()
      .array(),
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

/**
 * Recursively searches through a value and returns the first object
 * that contains both a 'collection' key and an 'id' key.
 * Returns undefined if no such object is found.
 */
/**
 * Recursively searches through a value and returns an array of paths
 * to all objects that contain both a 'collection' key and an 'id' key.
 * Each path is an array of keys/indices leading to the reference.
 */
export function findReferenceRecursively(
  value: unknown,
  currentPath: (string | number)[] = []
): Array<{
  path: (string | number)[]
  reference: { collection: unknown; id: unknown }
}> {
  const results: Array<{
    path: (string | number)[]
    reference: { collection: unknown; id: unknown }
  }> = []

  if (value === null || typeof value !== "object") {
    return results
  }

  if (
    Object.prototype.hasOwnProperty.call(value, "collection") &&
    Object.prototype.hasOwnProperty.call(value, "id")
  ) {
    results.push({
      path: currentPath,
      reference: value as { collection: unknown; id: unknown },
    })
    // Continue searching in case there are nested references
  }

  if (Array.isArray(value)) {
    value.forEach((item, idx) => {
      results.push(...findReferenceRecursively(item, [...currentPath, idx]))
    })
  } else {
    for (const key of Object.keys(value)) {
      results.push(
        // @ts-expect-error: Index signature for object
        ...findReferenceRecursively(value[key], [...currentPath, key])
      )
    }
  }

  return results
}
