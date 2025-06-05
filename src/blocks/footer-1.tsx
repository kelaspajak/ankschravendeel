import type { ComponentProps } from "astro/types"

import { Heading } from "@/components/ui/heading"
import { Logo } from "@/components/ui/logo"
import { Paragraph } from "@/components/ui/paragraph"
import { Social } from "@/components/ui/social"
import { Channels } from "@/components/channels"
import { Menu } from "@/components/menu"

export interface Footer1Props {
  logo?: {
    src?: string
    alt?: string
  }
  title?: string
  description?: string
  channels?: ComponentProps<typeof Channels>
  socials?: string[]
  menus?: ComponentProps<typeof Menu>[]
  links?: {
    text?: string
    href?: string
  }[]
  copyright?: string
}

export default function ({
  logo,
  title,
  description,
  links,
  socials,
  channels,
  menus,
  copyright,
}: Footer1Props) {
  return (
    <footer className="footer bg-background relative mt-auto w-full justify-end justify-self-end">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8">
        <div className="flex flex-col">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(30px,1fr))] justify-between gap-16 border-t py-16">
            <div className="col-span-3 flex max-w-xs flex-col">
              <div className="flex items-center gap-2">
                {(logo || title) && (
                  <a href="/" className="flex items-center gap-2">
                    {logo && <Logo {...logo} />}
                    {title && (
                      <Heading size="xl" as="h6">
                        {title}
                      </Heading>
                    )}
                  </a>
                )}
              </div>
              {description && (
                <Paragraph
                  className="text-muted-foreground not-first:mt-3"
                  size="sm"
                >
                  {description}
                </Paragraph>
              )}
              {channels && (
                <Channels className="not-first:mt-6" {...channels} />
              )}
            </div>
            {menus?.map((menu) => (
              <Menu
                className="col-span-2 basis-[192px] text-sm"
                key={menu.text}
                {...menu}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t py-4">
            {copyright && (
              <p className="text-muted-foreground text-xs">
                © {new Date().getFullYear()} {copyright}
              </p>
            )}
            <div className="flex items-center gap-x-6 gap-y-1">
              {links?.map(({ text, href }) => (
                <a
                  className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                  key={href}
                  href={href}
                >
                  {text}
                </a>
              ))}
              {socials && (
                <div className="flex gap-0.5">
                  {socials.map((social) => (
                    <Social href={social} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
