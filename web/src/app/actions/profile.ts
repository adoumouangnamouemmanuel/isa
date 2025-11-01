"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface UpdateProfileData {
  full_name?: string;
  phone?: string;
  country?: string;
  year?: string;
  major?: string;
  bio?: string;
  linkedin?: string;
  committees?: string[];
  languages?: string[];
  interests?: string[];
}

export async function updateProfile(data: UpdateProfileData) {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  // Update profile
  const { error } = await supabase
    .from("profiles")
    .update({
      ...data,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id);

  if (error) {
    console.error("Profile update error:", error);
    return { error: error.message };
  }

  revalidatePath("/profile");
  revalidatePath("/settings");
  revalidatePath("/members");

  return { success: true };
}

export async function getProfile(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Profile fetch error:", error);
    return null;
  }

  return data;
}
