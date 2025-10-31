import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import type { Executive } from "./executives-grid";

interface ExecutiveCardProps {
  executive: Executive;
}

const categoryColors = {
  leadership: "bg-gradient-to-r from-orange-500 to-orange-600",
  executive: "bg-gradient-to-r from-orange-500 to-orange-600",
  regional: "bg-gradient-to-r from-red-500 to-red-600",
};

export function ExecutiveCard({ executive }: ExecutiveCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 h-full">
      <div className="relative">
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          <Image
            src={executive.image || "/placeholder.svg"}
            alt={executive.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Name and Position at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white leading-tight mb-2">
              {executive.name}
            </h3>
            <div
              className={`${
                categoryColors[executive.category]
              } text-white px-3 py-1.5 rounded-lg shadow-lg inline-block`}
            >
              <p className="text-xs font-bold">{executive.position}</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <CardContent className="p-6 space-y-4">
          {/* Country */}
          <div className="flex items-center gap-3 text-muted-foreground group/item hover:text-primary transition-colors">
            <div className="bg-primary/10 p-2 rounded-lg group-hover/item:bg-primary/20 transition-colors">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Country</p>
              <p className="text-sm font-semibold text-foreground">
                {executive.country}
              </p>
            </div>
          </div>

          {/* Major */}
          <div className="flex items-center gap-3 text-muted-foreground group/item hover:text-primary transition-colors">
            <div className="bg-primary/10 p-2 rounded-lg group-hover/item:bg-primary/20 transition-colors">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Major</p>
              <p className="text-sm font-semibold text-foreground">
                {executive.major}
              </p>
            </div>
          </div>

          {/* Class Year */}
          <div className="flex items-center gap-3 text-muted-foreground group/item hover:text-primary transition-colors">
            <div className="bg-primary/10 p-2 rounded-lg group-hover/item:bg-primary/20 transition-colors">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Class</p>
              <p className="text-sm font-semibold text-foreground">
                {executive.classYear}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              Connect
            </p>
            <div className="flex gap-2">
              {executive.email && (
                <a
                  href={`mailto:${executive.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all group/contact"
                  title="Send Email"
                >
                  <Mail className="h-4 w-4 text-primary group-hover/contact:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-foreground">
                    Email
                  </span>
                </a>
              )}
              {executive.linkedin && (
                <a
                  href={executive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all group/contact"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover/contact:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-foreground">
                    LinkedIn
                  </span>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
