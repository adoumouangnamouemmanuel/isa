"use client";

import { Award, Shield, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/contact/contact1.jpg",
  "/contact/contact2.jpg",
  "/contact/contact3.jpg",
  "/contact/contact4.jpg",
  "/contact/contact5.jpg ",
];

export function ExecutivesHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-background py-20 border-b overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Executive ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ISA Executive Team 2025
          </h1>
          <p className="mb-10 text-lg text-white/90 max-w-2xl mx-auto">
            Meet the dedicated leaders shaping the future of our international
            community
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm">
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                10 Executive Members
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm">
              <Award className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                Serving 2025
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                Leading with Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
