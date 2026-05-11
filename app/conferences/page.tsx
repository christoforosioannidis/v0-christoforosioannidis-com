import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { Conferences } from "@/components/conferences"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Conference presentations and lectures by Dr. Christoforos Ioannidis.",
}

export default function ConferencesPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Conferences />
      <SiteFooter />
    </main>
  )
}
