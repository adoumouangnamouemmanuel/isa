import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Event } from "@/data/events";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  event: Event;
  onViewDetails?: (event: Event) => void;
  isPastEvent?: boolean;
}

export function EventCard({
  event,
  onViewDetails,
  isPastEvent = false,
}: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    };
  };

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;
  const dateInfo = formatDate(event.date);

  return (
    <Card
      className={cn(
        "group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30",
        isPastEvent && "opacity-75"
      )}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        <Image
          src={event.image || `/placeholder.svg`}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-background/95 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center shadow-md">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              {dateInfo.month} {dateInfo.day}
            </span>
          </div>
        </div>

        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <Badge
            variant={isPastEvent ? "secondary" : "default"}
            className="text-[10px] sm:text-xs"
          >
            {event.category}
          </Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-2">
            {event.title}
          </h3>
        </div>
      </div>

      <CardContent className="p-3 sm:p-4">
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span>
              {event.attendees}/{event.maxAttendees} attendees
            </span>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-primary/60 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
            />
          </div>
        </div>

        <Button
          variant={isPastEvent ? "outline" : "default"}
          className="w-full cursor-pointer text-xs sm:text-sm h-9 sm:h-10"
          onClick={() => onViewDetails?.(event)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
