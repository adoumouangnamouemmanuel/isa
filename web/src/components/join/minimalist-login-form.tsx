"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, ArrowLeft, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MinimalistLoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData, "Remember me:", rememberMe);

    if (formData.email && formData.password) {
      window.location.href = "/";
    } else {
      setError("Please enter your email and password");
    }
  };

  return (
    <div className="w-full max-w-md bg-background/95 backdrop-blur p-8 rounded-2xl border shadow-xl">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full overflow-hidden mb-4">
          <Image
            src="/icons/logo.png"
            alt="ISA Logo"
            width={64}
            height={64}
            className="object-contain bg-white"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-sm text-muted-foreground">
          Login to your ISA member account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@ashesi.edu.gh"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-9"
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <button
              type="button"
              className="text-xs text-primary hover:underline"
              onClick={() => alert("Password reset will be implemented")}
            >
              Forgot?
            </button>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="h-9"
            autoComplete="current-password"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <label
            htmlFor="remember"
            className="text-sm leading-tight cursor-pointer"
          >
            Remember me
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>

        {/* Signup Link */}
        <p className="text-center text-xs text-muted-foreground pt-2">
          Don&apos;t have an account?{" "}
          <Link
            href="/join"
            className="text-primary hover:underline font-medium"
          >
            Join ISA
          </Link>
        </p>
      </form>
    </div>
  );
}
