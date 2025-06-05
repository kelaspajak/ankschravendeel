import {
  Author,
  AuthorImage,
  AuthorTagline,
  AuthorTitle,
} from "@/components/ui/author"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tagline } from "@/components/ui/tagline"
import {
  Tile,
  TileContent,
  TileFooter,
  TileHeader,
  TileImage,
} from "@/components/ui/tile"
import { Writeup } from "@/components/ui/writeup"

export interface Articles1Props {
  children?: React.ReactNode
  articles?: {
    href?: string
    title?: string
    description?: string
    image?: {
      src?: string
      alt?: string
    }
    published?: Date
  }[]
}

export default function ({ children, articles }: Articles1Props) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 lg:px-8">
        {children && (
          <Writeup className="mb-12" size="3xl">
            {children}
          </Writeup>
        )}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articles?.map(({ href, title, description, image, published }) => (
            <Tile key={href} href={href} panel={false} className="gap-2">
              <TileImage className="aspect-4/3 object-cover" {...image} />
              <TileHeader className="mt-2">
                <Tagline size="xs">
                  {published?.toLocaleDateString("nl-NL")}
                </Tagline>
              </TileHeader>
              <TileContent className="mt-0">
                <Heading as="h3" size="lg">
                  {title}
                </Heading>
                <Paragraph size="sm">{description}</Paragraph>
              </TileContent>
              {/* <TileFooter>
                <Author>
                  <AuthorImage
                    src={person?.avatar}
                    alt={`${person?.title} ${person?.tagline}`}
                  />
                  <AuthorTitle>{person.title}</AuthorTitle>
                  <AuthorTagline>{person.tagline}</AuthorTagline>
                </Author>
              </TileFooter> */}
            </Tile>
          ))}
        </div>
      </div>
    </section>
  )
}
