import { BookOpen, FileText, Scale } from "lucide-react";

export function ResourcesHeader() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-background py-12 sm:py-16 border-b">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 p-3 rounded-xl">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          ISA Resources
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Essential documents and information for ISA members
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-2 rounded-full border">
            <FileText className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium">Immigration Guides</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-2 rounded-full border">
            <Scale className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium">Constitution</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-2 rounded-full border">
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium">Annual Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
}
