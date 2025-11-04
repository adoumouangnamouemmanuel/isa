"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUp(formData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  classYear: string;
  major: string;
}) {
  const supabase = await createClient();

  // Sign up the user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        country: formData.country,
        class_year: formData.classYear,
        major: formData.major,
        full_name: `${formData.firstName} ${formData.lastName}`,
      },
    },
  });

  if (authError) {
    return { error: authError.message };
  }

  // Insert or update the profile record (upsert handles both cases)
  if (authData.user) {
    const profileData = {
      id: authData.user.id,
      full_name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      country: formData.country,
      year: formData.classYear,
      major: formData.major,
      role: "Member", // Set default role
    };

    console.log("Attempting to upsert profile with data:", profileData);

    const { data: upsertedData, error: profileError } = await supabase
      .from("profiles")
      .upsert(profileData, {
        onConflict: "id", // Update if user already exists
      })
      .select();

    if (profileError) {
      console.error("Profile upsert error:", profileError);
      // Note: User is still created in auth, but profile creation/update failed
    } else {
      // console.log("Profile upserted successfully:", upsertedData);
    }
  }

  revalidatePath("/", "layout");
  return { success: true, message: "Check your email to confirm your account" };
}

export async function signIn(email: string, password: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  // Check if this is the user's first login by checking if profile is incomplete
  if (data.user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("bio, linkedin, committees, languages, interests")
      .eq("id", data.user.id)
      .single();

    const isFirstLogin =
      !profile ||
      (!profile.bio &&
        !profile.linkedin &&
        (!profile.committees || profile.committees.length === 0) &&
        (!profile.languages || profile.languages.length === 0) &&
        (!profile.interests || profile.interests.length === 0));

    revalidatePath("/", "layout");
    return { success: true, isFirstLogin };
  }

  revalidatePath("/", "layout");
  return { success: true, isFirstLogin: false };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function changePassword(
  currentPassword: string,
  newPassword: string
) {
  const supabase = await createClient();

  // First verify the current password by attempting to sign in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return { error: "No user found" };
  }

  // Verify current password
  const { error: verifyError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: currentPassword,
  });

  if (verifyError) {
    return { error: "Current password is incorrect" };
  }

  // Update to new password
  const { error: updateError } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (updateError) {
    return { error: updateError.message };
  }

  return { success: true };
}

export async function resendVerificationEmail(email: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true, message: "Verification email sent successfully" };
}

export async function resetPassword(email: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }/auth/reset-password`,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true, message: "Password reset email sent successfully" };
}
