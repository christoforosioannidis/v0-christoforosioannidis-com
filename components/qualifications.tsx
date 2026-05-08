import { Award, BookOpen, Scale, ScrollText, Users } from "lucide-react"
import { SectionLabel } from "./section-label"

type Qualification = {
  title: string
  body: string
  meta: string
  Icon: React.ElementType
}

const qualifications: Qualification[] = [
  {
    title: "Civil Mediation Council (CMC) Associate Mediator",
    body: "Accredited civil and commercial mediator under the standards of the Civil Mediation Council, United Kingdom.",
    meta: "Accredited · November 2023",
    Icon: Scale,
  },
  {
    title: "Fellow of the Higher Education Academy (FHEA)",
    body: "Recognised fellowship in higher education teaching, awarded through the School of Law, Queen Mary University of London.",
    meta: "Awarded · April 2020",
    Icon: ScrollText,
  },
  {
    title: "Junior Fellow - Legal & Political Theory Programme",
    body: "Three-year fellowship at the Think Tank programme of the Global Research Network in legal and political theory.",
    meta: "October 2019 - October 2022",
    Icon: BookOpen,
  },
  {
    title: "Lifetime Academic Member - ATINER",
    body: "Lifetime member of the Athens Institute for Education and Research; Academic Member of its Philosophy and Law Research Units.",
    meta: "From December 2014 · GBR2014007600769",
    Icon: Award,
  },
  {
    title: "Reviewer - International Journal of Social Sciences",
    body: "Peer reviewer for the International Journal of Social Sciences across legal philosophy and political theory submissions.",
    meta: "July 2014 - Present",
    Icon: Users,
  },
  {
    title: "CELTA - Cambridge Certificate in English Language Teaching to Adults",
    body: "Cambridge accreditation in English language teaching, awarded through ECC.",
    meta: "September 2006",
    Icon: ScrollText,
  },
]

const leadership = [
  {
    role: "President",
    body: "KCL Think Tank Law Policy Centre",
    period: "2014 - 2015",
  },
  {
    role: "Managing Editor",
    body: "King's Student Law Review (KSLR)",
    period: "2014 - 2015",
  },
  {
    role: "Co-convener",
    body: "9th International Graduate Legal Research Conference, King's College London",
    period: "2015",
  },
  {
    role: "Editor in Legal Theory",
    body: "King's Student Law Review (KSLR)",
    period: "2013 - 2014",
  },
  {
    role: "Registrations Officer",
    body: "8th International Graduate Legal Research Conference, King's College London",
    period: "2014",
  },
]

export function Qualifications() {
  return (
    <section
      id="qualifications"
      className="relative bg-background py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="06" label="Professional Qualifications" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Credentials, fellowships,
              <br />
              <span className="italic text-primary/90">
                and academic standing.
              </span>
            </h2>
          </div>
          <p className="text-pretty font-serif text-lg leading-relaxed text-foreground/75 lg:col-span-4">
            Formal recognitions across the disciplines of law, mediation,
            higher education, and legal &amp; political theory.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-2">
          {qualifications.map((q) => (
            <article
              key={q.title}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center border border-primary/40 text-primary">
                  <q.Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-balance font-serif text-xl leading-snug text-foreground md:text-2xl">
                    {q.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-pretty font-serif text-base leading-relaxed text-foreground/70">
                    {q.body}
                  </p>
                  <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                    {q.meta}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Leadership */}
        <div className="mt-24">
          <div className="flex items-center gap-4">
            <span className="hairline w-12" />
            <h3 className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
              Leadership & Academic Service
            </h3>
            <span className="hairline flex-1" />
          </div>

          <ul className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {leadership.map((l) => (
              <li
                key={l.role + l.body}
                className="grid grid-cols-12 gap-x-6 gap-y-2 py-6"
              >
                <span className="col-span-12 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:col-span-3">
                  {l.period}
                </span>
                <span className="col-span-12 font-serif text-lg italic text-primary/90 md:col-span-3 md:text-xl">
                  {l.role}
                </span>
                <span className="col-span-12 font-serif text-lg leading-snug text-foreground md:col-span-6 md:text-xl">
                  {l.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
