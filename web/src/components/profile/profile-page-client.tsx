"use client";

import { EditProfileDialog } from "@/components/settings/edit-profile-dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProfilePageClientProps {
  userId: string;
}

export function ProfilePageClient({ userId }: ProfilePageClientProps) {
  const searchParams = useSearchParams();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const editMode = searchParams.get("edit");
    if (editMode === "true") {
      setShowBanner(true);
      // Auto-open edit dialog after a short delay
      setTimeout(() => {
        setEditDialogOpen(true);
      }, 500);
    }
  }, [searchParams]);

  return (
    <>
      {showBanner && (
        <Alert className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-blue-800 dark:text-blue-200">
            <strong>Welcome to ISA! 🎉</strong> Please complete your profile to
            help us connect you with other members.
          </AlertDescription>
        </Alert>
      )}
      <EditProfileDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        userId={userId}
      />
    </>
  );
}
