import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type: type as "signup" | "email" | "recovery",
      token_hash,
    });

    if (!error) {
      // Redirect to a success page or home
      return NextResponse.redirect(
        new URL(`${next}?confirmed=true`, request.url)
      );
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(new URL("/auth/error", request.url));
}
