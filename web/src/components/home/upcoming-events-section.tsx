import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export function UpcomingEventsSection() {
  const upcomingEvents = [
    {
      id: 1,
      title: "International Food Festival",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Student Center Plaza",
      category: "Cultural",
      description: "Taste authentic dishes from around the world prepared by our international students.",
      attendees: 120,
    },
    {
      id: 2,
      title: "Career Workshop: Networking in the US",
      date: "March 20, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Business Building, Room 201",
      category: "Professional",
      description: "Learn effective networking strategies and build professional connections.",
      attendees: 45,
    },
    {
      id: 3,
      title: "Cultural Night: Celebrating Holi",
      date: "March 25, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "University Auditorium",
      category: "Cultural",
      description: "Join us for a vibrant celebration of the Hindu festival of colors.",
      attendees: 200,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join us for exciting events that celebrate diversity, build community, and support your academic and
            professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <span className="text-sm text-muted-foreground">{event.attendees} attending</span>
                </div>
                <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
