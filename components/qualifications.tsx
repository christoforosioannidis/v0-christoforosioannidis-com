import { Award, BookOpen, Globe, Scale, ScrollText, Users } from "lucide-react"
import { SectionLabel } from "./section-label"

type Degree = {
  school: string
  degree: string
  year: string
  honors?: string
  dissertation?: { title: string; url?: string }
  grade?: string
}

const academic: Degree[] = [
  {
    school: "King's College London",
    degree: "PhD in Laws",
    year: "2020",
    honors:
      "PhD Law Scholarship from the Cyprus State Scholarship Foundation",
    dissertation: {
      title: "Legitimacy: An Essentially Contested Concept?",
      url: "https://kclpure.kcl.ac.uk/portal/en/theses/legitimacy(264becc8-2005-4ca9-bd73-0e3d72eb48e7).html",
    },
  },
  {
    school: "Arizona State University",
    degree: "MA in Philosophy",
    year: "2012",
    dissertation: {
      title:
        "Can Kelsen's Legal Positivism Account for International Regime Change?",
      url: "https://repository.asu.edu/attachments/97595/content//tmp/package-ednG6y/Ioannidis_asu_0010N_12230.pdf",
    },
    grade: "GPA 3.81 / 4 (Summa Cum Laude)",
  },
  {
    school: "University of Edinburgh",
    degree: "LLM in International Law",
    year: "2006",
    dissertation: {
      title: "Is There a Case for a Right to Die?",
    },
  },
  {
    school: "National and Kapodistrian University of Athens",
    degree: "LLB",
    year: "2005",
    honors:
      "10th best student place (2002 - 2003). Honorary Scholarship of the 2003 - 2004 'Always Excel' programme by the State Scholarship Foundation of the Hellenic Republic for distinction in studies during the academic year 2002-2003 (21 Feb. 2005).",
    grade: "7.35 / 10 ('Very Good')",
  },
]

type Professional = {
  title: string
  body: string
  meta: string
  Icon: React.ElementType
}

const professional: Professional[] = [
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
    title: "Junior Fellow - Legal & Political Theory Think Tank Programme",
    body: "Three-year fellowship at the Think Tank Programme of the Global Research Network in legal and political theory.",
    meta: "October 2019 - October 2022",
    Icon: BookOpen,
  },
  {
    title: "Academic Member - ATINER Philosophy & Law Research Units",
    body: "Academic Member of the Philosophy Research Unit and the Law Research Unit of the Athens Institute of Education and Research (ATINER).",
    meta: "From July 2014",
    Icon: Globe,
  },
  {
    title: "Lifetime Academic Member - ATINER",
    body: "Lifetime academic membership of the Athens Institute of Education and Research.",
    meta: "From December 2014 · Member GBR2014007600769",
    Icon: Award,
  },
  {
    title: "Reviewer - International Journal of Social Sciences",
    body: "Peer reviewer for the International Journal of Social Sciences across legal philosophy and political theory submissions.",
    meta: "July 2014 - Present",
    Icon: Users,
  },
  {
    title:
      "CELTA - Cambridge Certificate in English Language Teaching to Adults",
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
            <SectionLabel index="06" label="Qualifications" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Academic qualifications,
              <br />
              <span className="italic text-primary/90">
                fellowships, and standing.
              </span>
            </h2>
          </div>
          <p className="text-pretty font-serif text-lg leading-relaxed text-foreground/75 lg:col-span-4">
            Formal training across law and philosophy at King&rsquo;s College
            London, Arizona State, Edinburgh, and Athens - together with
            professional and scholarly recognitions accumulated over two
            decades.
          </p>
        </div>

        {/* Academic Qualifications */}
        <div className="mt-24">
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {academic.map((d) => (
              <li
                key={d.school + d.year}
                className="grid grid-cols-12 gap-x-6 gap-y-3 py-10"
              >
                <span className="col-span-12 font-sans text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2">
                  {d.year}
                </span>
                <div className="col-span-12 space-y-5 md:col-span-10">
                  <div>
                    <h4 className="font-serif text-2xl leading-tight text-foreground md:text-3xl">
                      {d.degree}
                    </h4>
                    <p className="mt-1 font-serif text-base italic text-foreground/75 md:text-lg">
                      {d.school}
                    </p>
                  </div>

                  {d.honors && (
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                        Honors
                      </span>
                      <p className="mt-2 max-w-3xl font-serif text-base leading-relaxed text-foreground/85 md:text-lg">
                        {d.honors}
                      </p>
                    </div>
                  )}

                  {d.dissertation && (
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                        Dissertation
                      </span>
                      <p className="mt-2 max-w-3xl font-serif text-base italic leading-relaxed text-foreground/85 md:text-lg">
                        {d.dissertation.url ? (
                          <a
                            href={d.dissertation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                          >
                            {d.dissertation.title}
                          </a>
                        ) : (
                          d.dissertation.title
                        )}
                      </p>
                    </div>
                  )}

                  {d.grade && (
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                        Grade
                      </span>
                      <p className="mt-2 font-serif text-base text-foreground/85 md:text-lg">
                        {d.grade}
                      </p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Qualifications */}
        <div className="mt-24">
          <div className="flex items-center gap-4">
            <span className="hairline w-12" />
            <h3 className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
              Professional Qualifications
            </h3>
            <span className="hairline flex-1" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-2">
            {professional.map((q) => (
              <article
                key={q.title}
                className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 flex-none items-center justify-center border border-primary/40 text-primary">
                    <q.Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-balance font-serif text-xl leading-snug text-foreground md:text-2xl">
                      {q.title}
                    </h4>
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
