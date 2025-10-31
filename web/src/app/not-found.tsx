import { Button } from "@/components/ui/button";
import { Home, Search, Users } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Visual */}
        <div className="relative">
          <div className="text-[180px] sm:text-[240px] font-black text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 -mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to exploring our community!
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <Link
            href="/"
            className="group p-6 rounded-xl bg-card hover:bg-muted/80 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Home className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
            <p className="text-sm font-semibold">Home</p>
          </Link>
          <Link
            href="/events"
            className="group p-6 rounded-xl bg-card hover:bg-muted/80 border border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="h-8 w-8 mx-auto mb-2 text-secondary group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm font-semibold">Events</p>
          </Link>
          <Link
            href="/members"
            className="group p-6 rounded-xl bg-card hover:bg-muted/80 border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Users className="h-8 w-8 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" />
            <p className="text-sm font-semibold">Members</p>
          </Link>
          <Link
            href="/contact"
            className="group p-6 rounded-xl bg-card hover:bg-muted/80 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm font-semibold">Contact</p>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/events">
              <Search className="mr-2 h-5 w-5" />
              Browse Events
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Need help? Check out our{" "}
            <Link
              href="/resources"
              className="text-primary hover:underline font-semibold"
            >
              resources
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-semibold"
            >
              contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
