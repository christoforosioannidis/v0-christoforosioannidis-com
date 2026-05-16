export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-serif text-3xl text-foreground md:text-4xl">
              Dr. Christoforos Ioannidis
            </div>
            <div className="mt-3 font-sans text-[11px] uppercase tracking-[0.32em] text-primary">
              Law · Philosophy · Power
            </div>
            <p className="mt-8 max-w-md text-pretty font-serif text-base italic leading-relaxed text-foreground/65">
              &ldquo;Some concepts are not waiting to be solved. They are
              waiting to be argued, again and again, in better
              company.&rdquo;
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
              Index
            </div>
            <ul className="mt-5 space-y-3 font-serif text-base text-foreground/80">
              <li><a href="/#about" className="hover:text-primary">About</a></li>
              <li><a href="/#research" className="hover:text-primary">Research</a></li>
              <li><a href="/publications" className="hover:text-primary">Publications</a></li>
              <li><a href="/conferences" className="hover:text-primary">Conferences</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-[0.28em] text-primary">
              Continued
            </div>
            <ul className="mt-5 space-y-3 font-serif text-base text-foreground/80">
              <li><a href="/teaching" className="hover:text-primary">Teaching</a></li>
              <li><a href="/qualifications" className="hover:text-primary">Qualifications</a></li>
              <li><a href="/media" className="hover:text-primary">Media</a></li>
              <li><a href="/#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            © {year} Dr. Christoforos Ioannidis. All rights reserved.
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            London · Athens · Nicosia
          </p>
        </div>
      </div>
    </footer>
  )
}
