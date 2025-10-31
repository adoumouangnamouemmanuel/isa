"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

// Gallery data - based on actual past events
export const galleryImages: GalleryImage[] = [
  // Visit to Kwame Nkrumah Park and Art Center - October 2025
  {
    id: 1,
    src: "/international-food-festival.jpg",
    title: "Group photo at Kwame Nkrumah Memorial",
    event: "Visit to Kwame Nkrumah Park and Art Center",
    year: 2025,
    date: "2025-10-26",
    category: "Cultural",
  },
  {
    id: 2,
    src: "/chinese-new-year.jpg",
    title: "Exploring the art center",
    event: "Visit to Kwame Nkrumah Park and Art Center",
    year: 2025,
    date: "2025-10-26",
    category: "Cultural",
  },
  {
    id: 3,
    src: "/holi-celebration.jpg",
    title: "Learning about Pan-Africanism",
    event: "Visit to Kwame Nkrumah Park and Art Center",
    year: 2025,
    date: "2025-10-26",
    category: "Cultural",
  },
  // Get Together Party 1st Edition - April 2025
  {
    id: 4,
    src: "/coffee-hour.jpg",
    title: "Dancing and music at The Hive",
    event: "Get Together Party 1st Edition",
    year: 2025,
    date: "2025-04-24",
    category: "Social",
  },
  {
    id: 5,
    src: "/international-food-festival.jpg",
    title: "Students enjoying the party",
    event: "Get Together Party 1st Edition",
    year: 2025,
    date: "2025-04-24",
    category: "Social",
  },
  {
    id: 6,
    src: "/chinese-new-year.jpg",
    title: "Group photo at the party",
    event: "Get Together Party 1st Edition",
    year: 2025,
    date: "2025-04-24",
    category: "Social",
  },
  {
    id: 7,
    src: "/holi-celebration.jpg",
    title: "Fun moments with friends",
    event: "Get Together Party 1st Edition",
    year: 2025,
    date: "2025-04-24",
    category: "Social",
  },
  // International Students Tournament 3rd Edition - March 2025
  {
    id: 8,
    src: "/soccer-tournament.jpg",
    title: "Tournament opening ceremony",
    event: "International Students Tournament 3rd Edition",
    year: 2025,
    date: "2025-03-08",
    category: "Sports",
  },
  {
    id: 9,
    src: "/soccer-tournament.jpg",
    title: "Teams competing on the court",
    event: "International Students Tournament 3rd Edition",
    year: 2025,
    date: "2025-03-08",
    category: "Sports",
  },
  {
    id: 10,
    src: "/soccer-tournament.jpg",
    title: "Winning team celebration",
    event: "International Students Tournament 3rd Edition",
    year: 2025,
    date: "2025-03-08",
    category: "Sports",
  },
  {
    id: 11,
    src: "/soccer-tournament.jpg",
    title: "All participants group photo",
    event: "International Students Tournament 3rd Edition",
    year: 2025,
    date: "2025-03-08",
    category: "Sports",
  },
  {
    id: 12,
    src: "/soccer-tournament.jpg",
    title: "Trophy presentation",
    event: "International Students Tournament 3rd Edition",
    year: 2025,
    date: "2025-03-08",
    category: "Sports",
  },
  // Global Cafe - March 2025
  {
    id: 13,
    src: "/international-food-festival.jpg",
    title: "Coffee and snacks setup",
    event: "Global Cafe",
    year: 2025,
    date: "2025-03-04",
    category: "Cultural",
  },
  {
    id: 14,
    src: "/coffee-hour.jpg",
    title: "Students sharing stories",
    event: "Global Cafe",
    year: 2025,
    date: "2025-03-04",
    category: "Cultural",
  },
  {
    id: 15,
    src: "/international-food-festival.jpg",
    title: "Cultural exchange moment",
    event: "Global Cafe",
    year: 2025,
    date: "2025-03-04",
    category: "Cultural",
  },
  {
    id: 16,
    src: "/coffee-hour.jpg",
    title: "Engineering Courtyard gathering",
    event: "Global Cafe",
    year: 2025,
    date: "2025-03-04",
    category: "Cultural",
  },
];

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
    selectedYear,
    selectedCategory,
    searchQuery,
    setSelectedYear,
    setSelectedCategory,
    setSearchQuery,
    filteredImages,
  } = useGalleryFilters();

  const years = ["All Years", "2025", "2024", "2023"];
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
