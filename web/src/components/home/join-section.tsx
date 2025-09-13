import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Globe } from "lucide-react"

export function JoinSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to Join Our Global Family?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
            Become part of a community that celebrates diversity, supports growth, and creates lasting connections. Your
            journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/join">
                Join ISA Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 mb-3 text-primary-foreground/80" />
              <div className="text-sm text-primary-foreground/90">Join 500+ active members</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-8 w-8 mb-3 text-primary-foreground/80" />
              <div className="text-sm text-primary-foreground/90">Connect across 50+ countries</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="h-8 w-8 mb-3 text-primary-foreground/80" />
              <div className="text-sm text-primary-foreground/90">Find your home away from home</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
