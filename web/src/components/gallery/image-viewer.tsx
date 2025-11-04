"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  Tag,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GalleryImage } from "./gallery-filters";

interface ImageViewerProps {
  image: GalleryImage | null;
  allImages: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
}

export function ImageViewer({
  image,
  allImages,
  isOpen,
  onClose,
}: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (image) {
      const index = allImages.findIndex((img) => img.id === image.id);
      setCurrentIndex(index);
      setZoomLevel(1);
    }
  }, [image, allImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "Escape":
          onClose();
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, zoomLevel]);

  if (!image) return null;

  const currentImage = allImages[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allImages.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      setCurrentIndex(currentIndex - 1);
      setZoomLevel(1);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setCurrentIndex(currentIndex + 1);
      setZoomLevel(1);
    }
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = currentImage.src;
    link.download = `${currentImage.title
      .replace(/\s+/g, "-")
      .toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-white mb-2 truncate">
              {currentImage.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className={`${getCategoryColor(
                  currentImage.category
                )} text-white border-none`}
              >
                <Tag className="h-3 w-3 mr-1" />
                {currentImage.category}
              </Badge>
              <Badge variant="outline" className="text-white border-white/30">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(currentImage.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Badge>
              <span className="text-sm text-white/70">
                {currentImage.event}
              </span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 shrink-0"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={1920}
            height={1080}
            className="max-w-full max-h-full w-auto h-auto object-contain"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        {hasPrevious && (
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {hasNext && (
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>

      {/* Footer Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between gap-4">
          {/* Counter */}
          <div className="text-sm text-white/90">
            {currentIndex + 1} / {allImages.length}
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomOut}
              disabled={zoomLevel <= 0.5}
              className="h-10 w-10 text-white hover:bg-white/20 disabled:opacity-50"
            >
              <ZoomOut className="h-5 w-5" />
            </Button>
            <button
              onClick={resetZoom}
              className="text-sm text-white/90 hover:text-white px-2 min-w-[60px]"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomIn}
              disabled={zoomLevel >= 3}
              className="h-10 w-10 text-white hover:bg-white/20 disabled:opacity-50"
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
          </div>

          {/* Download Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={downloadImage}
            className="h-10 w-10 text-white hover:bg-white/20"
          >
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="absolute top-20 right-4 text-xs text-white/50 space-y-1 hidden md:block">
        <p>← → Navigate</p>
        <p>+ − Zoom</p>
        <p>ESC Close</p>
      </div>
    </div>
  );
}
