import { EventCard } from "@/components/events/event-card"

// Mock data for events
const events = [
  {
    id: 1,
    title: "International Food Festival",
    date: "2024-03-15",
    time: "6:00 PM - 9:00 PM",
    location: "Student Center Plaza",
    category: "Cultural",
    description: "Taste authentic dishes from around the world prepared by our international students.",
    attendees: 120,
    maxAttendees: 200,
    image: "/international-food-festival.jpg",
    isUpcoming: true,
    organizer: "ISA Cultural Committee",
    tags: ["Food", "Culture", "Community"],
  },
  {
    id: 2,
    title: "Career Workshop: Networking in the US",
    date: "2024-03-20",
    time: "2:00 PM - 4:00 PM",
    location: "Business Building, Room 201",
    category: "Professional",
    description: "Learn effective networking strategies and build professional connections.",
    attendees: 45,
    maxAttendees: 60,
    image: "/career-networking-workshop.jpg",
    isUpcoming: true,
    organizer: "ISA Professional Development",
    tags: ["Career", "Networking", "Professional"],
  },
  {
    id: 3,
    title: "Cultural Night: Celebrating Holi",
    date: "2024-03-25",
    time: "7:00 PM - 10:00 PM",
    location: "University Auditorium",
    category: "Cultural",
    description: "Join us for a vibrant celebration of the Hindu festival of colors.",
    attendees: 200,
    maxAttendees: 300,
    image: "/holi-celebration.jpg",
    isUpcoming: true,
    organizer: "ISA Cultural Committee",
    tags: ["Holi", "Festival", "Culture", "India"],
  },
  {
    id: 4,
    title: "Study Abroad Information Session",
    date: "2024-04-02",
    time: "3:00 PM - 5:00 PM",
    location: "International Center",
    category: "Academic",
    description: "Learn about study abroad opportunities and exchange programs.",
    attendees: 35,
    maxAttendees: 50,
    image: "/study-abroad-session.jpg",
    isUpcoming: true,
    organizer: "ISA Academic Committee",
    tags: ["Study Abroad", "Exchange", "Academic"],
  },
  {
    id: 5,
    title: "International Soccer Tournament",
    date: "2024-04-10",
    time: "10:00 AM - 4:00 PM",
    location: "University Sports Complex",
    category: "Sports",
    description: "Compete in teams representing different countries in our annual soccer tournament.",
    attendees: 80,
    maxAttendees: 100,
    image: "/soccer-tournament.jpg",
    isUpcoming: true,
    organizer: "ISA Sports Committee",
    tags: ["Soccer", "Tournament", "Sports", "Competition"],
  },
  {
    id: 6,
    title: "Chinese New Year Celebration",
    date: "2024-02-10",
    time: "6:00 PM - 9:00 PM",
    location: "Student Center Ballroom",
    category: "Cultural",
    description: "Celebrated the Year of the Dragon with traditional performances and food.",
    attendees: 250,
    maxAttendees: 300,
    image: "/chinese-new-year.jpg",
    isUpcoming: false,
    organizer: "ISA Cultural Committee",
    tags: ["Chinese New Year", "Culture", "Performance", "China"],
  },
  {
    id: 7,
    title: "Resume Building Workshop",
    date: "2024-02-15",
    time: "1:00 PM - 3:00 PM",
    location: "Career Services Center",
    category: "Professional",
    description: "Learned how to create compelling resumes for the US job market.",
    attendees: 40,
    maxAttendees: 50,
    image: "/resume-workshop.jpg",
    isUpcoming: false,
    organizer: "ISA Professional Development",
    tags: ["Resume", "Career", "Workshop", "Professional"],
  },
  {
    id: 8,
    title: "International Coffee Hour",
    date: "2024-02-20",
    time: "4:00 PM - 6:00 PM",
    location: "Student Lounge",
    category: "Social",
    description: "Enjoyed coffee and conversations with students from around the world.",
    attendees: 60,
    maxAttendees: 80,
    image: "/coffee-hour.jpg",
    isUpcoming: false,
    organizer: "ISA Social Committee",
    tags: ["Coffee", "Social", "Networking", "Casual"],
  },
]

export function EventsList() {
  const upcomingEvents = events.filter((event) => event.isUpcoming)
  const pastEvents = events.filter((event) => !event.isUpcoming)

  return (
    <div className="space-y-12">
      {/* Upcoming Events */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
          <span className="text-sm text-muted-foreground">{upcomingEvents.length} events</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Past Events</h2>
          <span className="text-sm text-muted-foreground">{pastEvents.length} events</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}
