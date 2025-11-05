"use client";

import { type Member } from "@/app/actions/members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, GraduationCap } from "lucide-react";

interface MemberCardProps {
  member: Member;
  onViewProfile: (member: Member) => void;
}

export function MemberCard({ member, onViewProfile }: MemberCardProps) {
  const handleClick = () => {
    onViewProfile(member);
  };
  // Convert country code to flag emoji
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return "";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const getCountryDisplay = () => {
    if (member.country.includes(" ")) {
      return member.country;
    }
    const flagEmoji = getFlagEmoji(member.flag);
    return flagEmoji ? `${flagEmoji} ${member.country}` : member.country;
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "President":
      case "Vice President":
        return "default";
      case "Secretary":
      case "Treasurer":
      case "Event Organizer":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Card
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Minimal Content */}
      <div className="relative p-4 text-center space-y-2.5">
        {/* Avatar */}
        <div className="relative inline-block">
          <Avatar className="h-20 w-20 mx-auto ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
            <AvatarImage
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
            />
            <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <div>
          <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {member.name}
          </h3>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            <Badge
              variant={getRoleBadgeVariant(member.role)}
              className="text-[8px] px-2 py-0.5"
            >
              {member.role}
            </Badge>
            <Badge
              variant="outline"
              className="text-[10px] px-2 py-0.5 border-primary/30 bg-primary/5"
            >
              {member.year}
            </Badge>
          </div>
        </div>

        {/* Country & Major */}
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center justify-center gap-1">
            <Globe className="h-3.5 w-3.5 text-primary flex-shrink-0" />
            <span className="line-clamp-1">{getCountryDisplay()}</span>
          </div>
          <div className="flex items-start justify-center gap-1">
            <GraduationCap className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2 text-center text-[9px]">{member.major}</span>
          </div>
        </div>

        {/* View Profile Button */}
        <Button
          size="sm"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-xs font-semibold transition-all duration-300 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
}
