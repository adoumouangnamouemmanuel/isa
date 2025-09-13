import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { UpcomingEventsSection } from "@/components/home/upcoming-events-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { JoinSection } from "@/components/home/join-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <JoinSection />
    </div>
  );
}
