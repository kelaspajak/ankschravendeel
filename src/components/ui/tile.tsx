import * as React from "react"

import { cn } from "@/lib/utils"

// [&_*[data-slot=tile-image]]:rounded-lg

function Tile({
  className,
  panel = true,
  ...props
}: React.ComponentProps<"div"> &
  React.ComponentProps<"a"> & {
    panel?: boolean
  }) {
  const Comp = props.href ? "a" : "div"
  return (
    <Comp
      data-slot="tile"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-4",
        panel &&
          "overflow-hidden rounded-lg border pb-6 **:data-[slot=tile-content]:px-6 **:data-[slot=tile-footer]:px-6 **:data-[slot=tile-header]:px-6",
        !panel && "**:data-[slot=tile-image]:rounded-lg",
        Comp === "a" && "group",
        panel && Comp === "a" && "shadow-xs transition-shadow hover:shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function TileImage({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img
      data-slot="tile-image"
      className={cn(
        "h-auto w-full transition-opacity group-hover:opacity-80",
        className
      )}
      {...props}
    />
  )
}

function TileHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tile-header"
      className={cn("first:mt-6", className)}
      {...props}
    />
  )
}

function TileContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tile-content"
      className={cn("flex flex-col gap-2 first:mt-6", className)}
      {...props}
    />
  )
}

function TileFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tile-footer"
      className={cn("first:mt-6", className)}
      {...props}
    />
  )
}

// function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-title"
//       className={cn("leading-none font-semibold", className)}
//       {...props}
//     />
//   )
// }

// function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-description"
//       className={cn("text-muted-foreground text-sm", className)}
//       {...props}
//     />
//   )
// }

// function CardAction({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-action"
//       className={cn(
//         "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
//       {...props}
//     />
//   )
// }

export {
  Tile,
  TileImage,
  TileContent,
  TileHeader,
  TileFooter,
  // CardHeader,
  // CardFooter,
  // CardTitle,
  // CardAction,
  // CardDescription,
  // CardContent,
}
