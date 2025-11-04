"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPastEvents, type Event } from "@/data/events";
import { Calendar, Search, Tag, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  event: string;
  year: number;
  date: string;
  category: "Cultural" | "Social" | "Professional" | "Academic" | "Sports";
}

interface GalleryFilterContextType {
  images: GalleryImage[];
  filteredImages: GalleryImage[];
  selectedYear: string;
  selectedCategory: string;
  searchQuery: string;
  setSelectedYear: (year: string) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

const GalleryFilterContext = createContext<
  GalleryFilterContextType | undefined
>(undefined);

export function useGalleryFilters() {
  const context = useContext(GalleryFilterContext);
  if (!context) {
    throw new Error(
      "useGalleryFilters must be used within GalleryFilterProvider"
    );
  }
  return context;
}

// Generate gallery images automatically from past events
const generateGalleryImages = (): GalleryImage[] => {
  const pastEvents = getPastEvents();
  const images: GalleryImage[] = [];
  let imageId = 1;

  pastEvents.forEach((event: Event) => {
    const eventYear = new Date(event.date).getFullYear();

    // Use the photos array from the event if available, otherwise use the main image
    const eventPhotos =
      event.photos && event.photos.length > 0 ? event.photos : [event.image];

    eventPhotos.forEach((photoSrc, index) => {
      images.push({
        id: imageId++,
        src: photoSrc,
        title:
          eventPhotos.length === 1
            ? event.title
            : `${event.title} - Photo ${index + 1}`,
        event: event.title,
        year: eventYear,
        date: event.date,
        category: event.category,
      });
    });
  });

  return images;
};

// Gallery data - automatically generated from past events
export const galleryImages: GalleryImage[] = generateGalleryImages();

export function GalleryFilterProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const eventParam = searchParams.get("event");

  const [selectedYear, setSelectedYear] = useState<string>("All Years");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Events");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Set search query from URL parameter on mount
  useEffect(() => {
    if (eventParam) {
      setSearchQuery(eventParam);
    }
  }, [eventParam]);

  const filteredImages = galleryImages.filter((image) => {
    const matchesYear =
      selectedYear === "All Years" || image.year.toString() === selectedYear;
    const matchesCategory =
      selectedCategory === "All Events" || image.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.event.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesYear && matchesCategory && matchesSearch;
  });

  return (
    <GalleryFilterContext.Provider
      value={{
        images: galleryImages,
        filteredImages,
        selectedYear,
        selectedCategory,
        searchQuery,
        setSelectedYear,
        setSelectedCategory,
        setSearchQuery,
      }}
    >
      {children}
    </GalleryFilterContext.Provider>
  );
}

export function GalleryFilters() {
  const {
    images,
    selectedYear,
    selectedCategory,
    searchQuery,
    setSelectedYear,
    setSelectedCategory,
    setSearchQuery,
    filteredImages,
  } = useGalleryFilters();

  // Extract unique years from gallery images dynamically
  const uniqueYears = Array.from(new Set(images.map((img) => img.year))).sort(
    (a, b) => b - a
  );
  const years = ["All Years", ...uniqueYears.map(String)];

  const categories = [
    "All Events",
    "Cultural",
    "Social",
    "Professional",
    "Academic",
    "Sports",
  ];

  const hasActiveFilters =
    selectedYear !== "All Years" ||
    selectedCategory !== "All Events" ||
    searchQuery !== "";

  const clearAllFilters = () => {
    setSelectedYear("All Years");
    setSelectedCategory("All Events");
    setSearchQuery("");
  };

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search photos by title or event..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-12 text-base border-2"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="space-y-4">
        {/* Year Filters */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Filter by Year</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
                className="transition-all"
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Summary & Clear Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredImages.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-foreground">
            {galleryImages.length}
          </span>{" "}
          photos
        </p>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            Clear all filters
          </Button>
        )}
      </div>
    </div>
  );
}
