import * as React from "react"
import type { BlockProps } from "@/schemas/block"
import type { ImageSchema } from "@/schemas/image"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Prose } from "@/components/ui/prose"

interface Content1Props extends BlockProps {
  title?: string
  description?: string
  image?: {
    src: string
    alt: string
  }
  children: React.ReactNode
}

export default function ({
  title,
  description,
  image,
  children,
}: BlockProps & {
  children: React.ReactNode
}) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 lg:px-8">
        {title && (
          <Heading className="mb-4" as="h1" size="5xl">
            {title}
          </Heading>
        )}
        {description && (
          <Paragraph className="mt-4" size="lg">
            {description}
          </Paragraph>
        )}
        {image && (
          <img className="mt-8 rounded-md" src={image.src} alt={image.alt} />
        )}
        <Prose className="not-first:mt-8">{children}</Prose>
      </div>
    </section>
  )
}
