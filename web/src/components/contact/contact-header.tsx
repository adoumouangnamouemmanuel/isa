import { Mail, MessageSquare, Users } from "lucide-react"

export function ContactHeader() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
            <MessageSquare className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          Have questions, suggestions, or want to get involved? We'd love to hear from you. Reach out to the ISA team
          and we'll get back to you as soon as possible.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center text-emerald-600 dark:text-emerald-400">
            <Mail className="mr-2 h-5 w-5" />
            <span className="font-medium">Quick Response</span>
          </div>
          <div className="flex items-center text-emerald-600 dark:text-emerald-400">
            <Users className="mr-2 h-5 w-5" />
            <span className="font-medium">Community Support</span>
          </div>
          <div className="flex items-center text-emerald-600 dark:text-emerald-400">
            <MessageSquare className="mr-2 h-5 w-5" />
            <span className="font-medium">Open Communication</span>
          </div>
        </div>
      </div>
    </section>
  )
}
