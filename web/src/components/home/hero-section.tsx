import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Hero Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-sm">
            <Globe className="mr-2 h-4 w-4 text-primary" />
            Connecting Students Worldwide
          </div>

          {/* Hero Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              International Students Association
            </span>
          </h1>

          {/* Hero Description */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl text-pretty max-w-3xl mx-auto">
            Building bridges across cultures, creating lasting friendships, and supporting international students
            throughout their academic journey. Join our vibrant community today.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/join">
                Join ISA Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>

          {/* Hero Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Community</h3>
              <p className="text-sm text-muted-foreground">
                Connect with students from over 50 countries and build lifelong friendships.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Cultural Exchange</h3>
              <p className="text-sm text-muted-foreground">
                Experience diverse cultures through events, festivals, and shared experiences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help with academics, visa issues, and adapting to life in a new country.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
