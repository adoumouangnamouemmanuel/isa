"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Cultural", "Professional", "Social", "Academic", "Sports", "Workshop"]
const timeFilters = ["All Time", "Upcoming", "This Month", "Past Events"]

export function EventsFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTime, setSelectedTime] = useState("All Time")
  const [searchQuery, setSearchQuery] = useState("")

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedTime("All Time")
    setSearchQuery("")
  }

  const hasActiveFilters = selectedCategory !== "All" || selectedTime !== "All Time" || searchQuery !== ""

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Buttons */}
      <div className="space-y-4">
        {/* Category Filters */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "text-xs",
                  selectedCategory === category && "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Time Filters */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">Time Period</h3>
          <div className="flex flex-wrap gap-2">
            {timeFilters.map((timeFilter) => (
              <Button
                key={timeFilter}
                variant={selectedTime === timeFilter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTime(timeFilter)}
                className={cn(
                  "text-xs",
                  selectedTime === timeFilter && "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                {timeFilter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters & Clear */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 pt-2 border-t">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="text-xs">
              {selectedCategory}
            </Badge>
          )}
          {selectedTime !== "All Time" && (
            <Badge variant="secondary" className="text-xs">
              {selectedTime}
            </Badge>
          )}
          {searchQuery && (
            <Badge variant="secondary" className="text-xs">
              "{searchQuery}"
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
