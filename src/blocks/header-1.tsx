import type { BlockProps } from "@/schemas/block"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Logo } from "@/components/ui/logo"
import { Separator } from "@/components/ui/separator"
import { DrawerMenu } from "@/components/drawer-menu"
import { NavigationMenu } from "@/components/navigation-menu"

interface Header1Props extends BlockProps {
  logo?: {
    src?: string
    alt?: string
    text?: string
  }
  menus?: {
    text?: string
    href?: string
    links?: {
      text?: string
      href?: string
    }[]
  }[]
  buttons?: {
    text?: string
    href?: string
  }[]
}

export default function ({ logo, menus, buttons }: Header1Props) {
  return (
    <header className="header bg-background sticky top-0 z-50 flex h-14 w-full border-b">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 px-4 max-sm:gap-0 lg:px-8">
        <div className="flex items-center gap-2">
          {menus && <DrawerMenu className="-ml-2.5 lg:hidden" items={menus} />}
          {logo && (
            <a
              href="/"
              className="mr-4 flex items-center gap-3 font-semibold whitespace-nowrap"
            >
              {logo.src && (
                <img
                  className="logo h-9 w-auto max-w-[200px] object-contain max-sm:hidden lg:hidden xl:flex"
                  {...logo}
                />
              )}
              {logo.text && <span>{logo.text}</span>}
            </a>
          )}
          {menus && (
            <NavigationMenu
              className="max-xl:-ml-3 max-lg:hidden"
              items={menus}
            />
          )}
        </div>
        <div className="inline-flex w-full items-center justify-end gap-2">
          {buttons && buttons.length > 0 && (
            <div className="inline-flex flex-nowrap gap-2 max-sm:hidden">
              {buttons.map(({ text, href, ...button }, i) => (
                <Button
                  key={href}
                  variant={i === 0 ? "default" : "ghost"}
                  asChild
                  {...button}
                >
                  <a href={href}>{text}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
