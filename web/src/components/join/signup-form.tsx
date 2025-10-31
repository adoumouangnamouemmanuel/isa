"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CheckCircle2,
  Eye,
  EyeOff,
  Globe,
  GraduationCap,
  Lock,
  Mail,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    major: "",
    classYear: "",
    gender: "",
    interests: "",
    agreeToTerms: false,
    agreeToNewsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication will be implemented later
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="flex justify-center">
          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 animate-bounce" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Welcome to ISA! 🎉</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your account has been created successfully. Check your email for
            verification.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-primary to-secondary"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Personal Information */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold flex items-center gap-2 text-primary">
          <User className="h-4 w-4" />
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm">
              Email <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@ashesi.edu.gh"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-9 h-9"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+233 XX XXX XXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                className="pl-9 h-9"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="gender" className="text-sm">
            Gender <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.gender}
            onValueChange={(value) => handleSelectChange("gender", value)}
            required
          >
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Academic Information */}
      <div className="space-y-3 pt-3 border-t">
        <h3 className="text-base font-semibold flex items-center gap-2 text-primary">
          <GraduationCap className="h-4 w-4" />
          Academic Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="country" className="text-sm">
              Country <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="country"
                name="country"
                placeholder="e.g., Nigeria"
                value={formData.country}
                onChange={handleChange}
                required
                className="pl-9 h-9"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="classYear" className="text-sm">
              Class Year <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground z-10" />
              <Select
                value={formData.classYear}
                onValueChange={(value) =>
                  handleSelectChange("classYear", value)
                }
                required
              >
                <SelectTrigger className="pl-9 h-9">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">Class of 2025</SelectItem>
                  <SelectItem value="2026">Class of 2026</SelectItem>
                  <SelectItem value="2027">Class of 2027</SelectItem>
                  <SelectItem value="2028">Class of 2028</SelectItem>
                  <SelectItem value="2029">Class of 2029</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="major" className="text-sm">
            Major/Program <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.major}
            onValueChange={(value) => handleSelectChange("major", value)}
            required
          >
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select your major" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="computer-science">Computer Science</SelectItem>
              <SelectItem value="business-administration">
                Business Administration
              </SelectItem>
              <SelectItem value="management-information-systems">
                Management Information Systems
              </SelectItem>
              <SelectItem value="computer-engineering">
                Computer Engineering
              </SelectItem>
              <SelectItem value="electrical-electronics-engineering">
                Electrical & Electronics Engineering
              </SelectItem>
              <SelectItem value="mechanical-engineering">
                Mechanical Engineering
              </SelectItem>
              <SelectItem value="mechatronics-engineering">
                Mechatronics Engineering
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Password */}
      <div className="space-y-3 pt-3 border-t">
        <h3 className="text-base font-semibold flex items-center gap-2 text-primary">
          <Lock className="h-4 w-4" />
          Security
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm">
              Password <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
                className="pl-9 pr-9 h-9"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-sm">
              Confirm <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="pl-9 pr-9 h-9"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-2 pt-3 border-t">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) =>
              handleCheckboxChange("agreeToTerms", checked as boolean)
            }
            required
          />
          <label
            htmlFor="terms"
            className="text-sm leading-tight cursor-pointer"
          >
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Privacy Policy
            </a>
            <span className="text-destructive">*</span>
          </label>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.agreeToNewsletter}
            onCheckedChange={(checked) =>
              handleCheckboxChange("agreeToNewsletter", checked as boolean)
            }
          />
          <label
            htmlFor="newsletter"
            className="text-sm leading-tight cursor-pointer"
          >
            Receive updates about events and news
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-10 text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90"
        disabled={!formData.agreeToTerms}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Create Account
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <button
          type="button"
          className="text-primary hover:underline font-medium"
          onClick={() => {
            const loginTab = document.querySelector(
              '[value="login"]'
            ) as HTMLElement;
            loginTab?.click();
          }}
        >
          Login here
        </button>
      </p>
    </form>
  );
}
