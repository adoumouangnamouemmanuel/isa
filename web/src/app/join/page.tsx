import { MinimalistJoinForm } from "@/components/join/minimalist-join-form";

export const metadata = {
  title: "Join ISA | Ashesi University",
  description:
    "Join the International Students Association at Ashesi University. Connect with students from over 30 countries and be part of our vibrant community.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-4">
      <MinimalistJoinForm />
    </div>
  );
}
