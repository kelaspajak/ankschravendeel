import { Button } from "@/components/ui/button"
import { Writeup } from "@/components/ui/writeup"

export interface Cta1Props {
  children?: React.ReactNode
  buttons?: {
    text?: string
    href?: string
  }[]
}

export default function ({ buttons, children }: Cta1Props) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8">
        <div className="bg-card text-card-foreground flex flex-col items-center rounded-lg border px-4 py-16 lg:px-8">
          {children && (
            <Writeup className="text-center" size="5xl">
              {children}
            </Writeup>
          )}
          {buttons && (
            <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
              {buttons?.map(({ href, text, ...button }, i) => (
                <Button
                  key={href}
                  variant={i === 0 ? "default" : "ghost"}
                  size="lg"
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
    </section>
  )
}
