import { getUser } from "@/app/actions/auth";
import { ChangePasswordDialog } from "@/components/settings/change-password-dialog";
import { DeleteAccountDialog } from "@/components/settings/delete-account-dialog";
import { EditAccountButton } from "@/components/settings/edit-account-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell, Lock, Palette, Shield, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-6 sm:py-8 lg:py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/profile"
            className="inline-flex items-center text-xs sm:text-sm text-muted-foreground hover:text-primary mb-3 sm:mb-4"
          >
            ← Back to Profile
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1.5 sm:mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-4 sm:gap-6">
          {/* Account Settings */}
          <Card>
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base sm:text-lg">
                    Account Information
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Update your personal details and contact information
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <EditAccountButton userId={user.id} />
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base sm:text-lg">
                    Security
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Manage your password and keep your account secure
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <ChangePasswordDialog />
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base sm:text-lg">
                    Notifications
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Control how you receive updates and alerts
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <Button variant="outline" className="text-sm h-9 sm:h-10">
                Manage Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base sm:text-lg">
                    Appearance
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Customize how the app looks and feels
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Theme preference is controlled by the toggle in the navigation
                bar
              </p>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-destructive/10 flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base sm:text-lg">
                    Danger Zone
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Irreversible and destructive actions
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                  Delete Account
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
                <DeleteAccountDialog />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
