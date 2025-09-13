"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"

const roles = ["All Roles", "President", "Vice President", "Secretary", "Treasurer", "Committee Chair", "Member"]
const majors = ["All Majors", "Computer Science", "Business", "Engineering", "Medicine", "Arts", "Sciences", "Other"]
const yearLevels = ["All Years", "Freshman", "Sophomore", "Junior", "Senior", "Graduate"]

export function MembersFilter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("All Roles")
  const [selectedMajor, setSelectedMajor] = useState("All Majors")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [selectedCountry, setSelectedCountry] = useState("")

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedRole("All Roles")
    setSelectedMajor("All Majors")
    setSelectedYear("All Years")
    setSelectedCountry("")
  }

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedRole !== "All Roles" ||
    selectedMajor !== "All Majors" ||
    selectedYear !== "All Years" ||
    selectedCountry !== ""

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search members by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Role</label>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger>
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

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Major</label>
          <Select value={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger>
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

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Year Level</label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
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

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Country</label>
          <Input
            placeholder="Filter by country..."
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          />
        </div>
      </div>

      {/* Active Filters & Clear */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 pt-2 border-t">
          <span className="text-sm text-muted-foreground flex items-center">
            <Filter className="mr-1 h-4 w-4" />
            Active filters:
          </span>
          {searchQuery && (
            <Badge variant="secondary" className="text-xs">
              "{searchQuery}"
            </Badge>
          )}
          {selectedRole !== "All Roles" && (
            <Badge variant="secondary" className="text-xs">
              {selectedRole}
            </Badge>
          )}
          {selectedMajor !== "All Majors" && (
            <Badge variant="secondary" className="text-xs">
              {selectedMajor}
            </Badge>
          )}
          {selectedYear !== "All Years" && (
            <Badge variant="secondary" className="text-xs">
              {selectedYear}
            </Badge>
          )}
          {selectedCountry && (
            <Badge variant="secondary" className="text-xs">
              {selectedCountry}
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto text-xs">
            <X className="mr-1 h-3 w-3" />
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}
