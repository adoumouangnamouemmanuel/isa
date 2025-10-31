import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

interface Resource {
  title: string;
  description: string;
  url: string;
  type: "pdf" | "external";
}

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  resources: Resource[];
}

interface ResourceCardProps {
  category: ResourceCategory;
}

export function ResourceCard({ category }: ResourceCardProps) {
  const Icon = category.icon;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border/50 hover:border-primary/30">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-3 rounded-lg shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground mb-1">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        <div
          className={`space-y-2 flex-1 ${
            category.id === "reports"
              ? "max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40"
              : ""
          }`}
        >
          {category.resources.map((resource, index) => (
            <Button
              key={index}
              asChild
              variant="ghost"
              className="w-full justify-start h-auto py-3 px-3 hover:bg-primary/5 group/item cursor-pointer"
            >
              <Link
                href={resource.url}
                target={resource.type === "external" ? "_blank" : "_blank"}
                rel={
                  resource.type === "external"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="cursor-pointer"
              >
                <div className="flex items-start gap-3 text-left w-full">
                  <div className="shrink-0 mt-0.5">
                    {resource.type === "pdf" ? (
                      <FileText className="h-4 w-4 text-primary" />
                    ) : (
                      <ExternalLink className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors">
                      {resource.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {resource.description}
                    </div>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors shrink-0 mt-0.5" />
                </div>
              </Link>
            </Button>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-border/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {category.resources.length}{" "}
              {category.resources.length === 1 ? "document" : "documents"}
            </span>
            <Badge variant="outline" className="text-xs">
              {category.id === "immigration"
                ? "Essential"
                : category.id === "constitution"
                ? "Official"
                : "Archive"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
