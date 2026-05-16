import { SectionLabel } from "./section-label"

type Post = {
  years: string
  institution: string
  city: string
  role: string
  modules: string[]
}

const posts: Post[] = [
  {
    years: "Jul 2025 - Present",
    institution: "Roehampton University",
    city: "London",
    role: "Associate Professor in Law",
    modules: [
      "International Human Rights (Module Leader)",
      "Equity & Trusts (Module Leader)",
    ],
  },
  {
    years: "Jul 2025 - Present",
    institution: "Anglia Ruskin University",
    city: "London",
    role: "Associate Professor in Law",
    modules: [
      "Public & EU Law (Module Leader)",
      "Law of Obligations - Contract & Tort (Module Leader)",
      "Commercial Law",
    ],
  },
  {
    years: "Jan 2024 - Apr 2025",
    institution: "Cardiff Metropolitan University",
    city: "Cardiff",
    role: "Lecturer in Law",
    modules: [
      "Contemporary Business & Consumer Protection Law",
      "Constitutional Law",
      "Business Obligations - Contract & Tort",
      "Research, Innovation & Enterprise",
      "Law in Practice & Digital Legal Innovation",
      "Applied Skills in Advocacy",
      "International Trade Law (MSc Supply Chain)",
    ],
  },
  {
    years: "Jan 2023 - Jan 2024",
    institution: "University of Central Lancashire",
    city: "Preston",
    role: "Lecturer in Law",
    modules: [
      "Equity & Trusts (UG & GDL)",
      "EU Law (UG & GDL)",
      "Social Justice & Law",
      "Alternative Dispute Resolution",
    ],
  },
  {
    years: "Dec 2021 - Dec 2022",
    institution: "Thammasat University",
    city: "Bangkok",
    role: "Lecturer, English for Academic Purposes",
    modules: ["EAP Law", "EAP Political Science", "EAP Sociology & Anthropology"],
  },
  {
    years: "Sep 2020 - Dec 2020",
    institution: "University of Cyprus",
    city: "Nicosia",
    role: "Visiting Lecturer in Law & Philosophy",
    modules: ["Legal Ethics (Module Leader)", "Ancient Moral Philosophy (BSc Philosophy)"],
  },
  {
    years: "Oct 2017 - Dec 2019",
    institution: "Queen Mary University of London",
    city: "London",
    role: "Visiting Lecturer in Law",
    modules: ["Jurisprudence & Legal Theory", "Law in Context"],
  },
  {
    years: "Feb 2019",
    institution: "King's College London",
    city: "London",
    role: "Visiting Lecturer in Law",
    modules: ["Law and Social Theory"],
  },
  {
    years: "Jan 2016 - Sep 2017",
    institution: "Central China Normal University",
    city: "Wuhan",
    role: "Lecturer in Law",
    modules: [
      "International Human Rights Law",
      "International Commercial Law",
      "International Commercial Arbitration",
      "Coach - Willem C. Vis East Moot Team (Hong Kong, 2016)",
    ],
  },
  {
    years: "Mar 2015 - Jan 2016",
    institution: "Jianghan University",
    city: "Wuhan",
    role: "Lecturer in Law",
    modules: ["International Commercial Law", "Western Civilization"],
  },
]

export function Teaching() {
  return (
    <section id="teaching" className="relative bg-card py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="05" label="Teaching" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Two decades
              <br />
              <span className="italic text-primary/90">in the lecture hall.</span>
            </h2>
          </div>
          <p className="text-pretty font-serif text-lg leading-relaxed text-foreground/75 lg:col-span-4">
            Across the United Kingdom, China, Thailand, and Cyprus - at every
            level from undergraduate law to MBA, GDL, MSc, and graduate
            philosophy.
          </p>
        </div>

        <ol className="mt-20 space-y-px overflow-hidden border border-border/60 bg-border/60">
          {posts.map((p) => (
            <li
              key={p.institution + p.years}
              className="grid grid-cols-12 gap-x-6 gap-y-4 bg-card p-8 transition-colors duration-500 hover:bg-background md:p-10"
            >
              <div className="col-span-12 md:col-span-3">
                <div className="font-sans text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {p.years}
                </div>
                <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                  {p.city}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-serif text-2xl leading-tight text-foreground md:text-3xl">
                  {p.institution}
                </h3>
                <p className="mt-2 font-serif text-base italic text-foreground/70">
                  {p.role}
                </p>
              </div>
              <ul className="col-span-12 md:col-span-4">
                {p.modules.map((m) => (
                  <li
                    key={m}
                    className="flex items-baseline gap-3 font-serif text-[15px] leading-relaxed text-foreground/80"
                  >
                    <span className="text-primary/60">-</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
