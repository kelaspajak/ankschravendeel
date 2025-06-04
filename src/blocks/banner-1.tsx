import type { BlockProps } from "@/schemas/block"

import { cn } from "@/lib/utils"

export default function ({ list }: BlockProps) {
  return (
    <header className="banner bg-primary text-primary-foreground relative z-10 flex h-8 items-center text-center text-sm leading-3.5 font-medium">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-evenly px-4 text-xs lg:px-8">
        {list?.map((text, i) => (
          <span
            key={text}
            className={cn({
              "max-md:hidden": i > 0,
              "max-lg:hidden": i > 1,
              "max-xl:hidden": i > 2,
              hidden: i > 3,
            })}
          >
            {text}
          </span>
        ))}
      </div>
    </header>
  )
}
