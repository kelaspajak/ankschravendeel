import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"

interface ServicesProps {
  heading: string
  paragraph: string
  services: {
    href: string
    title: string
    description: string
    image: {
      src: string
      alt: string
    }
  }[]
}

export default function Services({
  heading = "Onze Diensten",
  paragraph = "Ontdek de verschillende manieren waarop we je kunnen begeleiden op je spirituele reis",
  services = [
    {
      href: "/coaching/",
      title: "Coaching",
      description:
        "Voor wie een coach zoekt, die vanuit een boeddhistisch perspectief werkt",
      image: {
        src: "/images/coaching.jpeg",
        alt: "Coaching",
      },
    },
    {
      href: "/meditatie/",
      title: "Meditatie",
      description: "Wat je ervoor nodig hebt, krijg je door het te doen",
      image: {
        src: "/images/meditatie.jpeg",
        alt: "Meditatie",
      },
    },
    {
      href: "/retraite/",
      title: "Meditatie retraite",
      description:
        "Opmerkzaam zijn voor langere tijd, intensiever en in alles wat we doen",
      image: {
        src: "/images/retraite.jpeg",
        alt: "Retraite",
      },
    },
    {
      href: "/zingend-mediteren/",
      title: "Zingend mediteren",
      description: "Mediteren maakt ingetogen, zingen maakt opgetogen.",
      image: {
        src: "/images/zingen-en-mediteren.jpeg",
        alt: "Zingend mediteren",
      },
    },
  ],
}: ServicesProps) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 lg:px-8">
        <Heading className="mb-4" as="h2" size="4xl">
          {heading}
        </Heading>
        <Paragraph className="mb-12" size="lg">
          {paragraph}
        </Paragraph>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              className="group cursor-pointer overflow-hidden"
              key={service.href}
            >
              <img
                src={service.image.src}
                alt={service.image.alt}
                className="mb-4 aspect-4/3 h-auto w-full rounded-md object-cover transition-opacity group-hover:opacity-70"
              />
              <Heading className="mb-2" as="h3" size="lg">
                {service.title}
              </Heading>
              <Paragraph>{service.description}</Paragraph>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
