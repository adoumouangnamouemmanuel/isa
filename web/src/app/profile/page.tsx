import { getUser } from "@/app/actions/auth";
import { getProfile } from "@/app/actions/profile";
import { getProfileImageUrl } from "@/app/actions/storage";
import { ProfileImageUpload } from "@/components/profile-image-upload";
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">
            View and manage your ISA membership information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  {profileImageUrl && (
                    <AvatarImage src={profileImageUrl} alt={fullName} />
                  )}
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-2xl font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold mb-1">{fullName}</h2>
                <p className="text-sm text-muted-foreground mb-4">ISA Member</p>
                <Badge variant="default" className="mb-4">
                  Active
                </Badge>
                <Button asChild className="w-full">
                  <Link href="/settings">Edit Profile</Link>
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
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Email Address
                  </p>
                  <p className="font-semibold">{user.email}</p>
                </div>
              </div>

              {(profile?.phone || user.user_metadata?.phone) && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Phone Number
                    </p>
                    <p className="font-semibold">
                      {profile?.phone || user.user_metadata.phone}
                    </p>
                  </div>
                </div>
              )}

              {(profile?.country || user.user_metadata?.country) && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Country
                    </p>
                    <p className="font-semibold">
                      {profile?.country || user.user_metadata.country}
                    </p>
                  </div>
                </div>
              )}

              {(profile?.year || user.user_metadata?.class_year) && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Graduation Year
                    </p>
                    <p className="font-semibold">
                      {profile?.year || user.user_metadata.class_year}
                    </p>
                  </div>
                </div>
              )}

              {(profile?.major || user.user_metadata?.major) && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <UserIcon className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Program
                    </p>
                    <p className="font-semibold">
                      {formatMajor(
                        profile?.major || user.user_metadata?.major || null
                      )}
                    </p>
                  </div>
                </div>
              )}

              {profile?.bio && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <UserIcon className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Bio
                    </p>
                    <p className="font-semibold whitespace-pre-wrap">
                      {profile.bio}
                    </p>
                  </div>
                </div>
              )}

              {profile?.linkedin && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      LinkedIn
                    </p>
                    <a
                      href={
                        profile.linkedin.startsWith("http")
                          ? profile.linkedin
                          : `https://linkedin.com/in/${profile.linkedin}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline"
                    >
                      {profile.linkedin}
                    </a>
                  </div>
                </div>
              )}

              {profile?.committees && profile.committees.length > 0 && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Committees
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.committees.map(
                        (committee: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {committee}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {profile?.languages && profile.languages.length > 0 && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Languages className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.languages.map(
                        (language: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {language}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {profile?.interests && profile.interests.length > 0 && (
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map(
                        (interest: string, index: number) => (
                          <Badge key={index} variant="secondary">
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
