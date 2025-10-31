"use client";

import { EventCard } from "@/components/events/event-card";
import { EventDetailModal } from "@/components/events/event-detail-modal";
import { Badge } from "@/components/ui/badge";
import { useEventFilters } from "@/contexts/event-filter-context";
import { events } from "@/data/events";
import { useMemo, useState } from "react";

export function EventsList() {
  const { filters } = useEventFilters();
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewEvent = (event: (typeof events)[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Filter events based on filters
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Category filter
      if (filters.category !== "All" && event.category !== filters.category) {
        return false;
      }

      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(query);
        const matchesDescription = event.description
          .toLowerCase()
          .includes(query);
        const matchesLocation = event.location.toLowerCase().includes(query);
        const matchesTags = event.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );
        if (
          !matchesTitle &&
          !matchesDescription &&
          !matchesLocation &&
          !matchesTags
        ) {
          return false;
        }
      }

      // Time filter
      if (filters.timeFilter === "Upcoming" && !event.isUpcoming) {
        return false;
      }
      if (filters.timeFilter === "Past Events" && event.isUpcoming) {
        return false;
      }
      if (filters.timeFilter === "This Month") {
        const eventDate = new Date(event.date);
        const now = new Date();
        const isThisMonth =
          eventDate.getMonth() === now.getMonth() &&
          eventDate.getFullYear() === now.getFullYear();
        if (!isThisMonth) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const upcomingEvents = filteredEvents.filter((event) => event.isUpcoming);
  const pastEvents = filteredEvents.filter((event) => !event.isUpcoming);

  return (
    <div className="space-y-12">
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-3">
            <h2 className="text-2xl font-bold text-foreground">
              Upcoming Events
            </h2>
            <Badge variant="default" className="text-sm">
              {upcomingEvents.length}{" "}
              {upcomingEvents.length === 1 ? "event" : "events"}
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in-up"
              >
                <EventCard event={event} onViewDetails={handleViewEvent} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-3">
            <h2 className="text-2xl font-bold text-foreground">Past Events</h2>
            <Badge variant="secondary" className="text-sm">
              {pastEvents.length} {pastEvents.length === 1 ? "event" : "events"}
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in-up"
              >
                <EventCard event={event} onViewDetails={handleViewEvent} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Event Detail Modal */}
      <EventDetailModal
        event={selectedEvent}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      {/* Empty State */}
      {upcomingEvents.length === 0 && pastEvents.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
            <span className="text-3xl">📅</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No events found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or check back later for new events.
          </p>
        </div>
      )}
    </div>
  );
}
