import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"
import { SectionLabel } from "./section-label"

type Conference = {
  year: string
  date: string
  title: string
  event: string
  city: string
  country: string
  href?: string
  award?: string
  role?: string
}

const conferences: Conference[] = [
  {
    year: "2023",
    date: "Jan 16",
    title: "The Use of Force and International Law",
    event: "Brunel University Law School",
    city: "London",
    country: "United Kingdom",
    href: "https://www.youtube.com/watch?v=NmIuQ5l_Ovo",
    role: "Conference contribution",
  },
  {
    year: "2017",
    date: "Jun 8 – 11",
    title: "On Identity of States: What is Sovereignty in a Post-Human Rights Era?",
    event: "Asian Conference on Social Sciences (IAFOR)",
    city: "Kobe",
    country: "Japan",
    href: "https://papers.iafor.org/submission34479/",
    award: "Awarded the IAFOR Scholarship",
  },
  {
    year: "2016",
    date: "Apr 4 – 5",
    title: "Legitimacy of the International Human Rights System in a Transnational Context",
    event: "10th International Graduate Legal Research Conference",
    city: "London",
    country: "King's College London",
  },
  {
    year: "2015",
    date: "Jan 29 – 30",
    title: "In Quest of the Standard of Legitimacy of International Law",
    event: "University of Copenhagen Postgraduate Law Conference",
    city: "Copenhagen",
    country: "Denmark",
  },
  {
    year: "2014",
    date: "Oct 25 – 31",
    title: "Expanding Access to Elite University Teaching",
    event: "1st Dialogue: KCL Think Tank × AISES",
    city: "Rome",
    country: "Italy",
    role: "Selected delegate (3 of 106 applicants)",
  },
  {
    year: "2014",
    date: "Sep 15 – 18",
    title: "Popular Sovereignty as a Requirement of Statehood",
    event: "International Institute of Social and Economic Sciences",
    city: "Antibes",
    country: "France",
    role: "Panel chair",
  },
  {
    year: "2014",
    date: "Jun 24 – 27",
    title: "Popular Sovereignty as a Requirement of Statehood",
    event: "International Institute of Social and Economic Sciences",
    city: "Reykjavík",
    country: "Iceland",
    role: "Panel chair",
  },
  {
    year: "2014",
    date: "Jul 14 – 17",
    title: "An Argument in Favor of Popular Sovereignty as a Requirement of Statehood",
    event: "11th Annual International Conference of Law",
    city: "Athens",
    country: "Greece",
  },
  {
    year: "2014",
    date: "Jun 30 – Jul 3",
    title: "An Argument in Favor of Popular Sovereignty as a Requirement of Statehood",
    event: "International Journal of Arts & Sciences",
    city: "Venice",
    country: "Italy",
  },
  {
    year: "2014",
    date: "Jun 16 – 19",
    title: "An Argument in Favor of Popular Sovereignty as a Requirement of Statehood",
    event: "International Journal of Arts & Sciences",
    city: "Barcelona",
    country: "Spain",
  },
  {
    year: "2014",
    date: "May 30 – Jun 1",
    title: "The Legacy of Ronald Dworkin",
    event: "McMaster Philosophy of Law Conference",
    city: "Burlington, Ontario",
    country: "Canada",
    role: "Attendee",
  },
  {
    year: "2014",
    date: "May 28 – 29",
    title: "Are the Conditions for Statehood Sufficient?",
    event: "Ontario Legal Philosophy Partnership Conference, McMaster University",
    city: "Hamilton, Ontario",
    country: "Canada",
  },
  {
    year: "2014",
    date: "May 16 – 17",
    title: "Are the Conditions for Statehood Sufficient?",
    event: "Challenges of the Knowledge Society Conference",
    city: "Bucharest",
    country: "Romania",
  },
  {
    year: "2014",
    date: "Apr 26 – 27",
    title: "Are the Conditions of Statehood Sufficient?",
    event: "International Academic Conference on Law and Politics",
    city: "Istanbul",
    country: "Türkiye",
    award: "Best Presentation Award",
    role: "Chaired Session III: Law & Politics",
  },
  {
    year: "2014",
    date: "Apr 3 – 4",
    title: "Popular Sovereignty as a Condition for Statehood",
    event: "Newcastle Law School PGR Conference",
    city: "Newcastle",
    country: "United Kingdom",
  },
  {
    year: "2014",
    date: "Mar 25 – 26",
    title: "Social Causes and Social Beliefs: Can Art International Make Us Reason?",
    event: "International Conference on Social Sciences (IKM)",
    city: "Colombo",
    country: "Sri Lanka",
  },
  {
    year: "2014",
    date: "Feb 21 – 22",
    title: "Social Causes and the Pursuit of Social Beliefs: Is There a Neutral Start?",
    event: "Second Euroacademia Global Forum of Critical Studies",
    city: "Prague",
    country: "Czech Republic",
  },
  {
    year: "2011",
    date: "May 28 – 29",
    title: "Fundamental Individual Rights and Cultural Diversity: Controversy?",
    event: "4th Postgraduate Conference of Law and Philosophy",
    city: "Stirling",
    country: "United Kingdom",
  },
]

export function Conferences() {
  // Group by year
  const grouped = conferences.reduce<Record<string, Conference[]>>((acc, c) => {
    ;(acc[c.year] ||= []).push(c)
    return acc
  }, {})
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a))

  const totalCountries = new Set(conferences.map((c) => c.country)).size

  return (
    <section
      id="conferences"
      className="relative overflow-hidden bg-background py-28 md:py-40"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.07]">
        <Image
          src="/lecture-hall.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="04" label="Conferences & Lectures" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              A record of the rooms
              <br />
              <span className="italic text-primary/90">
                where the work was tested.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-6 border-l border-border/60 pl-6">
              <Stat n={conferences.length.toString()} label="Presentations" />
              <Stat n={totalCountries.toString()} label="Countries" />
              <Stat n="2" label="Awards" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 space-y-16">
          {years.map((year) => (
            <div
              key={year}
              className="grid grid-cols-1 gap-8 border-t border-border/60 pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-3">
                <div className="sticky top-28">
                  <div className="font-serif text-6xl font-light leading-none text-primary/90 md:text-7xl">
                    {year}
                  </div>
                  <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {grouped[year].length}{" "}
                    {grouped[year].length === 1 ? "appearance" : "appearances"}
                  </p>
                </div>
              </div>

              <ul className="lg:col-span-9 lg:divide-y lg:divide-border/60">
                {grouped[year].map((c, i) => {
                  const Wrapper: React.ElementType = c.href ? "a" : "div"
                  const wrapperProps = c.href
                    ? {
                        href: c.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {}
                  return (
                    <li key={c.title + i}>
                      <Wrapper
                        {...wrapperProps}
                        className="group grid grid-cols-12 gap-x-6 gap-y-3 py-6 transition-colors hover:bg-card/40 lg:py-8"
                      >
                        <span className="col-span-12 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:col-span-3">
                          {c.date}
                        </span>
                        <div className="col-span-12 md:col-span-9">
                          <h3 className="text-balance font-serif text-xl leading-snug text-foreground md:text-[1.6rem] md:leading-[1.2]">
                            {c.title}
                          </h3>
                          <p className="mt-2 font-serif text-base italic text-foreground/70">
                            {c.event}
                          </p>
                          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3 w-3 text-primary/70" />
                              {c.city}, {c.country}
                            </span>
                            {c.role && (
                              <span className="text-foreground/70">
                                · {c.role}
                              </span>
                            )}
                            {c.award && (
                              <span className="border border-primary/50 px-2 py-0.5 text-primary">
                                {c.award}
                              </span>
                            )}
                            {c.href && (
                              <span className="inline-flex items-center gap-1 text-foreground/70 transition-colors group-hover:text-primary">
                                Watch / Read
                                <ArrowUpRight className="h-3 w-3" />
                              </span>
                            )}
                          </div>
                        </div>
                      </Wrapper>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-primary/90">{n}</div>
      <div className="mt-1 font-sans text-[9px] uppercase leading-tight tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
