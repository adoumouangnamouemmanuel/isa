"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, Tag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GalleryImage, useGalleryFilters } from "./gallery-filters";
import { ImageViewer } from "./image-viewer";

export function GalleryGrid() {
  const { filteredImages } = useGalleryFilters();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cultural":
        return "bg-orange-500";
      case "Social":
        return "bg-blue-500";
      case "Professional":
        return "bg-green-500";
      case "Academic":
        return "bg-purple-500";
      case "Sports":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Group images by event for organized display
  const groupedByEvent = filteredImages.reduce((acc, image) => {
    const eventKey = `${image.event}-${image.year}`;
    if (!acc[eventKey]) {
      acc[eventKey] = {
        event: image.event,
        year: image.year,
        date: image.date,
        category: image.category,
        images: [],
      };
    }
    acc[eventKey].images.push(image);
    return acc;
  }, {} as Record<string, { event: string; year: number; date: string; category: string; images: GalleryImage[] }>);

  const eventGroups = Object.values(groupedByEvent).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (filteredImages.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mx-auto max-w-md">
          <div className="mb-4 flex justify-center">
            <div className="bg-muted p-6 rounded-full">
              <Eye className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">No photos found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search query to find more photos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-16">
        {eventGroups.map((group) => (
          <div key={`${group.event}-${group.year}`} className="space-y-6">
            {/* Event Header with Photo Count */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">{group.event}</h2>
                <Badge
                  className={`${getCategoryColor(
                    group.category
                  )} text-white border-none`}
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {group.category}
                </Badge>
                <Badge variant="outline">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(group.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Badge>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {group.images.length}{" "}
                {group.images.length === 1 ? "photo" : "photos"}
              </div>
            </div>

            {/* Images Grid - Phone Gallery Style with Better Spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {group.images.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:z-10 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                  onClick={() => openViewer(image)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-muted border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Eye className="h-5 w-5 text-gray-900" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Info on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-medium text-xs line-clamp-1">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        image={selectedImage}
        allImages={filteredImages}
        isOpen={isViewerOpen}
        onClose={closeViewer}
      />
    </>
  );
}
