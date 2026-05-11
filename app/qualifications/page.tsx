import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { Qualifications } from "@/components/qualifications"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Qualifications",
  description:
    "Academic qualifications, fellowships, and professional credentials of Dr. Christoforos Ioannidis.",
}

export default function QualificationsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Qualifications />
      <SiteFooter />
    </main>
  )
}
