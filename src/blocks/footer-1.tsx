import type { BlockSchema } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Logo } from "@/components/ui/logo"
import { Social } from "@/components/ui/social"
import { Channels } from "@/components/channels"
import { Menu } from "@/components/menu"

export default function ({
  logo,
  heading,
  paragraph,
  socials,
  channels,
  menus,
  company,
  policies,
  hours,
}: BlockSchema) {
  return (
    <footer className="footer bg-background relative mt-auto w-full justify-end justify-self-end">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8">
        <div className="flex flex-col">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(30px,1fr))] justify-between gap-16 border-t py-16">
            <div className="col-span-3 flex max-w-xs flex-col">
              <div className="flex items-center gap-2">
                {logo && <Logo {...logo} />}
                {heading && (
                  <Heading size="xl" as="h6">
                    {heading}
                  </Heading>
                )}
              </div>
              {paragraph && (
                <p className="text-muted-foreground text-sm leading-6 not-first:mt-3">
                  {paragraph}
                </p>
              )}
              {channels && (
                <Channels className="not-first:mt-6" {...channels} />
              )}
            </div>
            {hours && hours.length > 0 && (
              <ul className="col-span-2 flex flex-col items-start">
                <h6 className="text-foreground text-sm font-semibold not-last:mb-4">
                  Openingstijden
                </h6>
                {hours.map(({ label, value }) => (
                  <li
                    className="text-muted-foreground flex items-center justify-between gap-2 text-sm whitespace-nowrap not-last:mb-1"
                    key={value}
                  >
                    <span className="w-8">{label}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            )}
            {menus &&
              menus.length > 0 &&
              menus.map((menu) => (
                <Menu
                  className="col-span-2 basis-[192px] text-sm"
                  key={menu.text}
                  {...menu}
                />
              ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t py-4">
            {company && (
              <p className="text-muted-foreground text-xs">
                © {new Date().getFullYear()} {company}
              </p>
            )}
            <div className="flex items-center gap-x-6 gap-y-1">
              {policies &&
                policies.length > 0 &&
                policies.map(({ text, href }: any) => (
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
