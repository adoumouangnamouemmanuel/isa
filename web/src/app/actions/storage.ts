"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
];

export async function uploadProfileImage(formData: FormData) {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "You must be logged in to upload images" };
  }

  const file = formData.get("file") as File;

  if (!file) {
    return { error: "No file provided" };
  }

  // Validate file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      error: "Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.",
    };
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return { error: "File size must be less than 10MB" };
  }

  // Generate file path: {user_id}/profile.{extension}
  const fileExt = file.name.split(".").pop();
  const filePath = `${user.id}/profile.${fileExt}`;

  try {
    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("profile-images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true, // Replace existing file
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return { error: uploadError.message };
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("profile-images").getPublicUrl(filePath);

    // Update user profile with image URL
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ profile_image_url: publicUrl })
      .eq("id", user.id);

    if (updateError) {
      console.error("Profile update error:", updateError);
      return { error: "Image uploaded but failed to update profile" };
    }

    revalidatePath("/profile");
    return { success: true, url: publicUrl };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "An unexpected error occurred" };
  }
}

export async function deleteProfileImage() {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "You must be logged in" };
  }

  try {
    // Get current profile to find image URL
    const { data: profile } = await supabase
      .from("profiles")
      .select("profile_image_url")
      .eq("id", user.id)
      .single();

    if (!profile?.profile_image_url) {
      return { error: "No profile image to delete" };
    }

    // Extract file path from URL
    const urlParts = profile.profile_image_url.split("/profile-images/");
    if (urlParts.length < 2) {
      return { error: "Invalid image URL" };
    }
    const filePath = urlParts[1];

    // Delete from storage
    const { error: deleteError } = await supabase.storage
      .from("profile-images")
      .remove([filePath]);

    if (deleteError) {
      console.error("Delete error:", deleteError);
      return { error: deleteError.message };
    }

    // Update profile to remove image URL
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ profile_image_url: null })
      .eq("id", user.id);

    if (updateError) {
      console.error("Profile update error:", updateError);
      return { error: "Image deleted but failed to update profile" };
    }

    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "An unexpected error occurred" };
  }
}

export async function getProfileImageUrl(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("profile_image_url")
    .eq("id", userId)
    .single();

  if (error || !data) {
    return null;
  }

  return data.profile_image_url;
}
