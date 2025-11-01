import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to format major/program names
export function formatMajor(major: string | null): string {
  if (!major) return "N/A";

  const majorMap: Record<string, string> = {
    "bsc-computer-engineering": "Computer Engineering",
    "bsc-electrical-electronic-engineering":
      "Electrical/Electronic Engineering",
    "bsc-mechanical-engineering": "Mechanical Engineering",
    "bsc-mechatronic-engineering": "Mechatronic Engineering",
    "bsc-business-administration": "Business Administration",
    "bsc-economics": "Economics",
    "bsc-computer-science": "Computer Science",
    "bsc-management-information-systems": "Management Information Systems",
    "llb-law-public-policy": "Law with Public Policy",
    "bsc-biological-engineering": "Biological Engineering",
    "msc-intelligent-computing-systems": "Intelligent Computing Systems (MSc)",
    "msc-mechatronic-engineering": "Mechatronic Engineering (MSc)",
    mba: "MBA",
    "executive-education": "Executive Education",
  };

  return majorMap[major] || major;
}
