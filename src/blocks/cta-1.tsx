import type { BlockSchema } from "@/schemas/block"

import { Button } from "@/components/ui/button"
import { Writeup } from "@/components/ui/writeup"

export default function ({ content, buttons }: BlockSchema) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8">
        <div className="bg-card flex flex-col items-center rounded-lg border px-4 py-16 lg:px-8">
          <Writeup className="text-center" size="5xl" content={content} />
          <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
            {buttons?.map(({ href, text, ...button }, i) => (
              <Button
                key={href}
                variant={i === 0 ? "default" : "ghost"}
                size="lg"
                asChild
                {...button}
              >
                <a href={href}>{text}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
