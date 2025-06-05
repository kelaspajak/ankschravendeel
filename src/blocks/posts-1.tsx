import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tagline } from "@/components/ui/tagline"
import { Tile, TileContent, TileHeader } from "@/components/ui/tile"
import { Toggle } from "@/components/ui/toggle"
import { Writeup } from "@/components/ui/writeup"

export interface Posts1Props {
  children?: React.ReactNode
  posts?: {
    href?: string
    title?: string
    description?: string
    published?: Date
    tags?: string[]
  }[]
}

export default function Posts1({ children, posts }: Posts1Props) {
  // Collect all tags from posts, flatten, and deduplicate
  const allTags = posts?.flatMap(({ tags }) => tags)
  const uniqueTags = [...new Set(allTags)].filter((tag) => tag !== undefined)

  // State for the currently active tag filter (null = show all)
  const [activeTags, setActiveTags] = React.useState<string[]>([])

  // Handler for toggling tag filters
  const handleTagToggle = (tag: string) => (pressed: boolean) => {
    setActiveTags(
      pressed ? [...activeTags, tag] : activeTags.filter((t) => t !== tag)
    )
  }

  // Filter posts by active tag, or show all if none selected
  const filteredPosts = React.useMemo(() => {
    if (activeTags.length === 0) return posts
    return posts?.filter((post) =>
      post.tags?.some((tag) => activeTags.includes(tag))
    )
  }, [posts, activeTags])

  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full flex-col items-center px-4 md:px-12">
        {children && (
          <Writeup className="text-center" size="4xl">
            {children}
          </Writeup>
        )}
        <div className="flex flex-col gap-4 not-first:mt-16">
          <div className="mb-8 flex flex-row flex-wrap justify-center gap-2">
            {uniqueTags?.map((tag) => (
              <Toggle
                key={tag}
                size="sm"
                variant="outline"
                onPressedChange={handleTagToggle(tag)}
              >
                {tag}
              </Toggle>
            ))}
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-4">
            {filteredPosts?.map(
              ({ href, title, description, published, tags }) => (
                <Tile href={href} key={href}>
                  {tags && (
                    <TileHeader className="flex flex-row flex-wrap">
                      {tags?.map((tag) => (
                        <Badge variant="secondary" key={tag}>
                          {tag}
                        </Badge>
                      ))}
                    </TileHeader>
                  )}
                  <TileContent>
                    <Tagline size="xs">
                      {published?.toLocaleDateString("nl-NL")}
                    </Tagline>
                    <Heading as="h3">{title}</Heading>
                    <Paragraph>{description}</Paragraph>
                  </TileContent>
                </Tile>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
