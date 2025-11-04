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
        <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-primary/20 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Join Our Community Today
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
              Experience the warmth of our global family and make your
              university journey unforgettable.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <a
                href="/events"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm lg:text-base font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                View Events
              </a>
              <a
                href="/members"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-primary text-primary text-xs sm:text-sm lg:text-base font-semibold hover:bg-primary/10 transition-colors"
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
