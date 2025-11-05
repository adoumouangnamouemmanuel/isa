"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEventFilters } from "@/contexts/event-filter-context";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Briefcase,
  PartyPopper,
  Search,
  Users,
  X,
} from "lucide-react";

const categories = [
  { name: "All", icon: PartyPopper },
  { name: "Cultural", icon: Users },
  { name: "Social", icon: PartyPopper },
  { name: "Professional", icon: Briefcase },
  { name: "Academic", icon: BookOpen },
];

const timeFilters = [
  { name: "Upcoming" },
  { name: "This Month" },
  { name: "Past Events" },
];

export function EventsFilter() {
  const { filters, setCategory, setTimeFilter, setSearchQuery, clearFilters } =
    useEventFilters();

  const hasActiveFilters =
    filters.category !== "All" || filters.searchQuery !== "";

  return (
    <div className="mb-10 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          value={filters.searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 h-12 text-base rounded-xl bg-background border-border/50 focus:border-primary/50 transition-all"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Category:</span>
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = filters.category === category.name;
            return (
              <Button
                key={category.name}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(category.name)}
                className={cn(
                  "cursor-pointer transition-all",
                  !isSelected && "hover:bg-primary/5 hover:border-primary/30"
                )}
              >
                <Icon className="mr-1.5 h-3.5 w-3.5" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Time Filters */}
        <div className="flex items-center gap-2">
          {timeFilters.map((timeFilter) => {
            const isSelected = filters.timeFilter === timeFilter.name;
            return (
              <Button
                key={timeFilter.name}
                variant={isSelected ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTimeFilter(timeFilter.name)}
                className="cursor-pointer"
              >
                {timeFilter.name}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 bg-muted/30 rounded-lg p-3 border border-border/30">
          <span className="text-sm text-muted-foreground">Filters:</span>

          {filters.category !== "All" && (
            <Badge variant="default" className="cursor-pointer">
              {filters.category}
            </Badge>
          )}

          {filters.searchQuery && (
            <Badge variant="outline" className="cursor-pointer">
              &quot;{filters.searchQuery}&quot;
            </Badge>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto h-7 text-xs cursor-pointer"
          >
            <X className="mr-1 h-3 w-3" />
            Clear
          </Button>
        </div>
      )}
    </div>
  );
}
