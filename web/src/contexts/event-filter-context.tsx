"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface EventFilters {
  category: string;
  timeFilter: string;
  searchQuery: string;
}

interface EventFilterContextType {
  filters: EventFilters;
  setCategory: (category: string) => void;
  setTimeFilter: (timeFilter: string) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

const EventFilterContext = createContext<EventFilterContextType | undefined>(
  undefined
);

export function EventFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<EventFilters>({
    category: "All",
    timeFilter: "Upcoming",
    searchQuery: "",
  });

  const setCategory = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const setTimeFilter = (timeFilter: string) => {
    setFilters((prev) => ({ ...prev, timeFilter }));
  };

  const setSearchQuery = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const clearFilters = () => {
    setFilters({
      category: "All",
      timeFilter: "Upcoming",
      searchQuery: "",
    });
  };

  return (
    <EventFilterContext.Provider
      value={{
        filters,
        setCategory,
        setTimeFilter,
        setSearchQuery,
        clearFilters,
      }}
    >
      {children}
    </EventFilterContext.Provider>
  );
}

export function useEventFilters() {
  const context = useContext(EventFilterContext);
  if (context === undefined) {
    throw new Error(
      "useEventFilters must be used within an EventFilterProvider"
    );
  }
  return context;
}
