"use client";

import { deleteProfileImage, uploadProfileImage } from "@/app/actions/storage";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Camera, Loader2, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

interface ProfileImageUploadProps {
  currentImageUrl?: string | null;
  userInitials: string;
}

export function ProfileImageUpload({
  currentImageUrl,
  userInitials,
}: ProfileImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    currentImageUrl || null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB");
      return;
    }

    // Validate file type
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ];
    if (!allowedTypes.includes(file.type)) {
      setError("Only JPEG, PNG, WebP, and GIF images are allowed");
      return;
    }

    setError("");
    setSuccess("");
    setIsUploading(true);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadProfileImage(formData);

      if (result.error) {
        setError(result.error);
        setPreviewUrl(currentImageUrl || null);
      } else {
        setSuccess("Profile image updated successfully!");
        setTimeout(() => {
          router.refresh();
        }, 1000);
      }
    } catch {
      setError("An unexpected error occurred");
      setPreviewUrl(currentImageUrl || null);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async () => {
    if (!currentImageUrl) return;

    setError("");
    setSuccess("");
    setIsDeleting(true);

    try {
      const result = await deleteProfileImage();

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess("Profile image removed successfully!");
        setPreviewUrl(null);
        setTimeout(() => {
          router.refresh();
        }, 1000);
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Profile Picture
        </CardTitle>
        <CardDescription>
          Upload a profile picture. Max size: 10MB. Formats: JPEG, PNG, WebP,
          GIF
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-600 dark:text-green-400">
              {success}
            </AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-32 w-32">
            {previewUrl ? <AvatarImage src={previewUrl} alt="Profile" /> : null}
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-3xl font-bold">
              {userInitials}
            </AvatarFallback>
          </Avatar>

          <div className="flex gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
              onChange={handleFileSelect}
              className="hidden"
              disabled={isUploading || isDeleting}
            />

            <Button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading || isDeleting}
              variant="outline"
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  {previewUrl ? "Change Photo" : "Upload Photo"}
                </>
              )}
            </Button>

            {currentImageUrl && (
              <Button
                onClick={handleDelete}
                disabled={isUploading || isDeleting}
                variant="destructive"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Removing...
                  </>
                ) : (
                  <>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
