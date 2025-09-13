import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Linkedin, Calendar, Users, Globe, GraduationCap } from "lucide-react"
import Link from "next/link"

interface Member {
  id: number
  name: string
  country: string
  flag: string
  role: string
  major: string
  year: string
  email: string
  linkedin: string
  bio: string
  avatar: string
  joinedDate: string
  committees: string[]
  languages: string[]
  interests: string[]
}

interface MemberCardProps {
  member: Member
}

export function MemberCard({ member }: MemberCardProps) {
  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "President":
      case "Vice President":
        return "default"
      case "Secretary":
      case "Treasurer":
        return "secondary"
      case "Committee Chair":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
            <AvatarFallback className="text-lg">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground text-balance">{member.name}</h3>
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Globe className="mr-1 h-4 w-4" />
            <span className="mr-1">{member.flag}</span>
            {member.country}
          </div>
          <Badge variant={getRoleBadgeVariant(member.role)} className="text-xs">
            {member.role}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Academic Info */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>{member.major}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-2 h-4 w-4" />
            <span>{member.year}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Joined {formatJoinDate(member.joinedDate)}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground text-pretty line-clamp-3">{member.bio}</p>

        {/* Committees */}
        {member.committees.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-foreground mb-2">Committees</h4>
            <div className="flex flex-wrap gap-1">
              {member.committees.slice(0, 2).map((committee, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {committee}
                </Badge>
              ))}
              {member.committees.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{member.committees.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Languages */}
        <div>
          <h4 className="text-xs font-medium text-foreground mb-2">Languages</h4>
          <div className="flex flex-wrap gap-1">
            {member.languages.slice(0, 3).map((language, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {language}
              </Badge>
            ))}
            {member.languages.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{member.languages.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h4 className="text-xs font-medium text-foreground mb-2">Interests</h4>
          <div className="flex flex-wrap gap-1">
            {member.interests.slice(0, 3).map((interest, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {interest}
              </Badge>
            ))}
            {member.interests.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{member.interests.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Contact Actions */}
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
            <Link href={`mailto:${member.email}`}>
              <Mail className="mr-1 h-4 w-4" />
              Email
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-1 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
