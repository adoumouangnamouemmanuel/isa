export function StatsSection() {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Countries Represented" },
    { number: "100+", label: "Events Per Year" },
    { number: "25+", label: "Years of Service" },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
