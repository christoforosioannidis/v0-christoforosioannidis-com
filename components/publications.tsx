import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./section-label"

const publications = [
  {
    type: "Doctoral Thesis",
    year: "2020",
    title: "Legitimacy: An Essentially Contested Concept?",
    venue: "King's College London - PhD in Laws",
    href: "https://kclpure.kcl.ac.uk/portal/en/theses/legitimacy(264becc8-2005-4ca9-bd73-0e3d72eb48e7).html",
    image: "/kcl.jpg",
    feature: true,
  },
  {
    type: "Peer-Reviewed Article",
    year: "2014",
    title:
      "Are the Conditions of Statehood Sufficient? An Argument in Favor of Popular Sovereignty as an Additional Condition for Statehood",
    venue: "Jurisprudencia, Vol. 21, No. 4",
    href: "https://www3.mruni.eu/ojs/jurisprudence/article/view/4013/3815",
  },
  {
    type: "MA Dissertation",
    year: "2012",
    title:
      "Can Kelsen's Legal Positivism Account for International Regime Change?",
    venue: "Arizona State University - MA in Philosophy",
    href: "https://repository.asu.edu/attachments/97595/content//tmp/package-ednG6y/Ioannidis_asu_0010N_12230.pdf",
  },
  {
    type: "LLM Dissertation",
    year: "2006",
    title: "Is There a Case for a Right to Die?",
    venue: "The University of Edinburgh - LLM",
  },
  {
    type: "Forthcoming",
    year: "-",
    title: "The Pseudo-Problem of Authority",
    venue: "Working paper · in preparation",
  },
  {
    type: "Forthcoming",
    year: "-",
    title:
      "State Sovereignty: An Essentially Contested Concept?",
    venue: "Working paper · in preparation",
  },
]

export function Publications() {
  const [feature, ...rest] = publications

  return (
    <section
      id="publications"
      className="relative bg-card py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="03" label="Publications" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Selected writing
              <br />
              <span className="italic text-primary/90">
                & work in preparation.
              </span>
            </h2>
          </div>
        </div>

        {/* Feature publication */}
        {feature && (
          <a
            href={feature.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-16 grid grid-cols-1 gap-10 border-t border-border/60 pt-12 lg:grid-cols-12"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-border/60 lg:col-span-5">
              <Image
                src={feature.image || "/manuscript.jpg"}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <span className="absolute left-5 top-5 font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                Featured · {feature.year}
              </span>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:col-span-7">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
                  {feature.type}
                </span>
                <h3 className="mt-5 text-balance font-serif text-3xl leading-[1.1] text-foreground md:text-5xl">
                  {feature.title}
                </h3>
                <p className="mt-6 font-serif text-lg italic text-muted-foreground">
                  {feature.venue}
                </p>
              </div>
              <span className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.28em] text-foreground transition-colors group-hover:text-primary">
                Read the thesis
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        )}

        {/* Rest as ledger list */}
        <ul className="mt-20 divide-y divide-border/60 border-y border-border/60">
          {rest.map((p) => {
            const Wrapper: React.ElementType = p.href ? "a" : "div"
            const wrapperProps = p.href
              ? {
                  href: p.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {}
            return (
              <li key={p.title}>
                <Wrapper
                  {...wrapperProps}
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-7 transition-colors hover:bg-background/40"
                >
                  <span className="col-span-2 font-sans text-xs tabular-nums tracking-wide text-muted-foreground md:col-span-1">
                    {p.year}
                  </span>
                  <span className="col-span-10 font-sans text-[10px] uppercase tracking-[0.28em] text-primary md:col-span-2">
                    {p.type}
                  </span>
                  <div className="col-span-12 md:col-span-7">
                    <h4 className="text-balance font-serif text-xl leading-snug text-foreground md:text-2xl">
                      {p.title}
                    </h4>
                    <p className="mt-1 font-serif text-sm italic text-muted-foreground">
                      {p.venue}
                    </p>
                  </div>
                  <div className="col-span-12 flex justify-end md:col-span-2">
                    {p.href ? (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    ) : (
                      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        In preparation
                      </span>
                    )}
                  </div>
                </Wrapper>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
