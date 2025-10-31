"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMembersFilter } from "@/contexts/members-filter-context";
import { Filter, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";

// Utility function to convert country code to flag emoji
const getFlagEmoji = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const roles = [
  "All Roles",
  "President",
  "Vice President",
  "Secretary General",
  "Treasurer",
  "Public Relations Officer",
  "Event Organizer",
  "East Africa Representative",
  "West Africa Representative",
  "Central Africa Representative",
  "Graduate Representative",
];

const majors = [
  "All Majors",
  "B.Sc. Computer Engineering",
  "B.Sc. Electrical/Electronic Engineering",
  "B.Sc. Mechanical Engineering",
  "B.Sc. Mechatronic Engineering",
  "B.Sc. Business Administration",
  "B.Sc. Economics",
  "B.Sc. Computer Science",
  "B.Sc. Management Information Systems",
  "LLB Law with Public Policy",
  "B.Sc. Biological Engineering",
  "M.Sc. Intelligent Computing Systems",
  "M.Sc. Mechatronic Engineering",
  "MBA",
  "Executive Education",
];

const yearLevels = ["All Years", "2025", "2026", "2027", "2028", "2029"];

// African countries with codes for flag generation
const africanCountries = [
  { code: "GH", name: "Ghana" },
  { code: "NG", name: "Nigeria" },
  { code: "SN", name: "Senegal" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "BJ", name: "Benin" },
  { code: "TG", name: "Togo" },
  { code: "BF", name: "Burkina Faso" },
  { code: "ML", name: "Mali" },
  { code: "NE", name: "Niger" },
  { code: "GM", name: "Gambia" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GN", name: "Guinea" },
  { code: "SL", name: "Sierra Leone" },
  { code: "LR", name: "Liberia" },
  { code: "KE", name: "Kenya" },
  { code: "TZ", name: "Tanzania" },
  { code: "UG", name: "Uganda" },
  { code: "RW", name: "Rwanda" },
  { code: "BI", name: "Burundi" },
  { code: "ET", name: "Ethiopia" },
  { code: "SO", name: "Somalia" },
  { code: "ER", name: "Eritrea" },
  { code: "DJ", name: "Djibouti" },
  { code: "ZA", name: "South Africa" },
  { code: "ZW", name: "Zimbabwe" },
  { code: "ZM", name: "Zambia" },
  { code: "MW", name: "Malawi" },
  { code: "MZ", name: "Mozambique" },
  { code: "BW", name: "Botswana" },
  { code: "NA", name: "Namibia" },
  { code: "LS", name: "Lesotho" },
  { code: "SZ", name: "Eswatini" },
  { code: "CM", name: "Cameroon" },
  { code: "CD", name: "DR Congo" },
  { code: "CG", name: "Congo" },
  { code: "GA", name: "Gabon" },
  { code: "CF", name: "Central African Rep." },
  { code: "TD", name: "Chad" },
  { code: "EG", name: "Egypt" },
  { code: "MA", name: "Morocco" },
  { code: "TN", name: "Tunisia" },
  { code: "DZ", name: "Algeria" },
  { code: "LY", name: "Libya" },
  { code: "SD", name: "Sudan" },
  { code: "SS", name: "South Sudan" },
  { code: "MU", name: "Mauritius" },
  { code: "SC", name: "Seychelles" },
  { code: "MG", name: "Madagascar" },
  { code: "KM", name: "Comoros" },
  { code: "CV", name: "Cape Verde" },
  { code: "ST", name: "São Tomé and Príncipe" },
];

const countries = [
  "All Countries",
  ...africanCountries.map((c) => c.name),
  "Other",
];

export function MembersFilter() {
  const {
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
  } = useMembersFilter();

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedRole !== "All Roles" ||
    selectedMajor !== "All Majors" ||
    selectedYear !== "All Years" ||
    selectedCountry !== "All Countries";

  return (
    <div className="mb-10 space-y-6">
      {/* Enhanced Filter Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Find Members</h2>
            <p className="text-sm text-muted-foreground">
              Filter by name, role, major, and more
            </p>
          </div>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
          >
            <X className="mr-2 h-4 w-4" />
            Clear all filters
          </Button>
        )}
      </div>

      {/* Enhanced Search Bar */}
      <div className="relative max-w-2xl group">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
        <Input
          placeholder="Search members by name, country, or interest..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-12 text-base border-border/50 focus:border-primary/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Enhanced Filter Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Role
          </label>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Major
          </label>
          <Select value={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger className="border-border/50 hover:border-secondary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {majors.map((major) => (
                <SelectItem key={major} value={major}>
                  {major}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            Year Level
          </label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="border-border/50 hover:border-accent/50 transition-colors bg-card/50 backdrop-blur-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {yearLevels.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Country
          </label>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {countries.map((country) => {
                const countryData = africanCountries.find(
                  (c) => c.name === country
                );
                const flag = countryData ? getFlagEmoji(countryData.code) : "";
                return (
                  <SelectItem key={country} value={country}>
                    {flag && <span className="mr-2">{flag}</span>}
                    {country}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Enhanced Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/10">
          <span className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Filter className="h-4 w-4 text-primary" />
            Active Filters:
          </span>
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <Badge
                variant="secondary"
                className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                <Sparkles className="mr-1 h-3 w-3" />
                &quot;{searchQuery}&quot;
              </Badge>
            )}
            {selectedRole !== "All Roles" && (
              <Badge
                variant="secondary"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors"
              >
                Role: {selectedRole}
              </Badge>
            )}
            {selectedMajor !== "All Majors" && (
              <Badge
                variant="secondary"
                className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
              >
                Major: {selectedMajor}
              </Badge>
            )}
            {selectedYear !== "All Years" && (
              <Badge
                variant="secondary"
                className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                Year: {selectedYear}
              </Badge>
            )}
            {selectedCountry !== "All Countries" && (
              <Badge
                variant="secondary"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors"
              >
                {selectedCountry}
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
