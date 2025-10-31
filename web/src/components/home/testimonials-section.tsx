import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emmanuel Adoum",
      country: "Chad",
      program: "Computer Engineering",
      avatar: "/emmanuel-jpg.jpg",
      quote:
        "Leading ISA has been one of the most rewarding experiences of my life. Seeing our community grow and watching international students thrive at Ashesi motivates me every day. We're not just building an association; we're building a family.",
      rating: 5,
      year: "President - Class of 2027",
    },
    {
      name: "Adelard Borauzima",
      country: "DR Congo",
      program: "Computer Science",
      avatar: "/executives_pictures/Adelard.jpg",
      quote:
        "Managing ISA finances has taught me more than just numbers—it's about ensuring every member has access to opportunities. ISA gave me a platform to serve my community and develop leadership skills I'll carry forever.",
      rating: 5,
      year: "Treasurer - Class of 2027",
    },
    {
      name: "Bachira Mamane",
      country: "Niger",
      program: "Business Administration",
      avatar: "/executives_pictures/bachira.jpg",
      quote:
        "Organizing events that bring our diverse community together is my passion. From cultural nights to professional workshops, every event is a celebration of who we are. ISA transformed my university experience into something truly special.",
      rating: 5,
      year: "Event Organizer - Class of 2027",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              Member Stories
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
            What Our Members{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Hear from international students who have found their community and
            transformed their Ashesi experience through ISA.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              4.9/5 from 200+ members
            </span>
          </div>
        </div>

        {/* Enhanced Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative border-0 shadow-lg hover:shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="relative p-6 lg:p-8">
                {/* Quote Icon */}
                <div className="relative mb-6">
                  <Quote className="h-10 w-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                  <div className="absolute -top-1 -left-1">
                    <Quote className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-muted-foreground group-hover:text-foreground/90 mb-6 text-pretty leading-relaxed transition-colors duration-300 text-sm lg:text-base">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Member Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-14 w-14 border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1 border-2 border-card">
                      <Heart className="h-3 w-3 text-white fill-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {testimonial.program}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center space-x-2 mt-1">
                      <span>{testimonial.country}</span>
                      <span>•</span>
                      <span>{testimonial.year}</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <Quote className="h-20 w-20 text-foreground" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            Want to share your story?{" "}
            <a
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
