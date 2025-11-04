"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Play, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`ISA Background ${index + 1}`}
              fill
              className="object-cover scale-105"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Simplified Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Title */}
          <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl text-white drop-shadow-lg leading-tight">
            Ashesi University
            <br />
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              International Students Association
            </span>
          </h1>

          {/* Description */}
          <p className="mb-6 text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join a vibrant community of students from over 30 countries.
            Experience diverse cultures, build lasting friendships, and shape
            the future together.
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
            <div className="glass-effect px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-white">
                <Users className="h-3 w-3 text-accent" />
                <span className="text-[10px] sm:text-xs font-medium">
                  500+ Members
                </span>
              </div>
            </div>
            <div className="glass-effect px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-white">
                <Globe className="h-3 w-3 text-secondary" />
                <span className="text-[10px] sm:text-xs font-medium">
                  30+ Countries
                </span>
              </div>
            </div>
            <div className="glass-effect px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-white">
                <TrendingUp className="h-3 w-3 text-primary" />
                <span className="text-[10px] sm:text-xs font-medium">
                  6+ Events/Year
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center mb-8">
            <Button
              asChild
              className="group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 h-9 text-xs px-4 sm:h-11 sm:text-base sm:px-6"
            >
              <Link href="/join" className="flex items-center">
                <span className="hidden xs:inline">Join ISA Today</span>
                <span className="xs:hidden">Join ISA</span>
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="glass-effect text-white border-white/40 hover:border-white/60 backdrop-blur-md hover:bg-white/10 transition-all duration-300 h-9 text-xs px-4 sm:h-11 sm:text-base sm:px-6"
            >
              <Link href="/events" className="flex items-center">
                <Play className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Explore Events</span>
                <span className="xs:hidden">Events</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
