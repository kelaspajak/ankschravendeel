import type { BlockSchema } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Writeup } from "@/components/ui/writeup"

export default function ({ content, items }: BlockSchema) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 md:px-12">
        <Writeup size="4xl" content={content} />
        <div className="mt-16 flex flex-col gap-4">
          {items?.map(({ href, title, description }) => (
            <a
              href={href}
              className="flex flex-col items-start gap-4 rounded-lg border p-6"
              key={href}
            >
              <Heading as="h3">{title}</Heading>
              <Paragraph>{description}</Paragraph>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
