"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/join" || pathname === "/login";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation with loading fallback */}
      <Suspense
        fallback={
          <div className="h-20 bg-background/95 backdrop-blur-md border-b border-border animate-pulse" />
        }
      >
        <Navigation />
      </Suspense>

      {/* Main content area */}
      <div id="main-content" className="flex-1">
        {children}
      </div>

      {/* Footer with loading fallback */}
      <Suspense
        fallback={
          <div className="h-64 bg-muted/30 border-t border-border animate-pulse" />
        }
      >
        <Footer />
      </Suspense>
    </>
  );
}
