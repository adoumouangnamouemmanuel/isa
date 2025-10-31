import { ContactForm } from "@/components/contact/contact-form";
import { ContactHeader } from "@/components/contact/contact-header";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata = {
  title: "Contact Us | ISA",
  description:
    "Get in touch with the International Students Association. We're here to help!",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 lg:p-12 rounded-2xl border border-primary/20 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Join Our Community Today
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Experience the warmth of our global family and make your
              university journey unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                View Events
              </a>
              <a
                href="/members"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                Meet Members
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
