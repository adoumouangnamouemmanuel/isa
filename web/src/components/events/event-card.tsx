import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  description: string
  attendees: number
  maxAttendees: number
  image: string
  isUpcoming: boolean
  organizer: string
  tags: string[]
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100

  return (
    <Card className={cn("hover:shadow-lg transition-shadow", !event.isUpcoming && "opacity-75")}>
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={event.image || "/placeholder.svg?height=200&width=400"}
            alt={event.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3">
            <Badge variant={event.isUpcoming ? "default" : "secondary"}>{event.category}</Badge>
          </div>
          {!event.isUpcoming && (
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-background/80">
                Past Event
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">{event.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm text-pretty">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="mr-2 h-4 w-4" />
            {event.organizer}
          </div>
        </div>

        {/* Attendance */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground flex items-center">
              <Users className="mr-1 h-4 w-4" />
              Attendees
            </span>
            <span className="text-foreground font-medium">
              {event.attendees}/{event.maxAttendees}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {event.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{event.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Button */}
        {event.isUpcoming ? (
          <Button className="w-full" disabled={event.attendees >= event.maxAttendees}>
            {event.attendees >= event.maxAttendees ? "Event Full" : "Register"}
          </Button>
        ) : (
          <Button variant="outline" className="w-full bg-transparent">
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
