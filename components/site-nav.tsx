"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#conferences", label: "Conferences" },
  { href: "#teaching", label: "Teaching" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Dr. Christoforos Ioannidis — Home"
        >
          <span className="font-serif text-lg italic tracking-wide text-foreground md:text-xl">
            C. Ioannidis
          </span>
          <span className="hidden h-px w-8 bg-primary/60 transition-all duration-500 group-hover:w-12 md:inline-block" />
          <span className="hidden font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:inline-block">
            PhD · Law
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border/60 text-foreground transition-colors hover:border-primary/60 hover:text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 border-t border-border/60 bg-background/95 px-6 py-6 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-serif text-xl text-foreground/90 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
