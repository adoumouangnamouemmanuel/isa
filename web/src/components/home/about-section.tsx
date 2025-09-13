import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calendar, Users, Award } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Diverse Community",
      description: "Students from over 50 countries creating a truly global community on campus.",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Weekly social events, cultural celebrations, and educational workshops.",
    },
    {
      icon: BookOpen,
      title: "Academic Support",
      description: "Study groups, tutoring services, and academic guidance from peers.",
    },
    {
      icon: Award,
      title: "Leadership Opportunities",
      description: "Develop leadership skills through committee roles and event organization.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">About ISA</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            The International Students Association has been fostering cross-cultural understanding and providing support
            to international students since 1995. We are more than just an organization – we are a family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
