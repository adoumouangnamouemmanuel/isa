"use client";

import { Calendar, Camera, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

export function GalleryHeader() {
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
              alt={`Gallery ${index + 1}`}
              fill
              className="object-cover"
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
              <Camera className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ISA Gallery
          </h1>
          <p className="mb-10 text-lg text-white/90 max-w-2xl mx-auto">
            Relive the memorable moments from our events and activities
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm">
              <ImageIcon className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                500+ Photos
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm">
              <Calendar className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">6+ Events</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm">
              <Camera className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Memories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
