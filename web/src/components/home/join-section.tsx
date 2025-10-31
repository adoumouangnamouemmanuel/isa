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
    <section className="relative py-28 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float"
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
          <div className="inline-flex items-center space-x-2 mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-bold">Start Your Journey</span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-balance leading-tight">
            Ready to Join Our{" "}
            <span className="relative inline-block">
              Global Family?
              <div className="absolute -inset-2 bg-white/20 blur-2xl -z-10 animate-pulse"></div>
            </span>
          </h2>

          {/* Description */}
          <p className="mb-12 text-lg sm:text-xl text-primary-foreground/95 text-pretty max-w-3xl mx-auto leading-relaxed">
            Become part of a community that celebrates diversity, supports
            growth, and creates lasting connections. Your journey to an
            unforgettable Ashesi experience starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="group relative min-w-[200px] h-14 bg-white hover:bg-white/95 text-primary font-bold shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-105 text-lg overflow-hidden"
            >
              <Link href="/join" className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                Join ISA Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="group min-w-[200px] h-14 bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold backdrop-blur-md transition-all duration-300 hover:scale-105 text-lg"
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center space-x-3 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-white/20 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-left text-primary-foreground/95 group-hover:text-white transition-colors">
                    {benefit.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-4 text-primary-foreground/80 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Free to join</span>
              </div>
              <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>No commitments</span>
              </div>
              <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
