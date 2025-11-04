"use client";

import { type Member } from "@/app/actions/members";
import { MemberCard } from "@/components/members/member-card";
import { MemberProfileModal } from "@/components/members/member-profile-modal";
import { useMembersFilter } from "@/contexts/members-filter-context";
import { useMemo, useState } from "react";

interface DatabaseMembersListProps {
  members: Member[];
}

export function DatabaseMembersList({ members }: DatabaseMembersListProps) {
  const {
    searchQuery,
    selectedRole,
    selectedMajor,
    selectedYear,
    selectedCountry,
  } = useMembersFilter();
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMember = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Filter members based on active filters
  const filteredMembers = useMemo(() => {
    // First, filter out any null/undefined members
    const validMembers = members.filter((member) => member != null);

    return validMembers.filter((member) => {
      // Role filter
      if (
        selectedRole !== "All Roles" &&
        (member.role || "Member") !== selectedRole
      ) {
        return false;
      }

      // Major filter
      if (
        selectedMajor !== "All Majors" &&
        (member.major || "N/A") !== selectedMajor
      ) {
        return false;
      }

      // Year filter
      if (
        selectedYear !== "All Years" &&
        (member.year || "N/A") !== selectedYear
      ) {
        return false;
      }

      // Country filter
      if (
        selectedCountry !== "All Countries" &&
        (member.country || "Unknown") !== selectedCountry
      ) {
        return false;
      }

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = member.name?.toLowerCase().includes(query) || false;
        const matchesMajor =
          member.major?.toLowerCase().includes(query) || false;
        const matchesCountry =
          member.country?.toLowerCase().includes(query) || false;
        const matchesRole = member.role?.toLowerCase().includes(query) || false;

        if (!matchesName && !matchesMajor && !matchesCountry && !matchesRole) {
          return false;
        }
      }

      return true;
    });
  }, [
    members,
    searchQuery,
    selectedRole,
    selectedMajor,
    selectedYear,
    selectedCountry,
  ]);

  if (filteredMembers.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
          <span className="text-3xl">👥</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No members found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredMembers.map((member, index) => (
          <div
            key={member.id}
            style={{ animationDelay: `${index * 50}ms` }}
            className="animate-fade-in-up"
          >
            <MemberCard member={member} onViewProfile={handleViewMember} />
          </div>
        ))}
      </div>

      {/* Member Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
