import { ResourceCard } from "@/components/resources/resource-card"
import { GraduationCap, Heart, Home, Briefcase, DollarSign, FileText, Phone } from "lucide-react"

const resourceCategories = [
  {
    id: "academic",
    title: "Academic Support",
    description: "Resources to help you excel in your studies",
    icon: GraduationCap,
    color: "emerald",
    resources: [
      {
        title: "Writing Center",
        description: "Free tutoring and writing assistance for all students",
        url: "https://university.edu/writing-center",
        type: "internal",
      },
      {
        title: "Library Research Guides",
        description: "Subject-specific research guides and database access",
        url: "https://library.university.edu/guides",
        type: "internal",
      },
      {
        title: "Study Groups Platform",
        description: "Connect with classmates for collaborative learning",
        url: "https://studygroups.university.edu",
        type: "internal",
      },
      {
        title: "Academic Calendar",
        description: "Important dates, deadlines, and academic schedules",
        url: "https://university.edu/calendar",
        type: "internal",
      },
    ],
  },
  {
    id: "wellness",
    title: "Health & Wellness",
    description: "Mental health and medical resources",
    icon: Heart,
    color: "rose",
    resources: [
      {
        title: "Counseling Services",
        description: "Free confidential counseling and mental health support",
        url: "https://university.edu/counseling",
        type: "internal",
      },
      {
        title: "Health Center",
        description: "On-campus medical services and health insurance info",
        url: "https://university.edu/health",
        type: "internal",
      },
      {
        title: "Crisis Hotline",
        description: "24/7 mental health crisis support and resources",
        url: "tel:988",
        type: "emergency",
      },
      {
        title: "Wellness Workshops",
        description: "Stress management, mindfulness, and wellness programs",
        url: "https://university.edu/wellness",
        type: "internal",
      },
    ],
  },
  {
    id: "housing",
    title: "Housing & Living",
    description: "Find your home away from home",
    icon: Home,
    color: "blue",
    resources: [
      {
        title: "On-Campus Housing",
        description: "Dormitories and residence hall information",
        url: "https://university.edu/housing",
        type: "internal",
      },
      {
        title: "Off-Campus Housing",
        description: "Apartment listings and roommate matching services",
        url: "https://offcampus.university.edu",
        type: "internal",
      },
      {
        title: "Housing Rights Guide",
        description: "Know your rights as a tenant in the US",
        url: "https://www.hud.gov/topics/rental_assistance",
        type: "external",
      },
      {
        title: "Furniture & Essentials",
        description: "Where to buy affordable furniture and household items",
        url: "https://university.edu/move-in-guide",
        type: "internal",
      },
    ],
  },
  {
    id: "career",
    title: "Career Services",
    description: "Build your professional future",
    icon: Briefcase,
    color: "purple",
    resources: [
      {
        title: "Career Center",
        description: "Resume help, interview prep, and job search assistance",
        url: "https://university.edu/career",
        type: "internal",
      },
      {
        title: "Internship Portal",
        description: "Find internships and co-op opportunities",
        url: "https://careers.university.edu/internships",
        type: "internal",
      },
      {
        title: "LinkedIn Learning",
        description: "Free access to professional development courses",
        url: "https://university.edu/linkedin-learning",
        type: "internal",
      },
      {
        title: "Networking Events",
        description: "Connect with alumni and industry professionals",
        url: "https://university.edu/networking",
        type: "internal",
      },
    ],
  },
  {
    id: "financial",
    title: "Financial Resources",
    description: "Manage your finances and find funding",
    icon: DollarSign,
    color: "green",
    resources: [
      {
        title: "Financial Aid Office",
        description: "Scholarships, grants, and financial assistance",
        url: "https://university.edu/financial-aid",
        type: "internal",
      },
      {
        title: "International Student Scholarships",
        description: "Funding opportunities specifically for international students",
        url: "https://university.edu/international-scholarships",
        type: "internal",
      },
      {
        title: "Banking Guide",
        description: "How to open a US bank account and manage finances",
        url: "https://university.edu/banking-guide",
        type: "internal",
      },
      {
        title: "Tax Information",
        description: "Tax filing requirements for international students",
        url: "https://www.irs.gov/individuals/international-taxpayers",
        type: "external",
      },
    ],
  },
  {
    id: "immigration",
    title: "Immigration & Legal",
    description: "Navigate visa and legal requirements",
    icon: FileText,
    color: "orange",
    resources: [
      {
        title: "International Student Services",
        description: "Visa support, immigration advice, and legal guidance",
        url: "https://university.edu/international",
        type: "internal",
      },
      {
        title: "USCIS Official Website",
        description: "Official US immigration information and forms",
        url: "https://www.uscis.gov",
        type: "external",
      },
      {
        title: "Work Authorization Guide",
        description: "CPT, OPT, and work permit information",
        url: "https://university.edu/work-authorization",
        type: "internal",
      },
      {
        title: "Legal Aid Services",
        description: "Free legal consultation for students",
        url: "https://university.edu/legal-aid",
        type: "internal",
      },
    ],
  },
]

export function ResourcesGrid() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Resource Categories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Browse our comprehensive collection of resources organized by category to find exactly what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resourceCategories.map((category) => (
          <ResourceCard key={category.id} category={category} />
        ))}
      </div>

      {/* Emergency Contacts Section */}
      <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
        <div className="flex items-center mb-4">
          <Phone className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
          <h3 className="text-xl font-bold text-red-900 dark:text-red-100">Emergency Contacts</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-red-900 dark:text-red-100">Emergency Services</p>
            <p className="text-red-700 dark:text-red-300">911</p>
          </div>
          <div>
            <p className="font-medium text-red-900 dark:text-red-100">Campus Security</p>
            <p className="text-red-700 dark:text-red-300">(555) 123-4567</p>
          </div>
          <div>
            <p className="font-medium text-red-900 dark:text-red-100">Crisis Hotline</p>
            <p className="text-red-700 dark:text-red-300">988</p>
          </div>
        </div>
      </div>
    </div>
  )
}
