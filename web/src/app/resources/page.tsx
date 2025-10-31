import { ResourcesGrid } from "@/components/resources/resources-grid";
import { ResourcesHeader } from "@/components/resources/resources-header";

export const metadata = {
  title: "Resources | ISA",
  description:
    "Essential documents and resources for International Student Association members",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ResourcesHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <ResourcesGrid />
      </main>
    </div>
  );
}
