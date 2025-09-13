import { EventsHeader } from "@/components/events/events-header"
import { EventsFilter } from "@/components/events/events-filter"
import { EventsList } from "@/components/events/events-list"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <EventsHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EventsFilter />
        <EventsList />
      </div>
    </div>
  )
}
