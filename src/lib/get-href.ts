import { type CollectionEntry } from "astro:content"

export function getHref({
  collection,
  id,
  data,
}: CollectionEntry<"pages" | "articles" | "blogs" | "events" | "policies">) {
  // Pages
  if (collection === "pages" && id === "index") return `/`
  else if (collection === "pages") return `/${id}/`
  // Articles
  else if (collection === "articles" && data.blog?.id === "index")
    return `/blogs/${id}/`
  else if (collection === "articles") return `/blogs/${data.blog?.id}/${id}/`
  // Blogs
  else if (collection === "blogs" && id === "index") return `/blogs/`
  else if (collection === "blogs") return `/blogs/${id}/`
  // Events
  else if (collection === "events" && id === "index") return `/events/`
  else if (collection === "events") return `/events/${id}/`
  // Policies
  else if (collection === "policies") return `/policies/${id}/`
  // Fallback
  else return `/${collection}/${id}/`
}
