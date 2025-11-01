"use server";

import { createClient } from "@/lib/supabase/server";
import { formatMajor } from "@/lib/utils";

export interface Member {
  id: string;
  name: string;
  country: string;
  flag: string;
  role: string;
  major: string;
  year: string;
  email: string;
  linkedin: string;
  bio: string;
  avatar: string;
  joinedDate: string;
  committees: string[];
  languages: string[];
  interests: string[];
}

export async function getAllMembers(): Promise<Member[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("is_executive", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching members:", error);
    return [];
  }

  if (!data) {
    return [];
  }

  // Transform database records to Member format
  return data.map((profile) => ({
    id: profile.id,
    name: profile.full_name || "ISA Member",
    country: profile.country || "Unknown",
    flag: getCountryCode(profile.country || ""),
    role: profile.role || "Member",
    major: formatMajor(profile.major),
    year: profile.year || "N/A",
    email: "", // Email is in auth.users, not profiles
    linkedin: profile.linkedin || "",
    bio:
      profile.bio ||
      "ISA member dedicated to fostering connections and celebrating diversity.",
    avatar: profile.profile_image_url || "",
    joinedDate: profile.joined_date || profile.created_at,
    committees: profile.committees || [],
    languages: profile.languages || [],
    interests: profile.interests || [],
  }));
}

export async function getMemberById(id: string): Promise<Member | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error fetching member:", error);
    return null;
  }

  return {
    id: data.id,
    name: data.full_name || "ISA Member",
    country: data.country || "Unknown",
    flag: getCountryCode(data.country || ""),
    role: data.role || "Member",
    major: formatMajor(data.major),
    year: data.year || "N/A",
    email: "", // Email is in auth.users, not profiles
    linkedin: data.linkedin || "",
    bio:
      data.bio ||
      "ISA member dedicated to fostering connections and celebrating diversity.",
    avatar: data.profile_image_url || "",
    joinedDate: data.joined_date || data.created_at,
    committees: data.committees || [],
    languages: data.languages || [],
    interests: data.interests || [],
  };
}

export async function getExecutiveMembers(): Promise<Member[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("is_executive", true)
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Error fetching executives:", error);
    return [];
  }

  return data.map((profile) => ({
    id: profile.id,
    name: profile.full_name || "ISA Member",
    country: profile.country || "Unknown",
    flag: getCountryCode(profile.country || ""),
    role: profile.role || "Member",
    major: formatMajor(profile.major),
    year: profile.year || "N/A",
    email: "", // Email is in auth.users, not profiles
    linkedin: profile.linkedin || "",
    bio:
      profile.bio ||
      "ISA member dedicated to fostering connections and celebrating diversity.",
    avatar: profile.profile_image_url || "",
    joinedDate: profile.joined_date || profile.created_at,
    committees: profile.committees || [],
    languages: profile.languages || [],
    interests: profile.interests || [],
  }));
}

// Helper function to get country code from country name
function getCountryCode(country: string | null): string {
  if (!country) return "🌍";

  const countryMap: Record<string, string> = {
    Algeria: "DZ",
    Angola: "AO",
    Benin: "BJ",
    Botswana: "BW",
    "Burkina Faso": "BF",
    Burundi: "BI",
    Cameroon: "CM",
    "Cape Verde": "CV",
    "Central African Republic": "CF",
    Chad: "TD",
    Comoros: "KM",
    Congo: "CG",
    "DR Congo": "CD",
    Djibouti: "DJ",
    Egypt: "EG",
    "Equatorial Guinea": "GQ",
    Eritrea: "ER",
    Eswatini: "SZ",
    Ethiopia: "ET",
    Gabon: "GA",
    Gambia: "GM",
    Ghana: "GH",
    Guinea: "GN",
    "Guinea-Bissau": "GW",
    "Ivory Coast": "CI",
    Kenya: "KE",
    Lesotho: "LS",
    Liberia: "LR",
    Libya: "LY",
    Madagascar: "MG",
    Malawi: "MW",
    Mali: "ML",
    Mauritania: "MR",
    Mauritius: "MU",
    Morocco: "MA",
    Mozambique: "MZ",
    Namibia: "NA",
    Niger: "NE",
    Nigeria: "NG",
    Rwanda: "RW",
    "Sao Tome and Principe": "ST",
    Senegal: "SN",
    Seychelles: "SC",
    "Sierra Leone": "SL",
    Somalia: "SO",
    "South Africa": "ZA",
    "South Sudan": "SS",
    Sudan: "SD",
    Tanzania: "TZ",
    Togo: "TG",
    Tunisia: "TN",
    Uganda: "UG",
    Zambia: "ZM",
    Zimbabwe: "ZW",
  };

  return countryMap[country] || "🌍";
}
