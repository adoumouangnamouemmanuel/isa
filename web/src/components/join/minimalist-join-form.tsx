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
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MinimalistJoinForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    major: "",
    classYear: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log("Form submitted:", formData);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md text-center space-y-6 bg-background/95 backdrop-blur p-8 rounded-2xl border shadow-xl">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle2 className="h-16 w-16 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Welcome to ISA! 🎉</h2>
          <p className="text-muted-foreground">
            Your account has been created successfully. Check your email for
            confirmation.
          </p>
        </div>
        <Button asChild className="w-full">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

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
        <h1 className="text-3xl font-bold mb-2">Join ISA</h1>
        <p className="text-sm text-muted-foreground">
          Connect with 500+ international students
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="firstName" className="text-sm">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName" className="text-sm">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-9"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+233..."
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-9"
            />
          </div>
        </div>

        {/* Country & Class Year */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="country" className="text-sm">
              Country
            </Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleSelectChange("country", value)}
              required
            >
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="Algeria">Algeria</SelectItem>
                <SelectItem value="Angola">Angola</SelectItem>
                <SelectItem value="Benin">Benin</SelectItem>
                <SelectItem value="Botswana">Botswana</SelectItem>
                <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
                <SelectItem value="Burundi">Burundi</SelectItem>
                <SelectItem value="Cameroon">Cameroon</SelectItem>
                <SelectItem value="Cape Verde">Cape Verde</SelectItem>
                <SelectItem value="Central African Republic">
                  Central African Republic
                </SelectItem>
                <SelectItem value="Chad">Chad</SelectItem>
                <SelectItem value="Comoros">Comoros</SelectItem>
                <SelectItem value="Congo">Congo</SelectItem>
                <SelectItem value="DR Congo">DR Congo</SelectItem>
                <SelectItem value="Djibouti">Djibouti</SelectItem>
                <SelectItem value="Egypt">Egypt</SelectItem>
                <SelectItem value="Equatorial Guinea">
                  Equatorial Guinea
                </SelectItem>
                <SelectItem value="Eritrea">Eritrea</SelectItem>
                <SelectItem value="Eswatini">Eswatini</SelectItem>
                <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                <SelectItem value="Gabon">Gabon</SelectItem>
                <SelectItem value="Gambia">Gambia</SelectItem>
                <SelectItem value="Ghana">Ghana</SelectItem>
                <SelectItem value="Guinea">Guinea</SelectItem>
                <SelectItem value="Guinea-Bissau">Guinea-Bissau</SelectItem>
                <SelectItem value="Ivory Coast">Ivory Coast</SelectItem>
                <SelectItem value="Kenya">Kenya</SelectItem>
                <SelectItem value="Lesotho">Lesotho</SelectItem>
                <SelectItem value="Liberia">Liberia</SelectItem>
                <SelectItem value="Libya">Libya</SelectItem>
                <SelectItem value="Madagascar">Madagascar</SelectItem>
                <SelectItem value="Malawi">Malawi</SelectItem>
                <SelectItem value="Mali">Mali</SelectItem>
                <SelectItem value="Mauritania">Mauritania</SelectItem>
                <SelectItem value="Mauritius">Mauritius</SelectItem>
                <SelectItem value="Morocco">Morocco</SelectItem>
                <SelectItem value="Mozambique">Mozambique</SelectItem>
                <SelectItem value="Namibia">Namibia</SelectItem>
                <SelectItem value="Niger">Niger</SelectItem>
                <SelectItem value="Nigeria">Nigeria</SelectItem>
                <SelectItem value="Rwanda">Rwanda</SelectItem>
                <SelectItem value="Sao Tome and Principe">
                  Sao Tome and Principe
                </SelectItem>
                <SelectItem value="Senegal">Senegal</SelectItem>
                <SelectItem value="Seychelles">Seychelles</SelectItem>
                <SelectItem value="Sierra Leone">Sierra Leone</SelectItem>
                <SelectItem value="Somalia">Somalia</SelectItem>
                <SelectItem value="South Africa">South Africa</SelectItem>
                <SelectItem value="South Sudan">South Sudan</SelectItem>
                <SelectItem value="Sudan">Sudan</SelectItem>
                <SelectItem value="Tanzania">Tanzania</SelectItem>
                <SelectItem value="Togo">Togo</SelectItem>
                <SelectItem value="Tunisia">Tunisia</SelectItem>
                <SelectItem value="Uganda">Uganda</SelectItem>
                <SelectItem value="Zambia">Zambia</SelectItem>
                <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="classYear" className="text-sm">
              Class Year
            </Label>
            <Select
              value={formData.classYear}
              onValueChange={(value) => handleSelectChange("classYear", value)}
              required
            >
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
                <SelectItem value="2028">2028</SelectItem>
                <SelectItem value="2029">2029</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Major */}
        <div className="space-y-1.5">
          <Label htmlFor="major" className="text-sm">
            Program
          </Label>
          <Select
            value={formData.major}
            onValueChange={(value) => handleSelectChange("major", value)}
            required
          >
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select your program" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="bsc-computer-engineering">
                B.Sc. Computer Engineering
              </SelectItem>
              <SelectItem value="bsc-electrical-electronic-engineering">
                B.Sc. Electrical/Electronic Engineering
              </SelectItem>
              <SelectItem value="bsc-mechanical-engineering">
                B.Sc. Mechanical Engineering
              </SelectItem>
              <SelectItem value="bsc-mechatronic-engineering">
                B.Sc. Mechatronic Engineering
              </SelectItem>
              <SelectItem value="bsc-business-administration">
                B.Sc. Business Administration
              </SelectItem>
              <SelectItem value="bsc-economics">B.Sc. Economics</SelectItem>
              <SelectItem value="bsc-computer-science">
                B.Sc. Computer Science
              </SelectItem>
              <SelectItem value="bsc-management-information-systems">
                B.Sc. Management Information Systems
              </SelectItem>
              <SelectItem value="llb-law-public-policy">
                LLB Law with Public Policy
              </SelectItem>
              <SelectItem value="bsc-biological-engineering">
                B.Sc. Biological Engineering
              </SelectItem>
              <SelectItem value="msc-intelligent-computing-systems">
                M.Sc. Intelligent Computing Systems
              </SelectItem>
              <SelectItem value="msc-mechatronic-engineering">
                M.Sc. Mechatronic Engineering
              </SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="executive-education">
                Executive Education
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-sm">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
            className="h-9"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start space-x-2 pt-2">
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
            className="text-xs leading-tight cursor-pointer"
          >
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          disabled={!formData.agreeToTerms}
        >
          Join ISA
        </Button>

        {/* Login Link */}
        <p className="text-center text-xs text-muted-foreground pt-2">
          Already a member?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
