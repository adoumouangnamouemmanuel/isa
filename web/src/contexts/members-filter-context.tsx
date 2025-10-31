"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedMajor: string;
  setSelectedMajor: (major: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function MembersFilterProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedMajor, setSelectedMajor] = useState("All Majors");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRole("All Roles");
    setSelectedMajor("All Majors");
    setSelectedYear("All Years");
    setSelectedCountry("All Countries");
  };

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedRole,
        setSelectedRole,
        selectedMajor,
        setSelectedMajor,
        selectedYear,
        setSelectedYear,
        selectedCountry,
        setSelectedCountry,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useMembersFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error(
      "useMembersFilter must be used within a MembersFilterProvider"
    );
  }
  return context;
}
