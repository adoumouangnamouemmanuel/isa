import { MinimalistLoginForm } from "@/components/join/minimalist-login-form";

export const metadata = {
  title: "Login | ISA Ashesi",
  description: "Login to your ISA member account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-4">
      <MinimalistLoginForm />
    </div>
  );
}
