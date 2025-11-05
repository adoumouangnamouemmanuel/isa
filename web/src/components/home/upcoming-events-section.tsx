/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLatestUpcomingEvents } from "@/data/events";
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";

export function UpcomingEventsSection() {
  const upcomingEvents = getLatestUpcomingEvents(3);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-muted/20 via-background to-muted/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-40 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-56 h-56 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="mx-auto max-w-5xl text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 hover:scale-105 transition-transform duration-300 group">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs sm:text-sm font-bold text-primary">
              What&apos;s Happening
            </span>
            <Badge className="ml-1 sm:ml-2 bg-accent text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
              New
            </Badge>
          </div>

          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground text-balance leading-tight">
            Upcoming{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Events
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto">
            Join us for exciting events that celebrate diversity, build
            community, and support your academic and professional growth at
            Ashesi University.
          </p>
        </div>

        {/* Enhanced Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-0"
            >
              {/* Event Image with Overlay */}
              <div className="relative h-44 sm:h-52 lg:h-56 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <Badge
                    variant="secondary"
                    className="shadow-lg backdrop-blur-sm text-primary bg-white/90 hover:bg-white transition-colors font-bold text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1"
                  >
                    {event.category}
                  </Badge>
                </div>

                {/* Attendees Count */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center bg-black/60 backdrop-blur-md rounded-full px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 shadow-lg border border-white/20">
                  <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 mr-1 sm:mr-1.5 lg:mr-2 text-white" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">
                    {event.attendees}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 sm:pb-6">
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="shadow-lg hover:scale-105 transition-transform text-xs sm:text-sm h-8 sm:h-9"
                  >
                    <Link href="/events">View Details</Link>
                  </Button>
                </div>
              </div>

              {/* Card Content */}
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-balance leading-tight group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 space-y-4 sm:space-y-5 lg:space-y-6 px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-muted-foreground group-hover:text-foreground/80 text-pretty leading-relaxed text-xs sm:text-sm transition-colors duration-300">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2.5 sm:space-y-3 pt-2 border-t border-border/50">
                  <div className="flex items-start group/item">
                    <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors mr-2.5 sm:mr-3 flex-shrink-0">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground block mb-0.5">
                        Date
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-secondary/10 group-hover/item:bg-secondary/20 transition-colors mr-2.5 sm:mr-3 flex-shrink-0">
                      <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary" />
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground block mb-0.5">
                        Time
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-foreground">
                        {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors mr-2.5 sm:mr-3 flex-shrink-0">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground block mb-0.5">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-foreground">
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Accent Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="group relative text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 font-bold overflow-hidden"
          >
            <Link href="/events" className="flex items-center">
              <Calendar className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              View All Events
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
          </Button>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
            Never miss out! Subscribe to our event notifications
          </p>
        </div>
      </div>
    </section>
  );
}
