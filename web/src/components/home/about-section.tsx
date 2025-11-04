import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Calendar,
  Globe2,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Globe2,
      title: "Cultural Diversity",
      description:
        "We celebrate the beauty of our differences by bringing together students from across the world. ISA creates a vibrant space where every culture is valued, shared, and respected.",
      gradient: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
      accentColor: "from-primary/30 to-primary/5",
    },
    {
      icon: Users,
      title: "Community & Support",
      description:
        "ISA is more than an association; it's a family. We provide guidance, friendship, and resources to help international students adapt and thrive at Ashesi and beyond.",
      gradient: "from-secondary/20 to-secondary/10",
      iconColor: "text-secondary",
      accentColor: "from-secondary/30 to-secondary/5",
    },
    {
      icon: Calendar,
      title: "Engagement & Events",
      description:
        "From cultural nights to educational trips, ISA organizes activities that connect students, promote understanding, and create unforgettable experiences.",
      gradient: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
      accentColor: "from-accent/30 to-accent/5",
    },
    {
      icon: Award,
      title: "Leadership & Impact",
      description:
        "We empower international students to lead with purpose, advocate for inclusivity, and contribute meaningfully to both the Ashesi community and the world.",
      gradient: "from-primary/20 to-secondary/10",
      iconColor: "text-primary",
      accentColor: "from-primary/30 to-secondary/5",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-56 h-56 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="mx-auto max-w-5xl text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 px-8 py-3.5 text-sm font-bold text-primary mb-10 shadow-lg border border-primary/20 hover:scale-105 transition-transform duration-300 group">
            <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            About Our Community
            <Globe2 className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-700" />
          </div>

          <h2 className="mb-10 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance leading-[1.1]">
            ISA at{" "}
            <span className="relative inline-block group/title">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Ashesi
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10 group-hover/title:blur-3xl transition-all duration-500"></div>
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto">
            The International Students Association is a vibrant community
            dedicated to fostering cross-cultural understanding and empowering
            international students at Ashesi University. We are more than just
            an organization – we are a{" "}
            <span className="relative inline-block font-bold text-primary group/family">
              family
              <span className="absolute -inset-1 bg-primary/10 blur-lg -z-10 group-hover/family:bg-primary/20 transition-colors block"></span>
            </span>{" "}
            that celebrates diversity, provides unwavering support, and creates
            lasting connections across cultures.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-muted/60 border border-border/50 hover:border-primary/50 transition-colors duration-300 group">
              <Target className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-foreground">
                Mission-Driven
              </span>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-muted/60 border border-border/50 hover:border-secondary/50 transition-colors duration-300 group">
              <Zap className="h-4 w-4 text-secondary group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-semibold text-foreground">
                Impact-Focused
              </span>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-muted/60 border border-border/50 hover:border-accent/50 transition-colors duration-300 group">
              <Globe2 className="h-4 w-4 text-accent group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-semibold text-foreground">
                Globally Connected
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative border-0 shadow-xl hover:shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Accent Border on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>

                <CardContent className="relative p-8 lg:p-10 text-center">
                  {/* Enhanced Icon Container */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.iconColor} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-2xl`}
                      >
                        <Icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}
                      ></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <Icon className="h-24 w-24 text-foreground" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
