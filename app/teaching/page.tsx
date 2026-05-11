import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { Teaching } from "@/components/teaching"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching posts and modules taught by Dr. Christoforos Ioannidis across the United Kingdom, China, Thailand, and Cyprus.",
}

export default function TeachingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Teaching />
      <SiteFooter />
    </main>
  )
}
