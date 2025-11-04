"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  Image as ImageIcon,
  MapPin,
  Share2,
  Tag,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  attendees: number;
  maxAttendees: number;
  image: string;
  isUpcoming: boolean;
  organizer: string;
  tags: string[];
}

interface EventDetailModalProps {
  event: Event | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventDetailModal({
  event,
  open,
  onOpenChange,
}: EventDetailModalProps) {
  const [isSharing, setIsSharing] = useState(false);

  if (!event) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Check if event is upcoming based on actual date
  const isEventUpcoming = (eventDate: string) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const event = new Date(eventDate);
    event.setHours(0, 0, 0, 0);
    return event >= now;
  };

  const isPastEvent = !isEventUpcoming(event.date);
  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;

  const handleShareEvent = async () => {
    setIsSharing(true);

    const eventUrl = `${
      window.location.origin
    }/events?event=${encodeURIComponent(event.title)}`;
    const shareData = {
      title: event.title,
      text: `Check out this event: ${event.title} on ${formatDate(
        event.date
      )} at ${event.location}`,
      url: eventUrl,
    };

    try {
      // Try using Web Share API if available (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Shared successfully!", {
          description: "Event has been shared.",
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(
          `${shareData.title}\n\n${shareData.text}\n\n${eventUrl}`
        );
        toast.success("Link copied!", {
          description: "Event link has been copied to clipboard.",
        });
      }
    } catch (error) {
      // User cancelled share or clipboard failed
      if (error instanceof Error && error.name !== "AbortError") {
        toast.error("Unable to share", {
          description: "Please try again.",
        });
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Image */}
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge variant={event.isUpcoming ? "default" : "secondary"}>
                {event.category}
              </Badge>
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Date
                </div>
                <div className="text-foreground font-semibold">
                  {formatDate(event.date)}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Time
                </div>
                <div className="text-foreground font-semibold">
                  {event.time}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Location
                </div>
                <div className="text-foreground font-semibold">
                  {event.location}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
              <User className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Organizer
                </div>
                <div className="text-foreground font-semibold">
                  {event.organizer}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Event</h3>
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Attendance */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Attendance</h3>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {event.attendees} / {event.maxAttendees} registered
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary/60 h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Tags */}
          {event.tags.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Tag className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-muted/50 cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            {isPastEvent && (
              <Button
                asChild
                variant="default"
                className="flex-1 cursor-pointer"
              >
                <Link
                  href={`/gallery?event=${encodeURIComponent(event.title)}`}
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  View Event Photos
                </Link>
              </Button>
            )}
            {!isPastEvent && (
              <Button
                variant="outline"
                className="flex-1 cursor-pointer"
                onClick={handleShareEvent}
                disabled={isSharing}
              >
                <Share2 className="mr-2 h-4 w-4" />
                {isSharing ? "Sharing..." : "Share Event"}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
