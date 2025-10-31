import {
  GalleryFilterProvider,
  GalleryFilters,
} from "@/components/gallery/gallery-filters";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { GalleryHeader } from "@/components/gallery/gallery-header";

export const metadata = {
  title: "Gallery | ISA",
  description: "Explore memorable moments from ISA events and activities",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <GalleryHeader />
      <GalleryFilterProvider>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <GalleryFilters />
          <GalleryGrid />
        </main>
      </GalleryFilterProvider>
    </div>
  );
}
