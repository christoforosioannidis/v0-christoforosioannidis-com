import { Mail, Linkedin, MapPin } from "lucide-react"
import { SectionLabel } from "./section-label"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-card pb-28 pt-12 md:pb-40 md:pt-16"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <SectionLabel label="Correspondence" />
          <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            For lectures,
            <br />
            <span className="italic text-primary/90">
              interviews & inquiries.
            </span>
          </h2>
          <p className="mt-8 text-pretty font-serif text-lg leading-relaxed text-foreground/75">
            I welcome correspondence regarding keynote lectures, academic
            collaborations, podcast interviews, doctoral supervision
            inquiries, and matters of mediation.
          </p>

          <div className="mt-12 space-y-5">
            <a
              href="mailto:i.christoforos@googlemail.com"
              className="group flex items-center gap-4"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                i.christoforos@googlemail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/christoforos-ioannidis-ph-d-law-7628442b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              <span className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                LinkedIn - Christoforos Ioannidis, PhD
              </span>
            </a>
            <div className="flex items-center gap-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-serif text-lg text-foreground/85">
                London, United Kingdom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
