import type { ComponentProps } from "react"

import { Writeup } from "@/components/ui/writeup"
import { AutoForm } from "@/components/auto-form"
import { Channels } from "@/components/channels"

export interface Contact1Props {
  children?: React.ReactNode
  channels?: ComponentProps<typeof Channels>
  form?: ComponentProps<typeof AutoForm>
}

export default function ({ children, channels, form }: Contact1Props) {
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
