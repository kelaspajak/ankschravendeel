import type { BlockProps } from "@/schemas/block"

import { Button } from "@/components/ui/button"
import { Writeup } from "@/components/ui/writeup"

export default function ({ children, buttons, image }: BlockProps) {
  return (
    <section className="bg-background relative min-h-screen w-full py-16">
      <img className="absolute inset-0 size-full object-cover" {...image} />
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 lg:px-8">
        <Writeup className="mb-8 text-center" size="6xl">
          {children}
        </Writeup>
        <div className="flex gap-4">
          {buttons?.map(({ href, text }, i) => (
            <Button
              asChild
              size="lg"
              key={href}
              variant={i === 0 ? "default" : "ghost"}
            >
              <a href={href}>{text}</a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
