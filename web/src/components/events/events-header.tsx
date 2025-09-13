import { Calendar, Users, MapPin } from "lucide-react"

export function EventsHeader() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            ISA Events
          </h1>
          <p className="mb-8 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover upcoming events, cultural celebrations, workshops, and social gatherings that bring our
            international community together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">100+ Events</h3>
              <p className="text-xs text-muted-foreground">Per academic year</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">500+ Attendees</h3>
              <p className="text-xs text-muted-foreground">Active participants</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Multiple Venues</h3>
              <p className="text-xs text-muted-foreground">On and off campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
