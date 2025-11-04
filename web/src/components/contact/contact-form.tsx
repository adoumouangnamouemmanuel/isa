"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  subscribe: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  category?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // console.log("[v0] Contact form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        subscribe: false,
      });
    }, 3000);
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-primary/20 shadow-2xl animate-fade-in">
        <CardContent className="p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <CheckCircle
                className="h-24 w-24 text-primary relative z-10 animate-bounce"
                strokeWidth={2}
              />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-3 animate-fade-in">
            Message Sent Successfully! 🎉
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Thank you for reaching out. We&apos;ll get back to you within 24
            hours.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <CheckCircle className="h-4 w-4" />
            <span>Your message has been received</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
      <CardHeader className="space-y-2 border-b border-border/50 pb-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Send className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-2xl text-foreground font-bold">
            Send us a Message
          </CardTitle>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Emmanuel Adoum"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`h-11 transition-all duration-200 border-2 bg-background ${
                  errors.name
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-border hover:border-primary/50 focus-visible:ring-primary focus-visible:border-primary"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="username@ashesi.edu.gh"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`h-11 transition-all duration-200 border-2 bg-background ${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-border hover:border-primary/50 focus-visible:ring-primary focus-visible:border-primary"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-semibold">
              Subject *
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`h-11 transition-all duration-200 border-2 bg-background ${
                errors.subject
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-border hover:border-primary/50 focus-visible:ring-primary focus-visible:border-primary"
              }`}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                {errors.subject}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-semibold">
              Category *
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleInputChange("category", value)}
            >
              <SelectTrigger
                className={`h-11 transition-all duration-200 border-2 bg-background ${
                  errors.category
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-border hover:border-primary/50 focus-visible:ring-primary focus-visible:border-primary"
                }`}
              >
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">💬 General Inquiry</SelectItem>
                <SelectItem value="membership">👥 Membership</SelectItem>
                <SelectItem value="events">🎉 Events</SelectItem>
                <SelectItem value="volunteer">
                  🤝 Volunteer Opportunities
                </SelectItem>
                <SelectItem value="partnership">🤝 Partnership</SelectItem>
                <SelectItem value="feedback">💭 Feedback</SelectItem>
                <SelectItem value="support">🆘 Support</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                {errors.category}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="message" className="text-sm font-semibold">
                Message *
              </Label>
              <span className="text-xs text-muted-foreground">
                {formData.message.length} / 500
              </span>
            </div>
            <Textarea
              id="message"
              placeholder="Tell us more about your inquiry..."
              rows={6}
              maxLength={500}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`transition-all duration-200 resize-none border-2 bg-background ${
                errors.message
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-border hover:border-primary/50 focus-visible:ring-primary focus-visible:border-primary"
              }`}
            />
            {errors.message && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/30 transition-colors">
            <Checkbox
              id="subscribe"
              checked={formData.subscribe}
              onCheckedChange={(checked: boolean) =>
                handleInputChange("subscribe", checked)
              }
              className="mt-0.5"
            />
            <div className="flex-1">
              <Label
                htmlFor="subscribe"
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                Subscribe to our newsletter
              </Label>
              <p className="text-xs text-muted-foreground mt-1">
                Get updates on events, activities, and community news
              </p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/85 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                <span>Sending your message...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you agree to our terms and privacy policy
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
