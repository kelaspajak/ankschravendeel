import type { BlockSchema } from "@/schemas/block"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Logo } from "@/components/ui/logo"
import { DrawerMenu } from "@/components/drawer-menu"
import { NavigationMenu } from "@/components/navigation-menu"

export default function ({ text, logo, menus, buttons }: BlockSchema) {
  return (
    <header className="header bg-background/95 supports-[backdrop-filter]:bg-background/80 z-50 flex h-14 w-full border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 px-4 max-sm:gap-0 lg:px-8">
        <div className="flex items-center gap-2">
          {menus && <DrawerMenu className="-ml-2.5 lg:hidden" items={menus} />}
          {logo && (
            <a href="/">
              <Logo
                className="mr-3 max-sm:hidden lg:hidden xl:flex"
                {...logo}
              />
            </a>
          )}
          {text && (
            <Heading
              size="lg"
              as="h6"
              className="mr-3 whitespace-nowrap max-sm:hidden lg:hidden xl:flex"
            >
              {text}
            </Heading>
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
