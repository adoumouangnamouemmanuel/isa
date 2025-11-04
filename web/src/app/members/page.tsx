import { getAllMembers } from "@/app/actions/members";
import { DatabaseMembersList } from "@/components/members/database-members-list";
import { MembersFilter } from "@/components/members/members-filter";
import { MembersHeader } from "@/components/members/members-header";
import { MembersFilterProvider } from "@/contexts/members-filter-context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members Directory - ISA Ashesi",
  description:
    "Meet our diverse community of 500+ international students from 30+ countries. Connect with ISA members, explore profiles, and build lasting friendships across cultures.",
  keywords: [
    "ISA Members",
    "International Students",
    "Student Directory",
    "Ashesi University Students",
    "Global Community",
    "Student Network",
    "Cultural Diversity",
  ],
  openGraph: {
    title: "Members Directory - ISA Ashesi",
    description:
      "Connect with 500+ international students from 30+ countries at Ashesi University",
    type: "website",
  },
};

export default async function MembersPage() {
  // Fetch members from database
  const members = await getAllMembers();

  // // Log for debugging
  // console.log("Fetched members count:", members.length);
  // console.log("Sample member:", members[0]);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 h-96 w-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/3 -right-40 h-96 w-96 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 h-96 w-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <MembersHeader />

        {/* Main Content Container */}
        <MembersFilterProvider>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Filter Section */}
            <div className="mb-8">
              <MembersFilter />
            </div>

            {/* Members List */}
            <DatabaseMembersList members={members} />
          </div>
        </MembersFilterProvider>

        {/* Call-to-Action Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary font-semibold text-xs sm:text-sm mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span>Join Our Community</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground">
                Want to Be Part of{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Our Family
                </span>
                ?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join ISA today and connect with amazing international students,
                attend exclusive events, and access resources that will make
                your university experience unforgettable.
              </p>

              <div className="flex flex-row gap-2 sm:gap-4 justify-center pt-2 sm:pt-4">
                <a
                  href="/join"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-xs sm:text-sm lg:text-base font-bold shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span>Become a Member</span>
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>Contact Us</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-3 w-3 sm:h-4 sm:w-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <span>Free membership</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-secondary/10">
                    <svg
                      className="h-3 w-3 sm:h-4 sm:w-4 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>No commitment</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-3 w-3 sm:h-4 sm:w-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Inclusive</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
