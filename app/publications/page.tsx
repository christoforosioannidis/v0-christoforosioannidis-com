import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { Publications } from "@/components/publications"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Dr. Christoforos Ioannidis on jurisprudence, international law, and political philosophy.",
}

export default function PublicationsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Publications />
      <SiteFooter />
    </main>
  )
}
