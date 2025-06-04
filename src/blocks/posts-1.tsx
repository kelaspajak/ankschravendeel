import type { BlockProps } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Writeup } from "@/components/ui/writeup"

export default function ({ children, posts }: BlockProps) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 lg:px-8">
        {children && (
          <Writeup className="mb-12" size="4xl">
            {children}
          </Writeup>
        )}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts?.map(({ href, title, description, image }) => (
            <a
              className="group cursor-pointer overflow-hidden"
              key={href}
              href={href}
            >
              <img
                src={image?.src}
                alt={image?.alt}
                className="mb-4 aspect-4/3 h-auto w-full rounded-md object-cover transition-opacity group-hover:opacity-70"
              />
              <Heading className="mb-2" as="h3" size="lg">
                {title}
              </Heading>
              <Paragraph>{description}</Paragraph>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
