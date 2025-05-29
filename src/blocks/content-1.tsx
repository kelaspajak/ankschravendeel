import * as React from "react"
import type { BlockSchema } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Prose } from "@/components/ui/prose"

function Content1({
  heading,
  paragraph,
  image,
  children,
}: BlockSchema & {
  children: React.ReactNode
}) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 lg:px-8">
        <Heading className="mb-4" as="h1" size="4xl">
          {heading}
        </Heading>
        {paragraph && (
          <Paragraph className="mt-4" size="lg">
            {paragraph}
          </Paragraph>
        )}
        {image && <img className="mt-8 rounded-md" {...image} />}
        <Prose className="mt-8">{children}</Prose>
      </div>
    </section>
  )
}

export { Content1 }
