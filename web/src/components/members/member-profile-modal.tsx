"use client";

import { type Member } from "@/app/actions/members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Globe,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
  Star,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface MemberProfileModalProps {
  member: Member | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MemberProfileModal({
  member,
  open,
  onOpenChange,
}: MemberProfileModalProps) {
  const [viewingImage, setViewingImage] = useState(false);
  const [imageType, setImageType] = useState<"profile" | "background">(
    "profile"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key to close image viewer (prevent it from closing the dialog)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && viewingImage) {
        e.preventDefault();
        e.stopPropagation();
        setViewingImage(false);
      }
    };

    if (viewingImage) {
      // Use capture phase to intercept before Dialog's listener
      document.addEventListener("keydown", handleEscape, true);
      // Prevent body scroll when image viewer is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, true);
      document.body.style.overflow = "unset";
    };
  }, [viewingImage]);

  if (!member) return null;

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
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          // Don't close dialog if image viewer is open
          if (!isOpen && viewingImage) {
            return;
          }
          onOpenChange(isOpen);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">{member.name} Profile</DialogTitle>
          </DialogHeader>

          {/* Profile Header */}
          <div
            className="relative bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 rounded-xl p-8 -mt-6 -mx-6 mb-6 cursor-pointer group/header"
            onClick={(e) => {
              // Only trigger if clicking the background, not the avatar area
              if (
                e.target === e.currentTarget ||
                (e.target as HTMLElement).closest(".bg-pattern")
              ) {
                setImageType("background");
                setViewingImage(true);
              }
            }}
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] rounded-xl group-hover/header:opacity-80 transition-opacity bg-pattern"
              onClick={(e) => {
                e.stopPropagation();
                setImageType("background");
                setViewingImage(true);
              }}
            />
            {/* Zoom indicator for background */}
            <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover/header:opacity-100 transition-opacity pointer-events-none z-10">
              <ZoomIn className="h-4 w-4 text-white" />
            </div>

            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative group z-20">
                <div
                  className="cursor-pointer relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageType("profile");
                    setViewingImage(true);
                  }}
                >
                  <Avatar className="h-32 w-32 ring-4 ring-primary/20 shadow-2xl group-hover:ring-primary/40 transition-all">
                    <AvatarImage
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {/* Zoom indicator on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 h-5 w-5 bg-green-500 rounded-full ring-4 ring-card shadow-lg" />
                </div>
              </div>

              {/* Name & Role */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-3xl font-black text-foreground mb-2">
                  {member.name}
                </h2>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-3">
                  <Badge
                    variant={getRoleBadgeVariant(member.role)}
                    className="shadow-md backdrop-blur-sm font-semibold"
                  >
                    {member.role}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-primary/30 bg-primary/5 font-semibold"
                  >
                    {member.year}
                  </Badge>
                </div>
                <div className="flex items-center justify-center sm:justify-start text-sm text-muted-foreground gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{getCountryDisplay()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-6">
            {/* Academic Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Major */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/30 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary shrink-0 shadow-md">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-0.5">Major</p>
                  <p className="font-bold text-foreground text-sm">
                    {member.major}
                  </p>
                </div>
              </div>

              {/* Graduation Year */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20 hover:border-secondary/30 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent shrink-0 shadow-md">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Graduation
                  </p>
                  <p className="font-bold text-foreground text-sm">
                    Class of {member.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
              <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                About {member.name.split(" ")[0]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Member Since */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Member Since</p>
                  <p className="font-bold text-foreground">
                    {new Date(member.joinedDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="font-semibold">
                {Math.floor(
                  (new Date().getTime() -
                    new Date(member.joinedDate).getTime()) /
                    (1000 * 60 * 60 * 24 * 365)
                )}{" "}
                {Math.floor(
                  (new Date().getTime() -
                    new Date(member.joinedDate).getTime()) /
                    (1000 * 60 * 60 * 24 * 365)
                ) === 1
                  ? "year"
                  : "years"}
              </Badge>
            </div>

            {/* Involvement Section */}
            <div className="space-y-4">
              {/* Committees */}
              {member.committees.length > 0 && (
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-5 border border-primary/20">
                  <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                      <Star className="h-4 w-4 text-primary-foreground" />
                    </div>
                    Committee Involvement
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.committees.map((committee, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-primary/15 to-secondary/15 text-primary hover:from-primary/25 hover:to-secondary/25 transition-colors border border-primary/30 font-medium px-3 py-1"
                      >
                        {committee}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              <div className="bg-gradient-to-br from-secondary/5 to-transparent rounded-xl p-5 border border-secondary/20">
                <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-sm">
                    <MessageCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  Languages Spoken
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.languages.map((language, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary/10 hover:bg-secondary/20 transition-colors border-secondary/30 font-medium px-3 py-1"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Interests */}
              {member.interests.length > 0 && (
                <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-xl p-5 border border-accent/20">
                  <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-sm">
                      <Heart className="h-4 w-4 text-primary-foreground" />
                    </div>
                    Interests & Hobbies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.interests.map((interest, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-accent/10 border-accent/30 hover:bg-accent/20 transition-colors font-medium px-3 py-1"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-6">
              <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Connect with {member.name.split(" ")[0]}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-md hover:shadow-xl transition-all duration-300 h-11 cursor-pointer"
                  >
                    <Link
                      href={`mailto:${member.email}`}
                      className="cursor-pointer"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-primary/40 hover:bg-primary/10 hover:border-primary/60 font-semibold transition-all duration-300 h-11 bg-background cursor-pointer"
                  >
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Viewer Portal - Rendered at document body level */}
      {mounted &&
        viewingImage &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/95"
              style={{ zIndex: 99999 }}
              onClick={() => setViewingImage(false)}
            />

            {/* Close Button - Separate from backdrop */}
            <button
              type="button"
              className="fixed top-4 right-4 text-white hover:bg-white/20 h-16 w-16 rounded-full flex items-center justify-center transition-all bg-black/80 hover:scale-110 active:scale-95 cursor-pointer"
              style={{
                zIndex: 100002,
                cursor: "pointer",
                pointerEvents: "auto",
              }}
              onClick={(e) => {
                console.log("X button clicked!");
                e.stopPropagation();
                e.preventDefault();
                setViewingImage(false);
              }}
              onPointerDown={(e) => {
                console.log("X button pointer down!");
                e.stopPropagation();
                setViewingImage(false);
              }}
              aria-label="Close image viewer"
            >
              <X className="h-8 w-8" style={{ pointerEvents: "none" }} />
            </button>

            {/* Image Container */}
            <div
              className="fixed inset-0 flex items-center justify-center p-4"
              style={{ zIndex: 100000, pointerEvents: "none" }}
            >
              <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      imageType === "profile"
                        ? member.avatar || "/placeholder.svg"
                        : "/header-pattern.svg"
                    }
                    alt={
                      imageType === "profile"
                        ? member.name
                        : "Background pattern"
                    }
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Help Text */}
            <div
              className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm flex items-center gap-2 pointer-events-none"
              style={{ zIndex: 100001 }}
            >
              <span className="font-medium">
                {imageType === "profile"
                  ? "Profile Picture"
                  : "Background Pattern"}
              </span>
              <span className="mx-2">•</span>
              <span>Click anywhere or press ESC to close</span>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
