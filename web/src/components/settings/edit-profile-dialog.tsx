"use client";

import { getProfile, updateProfile } from "@/app/actions/profile";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
}

export function EditProfileDialog({
  open,
  onOpenChange,
  userId,
}: EditProfileDialogProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    country: "",
    year: "",
    major: "",
    bio: "",
    linkedin: "",
    committees: "",
    languages: "",
    interests: "",
  });

  useEffect(() => {
    if (open && userId) {
      // Fetch current profile data
      getProfile(userId).then((profile) => {
        if (profile) {
          setFormData({
            full_name: profile.full_name || "",
            phone: profile.phone || "",
            country: profile.country || "",
            year: profile.year || "",
            major: profile.major || "",
            bio: profile.bio || "",
            linkedin: profile.linkedin || "",
            committees:
              profile.committees && Array.isArray(profile.committees)
                ? profile.committees.join(", ")
                : "",
            languages:
              profile.languages && Array.isArray(profile.languages)
                ? profile.languages.join(", ")
                : "",
            interests:
              profile.interests && Array.isArray(profile.interests)
                ? profile.interests.join(", ")
                : "",
          });
        }
      });
    }
  }, [open, userId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (name: string, value: string) => {
    // Just update the string value - don't convert to array yet
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Convert comma-separated strings to arrays before submission
    const submissionData = {
      ...formData,
      committees: (formData.committees || "")
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      languages: (formData.languages || "")
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      interests: (formData.interests || "")
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
    };

    const result = await updateProfile(submissionData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        onOpenChange(false);
        window.location.reload(); // Refresh to show updated data
      }, 1500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Account Details</DialogTitle>
          <DialogDescription>
            Update your personal information and contact details
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription>Profile updated successfully!</AlertDescription>
            </Alert>
          )}

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name</Label>
            <Input
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+233..."
            />
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleSelectChange("country", value)}
            >
              <SelectTrigger>
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

          {/* Year */}
          <div className="space-y-2">
            <Label htmlFor="year">Class Year</Label>
            <Select
              value={formData.year}
              onValueChange={(value) => handleSelectChange("year", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select year" />
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

          {/* Major */}
          <div className="space-y-2">
            <Label htmlFor="major">Program</Label>
            <Select
              value={formData.major}
              onValueChange={(value) => handleSelectChange("major", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select program" />
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

          {/* LinkedIn */}
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              rows={4}
            />
          </div>

          {/* Committees */}
          <div className="space-y-2">
            <Label htmlFor="committees">Committees</Label>
            <Input
              id="committees"
              name="committees"
              value={formData.committees}
              onChange={(e) => handleArrayChange("committees", e.target.value)}
              placeholder="e.g., Events, Marketing, Finance"
            />
            <p className="text-xs text-muted-foreground">
              Separate multiple committees with commas
            </p>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <Label htmlFor="languages">Languages</Label>
            <Input
              id="languages"
              name="languages"
              value={formData.languages}
              onChange={(e) => handleArrayChange("languages", e.target.value)}
              placeholder="e.g., English, French, Swahili"
            />
            <p className="text-xs text-muted-foreground">
              Separate multiple languages with commas
            </p>
          </div>

          {/* Interests */}
          <div className="space-y-2">
            <Label htmlFor="interests">Interests</Label>
            <Input
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={(e) => handleArrayChange("interests", e.target.value)}
              placeholder="e.g., Technology, Sports, Music"
            />
            <p className="text-xs text-muted-foreground">
              Separate multiple interests with commas
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
