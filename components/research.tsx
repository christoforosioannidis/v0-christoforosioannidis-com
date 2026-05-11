import Image from "next/image"
import { SectionLabel } from "./section-label"

const themes = [
  {
    n: "I",
    title: "Legitimacy & Political Authority",
    body: "The contested grammar of legitimacy: when does an order command our reasoned allegiance, and when does it merely demand obedience?",
  },
  {
    n: "II",
    title: "Sovereignty in a Post-Human Rights Era",
    body: "Re-reading the identity of states against the rise of transnational normativity. What remains of sovereignty when human rights become its measure?",
  },
  {
    n: "III",
    title: "Human Rights & Moral Philosophy",
    body: "Foundations, justifications, and the philosophical anthropology that makes the discourse of rights coherent - or impossible.",
  },
  {
    n: "IV",
    title: "Jurisprudence & Legal Theory",
    body: "Positivism, natural law, and the essentially contested concepts that animate the central disputes of modern legal philosophy.",
  },
  {
    n: "V",
    title: "Law, Civilization & Power",
    body: "Law as a civilizational artifact: what cultures inherit, what they impose, and what they are obliged to justify.",
  },
  {
    n: "VI",
    title: "The Pseudo-Problem of Authority",
    body: "Current research re-examining whether the so-called 'problem of authority' has been mis-posed by a century of analytical jurisprudence.",
  },
]

export function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-background pb-28 pt-12 md:pb-40 md:pt-16"
    >
      {/* Backdrop image */}
      <div className="absolute inset-0 -z-10 opacity-[0.08]">
        <Image
          src="/columns.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" label="Research & Ideas" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Six concerns
              <br />
              <span className="italic text-primary/90">
                running through the work.
              </span>
            </h2>
          </div>
          <p className="text-pretty font-serif text-lg leading-relaxed text-foreground/75 lg:col-span-5">
            The research is structured around problems that refuse to be
            solved once and for all - and that, for that reason, demand
            continual philosophical attention.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t) => (
            <article
              key={t.title}
              className="group relative flex flex-col gap-6 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl italic text-primary/80">
                  {t.n}.
                </span>
                <span className="hairline w-10 transition-all duration-500 group-hover:w-16" />
              </div>
              <h3 className="font-serif text-2xl leading-tight text-foreground md:text-[1.7rem]">
                {t.title}
              </h3>
              <p className="text-pretty font-serif text-base leading-relaxed text-foreground/65">
                {t.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
