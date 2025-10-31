"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 border-2 border-destructive/30">
              <AlertCircle className="h-10 w-10 text-destructive" />
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Oops! Something went wrong
          </h1>
          <p className="text-muted-foreground text-lg">
            We&apos;re sorry, but we encountered an unexpected error. Don&apos;t
            worry, it&apos;s not your fault!
          </p>
          {error.message && (
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-sm text-destructive font-mono">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Support Info */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            If this problem persists, please{" "}
            <a
              href="/contact"
              className="text-primary hover:underline font-semibold"
            >
              contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
