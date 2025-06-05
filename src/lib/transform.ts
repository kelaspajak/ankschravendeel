import type { ItemSchema } from "@/schemas/block"
import type { CollectionEntry, CollectionKey } from "astro:content"

import { getHref } from "@/lib/get-href"

// Transform a single entry
export function transformEntry<C extends CollectionKey>(
  // Without this explicit way of typing, the entry inferred correctly
  entry: {
    collection: C
  } & Omit<CollectionEntry<C>, "collection">
) {
  return {
    id: entry.id,
    href: getHref(entry),
    ...entry.data,
  } satisfies ItemSchema
}

// Transform multiple entries
export function transformEntries<C extends CollectionKey>(
  entries: ({
    collection: C
  } & Omit<CollectionEntry<C>, "collection">)[]
) {
  return entries.map((entry) => transformEntry(entry))
}
