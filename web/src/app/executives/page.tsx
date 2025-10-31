import { ExecutivesGrid } from "@/components/executives/executives-grid";
import { ExecutivesHeader } from "@/components/executives/executives-header";

export const metadata = {
  title: "Executives | ISA",
  description:
    "Meet the ISA executive team for 2025 - Leading with passion and dedication",
};

export default function ExecutivesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ExecutivesHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <ExecutivesGrid />
      </main>
    </div>
  );
}
