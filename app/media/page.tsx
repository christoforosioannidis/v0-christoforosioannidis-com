import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { Media } from "@/components/media"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Media",
  description:
    "Media appearances, interviews, and public commentary by Dr. Christoforos Ioannidis.",
}

export default function MediaPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Media />
      <SiteFooter />
    </main>
  )
}
