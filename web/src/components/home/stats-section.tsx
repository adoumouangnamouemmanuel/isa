import {
  Award,
  Calendar,
  Globe,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Active Members",
      icon: Users,
      description: "Strong community",
    },
    {
      number: "30+",
      label: "Countries Represented",
      icon: Globe,
      description: "Global diversity",
    },
    {
      number: "6+",
      label: "Events Per Year",
      icon: Calendar,
      description: "Year-round engagement",
    },
    {
      number: "5+",
      label: "Years at Ashesi",
      icon: Award,
      description: "Established legacy",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

        {/* Animated Particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full animate-float"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 mb-4 sm:mb-6">
            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Our Impact in Numbers
            </h2>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
          </div>
          <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
            Building a thriving international community at Ashesi University
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative text-center group cursor-default p-4 sm:p-5 lg:p-6 xl:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative mb-3 sm:mb-4 flex justify-center">
                  <div className="p-2 sm:p-2.5 lg:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />
                  </div>
                </div>

                {/* Number */}
                <div className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tight">
                  {stat.number}
                  <div className="absolute inset-0 blur-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Label */}
                <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-primary-foreground/90 font-bold mb-1.5 sm:mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-[10px] sm:text-xs lg:text-sm text-primary-foreground/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {stat.description}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base font-medium">
            Join our growing community and be part of something extraordinary
          </p>
        </div>
      </div>
    </section>
  );
}
