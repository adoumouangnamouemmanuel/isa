import { EventsFilter } from "@/components/events/events-filter";
import { EventsHeader } from "@/components/events/events-header";
import { EventsList } from "@/components/events/events-list";
import { EventFilterProvider } from "@/contexts/event-filter-context";

export const metadata = {
  title: "Events | ISA",
  description:
    "Discover upcoming ISA events, cultural celebrations, and social gatherings",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <EventsHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EventFilterProvider>
          <EventsFilter />
          <EventsList />
        </EventFilterProvider>
      </div>
    </div>
  );
}
