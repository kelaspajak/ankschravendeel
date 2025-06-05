import { Tag } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tagline } from "@/components/ui/tagline"
import { Tile, TileContent, TileHeader } from "@/components/ui/tile"
import { Writeup } from "@/components/ui/writeup"

export interface Events1Props {
  children?: React.ReactNode
  posts?: {
    href?: string
    title?: string
    description?: string
    published?: Date
    tags?: string[]
  }[]
}

export default function ({ children, posts }: Events1Props) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 md:px-12">
        {children && <Writeup size="4xl">{children}</Writeup>}
        <div className="flex flex-col gap-4 not-first:mt-16">
          {posts?.map(({ href, title, description, published, tags }) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
