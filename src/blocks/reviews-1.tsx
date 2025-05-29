import type { BlockSchema } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Writeup } from "@/components/ui/writeup"
import { Rating } from "@/components/rating"

export default function ({ content, items }: BlockSchema) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 lg:px-8">
        <Writeup size="4xl" content={content} />
        <div className="mt-12 columns-3xs gap-4">
          {items?.map(({ title, description, rating = 5, tagline, avatar }) => (
            <div
              key={title}
              className="flex break-inside-avoid flex-col rounded-lg border p-6"
            >
              {rating && <Rating score={rating} />}
              <div className="mt-3.5 flex w-full gap-4">
                {avatar && (
                  <img
                    className="size-12 shrink-0 grow-0 rounded-full object-cover"
                    {...avatar}
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
              {description && (
                <Paragraph className="mt-3">{description}</Paragraph>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
