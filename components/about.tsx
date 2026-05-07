import Image from "next/image"
import { SectionLabel } from "./section-label"

const education = [
  {
    degree: "PhD in Laws",
    school: "King's College London",
    year: "2020",
    note: "Cyprus State Scholarship Foundation. Dissertation: Legitimacy — An Essentially Contested Concept?",
  },
  {
    degree: "MA in Philosophy",
    school: "Arizona State University",
    year: "2012",
    note: "Summa Cum Laude. GPA 3.81 / 4.",
  },
  {
    degree: "LLM in International Law",
    school: "University of Edinburgh",
    year: "2006",
  },
  {
    degree: "LLB",
    school: "National & Kapodistrian University of Athens",
    year: "2005",
    note: "10th best student place; Honorary 'Always Excel' Scholarship.",
  },
]

const formerInstitutions = [
  "Queen Mary University of London",
  "King's College London",
  "Cardiff Metropolitan University",
  "University of Central Lancashire",
  "Chulalongkorn University",
  "Thammasat University",
  "University of Cyprus",
  "Central China Normal University",
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel index="01" label="Biography" />
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              An academic life
              <br />
              <span className="italic text-primary/90">across continents.</span>
            </h2>

            <div className="relative mt-10 aspect-[3/4] w-full overflow-hidden border border-border/60">
              <Image
                src="/portrait-silhouette.jpg"
                alt="Editorial portrait silhouette"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-sm italic text-foreground/80">
                  &ldquo;Legitimacy is not a settled fact. It is the contested
                  ground on which the legal order continually justifies
                  itself.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground/85 md:text-xl">
              <p className="text-pretty">
                Dr. Christoforos Ioannidis is a legal philosopher whose work
                examines the moral and political foundations of law — the
                concepts of legitimacy, authority, sovereignty, and the
                contested architecture of human rights. He currently teaches as
                Senior Lecturer in Law at Roehampton University and Anglia
                Ruskin University in London.
              </p>
              <p className="text-pretty">
                His scholarship draws on jurisprudence, philosophy of law,
                political philosophy, and public international law. Trained in
                Athens, Edinburgh, Arizona, and London, he has lived in six
                countries and travelled in fifty-six — an itinerant academic
                career that has informed an unmistakably cosmopolitan reading of
                the legal order.
              </p>
              <p className="text-pretty">
                Beyond the lecture hall, he has been an international conference
                speaker, co-convener of the International Graduate Legal
                Research Conference at King&rsquo;s College London, President of
                the KCL Think Tank Law Policy Centre, and — for eleven years —
                the Cyprus National Water Ski Champion.
              </p>
            </div>

            {/* Education */}
            <div className="mt-16">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
                Education
              </h3>
              <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
                {education.map((e) => (
                  <li
                    key={e.degree + e.school}
                    className="grid grid-cols-12 gap-4 py-5"
                  >
                    <span className="col-span-2 font-sans text-xs tabular-nums text-muted-foreground md:text-sm">
                      {e.year}
                    </span>
                    <div className="col-span-10">
                      <div className="font-serif text-xl text-foreground md:text-2xl">
                        {e.degree}
                      </div>
                      <div className="mt-0.5 font-sans text-sm text-muted-foreground">
                        {e.school}
                      </div>
                      {e.note && (
                        <div className="mt-2 max-w-xl font-serif text-sm italic leading-relaxed text-foreground/65">
                          {e.note}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Former institutions */}
            <div className="mt-12">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
                Former Teaching Posts
              </h3>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-base text-foreground/75 md:text-lg">
                {formerInstitutions.map((inst, i) => (
                  <li key={inst} className="flex items-center gap-6">
                    <span>{inst}</span>
                    {i < formerInstitutions.length - 1 && (
                      <span className="text-primary/60">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas of expertise */}
            <div className="mt-12">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
                Areas of Expertise
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-y-2 sm:grid-cols-2">
                {[
                  "Jurisprudence",
                  "Philosophy of Law",
                  "Political Philosophy",
                  "Public International Law",
                  "Human Rights",
                  "Philosophy of Human Rights",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-baseline gap-3 font-serif text-lg text-foreground/85"
                  >
                    <span className="text-primary/70">—</span>
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
