"use client";

import { Globe, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Placeholder member images - you can replace with actual member photos
const memberImages = [
  "/members/m5.jpg",
  "/members/m1.jpg",
  "/members/m2.jpg",
  "/members/m3.jpg",
  "/members/m4.jpg",
];

export function MembersHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % memberImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-background py-12 sm:py-16 border-b overflow-hidden">
      {/* Background Images Carousel - Individual Member Photos */}
      <div className="absolute inset-0">
        {memberImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`ISA Member ${index + 1}`}
              fill
              className="object-center object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Members
          </h1>
          <p className="mb-6 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Meet the diverse and talented international students who make up our
            ISA family
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-sm">
              <Users className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">
                500+ Members
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-sm">
              <Globe className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">
                30+ Countries
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-sm">
              <Users className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">
                All Majors Welcome
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
