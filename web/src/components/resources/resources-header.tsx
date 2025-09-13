import { BookOpen, ExternalLink, Heart, Users } from "lucide-react"

export function ResourcesHeader() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
            <BookOpen className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Resources & Support</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          Everything you need to succeed as an international student. From academic support to practical guides, we've
          got you covered.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center text-emerald-600 dark:text-emerald-400">
            <Users className="mr-2 h-5 w-5" />
            <span className="font-medium">Academic Support</span>
          </div>
          <div className="flex items-center text-emerald-600 dark:text-emerald-400">
            <Heart className="mr-2 h-5 w-5" />
            <span className="font-medium">Wellness Resources</span>
          </div>
          <div className="flex items-center text-emerald-600 dark:text-emerald-400">
            <ExternalLink className="mr-2 h-5 w-5" />
            <span className="font-medium">External Links</span>
          </div>
        </div>
      </div>
    </section>
  )
}
