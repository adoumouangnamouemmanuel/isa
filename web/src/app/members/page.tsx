import { MembersHeader } from "@/components/members/members-header"
import { MembersFilter } from "@/components/members/members-filter"
import { MembersList } from "@/components/members/members-list"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-background">
      <MembersHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MembersFilter />
        <MembersList />
      </div>
    </div>
  )
}
