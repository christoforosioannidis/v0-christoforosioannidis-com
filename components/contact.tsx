"use client"

import { useState } from "react"
import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react"
import { SectionLabel } from "./section-label"
import { getSupabase } from "@/lib/supabase"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setError(null)
    setLoading(true)

    const fd = new FormData(e.currentTarget)
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      subject: String(fd.get("subject") || "").trim() || null,
      message: String(fd.get("message") || "").trim(),
    }

    try {
      const supabase = getSupabase()
      const { error: dbError } = await supabase
        .from("contact_messages")
        .insert(data)
      if (dbError) throw new Error(dbError.message)
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send the message. Please email directly.",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-card pb-28 pt-12 md:pb-40 md:pt-16"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="08" label="Correspondence" />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              For lectures,
              <br />
              <span className="italic text-primary/90">
                interviews & inquiries.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-pretty font-serif text-lg leading-relaxed text-foreground/75">
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

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7"
          >
            <div className="border border-border/60 bg-background/50 p-8 md:p-12">
              {submitted ? (
                <div className="flex min-h-[24rem] flex-col items-start justify-center">
                  <span className="hairline w-16" />
                  <h3 className="mt-6 font-serif text-3xl text-foreground md:text-4xl">
                    Your message has been received.
                  </h3>
                  <p className="mt-4 max-w-md font-serif text-lg italic text-foreground/70">
                    A reply will follow as soon as commitments allow.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Field id="name" label="Name" required />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      required
                    />
                  </div>
                  <Field id="subject" label="Subject / Affiliation" />
                  <FieldArea id="message" label="Message" required />

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      All correspondence is read personally.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-3 border-b border-primary/60 pb-1 font-sans text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:text-primary disabled:opacity-50"
                    >
                      {loading ? "Sending" : "Send"}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  {error && (
                    <p className="font-sans text-xs leading-relaxed text-red-400/90">
                      {error}
                    </p>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 block w-full border-0 border-b border-border/60 bg-transparent py-3 font-serif text-lg text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary"
      />
    </div>
  )
}

function FieldArea({
  id,
  label,
  required = false,
}: {
  id: string
  label: string
  required?: boolean
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        required={required}
        className="mt-2 block w-full resize-none border-0 border-b border-border/60 bg-transparent py-3 font-serif text-lg leading-relaxed text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary"
      />
    </div>
  )
}
