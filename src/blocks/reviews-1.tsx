import type { BlockProps } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tile, TileContent, TileHeader } from "@/components/ui/tile"
import { Writeup } from "@/components/ui/writeup"
import { Rating } from "@/components/rating"

export default function ({ children, reviews }: BlockProps) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 lg:px-8">
        <Writeup size="4xl">{children}</Writeup>
        <div className="mt-12 columns-3xs gap-4 space-y-6">
          {reviews?.map(
            ({ id, title, description, rating = 5, tagline, avatar }) => (
              <Tile className="break-inside-avoid" key={id}>
                <TileHeader>{rating && <Rating score={rating} />}</TileHeader>
                <TileContent>
                  <div className="flex w-full gap-4">
                    {avatar && (
                      <img
                        className="size-12 shrink-0 grow-0 rounded-full object-cover"
                        src={avatar}
                        alt={`${title} ${tagline}`}
                      />
                    )}
                    <div className="flex w-full flex-col">
                      <Heading as="h3">{title}</Heading>
                      {tagline && (
                        <span className="text-muted-foreground z-20 mt-0.5 text-sm">
                          {tagline}
                        </span>
                      )}
                    </div>
                  </div>
                  {description && <Paragraph>{description}</Paragraph>}
                </TileContent>
              </Tile>
            )
          )}
        </div>
      </div>
    </section>
  )
}
