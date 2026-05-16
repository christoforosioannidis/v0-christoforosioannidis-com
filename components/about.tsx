import Image from "next/image"
import { SectionLabel } from "./section-label"

type TeachingPost = { name: string; current?: boolean }

const teachingPosts: TeachingPost[] = [
  { name: "Roehampton University", current: true },
  { name: "King's College London" },
  { name: "Queen Mary University of London" },
  { name: "Chulalongkorn University" },
  { name: "Central China Normal University" },
  { name: "University of Cyprus" },
  { name: "Thammasat University" },
  { name: "Cardiff Metropolitan University" },
  { name: "University of Central Lancashire" },
]

export function About() {
  return (
    <section id="about" className="relative bg-background pb-28 pt-12 md:pb-40 md:pt-20">
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
                src="/portrait.jpg"
                alt="Portrait of Dr. Christoforos Ioannidis"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top grayscale"
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
                examines the moral and political foundations of law - the
                concepts of legitimacy, authority, sovereignty, and the
                contested architecture of human rights. He currently teaches as
                Associate Professor in Law at Roehampton University and Anglia
                Ruskin University in London.
              </p>
              <p className="text-pretty">
                His scholarship draws on jurisprudence, philosophy of law,
                political philosophy, and public international law. Trained in
                Athens, Edinburgh, Arizona, and London, he has lived in six
                countries and travelled in fifty-six - an itinerant academic
                career that has informed an unmistakably cosmopolitan reading of
                the legal order.
              </p>
              <p className="text-pretty">
                Beyond the lecture hall, he has been an international conference
                speaker, co-convener of the International Graduate Legal
                Research Conference at King&rsquo;s College London, President of
                the KCL Think Tank Law Policy Centre, and - for eleven years -
                the Cyprus National Water Ski Champion, taking bronze in slalom
                at the Mediterranean Water Ski Games in El Gouna in 1996.
              </p>
            </div>

            {/* Teaching posts */}
            <div className="mt-12">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
                Teaching Posts
              </h3>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-base text-foreground/75 md:text-lg">
                {teachingPosts.map((p, i) => (
                  <li key={p.name} className="flex items-center gap-6">
                    <span>
                      {p.name}
                      {p.current && (
                        <span className="ml-2 font-sans text-[10px] uppercase tracking-[0.24em] text-primary/80">
                          Current
                        </span>
                      )}
                    </span>
                    {i < teachingPosts.length - 1 && (
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
                    <span className="text-primary/70">-</span>
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
