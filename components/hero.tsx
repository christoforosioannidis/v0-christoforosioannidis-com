import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-library.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.65) 45%, rgba(11,11,12,0.95) 100%)",
          }}
        />
      </div>

      {/* Top meta strip */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-10 mx-auto flex max-w-7xl items-center justify-between px-6 md:top-28 md:px-10">
        <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Est. London · Cyprus · Athens
        </span>
        <span className="hidden font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground md:inline">
          Vol. I - A Public Record
        </span>
      </div>

      {/* Portrait - upper right (lg+) */}
      <div className="pointer-events-none absolute right-6 top-36 z-10 hidden w-[240px] overflow-hidden border border-border/60 md:right-10 md:top-40 lg:block xl:w-[280px]">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/portrait-hero.jpg"
            alt="Portrait of Dr. Christoforos Ioannidis"
            fill
            sizes="(min-width: 1280px) 280px, 240px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <span className="hairline w-12" />
              <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary">
                Dr. Christoforos Ioannidis
              </span>
            </div>

            <h1 className="animate-fade-up text-balance font-serif text-[clamp(3rem,9vw,8rem)] font-light leading-[0.92] tracking-[-0.02em] text-foreground">
              Law.{" "}
              <span className="italic text-primary/90">Philosophy.</span>
              <br />
              Civilization.
            </h1>

            <p className="mt-10 max-w-2xl text-pretty font-serif text-xl leading-relaxed text-foreground/80 md:text-2xl">
              A legal philosopher and academic working at the intersection of
              jurisprudence, international law, political philosophy, and human
              rights - examining the foundations of legitimacy, sovereignty, and
              the order of civilizations.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#research"
                className="group inline-flex items-center gap-3 border-b border-primary/60 pb-1 font-sans text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:text-primary"
              >
                Explore Work
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="font-sans text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Biography
              </a>
              <a
                href="/conferences"
                className="font-sans text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Lectures
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pb-2">
            <div className="border-l border-border/60 pl-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Currently
              </p>
              <p className="mt-3 font-serif text-lg italic leading-relaxed text-foreground/90">
                Associate Professor in Law - Roehampton University &amp; Anglia
                Ruskin University, London.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Stat n="6" label="Countries Lived" />
                <Stat n="56" label="Countries Travelled" />
                <Stat n="11" label="Years National Water Ski Champion" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
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
