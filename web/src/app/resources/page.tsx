import { ResourcesHeader } from "@/components/resources/resources-header"
import { ResourcesGrid } from "@/components/resources/resources-grid"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ResourcesHeader />
      <main className="container mx-auto px-4 py-8">
        <ResourcesGrid />
      </main>
    </div>
  )
}
