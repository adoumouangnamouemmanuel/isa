"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface FirstLoginBannerProps {
  onEditClick: () => void;
}

export function FirstLoginBanner({ onEditClick }: FirstLoginBannerProps) {
  const searchParams = useSearchParams();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const editMode = searchParams.get("edit");
    if (editMode === "true") {
      setShouldShow(true);
      // Auto-trigger edit dialog
      setTimeout(() => {
        onEditClick();
      }, 500);
    }
  }, [searchParams, onEditClick]);

  if (!shouldShow) return null;

  return (
    <Alert className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
      <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <AlertDescription className="text-blue-800 dark:text-blue-200">
        <strong>Welcome to ISA! 🎉</strong> Please complete your profile to help
        us connect you with other members.
      </AlertDescription>
    </Alert>
  );
}
