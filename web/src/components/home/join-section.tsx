import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

export function JoinSection() {
  const benefits = [
    { icon: Users, text: "Join 500+ active members" },
    { icon: Globe, text: "Connect across 30+ countries" },
    { icon: Heart, text: "Find your home away from home" },
    { icon: Star, text: "Exclusive member perks" },
    { icon: CheckCircle, text: "Free event access" },
    { icon: MessageCircle, text: "24/7 community support" },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-48 sm:h-48 bg-accent/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/30 rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold">
              Start Your Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-balance leading-tight">
            Ready to Join Our{" "}
            <span className="relative inline-block">
              Global Family?
              <div className="absolute -inset-2 bg-white/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
          </h2>

          {/* Description */}
          <p className="mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg xl:text-xl text-primary-foreground/95 text-pretty max-w-3xl mx-auto leading-relaxed">
            Become part of a community that celebrates diversity, supports
            growth, and creates lasting connections. Your journey to an
            unforgettable Ashesi experience starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-5 justify-center items-center mb-10 sm:mb-16">
            <Button
              asChild
              className="group relative h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 bg-white hover:bg-white/95 text-primary font-bold shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-105 text-xs sm:text-sm lg:text-base overflow-hidden"
            >
              <Link href="/join" className="flex items-center">
                <Sparkles className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:rotate-180 transition-transform duration-500" />
                <span className="hidden xs:inline">Join ISA Now</span>
                <span className="xs:hidden">Join ISA</span>
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            </Button>
            <Button
              asChild
              className="group h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold backdrop-blur-md transition-all duration-300 hover:scale-105 text-xs sm:text-sm lg:text-base"
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:rotate-12 transition-transform" />
                <span className="hidden xs:inline">Get in Touch</span>
                <span className="xs:hidden">Contact</span>
              </Link>
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 p-2 sm:p-2.5 lg:p-3 bg-white/10 rounded-lg group-hover:bg-white/20 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base font-semibold text-left text-primary-foreground/95 group-hover:text-white transition-colors">
                    {benefit.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicator */}
          <div className="mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-primary-foreground/80 text-xs sm:text-sm">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>Free to join</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-white/30 hidden sm:block"></div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>No commitments</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-white/30 hidden sm:block"></div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
