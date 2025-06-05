import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tile, TileContent, TileImage } from "@/components/ui/tile"
import { Writeup } from "@/components/ui/writeup"

interface Services1Props {
  children?: React.ReactNode
  services?: {
    href?: string
    title?: string
    description?: string
    image?: {
      src?: string
      alt?: string
    }
  }[]
}

export default function ({ children, services }: Services1Props) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 lg:px-8">
        {children && (
          <Writeup className="mb-12" size="3xl">
            {children}
          </Writeup>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services?.map(({ href, title, description, image }) => (
            <Tile key={href} href={href}>
              <TileImage className="aspect-4/3 object-cover" {...image} />
              <TileContent>
                <Heading as="h3" size="lg">
                  {title}
                </Heading>
                <Paragraph size="sm">{description}</Paragraph>
              </TileContent>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  )
}
