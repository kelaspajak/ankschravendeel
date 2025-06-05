import type { BlockProps } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Writeup } from "@/components/ui/writeup"

export interface Events1Props {
  children?: React.ReactNode
  events?: {
    href?: string
    title?: string
    description?: string
  }[]
}

export default function ({ children, events }: Events1Props) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 md:px-12">
        {children && <Writeup size="4xl">{children}</Writeup>}
        <div className="flex flex-col gap-4 not-first:mt-16">
          {events?.map(({ href, title, description }) => (
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
