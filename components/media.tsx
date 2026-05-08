import { ArrowUpRight, Mic, PlayCircle, FileText, BookMarked } from "lucide-react"
import { SectionLabel } from "./section-label"

type Item = {
  kind: "Lecture" | "Essay" | "Interview" | "Forthcoming"
  title: string
  outlet: string
  year: string
  href?: string
  Icon: React.ElementType
}

const items: Item[] = [
  {
    kind: "Lecture",
    title: "The Use of Force and International Law",
    outlet: "Brunel University Law School · Recorded Lecture",
    year: "2023",
    href: "https://www.youtube.com/watch?v=NmIuQ5l_Ovo",
    Icon: PlayCircle,
  },
  {
    kind: "Essay",
    title: "On Identity of States: What is Sovereignty in a Post-Human Rights Era?",
    outlet: "IAFOR Papers · Asian Conference on Social Sciences",
    year: "2017",
    href: "https://papers.iafor.org/submission34479/",
    Icon: FileText,
  },
  {
    kind: "Forthcoming",
    title: "The Pseudo-Problem of Authority",
    outlet: "A book-length argument · in preparation",
    year: "-",
    Icon: BookMarked,
  },
  {
    kind: "Forthcoming",
    title: "Long-form interviews & podcast appearances",
    outlet: "Conversations on jurisprudence, sovereignty & the philosophy of rights",
    year: "-",
    Icon: Mic,
  },
]

export function Media() {
  return (
    <section
      id="media"
      className="relative bg-background py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="07" label="Media & Public Work" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Lectures, essays
              <br />
              <span className="italic text-primary/90">
                & forthcoming work.
              </span>
            </h2>
          </div>
          <p className="text-pretty font-serif text-lg leading-relaxed text-foreground/75 lg:col-span-4">
            A growing archive of public-facing scholarship: recorded lectures,
            published essays, interviews, and writing in preparation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-2">
          {items.map((item) => {
            const Wrapper: React.ElementType = item.href ? "a" : "div"
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {}
            return (
              <Wrapper
                key={item.title}
                {...wrapperProps}
                className="group relative flex min-h-[18rem] flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-card md:p-12"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-primary/40 text-primary">
                    <item.Icon className="h-4 w-4" />
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
                    {item.kind} · {item.year}
                  </span>
                </div>
                <div className="mt-12">
                  <h3 className="text-balance font-serif text-2xl leading-tight text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-serif text-base italic text-foreground/65">
                    {item.outlet}
                  </p>
                  <div className="mt-8 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-foreground/80 transition-colors group-hover:text-primary">
                    {item.href ? "View" : "Coming soon"}
                    {item.href && (
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
