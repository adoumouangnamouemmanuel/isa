import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      country: "Spain",
      program: "Computer Science",
      avatar: "/maria-rodriguez-from-spain.jpg",
      quote:
        "ISA helped me find my home away from home. The friendships I've made here will last a lifetime, and the support during my first year was invaluable.",
    },
    {
      name: "Chen Wei",
      country: "China",
      program: "Business Administration",
      avatar: "/chen-wei-from-china.jpg",
      quote:
        "Through ISA events, I've learned about so many different cultures while sharing my own. It's amazing how food and stories can bring people together.",
    },
    {
      name: "Priya Patel",
      country: "India",
      program: "Engineering",
      avatar: "/priya-patel-from-india.jpg",
      quote:
        "The career workshops and networking events organized by ISA gave me the confidence and connections I needed to land my dream internship.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hear from international students who have found their community through ISA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 text-pretty">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.program} • {testimonial.country}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
