import type { BlockProps } from "@/schemas/block"

export interface Banner1Props extends BlockProps {
  text?: string
  button?: {
    text?: string
    href?: string
  }
}

export default function ({ text, href }: Banner1Props) {
  return (
    <header className="bg-primary relative z-10 flex h-8 items-center">
      <div className="text-primary-foreground mx-auto flex w-full max-w-screen-xl items-center justify-center px-4 lg:px-8">
        {href ? (
          <a
            href={href}
            className="text-primary-foreground text-center text-sm font-medium"
          >
            <span>{text}</span>
          </a>
        ) : (
          <p className="text-primary-foreground text-center text-sm font-medium">
            {text}
          </p>
        )}
      </div>
    </header>
  )
}
