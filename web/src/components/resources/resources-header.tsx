import { BookOpen, FileText, Scale } from "lucide-react";

export function ResourcesHeader() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-background py-20 border-b">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-2xl">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          ISA Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Essential documents and information for ISA members
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border">
            <FileText className="h-4 w-4 text-primary" />
            <span className="font-medium">Immigration Guides</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border">
            <Scale className="h-4 w-4 text-primary" />
            <span className="font-medium">Constitution</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-medium">Annual Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
}
