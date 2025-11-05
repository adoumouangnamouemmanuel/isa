import { getUser } from "@/app/actions/auth";
import { getProfile } from "@/app/actions/profile";
import { getProfileImageUrl } from "@/app/actions/storage";
import { ProfileImageUpload } from "@/components/profile-image-upload";
import { ProfilePageClient } from "@/components/profile/profile-page-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMajor } from "@/lib/utils";
import {
  Briefcase,
  Calendar,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User as UserIcon,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch full profile data from database
  const profile = await getProfile(user.id);

  // Use profile data if available, fallback to user_metadata
  const fullName =
    profile?.full_name || user.user_metadata?.full_name || "User";
  const firstName = user.user_metadata?.first_name || "";
  const lastName = user.user_metadata?.last_name || "";
  const initials =
    firstName && lastName
      ? `${firstName[0]}${lastName[0]}`.toUpperCase()
      : fullName[0]?.toUpperCase() || "U";

  // Get profile image URL
  const profileImageUrl =
    profile?.profile_image_url || (await getProfileImageUrl(user.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-6 sm:py-8 lg:py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-xs sm:text-sm text-muted-foreground hover:text-primary"
            >
              ← Back to Home
            </Link>
            <Link
              href="/settings"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-primary/80 font-semibold"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1.5 sm:mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
            View and manage your ISA membership information
          </p>
        </div>

        {/* First Login Banner and Edit Dialog Handler */}
        <ProfilePageClient userId={user.id} />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24 mb-3 sm:mb-4">
                  {profileImageUrl && (
                    <AvatarImage src={profileImageUrl} alt={fullName} />
                  )}
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-xl sm:text-2xl font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-lg sm:text-xl font-bold mb-1">
                  {fullName}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  ISA Member
                </p>
                <Badge variant="default" className="mb-3 sm:mb-4 text-xs">
                  Active
                </Badge>
                <Button asChild className="w-full h-9 sm:h-10 text-sm">
                  <Link
                    href="/settings"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Edit Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upload Image Card */}
          <div className="md:col-span-2">
            <ProfileImageUpload
              currentImageUrl={profileImageUrl}
              userInitials={initials}
            />
          </div>

          {/* Details Card */}
          <Card className="md:col-span-3">
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <CardTitle className="text-lg sm:text-xl">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Email Address
                  </p>
                  <p className="font-semibold text-sm sm:text-base break-all">
                    {user.email}
                  </p>
                </div>
              </div>

              {(profile?.phone || user.user_metadata?.phone) && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Phone Number
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {profile?.phone || user.user_metadata.phone}
                    </p>
                  </div>
                </div>
              )}

              {(profile?.country || user.user_metadata?.country) && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Country
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {profile?.country || user.user_metadata.country}
                    </p>
                  </div>
                </div>
              )}

              {(profile?.year || user.user_metadata?.class_year) && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Graduation Year
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {profile?.year || user.user_metadata.class_year}
                    </p>
                  </div>
                </div>
              )}

              {(profile?.major || user.user_metadata?.major) && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Program
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {formatMajor(
                        profile?.major || user.user_metadata?.major || null
                      )}
                    </p>
                  </div>
                </div>
              )}

              {profile?.bio && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <UserIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Bio
                    </p>
                    <p className="font-semibold text-sm sm:text-base whitespace-pre-wrap">
                      {profile.bio}
                    </p>
                  </div>
                </div>
              )}

              {profile?.linkedin &&
                (() => {
                  // Extract username from LinkedIn URL or use as-is if it's just a username
                  const extractLinkedInUsername = (input: string): string => {
                    // Remove whitespace
                    const cleaned = input.trim();

                    // If it's a URL, extract the username
                    if (cleaned.includes("linkedin.com")) {
                      // Match patterns like:
                      // linkedin.com/in/username
                      // www.linkedin.com/in/username/
                      // https://linkedin.com/in/username
                      const match = cleaned.match(
                        /linkedin\.com\/in\/([^\/\?]+)/i
                      );
                      return match ? match[1] : cleaned;
                    }

                    // Otherwise, assume it's just the username
                    return cleaned.replace(/^@/, ""); // Remove @ if present
                  };

                  const username = extractLinkedInUsername(profile.linkedin);
                  const linkedInUrl = profile.linkedin.startsWith("http")
                    ? profile.linkedin
                    : `https://linkedin.com/in/${profile.linkedin}`;

                  return (
                    <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                          LinkedIn
                        </p>
                        <a
                          href={linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm sm:text-base text-primary hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>@{username}</span>
                          <svg
                            className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })()}

              {profile?.committees && profile.committees.length > 0 && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2">
                      Committees
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {profile.committees.map(
                        (committee: string, index: number) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-[10px] sm:text-xs"
                          >
                            {committee}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {profile?.languages && profile.languages.length > 0 && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <Languages className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {profile.languages.map(
                        (language: string, index: number) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-[10px] sm:text-xs"
                          >
                            {language}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {profile?.interests && profile.interests.length > 0 && (
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-muted/30 rounded-lg">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {profile.interests.map(
                        (interest: string, index: number) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-[10px] sm:text-xs"
                          >
                            {interest}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
