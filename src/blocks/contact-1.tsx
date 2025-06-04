import type { BlockProps } from "@/schemas/block"

import { Writeup } from "@/components/ui/writeup"
import { AutoForm } from "@/components/auto-form"
import { Channels } from "@/components/channels"

export default function ({ children, channels, form }: BlockProps) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 lg:px-8">
        {children && <Writeup size="4xl">{children}</Writeup>}
        {channels && <Channels className="not-first:mt-8" {...channels} />}
        {form && <AutoForm className="not-first:mt-16" {...form} />}
      </div>
    </section>
  )
}
