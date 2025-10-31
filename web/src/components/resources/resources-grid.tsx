import { ResourceCard } from "@/components/resources/resource-card";
import { BookOpen, FileText, Scale } from "lucide-react";

const resourceCategories = [
  {
    id: "immigration",
    title: "Immigration Documents",
    description: "Ghana card, residence permit, and immigration forms",
    icon: FileText,
    resources: [
      {
        title: "Ghana Card & Residence Permit Guide",
        description:
          "Complete guide for Ghana card and residence permit application",
        url: "/documents/immigration.pdf",
        type: "pdf" as const,
      },
      {
        title: "Filled Residence Permit Sample",
        description: "Sample of a correctly filled residence permit form",
        url: "/documents/filled-residence-permit.pdf",
        type: "pdf" as const,
      },
      {
        title: "Ghana Card Application Sample",
        description: "Sample of a correctly filled Ghana card application",
        url: "/documents/filled-ghana-card.pdf",
        type: "pdf" as const,
      },
    ],
  },
  {
    id: "constitution",
    title: "ISA Constitution",
    description: "Our official constitution document",
    icon: Scale,
    resources: [
      {
        title: "ISA Constitution",
        description:
          "Official constitution of the International Student Association",
        url: "/documents/ISA-Constitution.pdf",
        type: "pdf" as const,
      },
    ],
  },
  {
    id: "reports",
    title: "Annual Reports",
    description: "Yearly reports and organizational updates",
    icon: BookOpen,
    resources: [
      {
        title: "2025 Annual Report",
        description:
          "ISA activities, achievements, and financial summary for 2025",
        url: "/documents/annual-report-2025.pdf",
        type: "pdf" as const,
      },
      {
        title: "2024 Annual Report",
        description:
          "ISA activities, achievements, and financial summary for 2024",
        url: "/documents/annual-report-2024.pdf",
        type: "pdf" as const,
      },
      {
        title: "2023 Annual Report",
        description:
          "ISA activities, achievements, and financial summary for 2023",
        url: "/documents/annual-report-2023.pdf",
        type: "pdf" as const,
      },
      {
        title: "2022 Annual Report",
        description:
          "ISA activities, achievements, and financial summary for 2022",
        url: "/documents/annual-report-2022.pdf",
        type: "pdf" as const,
      },
      {
        title: "2021 Annual Report",
        description:
          "ISA activities, achievements, and financial summary for 2021",
        url: "/documents/annual-report-2021.pdf",
        type: "pdf" as const,
      },
      {
        title: "2020 Annual Report",
        description:
          "ISA activities, achievements, and financial summary for 2020",
        url: "/documents/annual-report-2020.pdf",
        type: "pdf" as const,
      },
    ],
  },
];

export function ResourcesGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {resourceCategories.map((category) => (
          <ResourceCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
