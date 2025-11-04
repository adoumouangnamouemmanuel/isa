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

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
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
