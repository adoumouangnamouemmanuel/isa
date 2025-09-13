import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Phone, Globe } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface Resource {
  title: string
  description: string
  url: string
  type: "internal" | "external" | "emergency"
}

interface ResourceCategory {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  resources: Resource[]
}

interface ResourceCardProps {
  category: ResourceCategory
}

export function ResourceCard({ category }: ResourceCardProps) {
  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald:
        "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
      rose: "bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
      blue: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      purple:
        "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      green:
        "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      orange:
        "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "external":
        return <ExternalLink className="h-4 w-4" />
      case "emergency":
        return <Phone className="h-4 w-4" />
      default:
        return <Globe className="h-4 w-4" />
    }
  }

  const getResourceBadgeVariant = (type: string) => {
    switch (type) {
      case "emergency":
        return "destructive"
      case "external":
        return "secondary"
      default:
        return "outline"
    }
  }

  const Icon = category.icon

  return (
    <Card className="h-full">
      <CardHeader>
        <div className={`inline-flex p-3 rounded-lg w-fit mb-4 ${getColorClasses(category.color)}`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
        <p className="text-muted-foreground text-sm text-pretty">{category.description}</p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {category.resources.map((resource, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-foreground text-sm">{resource.title}</h4>
                <Badge variant={getResourceBadgeVariant(resource.type)} className="text-xs">
                  {resource.type}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3 text-pretty">{resource.description}</p>
              <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                <Link
                  href={resource.url}
                  target={resource.type === "external" ? "_blank" : undefined}
                  rel={resource.type === "external" ? "noopener noreferrer" : undefined}
                >
                  {getResourceIcon(resource.type)}
                  <span className="ml-2">{resource.type === "emergency" ? "Call Now" : "Access Resource"}</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
