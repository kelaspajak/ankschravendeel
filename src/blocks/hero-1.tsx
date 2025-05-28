import { Button } from "@/components/ui/button"

export default function () {
  return (
    <section className="relative w-full py-16" data-edit-block="hero-1">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 lg:px-8">
        <span
          className="text-primary editable mb-4 items-center justify-center text-base font-medium"
          data-edit="span"
        >
          Welkom hier!!!!!!!
        </span>
        <h1
          className="editable text-center text-6xl font-bold"
          data-edit-element="h1"
        >
          Hoi!!!
        </h1>
        <p className="editable mt-4 text-center text-xl" data-edit-element="p">
          Meditatie: zijn met wat er is en dat toelaten. <br />
          <br />
          Coaching: je ervaring geeft inzicht en je leert je er toe verhouden.!
        </p>
        <Button asChild size="lg">
          <a className="editable" href="/contact/" data-edit-element="a1">
            Neem contact op
          </a>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <a className="editable" href="/meditatie/" data-edit-element="a2">
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
