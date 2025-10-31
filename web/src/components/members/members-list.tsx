"use client";

import { MemberCard } from "@/components/members/member-card";
import { MemberProfileModal } from "@/components/members/member-profile-modal";
import { useMembersFilter } from "@/contexts/members-filter-context";
import { useMemo, useState } from "react";

// ISA Executive Members Data
const allMembers = [
  {
    id: 1,
    name: "Emmanuel Adoum",
    country: "Chad",
    flag: "TD",
    role: "President",
    major: "B.Sc. Computer Engineering",
    year: "2027",
    email: "emmanuel.adoum@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/emmanueladoum",
    bio: "Leading the International Students Association with a vision to create an inclusive community where every international student feels at home. Passionate about technology, leadership, and cross-cultural collaboration.",
    avatar: "/emmanuel-jpg.jpg",
    joinedDate: "2023-09-01",
    committees: ["Executive Board", "Leadership Team"],
    languages: ["French", "Arabic", "English"],
    interests: ["Technology", "Leadership", "Community Building"],
  },
  {
    id: 2,
    name: "Suzie Youyou",
    country: "Cameroon",
    flag: "CM",
    role: "Vice President",
    major: "B.Sc. Computer Science",
    year: "2027",
    email: "agatha.youyou@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/suzie-youyou",
    bio: "Supporting the ISA vision as Vice President, focusing on member engagement and academic excellence. Dedicated to ensuring every international student thrives at Ashesi.",
    avatar: "/placeholder.svg?height=400&width=400",
    joinedDate: "2023-09-01",
    committees: ["Executive Board", "Leadership Team", "Academic Support"],
    languages: ["French", "English"],
    interests: ["Computer Science", "Education", "Mentorship"],
  },
  {
    id: 3,
    name: "Favour Amourzang",
    country: "Cameroon",
    flag: "CM",
    role: "Secretary General",
    major: "B.Sc. Computer Science",
    year: "2027",
    email: "favour.amourzang@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/favour-amourzang-fri-fon",
    bio: "Managing ISA communications and documentation with precision and care. Ensuring smooth operations and effective coordination across all ISA activities.",
    avatar: "/placeholder.svg?height=400&width=400",
    joinedDate: "2023-09-01",
    committees: ["Executive Board", "Communications"],
    languages: ["English", "French"],
    interests: ["Technology", "Writing", "Organization"],
  },
  {
    id: 4,
    name: "Adelard Borauzima",
    country: "DR Congo",
    flag: "CD",
    role: "Treasurer",
    major: "B.Sc. Computer Science",
    year: "2027",
    email: "borauzima.adelard@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/borauzima-adelard-a6875b2ab",
    bio: "Managing ISA finances with transparency and accountability. Ensuring every member has access to the resources they need for a successful university experience.",
    avatar: "/executives_pictures/Adelard.jpg",
    joinedDate: "2023-09-01",
    committees: ["Executive Board", "Finance Committee"],
    languages: ["French", "Lingala", "English"],
    interests: ["Finance", "Technology", "Community Service"],
  },
  {
    id: 5,
    name: "Kur Malual Majok",
    country: "South Sudan",
    flag: "SS",
    role: "Public Relations Officer",
    major: "B.Sc. Computer Science",
    year: "2027",
    email: "kur.malual@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/kur-malual",
    bio: "Building ISA's brand and fostering relationships with the wider Ashesi community. Passionate about storytelling and showcasing the vibrant international student community.",
    avatar: "/placeholder.svg?height=400&width=400",
    joinedDate: "2023-09-01",
    committees: ["Executive Board", "Communications", "Marketing"],
    languages: ["English", "Dinka"],
    interests: ["Communications", "Media", "Photography"],
  },
  {
    id: 6,
    name: "Bachira Mamane",
    country: "Niger",
    flag: "NE",
    role: "Event Organizer",
    major: "B.Sc. Business Administration",
    year: "2027",
    email: "bachira.niandou@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/mamane-niandou-bachira",
    bio: "Creating memorable experiences that bring our community together. From cultural nights to social gatherings, ensuring every ISA event is unforgettable.",
    avatar: "/executives_pictures/bachira.jpg",
    joinedDate: "2023-09-01",
    committees: ["Executive Board", "Events Committee"],
    languages: ["French", "Hausa", "English"],
    interests: ["Event Planning", "Business", "Culture"],
  },
  {
    id: 7,
    name: "Abraham Aguer",
    country: "South Sudan",
    flag: "SS",
    role: "East Africa Representative",
    major: "B.Sc. Computer Science",
    year: "2027",
    email: "abraham.garangatem@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/abraham-aguer-garang-atem",
    bio: "Representing East African students and ensuring their voices are heard. Committed to fostering unity and celebrating the rich diversity of our region.",
    avatar: "/executives_pictures/abraham.jpg",
    joinedDate: "2023-09-01",
    committees: ["Regional Representatives", "Cultural Committee"],
    languages: ["English", "Dinka", "Nuer"],
    interests: ["Regional Development", "Culture", "Technology"],
  },
  {
    id: 8,
    name: "Raicha Adamou Ibrahim",
    country: "Niger",
    flag: "NE",
    role: "West Africa Representative",
    major: "B.Sc. Management Information Systems",
    year: "2027",
    email: "raicha.ibrahim@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/raicha-adamou",
    bio: "Championing West African students and promoting our region's vibrant culture. Building bridges and creating opportunities for collaboration across ISA.",
    avatar: "/placeholder.svg?height=400&width=400",
    joinedDate: "2023-09-01",
    committees: ["Regional Representatives", "Community Outreach"],
    languages: ["French", "Hausa", "English"],
    interests: ["Information Systems", "Culture", "Community"],
  },
  {
    id: 9,
    name: "Brenda Ngie Nyah",
    country: "Cameroon",
    flag: "CM",
    role: "Central Africa Representative",
    major: "B.Sc. Management Information Systems",
    year: "2027",
    email: "brenda.nyah@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/brenda-ngie-nyah-a7467525b",
    bio: "Representing Central African students with pride and dedication. Ensuring our unique perspectives and experiences enrich the ISA community.",
    avatar: "/placeholder.svg?height=400&width=400",
    joinedDate: "2023-09-01",
    committees: ["Regional Representatives", "Diversity & Inclusion"],
    languages: ["English", "French"],
    interests: ["Technology", "Regional Advocacy", "Networking"],
  },
  {
    id: 10,
    name: "Hillary Kiduhu Ndeda",
    country: "Kenya",
    flag: "KE",
    role: "Graduate Representative",
    major: "M.Sc. Mechatronic Engineering",
    year: "2026",
    email: "hillary.ndeda@ashesi.edu.gh",
    linkedin: "https://www.linkedin.com/in/hillary-kiduhu-a1435b158",
    bio: "Bridging the gap between undergraduate and graduate international students. Bringing a wealth of experience and mentorship to the ISA community.",
    avatar: "/placeholder.svg?height=400&width=400",
    joinedDate: "2023-09-01",
    committees: ["Regional Representatives", "Graduate Affairs", "Mentorship"],
    languages: ["English", "Swahili"],
    interests: ["Engineering", "Mentorship", "Innovation"],
  },
];

export function MembersList() {
  const {
    searchQuery,
    selectedRole,
    selectedMajor,
    selectedYear,
    selectedCountry,
  } = useMembersFilter();

  const [selectedMember, setSelectedMember] = useState<
    (typeof allMembers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter members based on all criteria
  const filteredMembers = useMemo(() => {
    return allMembers.filter((member) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          member.name.toLowerCase().includes(query) ||
          member.country.toLowerCase().includes(query) ||
          member.major.toLowerCase().includes(query) ||
          member.bio.toLowerCase().includes(query) ||
          member.interests.some((interest) =>
            interest.toLowerCase().includes(query)
          ) ||
          member.languages.some((lang) => lang.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Role filter
      if (selectedRole !== "All Roles" && member.role !== selectedRole) {
        return false;
      }

      // Major filter
      if (selectedMajor !== "All Majors" && member.major !== selectedMajor) {
        return false;
      }

      // Year filter
      if (selectedYear !== "All Years" && member.year !== selectedYear) {
        return false;
      }

      // Country filter
      if (
        selectedCountry !== "All Countries" &&
        member.country !== selectedCountry
      ) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedRole, selectedMajor, selectedYear, selectedCountry]);

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/50">
        <div>
          <h2 className="text-3xl font-black text-foreground mb-2">
            Members Directory
          </h2>
          <p className="text-sm text-muted-foreground">
            {filteredMembers.length === allMembers.length ? (
              <>
                Connect with {filteredMembers.length} amazing international
                students from around the world
              </>
            ) : (
              <>
                Showing {filteredMembers.length} of {allMembers.length} members
              </>
            )}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              {filteredMembers.length} Members
            </span>
          </div>
        </div>
      </div>

      {/* Members Grid with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member, index) => (
          <div
            key={member.id}
            className="animate-in fade-in slide-in-from-bottom-4"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "backwards",
            }}
          >
            <MemberCard
              member={member}
              onViewProfile={() => {
                setSelectedMember(member);
                setIsModalOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Empty State Message */}
      {filteredMembers.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            No members found
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Try adjusting your filters or search query to find the members
            you&apos;re looking for.
          </p>
        </div>
      )}

      {/* Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
