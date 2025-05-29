import type { BlockSchema } from "@/schemas/block"

import { Writeup } from "@/components/ui/writeup"
import { AutoForm } from "@/components/auto-form"
import { Channels } from "@/components/channels"

export default function ({ content, channels, form }: BlockSchema) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 lg:px-8">
        {content && <Writeup size="4xl" content={content} />}
        {channels && <Channels className="not-first:mt-8" {...channels} />}
        {form && <AutoForm className="not-first:mt-16" {...form} />}
      </div>
    </section>
  )
}
