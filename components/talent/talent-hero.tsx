"use client"

import { Button } from "@/components/ui/button"

export function TalentHero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight text-balance">
          The reverse job board for Tampa Bay{"'"}s{" "}
          <span className="text-primary">AWS Developer Community</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto text-pretty">
          Stop chasing job listings. Create a profile, showcase your cloud
          skills, and let Tampa Bay companies come to you.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="font-semibold px-8">
            Get Listed
          </Button>
          <Button size="lg" variant="outline" className="font-semibold px-8 bg-transparent" asChild>
            <a href="#developers">Browse Developers</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-secondary-foreground/50">
          10 developers and growing. Free for developers, always.
        </p>
      </div>
    </section>
  )
}
