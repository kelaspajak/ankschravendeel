import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tagline } from "@/components/ui/tagline"

interface Hero1Props {
  tagline: string
  heading: string
  paragraph: string
  button1: {
    text: string
    href: string
  }
  button2: {
    text: string
    href: string
  }
  image: {
    src: string
    alt: string
  }
}

export default function Hero1({
  tagline = "Welkom hier!",
  heading = "Krijg inzicht door meditatie en coaching met Ank Schravendeel",
  paragraph = "Meditatie: zijn met wat er is en dat toelaten. Coaching: je ervaring geeft inzicht en je leert je er toe verhouden.",
  button1 = {
    text: "Neem contact op",
    href: "/contact/",
  },
  button2 = {
    text: "Lees verder",
    href: "/meditatie/",
  },
  image = {
    src: "/images/home.jpeg",
    alt: "Hero",
  },
}: Hero1Props) {
  return (
    <section className="bg-background relative min-h-screen w-full py-16">
      <img
        className="absolute inset-0 size-full object-cover"
        src={image.src}
        alt={image.alt}
      />
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 lg:px-8">
        <Tagline size="sm" className="editable text-center">
          {tagline}
        </Tagline>
        <Heading className="mt-4 text-center text-balance" as="h1" size="6xl">
          {heading}
        </Heading>
        <Paragraph className="mt-4 text-center" size="lg">
          {paragraph}
        </Paragraph>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <a href={button1.href}>{button1.text}</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={button2.href}>{button2.text}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
