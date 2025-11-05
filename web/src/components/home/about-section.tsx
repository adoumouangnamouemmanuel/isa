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
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-accent/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="mx-auto max-w-5xl text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3.5 text-xs sm:text-sm font-bold text-primary mb-6 sm:mb-8 lg:mb-10 shadow-lg border border-primary/20 hover:scale-105 transition-transform duration-300 group">
            <Sparkles className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:rotate-180 transition-transform duration-500" />
            About Our Community
            <Globe2 className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:rotate-180 transition-transform duration-700" />
          </div>

          <h2 className="mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight text-foreground text-balance leading-[1.1]">
            ISA at{" "}
            <span className="relative inline-block group/title">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Ashesi
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10 group-hover/title:blur-3xl transition-all duration-500"></div>
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-12">
            <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 rounded-full bg-muted/60 border border-border/50 hover:border-primary/50 transition-colors duration-300 group">
              <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Mission-Driven
              </span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 rounded-full bg-muted/60 border border-border/50 hover:border-secondary/50 transition-colors duration-300 group">
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Impact-Focused
              </span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 rounded-full bg-muted/60 border border-border/50 hover:border-accent/50 transition-colors duration-300 group">
              <Globe2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Globally Connected
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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

                <CardContent className="relative p-5 sm:p-6 lg:p-8 xl:p-10 text-center">
                  {/* Enhanced Icon Container */}
                  <div className="mb-5 sm:mb-6 lg:mb-8 flex justify-center">
                    <div className="relative">
                      <div
                        className={`flex h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.iconColor} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-2xl`}
                      >
                        <Icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}
                      ></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 sm:mb-4 lg:mb-5 text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <Icon className="h-20 w-20 sm:h-24 sm:w-24 text-foreground" />
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
