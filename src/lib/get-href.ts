import { slugs } from "@/data/config.json"
import type { CollectionKey } from "astro:content"

export function getHref({
  collection,
  id,
}: {
  collection: CollectionKey
  id: string
}) {
  // Home page
  if (collection === "pages" && id === "index") return "/"
  // Other root level pages
  else if (collection === "pages") return `/${id}/`
  // Pages for which a  collection slug is defined
  else if (collection in slugs)
    return `/${slugs[collection as keyof typeof slugs]}/${id}/`
  // Else return undefined, this is not a page
  else return undefined
}
