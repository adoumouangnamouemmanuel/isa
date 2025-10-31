"use client";

import { Globe, Sparkles, Users } from "lucide-react";

export function JoinHeader() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12 border-b">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>

          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Join ISA Community
          </h1>
          <p className="mb-6 text-base text-muted-foreground max-w-xl mx-auto">
            Connect with 500+ international students from 30+ countries
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">500+ Members</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">30+ Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Free to Join</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
