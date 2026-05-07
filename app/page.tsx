import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Conferences } from "@/components/conferences"
import { Teaching } from "@/components/teaching"
import { Qualifications } from "@/components/qualifications"
import { Media } from "@/components/media"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Conferences />
      <Teaching />
      <Qualifications />
      <Media />
      <Contact />
      <SiteFooter />
    </main>
  )
}
