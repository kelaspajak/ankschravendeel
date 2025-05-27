import { Button } from "@/components/ui/button"

export default function () {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 lg:px-8">
        <span className="text-primary editable mb-4 items-center justify-center text-base font-medium">
          Welkom hier!
        </span>
        <h1 className="editable text-center text-6xl font-bold">
          Krijg inzicht door meditatie en coaching met Ank Schravendeel
        </h1>
        <p className="editable mt-4 text-center text-xl">
          Meditatie: zijn met wat er is en dat toelaten. <br />
          Coaching: je ervaring geeft inzicht en je leert je er toe verhouden.
        </p>
        <Button asChild size="lg">
          <a className="editable" href="/contact/">
            Neem contact op
          </a>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <a className="editable" href="/meditatie/">
            Lees verder
          </a>
        </Button>
        <img
          className="editable mt-16 rounded-lg"
          src="/images/home.jpeg"
          alt="Hero"
        />
      </div>
    </section>
  )
}
